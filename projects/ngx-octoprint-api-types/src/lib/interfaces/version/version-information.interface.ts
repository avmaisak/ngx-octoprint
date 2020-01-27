/**
 * Retrieve information regarding server and API version.
 * Returns a JSON object with two keys, api containing the API version, server containing the server version,
 * text containing the server version including the prefix ``OctoPrint `` (to determine that this is indeed a genuine OctoPrint instance).
 */
export interface IVersionInformation {
  /**
   * API version
   */
  api: string;
  /**
   * Server version
   */
  server: string;
  /**
   * server version including the prefix ``OctoPrint ``
   * (to determine that this is indeed a genuine OctoPrint instance).
   */
  text: string;
}
