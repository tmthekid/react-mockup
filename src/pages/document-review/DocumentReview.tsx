import { FC } from 'react';
import { Header } from '../../components/header/Header';
import { Form, FormGroup, FormControl, Button, ControlLabel } from 'rsuite';
import classes from './DocumentReview.module.scss';

const DocumentReview:FC = () => {
    return (
        <div>
            <Header title="Document Review" tagline="Send your legal documents for review" />
            <Form className={ classes.form } fluid>
                <FormGroup>
                    <FormControl placeholder="Name" name="name" />
                </FormGroup>
                <FormGroup>
                    <FormControl placeholder="Email" name="email" type="email" />
                </FormGroup>
                <FormGroup>
                    <FormControl placeholder="Message" name="messaage" rows={5} componentClass="textarea" />
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Download your document(s)</ControlLabel>
                    <FormControl type="file" />
                </FormGroup>
                <FormGroup>
                    <FormControl placeholder="Description of document(s)" rows={5} name="description" componentClass="textarea" />
                </FormGroup>
                <Button>Send</Button>
            </Form>
        </div>
    );
}

export { DocumentReview };