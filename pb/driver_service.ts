import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { DriverServiceClient as _driver_DriverServiceClient, DriverServiceDefinition as _driver_DriverServiceDefinition } from './driver/DriverService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  driver: {
    CreateDriverTripInput: MessageTypeDefinition
    Driver: MessageTypeDefinition
    DriverId: MessageTypeDefinition
    DriverService: SubtypeConstructor<typeof grpc.Client, _driver_DriverServiceClient> & { service: _driver_DriverServiceDefinition }
    DriverTrip: MessageTypeDefinition
    DriverTripId: MessageTypeDefinition
    DriverTripStatus: EnumTypeDefinition
    DriverTrips: MessageTypeDefinition
    DriverWithTrips: MessageTypeDefinition
    GenericResponse: MessageTypeDefinition
    MakeDriverFromUserInput: MessageTypeDefinition
    Truck: MessageTypeDefinition
    TruckInput: MessageTypeDefinition
    TruckType: EnumTypeDefinition
    UpdateDriverTripInput: MessageTypeDefinition
    UserId: MessageTypeDefinition
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

