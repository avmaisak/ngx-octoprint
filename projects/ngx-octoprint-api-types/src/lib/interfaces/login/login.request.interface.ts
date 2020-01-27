/**
 * http://docs.octoprint.org/en/master/api/general.html#login-response
 * Creates a login session or retrieves information about the currently existing session (passive login").
 * Can be used in one of two ways: to login a user via username and password and create a persistent session
 * (usually from a UI in the browser),  or to retrieve information about the active user
 * (from an existing session or an API key) via the passive flag.
 */
export interface ILoginRequest {
  /**
   * If present, performs a passive login only,
   * returning information about the current user that’s active either through an existing session or the used API key
   */
  passive: boolean;
  /**
   * (active login only) Username
   */
  user: string;
  /**
   *  (active login only) Password
   */
  pass: string;
  /**
   *  (active login only) Whether to set a remember me" cookie on the session
   */
  remember: boolean;
}
