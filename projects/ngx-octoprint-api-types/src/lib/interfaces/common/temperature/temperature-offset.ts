/**
 * Temperature offset
 * http://docs.octoprint.org/en/master/api/datamodel.html#temperature-offset
 */
export interface ITemperatureOffset {
  /**
   * Temperature offset for tool n. Enumeration starts at 0 for the first tool.
   */
  tool: number;
  /**
   * Temperature offset for the printer’s heated bed.
   */
  bed: number;
}
