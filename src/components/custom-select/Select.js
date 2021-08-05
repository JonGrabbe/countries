import downArrowDarkTheme from '../../images/arrow-down-dark-theme.svg';
import downArrowLightTheme from '../../images/arrow-down-light-theme.svg';
import ThemeContext from '../../context/theme-context';

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
    <ThemeContext.Consumer>
      {
        themeValue => (
          <div className="select-container closed">
            <div className="select-title theme-element">
              <span class="title">Filter by Region</span>
              <img src={themeValue.theme === 'dark' ? downArrowDarkTheme : downArrowLightTheme} className="arrow" alt="" />
            </div>
            <ul className="select-list-container theme-element">
              {
                props.lis.map(item => (
                  <ListItem value={item} handleChange={props.handleChange} />
                ))
              }
            </ul>
          </div> 
        )
      }
    </ThemeContext.Consumer>
  );
}