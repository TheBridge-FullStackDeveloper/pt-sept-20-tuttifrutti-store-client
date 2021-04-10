export default function Button(props) {
    const { onClick, text, className, type } = props
    return (
      <button className = {className} onClick={onClick} type={type} >{text}</button>
    )
  }