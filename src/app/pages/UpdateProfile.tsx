import Toolbar from "../../_metronic/layout/components/toolbar/Toolbar";
import { useUpdateProfile } from "../hooks/useUpdateProfile";

const UpdateProfile = () => {
  const { formHtml, viewStateValue, viewStateGeneratorValue, eventValidationValue } = useUpdateProfile();

  return (
    <>
      <Toolbar title={"Update Profile"} breadcrum="Update Profile" />
      <div className="app-content flex-column-fluid">
        <div className="app-container container-fluid ">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Update Profile</h3>
            </div>
            <div className="card-body">
              <form method="post" action="./verProfile.aspx">
                <input type="hidden" name="__EVENTTARGET" id="__EVENTTARGET" value="ctl00$mainContent$btnLogin" />
                <input type="hidden" name="__EVENTARGUMENT" id="__EVENTARGUMENT" value="" />
                <input type="hidden" name="__LASTFOCUS" id="__LASTFOCUS" value="" />
                <input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" value={viewStateValue} />
                <input type="hidden" name="__VIEWSTATEGENERATOR" id="__VIEWSTATEGENERATOR" value={viewStateGeneratorValue} />
                <input type="hidden" name="__EVENTVALIDATION" id="__EVENTVALIDATION" value={eventValidationValue} />
                <input type="hidden" name="ctl00$mainContent$message" id="ctl00_mainContent_message" />
                <div dangerouslySetInnerHTML={{ __html: formHtml }} />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default UpdateProfile;
