import React from 'react';

var CountdownForm = React.createClass({
	onFormSubmit: function(e) {
		e.preventDefault();
		var strSeconds= this.refs.seconds.value;

		if(strSeconds.match(/^[0-9]*$/)){
			this.refs.seconds.value = '';
			this.props.onSetCountdown(parseInt(strSeconds, 10));
		}
	},
	render: function(){
		return (
			<div>
				<form ref="form" onSubmit={this.onFormSubmit} className="countdown-form">
				<input type="text" ref="seconds" placeholder="Enter time in seconds"/>
				<button className="hollow expanded button">Start</button><br/>
			</form>
			</div>
			);
	}

});
module.exports = CountdownForm;