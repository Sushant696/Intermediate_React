import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import Reducer from './reducer/reducer.jsx'
import Counter from './reducer/counter.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Reducer/> */}
    <Counter/>
  </React.StrictMode>,
)
