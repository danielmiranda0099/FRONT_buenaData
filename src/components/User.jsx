import { useNavigate } from "react-router-dom"

export function User({users}) {
    const navigate = useNavigate();
    const handleClick = (id) => {
        navigate(`/user/detail/${id}`);
    }

    return(
        <>
            <div className="userlist-body">
                {
                users.map( (user) => 
                    <>
                    <h3>{user.nombre}</h3>
                    <h3>{user.apellido}</h3>
                    <h3>{user.telefono}</h3>
                    <h3>{user.email}</h3>
                    <button onClick={() => handleClick(user.numeroId)}>Ver mas</button>
                    </>
                )
                }
            </div>
        </>
    )
}

