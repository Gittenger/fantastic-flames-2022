import React from 'react'
import styles from './styles/ImageGrid.module.css'
import images from '../../assets/img/img-index.js'
import { SRLWrapper } from 'simple-react-lightbox'
// import Masonry from 'react-masonry-css'

const ImageGrid = ({ className }) => {
  const {
    productions: {
      ProductionsOne,
      ProductionsTwo,
      ProductionsThree,
      ProductionsFour,
      ProductionsFive,
    },
  } = images

  const localImages = [
    ProductionsOne,
    ProductionsTwo,
    ProductionsThree,
    ProductionsFour,
    ProductionsFive,
  ]

  return (
    <div className={`${className} ${styles.grid} flex justify-center`}>
      <SRLWrapper>
        {Array.from(Array(5)).map((el, i) => (
          <a key={i} href={localImages[i]}>
            <img src={localImages[i]} alt="" />
          </a>
        ))}
      </SRLWrapper>
    </div>
  )
}

export default ImageGrid
