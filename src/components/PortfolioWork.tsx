import React from "react"
import "../styles/portfolio.css"

interface PortfolioWorkProps {
  title: string
  dateCompleted: string
  description: string
  videoUrl?: string
  images?: string[]
  technologies?: string[]
  class?: string
  iFrameClassName?: string
}

const PortfolioWork: React.FC<PortfolioWorkProps> = ({
  title,
  dateCompleted,
  description,
  videoUrl,
  images = [],
  technologies = [],
  class: className,
  iFrameClassName,
}) => {
  return (
    <div className="portfolio-work">
      <h3 className="work-title">{title}</h3>
      <p className="work-date">{dateCompleted}</p>
      <div className={`work-content ${className || ""}`}>
        {videoUrl && (
          <div className="video-container">
            <iframe
              title={`${title} video`}
              className="youtube-video"
              src={videoUrl}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}

        {images.length > 0 && (
          <div className="image-gallery">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${title} screenshot ${index + 1}`}
                className="project-image"
              />
            ))}
          </div>
        )}

        <div className="project-details">
          <p className="project-description">{description}</p>
          {technologies.length > 0 && (
            <div className="tech-stack">
              {technologies.map((tech, index) => (
                <span key={index} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default PortfolioWork
