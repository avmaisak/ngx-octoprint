/**
 * References
 * http://docs.octoprint.org/en/master/api/datamodel.html#references
 */
export interface IReference {
  /**
   * The resource that represents the file or folder (e.g. for issuing commands to or for deleting)
   */
  resource: string;
  /**
   * The download URL for the file. Never present for folders.
   */
  download: string;
  /**
   * The model from which this file was generated (e.g. an STL, currently not used). Never present for folders.
   */
  model: string;
}
