import {
  getItemPool,
  getProductPool,
  getMaterialPool,
  getToolPool,
  getPartPool,
  getProcessPool,
  getUserPool,
  getCompanyPool,
} from "../../../api/pool";

const BindItemNode = () => {
  getItemPool().then((response) => {
    localStorage.setItem("ItemPool", JSON.stringify(response));
  });
};

const BindProductNode = () => {
  getProductPool().then((response) => {
    localStorage.setItem("ProductPool", JSON.stringify(response));
  });
};

const BindMaterialNode = () => {
  getMaterialPool().then((response) => {
    localStorage.setItem("MaterialPool", JSON.stringify(response));
  });
};

const BindToolNode = () => {
  getToolPool().then((response) => {
    localStorage.setItem("ToolPool", JSON.stringify(response));
  });
};

const BindPartNode = () => {
  getPartPool().then((response) => {
    localStorage.setItem("PartPool", JSON.stringify(response));
  });
};

const BindProcessNode = () => {
  getProcessPool().then((response) => {
    localStorage.setItem("ProcessPool", JSON.stringify(response));
  });
};

const BindUserNode = () => {
  getUserPool().then((response) => {
    localStorage.setItem("UserPool", JSON.stringify(response));
  });
};

const BindCompanyNode = () => {
  getCompanyPool().then((response) => {
    localStorage.setItem("CompanyPool", JSON.stringify(response));
  });
};

export {
  BindItemNode,
  BindProductNode,
  BindMaterialNode,
  BindToolNode,
  BindPartNode,
  BindProcessNode,
  BindUserNode,
  BindCompanyNode,
};
