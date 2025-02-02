import { Drug, Pharmacy } from "./pharmacy";

describe("Approval test", () => {
  it("should match snapshot", () => {
    const drugs = [
      new Drug("Doliprane", 20, 30),
      new Drug("Herbal Tea", 10, 5),
      new Drug("Fervex", 12, 35),
      new Drug("Magic Pill", 15, 40),
    ];

    const pharmacy = new Pharmacy(drugs);

    const result = [];
    for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
      result.push(JSON.parse(JSON.stringify(pharmacy.updateBenefitValue())));
    }
    expect(result).toMatchSnapshot();
  });
});
