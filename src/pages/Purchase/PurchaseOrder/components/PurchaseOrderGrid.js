import { Card, TablePagination } from "@material-ui/core";
import { DataGrid, NumberBox } from "devextreme-react";
import {
  Column,
  Editing,
  Grouping,
  GroupPanel,
  Lookup,
  SearchPanel,
} from "devextreme-react/data-grid";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ConvertToLookUp } from "../../../../common/Grid/lookUpUtils";
import { purchaseOrderAction, purchaseOrderSelector } from "../slice";

const PurchaseOrderGrid = () => {
  const dispatch = useDispatch();
  const {
    isLoading,
    success,
    msg,
    purchaseOrderList,
    defaultParam,
    totalCount,
  } = useSelector(purchaseOrderSelector.all);

  const add = () => {
    //등록 & 수정 다이얼로그
  }

  return (
    <div style={{ padding: 20, paddingTop: 5 }}>
      <Card>
        <DataGrid dataSource={purchaseOrderList} columnAutoWidth={true} height={450}>
          <Column
            caption="발주번호"
            dataField="poNo"
            alignment="center"
            minWidth="130"
          ></Column>
          <Column
            caption="거래처"
            dataField="compName"
            alignment="center"
            minWidth="130"
          ></Column>
          <Column
            caption="발주일자"
            dataField="orderDate"
            dataType="date"
            minWidth="130"
            alignment="center"
          ></Column>
          <Column
            caption="납기일자"
            dataField="dueDate"
            dataType="date"
            minWidth="130"
            alignment="center"
          ></Column>
          <Column
            caption="입고위치"
            dataField="incomeLoc"
            alignment="center"
            hidingPriority={3}
          ></Column>
          <Column
            caption="발주자재"
            dataField="itemCode"
            alignment="center"
            minWidth="160"
          ></Column>
          <Column
            caption="자재명"
            dataField="itemName"
            alignment="center"
            minWidth="160"
          ></Column>
          <Column
            caption="발주량"
            dataField="orderQnt"
            format="#,##0.##"
            minWidth="100"
            alignment="center"
          ></Column>
          <Column
            caption="발주단위"
            dataField="orderUnit"
            alignment="center"
            minWidth="80"
          >
            <Lookup
              dataSource={ConvertToLookUp("CommonCode", "UNT018")}
              displayExpr="codeKR"
              valueExpr="code"
            ></Lookup>
          </Column>
          <Column
            caption="기준단가"
            dataField="priceStd"
            format="#,##0.##"
            alignment="center"
            hidingPriority={1}
          ></Column>
          <Column
            caption="발주단가"
            dataField="priceLog"
            format="#,##0.##"
            alignment="center"
            minWidth="100"
          ></Column>
          <Column
            caption="실거래액"
            dataField="amount"
            format="#,##0.##"
            alignment="center"
            minWidth="110"
          ></Column>
          <Column
            caption="화폐단위"
            dataField="moneyUnit"
            alignment="center"
            minWidth="80"
          >
            <Lookup
              dataSource={ConvertToLookUp("CommonCode", "UNT019")}
              displayExpr="codeKR"
              valueExpr="code"
            ></Lookup>
          </Column>
          <Column
            caption="발주자"
            dataField="orderUser"
            alignment="center"
            minWidth="130"
          >
            <Lookup
              dataSource={ConvertToLookUp("User", null)}
              displayExpr="userName"
              valueExpr="userNo"
            ></Lookup>
          </Column>
          <Column
            caption="구매청구번호"
            dataField="reqNo"
            alignment="center"
            hidingPriority={2}
          ></Column>
          <Column
            caption="입고완료"
            dataField="incomeYN"
            alignment="center"
            minWidth="80"
          >
            <Lookup
              dataSource={ConvertToLookUp("YN", null)}
              displayExpr="name"
              valueExpr="value"
            ></Lookup>
          </Column>
          <Column
            caption="비고"
            dataField="description"
            hidingPriority={0}
          ></Column>
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
              purchaseOrderAction.setDefaultParam({
                ...defaultParam,
                pageable: { page: newPage, size: defaultParam.pageable.size }
              })
            )
          }}
          onChangeRowsPerPage={(event) => {
            dispatch(
              purchaseOrderAction.setDefaultParam({
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
  );
};

export default PurchaseOrderGrid;
