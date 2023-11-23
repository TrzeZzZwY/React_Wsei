import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Photo } from "../../types/Photo"

interface IProps {
    photo: Photo
}

export const PhotoTile: FC<IProps> = props => {
    return (
        <>
            <div className='min-w-100 min-h-100 p-7 m-4 flex felx-nowrap justify-items-center items-center text-xl'>
                <p>{props.photo.title}</p>
                <img src={props.photo.thumbnailUrl} alt="photo"/>
            </div>
        </>
    )
} 