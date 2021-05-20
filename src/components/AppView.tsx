import { FC } from 'react';
import { Route } from 'react-router-dom';
import { Dashboard, DemandLetter, DocumentReview, TalktoAttorney } from "../pages";
import { Col, FlexboxGrid } from 'rsuite';
import { Appbar } from './appbar/Appbar';
import { Drawer } from './Drawer';
import { Settings } from '../pages/Settings';

const AppView:FC = () => {
    return (
        <>
            <FlexboxGrid>
                <FlexboxGrid.Item componentClass={Col} colspan={24} md={6}>
                    <Drawer />
                </FlexboxGrid.Item>
                <FlexboxGrid.Item componentClass={Col} colspan={24} md={18}>
                    <Appbar />
                    <Route path="/" exact component={ Dashboard } />
                    <Route path="/document-review" component={ DocumentReview } />
                    <Route path="/demand-letter" component={ DemandLetter } />
                    <Route path="/settings" component={ Settings } />
                    <Route path="/talk-to-attorney" component={ TalktoAttorney } />
                </FlexboxGrid.Item>
            </FlexboxGrid>
        </>
    );
}
export { AppView };