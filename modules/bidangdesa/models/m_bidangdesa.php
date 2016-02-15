
<?php (defined('BASEPATH')) OR exit('No direct script access allowed');
/*
|---------------------------------
| Ardian Webi Kirda 
| Copyright Ardian Webi Kira 
| Created By ian  18-01-2015
| Supported by BAPPEDA BANYUMAS
|---------------------------------
*/
class M_bidangdesa extends CI_Model{
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

	public function getGridBidangDesa($limit, $offset){
		$this->setConnection('dbsystem');
		$db = $this->getConnection();

		$db->select("
			u.id_bidangdesa AS id,
			u.kode_bidangdesa AS kode_bidangdesa,
            u.bidangdesa AS bidangdesa", FALSE);
        $db->from('tm_bidangdesa u');
        $db->order_by('u.kode_bidangdesa');
        $db->limit($offset, $limit);
        $query = $db->get();
        return $query;
	}

	public function countGridBidangDesa(){
		$this->setConnection('dbsystem');
		$db = $this->getConnection();

		$db->select("
            u.id_bidangdesa AS id,
            u.kode_bidangdesa AS kode_bidangdesa,
            u.bidangdesa AS bidangdesa", FALSE);
        $db->from('tm_bidangdesa u');
        $db->order_by('u.kode_bidangdesa');
        $query = $db->get();
        return $query;
	}

    public function cekRelasi($kode_bidangdesa){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();
        return $db->select('COUNT(*) AS kode_bidangdesa', FALSE)->from('tm_bidangdesa')->where('kode_bidangdesa',$kode_bidangdesa)->get()->row()->kode_bidangdesa;
    }

    public function cekData($kode_bidangdesa){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();
    	return $db->select('COUNT(*) AS kode_bidangdesa', FALSE)->from('tm_bidangdesa')->where('kode_bidangdesa',$kode_bidangdesa)->get()->row()->kode_bidangdesa;
    }

    public function saveBidangDesa($kode_bidangdesa, $bidangdesa){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();
        $db->set('kode_bidangdesa', $kode_bidangdesa);
        $db->set('bidangdesa', $bidangdesa);
        $db->insert('tm_bidangdesa');
    }

    public function updateBidangDesa($id, $kode_bidangdesa, $bidangdesa){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();
        
        $data = array(
        	'kode_bidangdesa'  => $kode_bidangdesa,
        	'bidangdesa'   => $bidangdesa
        );
        $db->where('id_bidangdesa', $id);
        $db->update('tm_bidangdesa', $data);
    }

    public function deleteBidangDesa($kode_bidangdesa){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();
        $db->where('kode_bidangdesa',$kode_bidangdesa);
        $db->delete('tm_bidangdesa');
    }

    public function searchBidangDesa($name){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();

        $db->select("
            u.id_bidangdesa AS id,
            u.kode_bidangdesa AS kode_bidangdesa,
            u.bidangdesa AS bidangdesa", FALSE);
        $db->from('tm_bidangdesa u');
        $db->like('LOWER(u.kode_bidangdesa)', strtolower($name));
        $db->or_like('LOWER(u.bidangdesa)', strtolower($name));
        $query = $db->get();
        return $query;
    }
}