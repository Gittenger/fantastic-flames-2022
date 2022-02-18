import React, { useState, useEffect, useCallback } from 'react'

import LocalImages from '../assets/img/img-index.js'
import { useTitle } from '../utils/hooks.js'
import CIndex from '../components/components.index.js'
import styles from './styles/Productions.module.css'

const Productions = () => {
  const [images, setImages] = useState([])
  const { StyledCarousel, ImageGrid } = CIndex
  useTitle('Gallery')

  const {
    other: { ProductionsGif },
    gallery: {
      GalleryOne,
      GalleryTwo,
      GalleryThree,
      GalleryFour,
      GalleryFive,
      GallerySix,
      GallerySeven,
      GalleryEight,
      GalleryNine,
      GalleryTen,
      GalleryEleven,
    },
  } = LocalImages

  useEffect(() => {
    // Using Api...
    // fetch(`${process.env.API}/images`, {
    //   method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // })
    //   .then((res) => res.json())
    //   .then(({ images }) => {
    //     setImages(
    //       images.map((img) => ({
    //         src: `${process.env.PUBLIC}/img/${img.name}`,
    //       }))
    //     )
    //   })
    //   .catch((err) => console.error(err))
    // Using Local files for demo
    setImages(
      [
        GalleryOne,
        GalleryTwo,
        GalleryThree,
        GalleryFour,
        GalleryFive,
        GallerySix,
        GallerySeven,
        GalleryEight,
        GalleryNine,
        GalleryTen,
        GalleryEleven,
      ].map((img) => ({
        src: img,
      }))
    )
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="flex flex-col bg-gray-900/50 items-center justify-start pb-10 pt-20 relative z-10">
      <div
        className={`${styles.hero} relative mb-44 mt-20 flex justify-center`}
      >
        <img className={`absolute`} src={ProductionsGif} alt="" />
      </div>
      <ImageGrid className="mb-40" />
      <StyledCarousel images={images} />
    </main>
  )
}

export default Productions
