<?php (defined('BASEPATH')) OR exit('No direct script access allowed');
/*
|---------------------------------
| Ardian Webi Kirda 
| Copyright Ardian Webi Kira 
| Created By ian  18-01-2015
| Supported by BAPPEDA BANYUMAS
|---------------------------------
*/
class M_transaksirenja extends CI_Model{
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

    /* =================== GET UNIQUE NO SUBPILIHAN URUSAN ================ */
    function getUnikKode($table) {
        $this->setConnection('dbsystem');
        $db = $this->getConnection(); 
        $q = $db->query("SELECT MAX(RIGHT(kode_subpilihanurusan,3)) AS kode FROM ".$table); $kd = ""; 
        
        //kode awal 
        if($q->num_rows()>0){ //jika data ada 

            foreach($q->result() as $k){ 
                //string kode diset ke integer dan ditambahkan 1 dari kode terakhir
                $tmp = ((int)$k->kode)+1;
                
                //kode ambil 4 karakter terakhir 
                $kd = sprintf("s", $tmp); 
            } 
        }else{ 
            //jika data kosong diset ke kode awal 
            $kd = "001"; 
        } 

        //karakter depan kodenya
        $kar = "SU";  
        
        //gabungkan string dengan kode yang telah dibuat tadi 
        return $kar.$kd; 
    } 

    /* ========== FUNGSI UNTUK MEGAMBIL DATA MUSRENBANG ========== */
    public function cekMusrenbang($value){
        $this->setConnection('dbsystem');
        $db = $this->getConnection();
        return $db->select('COUNT(*) AS id', FALSE)->from('trs_musrenbang')
                    ->where('kode_kegiatanrpjm',$value)
                    ->get()->row()->id;   

    }
    
