import React, { useState } from 'react';
import BlogCard from './BlogCard';
import { blogs } from '../data/blogs';

const Blog = () => {
  const [filter, setFilter] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'technology', name: 'Technology' },
    { id: 'development', name: 'Development' },
    { id: 'design', name: 'Design' },
    { id: 'business', name: 'Business' }
  ];
  
  const filteredBlogs = filter === 'all' 
    ? blogs 
    : blogs.filter(blog => blog.category === filter);
  
  return (
    <div className="blog">
      <div className="container">
        <div className="section-title">
          <h2>Our Blog</h2>
          <p>Insights, updates, and knowledge from our tech experts</p>
        </div>
        
        <div className="blog-filter">
          {categories.map(category => (
            <button 
              key={category.id}
              className={`filter-btn ${filter === category.id ? 'active' : ''}`}
              onClick={() => setFilter(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="blog-featured">
          {filteredBlogs.length > 0 && (
            <div className="featured-post">
              <div className="featured-content">
                <span className="post-category">{filteredBlogs[0].category}</span>
                <h3>{filteredBlogs[0].title}</h3>
                <p>{filteredBlogs[0].excerpt}</p>
                <div className="post-meta">
                  <div className="post-author">
                    <div className="author-avatar" style={{ backgroundColor: '#' + Math.floor(Math.random() * 16777215).toString(16) }}>
                      {filteredBlogs[0].author.charAt(0)}
                    </div>
                    <span>{filteredBlogs[0].author}</span>
                  </div>
                  <span className="post-date">{filteredBlogs[0].date}</span>
                </div>
                <button className="btn btn-outline">Read More</button>
              </div>
              <div className="featured-image">
                <div className="image-placeholder">
                  <i className="fas fa-newspaper"></i>
                </div>
              </div>
            </div>
          )}
        </div>
        
        <div className="blog-grid">
          {filteredBlogs.slice(1).map((blog, index) => (
            <BlogCard key={index} blog={blog} />
          ))}
        </div>
        
        <div className="blog-newsletter">
          <div className="newsletter-content">
            <h3>Subscribe to Our Newsletter</h3>
            <p>Stay updated with our latest insights and news delivered straight to your inbox.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email address" required />
              <button type="submit" className="btn">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .blog {
          background-color: var(--gray-light);
          position: relative;
        }
        
        .blog-filter {
          display: flex;
          justify-content: center;
          margin-bottom: 3rem;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        
        .filter-btn {
          padding: 0.75rem 1.5rem;
          background-color: transparent;
          border: 1px solid var(--primary);
          color: var(--primary);
          border-radius: var(--border-radius-md);
          cursor: pointer;
          font-weight: 500;
          transition: var(--transition);
        }
        
        .filter-btn:hover, .filter-btn.active {
          background-color: var(--primary);
          color: var(--white);
        }
        
        .blog-featured {
          margin-bottom: 3rem;
        }
        
        .featured-post {
          display: flex;
          background-color: var(--white);
          border-radius: var(--border-radius-lg);
          overflow: hidden;
          box-shadow: var(--box-shadow);
        }
        
        .featured-content {
          padding: 3rem;
          flex: 1;
        }
        
        .post-category {
          display: inline-block;
          padding: 0.4rem 1rem;
          background-color: var(--primary-light);
          color: var(--white);
          border-radius: var(--border-radius-sm);
          margin-bottom: 1rem;
          font-size: 0.85rem;
          text-transform: capitalize;
        }
        
        .featured-content h3 {
          font-size: 1.8rem;
          margin-bottom: 1rem;
        }
        
        .post-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.5rem;
          color: var(--gray);
        }
        
        .post-author {
          display: flex;
          align-items: center;
        }
        
        .author-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 0.75rem;
          color: var(--white);
          font-weight: 600;
        }
        
        .featured-image {
          flex: 1;
          min-height: 400px;
          background-color: var(--primary-light);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .image-placeholder {
          font-size: 4rem;
          color: rgba(255, 255, 255, 0.3);
        }
        
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-bottom: 4rem;
        }
        
        .blog-newsletter {
          background: linear-gradient(135deg, var(--primary-dark), var(--primary));
          padding: 3rem;
          border-radius: var(--border-radius-lg);
          color: var(--white);
          text-align: center;
        }
        
        .newsletter-content {
          max-width: 600px;
          margin: 0 auto;
        }
        
        .newsletter-content h3 {
          color: var(--white);
          margin-bottom: 1rem;
        }
        
        .newsletter-form {
          display: flex;
          max-width: 500px;
          margin: 2rem auto 0;
          gap: 1rem;
        }
        
        .newsletter-form input {
          flex: 1;
          padding: 0.75rem 1rem;
          border: none;
          border-radius: var(--border-radius-md);
          font-size: 1rem;
        }
        
        .newsletter-form .btn {
          background-color: var(--accent);
          color: var(--primary-dark);
        }
        
        .newsletter-form .btn:hover {
          background-color: var(--white);
        }
        
        @media (max-width: 992px) {
          .blog-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .featured-post {
            flex-direction: column;
          }
          
          .featured-image {
            min-height: 300px;
          }
        }
        
        @media (max-width: 768px) {
          .blog-grid {
            grid-template-columns: 1fr;
          }
          
          .newsletter-form {
            flex-direction: column;
          }
          
          .featured-content {
            padding: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Blog;
