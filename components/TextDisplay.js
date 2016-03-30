import React, { Component } from 'react'
import Proptest from "./Proptest"



class TextInput extends Component {

  constructor() {
    super()
    this.state = {
      inputText: ' sdst'
    }
    this.handleChange = this.handleChange.bind(this);
    this.deleteLetter = this.deleteLetter.bind(this);
  }






 handleChange(e){
 	console.log(e.target.value);
 	
 	this.setState({inputText:e.target.value});
 }
 deleteLetter(){


 	this.setState({
 		inputText:this.state.inputText.substring(0,this.state.inputText.length-1)
 	});
 }






  render() {
  



    return (
      <div>
        
    	<input    value={this.state.inputText}     onChange={this.handleChange} />
    	

      </div>
    )
  }

}

export default TextInput