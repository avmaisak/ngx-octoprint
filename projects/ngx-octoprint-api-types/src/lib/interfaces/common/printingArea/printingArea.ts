/**
 * Information regarding the size of the printing area
 */
export interface IPrintingArea {
  /**
   * The maximum X coordinate of the printed model, in mm
   */
  maxX: number;
  /**
   * The maximum Y coordinate of the printed model, in mm
   */
  maxY: number;
  /**
   * The maximum Z coordinate of the printed model, in mm
   */
  maxZ: number;
  /**
   * The minimum X coordinate of the printed model, in mm
   */
  minX: number;
  /**
   * The minimum Y coordinate of the printed model, in mm
   */
  minY: number;
  /**
   * The minimum Z coordinate of the printed model, in mm
   */
  minZ: number;
}
