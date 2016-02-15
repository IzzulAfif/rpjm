<?php (defined('BASEPATH')) OR exit('No direct script access allowed');
/*
|---------------------------------
| Ardian Webi Kirda 
| Copyright Ardian Webi Kira 
| Created By ian  18-01-2015
| Supported by Vikosha Perdana
|---------------------------------
*/
class C_kecamatan extends IAN_Controller{

	public function __construct(){
		parent::__construct();
		$this->load->model('kecamatan/m_kecamatan');
	}

	public function getKecamatan(){
        $start      = ($this->input->post('start', TRUE) ? $this->input->post('start', TRUE) : 0);
        $limit      = ($this->input->post('limit', TRUE) ? $this->input->post('limit', TRUE) : 20);
		
		$result 		= $this->m_kecamatan->getGridKecamatan($start, $limit);
		$resultCount 	= $this->m_kecamatan->countGridKecamatan();
		$count 			= $resultCount->num_rows();

		foreach ($result->result() as $key => $value) {
			$data['data'][]=array(
				'id' 			=> $value->id,
				'kode_kab'		=> $value->kode_kab,
				'kabupaten'		=> $value->kabupaten,
				'kode_kec'		=> $value->kode_kec,
				'kecamatan'		=> $value->kecamatan
			);
		}

		$data['total'] 		= $count;
		$data['success']	= true;
		echo json_encode($data);
	}

	public function delKecamatan(){
		$kode_kec = ($this->input->post('kode_kec', TRUE) ? $this->input->post('kode_kec', TRUE) : '');
		$cekResult = $this->m_kecamatan->cekRelasi($kode_kec);

		if($cekResult == 0){
			$this->m_kecamatan->deleteKecamatan($kode_kec);
			$data['msg']=0;
		} else {
			$data['msg']=1;
		}
		echo json_encode($data);
	}

	public function saveKecamatan(){
		$kode_kab    	= ($this->input->post('kode_kab', TRUE) ? $this->input->post('kode_kab', TRUE) : '');
		$kode_kec    	= ($this->input->post('kode_kec', TRUE) ? $this->input->post('kode_kec', TRUE) : '');
		$kecamatan 		= ($this->input->post('kecamatan', TRUE) ? $this->input->post('kecamatan', TRUE) : '');

    	if($kode_kec==""){
    		$success = 3;
    	} elseif($this->m_kecamatan->cekData($kode_kec) == 0){
    		$this->m_kecamatan->saveKecamatan($kode_kab, $kode_kec, $kecamatan);
    		$success = 1;
    	} else {
    		$success = 2;
    	}

    	$data['total'] 		= $success;
    	$data['success'] 	= TRUE;
    	echo json_encode($data);    	
	}

	public function editKecamatan(){
		$id 		= ($this->input->post('id', TRUE) ? $this->input->post('id', TRUE) : '');
		$kode_kab  = ($this->input->post('kode_kab', TRUE) ? $this->input->post('kode_kab', TRUE) : '');
		$kode_kec  = ($this->input->post('kode_kec', TRUE) ? $this->input->post('kode_kec', TRUE) : '');
		$kecamatan 	= ($this->input->post('kecamatan', TRUE) ? $this->input->post('kecamatan', TRUE) : '');
		
    	if(empty($kode_kab)){
    		$success = 2;
    	} else {
    		$this->m_kecamatan->updateKecamatan($id, $kode_kab, $kode_kec, $kecamatan);
    		$success = 1;
    	}

    	$data['total'] 		= $success;
    	$data['success'] 	= TRUE;
    	echo json_encode($data);

	}

	public function searchKecamatan(){
		$name 		= ($this->input->post('name', TRUE) ? $this->input->post('name', TRUE) : '');
    	$result 	= $this->m_kecamatan->searchKecamatan($name);
    	foreach ($result->result() as $key => $value) {
			$data['data'][]=array(
				'id' 			=> $value->id,
				'kode_kab'		=> $value->kode_kab,
				'kode_kec'		=> $value->kode_kec,
				'kecamatan'		=> $value->kecamatan
			);
		}
		$data['success']	= true;
		echo json_encode($data);
	}

	public function lookupKabupaten(){
	    $result1  = $this->m_kecamatan->filterKabupaten();
	    $count    = $result1->num_rows();
	    foreach ($result1->result() as $key => $value) {
	      $data['data'][] = array(        
	        'id'   			=> $value->id,
	        'kode_kab' 		=> $value->kode_kab,
	        'kabupaten' 	=> $value->kabupaten                 
	        );
	    }
	    echo json_encode($data);
	}
}