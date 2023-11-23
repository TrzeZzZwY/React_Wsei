import { FC } from 'react';
import { Link } from 'react-router-dom';

interface IProps {
    text?: string,
    to: string
}

export const LinkButton: FC<IProps> = props => {
    return <Link to={props.to} >{props.text}</Link>
} 