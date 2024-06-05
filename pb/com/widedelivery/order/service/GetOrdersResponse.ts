// Original file: protos/order_service.proto

import type { Order as _com_widedelivery_order_proto_Order, Order__Output as _com_widedelivery_order_proto_Order__Output } from '../../../../com/widedelivery/order/proto/Order';

export interface GetOrdersResponse {
  'orders'?: (_com_widedelivery_order_proto_Order)[];
  'total_pages'?: (number);
  'current_page'?: (number);
}

export interface GetOrdersResponse__Output {
  'orders': (_com_widedelivery_order_proto_Order__Output)[];
  'total_pages': (number);
  'current_page': (number);
}
