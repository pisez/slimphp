<?php
namespace App\Controller;

class Content {
	
	private $app = null;
	
	public function __construct($app){
		$this->app = $app;		
	}
	
	function actionView(){			
		$this->app->render('content'.DS.'view.php');
	}

	function actionList(){
		echo "actionList";
	}	
}