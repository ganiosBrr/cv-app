import { Link } from "react-router-dom";

import PhotoBox from "../../shared/photoBox/photoBox";
import Button from "../../shared/button/button";
import { developerData } from "../../static-data/staticData";

import "./home.scss";

const Home = () => {
  return (
    <section className="home">
      <PhotoBox
        className="home__photoBox"
        name={developerData.name}
        title={developerData.title}
        description={developerData.description}
        avatar={developerData.avatar}
      />
      <Link to="/inner">
        <Button className="btn btn-primary" text="Know more" />
      </Link>
    </section>
  );
};

export default Home;
