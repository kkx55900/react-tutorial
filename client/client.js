import React from 'react'
import { render } from 'react-dom'
import App from '../components/App'
import Proptest from '../components/Proptest'
import TextDisplay from '../components/TextDisplay'
import { Router, Route, hashHistory } from 'react-router'

render(( 
	<Router history={hashHistory}>
		<Route path="/" component={App}>
		     <Route path="/Proptest" component={Proptest}/>
		     <Route path="/TextDisplay" component={TextDisplay}/>
	    </Route>
    </Router> 
  ),document.getElementById('app'))

