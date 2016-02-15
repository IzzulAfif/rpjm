<?php (defined('BASEPATH')) OR exit('No direct script access allowed');
/*
|---------------------------------
| Ardian Webi Kirda 
| Copyright Ardian Webi Kira 
| Created By ian  18-01-2015
| Supported by BAPPEDA BANYUMAS
|---------------------------------
*/
class M_urusan extends CI_Model{
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

    /* =================== GET UNIQUE URUSAN DETAIL ================ */
    function getUnikKode($table) {
        $this->setConnection('dbsystem');
        $db = $this->getConnection(); 
        $q = $db->query("SELECT MAX(RIGHT(kode_urusan,3)) AS kode FROM ".$table); $kd = ""; 
        
        //kode awal 
        if($q->num_rows()>0){ //jika data ada 

            foreach($q->result() as $k){ 
                //string kode diset ke integer dan ditambahkan 1 dari kode terakhir
                $tmp = ((int)$k->kode)+1;
                
                //Set Angka 0 sebanyak N karakter ynga dibutuhkan 
                $kd = sprintf("%03s", $tmp); 
            } 
        }else{ 
            //jika data kosong diset ke kode awal 
            $kd = "001"; 
        } 

        //karakter depan kodenya
        $kar = "UU";  
        
        //gabungkan string dengan kode yang telah dibuat tadi 
        return $kar.$kd; 
    } 

	public function getGridUrusan($limit, $offset){
		$this->setConnection('dbsystem');
		$db = $this->getConnection();

		$db->select("
			u.id_urusan AS id,
			u.kode_urusan_uu AS kode_urusan_uu,
			u.kode_urusan AS kode_urusan,
			u.nama_urusan AS nama_urusan,
            u.no_urusan AS no_urusan", FALSE);
        $db->from('tm_urusanrpjm u');
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
            u.kode_urusan_uu AS kode_urusan_uu,
            u.kode_urusan AS kode_urusan,
            u.nama_urusan AS nama_urusan,
            u.no_urusan AS no_urusan", FALSE);
        $db->from('tm_urusanrpjm u');
        $db->order_by('u.kode_urusan');
        $query = $db->get();
        return $query;
	}

    public function getGridUrusanPemerintah($limit, $offset){
        $this->setConnection('dbsystem');
        $db = $this->getConnection();

        $db->select("
            u.id_urusan_uu AS id,
            u.kode_urusan_uu AS kode_urusan_uu,
            u.nama_urusan_uu AS nama_urusan_uu,
            u.no_urusan_uu AS no_urusan_uu", FALSE);
        $db->from('tm_urusan_uu u');
        $db->order_by('u.kode_urusan_uu');
        $db->limit($offset, $limit);
        $query = $db->get();
        return $query;
    }

    public function countGridUrusanPemerintah(){
        $this->setConnection('dbsystem');
        $db = $this->getConnection();

        $db->select("
            u.id_urusan_uu AS id,
            u.kode_urusan_uu AS kode_urusan_uu,
            u.nama_urusan_uu AS nama_urusan_uu,
            u.no_urusan_uu AS no_urusan_uu", FALSE);
        $db->from('tm_urusan_uu u');
        $db->order_by('u.kode_urusan_uu');
        $query = $db->get();
        return $query;
    }

    public function cekRelasi($kode_urusan){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();
        return $db->select('COUNT(*) AS kode_urusan', FALSE)
            ->from('tm_bidangrpjm')
            ->where('kode_urusan',$kode_urusan)
            ->get()->row()->kode_urusan;
    }

    public function cekData($no_urusan, $kode_urusan_uu){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();
    	return $db->select('COUNT(*) AS no_urusan', FALSE)
            ->from('tm_urusanrpjm')
            ->where('no_urusan',$no_urusan)
            ->where('kode_urusan_uu',$kode_urusan_uu)->get()->row()->no_urusan;
    }

    public function saveUrusan($kode_urusan_uu, $kode_urusan, $nama_urusan, $no_urusan){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();
        $db->set('kode_urusan_uu', $kode_urusan_uu);
        $db->set('kode_urusan', $kode_urusan);
        $db->set('nama_urusan', $nama_urusan);
        $db->set('no_urusan', $no_urusan);
        $db->insert('tm_urusanrpjm');
    }

    public function updateUrusan($id, $kode_urusan_uu, $kode_urusan, $nama_urusan, $no_urusan){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();
        
        $data = array(
        	'kode_urusan_uu'          => $kode_urusan_uu,
        	'kode_urusan'   => $kode_urusan,
        	'nama_urusan'   => $nama_urusan,
            'no_urusan'     => $no_urusan
        );
        $db->where('id_urusan', $id);
        $db->update('tm_urusanrpjm', $data);
    }

    public function deleteUrusan($kode_urusan){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();
        $db->where('kode_urusan',$kode_urusan);
        $db->delete('tm_urusanrpjm');
    }

    public function searchUrusan($name){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();

        $db->select("
            u.id_urusan AS id,
            u.kode_urusan_uu AS kode_urusan_uu,
            u.kode_urusan AS kode_urusan,
            u.nama_urusan AS nama_urusan,
            u.no_urusan AS no_urusan", FALSE);
        $db->from('tm_urusanrpjm u');
        $db->like('LOWER(u.kode_urusan)', strtolower($name));
        $db->or_like('LOWER(u.nama_urusan)', strtolower($name));
        $db->or_like('LOWER(u.kode_urusan_uu)', strtolower($name));
        $query = $db->get();
        return $query;
    }

    /* =================== DETAIL DATA SUB PULIHAN ===================== */
    public function cekUrusanDetail($kode_urusan_uu){
        $this->setConnection('dbsystem');
        $db = $this->getConnection();
        return $db->select('COUNT(*) AS id', FALSE)->from('tm_urusanrpjm')
                    ->where('kode_urusan_uu',$kode_urusan_uu)
                    ->get()->row()->id;   
    }

    public function getUrusanDetail($kode_urusan_uu){
        $this->setConnection('dbsystem');
        $db = $this->getConnection();

       $db->select("
            u.id_urusan AS id,
            u.kode_urusan_uu AS kode_urusan_uu,
            u.kode_urusan AS kode_urusan,
            u.nama_urusan AS nama_urusan,
            u.no_urusan AS no_urusan", FALSE);
        $db->from('tm_urusanrpjm u');
        $db->where('kode_urusan_uu', $kode_urusan_uu);
        $db->order_by('u.id_urusan', 'ASC');
        $query = $db->get();
        return $query;
    }
}