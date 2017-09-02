import React from 'react';
import Clock from 'Clock';
import Controls from 'Controls';

var Timer = React.createClass({
	getInitialState: function(){
		return {
			count: 0,
			timerStatus: 'stopped'
		}
	},
	componentDidUpdate: function (prevProps,prevState){
		if(this.state.timerStatus !== prevState.timerStatus){
			switch(this.state.timerStatus){
				case 'started':
					this.startTimer();
					break;
				case 'stopped':
					this.setState({count:0});
				case 'paused':
					clearInterval(this.timer);
					this.timer = undefined;
					break;
			}
		}
	},
	componentWillUnmount: function (){
		console.log('componentWillUnmount');
		clearInterval(this.timer);
					this.timer = undefined;
	},
	startTimer: function (){
		this.timer = setInterval(()=>{
			var newCount = this.state.count + 1;
			this.setState({
				count: newCount >= 0 ? newCount : 0
			});
		},1000);
	},
	handleStatusChange: function (newTimerStatus){
		this.setState({timerStatus: newTimerStatus});
	},
	render: function(){
		var {count, timerStatus} = this.state;
		var renderControlArea = () => {
			return <Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange}/>;
		};
		return (
			<div>
				<Clock totalSeconds={count}/>
				{renderControlArea()}
			</div>
			);
	}
});
module.exports = Timer;