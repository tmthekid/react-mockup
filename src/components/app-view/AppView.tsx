import { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Dashboard, DemandLetter, DocumentReview, TemplateLibrary, Settings, TalktoAttorney, Feedback, NotFound } from "../../pages";
import { Col, FlexboxGrid } from 'rsuite';
import { Appbar } from '../appbar/Appbar';
import { Drawer } from '../Drawer';
import classes from './AppView.module.scss';

const AppView:FC = () => {
    return (
            <FlexboxGrid>
                <FlexboxGrid.Item componentClass={Col} colspan={24} md={6}>
                    <Drawer />
                </FlexboxGrid.Item>
                <FlexboxGrid.Item componentClass={Col} colspan={24}>
                    <Appbar />
                    <div className={ classes.view }>
                        <Switch>
                            <Route path="/" exact component={ Dashboard } />
                            <Route path="/document-review" exact component={ DocumentReview } />
                            <Route path="/demand-letter" exact component={ DemandLetter } />
                            <Route path="/template-library" exact component={ TemplateLibrary } />
                            <Route path="/settings" exact component={ Settings } />
                            <Route path="/feedback" exact component={ Feedback } />
                            <Route path="/talk-to-attorney" exact component={ TalktoAttorney } />
                            <Route exact component={ NotFound } />
                        </Switch>
                    </div>
                </FlexboxGrid.Item>
            </FlexboxGrid>
    );
}
export { AppView };