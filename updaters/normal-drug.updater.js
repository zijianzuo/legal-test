import { DrugUpdater } from "./base.updater";

// Updater for normal drugs.
export class NormalDrugUpdater extends DrugUpdater {
  update() {
    this.decreaseBenefit(1);
    this.drug.expiresIn -= 1;
    if (this.drug.expiresIn < 0) {
      this.decreaseBenefit(1);
    }
  }
}
