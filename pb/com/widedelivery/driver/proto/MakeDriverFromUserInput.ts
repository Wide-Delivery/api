// Original file: protos/rpc_make_driver_from_user.proto

import type { TruckInput as _com_widedelivery_driver_proto_TruckInput, TruckInput__Output as _com_widedelivery_driver_proto_TruckInput__Output } from '../../../../com/widedelivery/driver/proto/TruckInput';

export interface MakeDriverFromUserInput {
  'user_id'?: (string);
  'may_be_loader'?: (boolean);
  'search_radius'?: (number);
  'truck'?: (_com_widedelivery_driver_proto_TruckInput | null);
}

export interface MakeDriverFromUserInput__Output {
  'user_id': (string);
  'may_be_loader': (boolean);
  'search_radius': (number);
  'truck': (_com_widedelivery_driver_proto_TruckInput__Output | null);
}
