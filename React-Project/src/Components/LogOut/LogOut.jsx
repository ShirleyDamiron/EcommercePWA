import React from "react";
import { Redirect } from 'react-router-dom';


class LogOut extends React.Component {

	componentDidMount() {
		console.log("hey")
		this.props.signOut()
	}
	
	render() {
		return <Redirect to="/signIn" />
	}
}

export default LogOut;