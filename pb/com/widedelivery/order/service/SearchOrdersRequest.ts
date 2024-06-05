// Original file: protos/order_service.proto


export interface SearchOrdersRequest {
  'search_params'?: ({[key: string]: string});
  'page_number'?: (number);
  'page_size'?: (number);
}

export interface SearchOrdersRequest__Output {
  'search_params': ({[key: string]: string});
  'page_number': (number);
  'page_size': (number);
}
