<?php
 return array (
  'name' => 'Settings',
  'label' => 'Site Settings',
  '_id' => 'Settings5bbe2345ec1be',
  'fields' => 
  array (
    0 => 
    array (
      'name' => 'name',
      'label' => 'The website name',
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
    1 => 
    array (
      'name' => 'description',
      'label' => 'Site Description',
      'type' => 'text',
      'default' => '',
      'info' => 'A brief and concise summary of the page\'s content, preferably 320 characters or less.',
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
    2 => 
    array (
      'name' => 'homepage',
      'label' => 'Homepage',
      'type' => 'collectionlink',
      'default' => '',
      'info' => '',
      'group' => '',
      'localize' => false,
      'options' => 
      array (
        'link' => 'page',
        'display' => 'title',
        'multiple' => false,
        'limit' => 1,
      ),
      'width' => '1-2',
      'lst' => true,
      'acl' => 
      array (
      ),
    ),
    3 => 
    array (
      'name' => '404',
      'label' => '404 Page not found',
      'type' => 'collectionlink',
      'default' => '',
      'info' => '',
      'group' => '',
      'localize' => false,
      'options' => 
      array (
        'link' => 'page',
        'display' => 'title',
        'multiple' => false,
        'limit' => 1,
      ),
      'width' => '1-2',
      'lst' => true,
      'acl' => 
      array (
      ),
    ),
    4 => 
    array (
      'name' => 'copyright',
      'label' => 'Copyright message',
      'type' => 'wysiwyg',
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
  'template' => '',
  'data' => NULL,
  '_created' => 1539187525,
  '_modified' => 1539533286,
  'description' => '',
  'acl' => 
  array (
  ),
);