import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import App from './App.jsx'
import UserContext from './components/UserContext/UserContext.jsx'
import { store } from './components/Redux/Store.js'
createRoot(document.getElementById('root')).render(
   <Provider store={store}>

  <UserContext>
 
    <App />
 
  </UserContext>
  </Provider>
)
