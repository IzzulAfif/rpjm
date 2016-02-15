<?php (defined('BASEPATH')) OR exit('No direct script access allowed');
/*
|---------------------------------
| Ardian Webi Kirda 
| Copyright Ardian Webi Kira 
| Created By ian  18-01-2015
| Supported by BAPPEDA BANYUMAS
|---------------------------------
*/
class M_urusanpemerintah extends CI_Model{
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

    public function cekRelasi($kode_urusan_uu){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();
        return $db->select('COUNT(*) AS kode_urusan_uu', FALSE)->from('tm_pilihanurusan_uurpjm')->where('kode_urusan_uu',$kode_urusan_uu)->get()->row()->kode_urusan_uu;
    }

    public function cekData($kode_urusan_uu){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();
    	return $db->select('COUNT(*) AS kode_urusan_uu', FALSE)->from('tm_urusan_uu')->where('kode_urusan_uu',$kode_urusan_uu)->get()->row()->kode_urusan_uu;
    }

    public function saveUrusanPemerintah($kode_urusan_uu, $nama_urusan_uu, $no_urusan_uu){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();
        $db->set('kode_urusan_uu', $kode_urusan_uu);
        $db->set('nama_urusan_uu', $nama_urusan_uu);
        $db->set('no_urusan_uu', $no_urusan_uu);
        $db->insert('tm_urusan_uu');
    }

    public function updateUrusanPemerintah($id, $kode_urusan_uu, $nama_urusan_uu, $no_urusan_uu){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();
        
        $data = array(
        	'kode_urusan_uu'   => $kode_urusan_uu,
        	'nama_urusan_uu'   => $nama_urusan_uu,
            'no_urusan_uu'     => $no_urusan_uu
        );
        $db->where('id_urusan_uu', $id);
        $db->update('tm_urusan_uu', $data);
    }

    public function deleteUrusanPemerintah($kode_urusan_uu){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();
        $db->where('kode_urusan_uu',$kode_urusan_uu);
        $db->delete('tm_urusan_uu');
    }

    public function searchUrusanPemerintah($name){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();

        $db->select("
            u.id_urusan_uu AS id,
            u.kode_urusan_uu AS kode_urusan_uu,
            u.nama_urusan_uu AS nama_urusan_uu,
            u.no_urusan_uu AS no_urusan_uu", FALSE);
        $db->from('tm_urusan_uu u');
        $db->like('LOWER(u.kode_urusan_uu)', strtolower($name));
        $db->or_like('LOWER(u.nama_urusan_uu)', strtolower($name));
        $db->or_like('LOWER(u.no_urusan_uu)', strtolower($name));
        $query = $db->get();
        return $query;
    }
}