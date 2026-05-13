const Button = ({ children, className = "", }) => {
  return (
    <button className={`px-6 py-3 rounded-full bg-black text-white font-medium transition-all duration-300
        hover:opacity-90
        hover:scale-[1.02]
        cursor-pointer
        ${className}`}>
      {children}
    </button>

  )
}

export default Button