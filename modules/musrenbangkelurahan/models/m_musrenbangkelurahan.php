<?php (defined('BASEPATH')) OR exit('No direct script access allowed');
/*
|---------------------------------
| Ardian Webi Kirda 
| Copyright Ardian Webi Kira 
| Created By ian  18-01-2015
| Supported by BAPPEDA BANYUMAS
|---------------------------------
*/
class M_musrenbangkelurahan extends CI_Model{
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

	public function getGridMusrenbangKelurahan($limit, $offset){
		$this->setConnection('dbsystem');
		$db = $this->getConnection();

		$db->select("
			m.id_musrenbang AS id_musrenbang,
            m.kode_musrenbang AS kode_musrenbang,
            m.tahun AS tahun,
            m.kegiatan AS kegiatan,
			m.lokasi AS lokasi,
            m.volume AS volume,
            m.kode_satuan AS satuan,
            m.prioritas_desa AS prioritas_desa,
            m.swadana AS swadana,
            m.apbd_kab AS apbd_kab,
            m.apbd_prov AS apbd_prov,
            m.apbn AS apbn", FALSE);
        $db->from('trs_musrenbang m');
        $db->where('m.kode_jenisusulan','JU002');
        $db->order_by('m.kode_musrenbang');
        $db->limit($offset, $limit);
        $query = $db->get();
        return $query;
	}

	public function countGridMusrenbangKelurahan(){
		$this->setConnection('dbsystem');
		$db = $this->getConnection();

		$db->select("
            m.id_musrenbang AS id_musrenbang,
            m.kode_musrenbang AS kode_musrenbang,
            m.tahun AS tahun,
            m.kegiatan AS kegiatan,
            m.lokasi AS lokasi,
            m.volume AS volume,
            m.kode_satuan AS satuan,
            m.swadana AS swadana,
            m.apbd_kab AS apbd_kab,
            m.apbd_prov AS apbd_prov,
            m.apbn AS apbn", FALSE);
        $db->from('trs_musrenbang m');
        $db->where('m.kode_jenisusulan','JU002');
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

    public function saveMusrenbangKelurahan($kode_musrenbang, $tahun, $kode_jenisusulan, $created, $createdby, $kode_unitkerja, $kode_lingkupbidang, $kegiatan, $lokasi, $volume, $kode_satuan, $kode_prioritas, $swadana, $apbd_kab, $apbd_prov, $apbn, $latitude, $longitude, $catatan_deskel){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();
        $db->set('kode_musrenbang', $kode_musrenbang);
        $db->set('tahun', $tahun);
        $db->set('kode_jenisusulan', $kode_jenisusulan);
        $db->set('created', $created);
        $db->set('createdby', $createdby);
        $db->set('unitkerja_pengusul', $kode_unitkerja);
        $db->set('kode_lingkupbidang', $kode_lingkupbidang);
        $db->set('kegiatan', $kegiatan);
        $db->set('lokasi', $lokasi);
        $db->set('volume', $volume);
        $db->set('kode_satuan', $kode_satuan);
        $db->set('prioritas_desa', $kode_prioritas);
        $db->set('swadana', $swadana);
        $db->set('apbd_kab', $apbd_kab);
        $db->set('apbd_prov', $apbd_prov);
        $db->set('apbn', $apbn);
        $db->set('latitude', $latitude);
        $db->set('longitude', $longitude);
        $db->set('catatan_deskel', $catatan_deskel);
        $db->insert('trs_musrenbang');
    }

    public function updateMusrenbangKelurahan($kode_musrenbang, $updated, $updatedby, $kode_lingkupbidang, $kegiatan, $lokasi, $volume, $kode_satuan, $kode_prioritas, $swadana, $apbd_kab, $apbd_prov, $apbn, $latitude, $longitude, $catatan_deskel){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();

        $data = array(
        	'updated'               => $updated,
        	'updatedby'             => $updatedby,
            'kode_lingkupbidang'    => $kode_lingkupbidang,
            'kegiatan'              => $kegiatan,
            'lokasi'                => $lokasi,
            'volume'                => $volume,
            'kode_satuan'           => $kode_satuan,
            'prioritas_desa'        => $kode_prioritas,
            'swadana'               => $swadana,
            'apbd_kab'              => $apbd_kab,
            'apbd_prov'             => $apbd_prov,
            'apbn'                  => $apbn,
            'latitude'              => $latitude,
            'longitude'             => $longitude,
            'catatan_deskel'     => $catatan_deskel,
        );
        $db->where('kode_musrenbang', $kode_musrenbang);
        $db->update('trs_musrenbang', $data);
    }

    public function deleteMusrenbangKelurahan($kode_musrenbang){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();
        $db->where('kode_musrenbang',$kode_musrenbang);
        $db->delete('trs_musrenbang');
    }

    public function searchMusrenbangKelurahan($name){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();

       $db->select("
            m.id_musrenbang AS id_musrenbang,
            m.kode_musrenbang AS kode_musrenbang,
            m.tahun AS tahun,
            m.kegiatan AS kegiatan,
            m.lokasi AS lokasi,
            m.volume AS volume,
            m.kode_satuan AS satuan,
            m.swadana AS swadana,
            m.apbd_kab AS apbd_kab,
            m.apbd_prov AS apbd_prov,
            m.apbn AS apbn", FALSE);
        $db->from('trs_musrenbang m');
        $db->where('m.kode_jenisusulan','JU002');
        $db->like('LOWER(m.kode_musrenbang)', strtolower($name));
        $db->or_like('LOWER(m.tahun)', strtolower($name));
        $db->or_like('LOWER(m.kegiatan)', strtolower($name));
        $db->or_like('LOWER(m.lokasi)', strtolower($name));
        $db->or_like('LOWER(m.volume)', strtolower($name));
        $db->or_like('LOWER(m.kode_satuan)', strtolower($name));
        // $db->where('m.swadana', $name);
        // $db->where('m.apbd_des', $name);
        // $db->where('m.apbd_kab', $name);
        // $db->where('m.apbd_prov', $name);
        // $db->where('m.apbn', $name);
        $query = $db->get();
        return $query;
    }
}