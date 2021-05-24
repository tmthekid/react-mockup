import { FC } from 'react';
import { Header } from '../../components/header/Header';
import { Form, FormGroup, FormControl, Button } from 'rsuite';
import classes from './DemandLetter.module.scss';

const DemandLetter:FC = () => {
    return (
        <>
            <Header title="Document Review" tagline="Send your legal documents for review" />
            <Form className={ classes.form } fluid>
                <FormGroup>
                    <FormControl placeholder="Name" name="name" />
                </FormGroup>
                <FormGroup>
                    <FormControl placeholder="Address" name="address" />
                </FormGroup>
                <FormGroup>
                    <FormControl placeholder="City" name="city" />
                </FormGroup>
                <FormGroup>
                    <FormControl placeholder="State" name="state" />
                </FormGroup>
                <FormGroup>
                    <FormControl placeholder="Zipcode" name="zipcode" />
                </FormGroup>
                <FormGroup>
                    <FormControl placeholder="Email" name="email" type="email" />
                </FormGroup>
                <FormGroup>
                    <FormControl placeholder="Detailed description of the issue" name="issue_description" rows={5} componentClass="textarea" />
                </FormGroup>
                <FormGroup>
                    <FormControl placeholder="List of all involved 3rd parties" name="third_parties" rows={5} componentClass="textarea" />
                </FormGroup>
                <FormGroup>
                    <FormControl type="file" />
                    <FormControl type="file" />
                    <FormControl type="file" />
                </FormGroup>
                <Button>Send</Button>
            </Form>
        </>
    );
}
export { DemandLetter };