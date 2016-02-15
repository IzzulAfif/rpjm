<?php (defined('BASEPATH')) OR exit('No direct script access allowed');
/*
|---------------------------------
| Ardian Webi Kirda 
| Copyright Ardian Webi Kira 
| Created By ian  18-01-2015
| Supported by BAPPEDA BANYUMAS
|---------------------------------
*/
class C_satuan extends IAN_Controller{

	public function __construct(){
		parent::__construct();
		$this->load->model('satuan/m_satuan');
	}

	public function getUrusan(){
        $start      = ($this->input->post('start', TRUE) ? $this->input->post('start', TRUE) : 0);
        $limit      = ($this->input->post('limit', TRUE) ? $this->input->post('limit', TRUE) : 20);
		
		$result 		= $this->m_satuan->getGridUrusan($start, $limit);
		$resultCount 	= $this->m_satuan->countGridUrusan();
		$count 			= $resultCount->num_rows();

		foreach ($result->result() as $key => $value) {
			$data['data'][]=array(
				'id_satuan'		=> $value->id_satuan,
				'kode_satuan' 	=> $value->kode_satuan,
				'satuan'		=> $value->satuan
			);
		}

		$data['total'] 		= $count;
		$data['success']	= true;
		echo json_encode($data);
	}

	/* =========== Detail Bidang  ============== */
	public function getSatuanDetail(){
		
		$id_satuan = json_decode($this->input->post('id_satuan')); //$this->input->get('id_satuan');//
	    $result = $this->m_satuan->getSatuanDetail($id_satuan);

	    if($this->m_satuan->cekSatuanDetail($id_satuan) == 0){
	      $data['data'][] = array(        
			'id_satuan'		=> $value->id_satuan,
			'kode_satuan' 	=> $value->kode_satuan,
			'satuan'		=> $value->satuan   
	        );
	    } else {
			foreach ($result->result() as $key => $value) {
				$data['data'][]=array(
					'id_satuan'		=> $value->id_satuan,
					'kode_satuan' 	=> $value->kode_satuan,
					'satuan'		=> $value->satuan   
				);
			}
		}

        $data['success'] = TRUE;
        echo json_encode($data);
	}

	public function getSatuan(){
        $start      = ($this->input->post('start', TRUE) ? $this->input->post('start', TRUE) : 0);
        $limit      = ($this->input->post('limit', TRUE) ? $this->input->post('limit', TRUE) : 20);
		
		$result 		= $this->m_satuan->getGridSatuan($start, $limit);
		$resultCount 	= $this->m_satuan->countGridSatuan();
		$count 			= $resultCount->num_rows();

		foreach ($result->result() as $key => $value) {
			$data['data'][]=array(
				'id_satuan'		=> $value->id,
				'kode_satuan' 	=> $value->kode_satuan,
				'satuan'		=> $value->satuan   
			);
		}

		$data['total'] 		= $count;
		$data['success']	= true;
		echo json_encode($data);
	}

	public function delSatuan(){
		$kode_satuan = ($this->input->get('kode_satuan', TRUE) ? $this->input->get('kode_satuan', TRUE) : '');
		$cekResult = $this->m_satuan->cekRelasi($kode_satuan);

		if($cekResult == 0){
			$this->m_satuan->deleteSatuan($kode_satuan);
			$data['msg']=0;
		} else {
			$data['msg']=1;
		}
		echo json_encode($data);
	}

	public function saveSatuan(){
		$table 				= "tm_satuan";
		$kode_satuan 		= $this->m_satuan->getUnikKode($table);
		$id_satuan 			= ($this->input->get('id_satuan', TRUE) ? $this->input->get('id_satuan', TRUE) : '');
		$nama_bidangrpjm 	= ($this->input->get('nama_bidangrpjm', TRUE) ? $this->input->get('nama_bidangrpjm', TRUE) : '');
		$no_bidangrpjm   	= ($this->input->get('no_bidangrpjm', TRUE) ? $this->input->get('no_bidangrpjm', TRUE) : '');

    	if(empty($nama_bidangrpjm)){
    		$success 	= 0;
    	} elseif($this->m_satuan->cekData($no_bidangrpjm, $id_satuan) == 0){
    		$this->m_satuan->saveSatuan($id_satuan, $kode_satuan, $nama_bidangrpjm, $no_bidangrpjm);
    		$success = 1;
    	} else {
    		$success 	= 2;
    	}

    	$data['total'] 		= $success;
    	$data['success'] 	= TRUE;
    	echo json_encode($data);    	
	}

	public function editSatuan(){
		$id_satuan  		= ($this->input->get('id_satuan', TRUE) ? $this->input->get('id_satuan', TRUE) : '');
		$kode_satuan 	= ($this->input->get('kode_satuan', TRUE) ? $this->input->get('kode_satuan', TRUE) : '');
		$nama_bidangrpjm 	= ($this->input->get('nama_bidangrpjm', TRUE) ? $this->input->get('nama_bidangrpjm', TRUE) : '');
		$no_bidangrpjm   	= ($this->input->get('no_bidangrpjm', TRUE) ? $this->input->get('no_bidangrpjm', TRUE) : '');
		
    	if(empty($nama_bidangrpjm)){
    		$success = 0;
    	} else {
    		$this->m_satuan->updateSatuan($id_satuan, $kode_satuan, $nama_bidangrpjm, $no_bidangrpjm);
    		$success = 1;
    	} 

    	$data['total'] 		= $success;
    	$data['success'] 	= TRUE;
    	echo json_encode($data);

	}

	public function searchSatuan(){
		$id_satuan	= ($this->input->get('id_satuan', TRUE) ? $this->input->get('id_satuan', TRUE) : '');
		$name 		= ($this->input->get('name', TRUE) ? $this->input->get('name', TRUE) : '');
    	$result 	= $this->m_satuan->searchSatuan($name, $id_satuan);
    	foreach ($result->result() as $key => $value) {
			$data['data'][]=array(
				'id' 				=> $value->id,
				'id_satuan'		=> $value->id_satuan,
				'kode_satuan' 	=> $value->kode_satuan,
				'nama_bidangrpjm'	=> $value->nama_bidangrpjm,
				'no_bidangrpjm'		=> $value->no_bidangrpjm
			);
		}
		$data['success']	= true;
		echo json_encode($data);
	}

	public function searchUrusan(){
		$name 			= ($this->input->get('name', TRUE) ? $this->input->get('name', TRUE) : '');
    	$result 		= $this->m_satuan->searchUrusan($name);
    	foreach ($result->result() as $key => $value) {
			$data['data'][]=array(
				'id' 				=> $value->id,
				'id_satuan'		=> $value->id_satuan,
				'kode_satuan' 	=> $value->kode_satuan,
				'satuan'		=> $value->satuan,
				'no_urusan'			=> $value->no_urusan
			);
		}
		$data['success']	= true;
		echo json_encode($data);
	}
}