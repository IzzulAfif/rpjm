<?php (defined('BASEPATH')) OR exit('No direct script access allowed');
/*
|---------------------------------
| Ardian Webi Kirda 
| Copyright Ardian Webi Kira 
| Created By ian  18-01-2015
| Supported by BAPPEDA BANYUMAS
|---------------------------------
*/
class M_kecamatan extends CI_Model{
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

	public function getGridKecamatan($limit, $offset){
		$this->setConnection('dbsystem');
		$db = $this->getConnection();

		$db->select("
			u.id_kecamatan AS id,
			u.kode_kab AS kode_kab,
            u.kabupaten AS kabupaten,
            u.kode_kec AS kode_kec,
            u.kecamatan AS kecamatan", FALSE);
        $db->from('view_kecamatan u');
        $db->order_by('u.kode_kec');
        $db->limit($offset, $limit);
        $query = $db->get();
        return $query;
	}

	public function countGridKecamatan(){
		$this->setConnection('dbsystem');
		$db = $this->getConnection();

		$db->select("
            u.id_kecamatan AS id,
            u.kode_kab AS kode_kab,
            u.kabupaten AS kabupaten,
            u.kode_kec AS kode_kec,
            u.kecamatan AS kecamatan", FALSE);
        $db->from('view_kecamatan u');
        $db->order_by('u.kode_kec');
        $query = $db->get();
        return $query;
	}

    public function cekRelasi($kode_kec){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();
        return $db->select('COUNT(*) AS kode_kec', FALSE)->from('tm_kecamatan')->where('kode_kec',$kode_kec)->get()->row()->kode_kec;
    }

    public function cekData($kode_kec){
    	$this->setConnection('kode_kec');
        $db   = $this->getConnection();
    	return $db->select('COUNT(*) AS kode_kec', FALSE)->from('tm_kecamatan')->where('kode_kec',$kode_kec)->get()->row()->kode_kec;
    }

    public function saveKecamatan($kode_kab, $kode_kec, $kecamatan){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();
        $db->set('kode_kab', $kode_kab);
        $db->set('kode_kec', $kode_kec);
        $db->set('kecamatan', $kecamatan);
        $db->insert('tm_kecamatan');
    }

    public function updateKecamatan($id, $kode_kab, $kode_kec, $kecamatan){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();
        
        $data = array(
        	'kode_kab'  => $kode_kab,
            'kode_kec'  => $kode_kec,
        	'kecamatan' => $kecamatan
        );
        $db->where('id_kecamatan', $id);
        $db->update('tm_kecamatan', $data);
    }

    public function deleteKecamatan($kode_kec){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();
        $db->where('kode_kec',$kode_kec);
        $db->delete('tm_kecamatan');
    }

    public function searchKecamatan($name){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();

      $db->select("
            u.id_kecamatan AS id,
            u.kode_kab AS kode_kab,
            u.kabupaten AS kabupaten,
            u.kode_kec AS kode_kec,
            u.kecamatan AS kecamatan", FALSE);
        $db->from('view_kecamatan u');
        $db->like('LOWER(u.kode_kec)', strtolower($name));
        $db->or_like('LOWER(u.kecamatan)', strtolower($name));
        $query = $db->get();
        return $query;
    }

     public function filterKabupaten(){
        $this->setConnection('dbsystem');
        $db = $this->getConnection();

        $db->select("
            u.id_provinsi AS id,
            u.kode_kec AS kode_kec,
            u.provinsi AS provinsi", FALSE);
        $db->from('tm_provinsi u');
        $query = $db->get();
        return $query;
    }
}