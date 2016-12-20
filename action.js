/**
 * Created by yufengwang002227 on 2016/12/5.
 */
import fetch from 'isomorphic-fetch';
export function changeSearch(newsearchstr) {
    return {
        type: 'changesearch',
        newsearchstr: newsearchstr
    };
}
export function clickSearch(searchstr, weather) {
    return {
        type: 'clicksearch',
        searchstr: searchstr,
        weather: weather
    };
}
export function asyncClickSearch(searchstr) {
    return (dispatch) => {
        // API
        return fetch('http://apis.baidu.com/heweather/weather/free' + '?city=' + searchstr, {
            method: 'POST',
            headers: {
                'apikey': '6d978890e05840d6e42fcc128417f2c2'
            }
        }).then(response => response.json()).then(json => {
            const weather = {
                city : json['HeWeather data service 3.0'][0].basic.city,
	            qlty : json['HeWeather data service 3.0'][0].aqi.city.qlty,
                pm25 : json['HeWeather data service 3.0'][0].aqi.city.pm25,
	            todayDate : json['HeWeather data service 3.0'][0].daily_forecast[0].date,
	            todayTmp : json['HeWeather data service 3.0'][0].daily_forecast[0].tmp,
	            tomorrowDate : json['HeWeather data service 3.0'][0].daily_forecast[1].date,
	            tomorrowTmp : json['HeWeather data service 3.0'][0].daily_forecast[1].tmp,
            };
            return dispatch(clickSearch(searchstr, weather));
        });
    };
}