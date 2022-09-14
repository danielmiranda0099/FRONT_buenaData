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

            <div className="userlist-header row-5">
                <div> <h3>NOMBRE</h3> </div>
                <div> <h3>APELLIDO</h3> </div>
                <div> <h3>TELEFONO</h3> </div>
                <div> <h3>EMAIL</h3> </div>
                <div className="flex-row flex-center"> <h3>DETALLE</h3> </div>
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