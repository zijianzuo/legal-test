// Base class for drug updaters.
export class DrugUpdater {
  constructor(drug) {
    this.drug = drug;
  }

  // Each updater must implement its own update logic.
  update() {
    throw new Error("update() must be implemented");
  }

  // Helper method: increase the benefit value, capping it at 50.
  increaseBenefit(amount) {
    this.drug.benefit = Math.min(50, this.drug.benefit + amount);
  }

  // Helper method: decrease the benefit value, ensuring it never goes below 0.
  decreaseBenefit(amount) {
    this.drug.benefit = Math.max(0, this.drug.benefit - amount);
  }
}
