import { FC, useRef, useState } from 'react';
import { FlexboxGrid } from 'rsuite';
import { Header } from '../../components/header/Header';
import { Profile, Payment } from '../../components/settings';
import classes from './Settings.module.scss';

const Settings:FC = () => {
    const profile = useRef<ReturnType<typeof FlexboxGrid.Item>>(null);
    const payment = useRef<ReturnType<typeof FlexboxGrid.Item>>(null);
    const [tab, setTab] = useState('profile');

    return (
        <>
            <Header border={ false } title="Settings" tagline="Update your personal information and payment information" />
            <FlexboxGrid className={ classes.settings }>
                <FlexboxGrid.Item ref={ profile } onClick={() => setTab('profile')}>
                    <p className={ tab === 'profile' ? 'active-tab' : '' }>Profile</p>
                </FlexboxGrid.Item>
                <FlexboxGrid.Item ref={ payment } onClick={() => setTab('payment')}>
                    <p className={ tab === 'payment' ? 'active-tab' : '' }>Payment</p>
                </FlexboxGrid.Item>
            </FlexboxGrid>
            { tab === 'profile' && <Profile /> }
            { tab === 'payment' && <Payment /> }
        </>
    );
}
export { Settings };