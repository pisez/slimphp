<?php

//Log
$log = fopen('log.log', 'a');

//Configs
$configs = array(
				
	'debug' =>true,
	//Log	
	'log.writer' => new \Slim\LogWriter($log),
	'log.level' => \Slim\Log::DEBUG,
	'log.enabled' => true,
		
	//Template Path	
	'templates.path' => './app/view',
		
	//HTTP Veersion	
	'http.version' => '1.1',
		
	//View
	'view' => new \Slim\View(),
		
	//Mode
	'mode' => 'development'
);

