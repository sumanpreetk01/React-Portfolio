import React from 'react';

const portfolioItems = [
  {
    title: 'Project 1',
    imageSrc: '/images/image1.jpg', 
    deployedLink: 'https://example.com/project1', 
    githubLink: 'https://github.com/yourusername/project1', 
  },
  {
    title: 'Project 2',
    imageSrc: '/images/image2.jpg', 
    deployedLink: 'https://example.com/project2', 
    githubLink: 'https://github.com/yourusername/project2', 
  },

];

function PortfolioPage() {
  return (
    <section>
      <h2>Portfolio</h2>
      <div className="portfolio-grid">
        {portfolioItems.map((item, index) => (
          <div key={index} className="portfolio-item">
            <img src={item.imageSrc} alt={item.title} />
            <h3>{item.title}</h3>
            <p>
              <a href={item.deployedLink} target="_blank" rel="noopener noreferrer">
                Deployed Application
              </a>
            </p>
            <p>
              <a href={item.githubLink} target="_blank" rel="noopener noreferrer">
                GitHub Repository
              </a>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PortfolioPage;
