import React from 'react';


// When using a functional component, 
// we need to manually pass down the props to that component
let Definition = (props) => {
	return (
		<div>
      		{ props.def }
		</div>
	)
};

export default Definition;
