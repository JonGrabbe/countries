function ListItem(props) {
  return (
    <li className="list-item">
      <input id={props.value} type="radio" name="select-menu" value={props.value} className="radio" />
      <label htmlFor={props.value}>{props.value}</label>
    </li>
  );
}

function Radio(props) {
  return (
    <input type="radio" value={props.value} className="radio" name="select-menu" id={props.value} />
  )
}

export default function CustomSelect(props) {
  return (
    <div className="select-container">
      <div className="select-title">
        {props.title}
      </div>
      <ul className="select-list-container">
       <input 
        type="radio" 
        value="Africa" 
        name="select-menu" 
        id="Africa" 
        onChange={(val) => console.log(val.currentTarget.value)} 
       />
       <label htmlFor="Africa" tabIndex="0"  >
         Africa
       </label>
       <input type="radio" value="Americas" name="select-menu" id="Americas" onChange={(val) => console.log(val.currentTarget.value)} />
       <label htmlFor="Americas">
         Americas
       </label>
       <input type="radio" value="Europe" name="select-menu" id="Europe" onChange={(val) => console.log(val.currentTarget.value)} />
       <label htmlFor="Europe">
         Europe
       </label>
      </ul>
    </div>
  );
}