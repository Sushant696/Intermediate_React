import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import Reducer from './reducer/reducer.jsx'
// import Counter2 from './reducer/counter2.jsx'
import Context from './context_Reducer/context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Reducer/> */}
    {/* <Counter2/> */}
    <Context/>
  </React.StrictMode>,
)
