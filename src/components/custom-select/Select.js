import downArrowDarkTheme from '../../images/arrow-down-dark-theme.svg';
import downArrowLightTheme from '../../images/arrow-down-light-theme.svg';

function ListItem(props) {
  return (
    <li className="list-item">
      <input 
        id={props.value} 
        type="radio" 
        name="select-menu" 
        value={props.value} 
        className="radio"
        onChange={props.handleChange}
      />
      <label htmlFor={props.value}>{props.value}</label>
    </li>
  );
}

export default function CustomSelect(props) {
  return (
    <div className="select-container theme-element">
      <div className="select-title">
        <span class="title">Filter by Region</span>
        <img src={downArrowLightTheme} className="arrow" alt="" />
      </div>
      <ul className="select-list-container">
        {
          props.lis.map(item => (
            <ListItem value={item} handleChange={props.handleChange} />
          ))
        }
      </ul>
    </div>
  );
}