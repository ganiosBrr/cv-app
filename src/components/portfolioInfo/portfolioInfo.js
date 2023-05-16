import './portfolioInfo.scss';

const PortfolioInfo = ({title, text, url}) => {
    return(
        <div className="portfolio-info">
            <h3 className="portfolio-info__title">{title}</h3>
            <p className="portfolio-info__text">{text}</p>
            <a className="portfolio-info__link" href={url}>Visit Website</a>
        </div>
    );
}

export default PortfolioInfo;