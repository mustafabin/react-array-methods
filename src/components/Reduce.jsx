const Reduce = (props) => {
  const chocolateChipTotal = props.flavors.reduce(
    (acc, flavor) => (acc += flavor.hasChocolateChips ? 1 : 0),
    0
  );
  return (
    <section>
      <h2>We have {chocolateChipTotal} flavors with Chocolate Chips.</h2> 
    </section>
  )
}

export default Reduce;
