// Original file: protos/order_service.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { AddDriverToMatchingInput as _com_widedelivery_order_proto_AddDriverToMatchingInput, AddDriverToMatchingInput__Output as _com_widedelivery_order_proto_AddDriverToMatchingInput__Output } from '../../../../com/widedelivery/order/proto/AddDriverToMatchingInput';
import type { CreateOrderInput as _com_widedelivery_order_proto_CreateOrderInput, CreateOrderInput__Output as _com_widedelivery_order_proto_CreateOrderInput__Output } from '../../../../com/widedelivery/order/proto/CreateOrderInput';
import type { CreateOrderResponse as _com_widedelivery_order_proto_CreateOrderResponse, CreateOrderResponse__Output as _com_widedelivery_order_proto_CreateOrderResponse__Output } from '../../../../com/widedelivery/order/proto/CreateOrderResponse';
import type { GenericResponse as _com_widedelivery_order_proto_GenericResponse, GenericResponse__Output as _com_widedelivery_order_proto_GenericResponse__Output } from '../../../../com/widedelivery/order/proto/GenericResponse';
import type { GetMatchedOrdersInput as _com_widedelivery_order_proto_GetMatchedOrdersInput, GetMatchedOrdersInput__Output as _com_widedelivery_order_proto_GetMatchedOrdersInput__Output } from '../../../../com/widedelivery/order/proto/GetMatchedOrdersInput';
import type { GetMatchedOrdersOutput as _com_widedelivery_order_proto_GetMatchedOrdersOutput, GetMatchedOrdersOutput__Output as _com_widedelivery_order_proto_GetMatchedOrdersOutput__Output } from '../../../../com/widedelivery/order/proto/GetMatchedOrdersOutput';
import type { GetOrderInput as _com_widedelivery_order_service_GetOrderInput, GetOrderInput__Output as _com_widedelivery_order_service_GetOrderInput__Output } from '../../../../com/widedelivery/order/service/GetOrderInput';
import type { GetOrdersRequest as _com_widedelivery_order_service_GetOrdersRequest, GetOrdersRequest__Output as _com_widedelivery_order_service_GetOrdersRequest__Output } from '../../../../com/widedelivery/order/service/GetOrdersRequest';
import type { GetOrdersResponse as _com_widedelivery_order_service_GetOrdersResponse, GetOrdersResponse__Output as _com_widedelivery_order_service_GetOrdersResponse__Output } from '../../../../com/widedelivery/order/service/GetOrdersResponse';
import type { LinkDriverWithOrderInput as _com_widedelivery_order_proto_LinkDriverWithOrderInput, LinkDriverWithOrderInput__Output as _com_widedelivery_order_proto_LinkDriverWithOrderInput__Output } from '../../../../com/widedelivery/order/proto/LinkDriverWithOrderInput';
import type { OrderResponse as _com_widedelivery_order_proto_OrderResponse, OrderResponse__Output as _com_widedelivery_order_proto_OrderResponse__Output } from '../../../../com/widedelivery/order/proto/OrderResponse';
import type { RemoveDriverFromMatchingInput as _com_widedelivery_order_proto_RemoveDriverFromMatchingInput, RemoveDriverFromMatchingInput__Output as _com_widedelivery_order_proto_RemoveDriverFromMatchingInput__Output } from '../../../../com/widedelivery/order/proto/RemoveDriverFromMatchingInput';
import type { SearchOrdersRequest as _com_widedelivery_order_service_SearchOrdersRequest, SearchOrdersRequest__Output as _com_widedelivery_order_service_SearchOrdersRequest__Output } from '../../../../com/widedelivery/order/service/SearchOrdersRequest';
import type { SearchOrdersResponse as _com_widedelivery_order_service_SearchOrdersResponse, SearchOrdersResponse__Output as _com_widedelivery_order_service_SearchOrdersResponse__Output } from '../../../../com/widedelivery/order/service/SearchOrdersResponse';

