import { Link } from "react-router-dom";
import leftArrowLight from '../images/left-arrow-light.svg';

export default function CountryCardPage(props) {
    return (
        <div className="country-card-page">
            <Link to="/" className="back-button">
                <img src={leftArrowLight} className="back-arrow" />
                Back
            </Link>
            <h2>country card page</h2>
            <p>name: {props.country.name}</p>
        </div>
    );
}