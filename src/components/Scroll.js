import React from 'react';

const Scroll = (props) => {
	console.log(props);
	return (
		<div style={{overflowY: 'scroll', border: '0.5px solid black', height: '764px'}}>
			{props.children}
		</div>
	);
}

export default Scroll;