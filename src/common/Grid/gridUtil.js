import * as _ from 'lodash'
/* 그리드 저장 후 slice 데이터 set */
export const setGridData = (e, keyName, fixData) => {
  let dataSource = e.component.getDataSource().items()

  e.changes.forEach((chgData) => {
    let resultData = {}

    switch (chgData.type) {
      case 'insert':
        resultData = _.merge(chgData.data, fixData, {
          createUser: '1',
          used: 1
        })
        dataSource = _.concat(dataSource, resultData)
        break

      case 'update':
      case 'remove':
        let keyIndex = _.findIndex(dataSource, [keyName, chgData.key])
        let selectData = _.cloneDeep(dataSource[keyIndex])
        resultData = _.merge(selectData, chgData.data, {
          updateUser: '1',
          used: _.isEqual(chgData.type, 'update') ? 1 : 0
        })
        dataSource[keyIndex] = resultData
        break
    }
  })
  return dataSource
}
