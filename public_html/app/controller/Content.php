<?php
namespace App\Controller;
use \App\Core\Controller;

class Content extends Controller {
	
	function actionView(){			
		$this->app->render('content'.DS.'view.php');
	}

	function actionList(){
		echo "actionList";
	}

	function actionEdit(){
		$this->app->render('content'.DS.'edit.php');
	}
}