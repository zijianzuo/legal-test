import { DrugUpdater } from "./base.updater";
// Updater for "Dafalgan".
export class DafalganUpdater extends DrugUpdater {
  update() {
    this.decreaseBenefit(2);
    this.drug.expiresIn -= 1;
    if (this.drug.expiresIn < 0) {
      this.decreaseBenefit(2);
    }
  }
}
