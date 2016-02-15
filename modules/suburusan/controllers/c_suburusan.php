<?php (defined('BASEPATH')) OR exit('No direct script access allowed');
/*
|---------------------------------
| Ardian Webi Kirda 
| Copyright Ardian Webi Kira 
| Created By ian  18-01-2015
| Supported by BAPPEDA BANYUMAS
|---------------------------------
*/
class C_suburusan extends IAN_Controller{

	public function __construct(){
		parent::__construct();
		$this->load->model('suburusan/m_suburusan');
	}

	public function getUrusan(){
        $start      = ($this->input->post('start', TRUE) ? $this->input->post('start', TRUE) : 0);
        $limit      = ($this->input->post('limit', TRUE) ? $this->input->post('limit', TRUE) : 20);
		
		$result 		= $this->m_suburusan->getGridUrusan($start, $limit);
		$resultCount 	= $this->m_suburusan->countGridUrusan();
		$count 			= $resultCount->num_rows();

		foreach ($result->result() as $key => $value) {
			$data['data'][]=array(
				'id' 				=> $value->id,
				'kode_urusan_uu'	=> $value->kode_urusan_uu,
				'kode_urusan' 		=> $value->kode_urusan,
				'nama_urusan'		=> $value->nama_urusan,
				'no_urusan'			=> $value->no_urusan
			);
		}

		$data['total'] 		= $count;
		$data['success']	= true;
		echo json_encode($data);
	}

	/* =========== Detail Sub Pilihan Urusan ============== */
	public function getSubUrusanDetail(){
		
		$kode_urusan = json_decode($this->input->post('post'));
	    $result = $this->m_suburusan->getSubUrusan($kode_urusan);


	    if($this->m_suburusan->cekSubUrusan($kode_urusan) == 0){
	      $data['data'][] = array(        
			'id' 				=> '',
			'kode_suburusan'	=> '',
			'kode_urusan'		=> $kode_urusan,
			'nama_suburusan'	=> '',
			'no_suburusan'		=> ''        
	        );
	    } else {
			foreach ($result->result() as $key => $value) {
				$data['data'][]=array(
					'id' 				=> $value->id,
					'kode_suburusan'	=> $value->kode_suburusan,
					'kode_urusan'		=> $value->kode_urusan,
					'nama_suburusan'	=> $value->nama_suburusan,
					'no_suburusan'		=> $value->no_suburusan       
				);
			}
		}

        $data['success'] = TRUE;
        echo json_encode($data);
	}

	public function getSubUrusan(){
        $start      = ($this->input->post('start', TRUE) ? $this->input->post('start', TRUE) : 0);
        $limit      = ($this->input->post('limit', TRUE) ? $this->input->post('limit', TRUE) : 20);
		
		$result 		= $this->m_suburusan->getGridSubUrusan($start, $limit);
		$resultCount 	= $this->m_suburusan->countGridSubUrusan();
		$count 			= $resultCount->num_rows();

		foreach ($result->result() as $key => $value) {
			$data['data'][]=array(
				'id' 				=> $value->id,
				'kode_suburusan'	=> $value->kode_suburusan,
				'kode_urusan' 		=> $value->kode_urusan,
				'nama_suburusan'	=> $value->nama_suburusan,
				'no_suburusan'		=> $value->no_suburusan
			);
		}

		$data['total'] 		= $count;
		$data['success']	= true;
		echo json_encode($data);
	}

	public function delSubUrusan(){
		$kode_suburusan = ($this->input->get('kode_suburusan', TRUE) ? $this->input->get('kode_suburusan', TRUE) : '');
		$cekResult = $this->m_suburusan->cekRelasi($kode_suburusan);

		if($cekResult == 0){
			$this->m_suburusan->deleteSubUrusan($kode_suburusan);
			$data['msg']=0;
		} else {
			$data['msg']=1;
		}
		echo json_encode($data);
	}

	public function saveSubUrusan(){
		$table 				= "tm_suburusanrpjm";
		$kode_suburusan 	= $this->m_suburusan->getUnikKode($table);
		$kode_urusan 		= ($this->input->get('kode_urusan', TRUE) ? $this->input->get('kode_urusan', TRUE) : '');
		$nama_suburusan 	= ($this->input->get('nama_suburusan', TRUE) ? $this->input->get('nama_suburusan', TRUE) : '');
		$no_suburusan   	= ($this->input->get('no_suburusan', TRUE) ? $this->input->get('no_suburusan', TRUE) : '');

    	if(empty($nama_suburusan)){
    		$success 	= 0;
    	} elseif ($kode_urusan=='UU002' or $kode_urusan=='UU003') {
    		$success = 3;
    	} elseif($this->m_suburusan->cekData($no_suburusan) == 0){
    		$this->m_suburusan->saveSubUrusan($kode_suburusan, $kode_urusan, $nama_suburusan, $no_suburusan);
    		$success = 1;
    	} else {
    		$success 	= 2;
    	}

    	$data['total'] 		= $success;
    	$data['success'] 	= TRUE;
    	echo json_encode($data);    	
	}

	public function editSubUrusan(){
		$kode_suburusan  	= ($this->input->get('kode_suburusan', TRUE) ? $this->input->get('kode_suburusan', TRUE) : '');
		$kode_urusan 		= ($this->input->get('kode_urusan', TRUE) ? $this->input->get('kode_urusan', TRUE) : '');
		$nama_suburusan 	= ($this->input->get('nama_suburusan', TRUE) ? $this->input->get('nama_suburusan', TRUE) : '');
		$no_suburusan   	= ($this->input->get('no_suburusan', TRUE) ? $this->input->get('no_suburusan', TRUE) : '');
		
    	if(empty($nama_suburusan)){
    		$success = 0;
    	} else {
    		$this->m_suburusan->updateSubUrusan($kode_suburusan, $kode_urusan, $nama_suburusan, $no_suburusan);
    		$success = 1;
    	} 

    	$data['total'] 		= $success;
    	$data['success'] 	= TRUE;
    	echo json_encode($data);

	}

	public function searchSubUrusan(){
		$name 		= ($this->input->get('name', TRUE) ? $this->input->get('name', TRUE) : '');
    	$result 	= $this->m_suburusan->searchSubUrusan($name);
    	foreach ($result->result() as $key => $value) {
			$data['data'][]=array(
				'id' 				=> $value->id,
				'kode_suburusan'	=> $value->kode_suburusan,
				'kode_urusan' 		=> $value->kode_urusan,
				'nama_suburusan'	=> $value->nama_suburusan,
				'no_suburusan'		=> $value->no_suburusan
			);
		}
		$data['success']	= true;
		echo json_encode($data);
	}

	public function searchUrusan(){
		$name 		= ($this->input->get('name', TRUE) ? $this->input->get('name', TRUE) : '');
    	$result 	= $this->m_suburusan->searchUrusan($name);
    	foreach ($result->result() as $key => $value) {
			$data['data'][]=array(
				'id' 				=> $value->id,
				'kode_urusan_uu'	=> $value->kode_urusan_uu,
				'kode_urusan' 		=> $value->kode_urusan,
				'nama_urusan'		=> $value->nama_urusan,
				'no_urusan'			=> $value->no_urusan
			);
		}
		$data['success']	= true;
		echo json_encode($data);
	}
}