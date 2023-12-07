import style from '../Delete/Delete.module.css'
import { useNavigate } from 'react-router-dom'

export default function Delete() {

    const navigate = useNavigate()

    const onReturnCatalogPage = () => {
        navigate("/catalog")
    }

    return (
        <div className={style.deleteOverlay}>
            <div className={style.deleteModal}>
                <p>You delete this event!</p>
                <div className={style.deleteButtons}>
                    <button onClick={onReturnCatalogPage} className={style.confirmDelete}>
                        Back to catalog page
                    </button>
                </div>
            </div>
        </div>
    )
}