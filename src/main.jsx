import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './redux/usersSlice'; // Import your users slice
import './index.css'

const store = configureStore({
  reducer: {
    users: usersReducer,
    // Add other reducers if needed
  },
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>

  </React.StrictMode>,
)
