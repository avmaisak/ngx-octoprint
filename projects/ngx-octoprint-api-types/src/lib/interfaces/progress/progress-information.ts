import { PrintTimeLeftOrigin } from '../../enums/printTimeLeftOrigin';

/**
 * Progress information
 * http://docs.octoprint.org/en/master/api/datamodel.html#progress-information
 */
export interface IProgressInformation {
  /**
   * 	Percentage of completion of the current print job
   */
  completion: number;
  /**
   * Current position in the file being printed, in bytes from the beginning
   */
  filepos: number;
  /**
   * Time already spent printing, in seconds
   */
  printTime: number;
  /**
   * Estimate of time left to print, in seconds
   */
  printTimeLeft: number;
  /**
   * Origin of the current time left estimate.
   */
  printTimeLeftOrigin: PrintTimeLeftOrigin
}
