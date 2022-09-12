import { useState } from "react";
import { useEffect } from "react"
import { http } from "../api"
import { AddUser } from "./AddUser";
import { User } from "./User";


export function UsersList() {
    const [users, setusers] = useState([]);
    const [filter, setFilter] = useState('');
    const [isOpenAddUser, setIsOpenAddUser] = useState(false);
    const getUsers = async() => {
        const {data} = await http('http://localhost:3001/api/users');
        setusers(data);
    }

    useEffect( () => {
        getUsers();
    }, [])

    return(
        <>
        <div className="userlist-container">
        {
            users.length > 0 ? 
            <>
            <div className="userlist-input">
                <input type="text" placeholder="Buscar usuario" value={filter} onChange={(e) => setFilter(e.target.value)}/>
            </div>

            <div className="userlist-header">
                <h3>nombre</h3>
                <h3>apellido</h3>
                <h3>Telefono</h3>
                <h3>Email</h3>
                <h3>Detalle</h3>
            </div>
            <User users={users} filter={filter}/>
            </>
            :
            <>
            <h1>No hay Usuarios en el momento</h1>
            <h1>Puede crear uno en el simbolo de +</h1>
            </>
        }
        </div>
    
        <AddUser isOpen={isOpenAddUser} setIsOpen={setIsOpenAddUser}  setusers={setusers} users={users} />

        </>
    )
}