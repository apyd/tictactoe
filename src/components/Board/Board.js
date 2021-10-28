import Button from '../UI/Button/Button'
import styles from './Board.module.css'

const Board = () => {
  return (
    <div className={styles.board}>
      <Button type="secondary" id="00"></Button>
      <Button type="secondary" id="01"></Button>
      <Button type="secondary" id="02"></Button>
      <Button type="secondary" id="10"></Button>
      <Button type="secondary" id="11"></Button>
      <Button type="secondary" id="12"></Button>
      <Button type="secondary" id="20"></Button>
      <Button type="secondary" id="21"></Button>
      <Button type="secondary" id="22"></Button>
    </div>
  )
}

export default Board
