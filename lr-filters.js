/**
 * Convert URL of Block type 'core/image' to relative URL
 *
 * @param {object} element
 * @param {object} blockType
 * @param {object} attributes
 *
 * @return The element.
 */
function convertImageUrlToRelative( element, blockType, attributes ) {
	if ( 'core/image' !== blockType.name ) {
		return element;
	}

	const images = element.props.children.props.children;

	if ( 'undefined' === typeof element.props ||
			'undefined' === typeof element.props.children ||
			'undefined' === typeof element.props.children.props ||
			'undefined' === typeof element.props.children.props.children ) {
		return element;
	}

	if ( Array.isArray( images ) ) {
		images.forEach( function( elm ) {
			if ( 'object' === typeof elm	&&
				'undefined' !== typeof elm.props  &&
				'undefined' !== typeof elm.props.src ) {
				elm.props.src = convertUrlToRelative( elm.props.src );
			}
		});
	}

	return element;
}

/**
 * Convert URL to relative URL
 *
 * @param {string} urlString
 *
 * @return URL converted
 */
function convertUrlToRelative( urlString ) {
	const currentUrlObject = new URL( location.href );
	const targetUrlObject = new URL( urlString, location.href );

	if ( currentUrlObject.origin === targetUrlObject.origin ) {
		return targetUrlObject.pathname;
	}
	return urlString;
}

wp.hooks.addFilter(
	'blocks.getSaveElement',
	'lr-filters/convert-image-url-to-relative',
	convertImageUrlToRelative
);
