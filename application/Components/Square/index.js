import React from 'react';

//Square component
//----------------
//Functional component which renders a button (Visually represented as a square):
//- Renders value (props)
//- Runs a click event handler on the button (props)
const Square = props => { 
	const { value, ...other } = props;

	//Renders React element ...
	return(
		<button className={`square ${value}`} onClick={()=>other.onClick()}>{value}</button>
	); 
} 
export default Square;
