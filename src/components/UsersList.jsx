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
        
        <div className="userlist-container-main">
        { users.length > 0 ?
            <div className="userlist-container">
            <div className="userlist-input">
                <input type="text" placeholder="Buscar usuario" value={filter} onChange={(e) => setFilter(e.target.value)}/>
            </div>

            <table className="userlist-table">

            <thead>
                <tr>
                <th scope="col">NOMBRE</th>
                <th scope="col">APELLIDO</th>
                <th scope="col">TELEFONO</th>
                <th scope="col">EMAIL</th>
                <th><div className="flex-row flex-center"> <h3>DETALLE</h3> </div></th>
                </tr>
            </thead>
            <tbody>
                <User users={users} filter={filter}/>
            </tbody>
            </table>
            
            
            </div>
            :
            <>
            <h1>No hay Usuarios en el momento</h1>
            <h1>Puede crear uno en el simbolo de +</h1>
            </>
        }
        <AddUser isOpen={isOpenAddUser} setIsOpen={setIsOpenAddUser}  setusers={setusers} users={users} />
        </div>
    )
}