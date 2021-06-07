import { Card, TablePagination } from "@material-ui/core";
import { DataGrid } from "devextreme-react";
import { Column, Editing, Lookup } from "devextreme-react/data-grid";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { ConvertToLookUp } from "../../../../common/Grid/lookUpUtils";
import { masterManufactureAction, masterManufactureSelector } from "../slice";


const ItemGrid = () => {
    const dispatch = useDispatch();
    const { manufactureList, defaultParam, totalCount } = useSelector(masterManufactureSelector.all);
    const [selectedRowKeys, setSelectedRowKeys] = useState(0);

    useEffect(() => {
        dispatch(masterManufactureAction.load());
    }, [defaultParam])

    useEffect(() => {
        console.log(manufactureList)
    }, [manufactureList])

    const onFocusedRowChanged = (e) => {
        if(e.rowIndex > -1) {
            dispatch(masterManufactureAction.setRouteList(e.row.data.routeList))
            dispatch(masterManufactureAction.setFocusRow(e.row.data))
        }
    }

    const onOptionChanged = (e) => {
        if(e.fullName == 'focusedRowIndex') {
            if(e.value > -1)
                setSelectedRowKeys(e.value);
        }
    }

    return (
        <div style={{ padding: 20, paddingTop: 5 }}>
            <Card>
                <DataGrid
                    dataSource={manufactureList}
                    keyExpr="prdtId"
                    focusedRowIndex={selectedRowKeys}
                    focusedRowEnabled={true}
                    columnAutoWidth={true}
                    rowAlternationEnabled={true}
                    onOptionChanged={onOptionChanged}
                    showColumnLines={true}
                    loadPanel={{
                        showIndicator: true,
                        enabled: true,
                    }}
                    onFocusedRowChanged={onFocusedRowChanged}
                >
                    <Column dataField="itemCode" caption="제품코드" fixed={true}></Column>
                    <Column dataField="itemName" caption="제품명" fixed={true}></Column>
                    <Column dataField="prdtType" caption="제품유형">
                        <Lookup
                            dataSource={ConvertToLookUp("CommonCode", "ITM001")}
                            displayExpr="codeKR"
                            valueExpr="code"
                        ></Lookup>
                    </Column>
                </DataGrid>
                <TablePagination
                    component="div"
                    count={totalCount}
                    page={defaultParam.pageable.page}
                    rowsPerPage={defaultParam.pageable.size}
                    backIconButtonText={"이전페이지"}
                    labelRowsPerPage={"페이지 당 행: "}
                    nextIconButtonText={"다음페이지"}
                    labelDisplayedRows={({ from, to, count }) =>
                        from + " - " + to + " / " + count
                    }
                    onChangePage={(event, newPage) => {
                        dispatch(
                            masterManufactureAction.setDefaultParam({
                                ...defaultParam,
                                pageable: { page: newPage, size: defaultParam.pageable.size },
                            })
                        );
                    }}
                    onChangeRowsPerPage={(event) => {
                        dispatch(
                            masterManufactureAction.setDefaultParam({
                                ...defaultParam,
                                pageable: {
                                    page: defaultParam.pageable.page,
                                    size: parseInt(event.target.value),
                                },
                            })
                        );
                    }}
                />
            </Card>
        </div>
    )
}

export default ItemGrid;