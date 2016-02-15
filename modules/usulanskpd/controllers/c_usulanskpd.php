<?php (defined('BASEPATH')) OR exit('No direct script access allowed');
/*
|---------------------------------
| Ardian Webi Kirda 
| Copyright Ardian Webi Kira 
| Created By ian  18-01-2015
| Supported by Vikosha Perdana
|---------------------------------
*/
class C_usulanskpd extends IAN_Controller{

	public function __construct(){
		parent::__construct();
		$this->load->model('usulanskpd/m_usulanskpd');
	}

	public function getUsulanSkpd(){
        $start      = ($this->input->post('start', TRUE) ? $this->input->post('start', TRUE) : 0);
        $limit      = ($this->input->post('limit', TRUE) ? $this->input->post('limit', TRUE) : 20);
		
		$result 		= $this->m_usulanskpd->getGridUsulanSkpd($start, $limit);
		$resultCount 	= $this->m_usulanskpd->countGridUsulanSkpd();
		$count 			= $resultCount->num_rows();

		foreach ($result->result() as $key => $value) {
			$data['data'][]=array(
				'id_musrenbang'		=> $value->id_musrenbang,
				'kode_musrenbang'	=> $value->kode_musrenbang,
				'kegiatan'			=> $value->kegiatan,
				'volume'			=> $value->volume,
				'lokasi'			=> $value->lokasi,
				'satuan'			=> $value->satuan,
				'penerimaan_lain'	=> $value->penerimaan_lain,
				'rsud'				=> $value->rsud,
				'kapitasi'			=> $value->kapitasi,
				'bangub'			=> $value->bangub,
				'sektoral_apbd'		=> $value->sektoral_apbd,
				'dak'				=> $value->dak,
				'dbhcht'			=> $value->dbhcht,
				'did'				=> $value->did,
				'tp'				=> $value->tp,
				'dekonsentrasi'		=> $value->dekonsentrasi,
				'sektoral_apbn'		=> $value->sektoral_apbn,
				'tahun'				=> $value->tahun,
				'current_goal'		=> $value->current_goal,
				'next_goal'			=> $value->next_goal,
				'next_anggaran'		=> $value->next_anggaran,
			);
		}

		$data['total'] 		= $count;
		$data['success']	= true;
		echo json_encode($data);
	}

	public function delUsulanSkpd(){
		$kode_musrenbang = ($this->input->post('kode_musrenbang', TRUE) ? $this->input->post('kode_musrenbang', TRUE) : '');
		$cekResult = $this->m_usulanskpd->cekRelasi($kode_musrenbang);

		if($cekResult == 0){
			$this->m_usulanskpd->deleteUsulanSkpd($kode_musrenbang);
			$data['msg']=0;
		} else {
			$data['msg']=1;
		}
		echo json_encode($data);
	}

