import { Outlet, NavLink } from 'react-router-dom';

function Root() {
    return (
        <>
            <div className="sidebar">
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/weather">Weather</NavLink>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <NavLink to="/help">Help</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="detail">
                <Outlet />
            </div>
        </>
    );
}

export { Root };
