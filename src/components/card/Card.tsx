import { FC } from 'react';
import { Button, ButtonToolbar, Icon } from 'rsuite';
import classes from './Card.module.scss';

interface CardProps {
    title?: string;
    btnText?: string;
}

const Card:FC<CardProps> = ({ title, children, btnText }) => {
    return (
        <div className={ classes.card }>
            { title && <h1>{ title }</h1> }
            <div>{ children }</div>
            { btnText && <ButtonToolbar className={ classes.btnToolbar }>
                <Button className={ classes.btn }>
                    <span>{ btnText }</span><Icon className={ classes.icon } icon="long-arrow-right" />
                </Button>
            </ButtonToolbar> }
        </div>
    );
}
export {Card};