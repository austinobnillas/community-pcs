import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import './css/AddComputerForm.css';

const editComputerForm = (props) => {
    const {allPcs, setAllPcs} = props;
    const [errors, setErrors] = useState([]);
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
    const [accessoriesLink, setAccessoriesLink] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/computers/${id}`)
            .then((res) => {
                setBuildName(res.data.buildName);
                setDescription(res.data.description);
                setUsername(res.data.username);
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
                setCpuCoolerLink(res.data.powerSupplyLink);
                setAccessories(res.data.accessories);
                setAccessoriesLink(res.data.accessoriesLink);
            })
            .catch((err) => {console.log(err)})
    }, [id])

    const submitHandler = (e) => {
        e.preventDefault();
        axios.patch(`http://localhost:8000/api/computers/edit/${id}`, {
            buildName: buildName, 
            username: username,
            description: description,
            cpu: cpu,
            cpuLink: cpuLink,
            cpuCooler: cpuCooler,
            cpuCoolerLink: cpuCoolerLink,
            motherboard: motherboard,
            motherboardLink: motherboardLink,
            memory: memory,
            memoryLink: memoryLink,
            graphicsCard: graphicsCard,
            graphicsCardLink: graphicsCardLink,
            storage: storage,
            storageLink: storageLink,
            powerSupply: powerSupply,
            powerSupplyLink: powerSupplyLink,
            accessories: accessories,
            accessoriesLink: accessoriesLink
        }, {withCredentials: true})
            .then((res) => {
                const updatedPc = res.data;
                const updatedAllPcs = allPcs.map( pc => {
                    return pc._id === updatedPc._id ? updatedPc : pc;
                })
                setAllPcs(updatedAllPcs);
                navigate('/')
            })
            .catch((err) => {
                const loginError = err.response.data.msg;
                if (loginError) {
                    alert(loginError);
                }
                const errorResponse = err.response.data.errors;
                const errorArr = []
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);

                // console.log(err.response.data);
            })
    }

    return (
        <div className="formContainer">
            <h3 className="heading" >Update {buildName}</h3>
            {errors.map((err, index) => (
                    <p className="errors"key={index}>{err}</p>
                ))}
            <form className="form" onSubmit={submitHandler}>
                
                <div className="formLeft">
                    <div>
                        <label className="form-label" htmlFor="buildName">Build Name: </label>
                        <input className="form-control" value={buildName} type="text" name="buildName" onChange={(e) => setBuildName(e.target.value)}/>
                    </div>
                    <div>
                        <label className="form-label" htmlFor="description">Description: </label>
                        <textarea className="form-control" value={description} name="" id="" cols="30" rows="10" onChange={(e) => setDescription(e.target.value)}></textarea>
                    </div>
                </div>
                <div className="formMiddle">
                    <div>
                        <label className="form-label" htmlFor="cpu">CPU: </label>
                        <input className="form-control" value={cpu} type="text" name="cpu" onChange={(e) => setCpu(e.target.value)}/>
                        <input className="form-control" value={cpuLink} type="text" name="cpuLink" placeholder="Optional" onChange={(e) => setCpuLink(e.target.value)}/>
                    </div>
                    <div>
                        <label className="form-label" htmlFor="cpuCooler">CPU Cooler: </label>
                        <input className="form-control" value={cpuCooler} type="text" name="cpuCooler" onChange={(e) => setCpuCooler(e.target.value)}/>
                        <input className="form-control" value={cpuCoolerLink} type="text" name="cpuCoolerLink" placeholder="Optional" onChange={(e) => setCpuCoolerLink(e.target.value)}/>
                    </div>
                    <div>
                        <label className="form-label" htmlFor="motherboard">Motherboard: </label>
                        <input className="form-control" value={motherboard} type="text" name="motherboard" onChange={(e) => setMotherboard(e.target.value)}/>
                        <input className="form-control" value={motherboardLink} type="text" name="motherboardLink" placeholder="Optional" onChange={(e) => setMotherboardLink(e.target.value)}/>
                    </div>
                    <div>
                        <label className="form-label" htmlFor="memory">Memory/RAM: </label>
                        <input className="form-control" value={memory} type="text" name="memory" onChange={(e) => setMemory(e.target.value)}/>
                        <input className="form-control" value={memoryLink} type="text" name="memoryLink" placeholder="Optional" onChange={(e) => setMemoryLink(e.target.value)}/>
                    </div>
                </div>
                <div className="formLeft">
                    <div>
                        <label className="form-label" htmlFor="graphicsCard">Graphics Card: </label>
                        <input className="form-control" value={graphicsCard} type="text" name="graphicsCard" onChange={(e) => setGraphicsCard(e.target.value)}/>
                        <input className="form-control" value={graphicsCardLink} type="text" name="graphicsCardLink" placeholder="Optional" onChange={(e) => setGraphicsCardLink(e.target.value)}/>
                    </div>
                    <div>
                        <label className="form-label" htmlFor="storage">Storage: </label>
                        <input className="form-control" value={storage} type="text" name="storage" onChange={(e) => setStorage(e.target.value)}/>
                        <input className="form-control" value={storageLink} type="text" name="storageLink" placeholder="Optional" onChange={(e) => setStorageLink(e.target.value)}/>
                    </div>
                    <div>
                        <label className="form-label" htmlFor="powerSupply">Power Supply: </label>
                        <input className="form-control" value={powerSupply} type="text" name="powerSupply" onChange={(e) => setPowerSupply(e.target.value)} />
                        <input className="form-control" value={powerSupplyLink} type="text" name="powerSupplyLink" placeholder="Optional" onChange={(e) => setPowerSupplyLink(e.target.value)}/>
                    </div>
                    <div>
                        <label className="form-label" htmlFor="accessories">Accessories: </label>
                        <input className="form-control" value={accessories} type="text" name="accessories" placeholder="Optional" onChange={(e) => setAccessories(e.target.value)}/>
                        <input className="form-control" value={accessoriesLink} type="text" name="accessoriesLink" placeholder="Optional" onChange={(e) => setAccessoriesLink(e.target.value)}/>
                    </div>
                </div>
                <div className="button">
                    <button className="btn btn-primary">Update</button>
                </div>
            </form>
        </div>
    )
} 
export default editComputerForm;