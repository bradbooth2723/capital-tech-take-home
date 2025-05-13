<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}
function enqueue_product_card_styles(): void {
	wp_register_style(
		'product-card',
		plugins_url( 'styles/product-card.css', __DIR__ ),
		array(),
		'1.0.0',
		'all'
	);
	wp_enqueue_style( 'product-card' );
}
add_action( 'wp_enqueue_scripts', 'enqueue_product_card_styles' );

function enqueue_product_page_styles(): void {
	wp_register_style(
		'product-page',
		plugins_url( 'styles/product-page.css', __DIR__ ),
		array(),
		'1.0.0',
		'all'
	);
	wp_enqueue_style( 'product-page' );
}
add_action( 'wp_enqueue_scripts', 'enqueue_product_page_styles' );