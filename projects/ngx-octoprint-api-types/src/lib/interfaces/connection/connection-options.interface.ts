import { IPrinterProfile } from '../printer/printer-profile.interface';

/**
 * Connection options.
 * http://docs.octoprint.org/en/master/api/connection.html#get-connection-settings
 */
export interface IConnectionOptions {
  ports: string[],
  baudrates: number[];
  printerProfiles: IPrinterProfile[],
  portPreference: string,
  baudratePreference: number,
  printerProfilePreference: string,
  autoconnect: boolean
}
