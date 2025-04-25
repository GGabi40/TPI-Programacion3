import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

const GoToTop = () => {

    const handleScrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
          })
    }

  return (
    <button id='goTop' onClick={handleScrollTop}>
        <FontAwesomeIcon icon={faArrowUp} />
    </button>
  )
}

export default GoToTop