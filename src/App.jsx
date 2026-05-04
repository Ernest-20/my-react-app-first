import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <header className="App-header">
        <img src={heroImg} className="hero" alt="Hero" />
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <nav>
          <a href="https://react.dev/learn" target="_blank">Learn React</a>
          <a href="https://react.dev/learn" target="_blank">Documentation</a>
          <a href="https://react.dev/learn" target="_blank">Examples</a>
          <a href="https://react.dev/learn" target="_blank">Deploy</a>
        </nav>
      </header>
      <main>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </main>
      <footer>
        <a
          href="https://react.dev/learn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </footer>
    </div>
  )

}

export default App
