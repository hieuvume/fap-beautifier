import { Link } from "react-router-dom";
import Toolbar from "../../_metronic/layout/components/toolbar/Toolbar";
import { useUserDetail } from "../hooks/useUserDetail";
import { FC, useState } from "react";

const UserDetail = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const {
    image,
    fullName,
    rollNumber,
    email,
    phone,
    balance,
    profileData,
    academicData,
    parentData,
    otherData,
  } = useUserDetail();

  return (
    <>
      <Toolbar title={"Student information"} breadcrum="Profile" />
      <div className="app-content flex-column-fluid">
        <div className="app-container  container-fluid ">
          <div className="card mb-5 mb-xl-10">
            <div className="card-body pt-9 pb-0">
              <div className="d-flex flex-wrap flex-sm-nowrap">
                <div className="me-7 mb-4">
                  <div className="symbol symbol-100px symbol-lg-160px symbol-fixed position-relative">
                    <img src={image ?? ""} alt="Student" />
                  </div>
                </div>
                <div className="flex-grow-1">
                  <div className="d-flex justify-content-between align-items-start flex-wrap mb-2">
                    <div className="d-flex flex-column">
                      <div className="d-flex align-items-center mb-2">
                        <span className="text-gray-900 text-hover-primary fs-2 fw-bold me-1">
                          {fullName}
                        </span>
                        <i className="ki-outline ki-verify fs-1 text-primary" />
                      </div>
                      <div className="d-flex flex-wrap fw-semibold fs-6 mb-4 pe-2">
                        <span className="d-flex align-items-center text-gray-500 text-hover-primary me-5 mb-2">
                          <i className="ki-outline ki-profile-circle fs-4 me-1" />{" "}
                          {rollNumber}
                        </span>
                        <span className="d-flex align-items-center text-gray-500 text-hover-primary me-5 mb-2">
                          <i className="ki-outline ki-geolocation fs-4 me-1" />{" "}
                          {phone}
                        </span>
                        <span className="d-flex align-items-center text-gray-500 text-hover-primary mb-2">
                          <i className="ki-outline ki-sms fs-4" /> {email}
                        </span>
                      </div>
                    </div>
                    <div className="d-flex my-4">
                      <span className="btn btn-sm btn-secondary me-3">
                        Balance: {balance}
                      </span>
                      <Link
                        to="/User/verProfile.aspx"
                        className="btn btn-sm btn-primary me-3"
                      >
                        Update Profile
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <ul className="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bold">
                <li className="nav-item mt-2">
                  <span
                    className={`nav-link text-active-primary ms-0 me-10 py-5 cursor-pointer ${
                      currentTab === 0 ? "active" : ""
                    }`}
                    onClick={() => setCurrentTab(0)}
                  >
                    Profile
                  </span>
                </li>
                <li className="nav-item mt-2">
                  <span
                    className={`nav-link text-active-primary ms-0 me-10 py-5 cursor-pointer ${
                      currentTab === 1 ? "active" : ""
                    }`}
                    onClick={() => setCurrentTab(1)}
                  >
                    Academic
                  </span>
                </li>
                <li className="nav-item mt-2">
                  <span
                    className={`nav-link text-active-primary ms-0 me-10 py-5 cursor-pointer ${
                      currentTab === 2 ? "active" : ""
                    }`}
                    onClick={() => setCurrentTab(2)}
                  >
                    Parent
                  </span>
                </li>
                <li className="nav-item mt-2">
                  <span
                    className={`nav-link text-active-primary ms-0 me-10 py-5 cursor-pointer ${
                      currentTab === 3 ? "active" : ""
                    }`}
                    onClick={() => setCurrentTab(3)}
                  >
                    Other
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <CardData
            show={currentTab === 0}
            title="Profile"
            data={profileData}
          />
          <CardData
            show={currentTab === 1}
            title="Academic"
            data={academicData}
          />
          <CardData show={currentTab === 2} title="Parent" data={parentData} />
          <CardData show={currentTab === 3} title="Other" data={otherData} />
        </div>
      </div>
    </>
  );
};

type Props = {
  show: boolean;
  title: string;
  data: Record<string, string>;
};

const CardData: FC<Props> = ({ show, title, data }) => {
  if (!show) return <></>;
  return (
    <div className="card mb-5 mb-xl-10" id="kt_profile_details_view">
      <div className="card-header cursor-pointer">
        <div className="card-title m-0">
          <h3 className="fw-bold m-0">{title}</h3>
        </div>
      </div>
      <div className="card-body p-9">
        {Object.entries(data).map(([key, value]) => (
          <div key={key} className="row mb-7">
            <label className="col-lg-4 fw-semibold text-muted">{key}</label>
            <div className="col-lg-8">
              <span className="fw-bold fs-6 text-gray-800">{value}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDetail;
