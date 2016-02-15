<?php (defined('BASEPATH')) OR exit('No direct script access allowed');
/*
|---------------------------------
| Ardian Webi Kirda 
| Copyright Ardian Webi Kira 
| Created By ian  18-01-2015
| Supported by Vikosha Perdana
|---------------------------------
*/
class C_jabatan extends IAN_Controller{

	public function __construct(){
		parent::__construct();
		$this->load->model('jabatan/m_jabatan');
	}

	public function getJabatan(){
        $start      = ($this->input->post('start', TRUE) ? $this->input->post('start', TRUE) : 0);
        $limit      = ($this->input->post('limit', TRUE) ? $this->input->post('limit', TRUE) : 20);
		
		$result 		= $this->m_jabatan->getGridJabatan($start, $limit);
		$resultCount 	= $this->m_jabatan->countGridJabatan();
		$count 			= $resultCount->num_rows();

		foreach ($result->result() as $key => $value) {
			$data['data'][]=array(
				'id' 			=> $value->id,
				'kode_jabatan'		=> $value->kode_jabatan,
				'jabatan'		=> $value->jabatan
			);
		}

		$data['total'] 		= $count;
		$data['success']	= true;
		echo json_encode($data);
	}

	public function delJabatan(){
		$kode_jabatan = ($this->input->post('kode_jabatan', TRUE) ? $this->input->post('kode_jabatan', TRUE) : '');
		$cekResult = $this->m_jabatan->cekRelasi($kode_jabatan);

		if($cekResult == 0){
			$this->m_jabatan->deleteJabatan($kode_jabatan);
			$data['msg']=0;
		} else {
			$data['msg']=1;
		}
		echo json_encode($data);
	}

	public function saveJabatan(){
		$kode_jabatan    	= ($this->input->post('kode_jabatan', TRUE) ? $this->input->post('kode_jabatan', TRUE) : '');
		$jabatan 		= ($this->input->post('jabatan', TRUE) ? $this->input->post('jabatan', TRUE) : '');

    	if($kode_jabatan==""){
    		$success = 3;
    	} elseif($this->m_jabatan->cekData($kode_jabatan) == 0){
    		$this->m_jabatan->saveJabatan($kode_jabatan, $jabatan);
    		$success = 1;
    	} else {
    		$success = 2;
    	}

    	$data['total'] 		= $success;
    	$data['success'] 	= TRUE;
    	echo json_encode($data);    	
	}

	public function editJabatan(){
		$id 		= ($this->input->post('id', TRUE) ? $this->input->post('id', TRUE) : '');
		$kode_jabatan  = ($this->input->post('kode_jabatan', TRUE) ? $this->input->post('kode_jabatan', TRUE) : '');
		$jabatan 	= ($this->input->post('jabatan', TRUE) ? $this->input->post('jabatan', TRUE) : '');
		
    	if(empty($kode_jabatan)){
    		$success = 2;
    	} else {
    		$this->m_jabatan->updateJabatan($id, $kode_jabatan, $jabatan);
    		$success = 1;
    	}

    	$data['total'] 		= $success;
    	$data['success'] 	= TRUE;
    	echo json_encode($data);

	}

	public function searchJabatan(){
		$name 		= ($this->input->post('name', TRUE) ? $this->input->post('name', TRUE) : '');
    	$result 	= $this->m_jabatan->searchJabatan($name);
    	foreach ($result->result() as $key => $value) {
			$data['data'][]=array(
				'id' 			=> $value->id,
				'kode_jabatan'		=> $value->kode_jabatan,
				'jabatan'		=> $value->jabatan
			);
		}
		$data['success']	= true;
		echo json_encode($data);
	}
}