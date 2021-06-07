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
    title: '날짜 Between',
    componentType: 'dateBetween',
    bindType: 'none',
    bindTypePCode: '',
    fieldName: 'startDate',
    defaultValue : new Date(),
    fieldName2: 'endDate',
    defaultValue2 : new Date()
  },
  {
    title: '날짜 DateField',
    componentType: 'dateField',
    bindType: 'none',
    bindTypePCode: '',
    fieldName: 'dateFieldTest',
    defaultValue : new Date()
  }
];

export default {
  getData() {
    return data;
  }
}