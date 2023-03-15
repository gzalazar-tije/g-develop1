import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="url" target="_blank">
          <img src="-" className="logo" alt="-" />
        </a>
        <a href="https://www.bocajuniors.com.ar/" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>𝔼𝟚𝔼 𝕋𝕣𝕒𝕧𝕖𝕝𝕊𝕠𝕝𝕦𝕥𝕚𝕠𝕟𝕤</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Sitio de Testing GitHub - Actions
      </p>
    </div>
  )
}

export default App
