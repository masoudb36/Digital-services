import Splide from '@splidejs/splide';
import URLHash from '@splidejs/splide-extension-url-hash';
new Splide( '#splide', {
	perPage    : 3,
	perMove    : 1,
	height     : '9rem',
	focus      : 'center',
	trimSpace  : false,
	breakpoints: {
		600: {
			perPage: 2,
			height : '6rem',
		}
	}
} ).mount( { URLHash } );