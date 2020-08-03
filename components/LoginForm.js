import { loginUser } from '../lib/auth';
import Router from 'next/router';

export default function LoginForm() {
    const [email, setEmail] = React.useState('Shanna@melissa.tv');
    const [password, setPassword] = React.useState('anastasia.net');
    const [error, setError] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setError('');
        setIsLoading(true);
        loginUser(email, password).then(() => {
            Router.push('profile');
        })
        .catch(showError);
    }

    const showError = err => {
        console.log(err);
       const myError = err.response &&  err.response.data || err.message;
       setError(myError);
       setIsLoading(false);
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <div>
                <input type="text" name="email" value={email} placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div><input type="text" type="password" value={password} placeholder="password" onChange={(e) => setPassword(e.target.value)}/></div>
            <button disabled={isLoading} type="submit">{isLoading ? 'Sending' : 'Submit'}</button>
            {error && (
                <div>{error}</div>
            )}
        </form>
    )
}