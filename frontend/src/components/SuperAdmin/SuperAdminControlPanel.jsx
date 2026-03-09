import SuperAdminAdminsControl from "./SuperAdminAdminsControl";
import SuperAdminEmployeesControl from "./SuperAdminEmployeesControl";
import SuperAdminOrgControl from "./SuperAdminOrgControl";

const SuperAdminControlPanel = () => {

  return (
    <div>
      <SuperAdminOrgControl />
      <SuperAdminAdminsControl />
      <SuperAdminEmployeesControl />
    </div>
  );
};

export default SuperAdminControlPanel;