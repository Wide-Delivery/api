// Original file: protos/rpc_get_matched_orders.proto

import type { Order as _order_Order, Order__Output as _order_Order__Output } from '../order/Order';

export interface GetMatchedOrdersOutput {
  'order'?: (_order_Order | null);
}

export interface GetMatchedOrdersOutput__Output {
  'order': (_order_Order__Output | null);
}