	public function getGridMusrenbang($limit, $offset, $value){
		$this->setConnection('dbsystem');
		$db = $this->getConnection();

		$db->select("
			u.id_musrenbang AS id,
			u.kegiatan AS kegiatan,
			u.penerimaan_lain AS penerimaan_lain,
            u.rsud AS rsud,
			u.kapitasi AS kapitasi,
            u.bangub AS bangub,
            u.sektoral_apbd AS sektoral_apbd,
            u.dak AS dak,
            u.dbhcht AS dbhcht,
            u.did AS did,
            u.tp AS tp,
            u.dekonsentrasi AS dekonsentrasi,
            u.sektoral_apbn AS sektoral_apbn", FALSE);
        $db->from('view_trsrenja u');
        $db->where('u.kode_kegiatanrpjm', $value);
        $db->order_by('u.kode_musrenbang');
        $db->limit($offset, $limit);
        $query = $db->get();
        return $query;
	}

	public function countGridMusrenbang($value){
		$this->setConnection('dbsystem');
		$db = $this->getConnection();

		$db->select("
            u.id_musrenbang AS id,
            u.kegiatan AS kegiatan,
            u.penerimaan_lain AS penerimaan_lain,
            u.rsud AS rsud,
            u.kapitasi AS kapitasi,
            u.bangub AS bangub,
            u.sektoral_apbd AS sektoral_apbd,
            u.dak AS dak,
            u.dbhcht AS dbhcht,
            u.did AS did,
            u.tp AS tp,
            u.dekonsentrasi AS dekonsentrasi,
            u.sektoral_apbn AS sektoral_apbn", FALSE);
        $db->from('view_trsrenja u');
        $db->where('u.kode_kegiatanrpjm', $value);
        $db->order_by('u.kode_musrenbang');
        $query = $db->get();
        return $query;
	}

    /* ================ CETAK DATA =================== */
    public function cetakMusrenbang($data){
        $this->setConnection('dbsystem');
        $db = $this->getConnection();

        $db->select("
            u.norek_urusan AS norek_urusan,
            u.nama_urusan AS nama_urusan,
            u.norek_bidang AS norek_bidang,
            u.norek_program AS norek_program,
            u.norek_kegiatan AS norek_kegiatan,
            u.kegiatan AS kegiatan,
            u.sasaran AS sasaran,
            u.lokasi AS lokasi,
            u.current_goal AS current_goal,
            u.anggaran_apbd AS anggaran_apbd,
            u.anggaran_apbdprov AS anggaran_apbdprov,
            u.anggaran_apbn AS anggaran_apbn,
            u.next_goal AS next_goal,
            u.next_anggaran AS next_anggaran,
            u.skpd AS skpd", FALSE);
        $db->from('view_hasilrenja u');
        $db->where('u.kode_kegiatanrpjm', $data);
        $db->order_by('u.kode_musrenbang');
        $query = $db->get();
        return $query;
    }

    public function getUrusan($data){
        $this->setConnection('dbsystem');
        $db = $this->getConnection();

        $db->select("
            u.norek_urusan AS norek_urusan,
            u.nama_urusan AS nama_urusan", FALSE);
        $db->from('view_hasilrenja u');
        $db->where('u.kode_kegiatanrpjm', $data);
        $db->group_by('u.norek_urusan');
        $db->group_by('u.nama_urusan');
        $query = $db->get();
        return $query;
    }

    public function getBidang($data){
        $this->setConnection('dbsystem');
        $db = $this->getConnection();

        $db->select("
            u.norek_urusan AS norek_urusan,
            u.norek_bidang AS norek_bidang,
            u.nama_bidangrpjm AS nama_bidangrpjm", FALSE);
        $db->from('view_hasilrenja u');
        $db->where('u.kode_kegiatanrpjm', $data);
        $db->group_by('u.norek_bidang');
        $db->group_by('u.nama_bidangrpjm');
        $db->group_by('u.norek_urusan');
        $query = $db->get();
        return $query;
    }

    public function getProgram($data){
        $this->setConnection('dbsystem');
        $db = $this->getConnection();

        $db->select("
            u.norek_urusan AS norek_urusan,
            u.norek_bidang AS norek_bidang,
            u.norek_program AS norek_program,
            u.programrpjm AS programrpjm", FALSE);
        $db->from('view_hasilrenja u');
        $db->where('u.kode_kegiatanrpjm', $data);
        $db->group_by('u.norek_urusan');
        $db->group_by('u.norek_bidang');
        $db->group_by('u.norek_program');
        $db->group_by('u.programrpjm');
        $query = $db->get();
        return $query;
    }

    /* ================ Combo Unit Kerja =================== */
    public function countGridComboKecamatan(){
        $this->setConnection('dbsystem');
        $db = $this->getConnection();

        $db->select("
            u.id_unitkerja AS id,
            u.kode_unitkerja AS kode_unitkerja,
            u.unitkerja AS unitkerja", FALSE);
        $db->from('tm_unitkerja u');
        $db->like('u.unitkerja','KECAMATAN','both');
        $db->order_by('u.kode_unitkerja');
        $query = $db->get();
        return $query;
    }

    public function countGridComboKelurahan(){
        $this->setConnection('dbsystem');
        $db = $this->getConnection();

        $db->select("
            u.id_unitkerja AS id,
            u.kode_unitkerja AS kode_unitkerja,
            u.unitkerja AS unitkerja", FALSE);
        $db->from('tm_unitkerja u');
        $db->like('u.unitkerja','KELURAHAN','both');
        $db->order_by('u.kode_unitkerja');
        $query = $db->get();
        return $query;
    }

    public function countGridComboDesa(){
        $this->setConnection('dbsystem');
        $db = $this->getConnection();

        $db->select("
            u.id_unitkerja AS id,
            u.kode_unitkerja AS kode_unitkerja,
            u.unitkerja AS unitkerja", FALSE);
        $db->from('tm_unitkerja u');
        $db->like('u.unitkerja','DESA','both');
        $db->order_by('u.kode_unitkerja');
        $query = $db->get();
        return $query;
    }

    /* ================ Lookup Kegiatan =================== */
    public function countGridLookupKegiatan(){
        $this->setConnection('dbsystem');
        $db = $this->getConnection();

         $db->select("
            u.id_kegiatanrpjm AS id,
            u.kode_kegiatanrpjm AS kode_kegiatanrpjm,
            u.kegiatan AS kegiatan,
            u.no_urut AS no_urut", FALSE);
        $db->from('view_kegiatan u');
        $db->order_by('u.kode_kegiatanrpjm');
        $query = $db->get();
        return $query;
    }

    public function countGridLookupKegiatanFilter(){
        $this->setConnection('dbsystem');
        $db = $this->getConnection();

         $db->select("
            u.id_kegiatanrpjm AS id,
            u.kode_kegiatanrpjm AS kode_kegiatanrpjm,
            u.kegiatan AS kegiatan,
            u.no_urut AS no_urut", FALSE);
        $db->from('view_kegiatan u');
        $db->where('u.kode_unitkerja', $this->session->userdata('kode_unitkerja'));
        $db->order_by('u.kode_kegiatanrpjm');
        $query = $db->get();
        return $query;
    }

    /* ================ Lookup Usulan =================== */

    public function countGridLookupUsulanSkpd(){
        $this->setConnection('dbsystem');
        $db = $this->getConnection();

         $db->select("
            u.id_musrenbang AS id,
            u.kode_musrenbang AS kode_musrenbang,
            u.kegiatan AS kegiatan,
            u.penerimaan_lain AS penerimaan_lain,
            u.rsud AS rsud,
            u.kapitasi AS kapitasi,
            u.bangub AS bangub,
            u.sektoral_apbd AS sektoral_apbd,
            u.dak AS dak,
            u.dbhcht AS dbhcht,
            u.did AS did,
            u.tp AS tp,
            u.dekonsentrasi AS dekonsentrasi,
            u.sektoral_apbn AS sektoral_apbn", FALSE);
        $db->from('trs_musrenbang u');
        $db->where('u.kode_jenisusulan','JU004');
        $db->order_by('u.kode_musrenbang');
        $query = $db->get();
        return $query;
    }

    public function countGridLookupUsulanKecamatan(){
        $this->setConnection('dbsystem');
        $db = $this->getConnection();

         $db->select("
            u.id_musrenbang AS id,
            u.kode_musrenbang AS kode_musrenbang,
            u.kegiatan AS kegiatan,
            u.lokasi AS lokasi,
            u.volume AS volume,
            u.satuan AS satuan,
            u.prioritas AS prioritas,
            u.lingkupbidang AS lingkupbidang,
            u.swadana AS swadana,
            u.apbd_kab AS apbd_kab,
            u.apbd_prov AS apbd_prov,
            u.apbn AS apbn", FALSE);
        $db->from('view_musrenbang u');
        $db->where('u.kode_jenisusulan','JU003');
        $db->order_by('u.kode_musrenbang');
        $query = $db->get();
        return $query;
    }

    public function countGridLookupUsulanKelurahan(){
        $this->setConnection('dbsystem');
        $db = $this->getConnection();

        $db->select("
            u.id_musrenbang AS id,
            u.kode_musrenbang AS kode_musrenbang,
            u.kegiatan AS kegiatan,
            u.lokasi AS lokasi,
            u.volume AS volume,
            u.satuan AS satuan,
            u.prioritas AS prioritas,
            u.lingkupbidang AS lingkupbidang,
            u.swadana AS swadana,
            u.apbd_kab AS apbd_kab,
            u.apbd_prov AS apbd_prov,
            u.apbn AS apbn", FALSE);
        $db->from('view_musrenbang u');
        $db->where('u.kode_jenisusulan','JU002');
        $db->order_by('u.kode_musrenbang');
        $query = $db->get();
        return $query;
    }

    public function countGridLookupUsulanDesa(){
        $this->setConnection('dbsystem');
        $db = $this->getConnection();

        $db->select("
            u.id_musrenbang AS id,
            u.kode_musrenbang AS kode_musrenbang,
            u.kegiatan AS kegiatan,
            u.lokasi AS lokasi,
            u.volume AS volume,
            u.satuan AS satuan,
            u.prioritas AS prioritas,
            u.lingkupbidang AS lingkupbidang,
            u.swadana AS swadana,
            u.apbd_des AS apbd_des,
            u.apbd_kab AS apbd_kab,
            u.apbd_prov AS apbd_prov,
            u.apbn AS apbn", FALSE);
        $db->from('view_musrenbang u');
        $db->where('u.kode_jenisusulan','JU001');
        $db->order_by('u.kode_musrenbang');
        $query = $db->get();
        return $query;
    }

    public function countGridLookupUsulanReses(){
        $this->setConnection('dbsystem');
        $db = $this->getConnection();

        $db->select("
            u.id_musrenbang AS id,
            u.kode_musrenbang AS kode_musrenbang,
            u.kegiatan AS kegiatan,
            u.lokasi AS lokasi,
            u.volume AS volume,
            u.satuan AS satuan,
            u.prioritas AS prioritas,
            u.lingkupbidang AS lingkupbidang,
            u.swadana AS swadana,
            u.apbd_kab AS apbd_kab,
            u.apbd_prov AS apbd_prov,
            u.apbn AS apbn", FALSE);
        $db->from('view_musrenbang u');
        $db->where('u.kode_jenisusulan','JU009');
        $db->order_by('u.kode_musrenbang');
        $query = $db->get();
        return $query;
    }

    public function countGridLookupUsulanMasyarakat(){
        $this->setConnection('dbsystem');
        $db = $this->getConnection();

        $db->select("
            u.id_musrenbang AS id,
            u.kode_musrenbang AS kode_musrenbang,
            u.kegiatan AS kegiatan,
            u.lokasi AS lokasi,
            u.volume AS volume,
            u.satuan AS satuan,
            u.prioritas AS prioritas,
            u.lingkupbidang AS lingkupbidang,
            u.swadana AS swadana,
            u.apbd_kab AS apbd_kab,
            u.apbd_prov AS apbd_prov,
            u.apbn AS apbn", FALSE);
        $db->from('view_musrenbang u');
        $db->where('u.kode_jenisusulan','JU008');
        $db->order_by('u.kode_musrenbang');
        $query = $db->get();
        return $query;
    }

    /* ================ FUNGSI GENERAL =================== */
    public function cekRelasi($kode_subpilihanurusan){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();
        return $db->select('COUNT(*) AS kode_subpilihanurusan', FALSE)->from('tm_bidangrpjm')->where('kode_subpilihanurusanrpjm',$kode_subpilihanurusan)->get()->row()->kode_subpilihanurusan;
    }

    public function cekData($no_subpilihanurusan){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();
    	return $db->select('COUNT(*) AS no_subpilihanurusan', FALSE)->from('tm_subpilihanurusan_uu')->where('no_subpilihanurusan',$no_subpilihanurusan)->get()->row()->no_subpilihanurusan;
    }

    public function saveTransaksiRenja($kode_subpilihanurusan, $kode_pilihanurusan, $nama_subpilihanurusan, $no_subpilihanurusan){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();
        $db->set('kode_subpilihanurusan', $kode_subpilihanurusan);
        $db->set('kode_pilihanurusan', $kode_pilihanurusan);
        $db->set('nama_subpilihanurusan', $nama_subpilihanurusan);
        $db->set('no_subpilihanurusan', $no_subpilihanurusan);
        $db->insert('tm_subpilihanurusan_uu');
    }

    public function updateTransaksiRenja($kode_kegiatanrpjm, 
                $kode_musrenbang,
                $penerimaan_lain,
                $rsud,
                $kapitasi,
                $bangub,
                $sektoral_apbd,
                $dak,
                $dbhcht,
                $did,
                $tp,
                $dekonsentrasi,
                $sektoral_apbn,
                $current_goal,
                $next_goal,
                $next_anggaran){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();
        
        $data = array(
        	'kode_kegiatanrpjm' => $kode_kegiatanrpjm,
        	'penerimaan_lain'   => $penerimaan_lain,
            'rsud'              => $rsud,
            'kapitasi'          => $kapitasi,
            'bangub'            => $bangub,
            'sektoral_apbd'     => $sektoral_apbd,
            'dak'               => $dak,
            'dbhcht'            => $dbhcht,
            'did'               => $did,
            'tp'                => $tp,
            'dekonsentrasi'     => $dekonsentrasi,
            'sektoral_apbn'     => $sektoral_apbn,
            'current_goal'      => $current_goal,
            'next_goal'         => $next_goal,
            'next_anggaran'     => $next_anggaran,
            'updated'           => date('Y-m-d H:i:s'),
            'updatedby'         => $this->session->userdata('nip')
        );
        $db->where('kode_musrenbang', $kode_musrenbang);
        $db->update('trs_musrenbang', $data);
    }

    public function deleteTransaksiRenja($kode_subpilihanurusan){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();
        $db->where('kode_subpilihanurusan',$kode_subpilihanurusan);
        $db->delete('tm_subpilihanurusan_uu');
    }

    public function searchTransaksiRenja($name){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();

        $db->select("
            u.id_subpilihanurusan AS id,
            u.kode_subpilihanurusan AS kode_subpilihanurusan,
            u.kode_pilihanurusan AS kode_pilihanurusan,
            u.nama_subpilihanurusan AS nama_subpilihanurusan,
            u.no_subpilihanurusan AS no_subpilihanurusan", FALSE);
        $db->from('tm_subpilihanurusan_uu u');
        $db->like('LOWER(u.nama_subpilihanurusan)', strtolower($name));
        $db->or_like('LOWER(u.no_subpilihanurusan)', strtolower($name));
        $query = $db->get();
        return $query;
    }

/* ================== SEARCHING LOOKUP KEGIATAN ========================== */

    public function searchLookupKegiatan($name){
        $this->setConnection('dbsystem');
        $db = $this->getConnection();

         $db->select("
            u.id_kegiatanrpjm AS id,
            u.kode_kegiatanrpjm AS kode_kegiatanrpjm,
            u.kegiatan AS kegiatan,
            u.no_urut AS no_urut", FALSE);
        $db->from('view_kegiatan u');
        $db->like('LOWER(u.kode_kegiatanrpjm)', strtolower($name));
        $db->or_like('LOWER(u.kegiatan)', strtolower($name));
        $query = $db->get();
        return $query;
    }

    public function searchLookupKegiatanFilter($name){
        $this->setConnection('dbsystem');
        $db = $this->getConnection();

         $db->select("
            u.id_kegiatanrpjm AS id,
            u.kode_kegiatanrpjm AS kode_kegiatanrpjm,
            u.kegiatan AS kegiatan,
            u.no_urut AS no_urut", FALSE);
        $db->from('view_kegiatan u');
        $db->like('LOWER(u.kode_kegiatanrpjm)', strtolower($name));
        $db->or_like('LOWER(u.kegiatan)', strtolower($name));
        $db->where('u.kode_unitkerja',$this->session->userdata('kode_unitkerja'));
        $query = $db->get();
        return $query;
    }

    public function searchLookupKegiatanSkpd($name){
        $this->setConnection('dbsystem');
        $db = $this->getConnection();

         $db->select("
            u.id_kegiatanrpjm AS id,
            u.kode_kegiatanrpjm AS kode_kegiatanrpjm,
            u.kegiatan AS kegiatan,
            u.no_urut AS no_urut", FALSE);
        $db->from('tm_kegiatanrpjm u');
         $db->like('LOWER(u.kode_kegiatanrpjm)', strtolower($name));
        $db->or_like('LOWER(u.kegiatan)', strtolower($name));
        $query = $db->get();
        return $query;
    }

    public function searchLookupKegiatanKecamatan($name){
        $this->setConnection('dbsystem');
        $db = $this->getConnection();

         $db->select("
            u.id_kegiatanrpjm AS id,
            u.kode_kegiatanrpjm AS kode_kegiatanrpjm,
            u.kegiatan AS kegiatan,
            u.no_urut AS no_urut", FALSE);
        $db->from('tm_kegiatanrpjm u');
         $db->like('LOWER(u.kode_kegiatanrpjm)', strtolower($name));
        $db->or_like('LOWER(u.kegiatan)', strtolower($name));
        $query = $db->get();
        return $query;
    }

    public function searchLookupKegiatanKelurahan($name){
        $this->setConnection('dbsystem');
        $db = $this->getConnection();

         $db->select("
            u.id_kegiatanrpjm AS id,
            u.kode_kegiatanrpjm AS kode_kegiatanrpjm,
            u.kegiatan AS kegiatan,
            u.no_urut AS no_urut", FALSE);
        $db->from('tm_kegiatanrpjm u');
         $db->like('LOWER(u.kode_kegiatanrpjm)', strtolower($name));
        $db->or_like('LOWER(u.kegiatan)', strtolower($name));
        $query = $db->get();
        return $query;
    }

    public function searchLookupKegiatanDesa($name){
        $this->setConnection('dbsystem');
        $db = $this->getConnection();

         $db->select("
            u.id_kegiatanrpjm AS id,
            u.kode_kegiatanrpjm AS kode_kegiatanrpjm,
            u.kegiatan AS kegiatan,
            u.no_urut AS no_urut", FALSE);
        $db->from('tm_kegiatanrpjm u');
         $db->like('LOWER(u.kode_kegiatanrpjm)', strtolower($name));
        $db->or_like('LOWER(u.kegiatan)', strtolower($name));
        $query = $db->get();
        return $query;
    }

    public function searchLookupKegiatanReses($name){
        $this->setConnection('dbsystem');
        $db = $this->getConnection();

         $db->select("
            u.id_kegiatanrpjm AS id,
            u.kode_kegiatanrpjm AS kode_kegiatanrpjm,
            u.kegiatan AS kegiatan,
            u.no_urut AS no_urut", FALSE);
        $db->from('tm_kegiatanrpjm u');
         $db->like('LOWER(u.kode_kegiatanrpjm)', strtolower($name));
        $db->or_like('LOWER(u.kegiatan)', strtolower($name));
        $query = $db->get();
        return $query;
    }

    public function searchLookupKegiatanMasyarakat($name){
        $this->setConnection('dbsystem');
        $db = $this->getConnection();

         $db->select("
            u.id_kegiatanrpjm AS id,
            u.kode_kegiatanrpjm AS kode_kegiatanrpjm,
            u.kegiatan AS kegiatan,
            u.no_urut AS no_urut", FALSE);
        $db->from('tm_kegiatanrpjm u');
         $db->like('LOWER(u.kode_kegiatanrpjm)', strtolower($name));
        $db->or_like('LOWER(u.kegiatan)', strtolower($name));
        $query = $db->get();
        return $query;
    }

/* ================== SEARCHING LOOKUP USULAN ========================== */

    public function searchLookupUsulanSkpd($name){
        $this->setConnection('dbsystem');
        $db = $this->getConnection();

         $db->select("
            u.id_musrenbang AS id,
            u.kode_musrenbang AS kode_musrenbang,
            u.kegiatan AS kegiatan", FALSE);
        $db->from('view_musrenbang u');
        $db->like('LOWER(u.kode_musrenbang)', strtolower($name));
        $db->or_like('LOWER(u.kegiatan)', strtolower($name));
        $db->where('u.kode_jenisusulan','JU004');
        $query = $db->get();
        return $query;
    }

    public function searchLookupUsulanKecamatan($name){
        $this->setConnection('dbsystem');
        $db = $this->getConnection();

         $db->select("
            u.id_musrenbang AS id,
            u.kode_musrenbang AS kode_musrenbang,
            u.kegiatan AS kegiatan", FALSE);
        $db->from('view_musrenbang u');
        $db->like('LOWER(u.kode_musrenbang)', strtolower($name));
        $db->or_like('LOWER(u.kegiatan)', strtolower($name));
        $db->where('u.kode_jenisusulan','JU003');
        $query = $db->get();
        return $query;
    }

    public function searchLookupUsulanKelurahan($name){
        $this->setConnection('dbsystem');
        $db = $this->getConnection();

         $db->select("
            u.id_musrenbang AS id,
            u.kode_musrenbang AS kode_musrenbang,
            u.kegiatan AS kegiatan", FALSE);
        $db->from('view_musrenbang u');
        $db->like('LOWER(u.kode_musrenbang)', strtolower($name));
        $db->or_like('LOWER(u.kegiatan)', strtolower($name));
        $db->where('u.kode_jenisusulan','JU002');
        $query = $db->get();
        return $query;
    }

    public function searchLookupUsulanDesa($name){
        $this->setConnection('dbsystem');
        $db = $this->getConnection();

         $db->select("
            u.id_musrenbang AS id,
            u.kode_musrenbang AS kode_musrenbang,
            u.kegiatan AS kegiatan", FALSE);
        $db->from('view_musrenbang u');
        $db->like('LOWER(u.kode_musrenbang)', strtolower($name));
        $db->or_like('LOWER(u.kegiatan)', strtolower($name));
        $db->where('u.kode_jenisusulan','JU001');
        $query = $db->get();
        return $query;
    }

    public function searchLookupUsulanReses($name){
        $this->setConnection('dbsystem');
        $db = $this->getConnection();

         $db->select("
            u.id_musrenbang AS id,
            u.kode_musrenbang AS kode_musrenbang,
            u.kegiatan AS kegiatan", FALSE);
        $db->from('view_musrenbang u');
        $db->like('LOWER(u.kode_musrenbang)', strtolower($name));
        $db->or_like('LOWER(u.kegiatan)', strtolower($name));
        $db->where('u.kode_jenisusulan','JU009');
        $query = $db->get();
        return $query;
    }

    public function searchLookupUsulanMasyarakat($name){
        $this->setConnection('dbsystem');
        $db = $this->getConnection();

         $db->select("
            u.id_musrenbang AS id,
            u.kode_musrenbang AS kode_musrenbang,
            u.kegiatan AS kegiatan", FALSE);
        $db->from('view_musrenbang u');
        $db->like('LOWER(u.kode_musrenbang)', strtolower($name));
        $db->or_like('LOWER(u.kegiatan)', strtolower($name));
        $db->where('u.kode_jenisusulan','JU008');
        $query = $db->get();
        return $query;
    }

    /* =================== DETAIL DATA SUB PULIHAN ===================== */
    public function cekSubPilihanUrusan($kode_pilihanurusan){
        $this->setConnection('dbsystem');
        $db = $this->getConnection();
        return $db->select('COUNT(*) AS id', FALSE)->from('tm_subpilihanurusan_uu')
                    ->where('kode_pilihanurusan',$kode_pilihanurusan)
                    ->get()->row()->id;   

    }

    public function getSubPilihanUrusan($kode_pilihanurusan){
        $this->setConnection('dbsystem');
        $db = $this->getConnection();

        $db->select("
            u.id_subpilihanurusan AS id,
            u.kode_subpilihanurusan AS kode_subpilihanurusan,
            u.kode_pilihanurusan AS kode_pilihanurusan,
            u.nama_subpilihanurusan AS nama_subpilihanurusan,
            u.no_subpilihanurusan AS no_subpilihanurusan", FALSE);
        $db->from('tm_subpilihanurusan_uu u');
        $db->where('kode_pilihanurusan', $kode_pilihanurusan);
        $db->order_by('u.id_subpilihanurusan', 'ASC');
        $query = $db->get();
        return $query;
    }

    public function getTahun(){
      $this->setConnection('dbsystem');
        $db = $this->getConnection();

        $db->select("u.subperiode", FALSE);
        $db->from('tm_subperiode u');
        $db->where('u.status', 'aktif');
        $query = $db->get();
        // return $query;
    }
}