
<?php (defined('BASEPATH')) OR exit('No direct script access allowed');
/*
|---------------------------------
| Ardian Webi Kirda 
| Copyright Ardian Webi Kira 
| Created By ian  18-01-2015
| Supported by BAPPEDA BANYUMAS
|---------------------------------
*/
class M_lingkupbidang extends CI_Model{
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

	public function getGridLingkupBidang($limit, $offset){
		$this->setConnection('dbsystem');
		$db = $this->getConnection();

		$db->select("
			u.id_lingkupbidang AS id,
			u.kode_lingkupbidang AS kode_lingkupbidang,
            u.lingkupbidang AS lingkupbidang", FALSE);
        $db->from('tm_lingkupbidang u');
        $db->order_by('u.kode_lingkupbidang');
        $db->limit($offset, $limit);
        $query = $db->get();
        return $query;
	}

	public function countGridLingkupBidang(){
		$this->setConnection('dbsystem');
		$db = $this->getConnection();

		$db->select("
            u.id_lingkupbidang AS id,
            u.kode_lingkupbidang AS kode_lingkupbidang,
            u.lingkupbidang AS lingkupbidang", FALSE);
        $db->from('tm_lingkupbidang u');
        $db->order_by('u.kode_lingkupbidang');
        $query = $db->get();
        return $query;
	}

    public function cekRelasi($kode_lingkupbidang){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();
        return $db->select('COUNT(*) AS kode_lingkupbidang', FALSE)->from('tm_lingkupbidang')->where('kode_lingkupbidang',$kode_lingkupbidang)->get()->row()->kode_lingkupbidang;
    }

    public function cekData($kode_lingkupbidang){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();
    	return $db->select('COUNT(*) AS kode_lingkupbidang', FALSE)->from('tm_lingkupbidang')->where('kode_lingkupbidang',$kode_lingkupbidang)->get()->row()->kode_lingkupbidang;
    }

    public function saveLingkupBidang($kode_lingkupbidang, $lingkupbidang){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();
        $db->set('kode_lingkupbidang', $kode_lingkupbidang);
        $db->set('lingkupbidang', $lingkupbidang);
        $db->insert('tm_lingkupbidang');
    }

    public function updateLingkupBidang($id, $kode_lingkupbidang, $lingkupbidang){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();
        
        $data = array(
        	'kode_lingkupbidang'  => $kode_lingkupbidang,
        	'lingkupbidang'   => $lingkupbidang
        );
        $db->where('id_lingkupbidang', $id);
        $db->update('tm_lingkupbidang', $data);
    }

    public function deleteLingkupBidang($kode_lingkupbidang){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();
        $db->where('kode_lingkupbidang',$kode_lingkupbidang);
        $db->delete('tm_lingkupbidang');
    }

    public function searchLingkupBidang($name){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();

        $db->select("
            u.id_lingkupbidang AS id,
            u.kode_lingkupbidang AS kode_lingkupbidang,
            u.lingkupbidang AS lingkupbidang", FALSE);
        $db->from('tm_lingkupbidang u');
        $db->like('LOWER(u.kode_lingkupbidang)', strtolower($name));
        $db->or_like('LOWER(u.lingkupbidang)', strtolower($name));
        $query = $db->get();
        return $query;
    }
}