import { useNavigate } from 'react-router-dom';

const BackGround = () => {
    return(
        <svg id="visual" viewBox="0 0 900 600" className='home-background' version="1.1">
            <rect x="0" y="0" width="100%" height="100vh" fill="#0E1F40"></rect>
                <g fill="none" stroke="#A7233A" strokeWidth="3">
                <circle r="102" cx="788" cy="145"></circle><circle r="44" cx="793" cy="476"></circle>
                <circle r="88" cx="378" cy="372"></circle><circle r="84" cx="44" cy="405"></circle>
                <circle r="47" cx="2" cy="25"></circle><circle r="96" cx="497" cy="32"></circle>
                <circle r="92" cx="450" cy="584"></circle><circle r="70" cx="181" cy="197"></circle>
                <circle r="72" cx="277" cy="10"></circle>
                </g>
        </svg>
    )
}

export function Home() {
    const navigate = useNavigate();

    const handleClick = (url) => {
        navigate(url);
    }

    return(
        <div className='home-container'>
            <h1>CRUD de usuario BuenaData</h1>
            <h1>BIENVENIDO</h1>
            <button onClick={() => handleClick('/users')} className="button-primary">Empezar</button>
            <BackGround />
        </div>
    )
}