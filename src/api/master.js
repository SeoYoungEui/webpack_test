import axios from 'axios'

let address = 'http://localhost:8090/api'
axios.defaults.headers.post['language'] = 'KR'

//제품 정보 API
const getProductList = (param) => {
  var pageable = new URLSearchParams()
  pageable.append('size', param.pageable.size)
  pageable.append('page', param.pageable.page)
  console.log(param)
  return axios
    .post(address + '/master/item/products?' + pageable.toString(), param.searchParam)
    .then((response) => response.data)
}
const setProductList = (param) => {
  return axios.post(address + '/master/item/products/save', param).then((response) => response.data)
}

//자재 정보 API
const getMaterialList = (param) => {
  var pageable = new URLSearchParams()
  pageable.append('size', param.pageable.size)
  pageable.append('page', param.pageable.page)

  return axios
    .post(address + '/master/item/materials?' + pageable.toString(), param.searchParam)
    .then((response) => response.data)
}

const setMaterialList = (param) => {
  return axios
    .post(address + '/master/item/materials/save', param)
    .then((response) => response.data)
}
// 공구 정보 API
const getMasterToolList = (param) => {
  var pageable = new URLSearchParams()
  pageable.append('size', param.pageable.size)
  pageable.append('page', param.pageable.page)
  return axios
    .post(address + '/master/item/tool?' + pageable.toString(), param.searchParam)
    .then((response) => response.data)
}
const setMasterToolList = (param) => {
  return axios.post(address + '/master/item/tool/save', param).then((response) => response.data)
}
// 예비품 정보 API
const getSpareList = (param) => {
  var pageable = new URLSearchParams()
  pageable.append('size', param.pageable.size)
  pageable.append('page', param.pageable.page)
  return axios
    .post(address + '/master/item/spares?' + pageable.toString(), param.searchParam)
    .then((response) => response.data)
}
const setSpareList = (param) => {
  return axios.post(address + '/master/item/spares/save', param).then((response) => response.data)
}
//거래처 정보 API
const getCompanyList = (param) => {
  var pageable = new URLSearchParams()
  pageable.append('size', param.pageable.size)
  pageable.append('page', param.pageable.page)
  return axios
    .post(address + '/master/company?' + pageable.toString(), param.searchParam)
    .then((response) => response.data)
}
const setCompanyList = (param) => {
  return axios.post(address + '/master/company/save', param).then((response) => response.data)
}

//사용자 정보 API
const getUserList = (param) => {
  var pageable = new URLSearchParams()
  pageable.append('size', param.pageable.size)
  pageable.append('page', param.pageable.page)

  return axios
    .post(address + '/master/userInfo/users?' + pageable.toString(), param.searchParam)
    .then((response) => response.data)
}

const setUserList = (param) => {
  return axios.post(address + '/master/userInfo/save', param).then((response) => response.data)
}

// 공정 정보 API
const getProcessList = (param) => {
  var pageable = new URLSearchParams()
  pageable.append('size', param.pageable.size)
  pageable.append('page', param.pageable.page)
  return axios
    .post(address + '/master/processList?' + pageable.toString(), param.searchParam)
    .then((response) => response.data)
}
const setProcessList = (param) => {
  return axios.post(address + '/master/processInfo/save', param).then((response) => response.data)
}

// 판매 단가 정보 API
const getSellPriceItemList = (param) => {
  var pageable = new URLSearchParams()
  pageable.append('size', param.pageable.size)
  pageable.append('page', param.pageable.page)
  return axios
    .post(address + '/master/price/sell/itemList?' + pageable.toString(), param.searchParam)
    .then((response) => response.data)
}

const getSellPriceList = (param) => {
  return axios
    .post(address + '/master/price/sell/priceList', param)
    .then((response) => response.data)
}

const getSellPriceRevLog = (param) => {
  return axios
    .post(address + '/master/price/sell/priceRev', param)
    .then((response) => response.data)
}

// 구매 단가 정보 API
const getPurchaseItemList = (param) => {
  var pageable = new URLSearchParams()
  pageable.append('size', param.pageable.size)
  pageable.append('page', param.pageable.page)
  return axios
    .post(address + '/master/price/purchase/itemList?' + pageable.toString(), param.searchParam)
    .then((response) => response.data)
}

const getPurchasePriceList = (param) => {
  return axios
    .post(address + '/master/price/purchase/priceList', param)
    .then((response) => response.data)
}

