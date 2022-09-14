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
            <div className="userlist-body row-5" style={{backgroundColor:index%2!== 0? '#678BC1': '#0E1F40'}} key={user.numeroId}>
            <div className="userlist-body-item flex-column flex-center"> <h4>{user.nombre}</h4> </div>
            <div className="userlist-body-item flex-column flex-center"> <h4>{user.apellido}</h4> </div>
            <div className="userlist-body-item flex-column flex-center"> <h4>{user.telefono}</h4> </div>
            <div className="userlist-body-item flex-column flex-center"> <h4>{user.email}</h4> </div>
            <div className="userlist-body-item flex-row flex-center"> <button onClick={() => handleClick(user.numeroId)} className='button-primary'>Ver mas</button> </div>
            </div>
        )
        }
        </>
    )
}

