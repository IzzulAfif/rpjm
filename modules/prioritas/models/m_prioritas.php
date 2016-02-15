
<?php (defined('BASEPATH')) OR exit('No direct script access allowed');
/*
|---------------------------------
| Ardian Webi Kirda 
| Copyright Ardian Webi Kira 
| Created By ian  18-01-2015
| Supported by BAPPEDA BANYUMAS
|---------------------------------
*/
class M_prioritas extends CI_Model{
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

	public function getGridPrioritas($limit, $offset){
		$this->setConnection('dbsystem');
		$db = $this->getConnection();

		$db->select("
			u.id_prioritas AS id,
			u.kode_prioritas AS kode_prioritas,
            u.prioritas AS prioritas", FALSE);
        $db->from('tm_prioritas u');
        $db->order_by('u.kode_prioritas');
        $db->limit($offset, $limit);
        $query = $db->get();
        return $query;
	}

	public function countGridPrioritas(){
		$this->setConnection('dbsystem');
		$db = $this->getConnection();

		$db->select("
            u.id_prioritas AS id,
            u.kode_prioritas AS kode_prioritas,
            u.prioritas AS prioritas", FALSE);
        $db->from('tm_prioritas u');
        $db->order_by('u.kode_prioritas');
        $query = $db->get();
        return $query;
	}

    public function cekRelasi($kode_prioritas){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();
        return $db->select('COUNT(*) AS kode_prioritas', FALSE)->from('tm_prioritas')->where('kode_prioritas',$kode_prioritas)->get()->row()->kode_prioritas;
    }

    public function cekData($kode_prioritas){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();
    	return $db->select('COUNT(*) AS kode_prioritas', FALSE)->from('tm_prioritas')->where('kode_prioritas',$kode_prioritas)->get()->row()->kode_prioritas;
    }

    public function savePrioritas($kode_prioritas, $prioritas){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();
        $db->set('kode_prioritas', $kode_prioritas);
        $db->set('prioritas', $prioritas);
        $db->insert('tm_prioritas');
    }

    public function updatePrioritas($id, $kode_prioritas, $prioritas){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();
        
        $data = array(
        	'kode_prioritas'  => $kode_prioritas,
        	'prioritas'   => $prioritas
        );
        $db->where('id_prioritas', $id);
        $db->update('tm_prioritas', $data);
    }

    public function deletePrioritas($kode_prioritas){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();
        $db->where('kode_prioritas',$kode_prioritas);
        $db->delete('tm_prioritas');
    }

    public function searchPrioritas($name){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();

        $db->select("
            u.id_prioritas AS id,
            u.kode_prioritas AS kode_prioritas,
            u.prioritas AS prioritas", FALSE);
        $db->from('tm_prioritas u');
        $db->like('LOWER(u.kode_prioritas)', strtolower($name));
        $db->or_like('LOWER(u.prioritas)', strtolower($name));
        $query = $db->get();
        return $query;
    }
}