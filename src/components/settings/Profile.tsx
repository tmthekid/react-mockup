import { FC } from 'react';
import { Form, FormGroup, FormControl, Button, HelpBlock, ControlLabel, Icon } from 'rsuite';
import classes from './Profile.module.scss';

const Profile:FC = () => {
    return (
        <>
            <Form className={ classes.profile } fluid>
                <HelpBlock style={{ marginBottom: '1rem' }}>* Required</HelpBlock>
                <FormGroup>
                    <ControlLabel>First Name *</ControlLabel>
                    <FormControl placeholder="First Name" name="first_name" />
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Last Name *</ControlLabel>
                    <FormControl placeholder="Last Name" name="last_name" />
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Email *</ControlLabel>
                    <FormControl placeholder="wp-admin@one-400.com" name="email" type="email" />
                </FormGroup>
                <FormGroup className={ classes.profile__btn }>
                    <Button>Confirm <Icon icon="caret-right" /></Button>
                </FormGroup>
            </Form>
        </>
    );
}
export { Profile };