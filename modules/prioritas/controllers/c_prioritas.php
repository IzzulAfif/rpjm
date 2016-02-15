<?php (defined('BASEPATH')) OR exit('No direct script access allowed');
/*
|---------------------------------
| Ardian Webi Kirda 
| Copyright Ardian Webi Kira 
| Created By ian  18-01-2015
| Supported by BAPPEDA BANYUMAS
|---------------------------------
*/
class C_prioritas extends IAN_Controller{

	public function __construct(){
		parent::__construct();
		$this->load->model('prioritas/m_prioritas');
	}

	/* =========== Detail Bidang  ============== */
	public function getPrioritasDetail(){
		
		$id_prioritas = json_decode($this->input->post('id_prioritas')); //$this->input->get('id_prioritas');//
	    $result = $this->m_prioritas->getPrioritasDetail($id_prioritas);

	    if($this->m_prioritas->cekPrioritasDetail($id_prioritas) == 0){
	      $data['data'][] = array(        
			'id_prioritas'		=> $value->id_prioritas,
			'kode_prioritas' 	=> $value->kode_prioritas,
			'prioritas'		=> $value->prioritas   
	        );
	    } else {
			foreach ($result->result() as $key => $value) {
				$data['data'][]=array(
					'id_prioritas'		=> $value->id_prioritas,
					'kode_prioritas' 	=> $value->kode_prioritas,
					'prioritas'		=> $value->prioritas   
				);
			}
		}

        $data['success'] = TRUE;
        echo json_encode($data);
	}

	public function getPrioritas(){
        $start      = ($this->input->post('start', TRUE) ? $this->input->post('start', TRUE) : 0);
        $limit      = ($this->input->post('limit', TRUE) ? $this->input->post('limit', TRUE) : 20);
		
		$result 		= $this->m_prioritas->getGridPrioritas($start, $limit);
		$resultCount 	= $this->m_prioritas->countGridPrioritas();
		$count 			= $resultCount->num_rows();

		foreach ($result->result() as $key => $value) {
			$data['data'][]=array(
				'id_prioritas'		=> $value->id,
				'kode_prioritas' 	=> $value->kode_prioritas,
				'prioritas'		=> $value->prioritas   
			);
		}

		$data['total'] 		= $count;
		$data['success']	= true;
		echo json_encode($data);
	}

	public function delPrioritas(){
		$kode_prioritas = ($this->input->get('kode_prioritas', TRUE) ? $this->input->get('kode_prioritas', TRUE) : '');
		$cekResult = $this->m_prioritas->cekRelasi($kode_prioritas);

		if($cekResult == 0){
			$this->m_prioritas->deletePrioritas($kode_prioritas);
			$data['msg']=0;
		} else {
			$data['msg']=1;
		}
		echo json_encode($data);
	}

	public function savePrioritas(){
		$table 				= "tm_prioritas";
		$kode_prioritas 		= $this->m_prioritas->getUnikKode($table);
		$id_prioritas 			= ($this->input->get('id_prioritas', TRUE) ? $this->input->get('id_prioritas', TRUE) : '');
		$nama_bidangrpjm 	= ($this->input->get('nama_bidangrpjm', TRUE) ? $this->input->get('nama_bidangrpjm', TRUE) : '');
		$no_bidangrpjm   	= ($this->input->get('no_bidangrpjm', TRUE) ? $this->input->get('no_bidangrpjm', TRUE) : '');

    	if(empty($nama_bidangrpjm)){
    		$success 	= 0;
    	} elseif($this->m_prioritas->cekData($no_bidangrpjm, $id_prioritas) == 0){
    		$this->m_prioritas->savePrioritas($id_prioritas, $kode_prioritas, $nama_bidangrpjm, $no_bidangrpjm);
    		$success = 1;
    	} else {
    		$success 	= 2;
    	}

    	$data['total'] 		= $success;
    	$data['success'] 	= TRUE;
    	echo json_encode($data);    	
	}

	public function editPrioritas(){
		$id_prioritas  		= ($this->input->get('id_prioritas', TRUE) ? $this->input->get('id_prioritas', TRUE) : '');
		$kode_prioritas 	= ($this->input->get('kode_prioritas', TRUE) ? $this->input->get('kode_prioritas', TRUE) : '');
		$nama_bidangrpjm 	= ($this->input->get('nama_bidangrpjm', TRUE) ? $this->input->get('nama_bidangrpjm', TRUE) : '');
		$no_bidangrpjm   	= ($this->input->get('no_bidangrpjm', TRUE) ? $this->input->get('no_bidangrpjm', TRUE) : '');
		
    	if(empty($nama_bidangrpjm)){
    		$success = 0;
    	} else {
    		$this->m_prioritas->updatePrioritas($id_prioritas, $kode_prioritas, $nama_bidangrpjm, $no_bidangrpjm);
    		$success = 1;
    	} 

    	$data['total'] 		= $success;
    	$data['success'] 	= TRUE;
    	echo json_encode($data);

	}

	public function searchPrioritas(){
		$name 			= ($this->input->get('name', TRUE) ? $this->input->get('name', TRUE) : '');
    	$result 		= $this->m_prioritas->searchPrioritas($name);
    	foreach ($result->result() as $key => $value) {
			$data['data'][]=array(
				'id' 				=> $value->id,
				'id_prioritas'		=> $value->id_prioritas,
				'kode_prioritas' 	=> $value->kode_prioritas,
				'prioritas'		=> $value->prioritas,
				'no_urusan'			=> $value->no_urusan
			);
		}
		$data['success']	= true;
		echo json_encode($data);
	}
}