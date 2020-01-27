/**
 * Temperature Data
 * http://docs.octoprint.org/en/master/api/datamodel.html#temperature-data
 */
export interface ITemperatureData {
  /**
   * Current temperature
   */
  actual: number;
  /**
   * Target temperature, may be null if no target temperature is set.
   */
  target: number;
  /**
   * Currently configured temperature offset to apply, will be left out for historic temperature information.
   */
  offset: number;
}
