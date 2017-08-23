import React from 'react';
import {Link, IndexLink} from 'react-router';

var Navigation = React.createClass({
	render: function(){
		return (
			<div>
				<div className="top-bar">
				<div className="top-bar-left">
				<ul className="menu">
					<li className="menu-text">React Timer App</li>
    				<li>
						<IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}> Timer </IndexLink>
					</li>
					<li>
						<Link to="/countdown" activeClassName="active" activeStyle={{fontWeight:'bold'}}> Countdown </Link>
					</li>
				</ul>
				</div>
				<div className="top-bar-right">
				<ul className="menu">
					<li className="menu-text">Created by <a href="#" target="_blank">Tabo Mbaleni</a></li>
				</ul>
				</div>
			</div>
		</div>
			);
	}
});
module.exports = Navigation;