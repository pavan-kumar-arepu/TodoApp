import { View, Text } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types'
import { getFontFamily } from '../../assets/fonts/helper'
import style from './style'

const Header = props => {

  const styleToApply = () => {
    switch(props.type) {
      case 1:
        return style.title1
      case 2: 
        return style.title2
      case 3: 
        return style.title3
      default:
        return style.title1
    }
  }
  return (
    <View>
      <Text style={styleToApply()}>{props.title}</Text>
    </View>
  )
}

Header.default = {
    title: '',
    type: 1
}
Header.prototype = {
    title: PropTypes.string,
    type: PropTypes.number
}

export default Header;