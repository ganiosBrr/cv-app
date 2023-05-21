import "./error.scss";

const Error = ({message, className}) => {
    return(
        <div className={className} data-testid="error-component">
            <p>{message}</p>
        </div>
    );
}

export default Error;