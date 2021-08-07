export default function ErrorMsg(props) {
    return (
        <div className="error-message-container content-width-wrapper">
            <p>
                {props.errorMessage}
            </p>
        </div>
    );
}