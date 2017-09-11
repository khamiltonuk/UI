import React from 'react';
import Button from './bootstrap/button';
import Jumbotron from './bootstrap/jumbotron';
import Transition from 'react-transition-group/Transition'
import './sourceapp.scss'

export default class App extends React.Component{
	constructor(props) {
		super(props);

		this.onClick = this.onClick.bind(this);
		this.state = {click:0}
	}

	onClick(e){
		this.setState({click: this.state.click + 1  })
		console.log(this.state.click)
	}
	render(){
		return <Jumbotron className="-fluid custom"	containerFluid="true">
				<h1>Building React.js User Interfaces</h1>
				<p>with Bootstrap and SASS</p>
				<p><Button className="-primary -secondary-outline"
							href="http://02geek.com"
							target="_blank" />
						<Button className="-danger-outline -sm"
										target="_blank" />
				</p>
				<Button onClick={this.onClick} label={this.state.click} className="-primary-outline -lg -block"/>
			</Jumbotron>;
		}
}
