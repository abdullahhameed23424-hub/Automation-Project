import { StrictMode } from 'react' // StrictMode: To detect error and warning that maybe happen while the developing mode
import { createRoot } from 'react-dom/client' // createRoot: Create an application launch point within the page
// (createRoot = runApp())
import './index.css'
import App from './App.jsx' // Getting the `App` component (App = MyApp())

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
