export const navigation = [
  {
    text: '대시보드',
    path: '/home',
    icon: 'home'
  },
  {
    text: '기준정보관리',
    icon: 'folder',
    items: [
      {
        text: '제품정보관리',
        path: '/master/product'
      },
      {
        text: '제조공정관리',
        items: [
          {
            text: '제조공정정보',
            path: '/master/manufactureProcess'
          }
        ]
      }
    ]
  },
  {
    text: '구매관리',
    icon: 'folder',
    items: [
      {
        text: '구매발주관리',
        path: '/purchase/purchaseOrder'
      }
    ]
  }
  ];
