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
        userFiltrados.map( (user) =>
            <tr>
                <td data-label="NOMBRE">{user.nombre}</td>
                <td data-label="APELLIDO">{user.apellido}</td>
                <td data-label="TELEFONO">{user.telefono}</td>
                <td data-label="EMAIL">{user.email}</td>
                <td className="flex flex-center-center"><button onClick={() => handleClick(user.numeroId)} className='button-primary'>Ver mas</button></td>
            </tr>
    ))
}

