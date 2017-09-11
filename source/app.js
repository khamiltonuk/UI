import React from 'react';
import Button from './bootstrap/button';
import Jumbotron from './bootstrap/jumbotron';
import Transition from 'react-transition-group/Transition'
import './sourceapp.scss'

export default class App extends React.Component{
	render(){
		return <Transition
			transitionName="app"
			transitionEnter={true}
			transitionEnterTimeout={500}
			transitionLeaveTimeout={500}>
			<Jumbotron className="-fluid custom"	containerFluid="true">
				<h1>Building React.js User Interfaces</h1>
				<p>with Bootstrap and SASS</p>
				<p><Button className="-primary -secondary-outline"
							href="http://02geek.com"
							target="_blank" />
						<Button className="-danger-outline -sm"
										target="_blank" />
				</p>
				<Button className="-primary-outline -lg -block"/>
			</Jumbotron></Transition>;

	}
}
