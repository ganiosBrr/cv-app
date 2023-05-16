import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';

import './timeline.scss';

const Timeline = ({data}) => {
    return (
        <div className="timeline">
            <ul className="timeline-list">
                {data.map((item, index) => {
                    return (
                        <li className="timeline-list__item" key={index}>
                            <div className="timeline-date">{item.date}</div>
                            <div className="timeline-event">
                            <span className='timeline-event--arrow'>{<FontAwesomeIcon icon={faCaretLeft} style={{color: "#eeeeee",}} />}</span>
                                <h3 className="timeline-event__title">{item.title}</h3>
                                <p className="timeline-event__text">{item.text}</p>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Timeline;