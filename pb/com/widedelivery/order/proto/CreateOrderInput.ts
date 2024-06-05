// Original file: protos/rpc_create_order.proto

import type { UserDTO as _auth_UserDTO, UserDTO__Output as _auth_UserDTO__Output } from '../../../../auth/UserDTO';
import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../../../../google/protobuf/Timestamp';

export interface CreateOrderInput {
  'user'?: (_auth_UserDTO | null);
  'cargo_type'?: (string);
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
}

export interface CreateOrderInput__Output {
  'user': (_auth_UserDTO__Output | null);
  'cargo_type': (string);
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
}
