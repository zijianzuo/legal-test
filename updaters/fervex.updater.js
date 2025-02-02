import { DrugUpdater } from "./base.updater";
// Updater for "Fervex".
export class FervexUpdater extends DrugUpdater {
  update() {
    this.increaseBenefit(1);
    if (this.drug.expiresIn < 11) {
      this.increaseBenefit(1);
    }
    if (this.drug.expiresIn < 6) {
      this.increaseBenefit(1);
    }
    this.drug.expiresIn -= 1;
    if (this.drug.expiresIn < 0) {
      this.drug.benefit = 0;
    }
  }
}
