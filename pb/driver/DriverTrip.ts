// Original file: protos/trip.proto

import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../google/protobuf/Timestamp';
import type { DriverTripStatus as _driver_DriverTripStatus, DriverTripStatus__Output as _driver_DriverTripStatus__Output } from '../driver/DriverTripStatus';
import type { Order as _order_Order, Order__Output as _order_Order__Output } from '../order/Order';

export interface DriverTrip {
  'trip_id'?: (string);
  'driver_id'?: (string);
  'departure_longitude'?: (string);
  'departure_latitude'?: (string);
  'departure_time'?: (_google_protobuf_Timestamp | null);
  'destination_longitude'?: (string);
  'destination_latitude'?: (string);
  'destination_time'?: (_google_protobuf_Timestamp | null);
  'free_space_length'?: (number | string);
  'free_space_width'?: (number | string);
  'free_space_height'?: (number | string);
  'status'?: (_driver_DriverTripStatus);
  'accepted_orders'?: (_order_Order)[];
  'created_at'?: (_google_protobuf_Timestamp | null);
  'updated_at'?: (_google_protobuf_Timestamp | null);
}

export interface DriverTrip__Output {
  'trip_id': (string);
  'driver_id': (string);
  'departure_longitude': (string);
  'departure_latitude': (string);
  'departure_time': (_google_protobuf_Timestamp__Output | null);
  'destination_longitude': (string);
  'destination_latitude': (string);
  'destination_time': (_google_protobuf_Timestamp__Output | null);
  'free_space_length': (number);
  'free_space_width': (number);
  'free_space_height': (number);
  'status': (_driver_DriverTripStatus__Output);
  'accepted_orders': (_order_Order__Output)[];
  'created_at': (_google_protobuf_Timestamp__Output | null);
  'updated_at': (_google_protobuf_Timestamp__Output | null);
}
