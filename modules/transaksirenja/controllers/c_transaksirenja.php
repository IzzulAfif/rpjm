<?php (defined('BASEPATH')) OR exit('No direct script access allowed');
/*
|---------------------------------
| Ardian Webi Kirda 
| Copyright Ardian Webi Kira 
| Created By ian  18-01-2015
| Supported by Vikosha Perdana
|---------------------------------
*/
class C_transaksirenja extends IAN_Controller{

	public function __construct(){
		parent::__construct();
		$this->load->model('transaksirenja/m_transaksirenja');
	}

	/* =============== Lookup Grid Kegiatan =============== */
	public function getLookupKegiatan(){
		if($this->session->userdata('kode_unitkerja')==""){
			$resultCount 	= $this->m_transaksirenja->countGridLookupKegiatan();
			$count 			= $resultCount->num_rows();

			foreach ($resultCount->result() as $key => $value) {
				$data['data'][]=array(
					'id' 				=> $value->id,
					'kode_kegiatanrpjm'	=> $value->kode_kegiatanrpjm,
					'kegiatan' 			=> $value->kegiatan,
					'no_urut'			=> $value->no_urut
				);
			}

			$data['total'] 		= $count;
			$data['success']	= true;
			echo json_encode($data);
		} else {
			$resultCount 	= $this->m_transaksirenja->countGridLookupKegiatanFilter();
			$count 			= $resultCount->num_rows();

			foreach ($resultCount->result() as $key => $value) {
				$data['data'][]=array(
					'id' 				=> $value->id,
					'kode_kegiatanrpjm'	=> $value->kode_kegiatanrpjm,
					'kegiatan' 			=> $value->kegiatan,
					'no_urut'			=> $value->no_urut
				);
			}

			$data['total'] 		= $count;
			$data['success']	= true;
			echo json_encode($data);
		}
	}

