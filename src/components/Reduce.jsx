function Reduce(props) {
  let total = 0;
  props.flavors.reduce((prev, curr, index) => {
    if (curr.hasChocolateChips) {
      total++;
    }
  }, total);

  return (
    <div>
      <h1>{total}</h1>
    </div>
  );
}

export default Reduce;
