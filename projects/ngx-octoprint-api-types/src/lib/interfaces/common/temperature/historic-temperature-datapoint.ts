import { ITemperatureData } from './temperature-data';

/**
 * Historic Temperature Data Point.
 * http://docs.octoprint.org/en/master/api/datamodel.html#historic-temperature-data-point
 */
export interface IHistoricTemperatureDataPoint {
  /**
   * Timestamp of this data point
   */
  time: number;
  /**
   * Temperature stats for tool n.
   * Enumeration starts at 0 for the first tool. Not included if querying only bed state.
   */
  tool: ITemperatureData[];
  /**
   * Temperature stats for the printer’s heated bed. Not included if querying only tool state.
   */
  bed: ITemperatureData[];
}
