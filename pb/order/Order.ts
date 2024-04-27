// Original file: protos/order.proto

import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../google/protobuf/Timestamp';

export interface Order {
  'id'?: (string);
  'user_id'?: (string);
  'cargo_length'?: (number | string);
  'cargo_width'?: (number | string);
  'cargo_height'?: (number | string);
  'departure_longitude'?: (string);
  'departure_latitude'?: (string);
  'departure_time'?: (_google_protobuf_Timestamp | null);
  'destination_longitude'?: (string);
  'destination_latitude'?: (string);
  'destination_time'?: (_google_protobuf_Timestamp | null);
  'description'?: (string);
  'need_loader'?: (boolean);
  'createdAt'?: (_google_protobuf_Timestamp | null);
  'updatedAt'?: (_google_protobuf_Timestamp | null);
}

export interface Order__Output {
  'id': (string);
  'user_id': (string);
  'cargo_length': (number);
  'cargo_width': (number);
  'cargo_height': (number);
  'departure_longitude': (string);
  'departure_latitude': (string);
  'departure_time': (_google_protobuf_Timestamp__Output | null);
  'destination_longitude': (string);
  'destination_latitude': (string);
  'destination_time': (_google_protobuf_Timestamp__Output | null);
  'description': (string);
  'need_loader': (boolean);
  'createdAt': (_google_protobuf_Timestamp__Output | null);
  'updatedAt': (_google_protobuf_Timestamp__Output | null);
}
