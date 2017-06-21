//fetch数据
import fetch from 'isomorphic-fetch'
import * as types from '../constants/ActionTypes'


/**
 * get请求
 * @param  {String} options.url   api地址
 * @param  {String} options.query query参数
 * @return {Promise}               Promise
 */
const _get = ({ url, query },dispatch) => {
  dispatch({type:types.START_LOADING})
  let _url
  if (query) {
    _url = `http://m.maizuo.com/v4/api${url}?${query}`
  } else {
    _url = `http://m.maizuo.com/v4/api${url}`
  }
  return fetch(_url)
    .then(res => {
      dispatch({type:types.FINISH_LOADING})
      if (res.status >= 200 && res.status < 300) {
        return res.json()
      }
      return Promise.reject(new Error(res.status));
    })
}

export const FetchOrgList = (page,count) => {
  const url = '/getData';
  return () =>{
    _get({ url, query})
      .then((json) => {
        if (json.status===0) {
          return {type:types.FETCH_ORG_SUCCESS, nowPlayingFilms:json.data.films}
        }
        return Promise.reject(new Error('failure'))
      })
      .catch((error) => {
        // dispatch({type:types.FETCH_COMING_SOON_FAIL})
        // return Promise.reject(error)
      })
  }
}