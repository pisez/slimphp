<?php
/**
 * Step 1: Require the Slim Framework
 *
 * If you are not using Composer, you need to require the
 * Slim Framework and register its PSR-0 autoloader.
 *
 * If you are using Composer, you can skip this step.
 */
require '../lib/Slim/Slim.php';

\Slim\Slim::registerAutoloader();

require 'bootstrap.php';

/**
 * Step 2: Instantiate a Slim application
 *
 * This example instantiates a Slim application using
 * its default settings. However, you will usually configure
 * your Slim application now by passing an associative array
 * of setting names and values into the application constructor.
 */

//Configuration von Slim
require_once '/app/conf/config.php';

//App Slim
require_once '/app/AppSlim.php';

//Überschreibe Slim mit der eigener Unterklasse
$app = new \App\AppSlim($configs);
//$app = new \Slim\Slim($configs);

//Aplication Name
$app->setName('Live Template');

//Routing
require_once '/app/conf/routing.php';

//Autoloader
require_once '/app/core/loader.php';

$a = new \App\Core\Loader();


$x = new \App\Controller\Content();

$x->actionView();

//Produktionsmodus
$app->configureMode('production', function () use ($app) {
	$app->config(array(
			'log.enable' => true,
			'debug' => false
	));
});

//Entwichlungsmodus
$app->configureMode('development', function () use ($app) {
	$app->config(array(
			'log.enable' => true,
			'debug' => true
	));
});

//Hello World
$app->get(
		'/hello/:name',
		function($name) use ($app){
	echo "Hello $name";
}
);

$app->run();
