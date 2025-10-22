import React from "react";
import NewsItemComponent from "./NewsItemComponent";
import styles from "../css/newsstyles.module.css";

function NewsListComponent({ news, onEdit, onDelete }) {
    return (

        
        <div className={styles.newsList}>
            <h2 className={`${styles.newsTitle} mb-4 text-center`}>Latest News</h2>
            {news.length === 0 ? (
                <div className={styles.noNews}>
                    <p className="text-muted">No News</p>
                </div>
            ) : (
                <div className="row g-4"> {/* grid */}
                    {news.map((item) => (
                        <div key={item.id} className="col-lg-6 col-md-12">
                            <NewsItemComponent
                            
                                newsItem={item}
                                onEdit={onEdit}
                                onDelete={onDelete}
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default NewsListComponent;