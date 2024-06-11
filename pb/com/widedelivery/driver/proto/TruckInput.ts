// Original file: protos/truck.proto


export interface TruckInput {
  'truck_brand'?: (string);
  'truck_model'?: (string);
  'truck_plate'?: (string);
  'truck_serial_number'?: (string);
  'truck_color'?: (string);
  'free_space_length'?: (number | string);
  'free_space_width'?: (number | string);
  'free_space_height'?: (number | string);
}

export interface TruckInput__Output {
  'truck_brand': (string);
  'truck_model': (string);
  'truck_plate': (string);
  'truck_serial_number': (string);
  'truck_color': (string);
  'free_space_length': (number);
  'free_space_width': (number);
  'free_space_height': (number);
}
