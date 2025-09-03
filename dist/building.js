export class Building {
    constructor(moneyCost, energyConsumption, populationEffect) {
        this.moneyCost = moneyCost;
        this.energyConsumption = energyConsumption;
        this.populationEffect = populationEffect;
    }
    build(resources) {
        if (resources.money < this.moneyCost) {
            alert("Недостаточно денег!");
            return false;
        }
        if (resources.energyCapacity < this.energyConsumption) {
            alert("Недостаточно энергии!");
            return false;
        }
        resources.money -= this.moneyCost;
        resources.energyCapacity -= this.energyConsumption;
        resources.population += this.populationEffect;
        return true;
    }
}
//# sourceMappingURL=building.js.map