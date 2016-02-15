<?php (defined('BASEPATH')) OR exit('No direct script access allowed');
/*
|---------------------------------
| Ardian Webi Kirda 
| Copyright Ardian Webi Kira 
| Created By ian  18-01-2015
| Supported by Vikosha Perdana
|---------------------------------
*/
class C_provinsi extends IAN_Controller{

	public function __construct(){
		parent::__construct();
		$this->load->model('provinsi/m_provinsi');
	}

	public function getProvinsi(){
        $start      = ($this->input->post('start', TRUE) ? $this->input->post('start', TRUE) : 0);
        $limit      = ($this->input->post('limit', TRUE) ? $this->input->post('limit', TRUE) : 20);
		
		$result 		= $this->m_provinsi->getGridProvinsi($start, $limit);
		$resultCount 	= $this->m_provinsi->countGridProvinsi();
		$count 			= $resultCount->num_rows();

		foreach ($result->result() as $key => $value) {
			$data['data'][]=array(
				'id' 			=> $value->id,
				'kode_prov'		=> $value->kode_prov,
				'provinsi'		=> $value->provinsi
			);
		}

		$data['total'] 		= $count;
		$data['success']	= true;
		echo json_encode($data);
	}

	public function delProvinsi(){
		$kode_prov = ($this->input->post('kode_prov', TRUE) ? $this->input->post('kode_prov', TRUE) : '');
		$cekResult = $this->m_provinsi->cekRelasi($kode_prov);

		if($cekResult == 0){
			$this->m_provinsi->deleteProvinsi($kode_prov);
			$data['msg']=0;
		} else {
			$data['msg']=1;
		}
		echo json_encode($data);
	}

	public function saveProvinsi(){
		$kode_prov    	= ($this->input->post('kode_prov', TRUE) ? $this->input->post('kode_prov', TRUE) : '');
		$provinsi 		= ($this->input->post('provinsi', TRUE) ? $this->input->post('provinsi', TRUE) : '');

    	if($kode_prov==""){
    		$success = 3;
    	} elseif($this->m_provinsi->cekData($kode_prov) == 0){
    		$this->m_provinsi->saveProvinsi($kode_prov, $provinsi);
    		$success = 1;
    	} else {
    		$success = 2;
    	}

    	$data['total'] 		= $success;
    	$data['success'] 	= TRUE;
    	echo json_encode($data);    	
	}

	public function editProvinsi(){
		$id 		= ($this->input->post('id', TRUE) ? $this->input->post('id', TRUE) : '');
		$kode_prov  = ($this->input->post('kode_prov', TRUE) ? $this->input->post('kode_prov', TRUE) : '');
		$provinsi 	= ($this->input->post('provinsi', TRUE) ? $this->input->post('provinsi', TRUE) : '');
		
    	if(empty($kode_prov)){
    		$success = 2;
    	} else {
    		$this->m_provinsi->updateProvinsi($id, $kode_prov, $provinsi);
    		$success = 1;
    	}

    	$data['total'] 		= $success;
    	$data['success'] 	= TRUE;
    	echo json_encode($data);

	}

	public function searchProvinsi(){
		$name 		= ($this->input->post('name', TRUE) ? $this->input->post('name', TRUE) : '');
    	$result 	= $this->m_provinsi->searchProvinsi($name);
    	foreach ($result->result() as $key => $value) {
			$data['data'][]=array(
				'id' 			=> $value->id,
				'kode_prov'		=> $value->kode_prov,
				'provinsi'		=> $value->provinsi
			);
		}
		$data['success']	= true;
		echo json_encode($data);
	}
}