import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GetAllUsers } from "../../requests/UserService";
import { User } from "../../types/User";

interface IProps {
    body?: string,
    header?: string,
    children?: React.ReactNode
}

export const MainPage: FC<IProps> = props =>{
    const [users,setUsers] = useState<User[] | null>();

    useEffect(() => {
        GetAllUsers()
        .then(users => setUsers(users))
    },[]);
    return  (
        <>  
            <h1>Main Page</h1>      

            <Link to="/users">Go to users page</Link>
        </>
    )
}
