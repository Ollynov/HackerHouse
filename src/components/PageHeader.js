import React from 'react'
import PropTypes from 'prop-types'

import Image from './Image'
import Content from './Content'
import './PageHeader.css'
import BackgroundVideo from '../components/BackgroundVideo'


const PageHeader = ({
  title,
  subtitle,
  backgroundImage,
  backgroundVideo,
  videoTitle,
  large,
  className = ''
}) => {
  if (large) className += ' PageHeader-large'
  return (
    <div className={`PageHeader relative ${className}`}>
      {backgroundImage && (
        <Image
          background
          resolutions="large"
          src={backgroundImage}
          alt={title}
          size="cover"
        />
      )}
      {backgroundVideo && videoTitle && (
          <BackgroundVideo hero={true} videoTitle={videoTitle}>
            {backgroundVideo && <source src={backgroundVideo} type="video/mp4" />}
          </BackgroundVideo>

          /* <section className="BackgroundVideo-section section">
            <BackgroundVideo poster={videoPoster} videoTitle={videoTitle}>
              {video && <source src={video} type="video/mp4" />}
            </BackgroundVideo>
          </section> */
      )}
      {backgroundVideo && !videoTitle && (
          <BackgroundVideo>
            {backgroundVideo && <source src={backgroundVideo} type="video/mp4" />}
          </BackgroundVideo>
      )}
      {!backgroundVideo && (
        <div className="container relative">
          <h1 className="PageHeader--Title">{title}</h1>
          {subtitle && (
            <Content className="PageHeader--Subtitle" src={subtitle} />
          )}
        </div>
      )}
    </div>
  )
}



PageHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default PageHeader
