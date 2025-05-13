<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

/**
 * Retrieves data from an external API and returns it in JSON format.
 *
 * @return void This method does not return a value directly but responds
 *              with a JSON success or error response based on the outcome.
 */
function get_data(): void {
	if (!wp_verify_nonce( $_POST['_ajax_nonce'], 'cts-ajax')) {
		wp_send_json_error( 'Invalid nonce', 400 );
	}

	if ( !current_user_can( 'administrator' ) ) {
		wp_send_json_error( 'Unauthorized', 401 );
	}

	$limit = $_POST['limit'] ?? 18;
	$offset = $_POST['skip'] ?? 0;

	$url = 'https://dummyjson.com/products?';
	$url .= http_build_query( array(
		'limit' => $limit,
		'skip' => $offset,
	));
	$response = wp_remote_get( $url );

	if ( is_wp_error( $response ) ) {
		wp_send_json_error( 'Error retrieving data', 500 );
	}

	$x = json_decode( wp_remote_retrieve_body( $response ) );
	wp_send_json_success( $x );
}

add_action( 'wp_ajax_get_data', 'get_data' );
add_action( 'wp_ajax_nopriv_get_data', 'get_data' );