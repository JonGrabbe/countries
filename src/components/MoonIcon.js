import moonLight from '../images/moon-light.svg';
import moonDark from '../images/moon-dark.svg';

export default function MoonIcon(props) {
    let src;
    if(props.theme === 'dark') {
        src = moonDark;
    } else {
        src = moonLight;
    }
    return (
        <img src={src} className="moon-icon" width="15px" />
    );
}