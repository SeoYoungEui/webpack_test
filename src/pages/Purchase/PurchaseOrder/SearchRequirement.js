const data = [
  {
    title: '납기일자',
    componentType: 'dateBetween',
    bindType: 'none',
    bindTypePCode: '',
    fieldName: 'dueStartDate',
    defaultValue : new Date(),
    fieldName2: 'dueEndDate',
    defaultValue2 : new Date()
  },
  {
    title: '발주일자',
    componentType: 'dateBetween',
    bindType: 'none',
    bindTypePCode: '',
    fieldName: 'orderStartDate',
    defaultValue : new Date(),
    fieldName2: 'orderEndDate',
    defaultValue2 : new Date()
  },
  {
    title: "발주번호",
    componentType: 'textField',
    bindType: 'none',
    bindTypePCode: '',
    fieldName: 'poNo'
  },
  {
    title: '발주자',
    componentType: 'lookUp',
    bindType: 'User',
    fieldName: 'orderUser'
  },
  {
    title: '거래처',
    componentType: 'lookUp',
    bindType: 'Company',
    fieldName: 'compId'
  }
]

export default {
  getData() {
    return data;
  }
}