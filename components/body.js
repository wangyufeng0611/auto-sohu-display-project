/**
 * Created by yufengwang002227 on 2016/12/19.
 */
import React from 'react';
import { connect } from 'react-redux';
import './body.styl';
import LeftPart from './leftPart';
class Body extends React.Component {
	render() {
		return (
			<div className="bodyBody">
				<LeftPart/>
			</div>
		);
	}
}

// REDUX STUFF
// Which props do we want to inject, given the global state
function select(state) {
	return {
		data: state
	};
}
function mapDispatchToProps(dispatch) {
	return {
	};
}
// define mapping from button to dispatch actions here. #王玉锋 2016.6.15
// Wrap the component to inject dispatch and state into it.  #王玉锋 2016.6.15
export default connect(select, mapDispatchToProps)(Body);