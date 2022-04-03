import Flavor from "./Flavor.jsx";

function Filter(props) {
  const { flavors } = props;
  let filtered = flavors.filter((flavor) => flavor.hasChocolateChips);
  return (
    <div>
      <h1>all Chocolate chips</h1>
      <div className="flavors">
        {filtered.map((flavor) => (
          <Flavor flavor={flavor} />
        ))}
      </div>
    </div>
  );
}

export default Filter;
