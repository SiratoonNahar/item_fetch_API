import { useState } from "react";
//eslint-disable-next-line react/prop-types
const DragDropList = ({ items }) => {
  const [list, setList] = useState(items);

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("dragIndex", index);
  };

  const handleDrop = (e, index) => {
    const dragIndex = e.dataTransfer.getData("dragIndex");
    const updatedList = [...list];
    const [removed] = updatedList.splice(dragIndex, 1);
    updatedList.splice(index, 0, removed);
    setList(updatedList);
  };

  return (
    <ul className="drag-drop-list">
      {list.map((item, index) => (
        <li
          key={item.id}
          draggable
          onDragStart={(e) => handleDragStart(e, index)}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => handleDrop(e, index)}
        >
          {item.title}
        </li>
      ))}
    </ul>
  );
};

export default DragDropList;
