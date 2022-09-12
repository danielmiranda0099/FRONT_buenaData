import { useNavigate } from 'react-router-dom';


export function Home() {
    const navigate = useNavigate();

    const handleClick = (url) => {
        navigate(url);
    }

    return(
        <>
            <h1>BIENVENIDO A SU CONTROL DE USUARIOS</h1>
            <button onClick={() => handleClick('/users')}>Empezar</button>
        </>
    )
}