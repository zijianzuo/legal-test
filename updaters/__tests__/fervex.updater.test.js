import { Drug } from "../../pharmacy";
import { FervexUpdater } from "../fervex.updater";

describe("FervexUpdater", () => {
  it("should drop benefit to 0 when expired", () => {
    const drug = new Drug("Fervex", 0, 30);
    const updater = new FervexUpdater(drug);
    updater.update();
    expect(drug.expiresIn).toBe(-1);
    expect(drug.benefit).toBe(0);
  });

  it("should increase benefit by 1 when expiresIn > 10", () => {
    const drug = new Drug("Fervex", 15, 20);
    const updater = new FervexUpdater(drug);
    updater.update();
    // Only the base increase applies.
    expect(drug.expiresIn).toBe(14);
    expect(drug.benefit).toBe(21);
  });

  it("should increase benefit by 2 when 10 >= expiresIn > 5", () => {
    const drug = new Drug("Fervex", 10, 20);
    const updater = new FervexUpdater(drug);
    updater.update();
    // Increase by 1 + 1 since expiresIn is <= 10.
    expect(drug.expiresIn).toBe(9);
    expect(drug.benefit).toBe(22);
  });

  it("should increase benefit by 3 when expiresIn <= 5", () => {
    const drug = new Drug("Fervex", 5, 20);
    const updater = new FervexUpdater(drug);
    updater.update();
    // Increase by 1 + 1 + 1 for the three conditions.
    expect(drug.expiresIn).toBe(4);
    expect(drug.benefit).toBe(23);
  });

  it("should not let benefit exceed 50", () => {
    const drug = new Drug("Fervex", 5, 49);
    const updater = new FervexUpdater(drug);
    updater.update();
    expect(drug.benefit).toBe(50);
  });
});
