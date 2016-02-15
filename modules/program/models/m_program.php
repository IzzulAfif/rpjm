<?php (defined('BASEPATH')) OR exit('No direct script access allowed');
/*
|---------------------------------
| Ardian Webi Kirda 
| Copyright Ardian Webi Kira 
| Created By ian  18-01-2015
| Supported by BAPPEDA BANYUMAS
|---------------------------------
*/
class M_program extends CI_Model{
	private $connectionName;
	public function __construct(){
		parent::__construct();
	}
	public function setConnection($connectionName){
		$this->connectionName = $connectionName;
	}
	public function getConnection(){
		return $this->load->database($this->connectionName, TRUE);
	}

    /* =================== GET UNIQUE KODE PROGRAM ================ */
    function getUnikKode($table) {
        $this->setConnection('dbsystem');
        $db = $this->getConnection(); 
        $q = $db->query("SELECT MAX(RIGHT(kode_programrpjm,4)) AS kode FROM ".$table); $kd = ""; 
        
        //kode awal 
        if($q->num_rows()>0){ //jika data ada 

            foreach($q->result() as $k){ 
                //string kode diset ke integer dan ditambahkan 1 dari kode terakhir
                $tmp = ((int)$k->kode)+1;
                
                //kode ambil 4 karakter terakhir 
                $kd = sprintf("%04s", $tmp); 
            } 
        }else{ 
            //jika data kosong diset ke kode awal 
            $kd = "001"; 
        } 

        //karakter depan kodenya
        $kar = "PG";  
        
        //gabungkan string dengan kode yang telah dibuat tadi 
        return $kar.$kd; 
    } 

