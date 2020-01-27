import { IReference } from '../reference/reference';
/**
 * Abridged file or folder information
 */
export interface IAbridgedFileFolderInformation {
  /**
   * The name of the file or folder without path.
   * E.g. file.gco for a file file.gco located anywhere in the file system. Currently this will always fit into ASCII.
   */
  name: string;
  /**
   * The name of the file without the path, this potentially with non-ASCII unicode characters.
   * E.g. a turtle 🐢.gco for a file a_turtle_turtle.gco located anywhere in the file system.
   */
  display: string;
  /**
   * The path to the file or folder within the location.
   * E.g. folder/subfolder/file.gco for a file file.gco
   * located within folder and subfolder relative to the root of the location. Currently this will always fit into ASCII.
   */
  path: string;
  /**
   * The origin of the file, local when stored in OctoPrint’s uploads folder, sdcard when stored on the printer’s SD card (if available)
   */
  origin: string;
  /**
   * References relevant to this file or folder, left out in abridged version
   */
  refs: IReference;
}
