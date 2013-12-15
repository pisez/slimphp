<?php 

namespace App;

class AppSlim extends \Slim\Slim {
	
	function _constuct($param){
		parent::__construct($param);	
	}	
	
	public function pr($print){
		echo "<pre>";
		print_r($print);
		echo("</pre>");
	}
	
	public function getObj($obj){
		return $obj;
	}
	
}