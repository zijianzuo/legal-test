import { Drug } from "../../pharmacy";
import { DafalganUpdater } from "../dafalgan.updater";

describe("DafalganUpdater", () => {
  it("should decrease benefit by 2 and expiresIn by 1 when not expired", () => {
    const drug = new Drug("Dafalgan", 10, 25);
    const updater = new DafalganUpdater(drug);
    updater.update();
    expect(drug.expiresIn).toBe(9);
    expect(drug.benefit).toBe(23);
  });

  it("should decrease benefit twice as fast when expired", () => {
    // expiresIn is 0 so after update it becomes -1.
    // The updater should decrease benefit by 2, then an additional 2 for being expired.
    const drug = new Drug("Dafalgan", 0, 10);
    const updater = new DafalganUpdater(drug);
    updater.update();
    expect(drug.expiresIn).toBe(-1);
    expect(drug.benefit).toBe(6);
  });

  it("should not let benefit go below 0", () => {
    const drug = new Drug("Dafalgan", 0, 3);
    const updater = new DafalganUpdater(drug);
    updater.update();
    expect(drug.benefit).toBe(0);
  });
});
