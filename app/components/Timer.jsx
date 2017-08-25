import React from 'react';
import Clock from 'Clock';

var Timer = React.createClass({
	render: function(){
		return (
			<div>
				<Clock totalSeconds={5}/>
			</div>
			);
	}
});
module.exports = Timer;