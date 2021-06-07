import axios from 'axios'

let address = 'http://localhost:8090/api'
axios.defaults.headers.post['language'] = 'KR'

//기준정보 캐시 풀
const getItemPool = () => {
  return axios.get(address + '/pool/master/item').then((response) => response.data)
}

const getProductPool = () => {
  return axios.get(address + '/pool/master/product').then((response) => response.data)
}

const getMaterialPool = () => {
  return axios.get(address + '/pool/master/material').then((response) => response.data)
}

const getToolPool = () => {
  return axios.get(address + '/pool/master/tool').then((response) => response.data)
}

const getPartPool = () => {
  return axios.get(address + '/pool/master/part').then((response) => response.data)
}

const getProcessPool = () => {
  return axios.get(address + '/pool/master/process').then((response) => response.data)
}

const getUserPool = () => {
  return axios.get(address + '/pool/master/user').then((response) => response.data)
}

const getCompanyPool = () => {
  return axios.get(address + '/pool/master/company').then((response) => response.data)
}

//코드정보 캐시 풀
const getUserCodePool = () => {
  return axios.get(address + '/pool/code/userCode').then((response) => response.data)
}
// 불량유형 코드정보 캐시 풀
const getMasterBadCodePool = (param) => {
  return axios.get(address + '/pool/code/badCode', param).then((response) => response.data)
}
// 비가동유형 코드정보 캐시 풀
const getMasterStopCodeList = (param) => {
  return axios.get(address + '/pool/code/stopCode', param).then((response) => response.data)
}
// 고장유형 코드정보 캐시 풀
const getMasterFailCodePool = (param) => {
  return axios.get(address + '/pool/code/failCode', param).then((response) => response.data)
}
export {
  getItemPool,
  getProductPool,
  getMaterialPool,
  getToolPool,
  getPartPool,
  getProcessPool,
  getUserPool,
  getCompanyPool,
  getUserCodePool,
  getMasterBadCodePool,
  getMasterStopCodeList,
  getMasterFailCodePool
}
