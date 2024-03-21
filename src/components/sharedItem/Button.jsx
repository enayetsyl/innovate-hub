
const Button = ({children, icon, className}) => {
  return (
    <button className={`py-2 px-3 text-white ${className} flex justify-center items-center gap-2`}>
      <span>{icon && icon}</span><span>{children}</span>
    </button>
  )
}

export default Button