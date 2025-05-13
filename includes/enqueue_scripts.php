<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}
function enqueue_cts_products_script(): void {
	wp_enqueue_script(
		'cts-products',
		plugins_url( 'js/cts-products.js', __DIR__ ),
		array( 'jquery' ),
		'1.0.0',
		true
	);

	wp_localize_script(
		'cts-products',
		'cts_products_ajax_object',
		array(
			'ajax_url' => admin_url( 'admin-ajax.php' ),
			'nonce' => wp_create_nonce( 'cts-ajax' ),
		)
	);
}

add_action( 'wp_enqueue_scripts', 'enqueue_cts_products_script' );

function enqueue_product_card(): void {
	wp_enqueue_script(
		'product-card',
		plugins_url( 'js/product-card.js', __DIR__ ),
		array(),
		'1.0.0',
		true
	);
}

add_action( 'wp_enqueue_scripts', 'enqueue_product_card' );

function enqueue_product_table(): void {
	wp_enqueue_script(
		'product-table',
		plugins_url( 'js/product-table.js', __DIR__ ),
		array(),
		'1.0.0',
		true
	);
}
add_action( 'wp_enqueue_scripts', 'enqueue_product_table' );