import { Container } from 'react-bootstrap';
import styles from '../../css/adminstyles.module.css';
import AdminNavbarComponent from '../../components/AdminNavbarComponent';
import { useState } from 'react';




function AdminNewsPage(){
 const [isActive, setIsActive] = useState(false);

    const toggleSidebar = () => {
    setIsActive(isActive);

    };

    return (
    <>
    <div className={styles.admin_page_section}>

      <AdminNavbarComponent isActive={isActive} />

      <Container>
          <h1>Edit News</h1>
      </Container>

      <main style={{ marginTop: "100px", padding: "20px" }}>
        
      </main>

    </div>
    </>
  );
}
export default AdminNewsPage;