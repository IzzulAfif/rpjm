<?php (defined('BASEPATH')) OR exit('No direct script access allowed');
/*
|---------------------------------
| Ardian Webi Kirda 
| Copyright Ardian Webi Kira 
| Created By ian  18-01-2015
| Supported by BAPPEDA BANYUMAS
|---------------------------------
*/
class M_bidangurusanpilihan extends CI_Model{
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

    /* =================== GET UNIQUE NO SUBPILIHAN URUSAN ================ */
    function getUnikKode($table) {
        $this->setConnection('dbsystem');
        $db = $this->getConnection(); 
        $q = $db->query("SELECT MAX(RIGHT(kode_bidangrpjm,3)) AS kode FROM ".$table); $kd = ""; 
        
        //kode awal 
        if($q->num_rows()>0){ //jika data ada 

            foreach($q->result() as $k){ 
                //string kode diset ke integer dan ditambahkan 1 dari kode terakhir
                $tmp = ((int)$k->kode)+1;
                
                //kode ambil 4 karakter terakhir 
                $kd = sprintf("%03s", $tmp); 
            } 
        }else{ 
            //jika data kosong diset ke kode awal 
            $kd = "001"; 
        } 

        //karakter depan kodenya
        $kar = "BD";  
        
        //gabungkan string dengan kode yang telah dibuat tadi 
        return $kar.$kd; 
    } 

    public function getGridUrusan($limit, $offset){
        $this->setConnection('dbsystem');
        $db = $this->getConnection();

        $db->select("
            u.id_urusan AS id,
            u.kode_urusan AS kode_urusan,
            u.kode_urusan_uu AS kode_urusan_uu,
            u.nama_urusan AS nama_urusan,
            u.no_urusan AS no_urusan", FALSE);
        $db->from('tm_urusanrpjm u');
        $db->where('kode_urusan','UU002');
        $db->order_by('u.kode_urusan');
        $db->limit($offset, $limit);
        $query = $db->get();
        return $query;
    }

    public function countGridUrusan(){
        $this->setConnection('dbsystem');
        $db = $this->getConnection();

        $db->select("
            u.id_urusan AS id,
            u.kode_urusan AS kode_urusan,
            u.kode_urusan_uu AS kode_urusan_uu,
            u.nama_urusan AS nama_urusan,
            u.no_urusan AS no_urusan", FALSE);
        $db->from('tm_urusanrpjm u');
        $db->where('kode_urusan','UU002');
        $db->order_by('u.kode_urusan');
        $query = $db->get();
        return $query;
    }

	public function cekRelasi($kode_bidangrpjm){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();
        return $db->select('COUNT(*) AS kode_bidangrpjm', FALSE)->from('tm_programrpjm')->where('kode_bidangrpjm',$kode_bidangrpjm)->get()->row()->kode_bidangrpjm;
    }

    public function cekData($no_bidangrpjm, $kode_urusan){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();
    	return $db->select('COUNT(*) AS no_bidangrpjm', FALSE)
                    ->from('tm_bidangrpjm')
                    ->where('no_bidangrpjm',$no_bidangrpjm)
                    ->where('kode_urusan',$kode_urusan)
                    ->get()->row()->no_bidangrpjm;
    }

    public function saveBidangUrusanPilihan($kode_urusan, $kode_bidangrpjm, $nama_bidangrpjm, $no_bidangrpjm){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();
        
        $db->set('kode_urusan', $kode_urusan);
        $db->set('kode_bidangrpjm', $kode_bidangrpjm);
        $db->set('nama_bidangrpjm', $nama_bidangrpjm);
        $db->set('no_bidangrpjm', $no_bidangrpjm);
        $db->insert('tm_bidangrpjm');
    }

    public function updateBidangUrusanPilihan($kode_urusan, $kode_bidangrpjm, $nama_bidangrpjm, $no_bidangrpjm){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();
        
        $data = array(
        	'kode_urusan'   => $kode_urusan,
        	'nama_bidangrpjm'   => $nama_bidangrpjm,
            'no_bidangrpjm'     => $no_bidangrpjm
        );
        $db->where('kode_bidangrpjm', $kode_bidangrpjm);
        $db->update('tm_bidangrpjm', $data);
    }

    public function deleteBidangUrusanPilihan($kode_bidangrpjm){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();
        $db->where('kode_bidangrpjm',$kode_bidangrpjm);
        $db->delete('tm_bidangrpjm');
    }

    public function searchBidangUrusanPilihan($name, $kode_urusan){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();

        $db->select("
            u.id_bidang AS id,
            u.kode_urusan AS kode_urusan,
            u.kode_bidangrpjm AS kode_bidangrpjm,
            u.nama_bidangrpjm AS nama_bidangrpjm,
            u.no_bidangrpjm AS no_bidangrpjm", FALSE);
        $db->from('tm_bidangrpjm u');
        $db->like('LOWER(u.nama_bidangrpjm)', strtolower($name));
        $db->like('LOWER(u.kode_urusan)', strtolower($kode_urusan));
        $db->or_like('LOWER(u.no_bidangrpjm)', strtolower($name));
        $query = $db->get();
        return $query;
    }

    public function searchUrusan($name){
        $this->setConnection('dbsystem');
        $db   = $this->getConnection();
        $db->select("
            u.id_urusan AS id,
            u.kode_urusan AS kode_urusan,
            u.kode_urusan_uu AS kode_urusan_uu,
            u.nama_urusan AS nama_urusan,
            u.no_urusan AS no_urusan", FALSE);
        $db->from('tm_urusanrpjm u');
        $db->like('LOWER(u.kode_urusan)', strtolower($name));
        $db->or_like('LOWER(u.nama_urusan)', strtolower($name));
        $query = $db->get();
        return $query;
    }

    /* =================== DETAIL DATA BIDANG URUSAN WAJIB ===================== */
    public function cekBidangUrusanPilihanDetail($kode_urusan){
        $this->setConnection('dbsystem');
        $db = $this->getConnection();
        return $db->select('COUNT(*) AS id', FALSE)->from('tm_bidangrpjm')
                    ->where('kode_urusan',$kode_urusan)
                    ->get()->row()->id;   
    }

    public function getBidangUrusanPilihanDetail($kode_urusan){
        $this->setConnection('dbsystem');
        $db = $this->getConnection();

        $db->select("
            u.id_bidang AS id,
            u.kode_urusan AS kode_urusan,
            u.kode_bidangrpjm AS kode_bidangrpjm,
            u.nama_bidangrpjm AS nama_bidangrpjm,
            u.no_bidangrpjm AS no_bidangrpjm", FALSE);
        $db->from('tm_bidangrpjm u');
        $db->where('kode_urusan', $kode_urusan);
        $db->where('kode_suburusan',NULL);
        $db->order_by('u.id_bidang', 'ASC');
        $query = $db->get();
        return $query;
    }
}