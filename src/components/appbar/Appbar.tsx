import { Dispatch, FC, SetStateAction } from 'react';
import { ButtonToolbar, FlexboxGrid, IconButton, Icon } from 'rsuite';
import { AppContext } from '../../AppContext';
import classes from './Appbar.module.scss';
import { Link } from 'react-router-dom';

const Appbar:FC = () => {
    const handleClick = (setExpanded: Dispatch<SetStateAction<boolean>>) => setExpanded(s => !s);

    return (
        <AppContext.Consumer>
            {({ isMobile, setExpanded, user }) => 
            <FlexboxGrid justify={ isMobile ? 'space-between' : 'end' } className={classes.appbar}>
                { isMobile && <FlexboxGrid.Item>
                    <ButtonToolbar>
                        <IconButton className={ classes.appbar__btn } size="sm" onClick={() => handleClick(setExpanded)} circle icon={<Icon icon="caret-right" />} />
                    </ButtonToolbar>
                </FlexboxGrid.Item> }
                <FlexboxGrid.Item>{ user?.name ? `Hello ${user.name}` : <Link to="/login"><Icon icon="sign-in" /> Login</Link> }</FlexboxGrid.Item>
            </FlexboxGrid>}
        </AppContext.Consumer>
    ) 
}
export { Appbar };