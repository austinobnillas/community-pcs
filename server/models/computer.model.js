const mongoose = require("mongoose");

const ComputerSchema = new mongoose.Schema({
    buildName: {
        type: String,
        required: [true, "Build name is required."],
        minLength: [3, "Must be at least 3 characters."]
    },
    username: {
        type: String
    },
    description: {
        type: String,
        required: [true, "Description is required."],
        maxLength: [200, "Cannot be over 200 characters long."]
    },
    cpu: {
        type: String,
        required: [true, "CPU is required."],
        minLength: [3, "Must be at least 3 characters."]
    },
    cpuLink: {
        type: String
    },
    cpuCooler: {
        type: String,
        required: [true, "CPU Cooler is required."],
        minLength: [3, "Must be at least 3 characters."]
    },
    cpuCoolerLink: {
        type: String
    },
    motherboard: {
        type: String,
        required: [true, "Motherboard is required."],
        minLength: [3, "Must be at least 3 characters."]
    },
    motherboardLink: {
        type: String
    },
    memory: {
        type: String,
        required: [true, "Memory is required."],
        minLength: [3, "Must be at least 3 characters."]
    },
    memoryLink: {
        type: String
    },
    graphicsCard: {
        type: String,
        required: [true, "GPU is required."],
        minLength: [3, "Must be at least 3 characters."]
    },
    graphicsCardLink: {
        type: String,
    },
    storage: {
        type: String,
        required: [true, "Storage is required."],
        minLength: [3, "Must be at least 3 characters."]
    },
    storageLink: {
        type: String,
    },
    powerSupply: {
        type: String,
        required: [true, "Power Supply is required."],
        minLength: [3, "Must be at least 3 characters."]
    },
    powerSupplyLink: {
        type: String,
    },
    accessories: {
        type: String
    },
    accessoriesLink: {
        type: String
    },
});

const Computer = mongoose.model("Computer", ComputerSchema);
module.exports = Computer;