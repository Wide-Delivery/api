// Original file: protos/driver.proto

import type { Driver as _com_widedelivery_driver_proto_Driver, Driver__Output as _com_widedelivery_driver_proto_Driver__Output } from '../../../../com/widedelivery/driver/proto/Driver';
import type { DriverTrip as _com_widedelivery_driver_proto_DriverTrip, DriverTrip__Output as _com_widedelivery_driver_proto_DriverTrip__Output } from '../../../../com/widedelivery/driver/proto/DriverTrip';

export interface DriverWithTrips {
  'driver'?: (_com_widedelivery_driver_proto_Driver | null);
  'trips'?: (_com_widedelivery_driver_proto_DriverTrip)[];
}

export interface DriverWithTrips__Output {
  'driver': (_com_widedelivery_driver_proto_Driver__Output | null);
  'trips': (_com_widedelivery_driver_proto_DriverTrip__Output)[];
}
