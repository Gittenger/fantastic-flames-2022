import React from 'react'
import images from '../../assets/img/img-index'
import styles from './styles/Footer.module.css'

const {
  icons: { EmailImg, FacebookImg, InstagramImg },
} = images

const Footer = () => {
  const footerStyles = 'flex flex-col justify-start items-center'

  return (
    <footer className={`${styles.footer} ${footerStyles}`}>
      <ul className="flex justify-center items-center space-x-4 mt-5 mb-6">
        <li>
          <a href={`mailto:${process.env.EMAIL}`}>
            <EmailImg />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com"
          >
            <FacebookImg />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/"
          >
            <InstagramImg />
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
