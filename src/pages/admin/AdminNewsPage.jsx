import { Container, Button } from 'react-bootstrap';
import styles from '../../css/adminstyles.module.css';
import AdminNavbarComponent from '../../components/AdminNavbarComponent';
import { useState } from 'react';
import NewsListComponent from '../../components/NewsListComponent'; 




function AdminNewsPage({news, setNews}) {
 const [isActive, setIsActive] = useState(false);
 const [showForm, setShowForm] = useState(false);
 const [editingItem, setEditingItem] = useState(null);
 const [formData, setFormData] = useState({ title: '', content: ''});

    const toggleSidebar = () => {
    setIsActive(isActive);

    };

    const handleAdd = (e) => {
      e.preventDefault();
      const newPost = {
        id: Date.now(),
        title: formData.title,
        content: formData.content,
        date: new Date().toLocaleDateString(),
        author: 'Admin'
      };
      setNews([...news, newPost]);
      setFormData({title: '', content: '' });
      setShowForm(false);
    };

    const handleEdit = (e) => {
    e.preventDefault();
    const updatedPost = {
      ...editingItem,  
      title: formData.title,
      content: formData.content
    };
    setNews(news.map(item => (item.id === editingItem.id ? updatedPost : item)));  // Replace in array
    setEditingItem(null);  
    setShowForm(false);  
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      setNews(news.filter(item => item.id !== id));  
    }
  };

  const startEdit = (item) => {
    setEditingItem(item);
    setFormData({ title: item.title, content: item.content });
    setShowForm(true);
  };

  const toggleForm = () => {
    setShowForm(!showForm);
    if (!showForm) {
      setEditingItem(null);
      setFormData({ title: '', content: '' });  
    }
  };

    return (
    <>
    <div className={styles.admin_page_section}>

      <AdminNavbarComponent isActive={isActive} />

      <Container>
          <h1>Edit News</h1>

          {/*add button*/}
          <Button variant="success" onClick={toggleForm} className={`${styles.addButton} mb-3`}>{showForm ? 'Cancel' : '+ Add New Post'}</Button>

          {/*form add/edit*/}
          {showForm && (
            <form onSubmit={editingItem ? handleEdit : handleAdd} className={styles.form}>
              <h3>{editingItem ? 'Edit Post' : 'Add New Post'}</h3>
              <div className={styles.formGroup}>
                <label>Title</label>
                <input
                  type="text"
                  placeholder="Enter post title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                  className={styles.input}
                />
              </div>
              <div className={styles.formGroup}>
                <label>Content</label>
                <textarea
                  placeholder="Enter post content"
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  rows={4}
                  required
                  className={styles.textarea}
                />
              </div>
              <Button type="submit" variant="primary" className={styles.submitButton}>
                {editingItem ? 'Update Post' : 'Add Post'}
              </Button>
            </form>
          )}

          
      </Container>

      <main style={{ marginTop: "100px", padding: "20px" }}>
        
        <NewsListComponent
        news={news || []}
        onEdit={startEdit}
        onDelete={handleDelete}/>
      </main>

    </div>
    </>
  );
}
export default AdminNewsPage;