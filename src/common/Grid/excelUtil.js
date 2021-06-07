import * as _ from 'lodash'
import ExcelJS from 'exceljs'
import saveAs from 'file-saver'
import { exportDataGrid } from 'devextreme/excel_exporter'
export const singleGridExport = (e) => {
  const workbook = new ExcelJS.Workbook()
  const worksheet = workbook.addWorksheet('Main sheet')

  exportDataGrid({
    component: e.component,
    worksheet: worksheet,
    autoFilterEnabled: true
  }).then(() => {
    workbook.xlsx.writeBuffer().then((buffer) => {
      saveAs(new Blob([buffer], { type: 'application/octet-stream' }), e.fileName + '.xlsx')
    })
  })
  e.cancel = true
}
