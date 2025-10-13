import React from 'react';
import styles from '../css/newsstyles.module.css';


function NewsItemComponent({ newsItem, onEdit, onDelete }) {
    return (
        <div className={`${styles.card} card mb-4`} style={{ width: '100%' }}>
            <div className={`${styles.cardBody} card-body`}>
                <h5 className={`${styles.cardTitle} card-title`}>{newsItem.title}</h5>
                <h6 className={`${styles.cardSubtitle} card-subtitle mb-2 text-body-secondary`}>Posted on: {newsItem.date} by {newsItem.author}</h6>
                <p className={`${styles.cardText} card-text`}>{newsItem.content}</p>
                 {onEdit && (
                    <div className={`${styles.cardActions} d-flex gap-2 mt-3`}>
                        <button className="btn btn-warning btn-sm" onClick={() => onEdit(newsItem)}>Edit</button>
                        <button className="btn btn-danger btn-sm" onClick={() => onDelete(newsItem.id)}>Delete</button>
                    </div>
                 )}
        </div>
    </div>
    );
}

export default NewsItemComponent;