import './styles.css';

type Props = {
    title: string;
    description: string;
    children?: any;
}

const ResultCard = ( { title, description, children} : Props) => {

    return (
        <div className="result-container">
            <h4 className="result-title">{title}</h4>
            <p className="result-description">{description}</p>
            {children}
        </div>
    );
}

export default ResultCard;