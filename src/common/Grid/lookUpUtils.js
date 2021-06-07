import * as _ from 'lodash'

export const ConvertToLookUp = (bindType, bindTypePCode) => {
  switch (bindType) {
    /* 코드 정보 */
    case 'CommonCode':
      const codePool = JSON.parse(localStorage.getItem('CodePool'))
      return _.sortBy(codePool[bindTypePCode], 'code')
    /* 품목 정보 */
    case 'Item':
      const itemPool = JSON.parse(localStorage.getItem('ItemPool'))
      return _.filter(itemPool, {})
    /* 제품정보 */
    case 'Product':
      const productPool = JSON.parse(localStorage.getItem('ProductPool'))
      return _.filter(productPool, {})
    /* 자재정보 */
    case 'Material':
      const materialPool = JSON.parse(localStorage.getItem('MaterialPool'))
      return _.filter(materialPool, {})
    /* 공구정보 */
    case 'Tool':
      const toolPool = JSON.parse(localStorage.getItem('ToolPool'))
      return _.filter(toolPool, {})
    /* 예비품정보 */
    case 'Part':
      const partPool = JSON.parse(localStorage.getItem('PartPool'))
      return _.filter(partPool, {})
    /* 공정정보 */
    case 'Process':
      const processPool = JSON.parse(localStorage.getItem('ProcessPool'))
      return _.filter(processPool, {})
    /* 유저정보 */
    case 'User':
      const userPool = JSON.parse(localStorage.getItem('UserPool'))
      return _.filter(userPool, {})
    /* 거래처정보 */
    case 'Company':
      const companyPool = JSON.parse(localStorage.getItem('CompanyPool'))
      return _.filter(companyPool, {})
    /* YN */
    case 'YN':
      return [
        { name: 'Y', value: 1 },
        { name: 'N', value: 0 }
      ]
  }
}