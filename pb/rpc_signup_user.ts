import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';


type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  com: {
    widedelivery: {
      auth: {
        proto: {
          GenericResponse: MessageTypeDefinition
          SignUpUserInput: MessageTypeDefinition
          SignUpUserResponse: MessageTypeDefinition
          User: MessageTypeDefinition
          UserDTO: MessageTypeDefinition
          UserResponse: MessageTypeDefinition
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

