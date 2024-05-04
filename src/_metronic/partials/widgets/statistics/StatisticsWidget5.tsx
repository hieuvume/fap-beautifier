
import React from 'react'
import {KTIcon} from '../../../helpers'

type Props = {
  className: string
  color: string
  svgIcon: string
  iconColor: string
  title: string
  titleColor?: string
  description: string
  descriptionColor?: string
}

const StatisticsWidget5: React.FC<Props> = ({
  className,
  color,
  svgIcon,
  iconColor,
  title,
  titleColor,
  description,
  descriptionColor,
}) => {
  return (
    <a href='#' className={`card bg-${color} hoverable ${className}`}>
      <div className='card-body'>
        <KTIcon iconName={svgIcon} className={`text-${iconColor} fs-3x ms-n1`} />

        <div className={`text-${titleColor} fw-bold fs-2 mb-2 mt-5`}>{title}</div>

        <div className={`fw-semibold text-${descriptionColor}`}>{description}</div>
      </div>
    </a>
  )
}

export {StatisticsWidget5}
