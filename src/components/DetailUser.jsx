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
        navigate('/users');
    }

    const getUser = async() => {
        const response = await http(`http://localhost:3001/api/users/${id}`, 'get');
        const {data} = response;
        setUser(data);
    }

    useEffect( () => {
        getUser();
    }, [])

    return(
    <div className="detail-user-container">
        <div className="detail-user-banner"></div>

        <div className="detail-user-controlls-container">
            <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" />
            <div className="detail-user-controlls">
                <button onClick={handleEliminar} className='button-controll'>Eliminar</button>
                <button onClick={() => setIsOpenDetailUser(true)} className='button-controll'>Actualizar</button>
            </div>
        </div>

        <div className="detail-user-information">
            <div className="detail-user-information-item"> <h1>Nombre: </h1> <h2>{user.nombre}</h2> </div> 
            <div className="detail-user-information-item"> <h1>Apellido: </h1> <h2>{user.apellido}</h2> </div> 
            <div className="detail-user-information-item"> <h1>Email: </h1> <h2>{user.email}</h2> </div> 
            <div className="detail-user-information-item"> <h1>Telefono: </h1> <h2>{user.telefono}</h2> </div> 
            <div className="detail-user-information-item"> <h1>Fecha Nacimineto: </h1> <h2>{new Date(user.fechaNacimiento).toLocaleDateString()}</h2> </div> 
        </div>

        <Modal isOpen={isOpenDetailUser} setIsOpen={setIsOpenDetailUser}>
            <FormularioUser dataUser={user} type={type} setIsOpen={setIsOpenDetailUser} setState={setUser}/>
        </Modal>
    </div>
    )
}