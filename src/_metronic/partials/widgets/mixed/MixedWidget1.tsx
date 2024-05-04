
import { FC } from 'react'
import {Dropdown1} from '../../content/dropdown/Dropdown1'
import {KTIcon} from '../../../helpers'

type Props = {
  className: string
  color: string
}

const MixedWidget1: FC<Props> = ({className, color}) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Body */}
      <div className='card-body p-0'>
        {/* begin::Header */}
        <div className={`px-9 pt-7 card-rounded h-275px w-100 bg-${color}`}>
          {/* begin::Heading */}
          <div className='d-flex flex-stack'>
            <h3 className='m-0 text-white fw-bold fs-3'>Sales Summary</h3>
            <div className='ms-1'>
              {/* begin::Menu */}
              <button
                type='button'
                className={`btn btn-sm btn-icon btn-color-white btn-active-white btn-active-color-${color} border-0 me-n3`}
                data-kt-menu-trigger='click'
                data-kt-menu-placement='bottom-end'
                data-kt-menu-flip='top-end'
              >
                <KTIcon iconName='category' className='fs-2' />
              </button>
              <Dropdown1 />
              {/* end::Menu */}
            </div>
          </div>
          {/* end::Heading */}
          {/* begin::Balance */}
          <div className='d-flex text-center flex-column text-white pt-8'>
            <span className='fw-semibold fs-7'>You Balance</span>
            <span className='fw-bold fs-2x pt-1'>$37,562.00</span>
          </div>
          {/* end::Balance */}
        </div>
        {/* end::Header */}
        {/* begin::Items */}
        <div
          className='shadow-xs card-rounded mx-9 mb-9 px-6 py-9 position-relative z-index-1 bg-body'
          style={{marginTop: '-100px'}}
        >
          {/* begin::Item */}
          <div className='d-flex align-items-center mb-6'>
            {/* begin::Symbol */}
            <div className='symbol symbol-45px w-40px me-5'>
              <span className='symbol-label bg-lighten'>
                <KTIcon iconName='compass' className='fs-1' />
              </span>
            </div>
            {/* end::Symbol */}
            {/* begin::Description */}
            <div className='d-flex align-items-center flex-wrap w-100'>
              {/* begin::Title */}
              <div className='mb-1 pe-3 flex-grow-1'>
                <a href='#' className='fs-5 text-gray-800 text-hover-primary fw-bold'>
                  Sales
                </a>
                <div className='text-gray-500 fw-semibold fs-7'>100 Regions</div>
              </div>
              {/* end::Title */}
              {/* begin::Label */}
              <div className='d-flex align-items-center'>
                <div className='fw-bold fs-5 text-gray-800 pe-1'>$2,5b</div>
                <KTIcon iconName='arrow-up' className='fs-5 text-success ms-1' />
              </div>
              {/* end::Label */}
            </div>
            {/* end::Description */}
          </div>
          {/* end::Item */}
          {/* begin::Item */}
          <div className='d-flex align-items-center mb-6'>
            {/* begin::Symbol */}
            <div className='symbol symbol-45px w-40px me-5'>
              <span className='symbol-label bg-lighten'>
                <KTIcon iconName='category' className='fs-1' />
              </span>
            </div>
            {/* end::Symbol */}
            {/* begin::Description */}
            <div className='d-flex align-items-center flex-wrap w-100'>
              {/* begin::Title */}
              <div className='mb-1 pe-3 flex-grow-1'>
                <a href='#' className='fs-5 text-gray-800 text-hover-primary fw-bold'>
                  Revenue
                </a>
                <div className='text-gray-500 fw-semibold fs-7'>Quarter 2/3</div>
              </div>
              {/* end::Title */}
              {/* begin::Label */}
              <div className='d-flex align-items-center'>
                <div className='fw-bold fs-5 text-gray-800 pe-1'>$1,7b</div>
                <KTIcon iconName='arrow-down' className='fs-5 text-danger ms-1' />
              </div>
              {/* end::Label */}
            </div>
            {/* end::Description */}
          </div>
          {/* end::Item */}
          {/* begin::Item */}
          <div className='d-flex align-items-center mb-6'>
            {/* begin::Symbol */}
            <div className='symbol symbol-45px w-40px me-5'>
              <span className='symbol-label bg-lighten'>
                <KTIcon iconName='phone' className='fs-1' />
              </span>
            </div>
            {/* end::Symbol */}
            {/* begin::Description */}
            <div className='d-flex align-items-center flex-wrap w-100'>
              {/* begin::Title */}
              <div className='mb-1 pe-3 flex-grow-1'>
                <a href='#' className='fs-5 text-gray-800 text-hover-primary fw-bold'>
                  Growth
                </a>
                <div className='text-gray-500 fw-semibold fs-7'>80% Rate</div>
              </div>
              {/* end::Title */}
              {/* begin::Label */}
              <div className='d-flex align-items-center'>
                <div className='fw-bold fs-5 text-gray-800 pe-1'>$8,8m</div>
                <KTIcon iconName='arrow-up' className='fs-5 text-success ms-1' />
              </div>
              {/* end::Label */}
            </div>
            {/* end::Description */}
          </div>
          {/* end::Item */}
          {/* begin::Item */}
          <div className='d-flex align-items-center'>
            {/* begin::Symbol */}
            <div className='symbol symbol-45px w-40px me-5'>
              <span className='symbol-label bg-lighten'>
                <KTIcon iconName='document' className='fs-1' />
              </span>
            </div>
            {/* end::Symbol */}
            {/* begin::Description */}
            <div className='d-flex align-items-center flex-wrap w-100'>
              {/* begin::Title */}
              <div className='mb-1 pe-3 flex-grow-1'>
                <a href='#' className='fs-5 text-gray-800 text-hover-primary fw-bold'>
                  Dispute
                </a>
                <div className='text-gray-500 fw-semibold fs-7'>3090 Refunds</div>
              </div>
              {/* end::Title */}
              {/* begin::Label */}
              <div className='d-flex align-items-center'>
                <div className='fw-bold fs-5 text-gray-800 pe-1'>$270m</div>
                <KTIcon iconName='arrow-down' className='fs-5 text-danger ms-1' />
              </div>
              {/* end::Label */}
            </div>
            {/* end::Description */}
          </div>
          {/* end::Item */}
        </div>
        {/* end::Items */}
      </div>
      {/* end::Body */}
    </div>
  )
}

export {MixedWidget1}
