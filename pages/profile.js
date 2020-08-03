
import { getUserProfile } from '../lib/auth';
import Layout from "../components/Layout";

export default function Profile() {
    const [user, setUser] = React.useState(null);

    React.useEffect(() => {
        getUserProfile().then(user => setUser(user));
    }, []);

    return (
        <Layout title="Profile">
            <pre>{JSON.stringify(user, null, 2)}</pre>
        </Layout>
    )
}