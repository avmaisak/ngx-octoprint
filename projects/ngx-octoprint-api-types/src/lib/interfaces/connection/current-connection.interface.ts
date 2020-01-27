import { IConnection } from './connection.interface';
import { IConnectionOptions } from './connection-options.interface';

/**
 * Retrieve the current connection settings,
 * including information regarding the available baudrates and serial ports and the current connection state.
 * http://docs.octoprint.org/en/master/api/connection.html
 */
export interface ICurrentConnection {
  current: IConnection,
  options: IConnectionOptions
}
