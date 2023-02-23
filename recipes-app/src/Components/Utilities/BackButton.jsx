import { useNavigate } from 'react-router-dom';

const BackButton = () => {

    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1)
    }

    return (
        <div className="back-button-div">
            <button className="back-button" onClick={goBack}>Back</button>
        </div>
    )
}
export default BackButton;