import { FC } from 'react';
import { Route, Routes } from 'react-router-dom'
import { MainPage } from './MainPage';
import { Button } from '../common/Button';
import { Profile } from './Profile';


interface IProps{

}

export const Router: FC<IProps> = props =>{
    return (
        <Routes>
            <Route index element={<MainPage body="Hello" header="World"><Button text='button test' children='test'/></MainPage>} />
            <Route path="/Profile/:id" element={<Profile/>}/>
            <Route path="*" element={<div>Not Found</div>}/>
        </Routes>
    )
}