import { FC } from 'react';

interface IProps {
    text?: string,
    children: React.ReactNode
}

export const Button: FC<IProps> = props => {
    return <button type='submit' className='m-1 p-1 min-w-20 min-h-10'>{props.text}</button>
} 