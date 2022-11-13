const List = ({list}) => list.map( (item, index) => <li key={index}>{item}</li>)

export default List