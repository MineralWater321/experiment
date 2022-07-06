
function Navbar() {
    return (
        <div className="navbar bg-base-300 md:px-16">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">Newbie Tech Blog</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li><a>Blog</a></li>
                    <li><a>About</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar