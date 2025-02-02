import { Drug } from "../../pharmacy";
import { MagicPillUpdater } from "../magic-pill.updater";

describe("MagicPillUpdater", () => {
  it("should not change benefit or expiresIn", () => {
    const drug = new Drug("Magic Pill", 10, 40);
    const updater = new MagicPillUpdater(drug);
    updater.update();
    expect(drug.expiresIn).toBe(10);
    expect(drug.benefit).toBe(40);
  });
});
