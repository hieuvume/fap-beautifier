import { FC } from 'react'
import { useLocation } from 'react-router'
import { checkIsActive } from '../../../helpers'

type Props = {
  to: string
  title: string
  icon?: string
}

const AsideMenuItem: FC<Props> = ({
  to,
  title,
  icon,
}) => {
  const { pathname } = useLocation()
  const isActive = checkIsActive(pathname, to)

  return (
    <>
      <a
        href={to}
        className={`btn btn-sm d-flex flex-stack border ${isActive ? 'border-300 bg-gray-100i' : 'border-transparent'} btn-color-gray-700 btn-active-color-gray-900 px-3 mb-2`}
      >
        <span className="d-flex align-item-center">
          {icon && (
            <i className={`ki-outline fs-4 me-1 ${icon}`} />
          )}
          {title}
        </span>
        {isActive && (<i className="ki-outline ki-check fs-4 text-gray-500 me-n2" />)}
      </a>
    </>
  )
}

export { AsideMenuItem }
