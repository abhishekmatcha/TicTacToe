import React from 'react';
import {calculateWinner} from '../helper';
//Status component
//----------------
//Functional component which computes and renders the game status:
//- Who plays next? (uses xIsNext value)
//- Who is the winner? (uses squares values and external function)
const Status = props => {
	const { squares, xIsNext } = props,
		winner = calculateWinner(squares),
		effect = winner?'bounce':''; 
	let status;  

	if(winner) {
		status = 'Winner is: '+ winner;
	}else{
		status = 'Next player is: '+ (xIsNext?'x':'o');
	}
	
	//Renders React element ...
	return(
		<div className="game-info__status">
			<div className={'status '+effect}>{status}</div>
  		</div>
	); 
}
export default Status;
