<?php (defined('BASEPATH')) OR exit('No direct script access allowed');
/*
|---------------------------------
| Ardian Webi Kirda 
| Copyright Ardian Webi Kira 
| Created By ian  18-01-2015
| Supported by BAPPEDA BANYUMAS
|---------------------------------
*/
class C_urusan extends IAN_Controller{

	public function __construct(){
		parent::__construct();
		$this->load->model('urusan/m_urusan');
	}

	/* =========== Detail UrusanDetail ============== */
	public function getUrusanDetail(){
		
		$kode_urusan_uu = json_decode($this->input->post('post'));
	    $result = $this->m_urusan->getUrusanDetail($kode_urusan_uu);


	    if($this->m_urusan->cekUrusanDetail($kode_urusan_uu) == 0){
	      $data['data'][] = array(        
			'id' 				=> '',
			'kode_urusan_uu'	=> $kode_urusan_uu,
			'kode_urusan'		=> '',
			'nama_urusan'		=> '',
			'no_urusan'			=> ''        
	        );
	    } else {
			foreach ($result->result() as $key => $value) {
				$data['data'][]=array(
					'id' 				=> $value->id,
					'kode_urusan_uu'	=> $value->kode_urusan_uu,
					'kode_urusan'		=> $value->kode_urusan,
					'nama_urusan'		=> $value->nama_urusan,
					'no_urusan'			=> $value->no_urusan      
				);
			}
		}

        $data['success'] = TRUE;
        echo json_encode($data);
	}

	public function getUrusan(){
        $start      = ($this->input->post('start', TRUE) ? $this->input->post('start', TRUE) : 0);
        $limit      = ($this->input->post('limit', TRUE) ? $this->input->post('limit', TRUE) : 20);
		
		$result 		= $this->m_urusan->getGridUrusan($start, $limit);
		$resultCount 	= $this->m_urusan->countGridUrusan();
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

	public function getUrusanPemerintah(){
        $start      = ($this->input->post('start', TRUE) ? $this->input->post('start', TRUE) : 0);
        $limit      = ($this->input->post('limit', TRUE) ? $this->input->post('limit', TRUE) : 20);
		
		$result 		= $this->m_urusan->getGridUrusanPemerintah($start, $limit);
		$resultCount 	= $this->m_urusan->countGridUrusanPemerintah();
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

	public function delUrusan(){
		$kode_urusan = ($this->input->post('kode_urusan', TRUE) ? $this->input->post('kode_urusan', TRUE) : '');
		$cekResult = $this->m_urusan->cekRelasi($kode_urusan);

		if($cekResult == 0){
			$this->m_urusan->deleteUrusan($kode_urusan);
			$data['msg']=0;
		} else {
			$data['msg']=1;
		}
		echo json_encode($data);
	}

	public function saveUrusan(){
		$table 			= "tm_urusanrpjm"; 
		$kode_urusan_uu = ($this->input->post('kode_urusan_uu', TRUE) ? $this->input->post('kode_urusan_uu', TRUE) : '');
		$kode_urusan 	= $this->m_urusan->getUnikKode($table);
		$nama_urusan 	= ($this->input->post('nama_urusan', TRUE) ? $this->input->post('nama_urusan', TRUE) : '');
		$no_urusan   	= ($this->input->post('no_urusan', TRUE) ? $this->input->post('no_urusan', TRUE) : '');

    	if($kode_urusan==""){
    		$success = 0;
    	} elseif($this->m_urusan->cekData($no_urusan, $kode_urusan_uu) == 0){
    		$this->m_urusan->saveUrusan($kode_urusan_uu, $kode_urusan, $nama_urusan, $no_urusan);
    		$success = 1;
    	} else {
    		$success = 2;
    	}

    	$data['total'] 		= $success;
    	$data['success'] 	= TRUE;
    	echo json_encode($data);    	
	}

	public function editUrusan(){
		$id 				= ($this->input->post('id', TRUE) ? $this->input->post('id', TRUE) : '');
		$kode_urusan_uu    	= ($this->input->post('kode_urusan_uu', TRUE) ? $this->input->post('kode_urusan_uu', TRUE) : '');
		$kode_urusan = ($this->input->post('kode_urusan', TRUE) ? $this->input->post('kode_urusan', TRUE) : '');
		$nama_urusan = ($this->input->post('nama_urusan', TRUE) ? $this->input->post('nama_urusan', TRUE) : '');
		$no_urusan   = ($this->input->post('no_urusan', TRUE) ? $this->input->post('no_urusan', TRUE) : '');
		
    	if(empty($kode_urusan)){
    		$success = 2;
    	} else {
    		$this->m_urusan->updateUrusan($id, $kode_urusan_uu, $kode_urusan, $nama_urusan, $no_urusan);
    		$success = 1;
    	}

    	$data['total'] 		= $success;
    	$data['success'] 	= TRUE;
    	echo json_encode($data);

	}

	public function searchUrusan(){
		$name 		= ($this->input->post('name', TRUE) ? $this->input->post('name', TRUE) : '');
    	$result 	= $this->m_urusan->searchUrusan($name);
    	foreach ($result->result() as $key => $value) {
			$data['data'][]=array(
				'id' 					=> $value->id,
				'kode_urusan_uu'			=> $value->kode_urusan_uu,
				'kode_urusan' 	=> $value->kode_urusan,
				'nama_urusan'	=> $value->nama_urusan,
				'no_urusan'		=> $value->no_urusan
			);
		}
		$data['success']	= true;
		echo json_encode($data);
	}
}