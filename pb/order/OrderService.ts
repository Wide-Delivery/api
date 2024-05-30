// Original file: protos/order_service.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CreateOrderInput as _order_CreateOrderInput, CreateOrderInput__Output as _order_CreateOrderInput__Output } from '../order/CreateOrderInput';
import type { CreateOrderResponse as _order_CreateOrderResponse, CreateOrderResponse__Output as _order_CreateOrderResponse__Output } from '../order/CreateOrderResponse';
import type { GetOrderInput as _order_GetOrderInput, GetOrderInput__Output as _order_GetOrderInput__Output } from '../order/GetOrderInput';
import type { OrderResponse as _order_OrderResponse, OrderResponse__Output as _order_OrderResponse__Output } from '../order/OrderResponse';

export interface OrderServiceClient extends grpc.Client {
  CreateOrder(argument: _order_CreateOrderInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_order_CreateOrderResponse__Output>): grpc.ClientUnaryCall;
  CreateOrder(argument: _order_CreateOrderInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_order_CreateOrderResponse__Output>): grpc.ClientUnaryCall;
  CreateOrder(argument: _order_CreateOrderInput, options: grpc.CallOptions, callback: grpc.requestCallback<_order_CreateOrderResponse__Output>): grpc.ClientUnaryCall;
  CreateOrder(argument: _order_CreateOrderInput, callback: grpc.requestCallback<_order_CreateOrderResponse__Output>): grpc.ClientUnaryCall;
  createOrder(argument: _order_CreateOrderInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_order_CreateOrderResponse__Output>): grpc.ClientUnaryCall;
  createOrder(argument: _order_CreateOrderInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_order_CreateOrderResponse__Output>): grpc.ClientUnaryCall;
  createOrder(argument: _order_CreateOrderInput, options: grpc.CallOptions, callback: grpc.requestCallback<_order_CreateOrderResponse__Output>): grpc.ClientUnaryCall;
  createOrder(argument: _order_CreateOrderInput, callback: grpc.requestCallback<_order_CreateOrderResponse__Output>): grpc.ClientUnaryCall;
  
  GetOrder(argument: _order_GetOrderInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_order_OrderResponse__Output>): grpc.ClientUnaryCall;
  GetOrder(argument: _order_GetOrderInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_order_OrderResponse__Output>): grpc.ClientUnaryCall;
  GetOrder(argument: _order_GetOrderInput, options: grpc.CallOptions, callback: grpc.requestCallback<_order_OrderResponse__Output>): grpc.ClientUnaryCall;
  GetOrder(argument: _order_GetOrderInput, callback: grpc.requestCallback<_order_OrderResponse__Output>): grpc.ClientUnaryCall;
  getOrder(argument: _order_GetOrderInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_order_OrderResponse__Output>): grpc.ClientUnaryCall;
  getOrder(argument: _order_GetOrderInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_order_OrderResponse__Output>): grpc.ClientUnaryCall;
  getOrder(argument: _order_GetOrderInput, options: grpc.CallOptions, callback: grpc.requestCallback<_order_OrderResponse__Output>): grpc.ClientUnaryCall;
  getOrder(argument: _order_GetOrderInput, callback: grpc.requestCallback<_order_OrderResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface OrderServiceHandlers extends grpc.UntypedServiceImplementation {
  CreateOrder: grpc.handleUnaryCall<_order_CreateOrderInput__Output, _order_CreateOrderResponse>;
  
  GetOrder: grpc.handleUnaryCall<_order_GetOrderInput__Output, _order_OrderResponse>;
  
}

export interface OrderServiceDefinition extends grpc.ServiceDefinition {
  CreateOrder: MethodDefinition<_order_CreateOrderInput, _order_CreateOrderResponse, _order_CreateOrderInput__Output, _order_CreateOrderResponse__Output>
  GetOrder: MethodDefinition<_order_GetOrderInput, _order_OrderResponse, _order_GetOrderInput__Output, _order_OrderResponse__Output>
}
