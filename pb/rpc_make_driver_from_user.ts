import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';


type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  driver: {
    MakeDriverFromUserInput: MessageTypeDefinition
    Truck: MessageTypeDefinition
    TruckInput: MessageTypeDefinition
    TruckType: EnumTypeDefinition
  }
}

