import { FC } from 'react';
import classes from './NotFound.module.scss';

const NotFound:FC = () => {
    return <div className={ classes.error__404 }>404 Not Found</div>
}
export { NotFound };