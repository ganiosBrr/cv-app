import './box.scss';

const Box = ({title, content, className, id}) => {
    return (
        <div id={id} className={className}>
            <h2 className="cv__title">{title}</h2>
            {content}
        </div>
    );
}

export default Box;