import { FC } from 'react';
import classes from './Header.module.scss';

interface HeaderProps {
    title: string;
    tagline: string;
    border?: boolean;
}

const Header:FC<HeaderProps> = ({ title, tagline, border = true }) => {
    return (
        <div className={ classes.header } style={{ borderBottom : border ? '5px solid #575757' : '' }}>
            <h1>{ title }</h1>
            <h4>{ tagline }.</h4>
        </div>
    )
}
export { Header };