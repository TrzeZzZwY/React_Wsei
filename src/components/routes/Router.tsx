import { FC } from 'react';
import { Route, Routes } from 'react-router-dom'
import { MainPage } from './MainPage';
import { Profile } from './ProfilePage';
import { Users } from './UsersPage';
import { AlbumPage } from './AlbumPage';
import { PostPage } from './PostPage';

interface IProps{

}

export const Router: FC<IProps> = props =>{
    return (
        <Routes>
            <Route index element={<MainPage body="Hello" header="World"/>} />
            <Route path="/Profile/:id">
                <Route path="" element={<Profile/>}/>
                <Route path="Album/:albumId" element={<AlbumPage/>}/>
                <Route path="Post/:postId" element={<PostPage/>}/>
            </Route>        
            <Route path="/Users" element={<Users/>}/>
            <Route path="*" element={<div>Not Found</div>}/>
        </Routes>
    )
}