import { useNavigate } from "react-router-dom";

export function View404() {
    const navigate = useNavigate();

    return(
        <div className="container-error">
        <h1>404</h1>
        <p className="error-message">Oops!</p>
        <button className="button-primary" onClick={() => navigate('/')}>Regresar a Inicio</button>
        </div>
    )
}