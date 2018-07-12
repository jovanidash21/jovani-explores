<?php

function revision() {

  // Styles
  wp_enqueue_style( 'vendor-css', get_template_directory_uri() . '/dist/styles/vendor.css', false, '66197b5102286dcf611245947fb295d9');
  wp_enqueue_style( 'main-css', get_template_directory_uri() . '/dist/styles/main.css', false, 'b988662bf9c14bb76e0ffe96b12c3316');

  // Scripts
  wp_enqueue_script( 'vendor-js', get_template_directory_uri() . '/dist/scripts/vendor.js', array(), 'c5f3777e404b0ed86469e645edd56cb5', true );
  wp_enqueue_script( 'main-js', get_template_directory_uri() . '/dist/scripts/main.js', array(), '501f2ba53684cae21a53cb26c8848f2c', true );

}

add_action( 'wp_enqueue_scripts', 'revision', 101 );

?>
