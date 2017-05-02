import React from 'react';

class Login extends React.Component {
	render () {
		return (
			<div>
				<from>
					<input name="identifier" type="text"/>
					<input name="password" type="password"/>
					<button type="submit">Submit</button>
				</from>
			</div>
		);
	}
}

export default Login;
