
type btn = {
    btnText: string,
    className: string
}

const Button = ({btnText, className}: btn) => {
  return (
    <div>
        <button className={className}>{btnText}</button>
    </div>
  )
}

export default Button