export interface OrderServiceClient extends grpc.Client {
  AddDriverForMatching(argument: _com_widedelivery_order_proto_AddDriverToMatchingInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_com_widedelivery_order_proto_GenericResponse__Output>): grpc.ClientUnaryCall;
  AddDriverForMatching(argument: _com_widedelivery_order_proto_AddDriverToMatchingInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_com_widedelivery_order_proto_GenericResponse__Output>): grpc.ClientUnaryCall;
  AddDriverForMatching(argument: _com_widedelivery_order_proto_AddDriverToMatchingInput, options: grpc.CallOptions, callback: grpc.requestCallback<_com_widedelivery_order_proto_GenericResponse__Output>): grpc.ClientUnaryCall;
  AddDriverForMatching(argument: _com_widedelivery_order_proto_AddDriverToMatchingInput, callback: grpc.requestCallback<_com_widedelivery_order_proto_GenericResponse__Output>): grpc.ClientUnaryCall;
  addDriverForMatching(argument: _com_widedelivery_order_proto_AddDriverToMatchingInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_com_widedelivery_order_proto_GenericResponse__Output>): grpc.ClientUnaryCall;
  addDriverForMatching(argument: _com_widedelivery_order_proto_AddDriverToMatchingInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_com_widedelivery_order_proto_GenericResponse__Output>): grpc.ClientUnaryCall;
  addDriverForMatching(argument: _com_widedelivery_order_proto_AddDriverToMatchingInput, options: grpc.CallOptions, callback: grpc.requestCallback<_com_widedelivery_order_proto_GenericResponse__Output>): grpc.ClientUnaryCall;
  addDriverForMatching(argument: _com_widedelivery_order_proto_AddDriverToMatchingInput, callback: grpc.requestCallback<_com_widedelivery_order_proto_GenericResponse__Output>): grpc.ClientUnaryCall;
  
  CreateOrder(argument: _com_widedelivery_order_proto_CreateOrderInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_com_widedelivery_order_proto_CreateOrderResponse__Output>): grpc.ClientUnaryCall;
  CreateOrder(argument: _com_widedelivery_order_proto_CreateOrderInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_com_widedelivery_order_proto_CreateOrderResponse__Output>): grpc.ClientUnaryCall;
  CreateOrder(argument: _com_widedelivery_order_proto_CreateOrderInput, options: grpc.CallOptions, callback: grpc.requestCallback<_com_widedelivery_order_proto_CreateOrderResponse__Output>): grpc.ClientUnaryCall;
  CreateOrder(argument: _com_widedelivery_order_proto_CreateOrderInput, callback: grpc.requestCallback<_com_widedelivery_order_proto_CreateOrderResponse__Output>): grpc.ClientUnaryCall;
  createOrder(argument: _com_widedelivery_order_proto_CreateOrderInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_com_widedelivery_order_proto_CreateOrderResponse__Output>): grpc.ClientUnaryCall;
  createOrder(argument: _com_widedelivery_order_proto_CreateOrderInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_com_widedelivery_order_proto_CreateOrderResponse__Output>): grpc.ClientUnaryCall;
  createOrder(argument: _com_widedelivery_order_proto_CreateOrderInput, options: grpc.CallOptions, callback: grpc.requestCallback<_com_widedelivery_order_proto_CreateOrderResponse__Output>): grpc.ClientUnaryCall;
  createOrder(argument: _com_widedelivery_order_proto_CreateOrderInput, callback: grpc.requestCallback<_com_widedelivery_order_proto_CreateOrderResponse__Output>): grpc.ClientUnaryCall;
  
