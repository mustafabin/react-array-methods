import Flavor from "./Flavor.jsx";

const Filter = (props) => {
  const chocolateChipFlavors = props.flavors.filter(
    (flavor) => flavor.hasChocolateChips
  );
  return (
    <section>
      <h2>Flavors with Chocolate Chips</h2>
      <div className="flavors">
        {chocolateChipFlavors.map((flavor) => (
          <Flavor flavor={flavor} />
        ))}
      </div>
    </section>
  )
}

export default Filter;
