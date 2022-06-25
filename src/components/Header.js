const Header = ({title}) => {
  return (
    <header>
        <h1> {title} </h1>
        <p1> Welcome to Ficsit Planner (wip). </p1>
    </header>
  )
}


Header.defaultProps = {
    title: "Ficsit Planner"
}


export default Header