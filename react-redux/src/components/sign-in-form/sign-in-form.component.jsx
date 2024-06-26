import { useState } from 'react';

import {
    signInAuthUserWithEmailAndPassword,
    signInWithGooglePopup,
} from '../../utils/firebase/firebase.utils';

import FormInput from '../form-input/form-input.component';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import { SignInContainer, ButtonsContainer } from './sign-in-form.styles';

const defaultFormFields = {
    email: '',
    password: '',
};

const SignInForm = () => {
    const [formFields, setFormfields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormfields(defaultFormFields);
    };

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await signInAuthUserWithEmailAndPassword(email, password);
            resetFormFields();
        } catch (err) {
            switch (err.code) {
                case 'auth/invalid-credential':
                    alert('Incorect Password or Email');
                    break;
                case 'auth/user-not-found':
                    alert('No User associated with this Email');
                    break;
                default:
                    console.error(err);
            }
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormfields({ ...formFields, [name]: value });
    };

    return (
        <SignInContainer>
            <h2>Already have an account?</h2>
            <span>Sign In with Your Email and Password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    label='Email'
                    type='email'
                    required
                    onChange={handleChange}
                    name='email'
                    value={email}
                />

                <FormInput
                    label='Password'
                    type='password'
                    required
                    onChange={handleChange}
                    name='password'
                    value={password}
                />

                <ButtonsContainer>
                    <Button type='submit'>Sign In</Button>
                    <Button
                        type='button'
                        buttonType={BUTTON_TYPE_CLASSES.google}
                        onClick={signInWithGoogle}
                    >
                        Google Sign In
                    </Button>
                </ButtonsContainer>
            </form>
        </SignInContainer>
    );
};

export default SignInForm;
