/**
 * Created by yufengwang002227 on 2016/12/19.
 */
import React from 'react';
import { connect } from 'react-redux';
import './leftPart.styl';
class LeftPart extends React.Component {
	render() {
		const { weather } = this.props.data;
		return (
		this.props.data.weather.city ? <div className="leftBody">
				<div className="infoCard">
					<h2 className="h2title">
						<div className="atitle">{weather.city + ' PM2.5指数:' + weather.pm25 + ' 空气质量:' + weather.qlty}</div>
					</h2>
					<p>{'今日(' + weather.todayDate + ')气温:' + weather.todayTmp.min + '摄氏度到' + weather.todayTmp.max + '摄氏度。'}</p>
					<p>{'明日(' + weather.tomorrowDate + ')气温:' + weather.tomorrowTmp.min + '摄氏度到' + weather.tomorrowTmp.max + '摄氏度。'}</p>
				</div>
			</div> : null
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
export default connect(select, mapDispatchToProps)(LeftPart);