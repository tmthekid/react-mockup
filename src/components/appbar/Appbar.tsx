import { Dispatch, FC, SetStateAction } from 'react';
import { ButtonToolbar, FlexboxGrid, IconButton, Icon } from 'rsuite';
import { AppContext } from '../../AppContext';
import classes from './Appbar.module.scss';

const Appbar:FC = () => {
    const handleClick = (setExpanded: Dispatch<SetStateAction<boolean>>) => setExpanded(s => !s);

    return (
        <AppContext.Consumer>
            {({ isMobile, setExpanded }) => 
            <FlexboxGrid justify={ isMobile ? 'space-between' : 'end' } className={classes.appbar}>
                { isMobile && <FlexboxGrid.Item>
                    <ButtonToolbar>
                        <IconButton size="sm" onClick={() => handleClick(setExpanded)} circle icon={<Icon icon="caret-right" />} />
                    </ButtonToolbar>
                </FlexboxGrid.Item> }
                <FlexboxGrid.Item>
                    <div>Hello!</div>
                </FlexboxGrid.Item>
            </FlexboxGrid>}
        </AppContext.Consumer>
    ) 
}
export { Appbar };