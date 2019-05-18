<?php
/**
 * Plugin Name:     Lr Filters
 * Plugin URI:      PLUGIN SITE HERE
 * Description:     雑多なフィルタ処理
 * Author:          laboradian
 * Author URI:      laboradian.com
 * Text Domain:     lr-filters
 * Domain Path:
 * Version:         0.1.0
 *
 * @package         Lr_Filters
 */

add_action( 'init', function() {
	wp_register_script(
		'lr-filters-js',
		plugins_url( 'lr-filters.js', __FILE__ ),
		array( 'wp-rich-text', 'wp-element', 'wp-editor', 'wp-compose', 'wp-data' )
	);
});

add_action( 'enqueue_block_editor_assets', function() {
	wp_enqueue_script( 'lr-filters-js' );
});

