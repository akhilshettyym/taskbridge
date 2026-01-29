const Header = ({ data }) => {
    if (!data) {
        return <div className="text-white">Loading...</div>
    }

    const handleLogout = () => {
        localStorage.setItem("loggedInUser", "");
        window.location.reload();
    }

    const renderName = data.firstname.replace(/\b\w/g, char => char.toUpperCase());

    return (
        <>
        <div className="bg-[#1B211A] p-3 rounded-xl border border-[#FFDAB3]">
            <div className="flex items-end justify-between">
                <h1 className="text-2xl font-medium"> Hello <span className="text-2xl font-semibold"> { renderName || ""} 👋</span> </h1>
                <button onClick={handleLogout} className="bg-red-600 text-white py-1 px-4 rounded-lg text-lg font-medium">Logout</button>
            </div>
        </div>
        </>
    )
}

export default Header;