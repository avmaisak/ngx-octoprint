/**
 * File information
 * http://docs.octoprint.org/en/master/api/datamodel.html#file-information
 */
export interface IFileInformation {
  /*
  * The name of the file without path.
  E.g. file.gco" for a file file.gco" located anywhere in the file system. Currently this will always fit into ASCII.
  */
  name: string;
  /**
   * 	The name of the file without the path, this time potentially with non-ASCII unicode characters.
   * E.g. a turtle 🐢.gco" for a file a_turtle_turtle.gco" located anywhere in the file system.
   */
  display: string;
  /**
   * The path to the file within the location.
   * E.g. folder/subfolder/file.gco" for a file file.gco" located within folder" and subfolder" relative to the root of the location.
   * Currently this will always fit into ASCII.
   */
  path: string;
  /**
   * Type of file. model or machinecode.
   * Or folder if it’s a folder, in which case the children node will be populated
   */
  type: string;
  /**
   * Path to type of file in extension tree. E.g. ["model", "stl"] for .stl files,
   * or ["machinecode", "gcode"] for .gcode files. ["folder"] for folders.
   */
  typePath: string[];
}
