const Some = (props) => {
  const notChocolateChips = props.flavors.some((flavor) => !flavor.hasChocolateChips)
    ? "Yes"
    : "No";

  return (
    <section>
      <h2>Do We Have Flavors without Chocolate Chips? {notChocolateChips}</h2>
    </section>
  )
}

export default Some;
