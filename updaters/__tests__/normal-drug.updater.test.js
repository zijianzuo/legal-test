import { Drug } from "../../pharmacy";
import { NormalDrugUpdater } from "../normal-drug.updater";

describe("NormalDrugUpdater", () => {
  it("should decrease benefit by 1 and expiresIn by 1 when not expired", () => {
    const drug = new Drug("Normal Drug", 5, 10);
    const updater = new NormalDrugUpdater(drug);
    updater.update();
    expect(drug.expiresIn).toBe(4);
    expect(drug.benefit).toBe(9);
  });

  it("should decrease benefit twice when expired", () => {
    // expiresIn is 0, so after update it becomes -1.
    // The updater should subtract benefit by 1, then, after expiresIn is negative, subtract an extra 1.
    const drug = new Drug("Normal Drug", 0, 10);
    const updater = new NormalDrugUpdater(drug);
    updater.update();
    expect(drug.expiresIn).toBe(-1);
    expect(drug.benefit).toBe(8);
  });

  it("should not let benefit go below 0", () => {
    const drug = new Drug("Normal Drug", 0, 0);
    const updater = new NormalDrugUpdater(drug);
    updater.update();
    expect(drug.expiresIn).toBe(-1);
    expect(drug.benefit).toBe(0);
  });
});
