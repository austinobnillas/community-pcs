import React from "react";
import { Link } from 'react-router-dom';
import './css/Sidebar.css'

const Sidebar = (props) => {
    const {allPcs, setAllPcs} = props;
    return (
        <div className="sidebarContainer">
            <div className="sidebarContent">
                <div className="sidebarHeader">
                    <Link to='/'><h2>Home</h2></Link>
                    
                </div>
                <div className="sidebarHeader">
                    <h4 className="">Builds:</h4>
                    <Link className="btn btn-light" to='/add'>+</Link>
                </div>
                
                <ul className="listPcs list-group">
                    {allPcs.map((pc, index) => (
                        <Link to={`/computer/${pc._id}`} className="buildNameSidebar"key={index}>
                            <li className="listContents" >
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