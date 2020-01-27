import { ConnectionCommand } from '../../enums/connection-commands.enum';

/**
 * Connect Request
 * http://docs.octoprint.org/en/master/api/connection.html
 */
export interface IConnectionRequest {
  /**
   * Specific command
   */
  command: ConnectionCommand,
  /**
   * Optional, specific port to connect to.
   * If not set the current portPreference will be used, or if no preference is available auto detection will be attempted.
   */
  port?: string;
  /**
   * Optional, specific baudrate to connect with. If not set the current
   */
  baudrate?: number;
  /**
   * will be used, or if no preference is available auto detection will be attempted.
   */
  baudratePreference?: number,
  /**
   * Optional, specific printer profile to use for connection. If not set the current default printer profile will be used.
   */
  printerProfile?: string,
  /**
   *  Optional, whether to save the request’s port and baudrate settings as new preferences. Defaults to false if not set.
   */
  save?: boolean,
  /**
   * Optional, whether to automatically connect to the printer on OctoPrint’s startup in the future.
   * If not set no changes will be made to the current configuration.
   */
  autoconnect?: boolean
}
