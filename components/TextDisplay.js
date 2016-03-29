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
 	$.ajax({
	 type:"POST",
      url: "/hi",
      dataType: 'text',
      success: function(data) {
        console.log(data);
      }.bind(this),
      error: function(xhr, status, err) {
        console.error("error");
      }.bind(this)
    });

 	
 	this.setState({
 		inputText:this.state.inputText.substring(0,this.state.inputText.length-1)
 	});
 }






  render() {
  	var checkFalse = true;
  	if(checkFalse){
  		checkFalse =  <Proptest text={this.state.inputText} deleteLetter={this.deleteLetter}/>;
 	}else{
  		checkFalse = <p>This is false</p>
  	}



    return (
      <div>
        
    	<input    value={this.state.inputText}     onChange={this.handleChange} />
    	
    	{checkFalse}

      </div>
    )
  }

}

export default TextInput