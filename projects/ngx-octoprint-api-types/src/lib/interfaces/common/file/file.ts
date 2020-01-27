import { IReference } from '../reference/reference';
import { IGcodeAnalysis } from '../gcode/gcode-analysis';

/**
 * Files
 * http://docs.octoprint.org/en/master/api/datamodel.html#files
 */
export interface IFile {
  /**
   * MD5 hash of the file. Only available for local files.
   */
  hash?: string;
  /**
   * The size of the file in bytes.
   * Only available for local files or sdcard files if the printer supports file sizes for sd card files.
   */
  size?: number;
  /**
   * The timestamp when this file was uploaded. Only available for local files.
   */
  date?: number;
  /**
   * The origin of the file, local when stored in OctoPrint’s uploads folder,
   * sdcard when stored on the printer’s SD card (if available)
   */
  origin?: string;
  /**
   * References relevant to this file or folder, left out in abridged version
   */
  refs: IReference;
  /**
   * GCODE analysis information
   */
  gcodeAnalysis: IGcodeAnalysis;
}
