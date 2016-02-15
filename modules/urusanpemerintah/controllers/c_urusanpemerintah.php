<?php (defined('BASEPATH')) OR exit('No direct script access allowed');
/*
|---------------------------------
| Ardian Webi Kirda 
| Copyright Ardian Webi Kira 
| Created By ian  18-01-2015
| Supported by Vikosha Perdana
|---------------------------------
*/
class C_urusanpemerintah extends IAN_Controller{

	public function __construct(){
		parent::__construct();
		$this->load->model('urusanpemerintah/m_urusanpemerintah');
	}

	public function getUrusanPemerintah(){
        $start      = ($this->input->post('start', TRUE) ? $this->input->post('start', TRUE) : 0);
        $limit      = ($this->input->post('limit', TRUE) ? $this->input->post('limit', TRUE) : 20);
		
		$result 		= $this->m_urusanpemerintah->getGridUrusanPemerintah($start, $limit);
		$resultCount 	= $this->m_urusanpemerintah->countGridUrusanPemerintah();
		$count 			= $resultCount->num_rows();

		foreach ($result->result() as $key => $value) {
			$data['data'][]=array(
				'id' 			=> $value->id,
				'kode_urusan_uu'	=> $value->kode_urusan_uu,
				'nama_urusan_uu'	=> $value->nama_urusan_uu,
				'no_urusan_uu'		=> $value->no_urusan_uu
			);
		}

		$data['total'] 		= $count;
		$data['success']	= true;
		echo json_encode($data);
	}

	public function delUrusanPemerintah(){
		$kode_urusan_uu = ($this->input->post('kode_urusan_uu', TRUE) ? $this->input->post('kode_urusan_uu', TRUE) : '');
		$cekResult = $this->m_urusanpemerintah->cekRelasi($kode_urusan_uu);

		if($cekResult == 0){
			$this->m_urusanpemerintah->deleteUrusanPemerintah($kode_urusan_uu);
			$data['msg']=0;
		} else {
			$data['msg']=1;
		}
		echo json_encode($data);
	}

	public function saveUrusanPemerintah(){
		$kode_urusan_uu    = ($this->input->post('kode_urusan_uu', TRUE) ? $this->input->post('kode_urusan_uu', TRUE) : '');
		$nama_urusan_uu 	= ($this->input->post('nama_urusan_uu', TRUE) ? $this->input->post('nama_urusan_uu', TRUE) : '');
		$no_urusan_uu   	= ($this->input->post('no_urusan_uu', TRUE) ? $this->input->post('no_urusan_uu', TRUE) : '');

    	if($kode_urusan_uu==""){
    		$success = 3;
    	} elseif($this->m_urusanpemerintah->cekData($kode_urusan_uu) == 0){
    		$this->m_urusanpemerintah->saveUrusanPemerintah($kode_urusan_uu, $nama_urusan_uu, $no_urusan_uu);
    		$success = 1;
    	} else {
    		$success = 2;
    	}

    	$data['total'] 		= $success;
    	$data['success'] 	= TRUE;
    	echo json_encode($data);    	
	}

	public function editUrusanPemerintah(){
		$id 			= ($this->input->post('id', TRUE) ? $this->input->post('id', TRUE) : '');
		$kode_urusan_uu    = ($this->input->post('kode_urusan_uu', TRUE) ? $this->input->post('kode_urusan_uu', TRUE) : '');
		$nama_urusan_uu 	= ($this->input->post('nama_urusan_uu', TRUE) ? $this->input->post('nama_urusan_uu', TRUE) : '');
		$no_urusan_uu   	= ($this->input->post('no_urusan_uu', TRUE) ? $this->input->post('no_urusan_uu', TRUE) : '');
		
    	if(empty($kode_urusan_uu)){
    		$success = 2;
    	} else {
    		$this->m_urusanpemerintah->updateUrusanPemerintah($id, $kode_urusan_uu, $nama_urusan_uu, $no_urusan_uu);
    		$success = 1;
    	}

    	$data['total'] 		= $success;
    	$data['success'] 	= TRUE;
    	echo json_encode($data);

	}

	public function searchUrusanPemerintah(){
		$name 		= ($this->input->post('name', TRUE) ? $this->input->post('name', TRUE) : '');
    	$result 	= $this->m_urusanpemerintah->searchUrusanPemerintah($name);
    	foreach ($result->result() as $key => $value) {
			$data['data'][]=array(
				'id' 			=> $value->id,
				'kode_urusan_uu'	=> $value->kode_urusan_uu,
				'nama_urusan_uu'	=> $value->nama_urusan_uu,
				'no_urusan_uu'		=> $value->no_urusan_uu
			);
		}
		$data['success']	= true;
		echo json_encode($data);
	}
}