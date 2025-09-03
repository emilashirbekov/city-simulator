import { Factory } from "./services/factory.js";
import { Home } from "./services/house.js";
import { Park } from "./services/park.js";
import { Resources } from "./services/resources.js";
const buildHomeBtn = document.getElementById("home");
const buildFactoryBtn = document.getElementById("factory");
const buildParkBtn = document.getElementById("park");
const moneyEl = document.getElementById("money");
const populationEl = document.getElementById("population");
const energyEl = document.getElementById("energy");
const happinessEl = document.getElementById("happiness");
const resources = new Resources();
let selectedTile = null;
const build = (buildBtn, buildingObj, buildText, buildIcon, buildClass) => {
    buildBtn?.addEventListener("click", () => {
        if (!selectedTile) {
            alert(`First, select a cell to build ${buildText}!`);
            return;
        }
        if (!selectedTile.classList.contains("empty")) {
            alert("This cell is already occupied!");
            return;
        }
        const success = buildingObj.build(resources);
        if (!success)
            return;
        selectedTile.textContent = buildIcon;
        selectedTile.classList.remove("empty");
        selectedTile.classList.add(buildClass);
        selectedTile.style.backgroundColor = "#bba3d2";
        selectedTile.style.color = "#000";
        selectedTile = null;
        displayResources();
    });
};
build(buildHomeBtn, new Home(), "a house", "🏠", "home");
build(buildFactoryBtn, new Factory(), "a factory", "🏭", "factory");
build(buildParkBtn, new Park(), "a park", "🌳", "park");
const mapCells = document.querySelectorAll(".tile");
mapCells.forEach((tile) => {
    const changeSelectedCellStyles = () => {
        return tile.addEventListener("click", (e) => {
            if (selectedTile && selectedTile !== tile) {
                selectedTile.style.backgroundColor = "#bba3d2";
                selectedTile.style.color = "";
            }
            selectedTile = tile;
            if (tile.contains(e.target)) {
                tile.style.backgroundColor = "#a3d2bc";
                tile.style.color = "#000";
            }
            else {
                tile.style.backgroundColor = "#dd022c";
                tile.style.color = "#fff";
            }
        });
    };
    changeSelectedCellStyles();
});
const displayResources = () => {
    if (moneyEl)
        moneyEl.textContent = resources.money.toString();
    if (populationEl)
        populationEl.textContent = resources.population.toString();
    if (energyEl)
        energyEl.textContent = resources.energyCapacity.toString();
    if (happinessEl)
        happinessEl.textContent = `${resources.percentOfHappiness.toString()}%`;
};
displayResources();
//# sourceMappingURL=main.js.map