import React, {useEffect} from 'react';
import styles from "./css/homepagestyle.module.css";

function useScrollAnimation() {
  useEffect(() => {
    const elements = document.querySelectorAll(`.${styles.about_text_animation}, .${styles.about_us_choose_animation}, .${styles.choose_section_animation}` );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default useScrollAnimation;