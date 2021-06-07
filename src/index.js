import './polyfills'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import {
  BindCodeNode,
  BindStopCodeNode,
  BindBadCodeNode,
  BindFailCodeNode
} from './common/Pool/CodePool/CodePool'

import {
  BindItemNode,
  BindProductNode,
  BindMaterialNode,
  BindToolNode,
  BindPartNode,
  BindProcessNode,
  BindUserNode,
  BindCompanyNode
} from './common/Pool/MasterPool/MasterPool'

BindCodeNode()
BindStopCodeNode()
BindBadCodeNode()
BindFailCodeNode()
BindItemNode()
BindProductNode()
BindMaterialNode()
BindToolNode()
BindPartNode()
BindProcessNode()
BindUserNode()
BindCompanyNode()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
