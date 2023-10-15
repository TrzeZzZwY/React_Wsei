import { FC } from 'react';

interface IProps {
    body?: string,
    header?: string,
    children?: React.ReactNode
}

export const MainPage: FC<IProps> = props =>{
    return  <div>
                <h1 className="text-red-500 font-bold text-2xl">
                    {props.body} {props.header}
                </h1>
                {props.children}
            </div>;
}