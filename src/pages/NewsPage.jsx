import React from 'react';
import FooterComponent from '../components/FooterComponent';
import UserNavbarComponent from '../components/UserNavbarComponent';
import NewsListComponent from '../components/NewsListComponent';
import styles from '../css/newsstyles.module.css';

function NewsPage({ news }){
    
    return(
        <>
        <UserNavbarComponent/>
        <section className={styles.newsSection}>
            <NewsListComponent
                news={news || []}
                onEdit={null}
                onDelete={null}
                />
        </section>

        <FooterComponent/>
        </>

    )
}
export default NewsPage;