	public function saveUsulanSkpd(){
		$table 				= "trs_musrenbang";
		$kode_musrenbang 	= $this->m_usulanskpd->getUnikKode($table);
		$tahun				= date('Y')+1;
		$kode_jenisusulan	= 'JU004';
		$created			= date('Y-m-d H:m:s');
		$createdby			= $this->session->userdata('username');
		$kode_unitkerja		= $this->session->userdata('kode_unitkerja');
		$kegiatan 			= ($this->input->post('kegiatan', TRUE) ? $this->input->post('kegiatan', TRUE) : '');
		$lokasi 			= ($this->input->post('lokasi', TRUE) ? $this->input->post('lokasi', TRUE) : '');
		$volume 			= ($this->input->post('volume', TRUE) ? $this->input->post('volume', TRUE) : '');
		$kode_satuan 		= ($this->input->post('kode_satuan', TRUE) ? $this->input->post('kode_satuan', TRUE) : '');
		$penerimaan_lain 	= intval(($this->input->post('penerimaan_lain', TRUE) ? $this->input->post('penerimaan_lain', TRUE) : 0));
		$rsud   			= intval(($this->input->post('rsud', TRUE) ? $this->input->post('rsud', TRUE) : 0));
		$kapitasi  			= intval(($this->input->post('kapitasi', TRUE) ? $this->input->post('kapitasi', TRUE) : 0));
		$bangub 			= intval(($this->input->post('bangub', TRUE) ? $this->input->post('bangub', TRUE) : 0));
		$sektoral_apbd 		= intval(($this->input->post('sektoral_apbd', TRUE) ? $this->input->post('sektoral_apbd', TRUE) : 0));
		$dak   				= intval(($this->input->post('dak', TRUE) ? $this->input->post('dak', TRUE) : 0));
		$dbhcht   			= intval(($this->input->post('dbhcht', TRUE) ? $this->input->post('dbhcht', TRUE) : 0));
		$did 				= intval(($this->input->post('did', TRUE) ? $this->input->post('did', TRUE) : 0));
		$tp 				= intval(($this->input->post('tp', TRUE) ? $this->input->post('tp', TRUE) : 0));
		$dekonsentrasi   	= intval(($this->input->post('dekonsentrasi', TRUE) ? $this->input->post('dekonsentrasi', TRUE) : 0));
		$sektoral_apbn   	= intval(($this->input->post('sektoral_apbn', TRUE) ? $this->input->post('sektoral_apbn', TRUE) : 0));
		$latitude 			= ($this->input->post('latitude', TRUE) ? $this->input->post('latitude', TRUE) : '');
		$longitude 			= ($this->input->post('longitude', TRUE) ? $this->input->post('longitude', TRUE) : '');
		$current_goal 		= ($this->input->post('current_goal', TRUE) ? $this->input->post('current_goal', TRUE) : '');
		$next_goal 			= ($this->input->post('next_goal', TRUE) ? $this->input->post('next_goal', TRUE) : '');
		$next_anggaran		= ($this->input->post('next_anggaran', TRUE) ? $this->input->post('next_anggaran', TRUE) : '');

    	if($kode_musrenbang==""){
    		$success = 3;
    	} elseif($this->m_usulanskpd->cekData($kode_musrenbang) == 0){
    		if($this->session->userdata('kode_unitkerja')==""){
	    		$this->m_usulanskpd->saveUsulanSkpd(
					$kode_musrenbang, 
					$tahun, 
					$kode_jenisusulan, 
					$created, 
					$createdby, 
					$kode_unitkerja, 
					$kegiatan, 
					$lokasi, 
					$volume, 
					$kode_satuan, 
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
					$latitude, 
					$longitude,
					$current_goal,
					$next_goal,
					$next_anggaran
	    		);
	    	} else {
	    		$this->m_usulanskpd->saveUsulanSkpdFilter(
					$kode_musrenbang, 
					$tahun, 
					$kode_jenisusulan, 
					$created, 
					$createdby, 
					$kode_unitkerja, 
					$kegiatan, 
					$lokasi, 
					$volume, 
					$kode_satuan, 
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
					$latitude, 
					$longitude,
					$current_goal,
					$next_goal,
					$next_anggaran
	    		);
	    	}
			$success = 1;
    	} else {
    		$success = 2;
    	}

    	$data['total'] 		= $success;
    	$data['success'] 	= TRUE;
    	echo json_encode($data);    	
	}

