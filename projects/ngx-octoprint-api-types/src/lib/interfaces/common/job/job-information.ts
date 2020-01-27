import { IFileInformation } from '../file/file-information';
import { IFilament } from '../filament/filament';

/**
 * Job information
 * http://docs.octoprint.org/en/master/api/datamodel.html#job-information
 */
export interface IJobInformation {
  /**
   * The file that is the target of the current print job
   */
  file: IFileInformation;
  /**
   * 	The estimated print time for the file, in seconds.
   */
  estimatedPrintTime: number;
  /**
   * The print time of the last print of the file, in seconds.
   */
  lastPrintTime: number;
  /**
   * Information regarding the estimated filament usage of the print job
   */
  filament: IFilament;
}
