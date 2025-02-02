export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
}

// Helper method: increase the benefit value, capping it at 50.
function increaseBenefit(drug, amount) {
  drug.benefit = Math.min(50, drug.benefit + amount);
}

// Helper method: decrease the benefit value, ensuring it never goes below 0.
function decreaseBenefit(drug, amount) {
  drug.benefit = Math.max(0, drug.benefit - amount);
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    for (let i = 0; i < this.drugs.length; i++) {
      const drug = this.drugs[i];
      if (drug.name === "Herbal Tea") {
        increaseBenefit(drug, 1);
        drug.expiresIn -= 1;
        if (drug.expiresIn < 0) {
          increaseBenefit(drug, 1);
        }
      } else if (drug.name === "Fervex") {
        increaseBenefit(drug, 1);
        if (drug.expiresIn < 11) {
          increaseBenefit(drug, 1);
        }
        if (drug.expiresIn < 6) {
          increaseBenefit(drug, 1);
        }
        drug.expiresIn -= 1;
        if (drug.expiresIn < 0) {
          drug.benefit = 0;
        }
      } else if (drug.name === "Magic Pill") {
        // do nothing
      } else {
        decreaseBenefit(drug, 1);
        drug.expiresIn -= 1;
        if (drug.expiresIn < 0) {
          decreaseBenefit(drug, 1);
        }
      }
    }

    return this.drugs;
  }
}
