
import clsx from 'clsx'
import React, {FC} from 'react'
import {KTIcon} from '../../../helpers'
import {useLayout} from '../../core'
import {DefaultTitle} from '../header/page-title/DefaultTitle'

const Toolbar1: FC = () => {
  const {classes} = useLayout()

  return (
    <div className='app-toolbar py-3 py-lg-6' id='kt_app_toolbar'>
      {/* begin::Container */}
      <div
        id='kt_app_toolbar_container'
        className={clsx(classes.toolbarContainer.join(' '), 'app-container d-flex flex-stack')}
      >
        <DefaultTitle />

        {/* begin::Actions */}
        <div className='d-flex align-items-center py-1'>
          {/* begin::Wrapper */}
          <div className='me-4'>
            {/* begin::Menu */}
            <a
              href='#'
              className='btn btn-sm btn-flex btn-light btn-active-primary fw-bolder'
              data-kt-menu-trigger='click'
              data-kt-menu-placement='bottom-end'
              data-kt-menu-flip='top-end'
            >
              <KTIcon iconName='filter' className='fs-5 text-gray-500 me-1' />
              Filter
            </a>

            {/* end::Menu */}
          </div>
          {/* end::Wrapper */}

          {/* begin::Button */}

          <a
            href='#'
            className='btn btn-sm btn-primary'
            data-bs-toggle='modal'
            data-bs-target='#kt_modal_create_app'
            id='kt_toolbar_primary_button'
          >
            Create
          </a>
          {/* end::Button */}
        </div>
        {/* end::Actions */}
      </div>
      {/* end::Container */}
    </div>
  )
}

export {Toolbar1}
