import Link from 'next/link'
import styles from '../../styles/users.module.css';

export const getStaticProps = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: { users: data }
    }
}

const index = (props) => {

    const users = props.users;

    return (
        <div>
            <h1 className={styles.title}>All Users</h1>

            {
                users.map(users => (
                    <Link href={`/users/${users.id}`} key={users.id}>
                        <h4><a className={styles.username}>{users.name}</a></h4>
                    </Link>
                ))
            }

        </div>
    );
};

export default index;