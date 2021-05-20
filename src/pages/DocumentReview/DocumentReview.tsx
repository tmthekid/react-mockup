import { FC } from 'react';
import { Header } from '../../components/header/Header';
import { Form, FormGroup, FormControl, Button, Uploader } from 'rsuite';
import classes from './DocumentReview.module.scss';

const DocumentReview:FC = () => {
    return (
        <>
            <Header title="Document Review" tagline="Send your legal documents for review" />
            <Form className={classes.documentReview} fluid>
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
                    {/* pass the url to action */}
                    <Uploader multiple action="">
                        <Button>Upload your document(s)</Button>
                    </Uploader>
                </FormGroup>
                <FormGroup>
                    <FormControl placeholder="Description of document(s)" rows={5} name="description" componentClass="textarea" />
                </FormGroup>
                <Button style={{ width: '100%' }} appearance="primary">Send</Button>
            </Form>
        </>
    );
}

export { DocumentReview };