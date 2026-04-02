import { useSelector } from "react-redux";
import useHeader from "../../hooks/BasicHooks/useHeader";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {

    const { organization, renderName, handleLogout, handleExitOrg, showExitOrg } = useHeader();

    return (
        <div className="bg-[#1B211A] p-3 rounded-2xl border border-[#FFDAB3] shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

                <h1 className="ml-5 text-2xl text-[#FFDAB3] font-semibold uppercase"> {organization?.orgName || "Organization"} </h1>

                <div className="flex items-center gap-6">
                    {renderName && (
                        <h2 className="text-md font-medium text-[#FFDAB3] uppercase"> {renderName} </h2>
                    )}

                    {showExitOrg ? (
                        <button onClick={handleExitOrg} className="bg-yellow-600 hover:bg-yellow-700 text-white py-2 px-5 rounded-lg text-md font-semibold transition-colors uppercase duration-200"> Exit Org </button>
                    ) : (
                        <button onClick={handleLogout} className="bg-red-600 hover:bg-red-700 text-white py-2 px-5 rounded-lg text-md font-semibold transition-colors uppercase duration-200" > Logout </button>
                    )}

                </div>
            </div>
        </div>
    );
};

export default Header;