import { useState } from 'react';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
};

const SignUpForm = () => {
    const [formFields, setFormfields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    console.log(formFields);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormfields({ ...formFields, [name]: value });
    };

    return (
        <div>
            <h1>Sign Up with Your Email and Password</h1>

            <form onSubmit={() => { }}>
                <label htmlFor="">Dispaly Name</label>
                <input type='text' required onChange={handleChange} name='displayName' value={displayName} />

                <label htmlFor="">Email</label>
                <input type='email' required onChange={handleChange} name='email' value={email} />

                <label htmlFor="">Password</label>
                <input type='password' required onChange={handleChange} name='password' value={password} />

                <label htmlFor="">Confirm Password</label>
                <input type='password' required onChange={handleChange} name='confirmPassword' value={confirmPassword} />

                <button type='submit'>Sign Up</button>
            </form>
        </div>
    );
};

export default SignUpForm;
