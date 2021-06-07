import axios from 'axios'

let address = 'http://localhost:8090/api'
axios.defaults.headers.post['language'] = 'KR'

//발주정보 조회 for main grid
const getPurchaseOrderList = (param) => {
  var pageable = new URLSearchParams()
  pageable.append('size', param.pageable.size)
  pageable.append('page', param.pageable.page)
  console.log(param)
  return axios
    .post(address + '/purchaseOrder/material?' + pageable.toString(), param.searchParam)
    .then((response) => response.data)
}

export {
  getPurchaseOrderList
}