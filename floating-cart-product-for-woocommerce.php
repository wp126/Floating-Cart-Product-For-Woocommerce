<?php
/**
* Plugin Name: Floating Cart Product For Woocommerce
* Description: This plugin allows you to Create Sidebar cart in WooCommerce.
* Version: 1.0
* Copyright: 2022
* Text Domain: floating-cart-product-for-woocommerce
* Domain Path: /languages 
*/

if (!defined('FCPFW_PLUGIN_DIR')) {
  define('FCPFW_PLUGIN_DIR',plugins_url('', __FILE__));
}


include_once( ABSPATH . 'wp-admin/includes/plugin.php' );

// Include All Files

//Backend Property
include_once('main/backend/fcpfw_backend.php');
include_once('main/backend/fcpfw_comman.php');
include_once('main/backend/fcpfw_svg.php');

//Fronend Design
include_once('main/frontend/fcpfw_front.php');
include_once('main/frontend/fcpfw_head_foot.php');

//Js css Instaal Requrired file
include_once('main/resource/fcpfw_load_js_css.php');
include_once('main/resource/fcpfw-language.php');
include_once('main/resource/fcpfw-installation-require.php');