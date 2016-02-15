<?php (defined('BASEPATH')) OR exit('No direct script access allowed');
/*
|---------------------------------
| Ardian Webi Kirda 
| Copyright Ardian Webi Kira 
| Created By ian  18-01-2015
| Supported by BAPPEDA BANYUMAS
|---------------------------------
*/
class C_kegiatan extends IAN_Controller{

	public function __construct(){
		parent::__construct();
		$this->load->model('kegiatan/m_kegiatan');
	}

	/* =========== Detail Kegiatan  ============== */
	public function getKegiatanFilter(){	
		if($this->session->userdata('kode_unitkerja')==""){
	        $start      	= ($this->input->post('start', TRUE) ? $this->input->post('start', TRUE) : 0);
	        $limit      	= ($this->input->post('limit', TRUE) ? $this->input->post('limit', TRUE) : 20);
	        $value 			= json_decode($this->input->post('value'));
			$result 		= $this->m_kegiatan->getGridKegiatan($start, $limit, $value);
			$resultCount 	= $this->m_kegiatan->countGridKegiatan($value);
			$count 			= $resultCount->num_rows();
			
			if($this->m_kegiatan->cekKegiatanFilter($value) == 0){
		      	$data['data'][] = array(        
				'id' 				=> '',
				'kode_kegiatanrpjm'	=> '',
				'kode_programrpjm' 	=> $value,
				'programrpjm'		=> '',
				'kegiatan'			=> '',
				'no_urut'			=> ''  
		        );
	    	} else {
				foreach ($resultCount->result() as $key => $value) {
					$data['data'][] = array(
						'id' 				=> $value->id,
						'kode_kegiatanrpjm'	=> $value->kode_kegiatanrpjm,
						'kegiatan'			=> $value->kegiatan,
						'kode_programrpjm' 	=> $value->kode_programrpjm,
						'programrpjm'		=> $value->programrpjm,
						'no_urut'			=> $value->no_urut
					);
				}
			}
			$data['total'] 		= $count;
			$data['success']	= true;
			echo json_encode($data);
		} else {
			$value = json_decode($this->input->post('value'));
	       	$result = $this->m_kegiatan->getKegiatanFilter($value);
		    if($this->m_kegiatan->cekKegiatanFilter($value) == 0){
		      $data['data'][] = array(        
				'id' 				=> '',
				'kode_kegiatanrpjm'	=> '',
				'kode_programrpjm' 	=> $value,
				'programrpjm'		=> '',
				'kegiatan'			=> '',
				'no_urut'			=> ''  
		        );
		    } else {
				foreach ($result->result() as $key => $value) {
					$data['data'][]=array(
						'id' 				=> $value->id,
						'kode_kegiatanrpjm'	=> $value->kode_kegiatanrpjm,
						'kode_programrpjm' 	=> $value->kode_programrpjm,
						'programrpjm'		=> $value->programrpjm,
						'kegiatan'			=> $value->kegiatan,
						'no_urut'			=> $value->no_urut     
					);
				}
			}

	        $data['success'] = TRUE;
	        echo json_encode($data);
		}			
	} 

	public function getKegiatan(){
		if($this->session->userdata('kode_unitkerja')==""){
	        $start      	= ($this->input->post('start', TRUE) ? $this->input->post('start', TRUE) : 0);
	        $limit      	= ($this->input->post('limit', TRUE) ? $this->input->post('limit', TRUE) : 20);
	        $value 			= json_decode($this->input->post('value'));
			$result 		= $this->m_kegiatan->getGridKegiatan($start, $limit, $value);
			$resultCount 	= $this->m_kegiatan->countGridKegiatan($value);
			$count 			= $resultCount->num_rows();
			
			if($this->m_kegiatan->cekKegiatanFilter($value) == 0){
		      	$data['data'][] = array(        
				'id' 				=> '',
				'kode_kegiatanrpjm'	=> '',
				'kode_programrpjm' 	=> $value,
				'programrpjm'		=> '',
				'kegiatan'			=> '',
				'no_urut'			=> ''  
		        );
	    	} else {
				foreach ($resultCount->result() as $key => $value) {
					$data['data'][] = array(
						'id' 				=> $value->id,
						'kode_kegiatanrpjm'	=> $value->kode_kegiatanrpjm,
						'kegiatan'			=> $value->kegiatan,
						'kode_programrpjm' 	=> $value->kode_programrpjm,
						'programrpjm'		=> $value->programrpjm,
						'no_urut'			=> $value->no_urut
					);
				}
			}
			$data['total'] 		= $count;
			$data['success']	= true;
			echo json_encode($data);
		} else {
	    	$resultSKPD = $this->m_kegiatan->getKegiatanFilterSKPD();
			foreach ($resultSKPD->result() as $key => $value) {
				$data['data'][]=array(
					'id' 				=> $value->id,
					'kode_kegiatanrpjm'	=> $value->kode_kegiatanrpjm,
					'kode_programrpjm' 	=> $value->kode_programrpjm,
					'programrpjm'		=> $value->programrpjm,
					'kegiatan'			=> $value->kegiatan,
					'no_urut'			=> $value->no_urut     
				);
			}
	        $data['success'] = TRUE;
        	echo json_encode($data);
		}
	}

