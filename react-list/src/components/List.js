function List() {
  const items = [
    { id: "a", value: "position" },
    { id: "b", value: "display" },
    { id: "c", value: "border" },
    { id: "d", value: "padding" },
    { id: "e", value: "margin" },
    { id: "f", value: "overflow" },
    { id: "g", value: "background" },
    { id: "h", value: "font" },
    { id: "i", value: "text" },
    { id: "j", value: "transform" },
  ];

  const listItems = items.map((item) => (
    <li key={item.id}>
      <input type="checkbox" />
      <label>{item.value}</label>
    </li>
  ));

  return <ul>{listItems}</ul>;
}

export default List;
