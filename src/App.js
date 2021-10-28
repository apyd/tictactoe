import Board from './components/Board/Board'
import Button from './components/UI/Button/Button'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.app}>
      <header>
        <h1>
          Tic <span>Tac</span> Toe
        </h1>
        <div className={styles.textDivider}></div>
        <h2>Player X, it's your turn!</h2>
      </header>
      <Board />
      <Button type="primary" size="small">
        Restart
      </Button>
    </div>
  )
}

export default App
