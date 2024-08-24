import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom' 

function ScrollTo(props) {
  const{pathname} = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  },[pathname])

  return null;
}

export default ScrollTo
