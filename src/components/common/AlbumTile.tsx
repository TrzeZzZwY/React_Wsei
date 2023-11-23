import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Album } from "../../types/Album"

interface IProps {
    album: Album
}
export const AlbumTile: FC<IProps> = props => {
    return (
        <Link to={`Album/${props.album.id}`}>
            <div className={`bg-red-400 flex justify-center items-center h-64 w-64 border-2 rounded-md border-black`}>
                <p>{props.album.title}</p>
            </div>
        </Link>
    )
} 