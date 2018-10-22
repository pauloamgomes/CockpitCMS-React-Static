<?php
 return array (
  'name' => 'page',
  'label' => 'Page',
  '_id' => 'page5a71aee9aede5',
  'fields' => 
  array (
    0 => 
    array (
      'name' => 'published',
      'label' => 'Published',
      'type' => 'boolean',
      'default' => '',
      'info' => '',
      'localize' => false,
      'options' => 
      array (
        'default' => false,
        'label' => false,
      ),
      'width' => '1-2',
      'lst' => true,
    ),
    1 => 
    array (
      'name' => 'menu',
      'label' => 'Menu',
      'type' => 'multipleselect',
      'default' => '',
      'info' => 'Set if the page will be displayed in the menus',
      'group' => '',
      'localize' => false,
      'options' => 
      array (
        'options' => 'main, footer',
      ),
      'width' => '1-2',
      'lst' => false,
      'acl' => 
      array (
      ),
    ),
    2 => 
    array (
      'name' => 'title',
      'label' => 'Title',
      'type' => 'text',
      'default' => '',
      'info' => '',
      'localize' => false,
      'options' => 
      array (
        'slug' => true,
      ),
      'width' => '1-1',
      'lst' => true,
      'required' => false,
    ),
    3 => 
    array (
      'name' => 'components',
      'label' => 'Components',
      'type' => 'layout',
      'default' => '',
      'info' => '',
      'group' => '',
      'localize' => false,
      'options' => 
      array (
      ),
      'width' => '1-1',
      'lst' => false,
      'acl' => 
      array (
      ),
      'required' => true,
    ),
    4 => 
    array (
      'name' => 'slug',
      'label' => 'Slug',
      'type' => 'text',
      'default' => '',
      'info' => '',
      'group' => '',
      'localize' => false,
      'options' => 
      array (
        'cls' => 'uk-hidden',
      ),
      'width' => '1-1',
      'lst' => true,
      'acl' => 
      array (
      ),
      'required' => false,
    ),
    5 => 
    array (
      'name' => 'description',
      'label' => 'Meta Description',
      'type' => 'text',
      'default' => '',
      'info' => '',
      'group' => '',
      'localize' => false,
      'options' => 
      array (
      ),
      'width' => '1-1',
      'lst' => true,
      'acl' => 
      array (
      ),
    ),
  ),
  'sortable' => true,
  'in_menu' => true,
  '_created' => 1517399785,
  '_modified' => 1539540895,
  'color' => '',
  'acl' => 
  array (
    'public' => 
    array (
      'entries_view' => true,
    ),
  ),
  'rules' => 
  array (
    'create' => 
    array (
      'enabled' => false,
    ),
    'read' => 
    array (
      'enabled' => false,
    ),
    'update' => 
    array (
      'enabled' => false,
    ),
    'delete' => 
    array (
      'enabled' => false,
    ),
  ),
  'contentpreview' => 
  array (
    'enabled' => true,
    'url' => 'http://localhost:3000/preview',
  ),
);