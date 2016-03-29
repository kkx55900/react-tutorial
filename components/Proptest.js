import React, { Component } from 'react'

class Proptest extends Component {

	constructor(){
		super()
		
	}


	render(){
		return( 

		<div> 
			<p>{this.props.text}</p>
			<button onClick={this.props.deleteLetter}> </button>

		</div>
	)}
}
export default Proptest