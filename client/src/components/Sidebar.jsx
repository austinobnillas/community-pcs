import React from "react";
import { Link } from 'react-router-dom';
import './css/Sidebar.css'

const Sidebar = (props) => {
    const {allPcs, setAllPcs} = props;
    return (
        <div className="sidebarContainer">
            <div className="sidebarContent">
                <div className="sidebarHeader">
                    <Link to='/'><h3>Home</h3></Link>
                    <Link to='/add'>+</Link>
                </div>
                <h4>Builds</h4>
                <ul className="listPcs list-group">
                    {allPcs.map((pc, index) => (
                        <Link to={`/computer/${pc._id}`} className="buildNameSidebar">
                            <li className="listContents">
                                <h5>{pc.buildName}</h5>
                                <p className="name">created by: {pc.username}</p>
                            </li>
                        </Link>
                    ))}
                </ul>
                
            </div>
        </div>
    )
}
export default Sidebar;