import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';


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
      order: {
        proto: {
          CreateOrderInput: MessageTypeDefinition
          CreateOrderResponse: MessageTypeDefinition
          GenericResponse: MessageTypeDefinition
          Order: MessageTypeDefinition
          OrderResponse: MessageTypeDefinition
          OrderStatus: EnumTypeDefinition
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

