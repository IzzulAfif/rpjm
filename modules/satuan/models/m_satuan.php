<?php (defined('BASEPATH')) OR exit('No direct script access allowed');
/*
|---------------------------------
| Ardian Webi Kirda 
| Copyright Ardian Webi Kira 
| Created By ian  18-01-2015
| Supported by BAPPEDA BANYUMAS
|---------------------------------
*/
class M_satuan extends CI_Model{
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

	public function getGridSatuan($limit, $offset){
		$this->setConnection('dbsystem');
		$db = $this->getConnection();

		$db->select("
			u.id_satuan AS id,
			u.kode_satuan AS kode_satuan,
            u.satuan AS satuan", FALSE);
        $db->from('tm_satuan u');
        $db->order_by('u.kode_satuan');
        $db->limit($offset, $limit);
        $query = $db->get();
        return $query;
	}

	public function countGridSatuan(){
		$this->setConnection('dbsystem');
		$db = $this->getConnection();

		$db->select("
            u.id_satuan AS id,
            u.kode_satuan AS kode_satuan,
            u.satuan AS satuan", FALSE);
        $db->from('tm_satuan u');
        $db->order_by('u.kode_satuan');
        $query = $db->get();
        return $query;
	}

    public function cekRelasi($kode_satuan){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();
        return $db->select('COUNT(*) AS kode_satuan', FALSE)->from('tm_satuan')->where('kode_satuan',$kode_satuan)->get()->row()->kode_satuan;
    }

    public function cekData($kode_satuan){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();
    	return $db->select('COUNT(*) AS kode_satuan', FALSE)->from('tm_satuan')->where('kode_satuan',$kode_satuan)->get()->row()->kode_satuan;
    }

    public function saveSatuan($kode_satuan, $satuan){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();
        $db->set('kode_satuan', $kode_satuan);
        $db->set('satuan', $satuan);
        $db->insert('tm_satuan');
    }

    public function updateSatuan($id, $kode_satuan, $satuan){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();
        
        $data = array(
        	'kode_satuan'  => $kode_satuan,
        	'satuan'   => $satuan
        );
        $db->where('id_satuan', $id);
        $db->update('tm_satuan', $data);
    }

    public function deleteSatuan($kode_satuan){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();
        $db->where('kode_satuan',$kode_satuan);
        $db->delete('tm_satuan');
    }

    public function searchSatuan($name){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();

        $db->select("
            u.id_satuan AS id,
            u.kode_satuan AS kode_satuan,
            u.satuan AS satuan", FALSE);
        $db->from('tm_satuan u');
        $db->like('LOWER(u.kode_satuan)', strtolower($name));
        $db->or_like('LOWER(u.satuan)', strtolower($name));
        $query = $db->get();
        return $query;
    }
}