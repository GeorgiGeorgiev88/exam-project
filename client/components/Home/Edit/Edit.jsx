import React, { useState, useContext, useEffect } from 'react';
import { useParams } from "react-router-dom";
import UserContext from '../../../contexts/uresContext';
import * as eventService from '../../../servises/eventService';
import { useNavigate } from "react-router-dom";
import style from '../Edit/Edit.module.css'


export default function Edit() {
    const { idEvent } = useParams();
    const { accessToken } = useContext(UserContext);
    const navigate = useNavigate();
    const [oneEvent, setEvent] = useState({

        title: '',
        summary: '',
        imageURL: ''
    });

    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [imageURL, setImageURL] = useState('');



    useEffect(() => {
        eventService
            .getOne(idEvent)
            .then((result) => setEvent(result))
            .catch((err) => console.log(err));
    }, [idEvent]);

    useEffect(() => {
        setTitle(oneEvent.title || '');
        setSummary(oneEvent.summary || '');
        setImageURL(oneEvent.imageURL || '');
    }, [oneEvent]);

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSummaryChange = (event) => {
        setSummary(event.target.value);
    };

    const handleImageURLChange = (event) => {
        setImageURL(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (title.length === 0 || summary.length === 0 || imageURL.length === 0) {
            return alert("All filds must be fill")
        }
        
        const userConfirmed = window.confirm("Do you want to save the changes?");
        if (userConfirmed) {
            eventService.edit(idEvent, accessToken, { title, summary, imageURL });
            navigate("/catalog");
        } else {
            console.log("Changes not saved.");
        }
    };

    const cancelEditingEvent = () => {
        navigate("/catalog")
    }

    return (
        <>
            <div className={style.background}></div>
            <div className={style.container}>
                <h1 className={style.mainHeader}>Edit Event</h1>
                <form className={style.formData} onSubmit={handleSubmit}>
                    <div>
                        <label className={style.labelForm}>Edit Title:</label>
                        <input className={style.inputArea} type="text" value={title} onChange={handleTitleChange} />
                    </div>
                    <div>
                        <label className={style.labelForm}>Edit Summary:</label>
                        <textarea className={style.text} value={summary} onChange={handleSummaryChange} />
                    </div>
                    <div>
                        <label className={style.labelForm}>Edit Image URL:</label>
                        <input className={style.inputArea} type="text" value={imageURL} onChange={handleImageURLChange} />
                    </div>
                    <div className={style.actionBtn}>
                        <div>
                            <button type="submit">Edit</button>
                        </div>
                        <div>
                            <button type="submit" onClick={cancelEditingEvent}>Cancel</button>
                        </div>
                    </div>


                </form>
                <div className={style.previewContainer}>
                    <h2 className={style.preview}>Preview:</h2>
                    <h3 className={style.title}>{title}</h3>
                    <img className={style.image} src={imageURL} alt={title} />
                    <p className={style.paragraph}>{summary}</p>
                </div>
            </div>
        </>
    );
}