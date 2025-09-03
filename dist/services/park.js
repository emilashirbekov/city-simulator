import { Building } from "../core/building.js";
export class Park extends Building {
    constructor() {
        const config = {
            moneyCost: 500,
            energyConsumption: 200,
            populationEffect: 0,
        };
        super(config);
    }
}
//# sourceMappingURL=park.js.map