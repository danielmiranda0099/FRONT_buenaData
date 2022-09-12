import { useState } from "react";
import { useEffect } from "react";
import { useParams, useNavigate} from "react-router-dom";
import { http } from "../api";
import { FormularioUser } from "./FormularioUser";
import { Modal } from "./Modal";

export function DetailUser({}) {
    const [user, setUser] = useState({})
    const [isOpenDetailUser, setIsOpenDetailUser] = useState(false);
    const {id} = useParams();

    const navigate = useNavigate();

    const type = {
        descripcion: 'Actualizar',
        event: 'patch'
    }

    const handleEliminar = async() => {
        const response = await http(`http://localhost:3001/api/users`, 'delete', {numeroId: id});
        console.log('*** delete user ***',response);
        navigate('/users');
    }

    const getUser = async() => {
        const response = await http(`http://localhost:3001/api/users/${id}`, 'get');
        const {data} = response;
        setUser(data);
        console.log(data);
    }

    useEffect( () => {
        getUser();
    }, [])

    return(
    <div className="detail-user-container">
        <div className="detail-user-controlls-container">
            <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" />
            <div className="detail-user-controlls">
                <button onClick={handleEliminar}>Eliminar</button>
                <button onClick={() => setIsOpenDetailUser(true)}>Actualizar</button>
            </div>
        </div>

        <div className="detail-user-information">
            <h1>{user.nombre}</h1>
            <h1>{user.apellido}</h1>
            <h1>{user.email}</h1>
            <h1>{user.telefono}</h1>
            <h1>{new Date(user.fechaNacimiento).toLocaleDateString()}</h1>
        </div>

        <Modal isOpen={isOpenDetailUser} setIsOpen={setIsOpenDetailUser}>
            <FormularioUser dataUser={user} type={type} />
        </Modal>
    </div>
    )
}