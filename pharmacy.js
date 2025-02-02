import {
  HerbalTeaUpdater,
  FervexUpdater,
  DafalganUpdater,
  MagicPillUpdater,
  NormalDrugUpdater,
} from "./updaters/index";
export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    this.drugs.forEach((drug) => {
      switch (drug.name) {
        case "Herbal Tea":
          return new HerbalTeaUpdater(drug).update();
        case "Fervex":
          return new FervexUpdater(drug).update();
        case "Dafalgan":
          return new DafalganUpdater(drug).update();
        case "Magic Pill":
          return new MagicPillUpdater(drug).update();
        default:
          return new NormalDrugUpdater(drug).update();
      }
    });
    return this.drugs;
  }
}
