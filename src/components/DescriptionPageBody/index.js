import React, { Component } from 'react';
import PackageDescription from './../../containers/package-description-container';
import DetailsSideBar from './../../containers/package-details-container'
export default class DescriptionPageBody extends Component{
	render(){
		return(
			<div>
				<div className='col-md-2'></div>
				<PackageDescription />
				<DetailsSideBar/>
			</div>
		)
	}
}
