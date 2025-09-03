import { Resources } from "@/services/resources";

export const BuildError = {
  INSUFFICIENT_MONEY: "INSUFFICIENT_MONEY",
  INSUFFICIENT_ENERGY: "INSUFFICIENT_ENERGY",
  RESOURCE_VALIDATION_FAILED: "RESOURCE_VALIDATION_FAILED",
} as const;

type BuildError = (typeof BuildError)[keyof typeof BuildError];

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

export abstract class Building {
  protected readonly config: BuildingConfig | undefined;
  constructor(config: BuildingConfig) {
    this.config = Object.freeze({ ...config });
  }

  public calculateCost(resources: Resources) {
    if (!this.config) {
      alert("Config not defined!");
      return;
    }
    if (resources.money < this.config.moneyCost) alert("Not enough money!");
    if (resources.energyCapacity < this.config.energyConsumption)
      alert("Not enough energy!");

    resources.money -= this.config.moneyCost;
    resources.energyCapacity -= this.config.energyConsumption;
    resources.population += this.config.populationEffect;
  }

  public build(resources: Resources): boolean {
    try {
      this.calculateCost(resources);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
