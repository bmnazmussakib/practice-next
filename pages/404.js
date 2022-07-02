import { useRouter } from 'next/router';
import { useEffect } from 'react';
import styles from '../styles/404.module.css';


const NotFound = () => {

    const router = useRouter();

    useEffect(() => {

        setTimeout(()=>{
            router.push('/')
        }, 5000)

    }, [])


    return (
        <div className={styles.container}>
            <h1 className={styles.oops}>Oooooops....!</h1>
            <h3 className={styles.notFound}>Page Not Found</h3>
            <h2 className={styles.error}>404</h2>
        </div>
    );
};

export default NotFound;