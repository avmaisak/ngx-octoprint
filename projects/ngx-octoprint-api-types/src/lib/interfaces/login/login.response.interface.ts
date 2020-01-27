/**
 * Login response Data model.
 * http://docs.octoprint.org/en/master/api/general.html#login-response
 */
export interface ILoginReponse {
  /**
   * the user’s name/id
   */
  name: string;
  /**
   * Whether the user’s account is active or not
   */
  active: boolean;
  /**
   * Whether the user has admin rights or not
   */
  admin: boolean;
  /**
   * Whether the user has user rights or not (always true)
   */
  user: boolean;
  /**
   * 	The user’s API key, if set
   */
  apiKey?: string;
  /**
   * The user’s settings, if any
   */
  settings: string;
  /**
   * The session key, can be used to authenticate with the auth message on the push API.
   * http://docs.octoprint.org/en/master/api/push.html#sec-api-push
   */
  session: string;
  /**
   * Whether the client that made the request got detected as external from the local network or not.
   */
  _is_external_client: boolean;
}
