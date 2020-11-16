const Nav = (props) => {
  return (
    <nav>
      <button onClick={() => props.setCurrent('map')}>Map</button>
      <button onClick={() => props.setCurrent('filter')}>Filter</button>
      <button onClick={() => props.setCurrent('find')}>Find</button>
      <button onClick={() => props.setCurrent('reduce')}>Reduce</button>
      <button onClick={() => props.setCurrent('some')}>Some</button>
    </nav>
  )
}

export default Nav;
