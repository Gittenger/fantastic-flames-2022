import React from 'react'
import styles from './styles/ImageGrid.module.css'
// import Masonry from 'react-masonry-css'

const ImageGrid = ({ className }) => (
  <div className={`${className} ${styles.grid}`}>
    {Array.from(Array(12)).map((el, i) => (
      <div className="w-full h-full" key={i}></div>
    ))}
  </div>
)

export default ImageGrid
