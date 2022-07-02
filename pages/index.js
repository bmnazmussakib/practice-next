
import style from '../styles/Home.module.css'

function index(props) {
    return (
        <div>
            <h1>Home</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis quibusdam voluptatibus id iste neque ipsa nulla vero, quae suscipit, consectetur voluptates aperiam minus dolore architecto incidunt fuga assumenda ratione sequi?</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis quibusdam voluptatibus id iste neque ipsa nulla vero, quae suscipit, consectetur voluptates aperiam minus dolore architecto incidunt fuga assumenda ratione sequi?</p>
            <div className={style.btn}>
                <a href="#">Learn more</a>
            </div>
        </div>
    );
}

export default index;