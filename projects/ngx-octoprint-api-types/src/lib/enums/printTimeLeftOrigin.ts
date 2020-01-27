/**
 * Origin of the current time left estimate.
 * http://docs.octoprint.org/en/master/api/datamodel.html#progress-information
 * linear: based on an linear approximation of the progress in file in bytes vs time
 * analysis: based on an analysis of the file
 * estimate: calculated estimate after stabilization of linear estimation
 * average: based on the average total from past prints of the same model against the same printer profile
 * mixed-analysis: mixture of estimate and analysis
 * mixed-average: mixture of estimate and average
 */
export enum PrintTimeLeftOrigin {
  linear = 'linear',
  analysis = 'analysis',
  estimate = 'estimate',
  average = 'average',
  mixedAnalysis = 'mixed-analysis',
  mixedAverage = 'mixed-average'
}
