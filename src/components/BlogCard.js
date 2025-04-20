import React from 'react';

const BlogCard = ({ blog }) => {
  return (
    <div className="blog-card">
      <div className="blog-image">
        <div className="image-placeholder" style={{ backgroundColor: '#' + Math.floor(Math.random() * 16777215).toString(16) }}>
          <i className="fas fa-newspaper"></i>
        </div>
        <span className="blog-category">{blog.category}</span>
      </div>
      <div className="blog-content">
        <div className="blog-meta">
          <span className="blog-date">
            <i className="far fa-calendar-alt"></i> {blog.date}
          </span>
          <span className="blog-author">
            <i className="far fa-user"></i> {blog.author}
          </span>
        </div>
        <h3>{blog.title}</h3>
        <p>{blog.excerpt}</p>
        <a href="#" className="blog-link">
          Read More <i className="fas fa-arrow-right"></i>
        </a>
      </div>
      
      <style jsx>{`
        .blog-card {
          background-color: var(--white);
          border-radius: var(--border-radius-lg);
          overflow: hidden;
          box-shadow: var(--box-shadow);
          transition: var(--transition);
          height: 100%;
        }
        
        .blog-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 35px rgba(0, 68, 102, 0.15);
        }
        
        .blog-image {
          position: relative;
        }
        
        .image-placeholder {
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3rem;
          color: rgba(255, 255, 255, 0.5);
        }
        
        .blog-category {
          position: absolute;
          bottom: 15px;
          left: 15px;
          padding: 5px 15px;
          background-color: var(--primary);
          color: var(--white);
          border-radius: var(--border-radius-sm);
          font-size: 0.8rem;
          text-transform: capitalize;
        }
        
        .blog-content {
          padding: 1.5rem;
        }
        
        .blog-meta {
          display: flex;
          gap: 1rem;
          margin-bottom: 1rem;
          font-size: 0.85rem;
          color: var(--gray);
        }
        
        .blog-meta i {
          margin-right: 0.25rem;
        }
        
        .blog-content h3 {
          font-size: 1.25rem;
          margin-bottom: 1rem;
          line-height: 1.4;
        }
        
        .blog-content p {
          color: var(--gray);
          margin-bottom: 1.5rem;
          font-size: 0.95rem;
        }
        
        .blog-link {
          display: inline-flex;
          align-items: center;
          font-weight: 600;
          transition: var(--transition);
        }
        
        .blog-link i {
          margin-left: 0.5rem;
          transition: var(--transition);
        }
        
        .blog-link:hover {
          color: var(--primary-dark);
        }
        
        .blog-link:hover i {
          transform: translateX(5px);
        }
      `}</style>
    </div>
  );
};

export default BlogCard;
