import { FC, useState, useEffect } from 'react';
import { useParams , Link } from 'react-router-dom';
import { GetPhotosForAlbumId } from "../../requests/AlbumService";
import { Photo } from "../../types/Photo";
import { PhotoTile } from '../common/PhotoTile';

interface IProps{

}

export const AlbumPage: FC<IProps> = props =>{

    const { albumId } = useParams<{albumId : string}>();

    const [photos, setPhotos] = useState<Photo[] | null>();

    useEffect(()=>{
        GetPhotosForAlbumId(Number(albumId))
        .then(photos => setPhotos(photos))
    },[])
    return (
        <div className='flex flex-row gap-3 flex-wrap'>
            {photos?.map(photo =>
                <PhotoTile photo={photo}/>
                )}
        </div>
    )
}