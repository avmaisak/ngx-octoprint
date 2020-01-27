import { IPrinterStateFlags } from './printer-state-flags';
import { PrinterState } from '../../../enums';

/**
 * Printer State
 * http://docs.octoprint.org/en/master/api/datamodel.html#printer-state
 */
export interface IPrinterState {
  /**
   * A textual representation of the current state of the printer, e.g. Operational" or Printing"
   */
  text: PrinterState;
  /**
   * A few boolean printer state flags
   */
  flags: IPrinterStateFlags
}
