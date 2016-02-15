<?php (defined('BASEPATH')) OR exit('No direct script access allowed');
/*
|---------------------------------
| Ardian Webi Kirda 
| Copyright Ardian Webi Kira 
| Created By ian  18-01-2015
| Supported by BAPPEDA BANYUMAS
|---------------------------------
*/
class M_kegiatan extends CI_Model{
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

    /* =================== GET UNIQUE KODE KEGIATAN ================ */
    function getUnikKode($table) {
        $this->setConnection('dbsystem');
        $db = $this->getConnection(); 
        $q = $db->query("SELECT MAX(RIGHT(kode_kegiatanrpjm,4)) AS kode FROM ".$table); $kd = ""; 
        
        //kode awal 
        if($q->num_rows()>0){ //jika data ada 

            foreach($q->result() as $k){ 
                //string kode diset ke integer dan ditambahkan 1 dari kode terakhir
                $tmp = ((int)$k->kode)+1;
                
                //kode ambil 4 karakter terakhir 
                $kd = sprintf("%04s", $tmp); 
            } 
        }else{ 
            //jika data kosong diset ke kode awal 
            $kd = "001"; 
        } 

        //karakter depan kodenya
        $kar = "KG";  
        
        //gabungkan string dengan kode yang telah dibuat tadi 
        return $kar.$kd; 
    } 

