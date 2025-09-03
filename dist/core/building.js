export const BuildError = {
    INSUFFICIENT_MONEY: "INSUFFICIENT_MONEY",
    INSUFFICIENT_ENERGY: "INSUFFICIENT_ENERGY",
    RESOURCE_VALIDATION_FAILED: "RESOURCE_VALIDATION_FAILED",
};
/**
 * Abstract base class for all buildings in the city simulator.
 *
 * Provides common functionality for resource management, validation,
 * and building construction while allowing subclasses to implement
 * specific building behavior.
 *
 * @abstract
 */
export class Building {
    constructor(config) {
        this.config = Object.freeze({ ...config });
    }
    calculateCost(resources) {
        if (!this.config) {
            alert("Config not defined!");
            return;
        }
        if (resources.money < this.config.moneyCost)
            alert("Not enough money!");
        if (resources.energyCapacity < this.config.energyConsumption)
            alert("Not enough energy!");
        resources.money -= this.config.moneyCost;
        resources.energyCapacity -= this.config.energyConsumption;
        resources.population += this.config.populationEffect;
    }
    build(resources) {
        try {
            this.calculateCost(resources);
            return true;
        }
        catch (error) {
            console.log(error);
            return false;
        }
    }
}
//# sourceMappingURL=building.js.map