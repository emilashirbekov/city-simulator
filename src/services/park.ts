import { Building, BuildingConfig } from "../core/building.js";

export class Park extends Building {
    constructor() {
      const config: BuildingConfig = {
        moneyCost: 500,
        energyConsumption: 200,
        populationEffect: 0,
      };
      super(config);
    }
}
