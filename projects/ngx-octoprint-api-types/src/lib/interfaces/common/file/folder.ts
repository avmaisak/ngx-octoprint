import { IFileInformation } from './file-information';

/**
 * Folder.
 * http://docs.octoprint.org/en/master/api/datamodel.html#folders
 */
export interface IFolder {
  /**
   * Contained children for entries of type folder. On non recursive listings only present on first level sub folders!
   */
  children: IFileInformation[],
  /**
   * 	The size of all files contained in the folder and its subfolders. Not present in non recursive listings!
   */
  size: number;
}
