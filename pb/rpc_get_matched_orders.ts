import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';


type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  com: {
    widedelivery: {
      order: {
        proto: {
          GenericResponse: MessageTypeDefinition
          GetMatchedOrdersInput: MessageTypeDefinition
          GetMatchedOrdersOutput: MessageTypeDefinition
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

