export interface IPrintState {
  failure: number;
  success: number;
  last: {
    date: Date,
    success: boolean
  }
}
