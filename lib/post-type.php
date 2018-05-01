<?php

function cpt_register_blog() {
  $post_type = 'cpt-blog';
  $rest_base = 'blog';
  $slug      = 'blog';
  $menu_icon = 'dashicons-megaphone';

  $labels = array(
    'name'               => _x( 'Blog', 'post type general name' ),
    'singular_name'      => _x( 'Blog', 'post type singular name' ),
    'add_new'            => _x( 'Add Blog', 'rep' ),
    'add_new_item'       => __( 'Add New Blog' ),
    'edit_item'          => __( 'Edit Blog' ),
    'new_item'           => __( 'New Blog' ),
    'view_item'          => __( 'View Blog' ),
    'search_items'       => __( 'Search Blog' ),
    'not_found'          => __( 'Nothing found' ),
    'not_found_in_trash' => __( 'Nothing found in Trash' ),
    'parent_item_colon'  => ''
  );

  $supports = array(
    'title',
    'editor',
    'thumbnail',
    'excerpt'
  );

  $rewrite = array(
    'slug' => $slug
  );

  $args = array(
    'labels'                => $labels,
    'public'                => true,
    'hierarchical'          => true,
    'publicly_queryable'    => true,
    'show_ui'               => true,
    'show_in_rest'          => true,
    'rest_base'             => $rest_base,
    'rest_controller_class' => 'WP_REST_Posts_Controller',
    'menu_position'         => null,
    'menu_icon'             => $menu_icon,
    'capability_type'       => 'post',
    'supports'              => $supports,
    'has_archive'           => false,
    'rewrite'               => $rewrite,
    'query_var'             => true
  );

  register_post_type( $post_type, $args );
}

function cpt_register() {
  cpt_register_blog();
}

add_action( 'init', 'cpt_register' );

?>
