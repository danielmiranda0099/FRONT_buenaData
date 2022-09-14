import { useState } from "react";
import { http } from "../api";

const userDefault = {
    nombre: '',
    apellido: '',
    numeroId: '',
    telefono: '',
    email: '',
    image: '',
    fechaNacimiento: new Date().toLocaleDateString('en-CA')
}

export function FormularioUser({dataUser=userDefault, type, setState, users, setIsOpen}) {
    const [newUser, setNewuser] = useState(dataUser);
    const disabledButton = !newUser.nombre.length > 0 && 
                        !newUser.apellido.length > 0 && 
                        !newUser.email.length > 0;

    const handleNewUser = async () => {
        const response = await http('http://localhost:3001/api/users', 'post', newUser);
        const {data:{newUser:resNewUser}} = response;
        setState([...users,resNewUser]);
        setIsOpen(false);
    }

    const handleAtualizar = async () => {
        const response = await http(`http://localhost:3001/api/users/${newUser.numeroId}`, 'patch', newUser);
        const {data:{user}} = response;
        setState(user);
        setIsOpen(false);
    }

    const evento = {
        new: handleNewUser,
        patch: handleAtualizar
    }

    return(
        <div className="add-user-container">
            <div className="add-user">
            <label>Nombre:
            <input 
                type='text' 
                placeholder="Nombre" 
                value={newUser.nombre}
                onChange={(e) =>{
                    setNewuser({...newUser, nombre: e.target.value})}
                }
            />
            </label>
            <label>Apellido:
            <input 
                type='text' 
                placeholder="Apellido" 
                value={newUser.apellido}
                onChange={(e) =>{
                    setNewuser({...newUser, apellido: e.target.value})}
                }
            />
            </label>
            <label>Numero de ID:
            <input 
                type='number' 
                placeholder="Numero de ID" 
                value={newUser.numeroId}
                onChange={(e) =>{
                    setNewuser({...newUser, numeroId: e.target.value})}
                }
            />
            </label>
            <label>Telefono:
            <input 
                type='number' 
                placeholder="Telefono" 
                value={newUser.telefono}
                onChange={(e) =>{
                    setNewuser({...newUser, telefono: e.target.value})}
                }
            />
            </label>
            <label>Email:
            <input 
                type='email' 
                placeholder="Email" 
                value={newUser.email}
                onChange={(e) =>{
                    setNewuser({...newUser, email: e.target.value})}
                }
            />
            </label>
            <label>Imagen URL:
            <input 
                type='text' 
                placeholder="Imagen URL" 
                value={newUser.image}
                onChange={(e) =>{
                    setNewuser({...newUser, image: e.target.value})}
                }
            />
            </label>
            <label>Fecha de Nacimiento:
            <input 
                type='date' 
                value={ new Date(newUser.fechaNacimiento).toLocaleDateString('en-CA')}
                onChange={(e) =>{
                    setNewuser({...newUser, fechaNacimiento: e.target.value})}
                }
            />
            </label>

            <div className="add-user-button">
                <button disabled={disabledButton} onClick={evento[type.event]}>{type.descripcion}</button>
            </div>
            </div>
        </div>
    ) 
}