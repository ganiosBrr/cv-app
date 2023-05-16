import { Link } from 'react-router-dom';

import PhotoBox from "../../components/photoBox/photoBox";
import Button from "../../components/button/button";

import "./home.scss"

const Home = () => {
    return(
        <section className="home">
            <PhotoBox
                className="home__photoBox"  
                name="John Doe" 
                title="Programmer. Creative. Innovator" 
                description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo \n ligula eget dolor. Aenean massa. Cum sociis natoque"  
                avatar="http://avatars0.githubusercontent.com/u/246180?v=4" />
            <Link to="/inner">
                <Button className="btn btn-primary" text="Know more"/>
            </Link>
        </section>
    );
}

export default Home;