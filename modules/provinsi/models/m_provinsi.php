<?php (defined('BASEPATH')) OR exit('No direct script access allowed');
/*
|---------------------------------
| Ardian Webi Kirda 
| Copyright Ardian Webi Kira 
| Created By ian  18-01-2015
| Supported by BAPPEDA BANYUMAS
|---------------------------------
*/
class M_provinsi extends CI_Model{
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

	public function getGridProvinsi($limit, $offset){
		$this->setConnection('dbsystem');
		$db = $this->getConnection();

		$db->select("
			u.id_provinsi AS id,
			u.kode_prov AS kode_prov,
            u.provinsi AS provinsi", FALSE);
        $db->from('tm_provinsi u');
        $db->order_by('u.kode_prov');
        $db->limit($offset, $limit);
        $query = $db->get();
        return $query;
	}

	public function countGridProvinsi(){
		$this->setConnection('dbsystem');
		$db = $this->getConnection();

		$db->select("
            u.id_provinsi AS id,
            u.kode_prov AS kode_prov,
            u.provinsi AS provinsi", FALSE);
        $db->from('tm_provinsi u');
        $db->order_by('u.kode_prov');
        $query = $db->get();
        return $query;
	}

    public function cekRelasi($kode_prov){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();
        return $db->select('COUNT(*) AS kode_prov', FALSE)->from('tm_kabupaten')->where('kode_prov',$kode_prov)->get()->row()->kode_prov;
    }

    public function cekData($kode_prov){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();
    	return $db->select('COUNT(*) AS kode_prov', FALSE)->from('tm_provinsi')->where('kode_prov',$kode_prov)->get()->row()->kode_prov;
    }

    public function saveProvinsi($kode_prov, $provinsi){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();
        $db->set('kode_prov', $kode_prov);
        $db->set('provinsi', $provinsi);
        $db->insert('tm_provinsi');
    }

    public function updateProvinsi($id, $kode_prov, $provinsi){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();
        
        $data = array(
        	'kode_prov'  => $kode_prov,
        	'provinsi'   => $provinsi
        );
        $db->where('id_provinsi', $id);
        $db->update('tm_provinsi', $data);
    }

    public function deleteProvinsi($kode_prov){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();
        $db->where('kode_prov',$kode_prov);
        $db->delete('tm_provinsi');
    }

    public function searchProvinsi($name){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();

        $db->select("
            u.id_provinsi AS id,
            u.kode_prov AS kode_prov,
            u.provinsi AS provinsi", FALSE);
        $db->from('tm_provinsi u');
        $db->like('LOWER(u.kode_prov)', strtolower($name));
        $db->or_like('LOWER(u.provinsi)', strtolower($name));
        $query = $db->get();
        return $query;
    }
}