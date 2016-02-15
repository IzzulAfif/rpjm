<?php (defined('BASEPATH')) OR exit('No direct script access allowed');
/*
|---------------------------------
| Ardian Webi Kirda 
| Copyright Ardian Webi Kira 
| Created By ian  18-01-2015
| Supported by BAPPEDA BANYUMAS
|---------------------------------
*/
class M_bidangurusanwajib extends CI_Model{
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

	public function cekRelasi($kode_bidangrpjm){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();
        return $db->select('COUNT(*) AS kode_bidangrpjm', FALSE)->from('tm_programrpjm')->where('kode_bidangrpjm',$kode_bidangrpjm)->get()->row()->kode_bidangrpjm;
    }

    public function cekData($no_bidangrpjm, $kode_suburusan){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();
    	return $db->select('COUNT(*) AS no_bidangrpjm', FALSE)
                    ->from('tm_bidangrpjm')
                    ->where('no_bidangrpjm',$no_bidangrpjm)
                    ->where('kode_suburusan',$kode_suburusan)
                    ->get()->row()->no_bidangrpjm;
    }

    public function saveBidangUrusanWajib($kode_suburusan, $kode_bidangrpjm, $nama_bidangrpjm, $no_bidangrpjm){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();
        
        $db->set('kode_suburusan', $kode_suburusan);
        $db->set('kode_urusan', 'UU001');
        $db->set('kode_bidangrpjm', $kode_bidangrpjm);
        $db->set('nama_bidangrpjm', $nama_bidangrpjm);
        $db->set('no_bidangrpjm', $no_bidangrpjm);
        $db->insert('tm_bidangrpjm');
    }

    public function updateBidangUrusanWajib($kode_suburusan, $kode_bidangrpjm, $nama_bidangrpjm, $no_bidangrpjm){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();
        
        $data = array(
        	'kode_suburusan'   => $kode_suburusan,
        	'nama_bidangrpjm'   => $nama_bidangrpjm,
            'no_bidangrpjm'     => $no_bidangrpjm
        );
        $db->where('kode_bidangrpjm', $kode_bidangrpjm);
        $db->update('tm_bidangrpjm', $data);
    }

    public function deleteBidangUrusanWajib($kode_bidangrpjm){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();
        $db->where('kode_bidangrpjm',$kode_bidangrpjm);
        $db->delete('tm_bidangrpjm');
    }

    public function searchBidangUrusanWajib($name, $kode_suburusan){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();

        $db->select("
            u.id_bidang AS id,
            u.kode_suburusan AS kode_suburusan,
            u.kode_bidangrpjm AS kode_bidangrpjm,
            u.nama_bidangrpjm AS nama_bidangrpjm,
            u.no_bidangrpjm AS no_bidangrpjm", FALSE);
        $db->from('tm_bidangrpjm u');
        $db->like('LOWER(u.nama_bidangrpjm)', strtolower($name));
        $db->like('LOWER(u.kode_suburusan)', strtolower($kode_suburusan));
        $db->or_like('LOWER(u.no_bidangrpjm)', strtolower($name));
        $query = $db->get();
        return $query;
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
        $db->like('LOWER(u.kode_suburusan)', strtolower($name));
        $db->or_like('LOWER(u.nama_suburusan)', strtolower($name));
        $query = $db->get();
        return $query;
    }

    /* =================== DETAIL DATA BIDANG URUSAN WAJIB ===================== */
    public function cekBidangUrusanWajibDetail($kode_suburusan){
        $this->setConnection('dbsystem');
        $db = $this->getConnection();
        return $db->select('COUNT(*) AS id', FALSE)->from('tm_bidangrpjm')
                    ->where('kode_suburusan',$kode_suburusan)
                    ->get()->row()->id;   
    }

    public function getBidangUrusanWajibDetail($kode_suburusan, $kode_urusan){
        $this->setConnection('dbsystem');
        $db = $this->getConnection();

        $db->select("
            u.id_bidang AS id,
            u.kode_suburusan AS kode_suburusan,
            u.kode_bidangrpjm AS kode_bidangrpjm,
            u.nama_bidangrpjm AS nama_bidangrpjm,
            u.no_bidangrpjm AS no_bidangrpjm", FALSE);
        $db->from('tm_bidangrpjm u');
        $db->where('kode_suburusan', $kode_suburusan);
        $db->where('kode_urusan =',$kode_urusan);
        $db->order_by('u.id_bidang', 'ASC');
        $query = $db->get();
        return $query;
    }
}