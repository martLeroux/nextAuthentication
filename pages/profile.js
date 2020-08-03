
import { getUserProfile } from '../lib/auth';
import Layout from "../components/Layout";
import  { authInitialProps } from '../lib/auth';

export default function Profile(props) {
    const [user, setUser] = React.useState(null);

    React.useEffect(() => {
        getUserProfile().then(user => setUser(user));
    }, []);

    return (
        <Layout title="Profile" {...props}>
            <pre>{JSON.stringify(user, null, 2)}</pre>
        </Layout>
    )
}

Profile.getInitialProps = authInitialProps();