import { FC, useState, FormEvent, SyntheticEvent, useContext, useEffect } from "react";
import { Form, FormGroup, Button, InputGroup, Icon, Input, HelpBlock } from 'rsuite';
import classes from './Login.module.scss';
import { Checkbox } from 'rsuite';
import { Link, RouteComponentProps } from 'react-router-dom';
import { AppContext, AppContextType } from "../../AppContext";

const Login:FC<RouteComponentProps> = ({ history }) => {
    const { isMobile, user, setUser } = useContext<AppContextType>(AppContext);
    const [form, setForm] = useState<{ username: string, password: string }>({ username: '', password: '' });
    const [errors, setErrors] = useState<Array<{ field: string, message: string }>>([]);

    useEffect(() => { 
        if (user) {
            history.replace('/');
        } 
    }, [user, history]);

    const handleChange = (value: string, e: SyntheticEvent<HTMLElement, Event>) => {
        const name = e.currentTarget.getAttribute('name')!;
        setForm(f => ({ ...f, [name]: value }))
    }

    const validateInput = (field: string) => {
        return errors.find(e => e.field === field)?.message;
    }

    const handleSubmit = async (_checkStatus: boolean, e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrors([]);
        if(form.username === '' || form.password === '') {
            if(form.username === '') {
                setErrors(e => ([...e, { field: 'username', message: 'Username is required' }]))
            }
            if(form.password === '') {
                setErrors(e => ([...e, { field: 'password', message: 'Password is required' }]))
            }
            return;
        }
        setUser({ name: form.username });
    }

    return (
        <div className={ classes.login }>
            <div className={ classes.login__wrapper }>
                <div className={ classes.login__wrapper_form }>
                    <Form onSubmit={ handleSubmit }>
                        <FormGroup>
                            <InputGroup inside>
                                <InputGroup.Addon>
                                    <Icon icon="avatar" />
                                </InputGroup.Addon>
                                <Input placeholder="Username or Email address" name="username" onChange={ handleChange } />
                            </InputGroup>
                            { validateInput('username') && <HelpBlock className="validation-error">{ validateInput('username') }</HelpBlock> }
                        </FormGroup>
                        <FormGroup>
                            <InputGroup inside>
                                <InputGroup.Addon>
                                    <Icon icon="key" />
                                </InputGroup.Addon>
                                <Input placeholder="Password" name="password" type="password" onChange={ handleChange } />
                            </InputGroup>
                            { validateInput('password') && <HelpBlock className="validation-error">{ validateInput('password') }</HelpBlock> }
                        </FormGroup>
                        <Button className={ classes.login__wrapper_loginBtn } type="submit" appearance="primary">Login</Button>
                        <Checkbox name="remember">Remember Me</Checkbox>
                        <Link className={ classes.login__wrapper_forgot } to="/">Lost your password ?</Link>
                        <Button className={ classes.login__wrapper_backBtn } onClick={ () => history.push('/') }><Icon icon="long-arrow-left" /> &nbsp;Go Back</Button>
                        <Link className={ classes.login__wrapper_privacy } to="/">Privacy Policy</Link>
                    </Form>
                </div>
                { !isMobile && <div className={ classes.login__wrapper_image }></div> }
            </div>
        </div>
    );
}
export { Login };