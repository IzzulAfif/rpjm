<?php (defined('BASEPATH')) OR exit('No direct script access allowed');
/*
|---------------------------------
| Ardian Webi Kirda 
| Copyright Ardian Webi Kira 
| Created By ian  18-01-2015
| Supported by BAPPEDA BANYUMAS
|---------------------------------
*/
class M_jabatan extends CI_Model{
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

	public function getGridJabatan($limit, $offset){
		$this->setConnection('dbsystem');
		$db = $this->getConnection();

		$db->select("
			u.id_jabatan AS id,
			u.kode_jabatan AS kode_jabatan,
            u.jabatan AS jabatan", FALSE);
        $db->from('tm_jabatan u');
        $db->order_by('u.kode_jabatan');
        $db->limit($offset, $limit);
        $query = $db->get();
        return $query;
	}

	public function countGridJabatan(){
		$this->setConnection('dbsystem');
		$db = $this->getConnection();

		$db->select("
            u.id_jabatan AS id,
            u.kode_jabatan AS kode_jabatan,
            u.jabatan AS jabatan", FALSE);
        $db->from('tm_jabatan u');
        $db->order_by('u.kode_jabatan');
        $query = $db->get();
        return $query;
	}

    public function cekRelasi($kode_jabatan){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();
        return $db->select('COUNT(*) AS kode_jabatan', FALSE)->from('tm_kabupaten')->where('kode_jabatan',$kode_jabatan)->get()->row()->kode_jabatan;
    }

    public function cekData($kode_jabatan){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();
    	return $db->select('COUNT(*) AS kode_jabatan', FALSE)->from('tm_jabatan')->where('kode_jabatan',$kode_jabatan)->get()->row()->kode_jabatan;
    }

    public function saveJabatan($kode_jabatan, $jabatan){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();
        $db->set('kode_jabatan', $kode_jabatan);
        $db->set('jabatan', $jabatan);
        $db->insert('tm_jabatan');
    }

    public function updateJabatan($id, $kode_jabatan, $jabatan){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();
        
        $data = array(
        	'kode_jabatan'  => $kode_jabatan,
        	'jabatan'   => $jabatan
        );
        $db->where('id_jabatan', $id);
        $db->update('tm_jabatan', $data);
    }

    public function deleteJabatan($kode_jabatan){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();
        $db->where('kode_jabatan',$kode_jabatan);
        $db->delete('tm_jabatan');
    }

    public function searchJabatan($name){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();

        $db->select("
            u.id_jabatan AS id,
            u.kode_jabatan AS kode_jabatan,
            u.jabatan AS jabatan", FALSE);
        $db->from('tm_jabatan u');
        $db->like('LOWER(u.kode_jabatan)', strtolower($name));
        $db->or_like('LOWER(u.jabatan)', strtolower($name));
        $query = $db->get();
        return $query;
    }
}