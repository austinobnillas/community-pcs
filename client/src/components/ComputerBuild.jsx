import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import './css/ComputerBuild.css'

const ComputerBuild = (props) => {
    const {allPcs, setAllPcs} = props;
    const {id} = useParams();
    const [_id, set_Id] = useState('')
    const [buildName, setBuildName] = useState('');
    const [username, setUsername] = useState('');
    const [description, setDescription] = useState('');
    const [cpu, setCpu] = useState('');
    const [cpuLink, setCpuLink] = useState('');
    const [cpuCooler, setCpuCooler] = useState('');
    const [cpuCoolerLink, setCpuCoolerLink] = useState('');
    const [motherboard, setMotherboard] = useState('');
    const [motherboardLink, setMotherboardLink] = useState('');
    const [memory, setMemory] = useState('');
    const [memoryLink, setMemoryLink] = useState('');
    const [graphicsCard, setGraphicsCard] = useState('');
    const [graphicsCardLink, setGraphicsCardLink] = useState('');
    const [storage, setStorage] = useState('');
    const [storageLink, setStorageLink] = useState('');
    const [powerSupply, setPowerSupply] = useState('');
    const [powerSupplyLink, setPowerSupplyLink] = useState('');
    const [accessories, setAccessories] = useState('');
    const [accessoriesLink, setAccessoriesLink] = useState();
    const navigate = useNavigate();


    useEffect(() => {
        axios.get(`http://localhost:8000/api/computers/${id}`)
            .then((res) => {
                set_Id(res.data._id);
                setBuildName(res.data.buildName);
                setUsername(res.data.username);
                setDescription(res.data.description);
                setCpu(res.data.cpu);
                setCpuLink(res.data.cpuLink);
                setCpuCooler(res.data.cpuCooler);
                setCpuCoolerLink(res.data.cpuCoolerLink);
                setMotherboard(res.data.motherboard);
                setMotherboardLink(res.data.motherboardLink);
                setMemory(res.data.memory);
                setMemoryLink(res.data.motherboardLink);
                setGraphicsCard(res.data.graphicsCard);
                setGraphicsCardLink(res.data.graphicsCardLink);
                setStorage(res.data.storage);
                setStorageLink(res.data.storageLink);
                setPowerSupply(res.data.powerSupply);
                setPowerSupplyLink(res.data.powerSupplyLink);
                setAccessories(res.data.accessories);
                setAccessoriesLink(res.data.accessoriesLink);

                console.log(res.data)
            })
            .catch((err) => {console.log(err)})
    }, [id])

    const deleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/computers/delete/${id}`, {withCredentials: true})
            .then((res) => {
                console.log(res.data);
                const newPcsList = allPcs.filter((pc, index) => pc._id !== id)
                setAllPcs(newPcsList);
                navigate('/');
            })
            .catch((err) => {
                const loginError = err.response.data.msg;
                alert(loginError);
            }
            )
    }
    return (
        <div className="buildContainer">
            <div className="buildTop">
                <h1>{buildName}</h1>
                <div>
                    <button> <Link to={`/edit/${id}`}>Edit</Link></button>
                    <button onClick={() => deleteHandler(_id)}>Delete</button>
                </div>
                
            </div>
            <div className="buildDescription">
                <div className="descriptionLeft">
                    <p>Description: {description}</p>
                    <p>posted by: {username}</p>
                </div>
                <div className="descriptionRight">
                    <img src="" alt="Imageofpc" />
                </div>
            </div>
            <div className="buildBottom">
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th>Part:</th>
                            <th>Part Name:</th>
                            <th>Product Link:</th>
                        </tr> 
                    </thead>
                    <tbody>
                        <tr>
                            <th>CPU:</th>
                            <td>{cpu}</td>
                            <td>
                                <a href={cpuLink} target="_blank">Link to {cpu}</a>
                            </td>
                        </tr>
                        <tr>
                            <th>CPU Cooler:</th>
                            <td>{cpuCooler}</td>
                            <td>
                                <a href={cpuCoolerLink} target="_blank">Link to {cpuCooler}</a>
                            </td>
                        </tr>
                        <tr>
                            <th>Motherboard:</th>
                            <td>{motherboard}</td>
                            <td>
                                <a href={motherboardLink} target="_blank">Link to {motherboard}</a>
                            </td>
                        </tr>
                        <tr>
                            <th>Memory/RAM:</th>
                            <td>{memory}</td>
                            <td>
                                <a href={memoryLink} target="_blank">Link to {memory}</a>
                            </td>
                        </tr>
                        <tr>
                            <th>Graphics Card:</th>
                            <td>{graphicsCard}</td>
                            <td>
                                <a href={graphicsCardLink} target="_blank">Link to {graphicsCard}</a>
                            </td>
                        </tr>
                        <tr>
                            <th>Storage:</th>
                            <td>{storage}</td>
                            <td>
                                <a href={storageLink} target="_blank">Link to {storage}</a>
                            </td>
                        </tr>
                        <tr>
                            <th>Power Supply:</th>
                            <td>{powerSupply}</td>
                            <td>
                                <a href={powerSupplyLink} target="_blank">Link to {powerSupply}</a>
                            </td>
                        </tr>
                        <tr>
                            <th>Accessories/Other:</th>
                            <td>{accessories}</td>
                            <td>
                                <a href={accessoriesLink} target="_blank">Link to {accessories}</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
        </div>
    )
}
export default ComputerBuild;