<?php
//Content
$app->group('/content', function() use ($app){
	
	//View
	$app->get('/view', function() use ($app){
		echo "view";
	});
	
	//List
	$app->get('/list', function() use ($app){
		echo "list";
	});
});