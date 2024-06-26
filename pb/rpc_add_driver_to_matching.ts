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

