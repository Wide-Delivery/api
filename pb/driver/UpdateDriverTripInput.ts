// Original file: protos/trip.proto

import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../google/protobuf/Timestamp';

export interface UpdateDriverTripInput {
  'driver_trip_id'?: (string);
  'departure_longitude'?: (string);
  'departure_latitude'?: (string);
  'departure_time'?: (_google_protobuf_Timestamp | null);
  'destination_longitude'?: (string);
  'destination_latitude'?: (string);
  'destination_time'?: (_google_protobuf_Timestamp | null);
  'free_space_length'?: (number | string);
  'free_space_width'?: (number | string);
  'free_space_height'?: (number | string);
}

export interface UpdateDriverTripInput__Output {
  'driver_trip_id': (string);
  'departure_longitude': (string);
  'departure_latitude': (string);
  'departure_time': (_google_protobuf_Timestamp__Output | null);
  'destination_longitude': (string);
  'destination_latitude': (string);
  'destination_time': (_google_protobuf_Timestamp__Output | null);
  'free_space_length': (number);
  'free_space_width': (number);
  'free_space_height': (number);
}
