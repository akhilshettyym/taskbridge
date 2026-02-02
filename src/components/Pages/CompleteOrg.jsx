import { signupContainerDiv, signupCreateOrgBtn, signupCreateOrgDiv, signupFormClass, signupHeaderDiv, signupHeaderH1, signupInputClass, signupLabelClass, signupMainDiv, signupMessagePTag, signupOrgAdminDets, signupOrgDets, signupOrgLeftRight } from '../../constants/imports';

import { generateSequentialId, getLocalStorage, setLocalStorage } from "../../utils/localStorage";
import { useState } from "react";
import AddEmployees from './AddEmployees';
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const CompleteOrg = () => {

  const navigate = useNavigate();

  const [employees, setEmployees] = useState(getLocalStorage()?.employees || []);
  const adminOrgNull = getLocalStorage();

  const handleAddEmployee = (e) => {

    if (!(adminOrgNull?.admin) || (!adminOrgNull?.organization)) {
      alert("You need to set up an organization first.");
      navigate("/signup");
      return null;
    }

    e.preventDefault();

    const newEmployee = {
      uuid: `emp-${uuidv4()}`,
      id: generateSequentialId("emp"),
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      password: e.target.password.value,
      position: e.target.position.value,
      dob: e.target.dob.value,
      taskNumbers: { active: 0, newTask: 0, completed: 0, failed: 0 },
      tasks: []
    };

    const taskbridge = getLocalStorage();
    taskbridge.employees.push(newEmployee);

    setLocalStorage(taskbridge);
    setEmployees([...taskbridge.employees]);

    e.target.reset();
  };

  return (
    <>
      <div className={signupMainDiv}>
        <div className={signupHeaderDiv}>
          <h1 className={signupHeaderH1}> Complete Your Organization </h1>
          <p className={signupMessagePTag}> Register employees to the Org. </p>
        </div>

        <div className={signupContainerDiv}>
          <form onSubmit={handleAddEmployee} className={signupFormClass}>

            <div className={signupOrgAdminDets}>
              <h2 className={signupOrgDets}> Add Employee Details </h2>
            </div>

            {/* LEFT */}
            <div className={signupOrgLeftRight}>
              <div>
                <label className={signupLabelClass}> First Name </label>
                <input name="firstName" type="text" placeholder="Enter your first name" className={signupInputClass} />
              </div>

              <div>
                <label className={signupLabelClass}> Email Address </label>
                <input name="email" type="email" placeholder="Enter your email" className={signupInputClass} />
              </div>
            </div>

            {/* RIGHT */}
            <div className={signupOrgLeftRight}>
              <div>
                <label className={signupLabelClass}> Last Name </label>
                <input name="lastName" type="text" placeholder="Enter your last name" className={signupInputClass} />
              </div>

              <div>
                <label className={signupLabelClass}> Password </label>
                <input name="password" type="password" placeholder="Create a strong password" className={signupInputClass} />
              </div>
            </div>

            {/* POSITION */}
            <div className={signupOrgLeftRight}>
              <div>
                <label className={signupLabelClass}> Employee Position </label>
                <input name="position" type="text" placeholder="Trainee, Jr., Sr. etc." className={signupInputClass} />
              </div>
            </div>

            <div className={signupOrgLeftRight}>
              <div>
                <label className={signupLabelClass}> Date Of Birth </label>
                <input name="dob" type="text" placeholder="DD/MM/YYYY" className={signupInputClass} />
              </div>
            </div>

            {/* CTA */}
            {!adminOrgNull && (
              <div className={signupCreateOrgDiv}>
              <button type="submit" className={signupCreateOrgBtn}> Add Employee </button>
            </div>
            )}

          </form>
        </div>

        <AddEmployees employees={employees} />

        {!employees && (
          <div className={signupCreateOrgDiv}>
            <button type="submit" className={signupCreateOrgBtn}> Complete Org. </button>
          </div>
        )}


      </div>
    </>
  );
};

export default CompleteOrg;