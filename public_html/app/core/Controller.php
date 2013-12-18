<?php
namespace App\Core;
/**
 * 
 * @author jo
 *
 *	Controller 
 */
class Controller {
	
	//SlimPHP Class
	protected $app = null;
	
	public function __construct($app){
		$this->app = $app;
	}
}