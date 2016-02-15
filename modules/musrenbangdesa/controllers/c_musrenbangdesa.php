<?php (defined('BASEPATH')) OR exit('No direct script access allowed');
/*
|---------------------------------
| Ardian Webi Kirda 
| Copyright Ardian Webi Kira 
| Created By ian  18-01-2015
| Supported by Vikosha Perdana
|---------------------------------
*/
class C_musrenbangdesa extends IAN_Controller{

	public function __construct(){
		parent::__construct();
		$this->load->model('musrenbangdesa/m_musrenbangdesa');
	}

	public function getMusrenbangDesa(){
        $start      = ($this->input->post('start', TRUE) ? $this->input->post('start', TRUE) : 0);
        $limit      = ($this->input->post('limit', TRUE) ? $this->input->post('limit', TRUE) : 20);
		
		$result 		= $this->m_musrenbangdesa->getGridMusrenbangDesa($start, $limit);
		$resultCount 	= $this->m_musrenbangdesa->countGridMusrenbangDesa();
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
				'prioritas_desa' => $value->prioritas_desa,
			);
		}

		$data['total'] 		= $count;
		$data['success']	= true;
		echo json_encode($data);
	}

	public function delMusrenbangDesa(){
		$kode_musrenbang = ($this->input->post('kode_musrenbang', TRUE) ? $this->input->post('kode_musrenbang', TRUE) : '');
		$cekResult = $this->m_musrenbangdesa->cekRelasi($kode_musrenbang);

		if($cekResult == 0){
			$this->m_musrenbangdesa->deleteMusrenbangDesa($kode_musrenbang);
			$data['msg']=0;
		} else {
			$data['msg']=1;
		}
		echo json_encode($data);
	}

	public function saveMusrenbangDesa(){
		$table 				= "trs_musrenbang";
		$kode_musrenbang 	= $this->m_musrenbangdesa->getUnikKode($table);
		$tahun				= date('Y')+1;
		$kode_jenisusulan	= 'JU001';
		$created			= date('Y-m-d H:m:s');
		$createdby			= $this->session->userdata('username');
		$kode_bidangdesa	= ($this->input->post('kode_bidangdesa', TRUE) ? $this->input->post('kode_bidangdesa', TRUE) : '');
		$kegiatan 			= ($this->input->post('kegiatan', TRUE) ? $this->input->post('kegiatan', TRUE) : '');
		$lokasi 			= ($this->input->post('lokasi', TRUE) ? $this->input->post('lokasi', TRUE) : '');
		$volume 			= ($this->input->post('volume', TRUE) ? $this->input->post('volume', TRUE) : '');
		$kode_satuan 		= ($this->input->post('kode_satuan', TRUE) ? $this->input->post('kode_satuan', TRUE) : '');
		$kode_prioritas 	= ($this->input->post('kode_prioritas', TRUE) ? $this->input->post('kode_prioritas', TRUE) : '');
		$swadana 			= ($this->input->post('swadana', TRUE) ? $this->input->post('swadana', TRUE) : '');
		$apbd_kab 			= ($this->input->post('apbd_kab', TRUE) ? $this->input->post('apbd_kab', TRUE) : '');
		$apbd_prov			= ($this->input->post('apbd_prov', TRUE) ? $this->input->post('apbd_prov', TRUE) : '');
		$apbn 				= ($this->input->post('apbn', TRUE) ? $this->input->post('apbn', TRUE) : '');
		$latitude 			= ($this->input->post('latitude', TRUE) ? $this->input->post('latitude', TRUE) : '');
		$longitude 			= ($this->input->post('longitude', TRUE) ? $this->input->post('longitude', TRUE) : '');
		$catatan_deskel		= ($this->input->post('catatan_deskel', TRUE) ? $this->input->post('catatan_deskel', TRUE) : '');

    	if($kode_musrenbang==""){
    		$success = 3;
    	} elseif($this->m_musrenbangdesa->cekData($kode_musrenbang) == 0){
    		$this->m_musrenbangdesa->saveMusrenbangDesa($kode_musrenbang, $tahun, $kode_jenisusulan, $created, $createdby, $kode_bidangdesa, $kegiatan, $lokasi, $volume, $kode_satuan, $kode_prioritas, $swadana, $apbd_kab, $apbd_prov, $apbn, $latitude, $longitude, $catatan_deskel);
    		$success = 1;
    	} else {
    		$success = 2;
    	}

    	$data['total'] 		= $success;
    	$data['success'] 	= TRUE;
    	echo json_encode($data);    	
	}

	public function editMusrenbangDesa(){
		$updated			= date('Y-m-d H:m:s');
		$updateby			= $this->session->userdata('username');
		$kode_musrenbang	= ($this->input->get('kode_musrenbang', TRUE) ? $this->input->get('kode_musrenbang', TRUE) : '');
		$kode_bidangdesa	= ($this->input->get('kode_bidangdesa', TRUE) ? $this->input->get('kode_bidangdesa', TRUE) : '');
		$kegiatan 			= ($this->input->get('kegiatan', TRUE) ? $this->input->get('kegiatan', TRUE) : '');
		$lokasi 			= ($this->input->get('lokasi', TRUE) ? $this->input->get('lokasi', TRUE) : '');
		$volume 			= ($this->input->get('volume', TRUE) ? $this->input->get('volume', TRUE) : '');
		$kode_satuan 		= ($this->input->get('kode_satuan', TRUE) ? $this->input->get('kode_satuan', TRUE) : '');
		$kode_prioritas 	= ($this->input->get('kode_prioritas', TRUE) ? $this->input->get('kode_prioritas', TRUE) : '');
		$swadana 			= ($this->input->get('swadana', TRUE) ? $this->input->get('swadana', TRUE) : '');
		$apbd_kab 			= ($this->input->get('apbd_kab', TRUE) ? $this->input->get('apbd_kab', TRUE) : '');
		$apbd_prov			= ($this->input->get('apbd_prov', TRUE) ? $this->input->get('apbd_prov', TRUE) : '');
		$apbn 				= ($this->input->get('apbn', TRUE) ? $this->input->get('apbn', TRUE) : '');
		$latitude 			= ($this->input->get('latitude', TRUE) ? $this->input->get('latitude', TRUE) : '');
		$longitude 			= ($this->input->get('longitude', TRUE) ? $this->input->get('longitude', TRUE) : '');
		$catatan_deskel	= ($this->input->get('catatan_deskel', TRUE) ? $this->input->get('catatan_deskel', TRUE) : '');

    	if(empty($kode_musrenbang)){
    		$success = 2;
    	} else {
    		$this->m_musrenbangdesa->updateMusrenbangDesa($kode_musrenbang, $updated, $updateby, $kode_bidangdesa, $kegiatan, $lokasi, $volume, $kode_satuan, $kode_prioritas, $swadana, $apbd_kab, $apbd_prov, $apbn, $latitude, $longitude, $catatan_deskel);
    		$success = 1;
    	}

    	$data['total'] 		= $success;
    	$data['success'] 	= TRUE;
    	echo json_encode($data);

	}

	public function searchMusrenbangDesa(){
		$name 		= ($this->input->post('name', TRUE) ? $this->input->post('name', TRUE) : '');
    	$result 	= $this->m_musrenbangdesa->searchMusrenbangDesa($name);
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