	public function getComboKecamatan(){
		$resultCount 	= $this->m_transaksirenja->countGridComboKecamatan();
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

	public function getComboKelurahan(){
		$resultCount 	= $this->m_transaksirenja->countGridComboKelurahan();
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

	public function getComboDesa(){
		$resultCount 	= $this->m_transaksirenja->countGridComboDesa();
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

	/* =============== Lookup Usulan =============== */
	public function getLookupUsulanSkpd(){
		$resultCount 	= $this->m_transaksirenja->countGridLookupUsulanSkpd();
		$count 			= $resultCount->num_rows();

		foreach ($resultCount->result() as $key => $value) {
			$data['data'][]=array(
				'id' 				=> $value->id,
				'kode_musrenbang'	=> $value->kode_musrenbang,
				'kegiatan' 			=> $value->kegiatan,
				'penerimaan_lain'	=> $value->penerimaan_lain,
				'rsud'				=> $value->rsud,
				'kapitasi'			=> $value->kapitasi,
				'bangub'			=> $value->bangub,
				'sektoral_apbd'		=> $value->sektoral_apbd,
				'dak'				=> $value->dak,
				'dbhcht'			=> $value->dbhcht,
				'did'				=> $value->did,
				'tp'				=> $value->tp,
				'dekonsentrasi'		=> $value->dekonsentrasi,
				'sektoral_apbn'		=> $value->sektoral_apbn
			);
		}

		$data['total'] 		= $count;
		$data['success']	= true;
		echo json_encode($data);
	}

	public function getLookupUsulanKecamatan(){
		$resultCount 	= $this->m_transaksirenja->countGridLookupUsulanKecamatan();
		$count 			= $resultCount->num_rows();

		foreach ($resultCount->result() as $key => $value) {
			$data['data'][]=array(
				'id' 				=> $value->id,
				'kode_musrenbang'	=> $value->kode_musrenbang,
				'kegiatan' 			=> $value->kegiatan,
				'lokasi' 			=> $value->lokasi,
				'volume' 			=> $value->volume,
				'satuan' 			=> $value->satuan,
				'prioritas' 		=> $value->prioritas,
				'lingkupbidang' 	=> $value->lingkupbidang,
				'swadana' 			=> $value->swadana,
				'apbd_kab' 			=> $value->apbd_kab,
				'apbd_prov' 		=> $value->apbd_prov,
				'apbn' 				=> $value->apbn
			);
		}

		$data['total'] 		= $count;
		$data['success']	= true;
		echo json_encode($data);
	}

	public function getLookupUsulanKelurahan(){
		$resultCount 	= $this->m_transaksirenja->countGridLookupUsulanKelurahan();
		$count 			= $resultCount->num_rows();

		foreach ($resultCount->result() as $key => $value) {
			$data['data'][]=array(
				'id' 				=> $value->id,
				'kode_musrenbang'	=> $value->kode_musrenbang,
				'kegiatan' 			=> $value->kegiatan,
				'lokasi' 			=> $value->lokasi,
				'volume' 			=> $value->volume,
				'satuan' 			=> $value->satuan,
				'prioritas' 		=> $value->prioritas,
				'lingkupbidang' 	=> $value->lingkupbidang,
				'swadana' 			=> $value->swadana,
				'apbd_kab' 			=> $value->apbd_kab,
				'apbd_prov' 		=> $value->apbd_prov,
				'apbn' 				=> $value->apbn
			);
		}

		$data['total'] 		= $count;
		$data['success']	= true;
		echo json_encode($data);
	}

	public function getLookupUsulanDesa(){
		$resultCount 	= $this->m_transaksirenja->countGridLookupUsulanDesa();
		$count 			= $resultCount->num_rows();

		foreach ($resultCount->result() as $key => $value) {
			$data['data'][]=array(
				'id' 				=> $value->id,
				'kode_musrenbang'	=> $value->kode_musrenbang,
				'kegiatan' 			=> $value->kegiatan,
				'lokasi' 			=> $value->lokasi,
				'volume' 			=> $value->volume,
				'satuan' 			=> $value->satuan,
				'prioritas' 		=> $value->prioritas,
				'lingkupbidang' 	=> $value->lingkupbidang,
				'swadana' 			=> $value->swadana,
				'apbd_des' 			=> $value->apbd_des,
				'apbd_kab' 			=> $value->apbd_kab,
				'apbd_prov' 		=> $value->apbd_prov,
				'apbn' 				=> $value->apbn
			);
		}

		$data['total'] 		= $count;
		$data['success']	= true;
		echo json_encode($data);
	}

	public function getLookupUsulanReses(){
		$resultCount 	= $this->m_transaksirenja->countGridLookupUsulanReses();
		$count 			= $resultCount->num_rows();

		foreach ($resultCount->result() as $key => $value) {
			$data['data'][]=array(
				'id' 				=> $value->id,
				'kode_musrenbang'	=> $value->kode_musrenbang,
				'kegiatan' 			=> $value->kegiatan,
				'lokasi' 			=> $value->lokasi,
				'volume' 			=> $value->volume,
				'satuan' 			=> $value->satuan,
				'prioritas' 		=> $value->prioritas,
				'lingkupbidang' 	=> $value->lingkupbidang,
				'swadana' 			=> $value->swadana,
				'apbd_kab' 			=> $value->apbd_kab,
				'apbd_prov' 		=> $value->apbd_prov,
				'apbn' 				=> $value->apbn
			);
		}

		$data['total'] 		= $count;
		$data['success']	= true;
		echo json_encode($data);
	}

	public function getLookupUsulanMasyarakat(){
		$resultCount 	= $this->m_transaksirenja->countGridLookupUsulanMasyarakat();
		$count 			= $resultCount->num_rows();

		foreach ($resultCount->result() as $key => $value) {
			$data['data'][]=array(
				'id' 				=> $value->id,
				'kode_musrenbang'	=> $value->kode_musrenbang,
				'kegiatan' 			=> $value->kegiatan,
				'lokasi' 			=> $value->lokasi,
				'volume' 			=> $value->volume,
				'satuan' 			=> $value->satuan,
				'prioritas' 		=> $value->prioritas,
				'lingkupbidang' 	=> $value->lingkupbidang,
				'swadana' 			=> $value->swadana,
				'apbd_kab' 			=> $value->apbd_kab,
				'apbd_prov' 		=> $value->apbd_prov,
				'apbn' 				=> $value->apbn
			);
		}

		$data['total'] 		= $count;
		$data['success']	= true;
		echo json_encode($data);
	}

	/* =============== Lookup Grid Musrenbang =============== */
	public function getMusrenbang(){
        $start      	= ($this->input->post('start', TRUE) ? $this->input->post('start', TRUE) : 0);
        $limit      	= ($this->input->post('limit', TRUE) ? $this->input->post('limit', TRUE) : 20);
		$value 			= json_decode($this->input->post('value'));
		$result 		= $this->m_transaksirenja->getGridMusrenbang($start, $limit, $value);
		$resultCount 	= $this->m_transaksirenja->countGridMusrenbang($value);
		$count 			= $resultCount->num_rows();

		if($this->m_transaksirenja->cekMusrenbang($value) == 0){
			$data['data'][]=array(
					'id' 				=> '',
					'kegiatan'			=> '',
					'penerimaan_lain'	=> '',
					'rsud' 				=> '',
					'kapitasi'			=> '',
					'bangub'			=> '',
					'sektoral_apbd'		=> '',
					'dak' 				=> '',
					'dbhcht' 			=> '',
					'did'				=> '',
					'tp'				=> '',
					'dekonsentrasi'		=> '',
					'sektoral_apbn'		=> '',
				);
		} else {
				foreach ($result->result() as $key => $value) {
				$data['data'][]=array(
					'id' 				=> $value->id,
					'kegiatan'			=> $value->kegiatan,
					'penerimaan_lain'	=> $value->penerimaan_lain,
					'rsud' 				=> $value->rsud,
					'kapitasi'			=> $value->kapitasi,
					'bangub'			=> $value->bangub,
					'sektoral_apbd'		=> $value->sektoral_apbd,
					'dak' 				=> $value->dak,
					'dbhcht' 			=> $value->dbhcht,
					'did'				=> $value->did,
					'tp'				=> $value->tp,
					'dekonsentrasi'		=> $value->dekonsentrasi,
					'sektoral_apbn'		=> $value->sektoral_apbn
				);
			}
		} 

		$data['total'] 		= $count;
		$data['success']	= true;
		echo json_encode($data);
	}

	function cellColor($cells,$color){
	    global $objPHPExcel;

	    $objPHPExcel->getActiveSheet()->getStyle($cells)->getFill()->applyFromArray(array(
	        'type' => PHPExcel_Style_Fill::FILL_SOLID,
	        'startcolor' => array(
	             'rgb' => $color
	        )
	    ));
	}

	public function cetakMusrenbang(){
		$data=$this->input->get('name');
        $result = $this->m_transaksirenja->cetakMusrenbang($data);
        $urusan = $this->m_transaksirenja->getUrusan($data);
        $bidang = $this->m_transaksirenja->getBidang($data);
        $program = $this->m_transaksirenja->getProgram($data);
        $this->export($result->result(), $urusan->result(), $bidang->result(), $program->result());
        $objWriter  = PHPExcel_IOFactory::createWriter($this->excel, 'Excel5');
        header('Content-Type: application/vnd.ms-excel');
        header('Content-Disposition: attachment;filename="report_'.__CLASS__.'_'.__FUNCTION__.date('_d_m_Y_H_i_s_').$_SERVER['SERVER_ADDR'].'.xls"');
        header('Cache-Control: max-age=0');
        $objWriter->save('php://output');
	}

	private function export($data, $urusan, $bidang, $program){
	    $this->excel->setActiveSheetIndex(0);
	    $this->excel->getActiveSheet()->setTitle('REPORT '.strtoupper(__CLASS__));
	    $this->excel->getDefaultStyle()->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_CENTER)->setVertical(PHPExcel_Style_Alignment::VERTICAL_CENTER);
	    $this->excel->getDefaultStyle()->getFont()->setName('Arial')->setSize(9);
       /**
       * HEADER LAPORAN
       **/
    	$tahun 	= date("Y");
    	$next 	= $tahun + 1;

		$this->excel->getActiveSheet()->setCellValue('A1', 'RUMUSAN RENCANA PROGRAM DAN KEGIATAN SKPD');
		$this->excel->getActiveSheet()->mergeCells('A1:M1');
		$this->excel->getActiveSheet()->setCellValue('A2', 'TAHUN '.$tahun.' DAN PERKIRAAN MAJU TAHUN '.$next);
		$this->excel->getActiveSheet()->mergeCells('A2:M2');
		$this->excel->getActiveSheet()->setCellValue('A3', 'KABUPATEN BANYUMAS');
		$this->excel->getActiveSheet()->mergeCells('A3:M3');
		$this->excel->getActiveSheet()->setCellValue('A5', 'KODE');
		$this->excel->getActiveSheet()->mergeCells('A5:D7');
		$this->excel->getActiveSheet()->setCellValue('E5', 'URUSAN, BIDANG, PROGRAM, KEGIATAN');
		$this->excel->getActiveSheet()->mergeCells('E5:E7');
		$this->excel->getActiveSheet()->setCellValue('F5', 'SASARAN');
		$this->excel->getActiveSheet()->mergeCells('F5:F7');
		$this->excel->getActiveSheet()->setCellValue('G5', 'RENCANA KERJA TAHUN '.$tahun);
		$this->excel->getActiveSheet()->mergeCells('G5:K5');		
		$this->excel->getActiveSheet()->setCellValue('G6', 'LOKASI');
		$this->excel->getActiveSheet()->mergeCells('G6:G7');		
		$this->excel->getActiveSheet()->setCellValue('H6', 'TARGET CAPAIAN');
		$this->excel->getActiveSheet()->mergeCells('H6:H7');	
		$this->excel->getActiveSheet()->setCellValue('I6', 'KEBUTUHAN DANA');
		$this->excel->getActiveSheet()->mergeCells('I6:K6');
		$this->excel->getActiveSheet()->setCellValue('I7', 'APBD KAB');
		$this->excel->getActiveSheet()->setCellValue('J7', 'APBD PROV');
		$this->excel->getActiveSheet()->setCellValue('K7', 'APBN');
		$this->excel->getActiveSheet()->setCellValue('L5', 'PERKIRAAN MAJU TAHUN '.$next);
		$this->excel->getActiveSheet()->mergeCells('L5:M5');
		$this->excel->getActiveSheet()->setCellValue('L6', 'TARGET CAPAIAN');
		$this->excel->getActiveSheet()->mergeCells('L6:L7');
		$this->excel->getActiveSheet()->setCellValue('M6', 'KEBUTUHAN DANA');
		$this->excel->getActiveSheet()->mergeCells('M6:M7');
		$this->excel->getActiveSheet()->setCellValue('N5', 'SKPD');
		$this->excel->getActiveSheet()->mergeCells('N5:N7');
		$awal = 8;
		$start  = $awal;
		
      /**
       * End of Header Laporan
       **/
      	foreach($urusan AS $key => $val){
	        $this->excel->getActiveSheet()->setCellValue('A'.$start, $val->norek_urusan);
	        $this->excel->getActiveSheet()->setCellValue('E'.$start, $val->nama_urusan);
			$start++;
		        foreach ($bidang as $key => $val) {
	        	$this->excel->getActiveSheet()->setCellValue('A'.$start, $val->norek_urusan);
	        	$this->excel->getActiveSheet()->setCellValue('B'.$start, $val->norek_bidang);
	        	$this->excel->getActiveSheet()->setCellValue('E'.$start, $val->nama_bidangrpjm);
	        	$start++;
	        		foreach($program as $key => $val){
			        	$this->excel->getActiveSheet()->setCellValue('A'.$start, $val->norek_urusan);
			        	$this->excel->getActiveSheet()->setCellValue('B'.$start, $val->norek_bidang);
			        	$this->excel->getActiveSheet()->setCellValue('C'.$start, $val->norek_program);
			        	$this->excel->getActiveSheet()->setCellValue('E'.$start, $val->programrpjm);
			        	$start++;
			      		foreach($data as $key => $val){     
					        $this->excel->getActiveSheet()->setCellValue('A'.$start, $val->norek_urusan);
					        $this->excel->getActiveSheet()->setCellValue('B'.$start, $val->norek_bidang);
					        $this->excel->getActiveSheet()->setCellValue('C'.$start, $val->norek_program);
					        $this->excel->getActiveSheet()->setCellValue('D'.$start, $val->norek_kegiatan);
					        $this->excel->getActiveSheet()->setCellValue('E'.$start, $val->kegiatan);
					        $this->excel->getActiveSheet()->setCellValue('F'.$start, $val->sasaran);
					        $this->excel->getActiveSheet()->setCellValue('G'.$start, $val->lokasi);
					        $this->excel->getActiveSheet()->setCellValue('H'.$start, $val->current_goal);
					        $this->excel->getActiveSheet()->setCellValue('I'.$start, $val->anggaran_apbd);
					        $this->excel->getActiveSheet()->setCellValue('J'.$start, $val->anggaran_apbdprov);
					        $this->excel->getActiveSheet()->setCellValue('K'.$start, $val->anggaran_apbn);
					        $this->excel->getActiveSheet()->setCellValue('L'.$start, $val->next_goal);
					        $this->excel->getActiveSheet()->setCellValue('M'.$start, $val->next_anggaran);
					        $this->excel->getActiveSheet()->setCellValue('N'.$start, $val->skpd);
					        $start++;
					    }
	        		}
	        	}
		}
      $this->excel->getActiveSheet()->setCellValue('A'.$start, 'TOTAL:');
      $this->excel->getActiveSheet()->mergeCells('A'.$start.':H'.$start);
      $this->excel->getActiveSheet()->setCellValue('I'.$start, '=SUM(I'.$awal.':'.'I'.($start-1).')');
      $this->excel->getActiveSheet()->setCellValue('J'.$start, '=SUM(J'.$awal.':'.'J'.($start-1).')');
      $this->excel->getActiveSheet()->setCellValue('K'.$start, '=SUM(K'.$awal.':'.'K'.($start-1).')');
      $this->excel->getActiveSheet()->setCellValue('L'.$start);
      $this->excel->getActiveSheet()->setCellValue('M'.$start, '=SUM(M'.$awal.':'.'M'.($start-1).')');
      $this->excel->getActiveSheet()->getStyle('A'.$awal.':O'.$start)->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_LEFT);
    }

	public function delTransaksiRenja(){
		$kode_subpilihanurusan = ($this->input->post('kode_subpilihanurusan', TRUE) ? $this->input->post('kode_subpilihanurusan', TRUE) : '');
		$cekResult = $this->m_transaksirenja->cekRelasi($kode_subpilihanurusan);

		if($cekResult == 0){
			$this->m_transaksirenja->deleteTransaksiRenja($kode_subpilihanurusan);
			$data['msg']=0;
		} else {
			$data['msg']=1;
		}
		echo json_encode($data);
	}

	public function saveTransaksiRenja(){
		$table 	= "tm_subpilihanurusan_uu";
		$kode_subpilihanurusan 	= $this->m_transaksirenja->getUnikKode($table);;
		$kode_pilihanurusan 	= ($this->input->post('kode_pilihanurusan', TRUE) ? $this->input->post('kode_pilihanurusan', TRUE) : '');
		$nama_subpilihanurusan 	= ($this->input->post('nama_subpilihanurusan', TRUE) ? $this->input->post('nama_subpilihanurusan', TRUE) : '');
		$no_subpilihanurusan   	= ($this->input->post('no_subpilihanurusan', TRUE) ? $this->input->post('no_subpilihanurusan', TRUE) : '');

    	if($nama_subpilihanurusan==""){
    		$success = 0;
    	} elseif ($kode_pilihanurusan=='UU002') {
    		$success = 3;
    	} elseif($this->m_transaksirenja->cekData($no_subpilihanurusan) == 0){
    		$this->m_transaksirenja->saveTransaksiRenja($kode_subpilihanurusan, $kode_pilihanurusan, $nama_subpilihanurusan, $no_subpilihanurusan);
    		$success = 1;
    	} else {
    		$success = 2;
    	}

    	$data['total'] 		= $success;
    	$data['success'] 	= TRUE;
    	echo json_encode($data);    	
	}

	public function editTransaksiRenja(){
		$kode_kegiatanrpjm  = ($this->input->get('kode_kegiatanrpjm', TRUE) ? $this->input->get('kode_kegiatanrpjm', TRUE) : '');
		$kode_musrenbang 	= ($this->input->get('kode_musrenbang', TRUE) ? $this->input->get('kode_musrenbang', TRUE) : '');
		$penerimaan_lain 	= intval(($this->input->get('penerimaan_lain', TRUE) ? $this->input->get('penerimaan_lain', TRUE) : 0));
		$rsud   			= intval(($this->input->get('rsud', TRUE) ? $this->input->get('rsud', TRUE) : 0));
		$kapitasi  			= intval(($this->input->get('kapitasi', TRUE) ? $this->input->get('kapitasi', TRUE) : 0));
		$bangub 			= intval(($this->input->get('bangub', TRUE) ? $this->input->get('bangub', TRUE) : 0));
		$sektoral_apbd 		= intval(($this->input->get('sektoral_apbd', TRUE) ? $this->input->get('sektoral_apbd', TRUE) : 0));
		$dak   				= intval(($this->input->get('dak', TRUE) ? $this->input->get('dak', TRUE) : 0));
		$dbhcht   			= intval(($this->input->get('dbhcht', TRUE) ? $this->input->get('dbhcht', TRUE) : 0));
		$did 				= intval(($this->input->get('did', TRUE) ? $this->input->get('did', TRUE) : 0));
		$tp 				= intval(($this->input->get('tp', TRUE) ? $this->input->get('tp', TRUE) : 0));
		$dekonsentrasi   	= intval(($this->input->get('dekonsentrasi', TRUE) ? $this->input->get('dekonsentrasi', TRUE) : 0));
		$sektoral_apbn   	= intval(($this->input->get('sektoral_apbn', TRUE) ? $this->input->get('sektoral_apbn', TRUE) : 0));
		$current_goal   	= intval(($this->input->get('current_goal', TRUE) ? $this->input->get('current_goal', TRUE) : 0));
		$next_goal   		= intval(($this->input->get('next_goal', TRUE) ? $this->input->get('next_goal', TRUE) : 0));
		$next_anggaran   	= intval(($this->input->get('next_anggaran', TRUE) ? $this->input->get('next_anggaran', TRUE) : 0));

    	if(empty($kode_kegiatanrpjm)){
    		$success = 2;
    	} else {
    		$this->m_transaksirenja->updateTransaksiRenja($kode_kegiatanrpjm, 
				$kode_musrenbang,
				$penerimaan_lain,
				$rsud,
				$kapitasi,
				$bangub,
				$sektoral_apbd,
				$dak,
				$dbhcht,
				$did,
				$tp,
				$dekonsentrasi,
				$sektoral_apbn,
				$current_goal,
				$next_goal,
				$next_anggaran
    		);
    		$success = 1;
    	}

    	$data['total'] 		= $success;
    	$data['success'] 	= TRUE;
    	echo json_encode($data);

	}

	public function searchTransaksiRenja(){
		$name 		= ($this->input->post('name', TRUE) ? $this->input->post('name', TRUE) : '');
    	$result 	= $this->m_transaksirenja->searchTransaksiRenja($name);
    	foreach ($result->result() as $key => $value) {
			$data['data'][]=array(
				'id' 					=> $value->id,
				'kode_subpilihanurusan'	=> $value->kode_subpilihanurusan,
				'kode_pilihanurusan' 	=> $value->kode_pilihanurusan,
				'nama_subpilihanurusan'	=> $value->nama_subpilihanurusan,
				'no_subpilihanurusan'	=> $value->no_subpilihanurusan
			);
		}
		$data['success']	= true;
		echo json_encode($data);
	}


	/* ============ SEARCHING LOOKUP KEGIATAN ================  */
	public function searchLookupKegiatanSkpd(){
		$name 		= ($this->input->post('name', TRUE) ? $this->input->post('name', TRUE) : '');
    	$result 	= $this->m_transaksirenja->searchLookupKegiatanSkpd($name);

    	foreach ($result->result() as $key => $value) {
			$data['data'][]=array(
				'id' 				=> $value->id,
				'kode_kegiatanrpjm'	=> $value->kode_kegiatanrpjm,
				'kegiatan' 			=> $value->kegiatan,
				'no_urut'			=> $value->no_urut
			);
		}
		$data['success']	= true;
		echo json_encode($data);
	}

	public function searchLookupKegiatanKecamatan(){
		$name 		= ($this->input->post('name', TRUE) ? $this->input->post('name', TRUE) : '');
    	$result 	= $this->m_transaksirenja->searchLookupKegiatanKecamatan($name);

    	foreach ($result->result() as $key => $value) {
			$data['data'][]=array(
				'id' 				=> $value->id,
				'kode_kegiatanrpjm'	=> $value->kode_kegiatanrpjm,
				'kegiatan' 			=> $value->kegiatan,
				'no_urut'			=> $value->no_urut
			);
		}
		$data['success']	= true;
		echo json_encode($data);
	}

	public function searchLookupKegiatanKelurahan(){
		$name 		= ($this->input->post('name', TRUE) ? $this->input->post('name', TRUE) : '');
    	$result 	= $this->m_transaksirenja->searchLookupKegiatanKelurahan($name);

    	foreach ($result->result() as $key => $value) {
			$data['data'][]=array(
				'id' 				=> $value->id,
				'kode_kegiatanrpjm'	=> $value->kode_kegiatanrpjm,
				'kegiatan' 			=> $value->kegiatan,
				'no_urut'			=> $value->no_urut
			);
		}
		$data['success']	= true;
		echo json_encode($data);
	}

	public function searchLookupKegiatanDesa(){
		$name 		= ($this->input->post('name', TRUE) ? $this->input->post('name', TRUE) : '');
    	$result 	= $this->m_transaksirenja->searchLookupKegiatanDesa($name);

    	foreach ($result->result() as $key => $value) {
			$data['data'][]=array(
				'id' 				=> $value->id,
				'kode_kegiatanrpjm'	=> $value->kode_kegiatanrpjm,
				'kegiatan' 			=> $value->kegiatan,
				'no_urut'			=> $value->no_urut
			);
		}
		$data['success']	= true;
		echo json_encode($data);
	}

	public function searchLookupKegiatanReses(){
		$name 		= ($this->input->post('name', TRUE) ? $this->input->post('name', TRUE) : '');
    	$result 	= $this->m_transaksirenja->searchLookupKegiatanReses($name);

    	foreach ($result->result() as $key => $value) {
			$data['data'][]=array(
				'id' 				=> $value->id,
				'kode_kegiatanrpjm'	=> $value->kode_kegiatanrpjm,
				'kegiatan' 			=> $value->kegiatan,
				'no_urut'			=> $value->no_urut
			);
		}
		$data['success']	= true;
		echo json_encode($data);
	}

	public function searchLookupKegiatanMasyarakat(){
		$name 		= ($this->input->post('name', TRUE) ? $this->input->post('name', TRUE) : '');
    	$result 	= $this->m_transaksirenja->searchLookupKegiatanMasyarakat($name);

    	foreach ($result->result() as $key => $value) {
			$data['data'][]=array(
				'id' 				=> $value->id,
				'kode_kegiatanrpjm'	=> $value->kode_kegiatanrpjm,
				'kegiatan' 			=> $value->kegiatan,
				'no_urut'			=> $value->no_urut
			);
		}
		$data['success']	= true;
		echo json_encode($data);
	}

	/* ============ SEARCHING LOOKUP USULAN ================  */
	public function searchLookupUsulanSkpd(){
		$name 		= ($this->input->post('name', TRUE) ? $this->input->post('name', TRUE) : '');
    	$result 	= $this->m_transaksirenja->searchLookupUsulanSkpd($name);

    	foreach ($result->result() as $key => $value) {
			$data['data'][]=array(
				'id' 				=> $value->id,
				'kode_musrenbang'	=> $value->kode_musrenbang,
				'kegiatan' 			=> $value->kegiatan
			);
		}
		$data['success']	= true;
		echo json_encode($data);
	}

	public function searchLookupUsulanKecamatan(){
		$name 		= ($this->input->post('name', TRUE) ? $this->input->post('name', TRUE) : '');
    	$result 	= $this->m_transaksirenja->searchLookupUsulanKecamatan($name);

    	foreach ($result->result() as $key => $value) {
			$data['data'][]=array(
				'id' 				=> $value->id,
				'kode_musrenbang'	=> $value->kode_musrenbang,
				'kegiatan' 			=> $value->kegiatan
			);
		}
		$data['success']	= true;
		echo json_encode($data);
	}

	public function searchLookupUsulanKelurahan(){
		$name 		= ($this->input->post('name', TRUE) ? $this->input->post('name', TRUE) : '');
    	$result 	= $this->m_transaksirenja->searchLookupUsulanKelurahan($name);

    	foreach ($result->result() as $key => $value) {
			$data['data'][]=array(
				'id' 				=> $value->id,
				'kode_musrenbang'	=> $value->kode_musrenbang,
				'kegiatan' 			=> $value->kegiatan
			);
		}
		$data['success']	= true;
		echo json_encode($data);
	}

	public function searchLookupUsulanDesa(){
		$name 		= ($this->input->post('name', TRUE) ? $this->input->post('name', TRUE) : '');
    	$result 	= $this->m_transaksirenja->searchLookupUsulanDesa($name);

    	foreach ($result->result() as $key => $value) {
			$data['data'][]=array(
				'id' 				=> $value->id,
				'kode_musrenbang'	=> $value->kode_musrenbang,
				'kegiatan' 			=> $value->kegiatan
			);
		}
		$data['success']	= true;
		echo json_encode($data);
	}

	public function searchLookupUsulanReses(){
		$name 		= ($this->input->post('name', TRUE) ? $this->input->post('name', TRUE) : '');
    	$result 	= $this->m_transaksirenja->searchLookupUsulanReses($name);

    	foreach ($result->result() as $key => $value) {
			$data['data'][]=array(
				'id' 				=> $value->id,
				'kode_musrenbang'	=> $value->kode_musrenbang,
				'kegiatan' 			=> $value->kegiatan
			);
		}
		$data['success']	= true;
		echo json_encode($data);
	}

	public function searchLookupUsulanMasyarakat(){
		$name 		= ($this->input->post('name', TRUE) ? $this->input->post('name', TRUE) : '');
    	$result 	= $this->m_transaksirenja->searchLookupUsulanMasyarakat($name);

    	foreach ($result->result() as $key => $value) {
			$data['data'][]=array(
				'id' 				=> $value->id,
				'kode_musrenbang'	=> $value->kode_musrenbang,
				'kegiatan' 			=> $value->kegiatan
			);
		}
		$data['success']	= true;
		echo json_encode($data);
	}
}