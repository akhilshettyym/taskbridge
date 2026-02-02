import { headerChildDiv, headerClassBtn, headerClassH1, headerClassSpan, headerLoadingDiv, headerMainDiv } from "../../constants/imports";

const Header = ({ data, handleLogout }) => {

    if (!data) {
        return <div className={headerLoadingDiv}>Loading...</div>
    }

    const renderName = data.firstname.replace(/\b\w/g, char => char.toUpperCase());

    return (
        <div className={headerMainDiv}>
            <div className={headerChildDiv}>
                <h1 className={headerClassH1}> Hello <span className={headerClassSpan}> {renderName || ""} 👋</span> </h1>
                <button onClick={handleLogout} className={headerClassBtn}>Logout</button>
            </div>
        </div>
    )
}

export default Header;