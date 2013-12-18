<?php

namespace App\Core;

class Loader{

	private $namespace;	
	//Controller App Pfad
	private $_controllerDirectoryPath = '';		
	//Core App Pfad
	private $_coreDirectoryPath = '';
	
	//Core Files
	private $_coreFiles = array(
			'controller' =>'Controller.php'
			);
	
	
	
	public function __construct(){		
		//Setze Pfade
		$this->_controllerDirectoryPath = CONTROLLER_PATH;
		$this->_coreDirectoryPath = CORE_PATH;	
		
		//Registriere Controller Loader
		spl_autoload_register(array($this, 'loadController'));
		//Lade Core Dateien
		$this->loadCoreElements();
		//spl_autoload_register(array($this, 'loadCoreElements'));
	}
	
	/**
	 * Lade Controller
	 * 
	 * @param string $className
	 */
	public function loadController($className){
		
		$className = explode('\\', $className);	
		
		$className = end($className);
		
		$file = $this->_controllerDirectoryPath.$className.'.php';	
		
		if(file_exists($file)){			
			require_once $file;
		}
	}	

	/**
	 * Lade Core Elements
	 */
	public function loadCoreElements(){
		//
		foreach($this->_coreFiles as $file){
			$file = $this->_coreDirectoryPath.$file;
			//Lade Core Files
			if(file_exists($file)){				
				require_once $file;
			}
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