import { Link } from "react-router-dom";

export default function CountryCardPage(props) {
    return (
        <div className="country-card-page">
            <Link to="/" className="back-button">
                Back
            </Link>
            <h2>country card page</h2>
            <p>name: {props.country.name}</p>
        </div>
    );
}