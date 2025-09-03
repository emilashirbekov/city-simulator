import { Building } from "./building.js";
export class Factory extends Building {
    constructor() {
        super(100, 10, 10);
    }
    build(resources) {
        if (resources.money < this.moneyCost) {
            alert("Недостаточно денег!");
            return false;
        }
        resources.money -= this.moneyCost;
        resources.energyCapacity -= this.energyConsumption;
        resources.population += this.populationEffect;
        return true;
    }
}
//# sourceMappingURL=factory.js.map