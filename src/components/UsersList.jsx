import { useState } from "react";
import { useEffect } from "react"
import { http } from "../api"
import { AddUser } from "./AddUser";
import { User } from "./User";


export function UsersList() {
    const [users, setusers] = useState([]);
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
        <div className="userlist-header">
            <h3>nombre</h3>
            <h3>apellido</h3>
            <h3>Telefono</h3>
            <h3>Email</h3>
        </div>
            <User users={users}/>
        </div>

        <AddUser isOpen={isOpenAddUser} setIsOpen={setIsOpenAddUser}  />
        </>
    )
}