<?php (defined('BASEPATH')) OR exit('No direct script access allowed');
/*
|---------------------------------
| Ardian Webi Kirda 
| Copyright Ardian Webi Kira 
| Created By ian  18-01-2015
| Supported by BAPPEDA BANYUMAS
|---------------------------------
*/
class C_bidangdesa extends IAN_Controller{

	public function __construct(){
		parent::__construct();
		$this->load->model('bidangdesa/m_bidangdesa');
	}

	/* =========== Detail Bidang  ============== */
	public function getBidangDesaDetail(){
		
		$id_bidangdesa = json_decode($this->input->post('id_bidangdesa')); //$this->input->get('id_bidangdesa');//
	    $result = $this->m_bidangdesa->getBidangDesaDetail($id_bidangdesa);

	    if($this->m_bidangdesa->cekBidangDesaDetail($id_bidangdesa) == 0){
	      $data['data'][] = array(        
			'id_bidangdesa'		=> $value->id_bidangdesa,
			'kode_bidangdesa' 	=> $value->kode_bidangdesa,
			'bidangdesa'		=> $value->bidangdesa   
	        );
	    } else {
			foreach ($result->result() as $key => $value) {
				$data['data'][]=array(
					'id_bidangdesa'		=> $value->id_bidangdesa,
					'kode_bidangdesa' 	=> $value->kode_bidangdesa,
					'bidangdesa'		=> $value->bidangdesa   
				);
			}
		}

        $data['success'] = TRUE;
        echo json_encode($data);
	}

	public function getBidangDesa(){
        $start      = ($this->input->post('start', TRUE) ? $this->input->post('start', TRUE) : 0);
        $limit      = ($this->input->post('limit', TRUE) ? $this->input->post('limit', TRUE) : 20);
		
		$result 		= $this->m_bidangdesa->getGridBidangDesa($start, $limit);
		$resultCount 	= $this->m_bidangdesa->countGridBidangDesa();
		$count 			= $resultCount->num_rows();

		foreach ($result->result() as $key => $value) {
			$data['data'][]=array(
				'id_bidangdesa'		=> $value->id,
				'kode_bidangdesa' 	=> $value->kode_bidangdesa,
				'bidangdesa'		=> $value->bidangdesa   
			);
		}

		$data['total'] 		= $count;
		$data['success']	= true;
		echo json_encode($data);
	}

	public function delBidangDesa(){
		$kode_bidangdesa = ($this->input->get('kode_bidangdesa', TRUE) ? $this->input->get('kode_bidangdesa', TRUE) : '');
		$cekResult = $this->m_bidangdesa->cekRelasi($kode_bidangdesa);

		if($cekResult == 0){
			$this->m_bidangdesa->deleteBidangDesa($kode_bidangdesa);
			$data['msg']=0;
		} else {
			$data['msg']=1;
		}
		echo json_encode($data);
	}

	public function saveBidangDesa(){
		$table 				= "tm_bidangdesa";
		$kode_bidangdesa 		= $this->m_bidangdesa->getUnikKode($table);
		$id_bidangdesa 			= ($this->input->get('id_bidangdesa', TRUE) ? $this->input->get('id_bidangdesa', TRUE) : '');
		$nama_bidangrpjm 	= ($this->input->get('nama_bidangrpjm', TRUE) ? $this->input->get('nama_bidangrpjm', TRUE) : '');
		$no_bidangrpjm   	= ($this->input->get('no_bidangrpjm', TRUE) ? $this->input->get('no_bidangrpjm', TRUE) : '');

    	if(empty($nama_bidangrpjm)){
    		$success 	= 0;
    	} elseif($this->m_bidangdesa->cekData($no_bidangrpjm, $id_bidangdesa) == 0){
    		$this->m_bidangdesa->saveBidangDesa($id_bidangdesa, $kode_bidangdesa, $nama_bidangrpjm, $no_bidangrpjm);
    		$success = 1;
    	} else {
    		$success 	= 2;
    	}

    	$data['total'] 		= $success;
    	$data['success'] 	= TRUE;
    	echo json_encode($data);    	
	}

	public function editBidangDesa(){
		$id_bidangdesa  		= ($this->input->get('id_bidangdesa', TRUE) ? $this->input->get('id_bidangdesa', TRUE) : '');
		$kode_bidangdesa 	= ($this->input->get('kode_bidangdesa', TRUE) ? $this->input->get('kode_bidangdesa', TRUE) : '');
		$nama_bidangrpjm 	= ($this->input->get('nama_bidangrpjm', TRUE) ? $this->input->get('nama_bidangrpjm', TRUE) : '');
		$no_bidangrpjm   	= ($this->input->get('no_bidangrpjm', TRUE) ? $this->input->get('no_bidangrpjm', TRUE) : '');
		
    	if(empty($nama_bidangrpjm)){
    		$success = 0;
    	} else {
    		$this->m_bidangdesa->updateBidangDesa($id_bidangdesa, $kode_bidangdesa, $nama_bidangrpjm, $no_bidangrpjm);
    		$success = 1;
    	} 

    	$data['total'] 		= $success;
    	$data['success'] 	= TRUE;
    	echo json_encode($data);

	}

	public function searchBidangDesa(){
		$name 			= ($this->input->get('name', TRUE) ? $this->input->get('name', TRUE) : '');
    	$result 		= $this->m_bidangdesa->searchBidangDesa($name);
    	foreach ($result->result() as $key => $value) {
			$data['data'][]=array(
				'id' 				=> $value->id,
				'id_bidangdesa'		=> $value->id_bidangdesa,
				'kode_bidangdesa' 	=> $value->kode_bidangdesa,
				'bidangdesa'		=> $value->bidangdesa,
				'no_urusan'			=> $value->no_urusan
			);
		}
		$data['success']	= true;
		echo json_encode($data);
	}
}