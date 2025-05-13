<?php

/*
Plugin Name: Capital Tech
Description: Take Home Assignment for Capital Tech Solutions
Version: 1.0
Author: Bradly Booth
*/

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

require_once plugin_dir_path( __FILE__ ) . 'includes/enqueue_styles.php';
require_once plugin_dir_path( __FILE__ ) . 'includes/fetch_product_data.php';
require_once plugin_dir_path( __FILE__ ) . 'includes/enqueue_scripts.php';