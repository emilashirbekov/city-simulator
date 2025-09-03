import { Resources } from "@/services/resources";
export declare const BuildError: {
    readonly INSUFFICIENT_MONEY: "INSUFFICIENT_MONEY";
    readonly INSUFFICIENT_ENERGY: "INSUFFICIENT_ENERGY";
    readonly RESOURCE_VALIDATION_FAILED: "RESOURCE_VALIDATION_FAILED";
};
export interface BuildingConfig {
    readonly moneyCost: number;
    readonly energyConsumption: number;
    readonly populationEffect: number;
    readonly happinessEffect?: number;
    readonly energyProduction?: number;
}
/**
 * Abstract base class for all buildings in the city simulator.
 *
 * Provides common functionality for resource management, validation,
 * and building construction while allowing subclasses to implement
 * specific building behavior.
 *
 * @abstract
 */
export declare abstract class Building {
    protected readonly config: BuildingConfig | undefined;
    constructor(config: BuildingConfig);
    calculateCost(resources: Resources): void;
    build(resources: Resources): boolean;
}
//# sourceMappingURL=building.d.ts.map