	public function getLookupProgram(){
		$resultCount 	= $this->m_kegiatan->countGridLookupProgram();
		$count 			= $resultCount->num_rows();

		foreach ($resultCount->result() as $key => $value) {
			$data['data'][]=array(
				'id' 				=> $value->id,
				'kode_programrpjm'	=> $value->kode_programrpjm,
				'programrpjm' 		=> $value->programrpjm,
				'no_urut'			=> $value->no_urut
			);
		}

		$data['total'] 		= $count;
		$data['success']	= true;
		echo json_encode($data);
	}

	public function getLookupUnitkerja(){
		$resultCount 	= $this->m_kegiatan->countGridLookupUnitkerja();
		$count 			= $resultCount->num_rows();

		foreach ($resultCount->result() as $key => $value) {
			$data['data'][]=array(
				'id' 				=> $value->id,
				'kode_unitkerja'	=> $value->kode_unitkerja,
				'unitkerja' 		=> $value->unitkerja
			);
		}

		$data['total'] 		= $count;
		$data['success']	= true;
		echo json_encode($data);
	}

	public function delKegiatan(){
		if($this->session->userdata('kode_unitkerja')==""){
			$kode_kegiatanrpjm = $this->input->post('kode_kegiatanrpjm', TRUE);
			$cekResult = $this->m_kegiatan->cekRelasi($kode_kegiatanrpjm);

			if($cekResult == 0){
				$this->m_kegiatan->deleteKegiatan($kode_kegiatanrpjm);
				$data['msg']=0;
			} else {
				$data['msg']=1;
			}
			echo json_encode($data);
		} else {
			$kode_kegiatanrpjm = $this->input->post('kode_kegiatanrpjm', TRUE);
			$cekResult = $this->m_kegiatan->cekRelasiFilter($kode_kegiatanrpjm);

			if($cekResult == 0){
				$this->m_kegiatan->deleteKegiatanFilter($kode_kegiatanrpjm);
				$data['msg']=0;
			} else {
				$data['msg']=1;
			}
			echo json_encode($data);
		}
	}

	public function saveKegiatan(){
		if($this->session->userdata('kode_unitkerja')==""){
			$table 				= "tm_kegiatanrpjm";
			$kode_kegiatanrpjm 	= $this->m_kegiatan->getUnikKode($table);
			$kode_programrpjm   = ($this->input->get('kode_programrpjm', TRUE) ? $this->input->get('kode_programrpjm', TRUE) : '');
			$kegiatan 			= ($this->input->get('kegiatan', TRUE) ? $this->input->get('kegiatan', TRUE) : '');
			$no_urut 			= ($this->input->get('no_urut', TRUE) ? $this->input->get('no_urut', TRUE) : '');
			$kode_unitkerja		= ($this->input->get('kode_unitkerja', TRUE) ? $this->input->get('kode_unitkerja', TRUE) : '');

	    	if($kegiatan==""){
	    		$success = 3;
	    	} elseif($this->m_kegiatan->cekData($kode_kegiatanrpjm, $no_urut) == 0){
	    		$this->m_kegiatan->saveKegiatan($kode_programrpjm, $kode_kegiatanrpjm, $kegiatan, $no_urut, $kode_unitkerja);
	    		$success = 1;
	    	} else {
	    		$success = 2;
	    	}

	    	$data['total'] 		= $success;
	    	$data['success'] 	= TRUE;
	    	echo json_encode($data);
	    } else {
			$table 				= "tm_kegiatanrpjm";
			$kode_kegiatanrpjm 	= $this->m_kegiatan->getUnikKode($table);
			$kode_programrpjm   = ($this->input->get('kode_programrpjm', TRUE) ? $this->input->get('kode_programrpjm', TRUE) : '');
			$kegiatan 			= ($this->input->get('kegiatan', TRUE) ? $this->input->get('kegiatan', TRUE) : '');
			$no_urut 			= ($this->input->get('no_urut', TRUE) ? $this->input->get('no_urut', TRUE) : '');
			$kode_unitkerja		= ($this->input->get('kode_unitkerja', TRUE) ? $this->input->get('kode_unitkerja', TRUE) : '');

	    	if($kegiatan==""){
	    		$success = 3;
	    	} elseif($this->m_kegiatan->cekData($kode_kegiatanrpjm, $no_urut) == 0){
	    		$this->m_kegiatan->saveKegiatanFilter($kode_programrpjm, $kode_kegiatanrpjm, $kegiatan, $no_urut, $kode_unitkerja);
	    		$success = 1;
	    	} else {
	    		$success = 2;
	    	}

	    	$data['total'] 		= $success;
	    	$data['success'] 	= TRUE;
	    	echo json_encode($data);
	    }    	
	}