    public function getGridLookupProgram($limit, $offset){
        $this->setConnection('dbsystem');
        $db = $this->getConnection();

        $db->select("
            u.id_program AS id,
            u.kode_programrpjm AS kode_programrpjm,
            u.programrpjm AS programrpjm,
            u.no_programrpjm AS no_programrpjm,
            u.nama_urusan AS nama_urusan", FALSE);
        $db->from('view_program u');
        $db->order_by('u.kode_programrpjm');
        $db->limit($offset, $limit);
        $query = $db->get();
        return $query;
    }

    public function countGridLookupProgram(){
        $this->setConnection('dbsystem');
        $db = $this->getConnection();

         $db->select("
            u.id_programrpjm AS id,
            u.kode_programrpjm AS kode_programrpjm,
            u.programrpjm AS programrpjm,
            u.no_urut AS no_urut", FALSE);
        $db->from('view_program u');
        $db->order_by('u.kode_programrpjm');
        $query = $db->get();
        return $query;
    }

    public function getGridLookupUnitkerja($limit, $offset){
        $this->setConnection('dbsystem');
        $db = $this->getConnection();

        $db->select("
            u.id_unitkerja AS id,
            u.kode_unitkerja AS kode_unitkerja,
            u.unitkerja AS unitkerja", FALSE);
        $db->from('tm_unitkerja u');
        $db->order_by('u.kode_unitkerja');
        $db->limit($offset, $limit);
        $query = $db->get();
        return $query;
    }

    public function countGridLookupUnitkerja(){
        $this->setConnection('dbsystem');
        $db = $this->getConnection();

        $db->select("
            u.id_unitkerja AS id,
            u.kode_unitkerja AS kode_unitkerja,
            u.unitkerja AS unitkerja", FALSE);
        $db->from('tm_unitkerja u');
        $db->order_by('u.kode_unitkerja');
        $query = $db->get();
        return $query;
    }

    public function countGridSubPeriode(){
        $this->setConnection('dbsystem');
        $db = $this->getConnection();

         $db->select("
            u.id_subperiode AS id,
            u.kode_subperiode AS kode_subperiode,
            u.subperiode AS subperiode,
            u.kode_periode AS kode_periode,
            u.status AS status", FALSE);
        $db->from('tm_subperiode u');
        $db->where('u.status =','Aktif');
        $db->order_by('u.kode_subperiode');
        $query = $db->get();
        return $query;
    }

	public function getGridKegiatan($limit, $offset, $value){
		$this->setConnection('dbsystem');
		$db = $this->getConnection();

		$db->select("
			u.id_kegiatanrpjm AS id,
			u.kode_kegiatanrpjm AS kode_kegiatanrpjm,
            u.kegiatan AS kegiatan,
			u.kode_programrpjm AS kode_programrpjm,
            u.programrpjm AS programrpjm,
            u.no_urut AS no_urut", FALSE);
        $db->from('view_kegiatan u');
        $db->where('u.kode_programrpjm', $value);
        $db->order_by('u.no_urut', 'ASC');
        $db->limit($offset, $limit);
        $query = $db->get();
        return $query;
	}

	public function countGridKegiatan($value){
		$this->setConnection('dbsystem');
		$db = $this->getConnection();

		$db->select("
            u.id_kegiatanrpjm AS id,
            u.kode_kegiatanrpjm AS kode_kegiatanrpjm,
            u.kegiatan AS kegiatan,
            u.kode_programrpjm AS kode_programrpjm,
            u.programrpjm AS programrpjm,
            u.no_urut AS no_urut", FALSE);
        $db->from('view_kegiatan u');
        $db->where('u.kode_programrpjm', $value);
        $db->order_by('u.no_urut', 'ASC');
        $query = $db->get();
        return $query;
	}

    public function getKegiatanFilterSKPD(){
        $this->setConnection('dbsystem');
        $db = $this->getConnection();

        $db->select("
            u.id_kegiatanrpjm AS id,
            u.kode_kegiatanrpjm AS kode_kegiatanrpjm,
            u.kegiatan AS kegiatan,
            u.kode_programrpjm AS kode_programrpjm,
            u.programrpjm AS programrpjm,
            u.no_urut AS no_urut", FALSE);
        $db->from('view_kegiatan u');
        $db->where('u.kode_unitkerja', $this->session->userdata('kode_unitkerja'));
        $db->order_by('u.no_urut', 'ASC');
        $query = $db->get();
        return $query;
    }

    public function cekRelasi($kode_kegiatanrpjm){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();
        return $db->select('COUNT(*) AS kode_kegiatanrpjm', FALSE)
                    ->from('tm_kegiatanrpjm')
                    ->where('kode_kegiatanrpjm',$kode_kegiatanrpjm)
                    ->get()->row()->kode_kegiatanrpjm;
    }

    public function cekRelasiFilter($kode_kegiatanrpjm){
        $this->setConnection('dbsystem');
        $db   = $this->getConnection();
        return $db->select('COUNT(*) AS kode_kegiatanrpjm', FALSE)
                    ->from('tm_kegiatanrpjm')
                    ->where('kode_kegiatanrpjm',$kode_kegiatanrpjm)
                    ->where('kode_unitkerja',$this->session->userdata('kode_unitkerja'))
                    ->get()->row()->kode_kegiatanrpjm;
    }

    public function cekData($kode_kegiatanrpjm, $no_urut){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();
    	return $db->select('COUNT(*) AS kode_kegiatanrpjm', FALSE)
                    ->from('tm_kegiatanrpjm')
                    ->where('kode_kegiatanrpjm',$kode_kegiatanrpjm)
                    ->where('no_urut',$no_urut)
                    ->get()->row()->kode_kegiatanrpjm;
    }

    public function saveKegiatan($kode_programrpjm, $kode_kegiatanrpjm, $kegiatan, $no_urut, $kode_unitkerja){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();
        $db->set('kode_programrpjm', $kode_programrpjm);
        $db->set('kode_kegiatanrpjm', $kode_kegiatanrpjm);
        $db->set('kegiatan', $kegiatan);
        $db->set('no_urut', $no_urut);
        $db->set('kode_unitkerja', $kode_unitkerja);
        $db->insert('tm_kegiatanrpjm');
    }

    public function saveKegiatanFilter($kode_programrpjm, $kode_kegiatanrpjm, $kegiatan, $no_urut, $kode_unitkerja){
        $this->setConnection('dbsystem');
        $db   = $this->getConnection();
        $db->set('kode_programrpjm', $kode_programrpjm);
        $db->set('kode_kegiatanrpjm', $kode_kegiatanrpjm);
        $db->set('kegiatan', $kegiatan);
        $db->set('no_urut', $no_urut);
        $db->set('kode_unitkerja',$this->session->userdata('kode_unitkerja'));
        $db->insert('tm_kegiatanrpjm');
    }

    public function updateKegiatan($id, $kode_programrpjm, $kode_kegiatanrpjm, $kegiatan, $no_urut){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();
        
        $data = array(
        	'kode_programrpjm'   => $kode_programrpjm,
        	'kegiatan'           => $kegiatan,
            'no_urut'            => $no_urut
        );
        $db->where('kode_kegiatanrpjm', $kode_kegiatanrpjm);
        $db->update('tm_kegiatanrpjm', $data);
    }

    public function updateKegiatanFilter($id, $kode_programrpjm, $kode_kegiatanrpjm, $kegiatan, $no_urut){
        $this->setConnection('dbsystem');
        $db   = $this->getConnection();
        
        $data = array(
            'kode_programrpjm'   => $kode_programrpjm,
            'kegiatan'           => $kegiatan,
            'no_urut'            => $no_urut,
            'kode_unitkerja'     => $this->session->userdata('kode_unitkerja')
        );
        $db->where('kode_kegiatanrpjm', $kode_kegiatanrpjm);
        $db->update('tm_kegiatanrpjm', $data);
    }


    public function deleteKegiatan($kode_kegiatanrpjm){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();
        $db->where('kode_kegiatanrpjm',$kode_kegiatanrpjm);
        $db->delete('tm_kegiatanrpjm');
    }

    public function deleteKegiatanFilter($kode_kegiatanrpjm){
        $this->setConnection('dbsystem');
        $db   = $this->getConnection();
        $db->where('kode_kegiatanrpjm',$kode_kegiatanrpjm);
        $db->where('kode_unitkerja',$this->session->userdata('kode_unitkerja'));
        $db->delete('tm_kegiatanrpjm');
    }

    public function searchKegiatan($name){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();

        $db->select("
            u.id_kegiatanrpjm AS id,
            u.kode_kegiatanrpjm AS kode_kegiatanrpjm,
            u.kode_programrpjm AS kode_programrpjm,
            u.programrpjm AS programrpjm,
            u.kegiatan AS kegiatan,
            u.no_urut AS no_urut", FALSE);
        $db->from('view_kegiatan u');
        $db->order_by('u.kode_kegiatanrpjm');
        $db->like('LOWER(u.kode_kegiatanrpjm)', strtolower($name));
        $db->or_like('LOWER(u.kegiatan)', strtolower($name));
        $query = $db->get();
        return $query;
    }

    public function searchKegiatanFilter($name){
        $this->setConnection('dbsystem');
        $db   = $this->getConnection();

        $db->select("
            u.id_kegiatanrpjm AS id,
            u.kode_kegiatanrpjm AS kode_kegiatanrpjm,
            u.kode_programrpjm AS kode_programrpjm,
            u.programrpjm AS programrpjm,
            u.kegiatan AS kegiatan,
            u.no_urut AS no_urut", FALSE);
        $db->from('view_kegiatan u');
        $db->where('u.kode_unitkerja',$this->session->userdata('kode_unitkerja'));
        $db->order_by('u.kode_kegiatanrpjm');
        $db->like('LOWER(u.kode_kegiatanrpjm)', strtolower($name));
        $db->or_like('LOWER(u.kegiatan)', strtolower($name));
        $query = $db->get();
        return $query;
    }

    public function searchLookupProgram($name){
        $this->setConnection('dbsystem');
        $db   = $this->getConnection();

        $db->select("
            u.id_programrpjm AS id,
            u.kode_programrpjm AS kode_programrpjm,
            u.programrpjm AS programrpjm,
            u.no_urut AS no_urut", FALSE);
        $db->from('view_program u');
        $db->order_by('u.kode_programrpjm');
        $db->like('LOWER(u.kode_programrpjm)', strtolower($name));
        $db->or_like('LOWER(u.programrpjm)', strtolower($name));
        $query = $db->get();
        return $query;
    }

    public function searchLookupUnitkerja($name){
        $this->setConnection('dbsystem');
        $db   = $this->getConnection();

        $db->select("
            u.id_unitkerja AS id,
            u.kode_unitkerja AS kode_unitkerja,
            u.unitkerja AS unitkerja", FALSE);
        $db->from('tm_unitkerja u');
        $db->order_by('u.kode_unitkerja');
        $db->like('LOWER(u.kode_unitkerja)', strtolower($name));
        $db->or_like('LOWER(u.unitkerja)', strtolower($name));
        $query = $db->get();
        return $query;
    }

       /* =================== DETAIL DATA PROGRAM ===================== */
    public function cekKegiatanFilter($value){
        $this->setConnection('dbsystem');
        $db = $this->getConnection();
        return $db->select('COUNT(*) AS id', FALSE)->from('view_kegiatan')
                    ->where('kode_programrpjm',$value)
                    ->get()->row()->id;   
    }

    public function getKegiatanFilter($value){
        $this->setConnection('dbsystem');
        $db = $this->getConnection();
        $db->select("
            u.id_kegiatanrpjm AS id,
            u.kode_kegiatanrpjm AS kode_kegiatanrpjm,
            u.kode_programrpjm AS kode_programrpjm,
            u.programrpjm AS programrpjm,
            u.kegiatan AS kegiatan,
            u.no_urut AS no_urut", FALSE);
        $db->from('view_kegiatan u');
        $db->where('kode_programrpjm', $value);
        $db->where('kode_unitkerja', $this->session->userdata('kode_unitkerja'));
        $db->order_by('u.no_urut', 'ASC');
        $query = $db->get();
        return $query;
    }
}