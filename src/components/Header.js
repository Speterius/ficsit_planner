const Header = ({title}) => {
  return (
    <header>
        <h1> {title} </h1>
        <h3> Welcome to Ficsit Planner (wip). 
          Edit your blueprint to design and optimize your factories.</h3>
    </header>
  )
}


Header.defaultProps = {
    title: "Ficsit Planner"
}


export default Header