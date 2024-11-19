
import { FC } from 'react'

const Footer: FC = () => {
  return (
    <div id="kt_app_footer" className="app-footer">
      {/*begin::Footer container*/}
      <div className="app-container container-fluid d-flex flex-column flex-md-row flex-center flex-md-stack py-3">
        {/*begin::Copyright*/}
        <div className="text-gray-900 order-2 order-md-1">
          <span className="text-muted fw-semibold me-1">{new Date().getFullYear()} &copy;</span>
          <a
            href="https://www.facebook.com/CallMeHieuVu"
            className="text-gray-800 text-hover-primary"
          >
            Powered by HieuVu
          </a>
        </div>
        {/*end::Copyright*/}
        {/*begin::Menu*/}
        <ul className="menu menu-gray-600 menu-hover-primary fw-semibold order-1">
          <li className="menu-item">
            <a href="http://cms.fpt.edu.vn/" className="menu-link px-2" target="_blank" rel="noreferrer">CMS</a>
          </li>
          <li className="menu-item">
            <a href="https://library.fpt.edu.vn/" className="menu-link px-2" target="_blank" rel="noreferrer">Library</a>
          </li>
          <li className="menu-item">
            <a href="http://library.books24x7.com/" className="menu-link px-2" target="_blank" rel="noreferrer">Books24x7</a>
          </li>
        </ul>
        {/*end::Menu*/}
      </div>
      {/*end::Footer container*/}
    </div>
  )
}

export { Footer }
