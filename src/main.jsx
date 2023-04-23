import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { Container } from './Components/SharedLayout/SharedLayout.styled.js'
import './index.css'
import { store } from './redux/store.js'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/tweets-test-react/">
        <Container>
          <App />
        </Container>
      </BrowserRouter>
    </Provider>

  </React.StrictMode>,
);
