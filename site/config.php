<?php

/**
 * Site Configuration File
 *
 * This file overrides properties defined in main configuration
 * file for Caracal located in `units/config.php`.
 */

use Core\CSP;
use Core\Cache\Type as CacheType;

// document standard
define('_TIMEZONE', 'America/New_York');

define('DEBUG', 1);
// define('SQL_DEBUG', 1);

// site language configuration
$available_languages = array('en', 'he');
$default_language = 'en';

// default session options
$session_type = Core\Session\Type::BROWSER;

// database
$db_type = DatabaseType::MYSQL;
$db_config = array(
		'host' => 'localhost',
		'user' => 'root',
		'pass' => 'caracal',
		'name' => 'web_engine'
	);

// allow loading scripts from different domain
/* CSP\Parser::add_value(CSP\Element::SCRIPTS, 'domain.com'); */

// configure code generation
$cache_method = Core\Cache\Type::NONE;
$optimize_code = false;
$include_styles = true;
$url_rewrite = true;

?>
