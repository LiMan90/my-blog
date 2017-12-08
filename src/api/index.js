// 配置API接口地址
var root = '/api'
// 引用axios
var axios = require('axios')
axios.defaults.timeout = 5000;                        //响应时间
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
// 自定义判断元素类型JS
function toType(obj) {
  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}
// 参数过滤函数
function filterNull(o) {
  for (var key in o) {
    if (o[key] === null) {
      delete o[key]
    }
    if (toType(o[key]) === 'string') {
      o[key] = o[key].trim()
    } else if (toType(o[key]) === 'object') {
      o[key] = filterNull(o[key])
    } else if (toType(o[key]) === 'array') {
      o[key] = filterNull(o[key])
    }
  }
  return o
}
/*
 接口处理函数
 这个函数每个项目都是不一样的，我现在调整的是适用于
 https://cnodejs.org/api/v1 的接口，如果是其他接口
 需要根据接口的参数进行调整。参考说明文档地址：
 https://cnodejs.org/topic/5378720ed6e2d16149fa16bd
 主要是，不同的接口的成功标识和失败提示是不一致的。
 另外，不同的项目的处理方法也是不一致的，这里出错就是简单的alert
 */

function apiAxios(method, url, params, success, failure, config) {
  if (params) {
    params = filterNull(params)
  }
  axios({
    method: method === 'UPLOAD' ? 'POST' : method,
    url: url,
    data: method === 'POST' || method === 'PUT' || method === 'UPLOAD' ? params : null,
    params: method === 'GET' || method === 'DELETE' || method === 'UPLOAD'? params : null,
    baseURL: root,
    headers:{ 'Content-Type': method === 'UPLOAD'? 'multipart/form-data' : 'application/json;charset=utf-8'},
    withCredentials: false
  })
    .then(function (res) {
      if (res.status === 200) {
        if (success && res.data.message === 'success') {
          success(res.data.data)
        } else if (failure) {
          failure(res.data.message)
        }
      }
    })
    .catch(function (err) {
      let res = err.response
      if (err) {
        console.log('api error, HTTP CODE: ' + res.status)
        failure(err)
      }
    })
}

// 返回在vue模板中的调用接口
export default {
  get: function (url, params, success, failure) {
    return apiAxios('GET', url, params, success, failure)
  },
  post: function (url, params, success, failure) {
    return apiAxios('POST', url, params, success, failure)
  },
  put: function (url, params, success, failure) {
    return apiAxios('PUT', url, params, success, failure)
  },
  delete: function (url, params, success, failure) {
    return apiAxios('DELETE', url, params, success, failure)
  },
  upload: function (url, params, success, failure) {
    return apiAxios('UPLOAD', url, params, success, failure)
  }
}
