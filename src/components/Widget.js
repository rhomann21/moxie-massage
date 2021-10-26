import React from 'react';

class Widget extends React.Component {
	componentDidMount() {
		const script = document.createElement("script");
		script.src = "https://getreach.ai/widget/moxiemassage/custom.js";
		script.async = true;
		// script.onload = () => this.scriptLoaded();
	  
		document.body.appendChild(script);
	  }

	  
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
			<i className="fa fa-times-circle close-btn" onclick="document.getElementById('lastMinute').style.display = 'none';"></i>
			</div>
		</div>
	)
}
}

export default Widget



