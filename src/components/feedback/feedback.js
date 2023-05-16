import './feedback.scss';

const Feedback = ({photo}) => {
    const feedbackData = [
        {
            text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. ",
            name: "Martin Friman Programmer",
            link: "somesite.com"
        },
        {
            text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. ",
            name: "Martin Friman Programmer",
            link: "somesite.com"
        },
        {
            text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. ",
            name: "Martin Friman Programmer",
            link: "somesite.com"
        }
        
    ];

    return(
        <div id="feedback" className="feedback">
            <ul className="feedback-list">
            {feedbackData.map(({text, name, link}, index) => {
                return(
                    <li key={index} className="feedback-list__item">
                        <blockquote className="feedback__quote">
                            {text}
                        </blockquote>
                        <div className="feedback__user-info">
                            <img src={photo} alt="feedback user avatar" className="feedback__user-avatar"/>
                            {name}, <a href={link} className="feedback__user-link">somesite.com</a>
                        </div>
                    </li>
                );
            })}
            </ul>
        </div>
        
    );
}

export default Feedback;