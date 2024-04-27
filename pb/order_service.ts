import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { OrderServiceClient as _order_OrderServiceClient, OrderServiceDefinition as _order_OrderServiceDefinition } from './order/OrderService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  auth: {
    GenericResponse: MessageTypeDefinition
    User: MessageTypeDefinition
    UserDTO: MessageTypeDefinition
    UserResponse: MessageTypeDefinition
  }
  google: {
    protobuf: {
      Timestamp: MessageTypeDefinition
    }
  }
  order: {
    CreateOrderInput: MessageTypeDefinition
    CreateOrderResponse: MessageTypeDefinition
    GenericResponse: MessageTypeDefinition
    GetOrderInput: MessageTypeDefinition
    Order: MessageTypeDefinition
    OrderResponse: MessageTypeDefinition
    OrderService: SubtypeConstructor<typeof grpc.Client, _order_OrderServiceClient> & { service: _order_OrderServiceDefinition }
  }
}

