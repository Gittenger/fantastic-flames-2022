import React, { useEffect, useRef, forwardRef } from 'react'

import images from '../assets/img/img-index.js'
import { useTitle } from '../utils/hooks.js'
import CIndex from '../components/components.index.js'
import styles from './styles/Home.module.css'

const HomePageContent = () => {
  const {
    other: { HeroImg, HeroGif },
  } = images
  const { Button, Footer, NameTest, SlideInGrid } = CIndex
  useTitle('Home')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main
      className={`${styles.main} bg-gray-900/50 flex flex-col items-center justify-start pb-10 relative z-10`}
    >
      <div className="w-full flex flex-col justify-center items-center space-x-4 pt-8">
        <div
          className={`${styles.hero} w-full relative mb-44 mt-20 flex justify-center`}
        >
          <img className={`absolute`} src={HeroGif} alt="" />
        </div>
        <div className="mt-14 mb-32 w-full flex flex-col justify-start items-center">
          <h1 className="font-heading text-red-300 text-3xl mb-8 uppercase">
            Here's some rad heading text
          </h1>
          <p className="w-2/3 px-44 font-body text-xl mb-16">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
            totam molestiae enim pariatur voluptatum voluptate beatae quae
            labore aspernatur rem molestias, officiis illo ipsum, doloribus
            temporibus odio mollitia magnam perspiciatis.
          </p>
          <h1 className="font-heading text-red-300 text-3xl mb-8 uppercase">
            Here's more...Looks cool?
          </h1>
          <p className="w-2/3 px-44 font-body text-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
            totam molestiae enim pariatur voluptatum voluptate beatae quae
            labore aspernatur rem molestias, officiis illo ipsum, doloribus
            temporibus odio mollitia magnam perspiciatis.
          </p>
        </div>
        <SlideInGrid />
      </div>
    </main>
  )
}

export default HomePageContent
