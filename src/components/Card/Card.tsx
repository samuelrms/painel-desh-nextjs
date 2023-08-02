import React, { FC } from 'react'
import { CardProps } from './Card.types'
import { CardStyle } from '.'

export const Card: FC<CardProps> = ({...props}) => {
  return <CardStyle {...props} />
}
