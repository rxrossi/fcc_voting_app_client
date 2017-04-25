import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
	<nav className="navbar navbar-default">
		<div className="container-fluid">
			<div className="navbar-header">
				<Link to="/" className="navbar-brand">YouPoll 2</Link>
			</div>

			<div className="collapse navbar-collapse">
				<ul className="nav nav-bar navbar-right">
					<li><Link to="/login">Sign up</Link></li>
				</ul>
			</div>
		</div>
	</nav>
);
