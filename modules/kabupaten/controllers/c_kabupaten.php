<?php (defined('BASEPATH')) OR exit('No direct script access allowed');
/*
|---------------------------------
| Ardian Webi Kirda 
| Copyright Ardian Webi Kira 
| Created By ian  18-01-2015
| Supported by Vikosha Perdana
|---------------------------------
*/
class C_kabupaten extends IAN_Controller{

	public function __construct(){
		parent::__construct();
		$this->load->model('kabupaten/m_kabupaten');
	}

	public function getKabupaten(){
        $start      = ($this->input->post('start', TRUE) ? $this->input->post('start', TRUE) : 0);
        $limit      = ($this->input->post('limit', TRUE) ? $this->input->post('limit', TRUE) : 20);
		
		$result 		= $this->m_kabupaten->getGridKabupaten($start, $limit);
		$resultCount 	= $this->m_kabupaten->countGridKabupaten();
		$count 			= $resultCount->num_rows();

		foreach ($result->result() as $key => $value) {
			$data['data'][]=array(
				'id' 			=> $value->id,
				'kode_prov'		=> $value->kode_prov,
				'provinsi'		=> $value->provinsi,
				'kode_kab'		=> $value->kode_kab,
				'kabupaten'		=> $value->kabupaten
			);
		}

		$data['total'] 		= $count;
		$data['success']	= true;
		echo json_encode($data);
	}

	public function delKabupaten(){
		$kode_kab = ($this->input->post('kode_kab', TRUE) ? $this->input->post('kode_kab', TRUE) : '');
		$cekResult = $this->m_kabupaten->cekRelasi($kode_kab);

		if($cekResult == 0){
			$this->m_kabupaten->deleteKabupaten($kode_kab);
			$data['msg']=0;
		} else {
			$data['msg']=1;
		}
		echo json_encode($data);
	}

	public function saveKabupaten(){
		$kode_prov    	= ($this->input->post('kode_prov', TRUE) ? $this->input->post('kode_prov', TRUE) : '');
		$kode_kab    	= ($this->input->post('kode_kab', TRUE) ? $this->input->post('kode_kab', TRUE) : '');
		$kabupaten 		= ($this->input->post('kabupaten', TRUE) ? $this->input->post('kabupaten', TRUE) : '');

    	if($kode_kab == ""){
    		$success = 3;
    	} elseif($this->m_kabupaten->cekData($kode_kab) == 0){
    		$this->m_kabupaten->saveKabupaten($kode_prov, $kode_kab, $kabupaten);
    		$success = 1;
    	} else {
    		$success = 2;
    	}

    	$data['total'] 		= $success;
    	$data['success'] 	= TRUE;
    	echo json_encode($data);    	
	}

	public function editKabupaten(){
		$id 		= ($this->input->post('id', TRUE) ? $this->input->post('id', TRUE) : '');
		$kode_prov  = ($this->input->post('kode_prov', TRUE) ? $this->input->post('kode_prov', TRUE) : '');
		$kode_kab  = ($this->input->post('kode_kab', TRUE) ? $this->input->post('kode_kab', TRUE) : '');
		$kabupaten 	= ($this->input->post('kabupaten', TRUE) ? $this->input->post('kabupaten', TRUE) : '');
		
    	if(empty($kode_prov)){
    		$success = 2;
    	} else {
    		$this->m_kabupaten->updateKabupaten($id, $kode_prov, $kode_kab, $kabupaten);
    		$success = 1;
    	}

    	$data['total'] 		= $success;
    	$data['success'] 	= TRUE;
    	echo json_encode($data);

	}

	public function searchKabupaten(){
		$name 		= ($this->input->post('name', TRUE) ? $this->input->post('name', TRUE) : '');
    	$result 	= $this->m_kabupaten->searchKabupaten($name);
    	foreach ($result->result() as $key => $value) {
			$data['data'][]=array(
				'id' 			=> $value->id,
				'kode_prov'		=> $value->kode_prov,
				'provinsi'		=> $value->provinsi,
				'kode_kab'		=> $value->kode_kab,
				'kabupaten'		=> $value->kabupaten
			);
		}
		$data['success']	= true;
		echo json_encode($data);
	}

	public function lookupProvinsi(){
	    $result1  = $this->m_kabupaten->filterProvinsi();
	    $count    = $result1->num_rows();
	    foreach ($result1->result() as $key => $value) {
	      $data['data'][] = array(        
	        'id'   		=> $value->id,
	        'kode_prov' => $value->kode_prov,
	        'provinsi' 	=> $value->provinsi                 
	        );
	    }
	    echo json_encode($data);
	}
}