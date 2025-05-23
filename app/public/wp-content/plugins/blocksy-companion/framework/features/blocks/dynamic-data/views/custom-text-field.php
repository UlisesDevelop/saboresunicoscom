<?php

$value_fallback = blocksy_akg('fallback', $attributes, '');

if (! $value) {
	$value = '';
}

$has_fallback = false;

if (empty($value) && ! empty($value_fallback)) {
	$has_fallback = true;
	$value = do_shortcode($value_fallback);
}

if (
	! is_string($value)
	||
	empty(trim($value))
) {
	return;
}

$value_after = blocksy_akg('after', $attributes, '');
$value_before = blocksy_akg('before', $attributes, '');

if (! empty($value_after) && ! $has_fallback) {
	$value .= $value_after;
}

if (! empty($value_before) && ! $has_fallback) {
	$value = $value_before . $value;
}

$tagName = blocksy_akg('tagName', $attributes, 'div');

$classes = ['ct-dynamic-data'];

if (! empty($attributes['align'])) {
	$classes[] = 'has-text-align-' . $attributes['align'];
}

$wrapper_attr['class'] = implode(' ', $classes);

$border_result = get_block_core_post_featured_image_border_attributes(
	$attributes
);

if (! empty($border_result['class'])) {
	$wrapper_attr['class'] .= ' ' . $border_result['class'];
}

if (! empty($border_result['style'])) {
	$wrapper_attr['style'] = $border_result['style'];
}

$block_type = WP_Block_Type_Registry::get_instance()->get_registered('blocksy/dynamic-data');
$block_type->supports['color'] = true;
wp_apply_colors_support($block_type, $attributes);

$wrapper_attr = get_block_wrapper_attributes($wrapper_attr);

echo blocksy_html_tag(
	$tagName,
	$wrapper_attr,
	$value
);

