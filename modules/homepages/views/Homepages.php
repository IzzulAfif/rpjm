<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>R.P.J.M</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta name="description" content="">
		<meta name="author" content="">
	
		<link href="<?php echo base_url('lib/front/css/style.css'); ?>" rel='stylesheet' type='text/css'>
		<script type="text/javascript" src="<?php echo base_url('lib/front/js/jquery.min.js'); ?>"></script>
	</head>
<body>
<br>
<center><img src="<?php echo base_url('lib/front/css/images/bb.png') ?>" alt=""></center>

<br>
<!--LOGIN FORM-->
<?php echo form_open('homepages/validasi', array('name'=>'login-form', 'class'=>'login-form')); ?>

	<!--HEADER-->
    <div class="header">
    <!--TITLE-<h1>RPJM Banyumas</h1>END TITLE-->
    
    </div>
    <!--END HEADER-->
	
	<!--CONTENT-->
    <div class="content">
	<!--USERNAME--><input name="username" type="text" class="input username" placeholder="Username" onfocus="this.value=''" /><!--END USERNAME-->
    <!--PASSWORD--><input name="password" type="password" class="input password" placeholder="Password" onfocus="this.value=''" /><!--END PASSWORD-->
    </div>
    <!--END CONTENT-->
    
    <!--FOOTER-->
    <div class="footer">
    <!--LOGIN BUTTON--><input type="submit" name="submit" value="Login" class="button" /><!--END LOGIN BUTTON-->
    </div>
    <!--END FOOTER-->

</form>
<!--END LOGIN FORM-->

</div>
<!--END WRAPPER-->

<!--GRADIENT--><div class="gradient"></div><!--END GRADIENT-->
	</body>
</html>