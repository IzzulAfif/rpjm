<?php (defined('BASEPATH')) OR exit('No direct script access allowed');
/*
|---------------------------------
| Ardian Webi Kirda 
| Copyright Ardian Webi Kira 
| Created By ian  18-01-2015
| Supported by Vikosha Perdana
|---------------------------------
*/
class C_program extends IAN_Controller{

	public function __construct(){
		parent::__construct();
		$this->load->model('program/m_program');
	}

	/* =========== Detail Program  ============== */
	public function getProgramFilter(){
		
		$value = json_decode($this->input->post('value')); //$this->input->get('kode_urusan');//
	    $result = $this->m_program->getProgramFilter($value);

	    if($this->m_program->cekProgramFilter($value) == 0){
	      $data['data'][] = array(        
			'id' 				=> 'id',
			'kode_programrpjm'	=> '',
			'kode_bidangrpjm' 	=> $value,
			'nama_bidangrpjm'	=> '',
			'programrpjm'		=> '',
			'no_urut'			=> '',
			'kode_subperiode'	=> ''   
	        );
	    } else {
			foreach ($result->result() as $key => $value) {
				$data['data'][]=array(
					'id' 				=> $value->id,
					'kode_programrpjm'	=> $value->kode_programrpjm,
					'kode_bidangrpjm' 	=> $value->kode_bidangrpjm,
					'nama_bidangrpjm'	=> $value->nama_bidangrpjm,
					'programrpjm'		=> $value->programrpjm,
					'no_urut'			=> $value->no_urut,
					'kode_subperiode'	=> $value->kode_subperiode      
				);
			}
		}

        $data['success'] = TRUE;
        echo json_encode($data);
	}

	public function getLookupBidang(){
		$resultCount 	= $this->m_program->countGridLookupBidang();
		$count 			= $resultCount->num_rows();

		foreach ($resultCount->result() as $key => $value) {
			$data['data'][]=array(
				'id' 				=> $value->id,
				'kode_bidangrpjm'	=> $value->kode_bidangrpjm,
				'nama_bidangrpjm' 	=> $value->nama_bidangrpjm,
				'no_bidangrpjm'		=> $value->no_bidangrpjm,
				'nama_urusan'		=> $value->nama_urusan
			);
		}

		$data['total'] 		= $count;
		$data['success']	= true;
		echo json_encode($data);
	}

	public function getSubPeriode(){
		$resultCount 	= $this->m_program->countGridSubPeriode();
		$count 			= $resultCount->num_rows();

		foreach ($resultCount->result() as $key => $value) {
			$data['data'][]=array(
				'id' 				=> $value->id,
				'kode_subperiode'	=> $value->kode_subperiode,
				'subperiode' 		=> $value->subperiode,
				'kode_periode'		=> $value->kode_periode,
				'status'			=> $value->status
			);
		}

		$data['total'] 		= $count;
		$data['success']	= true;
		echo json_encode($data);
	}

	public function getProgram(){
        $start      	= ($this->input->post('start', TRUE) ? $this->input->post('start', TRUE) : 0);
        $limit      	= ($this->input->post('limit', TRUE) ? $this->input->post('limit', TRUE) : 20);
        $value 			= json_decode($this->input->post('value'));
		$result 		= $this->m_program->getGridProgram($start, $limit, $value);
		$resultCount 	= $this->m_program->countGridProgram($value);
		$count 			= $resultCount->num_rows();

		foreach ($resultCount->result() as $key => $value) {
			$data['data'][]=array(
				'id' 				=> $value->id,
				'kode_programrpjm'	=> $value->kode_programrpjm,
				'kode_bidangrpjm' 	=> $value->kode_bidangrpjm,
				'nama_bidangrpjm'	=> $value->nama_bidangrpjm,
				'programrpjm'		=> $value->programrpjm,
				'no_urut'			=> $value->no_urut,
				'kode_subperiode'	=> $value->kode_subperiode
			);
		}

		$data['total'] 		= $count;
		$data['success']	= true;
		echo json_encode($data);
	}

