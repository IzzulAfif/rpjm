<?php (defined('BASEPATH')) OR exit('No direct script access allowed');
/*
|---------------------------------
| Ardian Webi Kirda 
| Copyright Ardian Webi Kira 
| Created By ian  18-01-2015
| Supported by BAPPEDA BANYUMAS
|---------------------------------
*/
class C_lingkupbidang extends IAN_Controller{

	public function __construct(){
		parent::__construct();
		$this->load->model('lingkupbidang/m_lingkupbidang');
	}

	/* =========== Detail Bidang  ============== */
	public function getLingkupBidangDetail(){
		
		$id_lingkupbidang = json_decode($this->input->post('id_lingkupbidang')); //$this->input->get('id_lingkupbidang');//
	    $result = $this->m_lingkupbidang->getLingkupBidangDetail($id_lingkupbidang);

	    if($this->m_lingkupbidang->cekLingkupBidangDetail($id_lingkupbidang) == 0){
	      $data['data'][] = array(        
			'id_lingkupbidang'		=> $value->id_lingkupbidang,
			'kode_lingkupbidang' 	=> $value->kode_lingkupbidang,
			'lingkupbidang'		=> $value->lingkupbidang   
	        );
	    } else {
			foreach ($result->result() as $key => $value) {
				$data['data'][]=array(
					'id_lingkupbidang'		=> $value->id_lingkupbidang,
					'kode_lingkupbidang' 	=> $value->kode_lingkupbidang,
					'lingkupbidang'		=> $value->lingkupbidang   
				);
			}
		}

        $data['success'] = TRUE;
        echo json_encode($data);
	}

	public function getLingkupBidang(){
        $start      = ($this->input->post('start', TRUE) ? $this->input->post('start', TRUE) : 0);
        $limit      = ($this->input->post('limit', TRUE) ? $this->input->post('limit', TRUE) : 20);
		
		$result 		= $this->m_lingkupbidang->getGridLingkupBidang($start, $limit);
		$resultCount 	= $this->m_lingkupbidang->countGridLingkupBidang();
		$count 			= $resultCount->num_rows();

		foreach ($result->result() as $key => $value) {
			$data['data'][]=array(
				'id_lingkupbidang'		=> $value->id,
				'kode_lingkupbidang' 	=> $value->kode_lingkupbidang,
				'lingkupbidang'		=> $value->lingkupbidang   
			);
		}

		$data['total'] 		= $count;
		$data['success']	= true;
		echo json_encode($data);
	}

	public function delLingkupBidang(){
		$kode_lingkupbidang = ($this->input->get('kode_lingkupbidang', TRUE) ? $this->input->get('kode_lingkupbidang', TRUE) : '');
		$cekResult = $this->m_lingkupbidang->cekRelasi($kode_lingkupbidang);

		if($cekResult == 0){
			$this->m_lingkupbidang->deleteLingkupBidang($kode_lingkupbidang);
			$data['msg']=0;
		} else {
			$data['msg']=1;
		}
		echo json_encode($data);
	}

	public function saveLingkupBidang(){
		$table 				= "tm_lingkupbidang";
		$kode_lingkupbidang 		= $this->m_lingkupbidang->getUnikKode($table);
		$id_lingkupbidang 			= ($this->input->get('id_lingkupbidang', TRUE) ? $this->input->get('id_lingkupbidang', TRUE) : '');
		$nama_bidangrpjm 	= ($this->input->get('nama_bidangrpjm', TRUE) ? $this->input->get('nama_bidangrpjm', TRUE) : '');
		$no_bidangrpjm   	= ($this->input->get('no_bidangrpjm', TRUE) ? $this->input->get('no_bidangrpjm', TRUE) : '');

    	if(empty($nama_bidangrpjm)){
    		$success 	= 0;
    	} elseif($this->m_lingkupbidang->cekData($no_bidangrpjm, $id_lingkupbidang) == 0){
    		$this->m_lingkupbidang->saveLingkupBidang($id_lingkupbidang, $kode_lingkupbidang, $nama_bidangrpjm, $no_bidangrpjm);
    		$success = 1;
    	} else {
    		$success 	= 2;
    	}

    	$data['total'] 		= $success;
    	$data['success'] 	= TRUE;
    	echo json_encode($data);    	
	}

	public function editLingkupBidang(){
		$id_lingkupbidang  		= ($this->input->get('id_lingkupbidang', TRUE) ? $this->input->get('id_lingkupbidang', TRUE) : '');
		$kode_lingkupbidang 	= ($this->input->get('kode_lingkupbidang', TRUE) ? $this->input->get('kode_lingkupbidang', TRUE) : '');
		$nama_bidangrpjm 	= ($this->input->get('nama_bidangrpjm', TRUE) ? $this->input->get('nama_bidangrpjm', TRUE) : '');
		$no_bidangrpjm   	= ($this->input->get('no_bidangrpjm', TRUE) ? $this->input->get('no_bidangrpjm', TRUE) : '');
		
    	if(empty($nama_bidangrpjm)){
    		$success = 0;
    	} else {
    		$this->m_lingkupbidang->updateLingkupBidang($id_lingkupbidang, $kode_lingkupbidang, $nama_bidangrpjm, $no_bidangrpjm);
    		$success = 1;
    	} 

    	$data['total'] 		= $success;
    	$data['success'] 	= TRUE;
    	echo json_encode($data);

	}

	public function searchLingkupBidang(){
		$name 			= ($this->input->get('name', TRUE) ? $this->input->get('name', TRUE) : '');
    	$result 		= $this->m_lingkupbidang->searchLingkupBidang($name);
    	foreach ($result->result() as $key => $value) {
			$data['data'][]=array(
				'id' 				=> $value->id,
				'id_lingkupbidang'		=> $value->id_lingkupbidang,
				'kode_lingkupbidang' 	=> $value->kode_lingkupbidang,
				'lingkupbidang'		=> $value->lingkupbidang,
				'no_urusan'			=> $value->no_urusan
			);
		}
		$data['success']	= true;
		echo json_encode($data);
	}
}