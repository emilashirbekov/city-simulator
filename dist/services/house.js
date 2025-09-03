import { Building } from "../core/building.js";
export class Home extends Building {
    constructor() {
        const config = {
            moneyCost: 500,
            energyConsumption: 50,
            populationEffect: 5,
        };
        super(config);
    }
}
//# sourceMappingURL=house.js.map