  GetMatchedOrders(argument: _com_widedelivery_order_proto_GetMatchedOrdersInput, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_com_widedelivery_order_proto_GetMatchedOrdersOutput__Output>;
  GetMatchedOrders(argument: _com_widedelivery_order_proto_GetMatchedOrdersInput, options?: grpc.CallOptions): grpc.ClientReadableStream<_com_widedelivery_order_proto_GetMatchedOrdersOutput__Output>;
  getMatchedOrders(argument: _com_widedelivery_order_proto_GetMatchedOrdersInput, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_com_widedelivery_order_proto_GetMatchedOrdersOutput__Output>;
  getMatchedOrders(argument: _com_widedelivery_order_proto_GetMatchedOrdersInput, options?: grpc.CallOptions): grpc.ClientReadableStream<_com_widedelivery_order_proto_GetMatchedOrdersOutput__Output>;
  
  GetOrder(argument: _com_widedelivery_order_service_GetOrderInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_com_widedelivery_order_proto_OrderResponse__Output>): grpc.ClientUnaryCall;
  GetOrder(argument: _com_widedelivery_order_service_GetOrderInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_com_widedelivery_order_proto_OrderResponse__Output>): grpc.ClientUnaryCall;
  GetOrder(argument: _com_widedelivery_order_service_GetOrderInput, options: grpc.CallOptions, callback: grpc.requestCallback<_com_widedelivery_order_proto_OrderResponse__Output>): grpc.ClientUnaryCall;
  GetOrder(argument: _com_widedelivery_order_service_GetOrderInput, callback: grpc.requestCallback<_com_widedelivery_order_proto_OrderResponse__Output>): grpc.ClientUnaryCall;
  getOrder(argument: _com_widedelivery_order_service_GetOrderInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_com_widedelivery_order_proto_OrderResponse__Output>): grpc.ClientUnaryCall;
  getOrder(argument: _com_widedelivery_order_service_GetOrderInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_com_widedelivery_order_proto_OrderResponse__Output>): grpc.ClientUnaryCall;
  getOrder(argument: _com_widedelivery_order_service_GetOrderInput, options: grpc.CallOptions, callback: grpc.requestCallback<_com_widedelivery_order_proto_OrderResponse__Output>): grpc.ClientUnaryCall;
  getOrder(argument: _com_widedelivery_order_service_GetOrderInput, callback: grpc.requestCallback<_com_widedelivery_order_proto_OrderResponse__Output>): grpc.ClientUnaryCall;
  
  GetOrders(argument: _com_widedelivery_order_service_GetOrdersRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_com_widedelivery_order_service_GetOrdersResponse__Output>): grpc.ClientUnaryCall;
  GetOrders(argument: _com_widedelivery_order_service_GetOrdersRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_com_widedelivery_order_service_GetOrdersResponse__Output>): grpc.ClientUnaryCall;
  GetOrders(argument: _com_widedelivery_order_service_GetOrdersRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_com_widedelivery_order_service_GetOrdersResponse__Output>): grpc.ClientUnaryCall;
  GetOrders(argument: _com_widedelivery_order_service_GetOrdersRequest, callback: grpc.requestCallback<_com_widedelivery_order_service_GetOrdersResponse__Output>): grpc.ClientUnaryCall;
  getOrders(argument: _com_widedelivery_order_service_GetOrdersRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_com_widedelivery_order_service_GetOrdersResponse__Output>): grpc.ClientUnaryCall;
  getOrders(argument: _com_widedelivery_order_service_GetOrdersRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_com_widedelivery_order_service_GetOrdersResponse__Output>): grpc.ClientUnaryCall;
  getOrders(argument: _com_widedelivery_order_service_GetOrdersRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_com_widedelivery_order_service_GetOrdersResponse__Output>): grpc.ClientUnaryCall;
  getOrders(argument: _com_widedelivery_order_service_GetOrdersRequest, callback: grpc.requestCallback<_com_widedelivery_order_service_GetOrdersResponse__Output>): grpc.ClientUnaryCall;
  
  LinkDriverWithOrder(argument: _com_widedelivery_order_proto_LinkDriverWithOrderInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_com_widedelivery_order_proto_OrderResponse__Output>): grpc.ClientUnaryCall;
  LinkDriverWithOrder(argument: _com_widedelivery_order_proto_LinkDriverWithOrderInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_com_widedelivery_order_proto_OrderResponse__Output>): grpc.ClientUnaryCall;
  LinkDriverWithOrder(argument: _com_widedelivery_order_proto_LinkDriverWithOrderInput, options: grpc.CallOptions, callback: grpc.requestCallback<_com_widedelivery_order_proto_OrderResponse__Output>): grpc.ClientUnaryCall;
  LinkDriverWithOrder(argument: _com_widedelivery_order_proto_LinkDriverWithOrderInput, callback: grpc.requestCallback<_com_widedelivery_order_proto_OrderResponse__Output>): grpc.ClientUnaryCall;
  linkDriverWithOrder(argument: _com_widedelivery_order_proto_LinkDriverWithOrderInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_com_widedelivery_order_proto_OrderResponse__Output>): grpc.ClientUnaryCall;
  linkDriverWithOrder(argument: _com_widedelivery_order_proto_LinkDriverWithOrderInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_com_widedelivery_order_proto_OrderResponse__Output>): grpc.ClientUnaryCall;
  linkDriverWithOrder(argument: _com_widedelivery_order_proto_LinkDriverWithOrderInput, options: grpc.CallOptions, callback: grpc.requestCallback<_com_widedelivery_order_proto_OrderResponse__Output>): grpc.ClientUnaryCall;
  linkDriverWithOrder(argument: _com_widedelivery_order_proto_LinkDriverWithOrderInput, callback: grpc.requestCallback<_com_widedelivery_order_proto_OrderResponse__Output>): grpc.ClientUnaryCall;
  
  RemoveDriverFromMatching(argument: _com_widedelivery_order_proto_RemoveDriverFromMatchingInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_com_widedelivery_order_proto_GenericResponse__Output>): grpc.ClientUnaryCall;
  RemoveDriverFromMatching(argument: _com_widedelivery_order_proto_RemoveDriverFromMatchingInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_com_widedelivery_order_proto_GenericResponse__Output>): grpc.ClientUnaryCall;
  RemoveDriverFromMatching(argument: _com_widedelivery_order_proto_RemoveDriverFromMatchingInput, options: grpc.CallOptions, callback: grpc.requestCallback<_com_widedelivery_order_proto_GenericResponse__Output>): grpc.ClientUnaryCall;
  RemoveDriverFromMatching(argument: _com_widedelivery_order_proto_RemoveDriverFromMatchingInput, callback: grpc.requestCallback<_com_widedelivery_order_proto_GenericResponse__Output>): grpc.ClientUnaryCall;
  removeDriverFromMatching(argument: _com_widedelivery_order_proto_RemoveDriverFromMatchingInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_com_widedelivery_order_proto_GenericResponse__Output>): grpc.ClientUnaryCall;
  removeDriverFromMatching(argument: _com_widedelivery_order_proto_RemoveDriverFromMatchingInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_com_widedelivery_order_proto_GenericResponse__Output>): grpc.ClientUnaryCall;
  removeDriverFromMatching(argument: _com_widedelivery_order_proto_RemoveDriverFromMatchingInput, options: grpc.CallOptions, callback: grpc.requestCallback<_com_widedelivery_order_proto_GenericResponse__Output>): grpc.ClientUnaryCall;
  removeDriverFromMatching(argument: _com_widedelivery_order_proto_RemoveDriverFromMatchingInput, callback: grpc.requestCallback<_com_widedelivery_order_proto_GenericResponse__Output>): grpc.ClientUnaryCall;
  
  SearchOrders(argument: _com_widedelivery_order_service_SearchOrdersRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_com_widedelivery_order_service_SearchOrdersResponse__Output>): grpc.ClientUnaryCall;
  SearchOrders(argument: _com_widedelivery_order_service_SearchOrdersRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_com_widedelivery_order_service_SearchOrdersResponse__Output>): grpc.ClientUnaryCall;
  SearchOrders(argument: _com_widedelivery_order_service_SearchOrdersRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_com_widedelivery_order_service_SearchOrdersResponse__Output>): grpc.ClientUnaryCall;
  SearchOrders(argument: _com_widedelivery_order_service_SearchOrdersRequest, callback: grpc.requestCallback<_com_widedelivery_order_service_SearchOrdersResponse__Output>): grpc.ClientUnaryCall;
  searchOrders(argument: _com_widedelivery_order_service_SearchOrdersRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_com_widedelivery_order_service_SearchOrdersResponse__Output>): grpc.ClientUnaryCall;
  searchOrders(argument: _com_widedelivery_order_service_SearchOrdersRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_com_widedelivery_order_service_SearchOrdersResponse__Output>): grpc.ClientUnaryCall;
  searchOrders(argument: _com_widedelivery_order_service_SearchOrdersRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_com_widedelivery_order_service_SearchOrdersResponse__Output>): grpc.ClientUnaryCall;
  searchOrders(argument: _com_widedelivery_order_service_SearchOrdersRequest, callback: grpc.requestCallback<_com_widedelivery_order_service_SearchOrdersResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface OrderServiceHandlers extends grpc.UntypedServiceImplementation {
  AddDriverForMatching: grpc.handleUnaryCall<_com_widedelivery_order_proto_AddDriverToMatchingInput__Output, _com_widedelivery_order_proto_GenericResponse>;
  
  CreateOrder: grpc.handleUnaryCall<_com_widedelivery_order_proto_CreateOrderInput__Output, _com_widedelivery_order_proto_CreateOrderResponse>;
  
  GetMatchedOrders: grpc.handleServerStreamingCall<_com_widedelivery_order_proto_GetMatchedOrdersInput__Output, _com_widedelivery_order_proto_GetMatchedOrdersOutput>;
  
  GetOrder: grpc.handleUnaryCall<_com_widedelivery_order_service_GetOrderInput__Output, _com_widedelivery_order_proto_OrderResponse>;
  
  GetOrders: grpc.handleUnaryCall<_com_widedelivery_order_service_GetOrdersRequest__Output, _com_widedelivery_order_service_GetOrdersResponse>;
  
  LinkDriverWithOrder: grpc.handleUnaryCall<_com_widedelivery_order_proto_LinkDriverWithOrderInput__Output, _com_widedelivery_order_proto_OrderResponse>;
  
  RemoveDriverFromMatching: grpc.handleUnaryCall<_com_widedelivery_order_proto_RemoveDriverFromMatchingInput__Output, _com_widedelivery_order_proto_GenericResponse>;
  
  SearchOrders: grpc.handleUnaryCall<_com_widedelivery_order_service_SearchOrdersRequest__Output, _com_widedelivery_order_service_SearchOrdersResponse>;
  
}

export interface OrderServiceDefinition extends grpc.ServiceDefinition {
  AddDriverForMatching: MethodDefinition<_com_widedelivery_order_proto_AddDriverToMatchingInput, _com_widedelivery_order_proto_GenericResponse, _com_widedelivery_order_proto_AddDriverToMatchingInput__Output, _com_widedelivery_order_proto_GenericResponse__Output>
  CreateOrder: MethodDefinition<_com_widedelivery_order_proto_CreateOrderInput, _com_widedelivery_order_proto_CreateOrderResponse, _com_widedelivery_order_proto_CreateOrderInput__Output, _com_widedelivery_order_proto_CreateOrderResponse__Output>
  GetMatchedOrders: MethodDefinition<_com_widedelivery_order_proto_GetMatchedOrdersInput, _com_widedelivery_order_proto_GetMatchedOrdersOutput, _com_widedelivery_order_proto_GetMatchedOrdersInput__Output, _com_widedelivery_order_proto_GetMatchedOrdersOutput__Output>
  GetOrder: MethodDefinition<_com_widedelivery_order_service_GetOrderInput, _com_widedelivery_order_proto_OrderResponse, _com_widedelivery_order_service_GetOrderInput__Output, _com_widedelivery_order_proto_OrderResponse__Output>
  GetOrders: MethodDefinition<_com_widedelivery_order_service_GetOrdersRequest, _com_widedelivery_order_service_GetOrdersResponse, _com_widedelivery_order_service_GetOrdersRequest__Output, _com_widedelivery_order_service_GetOrdersResponse__Output>
  LinkDriverWithOrder: MethodDefinition<_com_widedelivery_order_proto_LinkDriverWithOrderInput, _com_widedelivery_order_proto_OrderResponse, _com_widedelivery_order_proto_LinkDriverWithOrderInput__Output, _com_widedelivery_order_proto_OrderResponse__Output>
  RemoveDriverFromMatching: MethodDefinition<_com_widedelivery_order_proto_RemoveDriverFromMatchingInput, _com_widedelivery_order_proto_GenericResponse, _com_widedelivery_order_proto_RemoveDriverFromMatchingInput__Output, _com_widedelivery_order_proto_GenericResponse__Output>
  SearchOrders: MethodDefinition<_com_widedelivery_order_service_SearchOrdersRequest, _com_widedelivery_order_service_SearchOrdersResponse, _com_widedelivery_order_service_SearchOrdersRequest__Output, _com_widedelivery_order_service_SearchOrdersResponse__Output>
}
