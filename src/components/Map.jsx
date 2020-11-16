import Flavor from "./Flavor.jsx";

const Map = (props) => {
  return (
    <section>
      <h2>All Flavors</h2>
      <div className="flavors">
        {props.flavors.map((flavor) => (
          <Flavor flavor={flavor} />
        ))}
      </div>
    </section>
  )
}

export default Map;
