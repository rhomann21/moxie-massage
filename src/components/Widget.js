import React from 'react';

class Widget extends React.Component {

	constructor(props){
		super(props)
		this.state = {
			hidePopUp: false
		}
		this.handleClick = this.handleClick.bind(this)
	  }
	  
	  
	  handleClick(){
		this.setState(
			{hidePopUp: true}
			)
	  }


	componentDidMount() {
		const script = document.createElement("script");
		script.src = "https://getreach.ai/widget/moxiemassage/custom.js";
		script.async = true;
		// script.onload = () => this.scriptLoaded();
	  
		document.body.appendChild(script);
	  }

	  //need to set state as open/unopen and then be able to toggle upon onclick



	render() {


		return (
		<div>
			<div id="lastMinute">
			<div id="lastMinuteBtn">
				<div className="sm-col-1">
					<h1><b>See Our</b></h1>
					<h2>Last-Minute<br />Openings!</h2>
						
				</div>
				<div className="sm-col-2">
					<a className="qbutton black appointmentbutton fadeIn" 
					href="https://booking.octopi.com/business/view/63159fd4-47b2-4ff4-b3a9-530aad0ac85b?ref=widget" 
					rel="noopener noreferrer"
					target="_blank">
					Click Here</a> 
				</div>
				</div>
			<i className="fa fa-times-circle close-btn" 
				onclick={this.handleClick}
				></i>
			</div>
		</div>
	)
}
}

export default Widget



