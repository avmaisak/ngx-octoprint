import { IDimensions } from '../dimensions/dimensions';
import { IPrintingArea } from '../printingArea/printingArea';
import { IFilament } from '../filament';

/**
 * GCODE analysis information
 * http://docs.octoprint.org/en/master/api/datamodel.html#gcode-analysis-information
 */
export interface IGcodeAnalysis {
  /**
   * The estimated print time of the file, in seconds
   */
  estimatedPrintTime: number;
  /**
   * The estimated usage of filament
   */
  filament: IFilament;
  /**
   * 	Information regarding the size of the printed model
   */
  dimensions: IDimensions;
  /**
   * The maximum X coordinate of the printed model, in mm
   */
  printingArea: IPrintingArea;
}
