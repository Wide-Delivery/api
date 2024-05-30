// Original file: protos/rpc_make_driver_from_user.proto

import type { TruckInput as _driver_TruckInput, TruckInput__Output as _driver_TruckInput__Output } from '../driver/TruckInput';

export interface MakeDriverFromUserInput {
  'user_id'?: (string);
  'may_be_loader'?: (boolean);
  'search_radius'?: (number);
  'truck'?: (_driver_TruckInput | null);
}

export interface MakeDriverFromUserInput__Output {
  'user_id': (string);
  'may_be_loader': (boolean);
  'search_radius': (number);
  'truck': (_driver_TruckInput__Output | null);
}
