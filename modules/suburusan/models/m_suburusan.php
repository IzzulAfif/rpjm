<?php (defined('BASEPATH')) OR exit('No direct script access allowed');
/*
|---------------------------------
| Ardian Webi Kirda 
| Copyright Ardian Webi Kira 
| Created By ian  18-01-2015
| Supported by BAPPEDA BANYUMAS
|---------------------------------
*/
class M_suburusan extends CI_Model{
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
        $q = $db->query("SELECT MAX(RIGHT(kode_suburusan,3)) AS kode FROM ".$table); $kd = ""; 
        
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
        $kar = "SU";  
        
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

    /* ========== FUNGSI UNTUK MEGAMBIL DATA KE GRID MELALUI CU CONTROLLER ========== */
	public function getGridSubUrusan($limit, $offset){
		$this->setConnection('dbsystem');
		$db = $this->getConnection();

		$db->select("
			u.id_suburusan AS id,
			u.kode_suburusan AS kode_suburusan,
			u.kode_urusan AS kode_urusan,
			u.nama_suburusan AS nama_suburusan,
            u.no_suburusan AS no_suburusan", FALSE);
        $db->from('tm_suburusanrpjm u');
        $db->order_by('u.kode_suburusan');
        $db->limit($offset, $limit);
        $query = $db->get();
        return $query;
	}

	public function countGridSubUrusan(){
		$this->setConnection('dbsystem');
		$db = $this->getConnection();

		$db->select("
            u.id_suburusan AS id,
            u.kode_suburusan AS kode_suburusan,
            u.kode_urusan AS kode_urusan,
            u.nama_suburusan AS nama_suburusan,
            u.no_suburusan AS no_suburusan", FALSE);
        $db->from('tm_suburusanrpjm u');
        $db->order_by('u.kode_suburusan');
        $query = $db->get();
        return $query;
	}

    public function cekRelasi($kode_suburusan){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();
        return $db->select('COUNT(*) AS kode_suburusan', FALSE)->from('tm_bidangrpjm')->where('kode_suburusan',$kode_suburusan)->get()->row()->kode_suburusan;
    }

    public function cekData($no_suburusan){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();
    	return $db->select('COUNT(*) AS no_suburusan', FALSE)->from('tm_suburusanrpjm')->where('no_suburusan',$no_suburusan)->get()->row()->no_suburusan;
    }

    public function saveSubUrusan($kode_suburusan, $kode_urusan, $nama_suburusan, $no_suburusan){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();
        
        $db->set('kode_suburusan', $kode_suburusan);
        $db->set('kode_urusan', $kode_urusan);
        $db->set('nama_suburusan', $nama_suburusan);
        $db->set('no_suburusan', $no_suburusan);
        $db->insert('tm_suburusanrpjm');
    }

    public function updateSubUrusan($kode_suburusan, $kode_urusan, $nama_suburusan, $no_suburusan){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();
        
        $data = array(
        	'kode_urusan'      => $kode_urusan,
        	'nama_suburusan'   => $nama_suburusan,
            'no_suburusan'     => $no_suburusan
        );
        $db->where('kode_suburusan', $kode_suburusan);
        $db->update('tm_suburusanrpjm', $data);
    }

    public function deleteSubUrusan($kode_suburusan){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();
        $db->where('kode_suburusan',$kode_suburusan);
        $db->delete('tm_suburusanrpjm');
    }

    public function searchSubUrusan($name){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();

        $db->select("
            u.id_suburusan AS id,
            u.kode_suburusan AS kode_suburusan,
            u.kode_urusan AS kode_urusan,
            u.nama_suburusan AS nama_suburusan,
            u.no_suburusan AS no_suburusan", FALSE);
        $db->from('tm_suburusanrpjm u');
        $db->like('LOWER(u.nama_suburusan)', strtolower($name));
        $db->or_like('LOWER(u.no_suburusan)', strtolower($name));
        $query = $db->get();
        return $query;
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
    public function cekSubUrusan($kode_urusan){
        $this->setConnection('dbsystem');
        $db = $this->getConnection();
        return $db->select('COUNT(*) AS id', FALSE)->from('tm_suburusanrpjm')
                    ->where('kode_urusan',$kode_urusan)
                    ->get()->row()->id;   

    }

    public function getSubUrusan($kode_urusan){
        $this->setConnection('dbsystem');
        $db = $this->getConnection();

        $db->select("
            u.id_suburusan AS id,
            u.kode_suburusan AS kode_suburusan,
            u.kode_urusan AS kode_urusan,
            u.nama_suburusan AS nama_suburusan,
            u.no_suburusan AS no_suburusan", FALSE);
        $db->from('tm_suburusanrpjm u');
        $db->where('kode_urusan', $kode_urusan);
        $db->order_by('u.id_suburusan', 'ASC');
        $query = $db->get();
        return $query;
    }
}