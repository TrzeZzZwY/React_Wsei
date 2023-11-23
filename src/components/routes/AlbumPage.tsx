import { FC, useState, useEffect } from 'react';
import { useParams , Link } from 'react-router-dom';
import { GetPhotosForAlbumId } from "../../requests/AlbumService";
import { Photo } from "../../types/Photo";
import { PhotoTile } from '../common/PhotoTile';

interface IProps{

}

export const AlbumPage: FC<IProps> = props =>{

    const { id } = useParams<{id : string}>();

    const [photos, setPhotos] = useState<Photo[] | null>();

    useEffect(()=>{
        GetPhotosForAlbumId(Number(id))
        .then(photos => setPhotos(photos))
    },[])
    return (
        <>
            {photos?.map(photo =>
                <PhotoTile photo={photo}/>
                )}
        </>
    )
}