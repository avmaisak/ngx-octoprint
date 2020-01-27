/**
 * A few boolean printer state flags.
 * http://docs.octoprint.org/en/master/api/datamodel.html#printer-state
 */
export interface IPrinterStateFlags {
  /**
   * 	true if the printer is operational, false otherwise
   */
  operational: boolean;
  /**
   * true if the printer is currently paused, false otherwise
   */
  paused: boolean;
  /**
   * 	true if the printer is currently printing, false otherwise
   */
  printing: boolean;
  /**
   * true if the printer is currently printing and in the process of pausing, false otherwise
   */
  pausing: boolean;
  /**
   * true if the printer is currently printing and in the process of pausing, false otherwise
   */
  cancelling: boolean;
  /**
   * true if the printer’s SD card is available and initialized, false otherwise. This is redundant information to the SD State.
   */
  sdReady: boolean;
  /**
   * 	true if an unrecoverable error occurred, false otherwise
   */
  error: boolean;
  /**
   * 	true if the printer is operational and no data is currently being streamed to SD, so ready to receive instructions
   */
  ready: boolean;
  /**
   * true if the printer is disconnected (possibly due to an error), false otherwise
   */
  closedOrError: boolean;
}
