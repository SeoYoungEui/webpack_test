import { Card } from "@material-ui/core";
import { Form, ResponsiveBox, SelectBox, TextBox } from "devextreme-react";
import { Label, SimpleItem } from "devextreme-react/form";
import { Col, Item, Location, Row } from "devextreme-react/responsive-box";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { ConvertToLookUp } from "../../../../../common/Grid/lookUpUtils";
import { masterManufactureSelector } from "../../slice";

const ManufactureProcessRevDialog = () => {

    const { focusRow } = useSelector(masterManufactureSelector.all);
    
    useEffect(() => {
        console.log(focusRow)
    }, [focusRow])

    const colCountByScreen = {
        sm: 2,
        md: 3,
        lg: 5,
    };

    function screenByWidth(width) {
        if (width < 1660 && width >= 1010) return "md";
        else if (width < 1010) return "sm";
        else return "lg";
    }

    const selectBoxDisplay = (item) => {
        return item && item.codeKR;
    };

    return (
        <div>
            <ResponsiveBox>
                <Row></Row>
                <Row></Row>
                <Col></Col>
                <Item>
                    <Location
                        row={0}
                        col={0}
                    ></Location>
                    <Card>
                        <Form
                            id="detail-info"
                            readOnly={true}
                            showColonAfterLabel={true}
                            labelLocation={"left"}
                            colCountByScreen={colCountByScreen}
                            screenByWidth={screenByWidth}
                        >
                            <SimpleItem>
                                <TextBox
                                    placeholder={"검색어를 입력하십시오."}
                                    value={focusRow.itemCode}
                                />
                                <Label text={"제품코드"}></Label>
                            </SimpleItem>
                            <SimpleItem>
                                <TextBox
                                    placeholder={"검색어를 입력하십시오."}
                                    value={focusRow.itemName}
                                />
                                <Label text={"제품명"}></Label>
                            </SimpleItem>
                            <SimpleItem>
                                <SelectBox
                                    showTitle={true}
                                    dataSource={ConvertToLookUp(
                                        "CommonCode",
                                        "ITM001"
                                    )}
                                    displayExpr={selectBoxDisplay}
                                    valueExpr="code"
                                    searchEnabled={true}
                                    value={focusRow.prdtType}
                                    placeholder={"검색어를 입력하십시오."}
                                ></SelectBox>
                                <Label text={"제품유형"}></Label>
                            </SimpleItem>
                            <SimpleItem>
                                <SelectBox
                                    showTitle={true}
                                    dataSource={ConvertToLookUp(
                                        "CommonCode",
                                        "CTG001"
                                    )}
                                    displayExpr={selectBoxDisplay}
                                    valueExpr="code"
                                    searchEnabled={true}
                                    value={focusRow.prdtCtg}
                                    placeholder={"검색어를 입력하십시오."}
                                ></SelectBox>
                                <Label text={"카테고리"}></Label>
                            </SimpleItem>
                            <SimpleItem>
                                <SelectBox
                                    showTitle={true}
                                    dataSource={ConvertToLookUp(
                                        "CommonCode",
                                        "GRP001"
                                    )}
                                    displayExpr={selectBoxDisplay}
                                    valueExpr="code"
                                    searchEnabled={true}
                                    value={focusRow.prdtGroup}
                                    placeholder={"검색어를 입력하십시오."}
                                ></SelectBox>
                                <Label text={"그룹"}></Label>
                            </SimpleItem>
                            <SimpleItem>
                                <SelectBox
                                    showTitle={true}
                                    dataSource={ConvertToLookUp(
                                        "CommonCode",
                                        "ITA001"
                                    )}
                                    displayExpr={selectBoxDisplay}
                                    valueExpr="code"
                                    searchEnabled={true}
                                    value={focusRow.attMatType}
                                    placeholder={"검색어를 입력하십시오."}
                                ></SelectBox>
                                <Label text={"재질"}></Label>
                            </SimpleItem>
                            <SimpleItem>
                                <SelectBox
                                    showTitle={true}
                                    dataSource={ConvertToLookUp(
                                        "CommonCode",
                                        "ITA002"
                                    )}
                                    displayExpr={selectBoxDisplay}
                                    valueExpr="code"
                                    searchEnabled={true}
                                    value={focusRow.attStdType}
                                    placeholder={"검색어를 입력하십시오."}
                                ></SelectBox>
                                <Label text={"규격"}></Label>
                            </SimpleItem>
                            <SimpleItem>
                                <SelectBox
                                    showTitle={true}
                                    dataSource={ConvertToLookUp(
                                        "CommonCode",
                                        "ITA003"
                                    )}
                                    displayExpr={selectBoxDisplay}
                                    valueExpr="code"
                                    searchEnabled={true}
                                    value={focusRow.attDiaType}
                                    placeholder={"검색어를 입력하십시오."}
                                ></SelectBox>
                                <Label text={"소재경"}></Label>
                            </SimpleItem>
                            <SimpleItem>
                                <SelectBox
                                    showTitle={true}
                                    dataSource={ConvertToLookUp(
                                        "CommonCode",
                                        "SPF001"
                                    )}
                                    displayExpr={selectBoxDisplay}
                                    valueExpr="code"
                                    searchEnabled={true}
                                    value={focusRow.heatSpec}
                                    placeholder={"검색어를 입력하십시오."}
                                ></SelectBox>
                                <Label text={"열처리사양"}></Label>
                            </SimpleItem>
                            <SimpleItem>
                                <SelectBox
                                    showTitle={true}
                                    dataSource={ConvertToLookUp(
                                        "CommonCode",
                                        "SPF002"
                                    )}
                                    displayExpr={selectBoxDisplay}
                                    valueExpr="code"
                                    searchEnabled={true}
                                    value={focusRow.surfaceSpec}
                                    placeholder={"검색어를 입력하십시오."}
                                ></SelectBox>
                                <Label text={"표면처리사양"}></Label>
                            </SimpleItem>
                        </Form>
                    </Card>
                </Item>
                <Item>
                    <Location
                        row={1}
                        col={0}
                    ></Location>
                    <ResponsiveBox>
                        <Row></Row>
                        <Col></Col>
                        <Col></Col>
                        <Item>
                            <Location
                                row={0}
                                col={0}
                            ></Location>
                            <Card>
                                bb
                            </Card>
                        </Item>
                        <Item>
                            <Location
                                row={0}
                                col={1}
                            ></Location>
                            <Card>
                                cc
                            </Card>
                        </Item>
                    </ResponsiveBox>
                </Item>
            </ResponsiveBox>
        </div>
    )
}

export default ManufactureProcessRevDialog;