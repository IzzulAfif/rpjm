
<?php (defined('BASEPATH')) OR exit('No direct script access allowed');
/*
|---------------------------------
| Ardian Webi Kirda 
| Copyright Ardian Webi Kira 
| Created By ian  18-01-2015
| Supported by BAPPEDA BANYUMAS
|---------------------------------
*/
class M_usulanskpd extends CI_Model{
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

	public function getGridUsulanSkpd($limit, $offset){
		$this->setConnection('dbsystem');
		$db = $this->getConnection();

		$db->select("
			m.id_musrenbang AS id_musrenbang,
            m.kode_musrenbang AS kode_musrenbang,
            m.tahun AS tahun,
            m.kegiatan AS kegiatan,
			m.lokasi AS lokasi,
            m.volume AS volume,
            m.satuan AS satuan,
            m.penerimaan_lain AS penerimaan_lain,
            m.rsud AS rsud,
            m.kapitasi AS kapitasi,
            m.bangub AS bangub,
            m.sektoral_apbd AS sektoral_apbd,
            m.dak AS dak,
            m.dbhcht AS dbhcht,
            m.did AS did,
            m.tp AS tp,
            m.dekonsentrasi AS dekonsentrasi,
            m.sektoral_apbn AS sektoral_apbn,
            m.current_goal AS current_goal,
            m.next_goal AS next_goal,
            m.next_anggaran AS next_anggaran", FALSE);
        $db->from('view_musrenbang m');
        $db->where('m.kode_jenisusulan','JU004');
        $db->order_by('m.kode_musrenbang');
        $db->limit($offset, $limit);
        $query = $db->get();
        return $query;
	}

	public function countGridUsulanSkpd(){
		$this->setConnection('dbsystem');
		$db = $this->getConnection();

		$db->select("
            m.id_musrenbang AS id_musrenbang,
            m.kode_musrenbang AS kode_musrenbang,
            m.tahun AS tahun,
            m.kegiatan AS kegiatan,
            m.lokasi AS lokasi,
            m.volume AS volume,
            m.satuan AS satuan,
            m.penerimaan_lain AS penerimaan_lain,
            m.rsud AS rsud,
            m.kapitasi AS kapitasi,
            m.bangub AS bangub,
            m.sektoral_apbd AS sektoral_apbd,
            m.dak AS dak,
            m.dbhcht AS dbhcht,
            m.did AS did,
            m.tp AS tp,
            m.dekonsentrasi AS dekonsentrasi,
            m.sektoral_apbn AS sektoral_apbn", FALSE);
        $db->from('view_musrenbang m');
        $db->where('m.kode_jenisusulan','JU004');
        $db->order_by('m.kode_musrenbang');
        $query = $db->get();
        return $query;
	}

    public function getGridUsulanSkpdFilter($limit, $offset){
        $this->setConnection('dbsystem');
        $db = $this->getConnection();

        $db->select("
            m.id_musrenbang AS id_musrenbang,
            m.kode_musrenbang AS kode_musrenbang,
            m.tahun AS tahun,
            m.kegiatan AS kegiatan,
            m.lokasi AS lokasi,
            m.volume AS volume,
            m.satuan AS satuan,
            m.penerimaan_lain AS penerimaan_lain,
            m.rsud AS rsud,
            m.kapitasi AS kapitasi,
            m.bangub AS bangub,
            m.sektoral_apbd AS sektoral_apbd,
            m.dak AS dak,
            m.dbhcht AS dbhcht,
            m.did AS did,
            m.tp AS tp,
            m.dekonsentrasi AS dekonsentrasi,
            m.sektoral_apbn AS sektoral_apbn", FALSE);
        $db->from('view_musrenbang m');
        $db->where('m.kode_jenisusulan','JU004');
        $db->where('m.kode_unitkerja',$this->session->userdata('kode_unitkerja'));
        $db->order_by('m.kode_musrenbang');
        $db->limit($offset, $limit);
        $query = $db->get();
        return $query;
    }

    public function countGridUsulanSkpdFilter(){
        $this->setConnection('dbsystem');
        $db = $this->getConnection();

         $db->select("
            m.id_musrenbang AS id_musrenbang,
            m.kode_musrenbang AS kode_musrenbang,
            m.tahun AS tahun,
            m.kegiatan AS kegiatan,
            m.lokasi AS lokasi,
            m.volume AS volume,
            m.satuan AS satuan,
            m.penerimaan_lain AS penerimaan_lain,
            m.rsud AS rsud,
            m.kapitasi AS kapitasi,
            m.bangub AS bangub,
            m.sektoral_apbd AS sektoral_apbd,
            m.dak AS dak,
            m.dbhcht AS dbhcht,
            m.did AS did,
            m.tp AS tp,
            m.dekonsentrasi AS dekonsentrasi,
            m.sektoral_apbn AS sektoral_apbn", FALSE);
        $db->from('view_musrenbang m');
        $db->where('m.kode_jenisusulan','JU004');
        $db->where('m.kode_unitkerja',$this->session->userdata('kode_unitkerja'));
        $db->order_by('m.kode_musrenbang');
        $query = $db->get();
        return $query;
    }

    /* =================== GET UNIQUE NO SUBPILIHAN URUSAN ================ */
    function getUnikKode($table) {
        $this->setConnection('dbsystem');
        $db = $this->getConnection(); 
        $q = $db->query("SELECT MAX(RIGHT(kode_musrenbang,4)) AS kode FROM ".$table); $kd = ""; 
        
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
            $kd = "0001"; 
        } 

        //karakter depan kodenya
        $kar = "MR";  
        
        //gabungkan string dengan kode yang telah dibuat tadi 
        return $kar.$kd; 
    }

    public function cekRelasi($kode_musrenbang){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();
        return $db->select('COUNT(*) AS kode_musrenbang', FALSE)->from('trs_pagu')->where('kode_pagu',$kode_musrenbang)->get()->row()->kode_musrenbang;
    }

    public function cekData($kode_musrenbang){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();
    	return $db->select('COUNT(*) AS kode_musrenbang', FALSE)->from('trs_musrenbang')->where('kode_musrenbang',$kode_musrenbang)->get()->row()->kode_musrenbang;
    }

    public function saveUsulanSkpd($kode_musrenbang, $tahun, $kode_jenisusulan, $created, $createdby, $kode_unitkerja, $kegiatan, $lokasi, $volume, $kode_satuan, $penerimaan_lain, $rsud, $kapitasi,$bangub,$sektoral_apbd,$dak,$dbhcht,$did,$tp,$dekonsentrasi,$sektoral_apbn, $latitude, $longitude, $current_goal, $next_goal, $next_anggaran){
        $this->setConnection('dbsystem');
        $db   = $this->getConnection();
        $db->set('kode_musrenbang', $kode_musrenbang);
        $db->set('tahun', $tahun);
        $db->set('kode_jenisusulan', $kode_jenisusulan);
        $db->set('created', $created);
        $db->set('createdby', $createdby);
        $db->set('unitkerja_pengusul', $kode_unitkerja);
        $db->set('kegiatan', $kegiatan);
        $db->set('lokasi', $lokasi);
        $db->set('volume', $volume);
        $db->set('kode_satuan', $kode_satuan);
        $db->set('penerimaan_lain', $penerimaan_lain);
        $db->set('rsud', $rsud);
        $db->set('kapitasi', $kapitasi);
        $db->set('bangub', $bangub);
        $db->set('sektoral_apbd', $sektoral_apbd);
        $db->set('dak', $dak);
        $db->set('dbhcht', $dbhcht);
        $db->set('did', $did);
        $db->set('tp', $tp);
        $db->set('dekonsentrasi', $dekonsentrasi);
        $db->set('sektoral_apbn', $sektoral_apbn);
        $db->set('latitude', $latitude);
        $db->set('longitude', $longitude);
        $db->set('current_goal', $current_goal);
        $db->set('next_goal', $next_goal);
        $db->set('next_anggaran', $next_anggaran);
        $db->insert('trs_musrenbang');
    }

    public function saveUsulanSkpdFilter($kode_musrenbang, $tahun, $kode_jenisusulan, $created, $createdby, $kode_unitkerja, $kegiatan, $lokasi, $volume, $kode_satuan, $penerimaan_lain, $rsud, $kapitasi,$bangub,$sektoral_apbd,$dak,$dbhcht,$did,$tp,$dekonsentrasi,$sektoral_apbn, $latitude, $longitude, $current_goal, $next_goal, $next_anggaran){
        $this->setConnection('dbsystem');
        $db   = $this->getConnection();
        $db->set('kode_musrenbang', $kode_musrenbang);
        $db->set('tahun', $tahun);
        $db->set('kode_jenisusulan', $kode_jenisusulan);
        $db->set('created', $created);
        $db->set('createdby', $createdby);
        $db->set('unitkerja_pengusul', $kode_unitkerja);
        $db->set('kegiatan', $kegiatan);
        $db->set('lokasi', $lokasi);
        $db->set('volume', $volume);
        $db->set('kode_satuan', $kode_satuan);
        $db->set('penerimaan_lain', $penerimaan_lain);
        $db->set('rsud', $rsud);
        $db->set('kapitasi', $kapitasi);
        $db->set('bangub', $bangub);
        $db->set('sektoral_apbd', $sektoral_apbd);
        $db->set('dak', $dak);
        $db->set('dbhcht', $dbhcht);
        $db->set('did', $did);
        $db->set('tp', $tp);
        $db->set('dekonsentrasi', $dekonsentrasi);
        $db->set('sektoral_apbn', $sektoral_apbn);
        $db->set('latitude', $latitude);
        $db->set('longitude', $longitude);
        $db->set('current_goal', $current_goal);
        $db->set('next_goal', $next_goal);
        $db->set('next_anggaran', $next_anggaran);
        $db->set('unitkerja_pengusul', $this->session->userdata('kode_unitkerja'));
        $db->insert('trs_musrenbang');
    }

    public function updateUsulanSkpd($kode_musrenbang, $updated, $updatedby, $kegiatan, $lokasi, $volume, $kode_satuan, $penerimaan_lain, $rsud, $kapitasi,$bangub,$sektoral_apbd,$dak,$dbhcht,$did,$tp,$dekonsentrasi,$sektoral_apbn, $latitude, $longitude, $current_goal, $next_goal, $next_anggaran){
        $this->setConnection('dbsystem');
        $db   = $this->getConnection();

        $data = array(
            'updated'               => $updated,
            'updatedby'             => $updatedby,
            'kegiatan'              => $kegiatan,
            'lokasi'                => $lokasi,
            'volume'                => $volume,
            'kode_satuan'           => $kode_satuan,
            'penerimaan_lain'       => $penerimaan_lain,
            'rsud'                  => $rsud,
            'kapitasi'              => $kapitasi,
            'bangub'                => $bangub,
            'sektoral_apbd'         => $sektoral_apbd,
            'dak'                   => $dak,
            'dbhcht'                => $dbhcht,
            'did'                   => $did,
            'tp'                    => $tp,
            'dekonsentrasi'         => $dekonsentrasi,
            'sektoral_apbn'         => $sektoral_apbn,
            'latitude'              => $latitude,
            'longitude'             => $longitude,
            'current_goal'          => $current_goal,
            'next_goal'             => $next_goal,
            'next_anggaran'         => $next_anggaran
        );
        $db->where('kode_musrenbang', $kode_musrenbang);
        $db->update('trs_musrenbang', $data);
    }

    public function deleteUsulanSkpd($kode_musrenbang){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();
        $db->where('kode_musrenbang',$kode_musrenbang);
        $db->delete('trs_musrenbang');
    }

    public function searchUsulanSkpd($name){
        $this->setConnection('dbsystem');
        $db   = $this->getConnection();

       $db->select("
            m.id_musrenbang AS id_musrenbang,
            m.kode_musrenbang AS kode_musrenbang,
            m.tahun AS tahun,
            m.kegiatan AS kegiatan,
            m.lokasi AS lokasi,
            m.volume AS volume,
            m.satuan AS satuan,
            m.penerimaan_lain AS penerimaan_lain,
            m.rsud AS rsud,
            m.kapitasi AS kapitasi,
            m.bangub AS bangub,
            m.sektoral_apbd AS sektoral_apbd,
            m.dak AS dak,
            m.dbhcht AS dbhcht,
            m.did AS did,
            m.tp AS tp,
            m.dekonsentrasi AS dekonsentrasi,
            m.sektoral_apbn AS sektoral_apbn", FALSE);
        $db->from('view_musrenbang m');
        $db->where('m.kode_jenisusulan','JU004');
        $db->like('LOWER(m.kode_musrenbang)', strtolower($name));
        $db->or_like('LOWER(m.tahun)', strtolower($name));
        $db->or_like('LOWER(m.kegiatan)', strtolower($name));
        $db->or_like('LOWER(m.lokasi)', strtolower($name));
        $db->or_like('LOWER(m.volume)', strtolower($name));
        $db->or_like('LOWER(m.kode_satuan)', strtolower($name));
        $query = $db->get();
        return $query;
    }

    public function searchUsulanSkpdFilter($name){
        $this->setConnection('dbsystem');
        $db   = $this->getConnection();

       $db->select("
            m.id_musrenbang AS id_musrenbang,
            m.kode_musrenbang AS kode_musrenbang,
            m.tahun AS tahun,
            m.kegiatan AS kegiatan,
            m.lokasi AS lokasi,
            m.volume AS volume,
            m.satuan AS satuan,
            m.penerimaan_lain AS penerimaan_lain,
            m.rsud AS rsud,
            m.kapitasi AS kapitasi,
            m.bangub AS bangub,
            m.sektoral_apbd AS sektoral_apbd,
            m.dak AS dak,
            m.dbhcht AS dbhcht,
            m.did AS did,
            m.tp AS tp,
            m.dekonsentrasi AS dekonsentrasi,
            m.sektoral_apbn AS sektoral_apbn", FALSE);
        $db->from('view_musrenbang m');
        $db->where('m.kode_jenisusulan','JU004');
        $db->where('m.unitkerja_pengusul',$this->session->userdata('kode_unitkerja'));
        $db->like('LOWER(m.kode_musrenbang)', strtolower($name));
        $db->or_like('LOWER(m.tahun)', strtolower($name));
        $db->or_like('LOWER(m.kegiatan)', strtolower($name));
        $db->or_like('LOWER(m.lokasi)', strtolower($name));
        $db->or_like('LOWER(m.volume)', strtolower($name));
        $db->or_like('LOWER(m.kode_satuan)', strtolower($name));
        $query = $db->get();
        return $query;
    }
}