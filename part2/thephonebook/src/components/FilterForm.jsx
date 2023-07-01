const FilterForm = (props) => {
  const { handleInputChange } = props;
  return (
    <div>
      filter shown with <input onChange={handleInputChange} />
    </div>
  );
};

export default FilterForm;
