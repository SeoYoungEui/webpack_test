import {
  getUserCodePool,
  getMasterStopCodeList,
  getMasterBadCodePool,
  getMasterFailCodePool,
} from "../../../api/pool";
import * as _ from "lodash";
const BindCodeNode = () => {
  // if(localStorage.getItem('CodePool') == null || localStorage.getItem('CodePool').length <= 0) {
  getUserCodePool().then((response) => {
    localStorage.setItem(
      "CodePool",
      JSON.stringify(_.groupBy(response, "pCode"))
    );
  });
  // }
};
const BindStopCodeNode = () => {
  getMasterStopCodeList().then((response) => {
    localStorage.setItem("StopCodePool", JSON.stringify(response));
  });
};
const BindBadCodeNode = () => {
  getMasterBadCodePool().then((response) => {
    localStorage.setItem("BadCodePool", JSON.stringify(response));
  });
};
const BindFailCodeNode = () => {
  getMasterFailCodePool().then((response) => {
    localStorage.setItem("FailCodePool", JSON.stringify(response));
  });
};

export { BindCodeNode, BindStopCodeNode, BindBadCodeNode, BindFailCodeNode };
