<?php

//Content
$app->group('/content', function() use ($app){
	
	//View
	$app->get('/view', function() use ($app){
		$app->getObj(new \App\Controller\Content($app))->actionView();		
	});
	
	//List
	$app->get('/list', function() use ($app){
		$app->getObj(new \App\Controller\Content($app))->actionList();
	});
	
	//Edit
	$app->get('/edit', function() use ($app){
		$app->getObj(new \App\Controller\Content($app))->actionEdit();
	});
	
});