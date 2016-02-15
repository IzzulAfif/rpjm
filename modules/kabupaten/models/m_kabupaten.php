<?php (defined('BASEPATH')) OR exit('No direct script access allowed');
/*
|---------------------------------
| Ardian Webi Kirda 
| Copyright Ardian Webi Kira 
| Created By ian  18-01-2015
| Supported by BAPPEDA BANYUMAS
|---------------------------------
*/
class M_kabupaten extends CI_Model{
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

	public function getGridKabupaten($limit, $offset){
		$this->setConnection('dbsystem');
		$db = $this->getConnection();

		$db->select("
			u.id_kabupaten AS id,
			u.kode_prov AS kode_prov,
            u.provinsi AS provinsi,
            u.kode_kab AS kode_kab,
            u.kabupaten AS kabupaten", FALSE);
        $db->from('view_kabupaten u');
        $db->order_by('u.kode_kab');
        $db->limit($offset, $limit);
        $query = $db->get();
        return $query;
	}

	public function countGridKabupaten(){
		$this->setConnection('dbsystem');
		$db = $this->getConnection();

		$db->select("
            u.id_kabupaten AS id,
            u.kode_prov AS kode_prov,
            u.provinsi AS provinsi,
            u.kode_kab AS kode_kab,
            u.kabupaten AS kabupaten", FALSE);
        $db->from('view_kabupaten u');
        $db->order_by('u.kode_kab');
        $query = $db->get();
        return $query;
	}

    public function cekRelasi($kode_kab){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();
        
        return $db->select('COUNT(*) AS kode_kab', FALSE)->from('tm_kecamatan')->where('kode_kab',$kode_kab)->get()->row()->kode_kab;
    }

    public function cekData($kode_kab){
    	$this->setConnection('kode_kab');
        $db   = $this->getConnection();
    	return $db->select('COUNT(*) AS kode_kab', FALSE)->from('tm_kabupaten')->where('kode_kab',$kode_kab)->get()->row()->kode_kab;
    }

    public function saveKabupaten($kode_prov, $kode_kab, $kabupaten){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();

        $db->set('kode_prov', $kode_prov);
        $db->set('kode_kab', $kode_kab);
        $db->set('kabupaten', $kabupaten);
        $db->insert('tm_kabupaten');
    }

    public function updateKabupaten($id, $kode_prov, $kode_kab, $kabupaten){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();
        
        $data = array(
        	'kode_prov'  => $kode_prov,
            'kode_kab'  => $kode_kab,
        	'kabupaten'   => $kabupaten
        );
        $db->where('id_kabupaten', $id);
        $db->update('tm_kabupaten', $data);
    }

    public function deleteKabupaten($kode_kab){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();
        $db->where('kode_kab',$kode_kab);
        $db->delete('tm_kabupaten');
    }

    public function searchKabupaten($name){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();

       $db->select("
            u.id_kabupaten AS id,
            u.kode_prov AS kode_prov,
            u.provinsi AS provinsi,
            u.kode_kab AS kode_kab,
            u.kabupaten AS kabupaten", FALSE);
        $db->from('view_kabupaten u');
        $db->like('LOWER(u.kode_prov)', strtolower($name));
        $db->or_like('LOWER(u.kabupaten)', strtolower($name));
        $query = $db->get();
        return $query;
    }

     public function filterProvinsi(){
        $this->setConnection('dbsystem');
        $db = $this->getConnection();

        $db->select("
            u.id_provinsi AS id,
            u.kode_prov AS kode_prov,
            u.provinsi AS provinsi", FALSE);
        $db->from('tm_provinsi u');
        $query = $db->get();
        return $query;
    }
}