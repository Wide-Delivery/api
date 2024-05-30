// Original file: protos/order.proto

import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../google/protobuf/Timestamp';
import type { OrderStatus as _order_OrderStatus, OrderStatus__Output as _order_OrderStatus__Output } from '../order/OrderStatus';

export interface Order {
  'id'?: (string);
  'user_id'?: (string);
  'cargo_length'?: (number | string);
  'cargo_width'?: (number | string);
  'cargo_height'?: (number | string);
  'cargo_weight'?: (number | string);
  'departure_longitude'?: (string);
  'departure_latitude'?: (string);
  'departure_time'?: (_google_protobuf_Timestamp | null);
  'destination_longitude'?: (string);
  'destination_latitude'?: (string);
  'destination_time'?: (_google_protobuf_Timestamp | null);
  'description'?: (string);
  'need_loader'?: (boolean);
  'payment_method'?: (string);
  'created_at'?: (_google_protobuf_Timestamp | null);
  'updated_at'?: (_google_protobuf_Timestamp | null);
  'driver_id'?: (string);
  'status'?: (_order_OrderStatus);
  'current_location'?: (string);
}

export interface Order__Output {
  'id': (string);
  'user_id': (string);
  'cargo_length': (number);
  'cargo_width': (number);
  'cargo_height': (number);
  'cargo_weight': (number);
  'departure_longitude': (string);
  'departure_latitude': (string);
  'departure_time': (_google_protobuf_Timestamp__Output | null);
  'destination_longitude': (string);
  'destination_latitude': (string);
  'destination_time': (_google_protobuf_Timestamp__Output | null);
  'description': (string);
  'need_loader': (boolean);
  'payment_method': (string);
  'created_at': (_google_protobuf_Timestamp__Output | null);
  'updated_at': (_google_protobuf_Timestamp__Output | null);
  'driver_id': (string);
  'status': (_order_OrderStatus__Output);
  'current_location': (string);
}
