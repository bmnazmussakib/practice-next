
export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    const paths = data.map(user => {
        return {
            params : {id: user.id.toString()}
        }
    })

    return {
        paths,
        fallback: false
    }
}



export const getStaticProps = async (context) => {

    console.log(context);
    const id = context.params.id;

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await res.json();

    return {
        props: {user: data}
    }
}

const details = ({user}) => {
    
   console.log(user);

    return (
        <div>
            <h1>Details Page</h1>
            <h4>{user.name}</h4>
            <p>{user.phone}</p>
        </div>
    );
};

export default details;