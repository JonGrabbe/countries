import React from "react";

function SelectOptions(props) {
  return (
    <ul className="select-options">
      {props.lis.map((item) => (
        <li className="options" value={item}>
          {item}
        </li>
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
      <div className="select-styled theme-element">{props.title}</div>
      <SelectOptions lis={options} />
    </div>
  );
}
