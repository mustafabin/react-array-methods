const Find = (props) => {

  const foundFlavor = props.flavors.find((flavor) => flavor.name.includes("Sorbet"))
    .name;
  return (
    <section>
      <h2>Our Sorbet of the Day is: {foundFlavor}</h2>
    </section>
  )
}

export default Find;
