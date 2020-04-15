( function() {
	var blocks = document.querySelectorAll( '.wp-block-sc-recipe' )

	blocks.forEach( function( value ) {
		var toggle = value.querySelectorAll( '.overlay' )[0]

		toggle.addEventListener( 'click', function() {
			if ( value.classList.contains( 'blathering-toggled' ) ) {
				value.classList.remove( 'blathering-toggled' )
			} else {
				value.classList.add( 'blathering-toggled' )
			}
		} )
	} )
} )()
