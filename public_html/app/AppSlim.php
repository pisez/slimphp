<?php 

namespace App;

//require '/../Slim/Slim.php';

class AppSlim extends \Slim\Slim {
	
	function _constuct($param){
		parent::__construct($param);	
	}	
	
	public function pr($print){
		echo "<pre>";
		print_r($print);
		echo("</pre>");
	}
}