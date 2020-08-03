import { loginUser } from '../lib/auth';
import Router from 'next/router';

export default function LoginForm() {
    const [email, setEmail] = React.useState('Shanna@melissa.tv');
    const [password, setPassword] = React.useState('anastasia.net');

    const handleSubmit = (event) => {
        event.preventDefault();
        loginUser(email, password).then(() => {
            Router.push('profile');
        });
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <div>
                <input type="text" name="email" value={email} placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div><input type="text" type="password" value={password} placeholder="password" onChange={(e) => setPassword(e.target.value)}/></div>
            <button type="submit">Submit</button>
        </form>
    )
}