    public function getGridLookupBidang($limit, $offset){
        $this->setConnection('dbsystem');
        $db = $this->getConnection();

        $db->select("
            u.id_bidang AS id,
            u.kode_bidangrpjm AS kode_bidangrpjm,
            u.nama_bidangrpjm AS nama_bidangrpjm,
            u.no_bidangrpjm AS no_bidangrpjm,
            u.nama_urusan AS nama_urusan", FALSE);
        $db->from('view_bidang u');
        $db->order_by('u.kode_bidangrpjm');
        $db->limit($offset, $limit);
        $query = $db->get();
        return $query;
    }

    public function countGridLookupBidang(){
        $this->setConnection('dbsystem');
        $db = $this->getConnection();

         $db->select("
            u.id_bidang AS id,
            u.kode_bidangrpjm AS kode_bidangrpjm,
            u.nama_bidangrpjm AS nama_bidangrpjm,
            u.no_bidangrpjm AS no_bidangrpjm,
            u.nama_urusan AS nama_urusan", FALSE);
        $db->from('view_bidang u');
        $db->order_by('u.kode_bidangrpjm');
        $query = $db->get();
        return $query;
    }

    public function countGridSubPeriode(){
        $this->setConnection('dbsystem');
        $db = $this->getConnection();

         $db->select("
            u.id_subperiode AS id,
            u.kode_subperiode AS kode_subperiode,
            u.subperiode AS subperiode,
            u.kode_periode AS kode_periode,
            u.status AS status", FALSE);
        $db->from('tm_subperiode u');
        $db->where('u.status =','Aktif');
        $db->order_by('u.kode_subperiode');
        $query = $db->get();
        return $query;
    }

	public function getGridProgram($limit, $offset, $value){
		$this->setConnection('dbsystem');
		$db = $this->getConnection();

		$db->select("
			u.id_programrpjm AS id,
			u.kode_programrpjm AS kode_programrpjm,
			u.kode_bidangrpjm AS kode_bidangrpjm,
            u.nama_bidangrpjm AS nama_bidangrpjm,
			u.programrpjm AS programrpjm,
            u.no_urut AS no_urut,
            u.kode_subperiode AS kode_subperiode", FALSE);
        $db->from('view_program u');
        $db->where('u.kode_bidangrpjm', $value);
        $db->order_by('u.no_urut', 'ASC');
        $db->limit($offset, $limit);
        $query = $db->get();
        return $query;
	}

	public function countGridProgram($value){
		$this->setConnection('dbsystem');
		$db = $this->getConnection();

		$db->select("
            u.id_programrpjm AS id,
            u.kode_programrpjm AS kode_programrpjm,
            u.kode_bidangrpjm AS kode_bidangrpjm,
            u.nama_bidangrpjm AS nama_bidangrpjm,
            u.programrpjm AS programrpjm,
            u.no_urut AS no_urut,
            u.kode_subperiode AS kode_subperiode", FALSE);
        $db->from('view_program u');
        $db->where('u.kode_bidangrpjm', $value);
        $db->order_by('u.no_urut', 'ASC');
        $query = $db->get();
        return $query;
	}

    public function cekRelasi($kode_programrpjm){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();
        return $db->select('COUNT(*) AS kode_programrpjm', FALSE)
                    ->from('tm_kegiatanrpjm')
                    ->where('kode_programrpjm',$kode_programrpjm)
                    ->get()->row()->kode_programrpjm;
    }

    public function cekData($kode_programrpjm, $no_urut){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();
    	return $db->select('COUNT(*) AS kode_programrpjm', FALSE)
                    ->from('tm_programrpjm')
                    ->where('kode_programrpjm',$kode_programrpjm)
                    ->where('no_urut',$no_urut)
                    ->get()->row()->kode_programrpjm;
    }

    public function saveProgram($kode_bidangrpjm, $kode_programrpjm, $programrpjm, $no_urut, $kode_subperiode){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();
        $db->set('kode_bidangrpjm', $kode_bidangrpjm);
        $db->set('kode_programrpjm', $kode_programrpjm);
        $db->set('programrpjm', $programrpjm);
        $db->set('no_urut', $no_urut);
        $db->set('kode_subperiode', $kode_subperiode);
        $db->insert('tm_programrpjm');
    }

    public function updateProgram($id, $kode_bidangrpjm, $kode_programrpjm, $programrpjm, $no_urut, $kode_subperiode){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();
        
        $data = array(
        	'kode_bidangrpjm'   => $kode_bidangrpjm,
        	'programrpjm'       => $programrpjm,
            'no_urut'           => $no_urut,
            'kode_subperiode'   => $kode_subperiode
        );
        $db->where('kode_programrpjm', $kode_programrpjm);
        $db->update('tm_programrpjm', $data);
    }

    public function deleteProgram($kode_programrpjm){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();
        $db->where('kode_programrpjm',$kode_programrpjm);
        $db->delete('tm_programrpjm');
    }

    public function searchProgram($name){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();

       $db->select("
            u.id_programrpjm AS id,
            u.kode_programrpjm AS kode_programrpjm,
            u.kode_bidangrpjm AS kode_bidangrpjm,
            u.programrpjm AS programrpjm,
            u.kode_subperiode AS kode_subperiode", FALSE);
        $db->from('tm_programrpjm u');
        $db->order_by('u.kode_programrpjm');
        $db->like('LOWER(u.kode_programrpjm)', strtolower($name));
        $db->or_like('LOWER(u.programrpjm)', strtolower($name));
        $query = $db->get();
        return $query;
    }

    public function searchLookupBidang($name){
        $this->setConnection('dbsystem');
        $db   = $this->getConnection();

        $db->select("
            u.id_bidang AS id,
            u.kode_bidangrpjm AS kode_bidangrpjm,
            u.nama_bidangrpjm AS nama_bidangrpjm,
            u.no_bidangrpjm AS no_bidangrpjm,
            u.nama_urusan AS nama_urusan", FALSE);
        $db->from('view_bidang u');
        $db->order_by('u.kode_bidangrpjm');
        $db->like('LOWER(u.nama_bidangrpjm)', strtolower($name));
        $db->or_like('LOWER(u.nama_urusan)', strtolower($name));
        $query = $db->get();
        return $query;
    }

       /* =================== DETAIL DATA PROGRAM ===================== */
    public function cekProgramFilter($value){
        $this->setConnection('dbsystem');
        $db = $this->getConnection();
        return $db->select('COUNT(*) AS id', FALSE)->from('view_program')
                    ->where('kode_bidangrpjm',$value)
                    ->get()->row()->id;   
    }

    public function getProgramFilter($value){
        $this->setConnection('dbsystem');
        $db = $this->getConnection();
        $db->select("
            u.id_programrpjm AS id,
            u.kode_programrpjm AS kode_programrpjm,
            u.kode_bidangrpjm AS kode_bidangrpjm,
            u.nama_bidangrpjm AS nama_bidangrpjm,
            u.programrpjm AS programrpjm,
            u.no_urut AS no_urut,
            u.kode_subperiode AS kode_subperiode", FALSE);
        $db->from('view_program u');
        $db->where('kode_bidangrpjm', $value);
        $db->order_by('u.no_urut', 'ASC');
        $query = $db->get();
        return $query;
    }
}