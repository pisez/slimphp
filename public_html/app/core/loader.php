<?php

namespace App\Core;

class Loader{

	private $namespace;	

	private $_controllerDirectoryPath = '';		
	
	public function __construct(){		
		//Setze den Controller-Path
		$this->_controllerDirectoryPath = CONTROLLER_PATH;
		
		spl_autoload_register(array($this, 'loadController'));				
	}
	
	
	public function loadController($className){
		
		$className = explode('\\', $className);	
		
		$className = end($className);
		
		$file = $this->_controllerDirectoryPath.$className.'.php';	
		
		if(file_exists($file)){			
			require_once $file;
		}
	}	

	/*
	//Setze Namespace
	public function __construct($namespace = null){
		$this->namespace = $namespace;
	}
	
	//Registriere >utoloader
	public function rgister(){
		spl_autoload_register(array($this, 'loadClass'));
	}
	
	public function loadClass($className){
		
		echo $className."<br />";
		die;
		
		if($this->namespace !== null){
			$className = str_replace($this->namspace. '\\','',$className);
		}
		
		$className = str_replace('\\',DIRECTORY_SEPARATOR, $className);
		
		$file = ROOT_PATH.$className.'.php';
		
		if(file_esists($file)){
			require_once $file;
		}
	}*/
}