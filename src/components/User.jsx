import { useNavigate } from "react-router-dom"

export function User({users, filter}) {
    const navigate = useNavigate();
    const handleClick = (id) => {
        navigate(`/user/detail/${id}`);
    }
    const userFiltrados = users.filter((user) => 
        user.nombre.toLowerCase().includes(filter.toLowerCase()) ||
        user.apellido.toLowerCase().includes(filter.toLowerCase()) ||
        user.telefono.toLowerCase().includes(filter.toLowerCase())
    );

    return(
        <>
        {
        userFiltrados.map( (user, index) => 
            <div className="userlist-body-item" style={{backgroundColor:index%2!== 0? '#678BC1': '#0E1F40'}} key={user.numeroId}>
            <h3>{user.nombre}</h3>
            <h3>{user.apellido}</h3>
            <h3>{user.telefono}</h3>
            <h3>{user.email}</h3>
            <button onClick={() => handleClick(user.numeroId)} className='button-primary'>Ver mas</button>
            </div>
        )
        }
        </>
    )
}