	public function editKegiatan(){
		if($this->session->userdata('kode_unitkerja')==""){
			$id 				= ($this->input->get('id', TRUE) ? $this->input->get('id', TRUE) : '');
			$kode_programrpjm   = ($this->input->get('kode_programrpjm', TRUE) ? $this->input->get('kode_programrpjm', TRUE) : '');
			$kode_kegiatanrpjm 	= ($this->input->get('kode_kegiatanrpjm', TRUE) ? $this->input->get('kode_kegiatanrpjm', TRUE) : '');
			$kegiatan 			= ($this->input->get('kegiatan', TRUE) ? $this->input->get('kegiatan', TRUE) : '');
			$no_urut 			= ($this->input->get('no_urut', TRUE) ? $this->input->get('no_urut', TRUE) : '');
			$kode_unitkerja		= ($this->input->get('kode_unitkerja', TRUE) ? $this->input->get('kode_unitkerja', TRUE) : '');
			
	    	if(empty($kode_kegiatanrpjm)){
	    		$success = 2;
	    	} else {
	    		$this->m_kegiatan->updateKegiatan($id, $kode_programrpjm, $kode_kegiatanrpjm, $kegiatan, $no_urut, $kode_unitkerja);
	    		$success = 1;
	    	}

	    	$data['total'] 		= $success;
	    	$data['success'] 	= TRUE;
	    	echo json_encode($data);
	    } else {
			$id 				= ($this->input->get('id', TRUE) ? $this->input->get('id', TRUE) : '');
			$kode_programrpjm   = ($this->input->get('kode_programrpjm', TRUE) ? $this->input->get('kode_programrpjm', TRUE) : '');
			$kode_kegiatanrpjm 	= ($this->input->get('kode_kegiatanrpjm', TRUE) ? $this->input->get('kode_kegiatanrpjm', TRUE) : '');
			$kegiatan 			= ($this->input->get('kegiatan', TRUE) ? $this->input->get('kegiatan', TRUE) : '');
			$no_urut 			= ($this->input->get('no_urut', TRUE) ? $this->input->get('no_urut', TRUE) : '');
			$kode_unitkerja		= ($this->input->get('kode_unitkerja', TRUE) ? $this->input->get('kode_unitkerja', TRUE) : '');
			
	    	if(empty($kode_kegiatanrpjm)){
	    		$success = 2;
	    	} else {
	    		$this->m_kegiatan->updateKegiatanFilter($id, $kode_programrpjm, $kode_kegiatanrpjm, $kegiatan, $no_urut, $kode_unitkerja);
	    		$success = 1;
	    	}

	    	$data['total'] 		= $success;
	    	$data['success'] 	= TRUE;
	    	echo json_encode($data);
	    }

	}

	public function searchKegiatan(){
		if($this->session->userdata('kode_unitkerja')==""){
			$name 		= ($this->input->post('name', TRUE) ? $this->input->post('name', TRUE) : '');
	    	$result 	= $this->m_kegiatan->searchKegiatan($name);
	    	foreach ($result->result() as $key => $value) {
				$data['data'][]=array(
					'id' 				=> $value->id,
					'kode_kegiatanrpjm'	=> $value->kode_kegiatanrpjm,
					'kegiatan'			=> $value->kegiatan,
					'kode_programrpjm' 	=> $value->kode_programrpjm,
					'programrpjm' 		=> $value->programrpjm,
					'no_urut'			=> $value->no_urut
				);
			}
			$data['success']	= true;
			echo json_encode($data);
		} else {
			$name 		= ($this->input->post('name', TRUE) ? $this->input->post('name', TRUE) : '');
	    	$result 	= $this->m_kegiatan->searchKegiatanFilter($name);
	    	foreach ($result->result() as $key => $value) {
				$data['data'][]=array(
					'id' 				=> $value->id,
					'kode_kegiatanrpjm'	=> $value->kode_kegiatanrpjm,
					'kegiatan'			=> $value->kegiatan,
					'kode_programrpjm' 	=> $value->kode_programrpjm,
					'programrpjm' 		=> $value->programrpjm,
					'no_urut'			=> $value->no_urut
				);
			}
			$data['success']	= true;
			echo json_encode($data);
		}
	}

	public function searchLookupProgram(){
		$name 		= ($this->input->post('name', TRUE) ? $this->input->post('name', TRUE) : '');
    	$result 	= $this->m_kegiatan->searchLookupProgram($name);
    	foreach ($result->result() as $key => $value) {
			$data['data'][]=array(
				'id' 				=> $value->id,
				'kode_programrpjm'	=> $value->kode_programrpjm,
				'programrpjm' 		=> $value->programrpjm,
				'no_urut'			=> $value->no_urut
			);
		}
		$data['success']	= true;
		echo json_encode($data);
	}

	public function searchLookupUnitkerja(){
		$name 		= ($this->input->post('name', TRUE) ? $this->input->post('name', TRUE) : '');
    	$result 	= $this->m_kegiatan->searchLookupUnitkerja($name);
    	foreach ($result->result() as $key => $value) {
			$data['data'][]=array(
				'id' 				=> $value->id,
				'kode_unitkerja'	=> $value->kode_unitkerja,
				'unitkerja' 		=> $value->unitkerja
			);
		}
		$data['success']	= true;
		echo json_encode($data);
	}
}