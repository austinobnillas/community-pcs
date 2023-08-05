import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './css/AddComputerForm.css';

const AddComputerForm = (props) => {
    const {allPcs, setAllPcs} = props;
    const [errors, setErrors] = useState([]);
    const [buildName, setBuildName] = useState('');
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

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:8000/api/addcomputer`, {
            buildName, 
            description,
            cpu,
            cpuLink,
            cpuCooler,
            cpuCoolerLink,
            motherboard,
            motherboardLink,
            memory,
            memoryLink,
            graphicsCard,
            graphicsCardLink,
            storage,
            storageLink,
            powerSupply,
            powerSupplyLink,
            accessories,
            accessoriesLink
        }, {withCredentials: true})
            .then((res) => {
                console.log(res.data);
                setAllPcs([...allPcs, res.data]);
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
            <h3>Add Your PC to the community</h3>
            {errors.map((err, index) => (
                    <p key="{index}">{err}</p>
                ))}
            <form className="form" onSubmit={submitHandler}>
                
                <div className="formLeft">
                    <div>
                        <label htmlFor="buildName">Build Name: </label>
                        <input type="text" name="buildName" onChange={(e) => setBuildName(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="description">Description: </label>
                        <textarea name="" id="" cols="30" rows="10" onChange={(e) => setDescription(e.target.value)}></textarea>
                    </div>
                </div>
                <div className="formMiddle">
                    <div>
                        <label htmlFor="cpu">CPU: </label>
                        <input type="text" name="cpu" onChange={(e) => setCpu(e.target.value)}/>
                        <input type="text" name="cpuLink" placeholder="Optional" onChange={(e) => setCpuLink(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="cpuCooler">CPU Cooler: </label>
                        <input type="text" name="cpuCooler" onChange={(e) => setCpuCooler(e.target.value)}/>
                        <input type="text" name="cpuCoolerLink" placeholder="Optional" onChange={(e) => setCpuCoolerLink(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="motherboard">Motherboard: </label>
                        <input type="text" name="motherboard" onChange={(e) => setMotherboard(e.target.value)}/>
                        <input type="text" name="motherboardLink" placeholder="Optional" onChange={(e) => setMotherboardLink(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="memory">Memory/RAM: </label>
                        <input type="text" name="memory" onChange={(e) => setMemory(e.target.value)}/>
                        <input type="text" name="memoryLink" placeholder="Optional" onChange={(e) => setMemoryLink(e.target.value)}/>
                    </div>
                </div>
                <div className="formLeft">
                    <div>
                        <label htmlFor="graphicsCard">Graphics Card: </label>
                        <input type="text" name="graphicsCard" onChange={(e) => setGraphicsCard(e.target.value)}/>
                        <input type="text" name="graphicsCardLink" placeholder="Optional" onChange={(e) => setGraphicsCard(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="storage">Storage: </label>
                        <input type="text" name="storage" onChange={(e) => setStorage(e.target.value)}/>
                        <input type="text" name="storageLink" placeholder="Optional" onChange={(e) => setStorageLink(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="powerSupply">Power Supply: </label>
                        <input type="text" name="powerSupply" onChange={(e) => setPowerSupply(e.target.value)} />
                        <input type="text" name="powerSupplyLink" placeholder="Optional" onChange={(e) => setPowerSupplyLink(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="accessories">Accessories: </label>
                        <input type="text" name="accessories" placeholder="Optional" onChange={(e) => setAccessories(e.target.value)}/>
                        <input type="text" name="accessoriesLink" placeholder="Optional" onChange={(e) => setAccessoriesLink(e.target.value)}/>
                    </div>
                </div>
                <button>Post</button>
            </form>
        </div>
    )
} 
export default AddComputerForm;