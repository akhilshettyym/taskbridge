import { Link, signupAlreadyRegistered, signupContainerDiv, signupCreateOrgBtn, signupCreateOrgDiv, signupDescDiv, signupFormClass, signupHeaderDiv, signupHeaderH1, signupInputClass, signupLabelClass, signupLinkToSignIn, signupMainDiv, signupMessagePTag, signupOrgAdminDets, signupOrgDets, signupOrgInfo, signupOrgLeftRight, signupTextareaClass } from '../../constants/imports'

import { useNavigate } from "react-router-dom";
import { generateSequentialId, setLocalStorage } from '../../utils/localStorage';
import { v4 as uuidv4 } from "uuid";

const SignUp = () => {

    const navigate = useNavigate();

    const handleCreateOrg = (e) => {
        e.preventDefault();

        const taskbridge = {
            organization: {
                uuid: `org-${uuidv4()}`,
                id: generateSequentialId("org"),
                name: e.target.orgName.value,
                category: e.target.orgCategory.value,
                description: e.target.orgDesc.value,
                createdAt: new Date().toLocaleDateString("en-GB"),
            },
            admin: {
                uuid: `admin-${uuidv4()}`,
                id: generateSequentialId("admin"),
                firstName: e.target.firstName.value,
                lastName: e.target.lastName.value,
                email: e.target.email.value,
                password: e.target.password.value,
            },
            employees: [],
        };

        setLocalStorage(taskbridge);
        navigate("/complete-org");
    };

    return (
        <div className={signupMainDiv}>

            <div className={signupHeaderDiv}>
                <h1 className={signupHeaderH1}> Create Your Organization </h1>
                <p className={signupMessagePTag}>
                    Register as an organization admin to manage employees and tasks
                </p>
            </div>

            <div className={signupContainerDiv}>
                <form onSubmit={handleCreateOrg} className={signupFormClass}>

                    <div className={signupOrgAdminDets}>
                        <h2 className={signupOrgDets}> Organization Admin Details </h2>
                        <Link to="/signin" className={signupLinkToSignIn}> Already have an account ? </Link>
                    </div>

                    {/* ADMIN LEFT */}
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

                    {/* ADMIN RIGHT */}
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

                    <div className={signupOrgInfo}>
                        <h2 className={signupOrgDets}> Organization Information </h2>
                    </div>

                    {/* ORG NAME */}
                    <div className={signupOrgLeftRight}>
                        <div>
                            <label className={signupLabelClass}> Organization Name </label>
                            <input name="orgName" type="text" placeholder="Enter organization name" className={signupInputClass} />
                        </div>
                    </div>

                    {/* ORG CATEGORY */}
                    <div className={signupOrgLeftRight}>
                        <div>
                            <label className={signupLabelClass}> Organization Category </label>
                            <input name="orgCategory" type="text" placeholder="IT, Marketing, Finance, R&D" className={signupInputClass} />
                        </div>
                    </div>

                    {/* DESCRIPTION */}
                    <div className={signupDescDiv}>
                        <label className={signupLabelClass}> Organization Description </label>
                        <textarea name="orgDesc" rows="5" placeholder="Briefly describe what your organization does" className={signupTextareaClass} />
                    </div>

                    {/* CTA */}
                    <div className={signupCreateOrgDiv}>
                        <button type="submit" className={signupCreateOrgBtn}> Create Organization </button>
                        <Link to="/signin" className={signupAlreadyRegistered}> Already registered ? Sign In </Link>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default SignUp;