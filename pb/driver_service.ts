import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { DriverServiceClient as _com_widedelivery_driver_service_DriverServiceClient, DriverServiceDefinition as _com_widedelivery_driver_service_DriverServiceDefinition } from './com/widedelivery/driver/service/DriverService';

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
          MakeDriverFromUserInput: MessageTypeDefinition
          Truck: MessageTypeDefinition
          TruckInput: MessageTypeDefinition
          TruckType: EnumTypeDefinition
          UpdateDriverTripInput: MessageTypeDefinition
        }
        service: {
          DriverId: MessageTypeDefinition
          DriverService: SubtypeConstructor<typeof grpc.Client, _com_widedelivery_driver_service_DriverServiceClient> & { service: _com_widedelivery_driver_service_DriverServiceDefinition }
          DriverTripId: MessageTypeDefinition
          GenericResponse: MessageTypeDefinition
          UserId: MessageTypeDefinition
        }
      }
      order: {
        proto: {
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

