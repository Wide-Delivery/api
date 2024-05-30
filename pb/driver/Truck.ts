// Original file: protos/truck.proto

import type { TruckType as _driver_TruckType, TruckType__Output as _driver_TruckType__Output } from '../driver/TruckType';

export interface Truck {
  'truck_brand'?: (string);
  'truck_model'?: (string);
  'truck_plate'?: (string);
  'truck_serial_number'?: (string);
  'truck_color'?: (string);
  'truck_type'?: (_driver_TruckType);
  'free_space_length'?: (number | string);
  'free_space_width'?: (number | string);
  'free_space_height'?: (number | string);
  'transportations_count'?: (number);
  'is_available_now'?: (boolean);
}

export interface Truck__Output {
  'truck_brand': (string);
  'truck_model': (string);
  'truck_plate': (string);
  'truck_serial_number': (string);
  'truck_color': (string);
  'truck_type': (_driver_TruckType__Output);
  'free_space_length': (number);
  'free_space_width': (number);
  'free_space_height': (number);
  'transportations_count': (number);
  'is_available_now': (boolean);
}
