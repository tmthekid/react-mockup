import { FC } from 'react';
import { Drawer as RsDrawer } from 'rsuite';
import { Sidebar } from '../components/Sidebar';
import { AppContext } from '../AppContext';

const Drawer:FC = () => {
    return (
        <AppContext.Consumer>
            {({ isMobile, expanded }) => 
                <>
                    <RsDrawer style={{ width: isMobile && !expanded ? '3.4rem' : '15rem' }} show={ true } backdrop={ expanded } placement="left">
                        <Sidebar />
                    </RsDrawer>
                </>
            }
        </AppContext.Consumer>
    )
}
export { Drawer };