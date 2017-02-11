import React, { Component } from 'react';
import Logo from './../Logo';
import SearchBarContainer from './../../containers/search-bar-container';
import StepsButton from './../StepsButton';
import {Link} from 'react-router';
import './header.scss';

export default class Header extends Component{
	render(){
		return(
			<div>
				{/*<div className = 'nav-bar'>
					<span><Link to='/'>Home</Link></span>
					<span>Docs</span>
					<span>Help</span>
				</div>*/}
				<div className = 'header'>
						<div className='col-md-3'> <Logo /> </div>
						<div className='col-md-7'><SearchBarContainer /> </div>
						<div className='col-md-2'> <StepsButton /></div>
						
						
						
				</div>
			</div>
		)
	}
} 