const PersonDetail = (props) => {
  const { person, deleteName } = props;
  return (
    <>
      {person.name} {person.number}
      <button onClick={() => deleteName(person)}>delete</button>
    </>
  );
};

export default PersonDetail;
