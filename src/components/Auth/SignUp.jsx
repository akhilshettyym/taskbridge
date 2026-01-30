import { Link, inputClass, labelClass, textareaClass, orgDets, createOrgBtn, orgLeftRight, linkToSignIn, orgInfo, alreadyRegistered, mainDiv, headerDiv, headerH1, messagePTag, containerDiv, formClass, orgAdminDets, descDiv, createOrgDiv } from '../../constants/imports'

const SignUp = () => {

    return (

        <div className={mainDiv}>

            <div className={headerDiv}>
                <h1 className={headerH1}> Create Your Organization </h1>
                <p className={messagePTag}> Register as an organization admin to manage employees and tasks </p>
            </div>

            <div className={containerDiv}>
                <form className={formClass}>
                    <div className={orgAdminDets}>
                        <h2 className={orgDets}> Organization Admin Details </h2>
                        <Link to="/signin" className={linkToSignIn}> Already have an account ? </Link>
                    </div>

                    {/* LEFT */}
                    <div className={orgLeftRight}>
                        <div>
                            <label className={labelClass}> First Name </label>
                            <input type="text" placeholder="Enter your first name" className={inputClass} />
                        </div>

                        <div>
                            <label className={labelClass}> Email Address </label>
                            <input type="email" placeholder="Enter your email" className={inputClass} />
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className={orgLeftRight}>
                        <div>
                            <label className={labelClass}> Last Name </label>
                            <input type="text" placeholder="Enter your last name" className={inputClass} />
                        </div>

                        <div>
                            <label className={labelClass}> Password </label>
                            <input type="password" placeholder="Create a strong password" className={inputClass} />
                        </div>
                    </div>

                    <div className={orgInfo}>
                        <h2 className={orgDets}> Organization Information </h2>
                    </div>

                    {/* ORG LEFT */}
                    <div className={orgLeftRight}>
                        <div>
                            <label className={labelClass}> Organization Name </label>
                            <input type="text" placeholder="Enter organization name" className={inputClass} />
                        </div>
                    </div>

                    {/* ORG RIGHT */}
                    <div className={orgLeftRight}>
                        <div>
                            <label className={labelClass}> Organization Category </label>
                            <input type="text" placeholder="IT, Marketing, Finance, R&D" className={inputClass} />
                        </div>
                    </div>

                    {/* DESCRIPTION */}
                    <div className={descDiv}>
                        <label className={labelClass}> Organization Description </label>
                        <textarea rows="5" placeholder="Briefly describe what your organization does" className={textareaClass} />
                    </div>

                    {/* CTA */}
                    <div className={createOrgDiv}>
                        <button className={createOrgBtn}> Create Organization </button>
                        <Link to="/signin" className={alreadyRegistered}> Already registered ? Sign In </Link>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default SignUp;