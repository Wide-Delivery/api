// Original file: protos/rpc_create_order.proto

import type { Order as _order_Order, Order__Output as _order_Order__Output } from '../order/Order';

export interface CreateOrderResponse {
  'order'?: (_order_Order | null);
}

export interface CreateOrderResponse__Output {
  'order': (_order_Order__Output | null);
}
