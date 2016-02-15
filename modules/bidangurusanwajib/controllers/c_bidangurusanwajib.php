<?php (defined('BASEPATH')) OR exit('No direct script access allowed');
/*
|---------------------------------
| Ardian Webi Kirda 
| Copyright Ardian Webi Kira 
| Created By ian  18-01-2015
| Supported by BAPPEDA BANYUMAS
|---------------------------------
*/
class C_bidangurusanwajib extends IAN_Controller{

	public function __construct(){
		parent::__construct();
		$this->load->model('bidangurusanwajib/m_bidangurusanwajib');
	}

	public function getSubUrusan(){
        $start      = ($this->input->post('start', TRUE) ? $this->input->post('start', TRUE) : 0);
        $limit      = ($this->input->post('limit', TRUE) ? $this->input->post('limit', TRUE) : 20);
		
		$result 		= $this->m_bidangurusanwajib->getGridSubUrusan($start, $limit);
		$resultCount 	= $this->m_bidangurusanwajib->countGridSubUrusan();
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

	/* =========== Detail Bidang  ============== */
	public function getBidangUrusanWajibDetail(){
		
		$kode_suburusan = json_decode($this->input->post('kode_suburusan'));
		$kode_urusan 	= json_decode($this->input->post('kode_urusan')); //$this->input->get('kode_suburusan');//
	    $result = $this->m_bidangurusanwajib->getBidangUrusanWajibDetail($kode_suburusan, $kode_urusan);

	    if($this->m_bidangurusanwajib->cekBidangUrusanWajibDetail($kode_suburusan) == 0){
	      $data['data'][] = array(        
			'id' 				=> '',
			'kode_suburusan'	=> 'kode_suburusan',
			'kode_bidangrpjm'	=> '',
			'nama_bidangrpjm'	=> '',
			'no_bidangrpjm'		=> ''        
	        );
	    } else {
			foreach ($result->result() as $key => $value) {
				$data['data'][]=array(
					'id' 				=> $value->id,
					'kode_suburusan'	=> $value->kode_suburusan,
					'kode_bidangrpjm'	=> $value->kode_bidangrpjm,
					'nama_bidangrpjm'	=> $value->nama_bidangrpjm,
					'no_bidangrpjm'		=> $value->no_bidangrpjm       
				);
			}
		}

        $data['success'] = TRUE;
        echo json_encode($data);
	}

	public function delBidangUrusanWajib(){
		$kode_bidangrpjm = ($this->input->get('kode_bidangrpjm', TRUE) ? $this->input->get('kode_bidangrpjm', TRUE) : '');
		$cekResult = $this->m_bidangurusanwajib->cekRelasi($kode_bidangrpjm);

		if($cekResult == 0){
			$this->m_bidangurusanwajib->deleteBidangUrusanWajib($kode_bidangrpjm);
			$data['msg']=0;
		} else {
			$data['msg']=1;
		}
		echo json_encode($data);
	}

	public function saveBidangUrusanWajib(){
		$table 				= "tm_bidangrpjm";
		$kode_bidangrpjm 	= $this->m_bidangurusanwajib->getUnikKode($table);
		$kode_suburusan 	= ($this->input->get('kode_suburusan', TRUE) ? $this->input->get('kode_suburusan', TRUE) : '');
		$nama_bidangrpjm 	= ($this->input->get('nama_bidangrpjm', TRUE) ? $this->input->get('nama_bidangrpjm', TRUE) : '');
		$no_bidangrpjm   	= ($this->input->get('no_bidangrpjm', TRUE) ? $this->input->get('no_bidangrpjm', TRUE) : '');

    	if(empty($nama_bidangrpjm)){
    		$success 	= 0;
    	} elseif($this->m_bidangurusanwajib->cekData($no_bidangrpjm, $kode_suburusan) == 0){
    		$this->m_bidangurusanwajib->saveBidangUrusanWajib($kode_suburusan, $kode_bidangrpjm, $nama_bidangrpjm, $no_bidangrpjm);
    		$success = 1;
    	} else {
    		$success 	= 2;
    	}

    	$data['total'] 		= $success;
    	$data['success'] 	= TRUE;
    	echo json_encode($data);    	
	}

	public function editBidangUrusanWajib(){
		$kode_suburusan  	= ($this->input->get('kode_suburusan', TRUE) ? $this->input->get('kode_suburusan', TRUE) : '');
		$kode_bidangrpjm 	= ($this->input->get('kode_bidangrpjm', TRUE) ? $this->input->get('kode_bidangrpjm', TRUE) : '');
		$nama_bidangrpjm 	= ($this->input->get('nama_bidangrpjm', TRUE) ? $this->input->get('nama_bidangrpjm', TRUE) : '');
		$no_bidangrpjm   	= ($this->input->get('no_bidangrpjm', TRUE) ? $this->input->get('no_bidangrpjm', TRUE) : '');
		
    	if(empty($nama_bidangrpjm)){
    		$success = 0;
    	} else {
    		$this->m_bidangurusanwajib->updateBidangUrusanWajib($kode_suburusan, $kode_bidangrpjm, $nama_bidangrpjm, $no_bidangrpjm);
    		$success = 1;
    	} 

    	$data['total'] 		= $success;
    	$data['success'] 	= TRUE;
    	echo json_encode($data);

	}

	public function searchBidangUrusanWajib(){
		$kode_suburusan	= ($this->input->get('kode_suburusan', TRUE) ? $this->input->get('kode_suburusan', TRUE) : '');
		$name 		= ($this->input->get('name', TRUE) ? $this->input->get('name', TRUE) : '');
    	$result 	= $this->m_bidangurusanwajib->searchBidangUrusanWajib($name, $kode_suburusan);
    	foreach ($result->result() as $key => $value) {
			$data['data'][]=array(
				'id' 				=> $value->id,
				'kode_suburusan'	=> $value->kode_suburusan,
				'kode_bidangrpjm' 	=> $value->kode_bidangrpjm,
				'nama_bidangrpjm'	=> $value->nama_bidangrpjm,
				'no_bidangrpjm'		=> $value->no_bidangrpjm
			);
		}
		$data['success']	= true;
		echo json_encode($data);
	}

	public function searchSubUrusan(){
		$name 			= ($this->input->get('name', TRUE) ? $this->input->get('name', TRUE) : '');
    	$result 		= $this->m_bidangurusanwajib->searchSubUrusan($name);
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
}