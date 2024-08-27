import PropTypes from "prop-types";

function List(props){
  const categories = props.categories;
  const itemList = props.items;
  const listItems = itemList.map(item => <li>{item.name} : &nbsp;
    {item.calories} </li>)
  return (
    <>
      <h3>{categories}</h3>
      <ul>{listItems}</ul>
    </>
  );
}

List.propTypes = {
  categories: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number,
                                          name: PropTypes.string,
                                          calories:PropTypes.number})),
}

List.defaultprops = {
  categories: "Category",
  items: [],
}
export default List;