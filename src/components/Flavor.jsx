const Flavor = (props) => {
  const { flavor } = props;
  return (
    <div className="flavor">
      <h3>{flavor.name}</h3>
      <h4>({flavor.base} Ice Cream with {flavor.topping} on Top)</h4>
      {flavor.hasChocolateChips && <h5>Comes with Chocolate Chips</h5>}
    </div>
  )
}

export default Flavor;
