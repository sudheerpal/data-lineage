import React from "react";

function Table({ items, title, clickHandler, map }) {
  console.log();
  return (
    <div className="layer">
      <h3>{title}</h3>
      {items.map((item) => (
        <div className="layer-item" key={item.id}>
          <button
            className={map[item.id] ? "active btn" : "btn"}
            onClick={() => clickHandler(item)}
          >
            {item.value}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Table;
