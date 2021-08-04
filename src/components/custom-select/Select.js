import React from "react";
import "./styles.css";

function SelectOptions(props) {
  return (
    <ul className="select-options">
      {props.lis.map((item) => (
        <li value={item}>{item}</li>
      ))}
    </ul>
  );
}

const options = ["jan", "march", "april", "may"];

export default function CustomSelect(props) {
  return (
    <div className="select">
      <select className="select-hidden">
        {props.options
          ? props.options.map((item) => <option value={item}>{item}</option>)
          : null}
      </select>
      <div className="select-styled"></div>
      <SelectOptions lis={options} />
    </div>
  );
}
