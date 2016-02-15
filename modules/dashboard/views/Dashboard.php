<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>R.P.J.M</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta name="description" content="">
		<meta name="author" content="">
		<link rel="stylesheet" type="text/css" href="<?php echo base_url('lib/back/extjs5/resources/css/ext-all.css'); ?>">
		<link rel="stylesheet" type="text/css" href="<?php echo base_url('lib/back/extjs5/resources/ext-theme-classic/ext-theme-classic-all.css'); ?>">
		<link rel="stylesheet" type="text/css" href="<?php echo base_url('lib/back/css/style.css'); ?>">
				<script type="text/javascript" src="<?php echo base_url('lib/back/extjs5/ext-all-debug.js'); ?>"></script>
		<script type="text/javascript" src="<?php echo base_url('lib/back/extjs5/ext-theme-classic.js'); ?>"></script>
		<script>
			<?php $this->session->all_userdata(); ?>
			var BASE_URL 		= "<?php echo base_url(); ?>";
			var ROOTDIR 		= "apps/";
			var ID 				= "<?php echo $this->session->userdata('id'); ?>";
			var USERNAME 		= "<?php echo $this->session->userdata('username'); ?>";
			var NIP 			= "<?php echo $this->session->userdata('nip'); ?>";
			var NAME 			= "<?php echo $this->session->userdata('name'); ?>";
			var KODE_UNITKERJA 	= "<?php echo $this->session->userdata('kode_unitkerja'); ?>";
			var UNITKERJA 		= "<?php echo $this->session->userdata('unitkerja'); ?>";
			<?php echo $previlege; ?>
		</script>
	</head>
	<body>
	<script src="<?php echo base_url('apps/app.js'); ?>" type="text/javascript"></script>

	</body>
</html>