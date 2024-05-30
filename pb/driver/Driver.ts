// Original file: protos/driver.proto

import type { Truck as _driver_Truck, Truck__Output as _driver_Truck__Output } from '../driver/Truck';

export interface Driver {
  'driver_id'?: (string);
  'user_id'?: (string);
  'may_be_loader'?: (boolean);
  'search_radius'?: (number);
  'truck'?: (_driver_Truck | null);
}

export interface Driver__Output {
  'driver_id': (string);
  'user_id': (string);
  'may_be_loader': (boolean);
  'search_radius': (number);
  'truck': (_driver_Truck__Output | null);
}
