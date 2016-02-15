<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
/**
* Cerated By 			: Ardian 
* Quality Asurance By 	: Ardian & Andiono 
* DateTime Created 		: 27-January-2016 08:45:00
*
*/

class Homepages extends IAN_Controller{
	
	function __construct(){
		parent:: __construct();
		$this->load->model('Mhomepages');
	}

	public function index(){
		$this->load->view('homepages');
	}

	function validasi(){
		$this->form_validation->set_rules('username', 'Username', 'trim|required');
		$this->form_validation->set_rules('password', 'Password', 'trim|required');

		$username 	= $this->input->post('username');
		$password 	= $this->input->post('password');
		$result 	= $this->Mhomepages->validasi($username,$password);

		if($result){
			$sess_array = array();
			foreach ($result as $row) {
				$sess_array = array(
					'logged_in' 		=>TRUE, 
					'id' 				=>$row->id_user, 
					'name'				=>$row->name, 
					'username'			=>$row->username,
					'nip' 				=>$row->nip,
					'kode_unitkerja'	=>$row->kode_unitkerja,
					'unitkerja'			=>$row->unitkerja
				);
				$this->session->set_userdata($sess_array);
			}
			//return TRUE;
		} else {
			$this->form_validation->set_message("Username atau Password Salah");
			//return FALSE;
		}

		if($this->form_validation->run()==TRUE){
			
			redirect('dashboard/userArea');
		} else {
			redirect('homepages');
			//redirect('Cdashboard/userArea');
		}
	}

	function logout(){
		$this->session->sess_destroy();
		redirect('Homepages');
	}
}