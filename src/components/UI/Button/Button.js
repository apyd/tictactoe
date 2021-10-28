import styles from './Button.module.css'

const Button = ({ children, onClick, type, size, disabled }) => {
  const btnStyles = [`${styles.btn}`]
  type && btnStyles.push(`${styles[`btn--${type}`]}`)
  size && btnStyles.push(`${styles[`btn--${size}`]}`)
  return (
    <button
      className={btnStyles.join(' ')}
      size={size}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
