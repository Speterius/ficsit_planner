const Header = ({title}) => {
  return (
    <header>
        <h1> {title} </h1>
    </header>
  )
}


Header.defaultProps = {
    title: "Ficsit Planner"
}


export default Header