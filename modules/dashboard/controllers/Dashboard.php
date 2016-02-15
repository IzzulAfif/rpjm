<?php (defined('BASEPATH')) OR exit('No direct script access allowed');
/**
* Cerated By 			: Ardian 
* Quality Asurance By 	: Ardian & Andiono 
* DateTime Created 		: 27-January-2016 08:45:00
*
*/

class Dashboard extends IAN_Controller{
	
	function __construct(){
		parent::__construct();
		$this->load->model('homepages/Mhomepages');
	}

	function userArea(){
		if($this->session->userdata('logged_in') == true){
            $iscreate   = $this->Mhomepages->iscreatePrevilege()->result();
            $isupdate   = $this->Mhomepages->isupdatePrevilege()->result();
            $isdelete   = $this->Mhomepages->isdeletePrevilege()->result();
            $isprocess  = $this->Mhomepages->isprocessPrevilege()->result();

            $previlege   = '';
            foreach($iscreate as $create){
                $previlege   .= 'var create'.$create->menu.' = '.$create->iscreate.'; ';
            }
            foreach($isupdate as $update){
                $previlege   .= 'var update'.$update->menu.' = '.$update->isupdate.'; ';
            }
            foreach($isdelete as $delete){
                $previlege   .= 'var delete'.$delete->menu.' = '.$delete->isdelete.'; ';
            }
            foreach($isprocess as $process){
                $previlege   .= 'var process'.$process->menu.' = '.$process->isprocess.'; ';
            }
            $data['previlege'] = $previlege;
            $this->load->view('dashboard', $data);
        } else {
            $this->load->view('dashboard/dashboard');
        }
	}
}