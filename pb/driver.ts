import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';


type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  driver: {
    CreateDriverTripInput: MessageTypeDefinition
    Driver: MessageTypeDefinition
    DriverTrip: MessageTypeDefinition
    DriverTripStatus: EnumTypeDefinition
    DriverTrips: MessageTypeDefinition
    DriverWithTrips: MessageTypeDefinition
    Truck: MessageTypeDefinition
    TruckInput: MessageTypeDefinition
    TruckType: EnumTypeDefinition
    UpdateDriverTripInput: MessageTypeDefinition
  }
  google: {
    protobuf: {
      Timestamp: MessageTypeDefinition
    }
  }
  order: {
    GenericResponse: MessageTypeDefinition
    Order: MessageTypeDefinition
    OrderResponse: MessageTypeDefinition
    OrderStatus: EnumTypeDefinition
  }
}

