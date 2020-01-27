import { PrinterState } from '../../enums/printer-state.enum';

/**
 * Current connection.
 * http://docs.octoprint.org/en/master/api/connection.html#get-connection-settings
 */
export interface IConnection {
  /**
   * A textual representation of the current state of the printer, e.g. Operational" or Printing"
   */
  state: PrinterState;
  /**
   * Serial Port
   */
  port: string;
  /**
   * Serial port baudrate
   */
  baudrate: number;
  /**
   * printerProfile
   */
  printerProfile: string;
}
