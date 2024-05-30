// Original file: protos/driver.proto

import type { Driver as _driver_Driver, Driver__Output as _driver_Driver__Output } from '../driver/Driver';
import type { DriverTrip as _driver_DriverTrip, DriverTrip__Output as _driver_DriverTrip__Output } from '../driver/DriverTrip';

export interface DriverWithTrips {
  'driver'?: (_driver_Driver | null);
  'trips'?: (_driver_DriverTrip)[];
}

export interface DriverWithTrips__Output {
  'driver': (_driver_Driver__Output | null);
  'trips': (_driver_DriverTrip__Output)[];
}
