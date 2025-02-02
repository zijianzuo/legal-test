import { DrugUpdater } from "./base.updater";
// Updater for "Herbal Tea".
export class HerbalTeaUpdater extends DrugUpdater {
  update() {
    this.increaseBenefit(1);
    this.drug.expiresIn -= 1;
    if (this.drug.expiresIn < 0) {
      this.increaseBenefit(1);
    }
  }
}
