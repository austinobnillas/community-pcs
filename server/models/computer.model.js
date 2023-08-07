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
        minLength: [3, "Must be at least 3 characters."],
        maxLength: [100, "Cannot be over 100 characters long."]
    },
    cpuLink: {
        type: String
    },
    cpuCooler: {
        type: String,
        required: [true, "CPU Cooler is required."],
        minLength: [3, "Must be at least 3 characters."],
        maxLength: [100, "Cannot be over 100 characters long."]
    },
    cpuCoolerLink: {
        type: String
    },
    motherboard: {
        type: String,
        required: [true, "Motherboard is required."],
        minLength: [3, "Must be at least 3 characters."],
        maxLength: [100, "Cannot be over 100 characters long."]
    },
    motherboardLink: {
        type: String
    },
    memory: {
        type: String,
        required: [true, "Memory is required."],
        minLength: [3, "Must be at least 3 characters."],
        maxLength: [100, "Cannot be over 100 characters long."]
    },
    memoryLink: {
        type: String
    },
    graphicsCard: {
        type: String,
        required: [true, "GPU is required."],
        minLength: [3, "Must be at least 3 characters."],
        maxLength: [100, "Cannot be over 100 characters long."]
    },
    graphicsCardLink: {
        type: String,
    },
    storage: {
        type: String,
        required: [true, "Storage is required."],
        minLength: [3, "Must be at least 3 characters."],
        maxLength: [100, "Cannot be over 100 characters long."]
    },
    storageLink: {
        type: String,
    },
    powerSupply: {
        type: String,
        required: [true, "Power Supply is required."],
        minLength: [3, "Must be at least 3 characters."],
        maxLength: [100, "Cannot be over 100 characters long."]
    },
    powerSupplyLink: {
        type: String,
    },
    accessories: {
        type: String,
        maxLength: [100, "Cannot be over 100 characters long."]
    },
    accessoriesLink: {
        type: String
    },
});

const Computer = mongoose.model("Computer", ComputerSchema);
module.exports = Computer;