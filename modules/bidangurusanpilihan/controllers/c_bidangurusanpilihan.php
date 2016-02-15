<?php (defined('BASEPATH')) OR exit('No direct script access allowed');
/*
|---------------------------------
| Ardian Webi Kirda 
| Copyright Ardian Webi Kira 
| Created By ian  18-01-2015
| Supported by BAPPEDA BANYUMAS
|---------------------------------
*/
class C_bidangurusanpilihan extends IAN_Controller{

	public function __construct(){
		parent::__construct();
		$this->load->model('bidangurusanpilihan/m_bidangurusanpilihan');
	}

	public function getUrusan(){
        $start      = ($this->input->post('start', TRUE) ? $this->input->post('start', TRUE) : 0);
        $limit      = ($this->input->post('limit', TRUE) ? $this->input->post('limit', TRUE) : 20);
		
		$result 		= $this->m_bidangurusanpilihan->getGridUrusan($start, $limit);
		$resultCount 	= $this->m_bidangurusanpilihan->countGridUrusan();
		$count 			= $resultCount->num_rows();

		foreach ($result->result() as $key => $value) {
			$data['data'][]=array(
				'id' 				=> $value->id,
				'kode_urusan'		=> $value->kode_urusan,
				'kode_urusan_uu' 	=> $value->kode_urusan_uu,
				'nama_urusan'		=> $value->nama_urusan,
				'no_urusan'			=> $value->no_urusan
			);
		}

		$data['total'] 		= $count;
		$data['success']	= true;
		echo json_encode($data);
	}

	/* =========== Detail Bidang  ============== */
	public function getBidangUrusanPilihanDetail(){
		
		$kode_urusan = json_decode($this->input->post('kode_urusan')); //$this->input->get('kode_urusan');//
	    $result = $this->m_bidangurusanpilihan->getBidangUrusanPilihanDetail($kode_urusan);

	    if($this->m_bidangurusanpilihan->cekBidangUrusanPilihanDetail($kode_urusan) == 0){
	      $data['data'][] = array(        
			'id' 				=> '',
			'kode_urusan'		=> 'kode_urusan',
			'kode_bidangrpjm'	=> '',
			'nama_bidangrpjm'	=> '',
			'no_bidangrpjm'		=> ''        
	        );
	    } else {
			foreach ($result->result() as $key => $value) {
				$data['data'][]=array(
					'id' 				=> $value->id,
					'kode_urusan'		=> $value->kode_urusan,
					'kode_bidangrpjm'	=> $value->kode_bidangrpjm,
					'nama_bidangrpjm'	=> $value->nama_bidangrpjm,
					'no_bidangrpjm'		=> $value->no_bidangrpjm       
				);
			}
		}

        $data['success'] = TRUE;
        echo json_encode($data);
	}

	public function delBidangUrusanPilihan(){
		$kode_bidangrpjm = ($this->input->get('kode_bidangrpjm', TRUE) ? $this->input->get('kode_bidangrpjm', TRUE) : '');
		$cekResult = $this->m_bidangurusanpilihan->cekRelasi($kode_bidangrpjm);

		if($cekResult == 0){
			$this->m_bidangurusanpilihan->deleteBidangUrusanPilihan($kode_bidangrpjm);
			$data['msg']=0;
		} else {
			$data['msg']=1;
		}
		echo json_encode($data);
	}

	public function saveBidangUrusanPilihan(){
		$table 				= "tm_bidangrpjm";
		$kode_bidangrpjm 	= $this->m_bidangurusanpilihan->getUnikKode($table);
		$kode_urusan 	= ($this->input->get('kode_urusan', TRUE) ? $this->input->get('kode_urusan', TRUE) : '');
		$nama_bidangrpjm 	= ($this->input->get('nama_bidangrpjm', TRUE) ? $this->input->get('nama_bidangrpjm', TRUE) : '');
		$no_bidangrpjm   	= ($this->input->get('no_bidangrpjm', TRUE) ? $this->input->get('no_bidangrpjm', TRUE) : '');

    	if(empty($nama_bidangrpjm)){
    		$success 	= 0;
    	} elseif($this->m_bidangurusanpilihan->cekData($no_bidangrpjm, $kode_urusan) == 0){
    		$this->m_bidangurusanpilihan->saveBidangUrusanPilihan($kode_urusan, $kode_bidangrpjm, $nama_bidangrpjm, $no_bidangrpjm);
    		$success = 1;
    	} else {
    		$success 	= 2;
    	}

    	$data['total'] 		= $success;
    	$data['success'] 	= TRUE;
    	echo json_encode($data);    	
	}

	public function editBidangUrusanPilihan(){
		$kode_urusan  		= ($this->input->get('kode_urusan', TRUE) ? $this->input->get('kode_urusan', TRUE) : '');
		$kode_bidangrpjm 	= ($this->input->get('kode_bidangrpjm', TRUE) ? $this->input->get('kode_bidangrpjm', TRUE) : '');
		$nama_bidangrpjm 	= ($this->input->get('nama_bidangrpjm', TRUE) ? $this->input->get('nama_bidangrpjm', TRUE) : '');
		$no_bidangrpjm   	= ($this->input->get('no_bidangrpjm', TRUE) ? $this->input->get('no_bidangrpjm', TRUE) : '');
		
    	if(empty($nama_bidangrpjm)){
    		$success = 0;
    	} else {
    		$this->m_bidangurusanpilihan->updateBidangUrusanPilihan($kode_urusan, $kode_bidangrpjm, $nama_bidangrpjm, $no_bidangrpjm);
    		$success = 1;
    	} 

    	$data['total'] 		= $success;
    	$data['success'] 	= TRUE;
    	echo json_encode($data);

	}

	public function searchBidangUrusanPilihan(){
		$kode_urusan	= ($this->input->get('kode_urusan', TRUE) ? $this->input->get('kode_urusan', TRUE) : '');
		$name 		= ($this->input->get('name', TRUE) ? $this->input->get('name', TRUE) : '');
    	$result 	= $this->m_bidangurusanpilihan->searchBidangUrusanPilihan($name, $kode_urusan);
    	foreach ($result->result() as $key => $value) {
			$data['data'][]=array(
				'id' 				=> $value->id,
				'kode_urusan'		=> $value->kode_urusan,
				'kode_bidangrpjm' 	=> $value->kode_bidangrpjm,
				'nama_bidangrpjm'	=> $value->nama_bidangrpjm,
				'no_bidangrpjm'		=> $value->no_bidangrpjm
			);
		}
		$data['success']	= true;
		echo json_encode($data);
	}

	public function searchUrusan(){
		$name 			= ($this->input->get('name', TRUE) ? $this->input->get('name', TRUE) : '');
    	$result 		= $this->m_bidangurusanpilihan->searchUrusan($name);
    	foreach ($result->result() as $key => $value) {
			$data['data'][]=array(
				'id' 				=> $value->id,
				'kode_urusan'		=> $value->kode_urusan,
				'kode_urusan_uu' 	=> $value->kode_urusan_uu,
				'nama_urusan'		=> $value->nama_urusan,
				'no_urusan'			=> $value->no_urusan
			);
		}
		$data['success']	= true;
		echo json_encode($data);
	}
}