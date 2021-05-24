import { FC } from 'react';
import { Card } from '../../components/card/Card';
import { Header } from '../../components/header/Header';
import classes from './Dashboard.module.scss';

const Dashboard:FC = () => {
    return (
        <div className={ classes.container }>
            <Header title="Welcome to your member dashboard" tagline="Talk to your attorney, send your documents for document review, and access your template library" />
                <div className={ classes.wrapper }>
                    <Card title="Talk to Attorney" btnText="Schedule a call">
                        Speak with a lawyer regularly up to two times a month for different legal matters. Follow uos at the discreation of your attorney.
                        <ol>
                            <li>Schedule a call with your attorney</li>
                            <li>Two 20-munite consultations/month</li>
                            <li>Personal or business legal questions</li>
                        </ol>
                    </Card>
                    <Card title="Document Review" btnText="Send your document">
                        Send your document for review relating to tenant/homeowner issues of 10 pages or less.
                        Have a lawyer advice you before entering into an agreement disputing an agreement.
                    </Card>
                </div>
            <div className={ classes.wrapper }>
                <Card title="Template Library" btnText="View our library">
                    Download a template from our library of legal forms.
                </Card>
                <Card title="Demand Letters" btnText="Send your information">
                    Demands letter can help you set your dispute. Send your lawyer the elements that will be
                    necessary to draft your demand letter. Your personal information, your opponent information, 
                    all involved third-party information, description of your case documents related to your dispute.
                </Card>
            </div>
            <div className={ classes.wrapper }>
                <Card title="Newsletter" btnText="Newsletter">
                    Subscribe to our newletter to get access to additional resources and legal updates
                    useful and relevant to your everyday life.
                </Card>
                <Card title="Feedback" btnText="Feedback">
                    Didn't find what you were looking for? Experiencing an issue with accessing information?
                    Let us know so we can fix it!
                </Card>
            </div>
        </div>
    )
}
export { Dashboard }