
const Button = ({children, icon, className, onClick}) => {
  return (
    <button className={` ${className}`}
    onClick={onClick}
    >
      <span>{icon && icon}</span><span>{children}</span>
    </button>
  )
}

export default Button