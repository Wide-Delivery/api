import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { OrderServiceClient as _com_widedelivery_order_service_OrderServiceClient, OrderServiceDefinition as _com_widedelivery_order_service_OrderServiceDefinition } from './com/widedelivery/order/service/OrderService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  com: {
    widedelivery: {
      auth: {
        proto: {
          GenericResponse: MessageTypeDefinition
          User: MessageTypeDefinition
          UserDTO: MessageTypeDefinition
          UserResponse: MessageTypeDefinition
        }
      }
      driver: {
        proto: {
          CreateDriverTripInput: MessageTypeDefinition
          Driver: MessageTypeDefinition
          DriverExtendedModel: MessageTypeDefinition
          DriverTrip: MessageTypeDefinition
          DriverTripStatus: EnumTypeDefinition
          DriverTrips: MessageTypeDefinition
          DriverWithTrips: MessageTypeDefinition
          Truck: MessageTypeDefinition
          TruckInput: MessageTypeDefinition
          TruckType: EnumTypeDefinition
          UpdateDriverTripInput: MessageTypeDefinition
        }
      }
      order: {
        proto: {
          AddDriverToMatchingInput: MessageTypeDefinition
          CreateOrderInput: MessageTypeDefinition
          CreateOrderResponse: MessageTypeDefinition
          GenericResponse: MessageTypeDefinition
          GetMatchedOrdersInput: MessageTypeDefinition
          GetMatchedOrdersOutput: MessageTypeDefinition
          LinkDriverWithOrderInput: MessageTypeDefinition
          Order: MessageTypeDefinition
          OrderResponse: MessageTypeDefinition
          OrderStatus: EnumTypeDefinition
          RemoveDriverFromMatchingInput: MessageTypeDefinition
        }
        service: {
          GetOrderInput: MessageTypeDefinition
          GetOrdersRequest: MessageTypeDefinition
          GetOrdersResponse: MessageTypeDefinition
          OrderService: SubtypeConstructor<typeof grpc.Client, _com_widedelivery_order_service_OrderServiceClient> & { service: _com_widedelivery_order_service_OrderServiceDefinition }
          SearchOrdersRequest: MessageTypeDefinition
          SearchOrdersResponse: MessageTypeDefinition
        }
      }
    }
  }
  google: {
    protobuf: {
      Timestamp: MessageTypeDefinition
    }
  }
}

