import React from 'react'
import Home from './Components/Pages/Home'
import { Provider } from 'react-redux'
import generateStore from './redux/Store/store'

const App = () => {
  const myStore = generateStore();
  return (
    <Provider store={myStore}>
      <Home />
    </Provider>
  )
}

export default App;
