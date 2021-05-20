import { FC, useRef, useState } from 'react';
import { FlexboxGrid } from 'rsuite';
import { Header } from '../components/header/Header';

const Settings:FC = () => {
    const profile = useRef<ReturnType<typeof FlexboxGrid.Item>>(null);
    const payment = useRef<ReturnType<typeof FlexboxGrid.Item>>(null);
    const [tab, setTab] = useState('profile');

    return (
        <>
            <Header title="Settings" tagline="Update your personal information and payment information" />
            <FlexboxGrid justify="space-around">
                <FlexboxGrid.Item ref={ profile } onClick={() => setTab('profile')}>Profile</FlexboxGrid.Item>
                <FlexboxGrid.Item ref={ payment } onClick={() => setTab('payment')}>Payment</FlexboxGrid.Item>
            </FlexboxGrid>
        </>
    );
}
export { Settings };