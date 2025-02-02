import { DrugUpdater } from "./base.updater";
// Updater for "Magic Pill" which never changes.
export class MagicPillUpdater extends DrugUpdater {
  update() {
    // do nothing
  }
}
