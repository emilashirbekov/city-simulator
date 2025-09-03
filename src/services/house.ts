import { Building, BuildingConfig } from "../core/building.js";

export class Home extends Building {
  constructor() {
    const config: BuildingConfig = {
      moneyCost: 500,
      energyConsumption: 50,
      populationEffect: 5,
    };
    super(config);
  }
}
