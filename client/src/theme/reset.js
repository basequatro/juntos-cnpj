import { createGlobalStyle } from 'styled-components'

const Reset = createGlobalStyle`
	#root {
		display: -webkit-box;  /* OLD - iOS 6-, Safari 3.1-6 */
		display: -ms-flexbox;  /* TWEENER - IE 10 */
		display: flex;         /* NEW, Spec - Firefox, Chrome, Opera */
		overflow: auto;
		flex: 1
	}
	html {
		box-sizing: border-box;
		font-size: 16px;
	}	
	html, body {
		display: -webkit-box;  /* OLD - iOS 6-, Safari 3.1-6 */
		display: -ms-flexbox;  /* TWEENER - IE 10 */
		display: flex;         /* NEW, Spec - Firefox, Chrome, Opera */
		flex: 1;
		height: 100%;
	}
	*, *:before, *:after {
		box-sizing: inherit;
	}	
	body, h1, h2, h3, h4, h5, h6, p, ol, ul {
		margin: 0;
		padding: 0;
		font-weight: normal;
	}	
	ol, ul {
		list-style: none;
	}	
	img {
		max-width: 100%;
		height: auto;
	}
`

export default Reset
