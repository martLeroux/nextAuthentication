import { loginUser } from '../lib/auth';

export default function LoginForm() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        loginUser(email, password);
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <div>
                <input type="text" name="email" placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div><input type="text" type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}/></div>
            <button type="submit">Submit</button>
        </form>
    )
}