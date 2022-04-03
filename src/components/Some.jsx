function Some(props) {
  const { flavors } = props;
  let answer;
  flavors.some((flavor) => flavor.hasChocolateChips)
    ? (answer = "yes")
    : (answer = "no");
  return (
    <div>
      <h2>Are there flavors with chocolate chips?</h2>
      <h2>{answer}</h2>
    </div>
  );
}

export default Some;
