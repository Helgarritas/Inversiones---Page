import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'

// Components
import MouseTracker from './Components/AnimationMouse/AnimationMouse.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <MouseTracker>
        {(animationMouse) => (
          <App animationMouse={animationMouse}/>
        )}
      </MouseTracker>
    </React.StrictMode>
  </BrowserRouter>
)
