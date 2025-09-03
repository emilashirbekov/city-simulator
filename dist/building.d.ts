import { Resources } from "./services/resources";
export declare abstract class Building {
    protected moneyCost: number;
    protected energyConsumption: number;
    protected populationEffect: number;
    constructor(moneyCost: number, energyConsumption: number, populationEffect: number);
    build(resources: Resources): boolean;
}
//# sourceMappingURL=building.d.ts.map