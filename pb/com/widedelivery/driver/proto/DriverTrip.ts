// Original file: protos/trip.proto

import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../../../../google/protobuf/Timestamp';
import type { DriverTripStatus as _com_widedelivery_driver_proto_DriverTripStatus, DriverTripStatus__Output as _com_widedelivery_driver_proto_DriverTripStatus__Output } from '../../../../com/widedelivery/driver/proto/DriverTripStatus';
import type { Order as _com_widedelivery_order_proto_Order, Order__Output as _com_widedelivery_order_proto_Order__Output } from '../../../../com/widedelivery/order/proto/Order';

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
  'status'?: (_com_widedelivery_driver_proto_DriverTripStatus);
  'accepted_orders'?: (_com_widedelivery_order_proto_Order)[];
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
  'status': (_com_widedelivery_driver_proto_DriverTripStatus__Output);
  'accepted_orders': (_com_widedelivery_order_proto_Order__Output)[];
  'created_at': (_google_protobuf_Timestamp__Output | null);
  'updated_at': (_google_protobuf_Timestamp__Output | null);
}
