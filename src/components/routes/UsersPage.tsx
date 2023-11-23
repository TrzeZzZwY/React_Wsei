import { FC, useState, useEffect } from 'react';
import { GetAllUsers } from "../../requests/UserService";
import { User } from "../../types/User";
import { LinkButton } from "../common/LinkButton";

interface IProps{

}

export const Users : FC<IProps> = (props) =>{
    const [users, setUsers] = useState<User[] | null>();

    useEffect(() => {
        GetAllUsers()
        .then(users => setUsers(users))
    },[]);
    return(
        <>
            <h1>Users</h1>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {users?.map(user =>
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td><LinkButton text='profile' to={"/Profile/" + user.id}></LinkButton></td>
                    </tr>
                    )}
                </tbody>
            </table>
        </>
    );
}