const getPurchasePriceRevLog = (param) => {
  return axios
    .post(address + '/master/price/purchase/priceRev', param)
    .then((response) => response.data)
}

// (공용) 단가 정보 저장 API
const setPriceList = (param) => {
  return axios.post(address + '/master/price/save', param).then((response) => response.data)
}
// 예비품구매요청 API
const getSparePurchaseRequestList = (param) => {
  let pageable = new URLSearchParams()
  pageable.append('size', param.pageable.size)
  pageable.append('page', param.pageable.page)
  return axios
    .post(address + '/purchaseRequest/spare?' + pageable.toString(), param.searchParam)
    .then((response) => response.data)
}

// 적재위치 API
const getMasterLocationList = (param) => {
  var pageable = new URLSearchParams()
  pageable.append('size', param.pageable.size)
  pageable.append('page', param.pageable.page)
  return axios
    .post(address + '/master/locationInfo?' + pageable.toString(), param.searchParam)
    .then((response) => response.data)
}
// 사용자코드(COD100) API
const getMasterUserCodeList = (param) => {
  return axios
    .post(address + '/master/code/list', param.searchParam)
    .then((response) => response.data)
}
const setMasterUserCodeList = (param) => {
  return axios.post(address + '/master/code/save', param).then((response) => response.data)
}
// 불량유형 코드(COD200) API
const getMasterBadCodeList = (param) => {
  var pageable = new URLSearchParams()
  pageable.append('size', param.pageable.size)
  pageable.append('page', param.pageable.page)
  return axios
    .post(address + '/master/badCode?' + pageable.toString(), param.searchParam)
    .then((response) => response.data)
}
const setMasterBadCodeList = (param) => {
  return axios.post(address + '/master/badCode/save', param).then((response) => response.data)
}
// 비가동유형 코드(COD300) API
const getMasterStopCodeList = (param) => {
  var pageable = new URLSearchParams()
  pageable.append('size', param.pageable.size)
  pageable.append('page', param.pageable.page)
  return axios
    .post(address + '/master/stopCode?' + pageable.toString(), param.searchParam)
    .then((response) => response.data)
}
const setMasterStopCodeList = (param) => {
  return axios.post(address + '/master/stopCode/save', param).then((response) => response.data)
}
// 고장유형 코드(COD400) API
const getMasterFailCodeList = (param) => {
  var pageable = new URLSearchParams()
  pageable.append('size', param.pageable.size)
  pageable.append('page', param.pageable.page)
  return axios
    .post(address + '/master/failCode?' + pageable.toString(), param.searchParam)
    .then((response) => response.data)
}
const setMasterFailCodeList = (param) => {
  return axios.post(address + '/master/failCode/save', param).then((response) => response.data)
}
// 제조공정정보 API
const getManufactureItemList = (param) => {
  var pageable = new URLSearchParams()
  pageable.append('size', param.pageable.size)
  pageable.append('page', param.pageable.page)
  return axios
    .post(address + '/master/manufactureItem?' + pageable.toString(), param.searchParam)
    .then((response) => response.data)
}
// BOM 정보 API
const getBomList = (param) => {
  return axios.post(address + '/master/bomList', param).then((response) => response.data)
}
//제조공정정보 단건가져오기 (라우팅 + BOM)
//다이얼로그 전용
const getManufactureProcess = (param) => {
  return axios.post(address + '/master/manufactureProcess', param).then((response) => response.data)
}

export {
  getProductList,
  setProductList,
  getMaterialList,
  setMaterialList,
  getMasterToolList,
  setMasterToolList,
  getSpareList,
  setSpareList,
  getUserList,
  setUserList,
  getCompanyList,
  setCompanyList,
  getProcessList,
  setProcessList,
  getSellPriceItemList,
  getSellPriceList,
  getSellPriceRevLog,
  getPurchaseItemList,
  getPurchasePriceList,
  setPriceList,
  getPurchasePriceRevLog,
  getSparePurchaseRequestList,
  getMasterLocationList,
  getMasterUserCodeList,
  setMasterUserCodeList,
  getMasterBadCodeList,
  setMasterBadCodeList,
  getMasterStopCodeList,
  setMasterStopCodeList,
  getMasterFailCodeList,
  setMasterFailCodeList,
  getManufactureItemList,
  getBomList,
  getManufactureProcess
}
