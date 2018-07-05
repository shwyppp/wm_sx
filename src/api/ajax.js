// ajax请求模块函数
//返回值 promise 对象(异步返回的数据是：response.data)
import axios from 'axios'
export default function ajax(url, data=(),type='GET'){

  return new Promise(function(resolve, reject){
    //执行异步请求
    let promise
    if(type === 'GET'){
      //准备url query参数数据
      let dataStr = ''    //数据拼接字符串
      object.keys(data).forEach(key => {
        dataStr += key + '=' + dataa[key] + '&'
      })
      if(dataStr !== ''){
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      //发送GET请求
      promise = axios.get(url)
    }else{
      //发送post请求
      promise = axios.post(url, data)
    }


    promise.then(function(response){
    //成功的调用resolve
    resolve(response.data)
    })
    .catch(function(error){
    reject(error)
    //失败调用reject()
    })
  })
  return promise
}
