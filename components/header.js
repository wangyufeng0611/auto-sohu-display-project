/**
 * Created by yufengwang002227 on 2016/12/7.
 */
/**
 * Created by yufengwang002227 on 2016/12/6.
 */
import React from 'react';
import { connect } from 'react-redux';
import './header.styl';
import { changeSearch, asyncClickSearch } from './../action';
class Header extends React.Component {
    render() {
	    const { data, _changeSearch, _clickSearch } = this.props;
        return (
        <div className="headerBody">
            <div className="area">
                <div className="autoTopNavBar">
                    <div className="block1">
                        <a className="element1" href="http://auto.sohu.com/">返回搜狐汽车首页</a>|
                    </div>
                    <div className="block2">
                        <a className="element2" href="http://beijing.auto.sohu.com/">北京站</a>
                    </div>
                    <div className="block3">
                        <a className="element3" href="http://beijing.auto.sohu.com/">导航</a>
                    </div>
                </div>
            </div>
            <div className="search">
                <div className="autoTopNavBar">
                    <a className="logo" href="http://auto.sohu.com/"></a>
                    <div className="suggestBox">
                        <form className="suggestForm">
                            <input className="searchInput" type="text" placeholder="搜索您感兴趣的车型..."  value={data.searchstr} onChange={_changeSearch}></input>
                            <div className="searchClear"></div>
                            <button className="searchButton" onClick={() => {_clickSearch(data.searchInfo)}} type="button">搜索</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="tab"/>
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
		_changeSearch: (evt) => dispatch(changeSearch(evt.target.value)),
		_clickSearch: (val) => dispatch(asyncClickSearch(val))
	};
}
// define mapping from button to dispatch actions here. #王玉锋 2016.6.15
// Wrap the component to inject dispatch and state into it.  #王玉锋 2016.6.15
export default connect(select, mapDispatchToProps)(Header);