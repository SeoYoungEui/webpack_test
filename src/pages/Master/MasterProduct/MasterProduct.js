import { DataGrid } from "devextreme-react";
import { Column, Editing, Lookup } from "devextreme-react/data-grid";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ConvertToLookUp } from "../../../common/Grid/lookUpUtils";
import SearchPanel from "../../../components/SearchPanel/SearchPanel";
import ProductGrid from "./components/ProductGrid";
import SearchRequirement from "./SearchRequirement";
import { masterProductAction, masterProductSelector } from "./slice";

const MasterProduct = () => {
  const dispatch = useDispatch();

  const { defaultParam } = useSelector(masterProductSelector.all);

  useEffect(() => {
    dispatch(masterProductAction.load());
  }, [defaultParam]);

  const mainSearch = (searchParam) => {
    dispatch(
      masterProductAction.setDefaultParam({
        ...defaultParam,
        searchParam: searchParam,
      })
    );
  };

  return (
    <div>
      <SearchPanel
        mainSearch={mainSearch}
        list={SearchRequirement.getData()}
      ></SearchPanel>
      <ProductGrid></ProductGrid>
    </div>
  );
};

export default MasterProduct;
