import Flavor from "./Flavor.jsx";

function Find(props) {
  const { flavors } = props;
  let sorbet = flavors.find((flavor) => {
    if (flavor.name.includes("Sorbet")) {
      return flavor;
    }
  });
  return (
    <div>
      <h2>First Sorbet</h2>
      <div className="flavors">
        <Flavor flavor={sorbet} />
      </div>
    </div>
  );
}

export default Find;
