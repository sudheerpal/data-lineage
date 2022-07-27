import "./styles.css";
import data from "./data";
import React from "react";
import Table from "./table";

export default function App() {
  const [raw, selectRaw] = React.useState({});
  const [map, setMap] = React.useState({});
  // const [standardCollection, setStandardCollectionselectRaw] = React.useState(
  //   []
  // );

  // const [presenatationCollection, setPresenatationCollection] = React.useState(
  //   []
  // );

  const clickHandler = (item) => {
    console.log("item:", item);
    let obj = {};
    selectRaw(item);
    obj[item.id] = true;
    item.linkage?.forEach((id) => {
      obj[id] = true;
    });

    setMap(obj);
    console.log(obj);
  };

  return (
    <>
      <div className="App">
        {data.map((table) => {
          return (
            <Table
              items={table.items}
              title={table.name}
              clickHandler={clickHandler}
              map={map}
            />
          );
        })}
      </div>

      {raw.value && (
        <div className="summary">
          <h2>Summary</h2>
          <h4>Name: {raw.value}</h4>
        </div>
      )}
    </>
  );
}
