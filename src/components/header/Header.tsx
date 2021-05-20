import { FC } from 'react';
import classes from './Header.module.scss';

interface HeaderProps {
    title: string;
    tagline: string;
}

const Header:FC<HeaderProps> = ({ title, tagline }) => {
    return (
        <div className={classes.header}>
            <h1>{ title }.</h1>
            <h4>{ tagline }.</h4>
        </div>
    )
}
export {Header};