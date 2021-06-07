import React, { useEffect, useState } from "react";
import { SelectBox } from "devextreme-react/select-box";
import "./SearchPanel.scss";
import { Accordion, Button, DateBox, TextBox } from "devextreme-react";
import ResponsiveBox, {
  Item,
  Location,
  Row,
  Col,
} from "devextreme-react/responsive-box";
import Form, {
  GroupItem,
  SimpleItem,
  ButtonItem,
  Label,
} from "devextreme-react/form";
import { ConvertToLookUp } from "../../common/Grid/lookUpUtils";

const SearchPanel = (props) => {
  const [searchParam, setSearchParam] = useState({});

  useEffect(() => {
    var defaultObj = {}
    
    props.list.forEach((el) => {
      el.defaultValue !== undefined && (
        defaultObj[el.fieldName] = el.defaultValue
      )
      el.defaultValue2 !== undefined && (
        defaultObj[el.fieldName2] = el.defaultValue2
      )
    })

    setSearchParam(defaultObj)
  }, []);

  const selectBoxDisplay = (item) => {
    return item && item.codeKR;
  };

  const changeItem = (item, fieldName) => {
    setSearchParam({
      ...searchParam,
      [fieldName]: item.value,
    });
  };

  const searchBtnClick = () => {
    props.mainSearch(searchParam);
  };

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

  const AutoPanel = (panelList) => {
    return panelList.map((column, index) => (
      <SimpleItem key={index}>
        {column.bindType === "CommonCode" &&
          column.componentType === "lookUp" && (
            <SelectBox
              showTitle={true}
              dataSource={ConvertToLookUp(
                column.bindType,
                column.bindTypePCode
              )}
              displayExpr={selectBoxDisplay}
              valueExpr="code"
              searchEnabled={true}
              value={searchParam[column.fieldName]}
              placeholder={"검색어를 입력하십시오."}
              onValueChanged={(e) => changeItem(e, column.fieldName)}
            ></SelectBox>
          )}
        {column.bindType === "none" && column.componentType === "dateField" && (
          <DateBox
            defaultValue={column.defaultValue}
            value={searchParam[column.fieldName]}
            type="date"
            onValueChanged={(e) => changeItem(e, column.fieldName)}
          />
        )}
        {column.bindType === "none" && column.componentType === "dateBetween" && (
          <div className="dateBetween">
            <DateBox
              defaultValue={column.defaultValue}
              value={searchParam[column.fieldName]}
              type="date"
              width={"50%"}
              onValueChanged={(e) => changeItem(e, column.fieldName)}
            />
            <b className="gubun">~</b>
            <DateBox
              defaultValue={column.defaultValue2}
              value={searchParam[column.fieldName2]}
              type="date"
              width={"50%"}
              onValueChanged={(e) => changeItem(e, column.fieldName2)}
            />
          </div>
        )}
        {column.bindType === "none" && column.componentType === "textField" && (
          <TextBox
            placeholder={"검색어를 입력하십시오."}
            value={searchParam[column.fieldName]}
            showClearButton={true}
            onValueChanged={(e) => changeItem(e, column.fieldName)}
          />
        )}
        <Label text={column.title}></Label>
      </SimpleItem>
    ));
  };

  return (
    <div id="form-main" className="paddings">
      <div className="widget-container ">
        <div id="form">
          <div className="widget-container">
            <Accordion
              collapsible={true}
              multiple={true}
              animationDuration={300}
            >
              <Item>
                <Form
                  id="form"
                  readOnly={false}
                  showColonAfterLabel={true}
                  labelLocation={"top"}
                  colCountByScreen={colCountByScreen}
                  screenByWidth={screenByWidth}
                >
                  {AutoPanel(props.list)}
                </Form>
                <div className="search-btn">
                  <Button
                    // icon="search"
                    width={150}
                    height={40}
                    text="검색"
                    type="success"
                    stylingMode="contained"
                    onClick={searchBtnClick}
                  />
                </div>
              </Item>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPanel;
