// Original file: protos/driver.proto

import type { UserDTO as _com_widedelivery_auth_proto_UserDTO, UserDTO__Output as _com_widedelivery_auth_proto_UserDTO__Output } from '../../../../com/widedelivery/auth/proto/UserDTO';
import type { Truck as _com_widedelivery_driver_proto_Truck, Truck__Output as _com_widedelivery_driver_proto_Truck__Output } from '../../../../com/widedelivery/driver/proto/Truck';

export interface DriverExtendedModel {
  'driver_id'?: (string);
  'driver_as_user_model'?: (_com_widedelivery_auth_proto_UserDTO | null);
  'may_be_loader'?: (boolean);
  'search_radius'?: (number);
  'truck'?: (_com_widedelivery_driver_proto_Truck | null);
}

export interface DriverExtendedModel__Output {
  'driver_id': (string);
  'driver_as_user_model': (_com_widedelivery_auth_proto_UserDTO__Output | null);
  'may_be_loader': (boolean);
  'search_radius': (number);
  'truck': (_com_widedelivery_driver_proto_Truck__Output | null);
}
