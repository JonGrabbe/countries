import downArrowDarkTheme from '../../images/arrow-down-dark-theme.svg';
import downArrowLightTheme from '../../images/arrow-down-light-theme.svg';
import ThemeContext from '../../context/theme-context';
import React, {useState} from 'react';


function ListItem(props) {
  // let baseClassName = 'list-item'
  let classVal = props.region === props.value ? ' active' : '';
  return (
    <li className={"list-item"+classVal}>
      <input 
        id={props.value} 
        type="radio" 
        name="select-menu" 
        value={props.value} 
        className="radio"
        onChange={props.handleChange}
      />
      <label className="label" htmlFor={props.value}>{props.value}</label>
    </li>
  );
}

export default function CustomSelect(props) {
  // false means that the menu is closed
  const [menuOpened, setMenuOpened] = useState(false);
  let menuClassName = menuOpened ? 'select-container' : 'select-container closed';


  return (
    <ThemeContext.Consumer>
      {
        themeValue => (
          <div className={menuClassName}>
            <div className="select-title theme-element" onClick={() => setMenuOpened(!menuOpened)} >
              <span class="title">Filter by Region: {props.region}</span>
              <img src={themeValue.theme === 'dark' ? downArrowDarkTheme : downArrowLightTheme} className="arrow" alt="" />
            </div>
            <ul className="select-list-container theme-element">
              {
                props.lis.map(item => (
                  <ListItem value={item} handleChange={props.handleChange} region={props.region} />
                ))
              }
            </ul>
          </div> 
        )
      }
    </ThemeContext.Consumer>
  );
}
