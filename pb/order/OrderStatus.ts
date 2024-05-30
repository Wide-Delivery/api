// Original file: protos/order.proto

export const OrderStatus = {
  CREATED: 'CREATED',
  NEED_PAYMENT: 'NEED_PAYMENT',
  MATCHING_DRIVER: 'MATCHING_DRIVER',
  CANNOT_MATCH_DRIVER: 'CANNOT_MATCH_DRIVER',
  READY: 'READY',
  DRIVER_MOVES_TO_PICKUP: 'DRIVER_MOVES_TO_PICKUP',
  WAIT_FOR_PICKUP: 'WAIT_FOR_PICKUP',
  PICKUP: 'PICKUP',
  TRANSPORTATION: 'TRANSPORTATION',
  UNLOADING: 'UNLOADING',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED',
} as const;

export type OrderStatus =
  | 'CREATED'
  | 0
  | 'NEED_PAYMENT'
  | 1
  | 'MATCHING_DRIVER'
  | 2
  | 'CANNOT_MATCH_DRIVER'
  | 3
  | 'READY'
  | 4
  | 'DRIVER_MOVES_TO_PICKUP'
  | 5
  | 'WAIT_FOR_PICKUP'
  | 6
  | 'PICKUP'
  | 7
  | 'TRANSPORTATION'
  | 8
  | 'UNLOADING'
  | 9
  | 'COMPLETED'
  | 10
  | 'CANCELLED'
  | 11

export type OrderStatus__Output = typeof OrderStatus[keyof typeof OrderStatus]
