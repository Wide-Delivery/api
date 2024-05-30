// Original file: protos/trip.proto

export const DriverTripStatus = {
  EXPECTED: 'EXPECTED',
  FINISHED: 'FINISHED',
  CANCELLED: 'CANCELLED',
} as const;

export type DriverTripStatus =
  | 'EXPECTED'
  | 0
  | 'FINISHED'
  | 1
  | 'CANCELLED'
  | 2

export type DriverTripStatus__Output = typeof DriverTripStatus[keyof typeof DriverTripStatus]