	public function editUsulanSkpd(){
		$updated			= date('Y-m-d H:m:s');
		$updateby			= $this->session->userdata('username');
		$kode_musrenbang	= ($this->input->get('kode_musrenbang', TRUE) ? $this->input->get('kode_musrenbang', TRUE) : '');
		$kegiatan 			= ($this->input->get('kegiatan', TRUE) ? $this->input->get('kegiatan', TRUE) : '');
		$lokasi 			= ($this->input->get('lokasi', TRUE) ? $this->input->get('lokasi', TRUE) : '');
		$volume 			= ($this->input->get('volume', TRUE) ? $this->input->get('volume', TRUE) : '');
		$kode_satuan 		= ($this->input->get('kode_satuan', TRUE) ? $this->input->get('kode_satuan', TRUE) : '');
		$penerimaan_lain 	= intval(($this->input->get('penerimaan_lain', TRUE) ? $this->input->get('penerimaan_lain', TRUE) : 0));
		$rsud   			= intval(($this->input->get('rsud', TRUE) ? $this->input->get('rsud', TRUE) : 0));
		$kapitasi  			= intval(($this->input->get('kapitasi', TRUE) ? $this->input->get('kapitasi', TRUE) : 0));
		$bangub 			= intval(($this->input->get('bangub', TRUE) ? $this->input->get('bangub', TRUE) : 0));
		$sektoral_apbd 		= intval(($this->input->get('sektoral_apbd', TRUE) ? $this->input->get('sektoral_apbd', TRUE) : 0));
		$dak   				= intval(($this->input->get('dak', TRUE) ? $this->input->get('dak', TRUE) : 0));
		$dbhcht   			= intval(($this->input->get('dbhcht', TRUE) ? $this->input->get('dbhcht', TRUE) : 0));
		$did 				= intval(($this->input->get('did', TRUE) ? $this->input->get('did', TRUE) : 0));
		$tp 				= intval(($this->input->get('tp', TRUE) ? $this->input->get('tp', TRUE) : 0));
		$dekonsentrasi   	= intval(($this->input->get('dekonsentrasi', TRUE) ? $this->input->get('dekonsentrasi', TRUE) : 0));
		$sektoral_apbn   	= intval(($this->input->get('sektoral_apbn', TRUE) ? $this->input->get('sektoral_apbn', TRUE) : 0));
		$latitude 			= ($this->input->get('latitude', TRUE) ? $this->input->get('latitude', TRUE) : '');
		$longitude 			= ($this->input->get('longitude', TRUE) ? $this->input->get('longitude', TRUE) : '');
		$current_goal 		= ($this->input->get('current_goal', TRUE) ? $this->input->get('current_goal', TRUE) : '');
		$next_goal 			= ($this->input->get('next_goal', TRUE) ? $this->input->get('next_goal', TRUE) : '');
		$next_anggaran		= ($this->input->get('next_anggaran', TRUE) ? $this->input->get('next_anggaran', TRUE) : '');

    	if(empty($kode_musrenbang)){
    		$success = 2;
    	} else {
    		$this->m_usulanskpd->updateUsulanSkpd($kode_musrenbang, $updated, $updateby, $kegiatan, $lokasi, $volume, $kode_satuan, $penerimaan_lain, $rsud, $kapitasi,$bangub,$sektoral_apbd,$dak,$dbhcht,$did,$tp,$dekonsentrasi,$sektoral_apbn, $latitude, $longitude, $current_goal, $next_goal, $next_anggaran);
    		$success = 1;
    	}

    	$data['total'] 		= $success;
    	$data['success'] 	= TRUE;
    	echo json_encode($data);

	}

	public function searchUsulanSkpd(){
		if($this->session->userdata('kode_unitkerja')==""){
			$name 		= ($this->input->post('name', TRUE) ? $this->input->post('name', TRUE) : '');
	    	$result 	= $this->m_usulanskpd->searchUsulanSkpd($name);
	    	foreach ($result->result() as $key => $value) {
				$data['data'][]=array(
					'id_musrenbang'		=> $value->id_musrenbang,
					'kode_musrenbang'	=> $value->kode_musrenbang,
					'kegiatan'			=> $value->kegiatan,
					'volume'			=> $value->volume,
					'lokasi'			=> $value->lokasi,
					'satuan'			=> $value->satuan,
					'swadana'			=> $value->swadana,
					'apbd_kab'			=> $value->apbd_kab,
					'apbd_prov'			=> $value->apbd_prov,
					'apbn'				=> $value->apbn,
				);
			}
			$data['success']	= true;
			echo json_encode($data);
		} else {
			$name 		= ($this->input->post('name', TRUE) ? $this->input->post('name', TRUE) : '');
	    	$result 	= $this->m_usulanskpd->searchUsulanSkpdFilter($name);
	    	foreach ($result->result() as $key => $value) {
				$data['data'][]=array(
					'id_musrenbang'		=> $value->id_musrenbang,
					'kode_musrenbang'	=> $value->kode_musrenbang,
					'kegiatan'			=> $value->kegiatan,
					'volume'			=> $value->volume,
					'lokasi'			=> $value->lokasi,
					'satuan'			=> $value->satuan,
					'swadana'			=> $value->swadana,
					'apbd_kab'			=> $value->apbd_kab,
					'apbd_prov'			=> $value->apbd_prov,
					'apbn'				=> $value->apbn,
				);
			}
			$data['success']	= true;
			echo json_encode($data);			
		}
	}
}