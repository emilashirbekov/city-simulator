import { Building, BuildingConfig } from "../core/building.js";

export class Factory extends Building {
  constructor() {
    const config: BuildingConfig = {
      moneyCost: 1000,
      energyConsumption: 500,
      populationEffect: 0,
      energyProduction: 100
    };
    super(config);
  }
}
