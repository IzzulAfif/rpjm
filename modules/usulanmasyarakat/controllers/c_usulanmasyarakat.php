<?php (defined('BASEPATH')) OR exit('No direct script access allowed');
/*
|---------------------------------
| Ardian Webi Kirda 
| Copyright Ardian Webi Kira 
| Created By ian  18-01-2015
| Supported by Vikosha Perdana
|---------------------------------
*/
class C_usulanmasyarakat extends IAN_Controller{

	public function __construct(){
		parent::__construct();
		$this->load->model('usulanmasyarakat/m_usulanmasyarakat');
	}

	public function getUsulanMasyarakat(){
        $start      = ($this->input->post('start', TRUE) ? $this->input->post('start', TRUE) : 0);
        $limit      = ($this->input->post('limit', TRUE) ? $this->input->post('limit', TRUE) : 20);
		
		$result 		= $this->m_usulanmasyarakat->getGridUsulanMasyarakat($start, $limit);
		$resultCount 	= $this->m_usulanmasyarakat->countGridUsulanMasyarakat();
		$count 			= $resultCount->num_rows();

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
				'tahun'				=> $value->tahun,
			);
		}

		$data['total'] 		= $count;
		$data['success']	= true;
		echo json_encode($data);
	}

	public function delUsulanMasyarakat(){
		$kode_musrenbang = ($this->input->post('kode_musrenbang', TRUE) ? $this->input->post('kode_musrenbang', TRUE) : '');
		$cekResult = $this->m_usulanmasyarakat->cekRelasi($kode_musrenbang);

		if($cekResult == 0){
			$this->m_usulanmasyarakat->deleteUsulanMasyarakat($kode_musrenbang);
			$data['msg']=0;
		} else {
			$data['msg']=1;
		}
		echo json_encode($data);
	}

	public function saveUsulanMasyarakat(){
		$table 				= "trs_musrenbang";
		$kode_musrenbang 	= $this->m_usulanmasyarakat->getUnikKode($table);
		$tahun				= date('Y')+1;
		$kode_jenisusulan	= 'JU008';
		$created			= date('Y-m-d H:m:s');
		$createdby			= $this->session->userdata('username');
		$kegiatan 			= ($this->input->post('kegiatan', TRUE) ? $this->input->post('kegiatan', TRUE) : '');
		$lokasi 			= ($this->input->post('lokasi', TRUE) ? $this->input->post('lokasi', TRUE) : '');
		$volume 			= ($this->input->post('volume', TRUE) ? $this->input->post('volume', TRUE) : '');
		$kode_satuan 		= ($this->input->post('kode_satuan', TRUE) ? $this->input->post('kode_satuan', TRUE) : '');
		$swadana 			= ($this->input->post('swadana', TRUE) ? $this->input->post('swadana', TRUE) : '');
		$apbd_kab 			= ($this->input->post('apbd_kab', TRUE) ? $this->input->post('apbd_kab', TRUE) : '');
		$apbd_prov			= ($this->input->post('apbd_prov', TRUE) ? $this->input->post('apbd_prov', TRUE) : '');
		$apbn 				= ($this->input->post('apbn', TRUE) ? $this->input->post('apbn', TRUE) : '');
		$latitude 			= ($this->input->post('latitude', TRUE) ? $this->input->post('latitude', TRUE) : '');
		$longitude 			= ($this->input->post('longitude', TRUE) ? $this->input->post('longitude', TRUE) : '');

    	if($kode_musrenbang==""){
    		$success = 3;
    	} elseif($this->m_usulanmasyarakat->cekData($kode_musrenbang) == 0){
    		$this->m_usulanmasyarakat->saveUsulanMasyarakat($kode_musrenbang, $tahun, $kode_jenisusulan, $created, $createdby, $kegiatan, $lokasi, $volume, $kode_satuan, $swadana, $apbd_kab, $apbd_prov, $apbn, $latitude, $longitude);
    		$success = 1;
    	} else {
    		$success = 2;
    	}

    	$data['total'] 		= $success;
    	$data['success'] 	= TRUE;
    	echo json_encode($data);    	
	}

	public function editUsulanMasyarakat(){
		$updated			= date('Y-m-d H:m:s');
		$updateby			= $this->session->userdata('username');
		$kode_musrenbang	= ($this->input->get('kode_musrenbang', TRUE) ? $this->input->get('kode_musrenbang', TRUE) : '');
		$kegiatan 			= ($this->input->get('kegiatan', TRUE) ? $this->input->get('kegiatan', TRUE) : '');
		$lokasi 			= ($this->input->get('lokasi', TRUE) ? $this->input->get('lokasi', TRUE) : '');
		$volume 			= ($this->input->get('volume', TRUE) ? $this->input->get('volume', TRUE) : '');
		$kode_satuan 		= ($this->input->get('kode_satuan', TRUE) ? $this->input->get('kode_satuan', TRUE) : '');
		$swadana 			= ($this->input->get('swadana', TRUE) ? $this->input->get('swadana', TRUE) : '');
		$apbd_kab 			= ($this->input->get('apbd_kab', TRUE) ? $this->input->get('apbd_kab', TRUE) : '');
		$apbd_prov			= ($this->input->get('apbd_prov', TRUE) ? $this->input->get('apbd_prov', TRUE) : '');
		$apbn 				= ($this->input->get('apbn', TRUE) ? $this->input->get('apbn', TRUE) : '');
		$latitude 			= ($this->input->get('latitude', TRUE) ? $this->input->get('latitude', TRUE) : '');
		$longitude 			= ($this->input->get('longitude', TRUE) ? $this->input->get('longitude', TRUE) : '');

    	if(empty($kode_musrenbang)){
    		$success = 2;
    	} else {
    		$this->m_usulanmasyarakat->updateUsulanMasyarakat($kode_musrenbang, $updated, $updateby, $kegiatan, $lokasi, $volume, $kode_satuan, $swadana, $apbd_kab, $apbd_prov, $apbn, $latitude, $longitude);
    		$success = 1;
    	}

    	$data['total'] 		= $success;
    	$data['success'] 	= TRUE;
    	echo json_encode($data);

	}

	public function searchUsulanMasyarakat(){
		$name 		= ($this->input->post('name', TRUE) ? $this->input->post('name', TRUE) : '');
    	$result 	= $this->m_usulanmasyarakat->searchUsulanMasyarakat($name);
    	foreach ($result->result() as $key => $value) {
			$data['data'][]=array(
				'id_musrenbang'			=> $value->id_musrenbang,
				'kode_musrenbang'	=> $value->kode_musrenbang,
				'kegiatan'				=> $value->kegiatan,
				'volume'				=> $value->volume,
				'lokasi'				=> $value->lokasi,
				'satuan'				=> $value->satuan,
				'swadana'				=> $value->swadana,
				'apbd_kab'				=> $value->apbd_kab,
				'apbd_prov'				=> $value->apbd_prov,
				'apbn'				=> $value->apbn,
			);
		}
		$data['success']	= true;
		echo json_encode($data);
	}
}