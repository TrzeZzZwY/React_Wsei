import { FC } from 'react';
import {useParams , Link } from 'react-router-dom';

interface IProps{

}

export const Profile: FC<IProps> = props =>{

    const { id } = useParams<{id : string}>();
    return (
        <>
            <div>
                <p>
                    this is profile page!
                    your id is: {id}
                </p>

                <Link to="/" >Go to home page</Link>
            </div>
        </>
    )
}