	public function delProgram(){
		$kode_programrpjm = ($this->input->post('kode_programrpjm', TRUE) ? $this->input->post('kode_programrpjm', TRUE) : '');
		$cekResult = $this->m_program->cekRelasi($kode_programrpjm);

		if($cekResult == 0){
			$this->m_program->deleteProgram($kode_programrpjm);
			$data['msg']=0;
		} else {
			$data['msg']=1;
		}
		echo json_encode($data);
	}

	public function saveProgram(){
		$table 				= "tm_programrpjm";
		$kode_programrpjm 	= $this->m_program->getUnikKode($table);
		$kode_bidangrpjm    = ($this->input->get('kode_bidangrpjm', TRUE) ? $this->input->get('kode_bidangrpjm', TRUE) : '');
		$programrpjm 		= ($this->input->get('programrpjm', TRUE) ? $this->input->get('programrpjm', TRUE) : '');
		$no_urut 			= ($this->input->get('no_urut', TRUE) ? $this->input->get('no_urut', TRUE) : '');
		$kode_subperiode    = ($this->input->get('kode_subperiode', TRUE) ? $this->input->get('kode_subperiode', TRUE) : '');

    	if($programrpjm==""){
    		$success = 3;
    	} elseif($this->m_program->cekData($kode_programrpjm, $no_urut) == 0){
    		$this->m_program->saveProgram($kode_bidangrpjm, $kode_programrpjm, $programrpjm, $no_urut, $kode_subperiode);
    		$success = 1;
    	} else {
    		$success = 2;
    	}

    	$data['total'] 		= $success;
    	$data['success'] 	= TRUE;
    	echo json_encode($data);    	
	}

	public function editProgram(){
		$id 				= ($this->input->get('id', TRUE) ? $this->input->get('id', TRUE) : '');
		$kode_bidangrpjm    = ($this->input->get('kode_bidangrpjm', TRUE) ? $this->input->get('kode_bidangrpjm', TRUE) : '');
		$kode_programrpjm 	= ($this->input->get('kode_programrpjm', TRUE) ? $this->input->get('kode_programrpjm', TRUE) : '');
		$programrpjm 		= ($this->input->get('programrpjm', TRUE) ? $this->input->get('programrpjm', TRUE) : '');
		$no_urut 			= ($this->input->get('no_urut', TRUE) ? $this->input->get('no_urut', TRUE) : '');
		$kode_subperiode    = ($this->input->get('kode_subperiode', TRUE) ? $this->input->get('kode_subperiode', TRUE) : '');
		
    	if(empty($kode_programrpjm)){
    		$success = 2;
    	} else {
    		$this->m_program->updateProgram($id, $kode_bidangrpjm, $kode_programrpjm, $programrpjm, $no_urut, $kode_subperiode);
    		$success = 1;
    	}

    	$data['total'] 		= $success;
    	$data['success'] 	= TRUE;
    	echo json_encode($data);

	}

	public function searchProgram(){
		$name 		= ($this->input->post('name', TRUE) ? $this->input->post('name', TRUE) : '');
    	$result 	= $this->m_program->searchProgram($name);
    	foreach ($result->result() as $key => $value) {
			$data['data'][]=array(
				'id' 				=> $value->id,
				'kode_programrpjm'	=> $value->kode_programrpjm,
				'kode_bidangrpjm' 	=> $value->kode_bidangrpjm,
				'programrpjm'		=> $value->programrpjm,
				'kode_subperiode'	=> $value->kode_subperiode
			);
		}
		$data['success']	= true;
		echo json_encode($data);
	}

	public function searchLookupBidang(){
		$name 		= ($this->input->post('name', TRUE) ? $this->input->post('name', TRUE) : '');
    	$result 	= $this->m_program->searchLookupBidang($name);
    	foreach ($result->result() as $key => $value) {
			$data['data'][]=array(
				'id' 				=> $value->id,
				'kode_bidangrpjm'	=> $value->kode_bidangrpjm,
				'nama_bidangrpjm' 	=> $value->nama_bidangrpjm,
				'no_bidangrpjm'		=> $value->no_bidangrpjm,
				'nama_urusan'		=> $value->nama_urusan
			);
		}
		$data['success']	= true;
		echo json_encode($data);
	}
}