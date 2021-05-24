import { Header } from "../../components/header/Header"
import { Form, FormGroup, FormControl, Button } from 'rsuite';
import classes from './Feedback.module.scss';

const Feedback = () => {
    return (
        <>
            <Header title="Feedback" tagline="Something missing? something you wish we offered? let us know in the form below" />
            <Form className={ classes.feedback } fluid>
            <FormGroup>
                <FormControl placeholder="Name" name="name" />
            </FormGroup>
            <FormGroup>
                <FormControl placeholder="Email" name="email" type="email" />
            </FormGroup>
            <FormGroup>
                <FormControl placeholder="Message" rows={5} name="message" componentClass="textarea" />
            </FormGroup>
            <Button>Send</Button>
        </Form>
        </>
    );
}
export { Feedback };