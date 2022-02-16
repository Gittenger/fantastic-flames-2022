import React, { useEffect } from 'react'

import sal from 'sal.js'
import 'sal.js/dist/sal.css'
import styles from './styles/SlideIn.module.css'

const SlideInGrid = () => {
  useEffect(() => {
    sal({
      once: false,
    })
  }, [])

  return (
    <div className={`${styles.grid}`}>
      <div data-sal-duration="500" data-sal="slide-right"></div>
      <div data-sal-duration="500" data-sal="slide-left"></div>
      <div data-sal-duration="500" data-sal="slide-right"></div>
      <div data-sal-duration="500" data-sal="slide-left"></div>
    </div>
  )
}

export default SlideInGrid
