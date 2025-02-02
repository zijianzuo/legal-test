import { Drug } from "../../pharmacy";
import { HerbalTeaUpdater } from "../herbal-tea.updater";

describe("HerbalTeaUpdater", () => {
  it("should increase benefit by 1 and decrease expiresIn by 1 when not expired", () => {
    const drug = new Drug("Herbal Tea", 5, 10);
    const updater = new HerbalTeaUpdater(drug);
    updater.update();
    expect(drug.expiresIn).toBe(4);
    expect(drug.benefit).toBe(11);
  });

  it("should increase benefit twice when expired", () => {
    // expiresIn is 0 so after update it becomes -1.
    // The updater should increase benefit by 1 before and another 1 after expiration.
    const drug = new Drug("Herbal Tea", 0, 10);
    const updater = new HerbalTeaUpdater(drug);
    updater.update();
    expect(drug.expiresIn).toBe(-1);
    expect(drug.benefit).toBe(12);
  });

  it("should not let benefit exceed 50", () => {
    const drug = new Drug("Herbal Tea", 5, 50);
    const updater = new HerbalTeaUpdater(drug);
    updater.update();
    expect(drug.benefit).toBe(50);
  });
});
