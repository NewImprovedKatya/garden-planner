import { PLANTS } from "../../app/shared/PLANTS";

export const selectAllPlants = () => {
    return PLANTS;
};

export const selectRandomPlant = () => {
    return PLANTS[Math.floor(PLANTS.length * Math.random())];
};

export const selectPlantById = (id) => {
    return PLANTS.find((plant) => plant.id === id);
};