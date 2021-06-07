import { Card, TablePagination } from '@material-ui/core'
import { DataGrid } from 'devextreme-react'
import { Column, Editing, Lookup, Pager, Paging, Export } from 'devextreme-react/data-grid'
import CustomStore from 'devextreme/data/custom_store'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ConvertToLookUp } from '../../../../common/Grid/lookUpUtils'
import { toastAction } from '../../../../common/Toast/slice'
import { masterProductAction, masterProductSelector } from '../slice'
import { singleGridExport } from '../../../../common/Grid/excelUtil'
import { setGridData } from '../../../../common/Grid/gridUtil'
const ProductGrid = () => {
  const dispatch = useDispatch()
  const { isLoading, success, msg, productList, defaultParam, totalCount } = useSelector(
    masterProductSelector.all
  )

  useEffect(() => {
    dispatch(masterProductAction.load())
  }, [defaultParam])

  useEffect(() => {
    if (success) {
      dispatch(masterProductAction.load())
    }
  }, [success])

  const onSaving = (event) => {
    event.cancel = true
    if (event.changes.length) {
      dispatch(masterProductAction.save(event))
      event.component.cancelEditData()
    }
  }

  const onOptionChanged = (e) => {
    if (e.fullName === 'paging.pageIndex') {
      console.log('new page index is ' + e.value)
    }
    console.log(e)
  }

  return (
    <div style={{ padding: 20, paddingTop: 5 }}>
      <Card>
        <DataGrid
          dataSource={productList}
          keyExpr="itemId"
          columnAutoWidth={true}
          rowAlternationEnabled={true}
          showColumnLines={true}
          onSaving={onSaving}
          onOptionChanged={onOptionChanged}
          loadPanel={{
            showIndicator: true,
            enabled: true
          }}
          onExporting={singleGridExport}
        >
          <Editing mode="batch" allowUpdating={true} allowAdding={true} allowDeleting={true} />
          <Paging></Paging>
          <Pager showPageSizeSelector={true} allowedPageSizes={[5, 10, 20]} showInfo={true} />
          <Column dataField="itemCode" caption="제품코드" fixed={true}></Column>
          <Column dataField="itemName" caption="제품명" fixed={true}></Column>
          <Column dataField="prdtType" caption="제품유형">
            <Lookup
              dataSource={ConvertToLookUp('CommonCode', 'ITM001')}
              displayExpr="codeKR"
              valueExpr="code"
            ></Lookup>
          </Column>
          <Column dataField="prdtCtg" caption="카테고리">
            <Lookup
              dataSource={ConvertToLookUp('CommonCode', 'CTG001')}
              displayExpr="codeKR"
              valueExpr="code"
            ></Lookup>
          </Column>
          <Column dataField="prdtGroup" caption="그룹">
            <Lookup
              dataSource={ConvertToLookUp('CommonCode', 'GRP001')}
              displayExpr="codeKR"
              valueExpr="code"
            ></Lookup>
          </Column>
          <Column dataField="attMatType" caption="재질">
            <Lookup
              dataSource={ConvertToLookUp('CommonCode', 'ITA001')}
              displayExpr="codeKR"
              valueExpr="code"
            ></Lookup>
          </Column>
          <Column dataField="attStdType" caption="규격">
            <Lookup
              dataSource={ConvertToLookUp('CommonCode', 'ITA002')}
              displayExpr="codeKR"
              valueExpr="code"
            ></Lookup>
          </Column>
          <Column dataField="attDiaType" caption="소재경">
            <Lookup
              dataSource={ConvertToLookUp('CommonCode', 'ITA003')}
              displayExpr="codeKR"
              valueExpr="code"
            ></Lookup>
          </Column>
          <Column dataField="heatSpec" caption="열처리사양">
            <Lookup
              dataSource={ConvertToLookUp('CommonCode', 'SPF001')}
              displayExpr="codeKR"
              valueExpr="code"
            ></Lookup>
          </Column>
          <Column dataField="surfaceSpec" caption="표면처리사양">
            <Lookup
              dataSource={ConvertToLookUp('CommonCode', 'SPF002')}
              displayExpr="codeKR"
              valueExpr="code"
            ></Lookup>
          </Column>
          <Column dataField="coatingSpec" caption="코팅사양">
            <Lookup
              dataSource={ConvertToLookUp('CommonCode', 'SPF003')}
              displayExpr="codeKR"
              valueExpr="code"
            ></Lookup>
          </Column>
          <Column dataField="batchSize" caption="배치사이즈" format="fixedPoint"></Column>
          <Column dataField="batchUnit" caption="배치단위">
            <Lookup
              dataSource={ConvertToLookUp('CommonCode', 'UNT002')}
              displayExpr="codeKR"
              valueExpr="code"
            ></Lookup>
          </Column>
          <Column dataField="safetyQnt" caption="안전재고기준" format="fixedPoint"></Column>
          <Column dataField="lotSize" caption="로트사이즈" format="fixedPoint"></Column>
          <Column dataField="lotUnit" caption="로트단위">
            <Lookup
              dataSource={ConvertToLookUp('CommonCode', 'UNT018')}
              displayExpr="codeKR"
              valueExpr="code"
            ></Lookup>
          </Column>
          <Column dataField="invType" caption="로트관리여부">
            <Lookup
              dataSource={ConvertToLookUp('YN', '')}
              displayExpr="name"
              valueExpr="value"
            ></Lookup>
          </Column>
          <Column dataField="matProc" caption="원소재공정">
            <Lookup
              dataSource={ConvertToLookUp('CommonCode', 'ITA004')}
              displayExpr="codeKR"
              valueExpr="code"
            ></Lookup>
          </Column>
          <Export fileName={'제품정보관리'} enabled={true} allowExportSelectedData={false} />
        </DataGrid>
        <TablePagination
          component="div"
          count={totalCount}
          page={defaultParam.pageable.page}
          rowsPerPage={defaultParam.pageable.size}
          backIconButtonText={'이전페이지'}
          labelRowsPerPage={'페이지 당 행: '}
          nextIconButtonText={'다음페이지'}
          labelDisplayedRows={({ from, to, count }) => from + ' - ' + to + ' / ' + count}
          onChangePage={(event, newPage) => {
            dispatch(
              masterProductAction.setDefaultParam({
                ...defaultParam,
                pageable: { page: newPage, size: defaultParam.pageable.size }
              })
            )
          }}
          onChangeRowsPerPage={(event) => {
            dispatch(
              masterProductAction.setDefaultParam({
                ...defaultParam,
                pageable: {
                  page: defaultParam.pageable.page,
                  size: parseInt(event.target.value)
                }
              })
            )
          }}
        />
      </Card>
    </div>
  )
}

export default ProductGrid
