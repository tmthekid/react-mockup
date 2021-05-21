import { FC } from 'react';
import { Form, FormGroup, FormControl, Button } from 'rsuite';
import classes from './Profile.module.scss';

const Profile:FC = () => {
    return (
        <Form className={ classes.profile } fluid>
            <FormGroup>
                <FormControl placeholder="First Name" name="first_name" />
            </FormGroup>
            <FormGroup>
                <FormControl placeholder="Last Name" name="last_name" />
            </FormGroup>
            <FormGroup>
                <FormControl placeholder="Email" name="email" type="email" />
            </FormGroup>
            <Button style={{ width: '100%' }} appearance="primary">Send</Button>
        </Form>
    );
}
export { Profile };