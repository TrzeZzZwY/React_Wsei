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
        <div className="flex flex-col items-center justify-items-center m-20 gap-5">     
            <span className='text-xl'>Main Page</span>
            <Link to="/users" className='border border-2  border-black rounded w-28 h-12 bg-yellow-300 p-2'>Users page</Link>
        </div>
    )
}
