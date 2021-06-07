const data = [
  {
    title: "제품코드",
    componentType: 'textField',
    bindType: 'none',
    bindTypePCode: '',
    fieldName: 'itemCode'
  },
  {
    title: "제품명",
    componentType: 'textField',
    bindType: 'none',
    bindTypePCode: '',
    fieldName: 'itemName'
  },
  {
    title: '제품유형',
    componentType: 'lookUp',
    bindType: 'CommonCode',
    bindTypePCode: 'ITM001',
    fieldName: 'prdtType'
  },
  {
    title: '제품카테고리',
    componentType: 'lookUp',
    bindType: 'CommonCode',
    bindTypePCode: 'CTG001',
    fieldName: 'prdtCtg'
  },
  {
    title: '제품그룹',
    componentType: 'lookUp',
    bindType: 'CommonCode',
    bindTypePCode: 'GRP001',
    fieldName: 'prdtGroup'
  },
  {
    title: '재질',
    componentType: 'lookUp',
    bindType: 'CommonCode',
    bindTypePCode: 'ITA001',
    fieldName: 'attMatType'
  },
  {
    title: '규격',
    componentType: 'lookUp',
    bindType: 'CommonCode',
    bindTypePCode: 'ITA002',
    fieldName: 'attStdType'
  },
  {
    title: '소재경',
    componentType: 'lookUp',
    bindType: 'CommonCode',
    bindTypePCode: 'ITA003',
    fieldName: 'attDiaType'
  },
  {
    title: '열처리사양',
    componentType: 'lookUp',
    bindType: 'CommonCode',
    bindTypePCode: 'SPF001',
    fieldName: 'heatSpec'
  },
  {
    title: '표면처리사양',
    componentType: 'lookUp',
    bindType: 'CommonCode',
    bindTypePCode: 'SPF002',
    fieldName: 'surfaceSpec'
  },
  // {
  //   title: '코팅사양',
  //   componentType: 'lookUp',
  //   bindType: 'CommonCode',
  //   bindTypePCode: 'SPF003',
  //   fieldName: 'coatingSpec'
  // },
];

export default {
  getData() {
    return data;
  }
}