import React, { useState,useContext } from 'react';
import style from '../Create/Create.module.css';
import * as eventService from '../../../servises/eventService';
import UserContext from '../../../contexts/uresContext';
import { useNavigate } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [imageURL, setImageURL] = useState('');
    const navigate = useNavigate()

    const {accessToken} = useContext(UserContext)

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

        if (title == "" || summary == "" || imageURL == "") {
            return alert("All filds must be fill")
        };

        eventService.create({ title, summary, imageURL },accessToken);
        

        navigate("/catalog")



    };

    return (
        <>
            <div className={style.background}></div>
            <div className={style.container}>
                <h1 className={style.mainHeader}>Create Event</h1>
                <form className={style.formData} onSubmit={handleSubmit}>
                    <div>
                        <label className={style.labelForm}>Title:</label>
                        <input className={style.inputArea} type="text" value={title} onChange={handleTitleChange} />
                    </div>
                    <div>
                        <label className={style.labelForm}>Summary:</label>
                        <textarea className={style.text} value={summary} onChange={handleSummaryChange} />
                    </div>
                    <div>
                        <label className={style.labelForm}>Image URL:</label>
                        <input className={style.inputArea} type="text" value={imageURL} onChange={handleImageURLChange} />
                    </div>
                    <div>
                        <button type="submit">Create</button>
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
};

export default Create;
