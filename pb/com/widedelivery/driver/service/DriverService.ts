// Original file: protos/driver_service.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CreateDriverTripInput as _com_widedelivery_driver_proto_CreateDriverTripInput, CreateDriverTripInput__Output as _com_widedelivery_driver_proto_CreateDriverTripInput__Output } from '../../../../com/widedelivery/driver/proto/CreateDriverTripInput';
import type { Driver as _com_widedelivery_driver_proto_Driver, Driver__Output as _com_widedelivery_driver_proto_Driver__Output } from '../../../../com/widedelivery/driver/proto/Driver';
import type { DriverId as _com_widedelivery_driver_service_DriverId, DriverId__Output as _com_widedelivery_driver_service_DriverId__Output } from '../../../../com/widedelivery/driver/service/DriverId';
import type { DriverTrip as _com_widedelivery_driver_proto_DriverTrip, DriverTrip__Output as _com_widedelivery_driver_proto_DriverTrip__Output } from '../../../../com/widedelivery/driver/proto/DriverTrip';
import type { DriverTripId as _com_widedelivery_driver_service_DriverTripId, DriverTripId__Output as _com_widedelivery_driver_service_DriverTripId__Output } from '../../../../com/widedelivery/driver/service/DriverTripId';
import type { DriverTrips as _com_widedelivery_driver_proto_DriverTrips, DriverTrips__Output as _com_widedelivery_driver_proto_DriverTrips__Output } from '../../../../com/widedelivery/driver/proto/DriverTrips';
import type { GenericResponse as _com_widedelivery_driver_service_GenericResponse, GenericResponse__Output as _com_widedelivery_driver_service_GenericResponse__Output } from '../../../../com/widedelivery/driver/service/GenericResponse';
import type { MakeDriverFromUserInput as _com_widedelivery_driver_proto_MakeDriverFromUserInput, MakeDriverFromUserInput__Output as _com_widedelivery_driver_proto_MakeDriverFromUserInput__Output } from '../../../../com/widedelivery/driver/proto/MakeDriverFromUserInput';
import type { UpdateDriverTripInput as _com_widedelivery_driver_proto_UpdateDriverTripInput, UpdateDriverTripInput__Output as _com_widedelivery_driver_proto_UpdateDriverTripInput__Output } from '../../../../com/widedelivery/driver/proto/UpdateDriverTripInput';
import type { UserId as _com_widedelivery_driver_service_UserId, UserId__Output as _com_widedelivery_driver_service_UserId__Output } from '../../../../com/widedelivery/driver/service/UserId';

export interface DriverServiceClient extends grpc.Client {
  CreateDriverTrip(argument: _com_widedelivery_driver_proto_CreateDriverTripInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_com_widedelivery_driver_proto_DriverTrip__Output>): grpc.ClientUnaryCall;
  CreateDriverTrip(argument: _com_widedelivery_driver_proto_CreateDriverTripInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_com_widedelivery_driver_proto_DriverTrip__Output>): grpc.ClientUnaryCall;
  CreateDriverTrip(argument: _com_widedelivery_driver_proto_CreateDriverTripInput, options: grpc.CallOptions, callback: grpc.requestCallback<_com_widedelivery_driver_proto_DriverTrip__Output>): grpc.ClientUnaryCall;
  CreateDriverTrip(argument: _com_widedelivery_driver_proto_CreateDriverTripInput, callback: grpc.requestCallback<_com_widedelivery_driver_proto_DriverTrip__Output>): grpc.ClientUnaryCall;
  createDriverTrip(argument: _com_widedelivery_driver_proto_CreateDriverTripInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_com_widedelivery_driver_proto_DriverTrip__Output>): grpc.ClientUnaryCall;
  createDriverTrip(argument: _com_widedelivery_driver_proto_CreateDriverTripInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_com_widedelivery_driver_proto_DriverTrip__Output>): grpc.ClientUnaryCall;
  createDriverTrip(argument: _com_widedelivery_driver_proto_CreateDriverTripInput, options: grpc.CallOptions, callback: grpc.requestCallback<_com_widedelivery_driver_proto_DriverTrip__Output>): grpc.ClientUnaryCall;
  createDriverTrip(argument: _com_widedelivery_driver_proto_CreateDriverTripInput, callback: grpc.requestCallback<_com_widedelivery_driver_proto_DriverTrip__Output>): grpc.ClientUnaryCall;
  
  DeleteDriverTrip(argument: _com_widedelivery_driver_service_DriverTripId, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_com_widedelivery_driver_service_GenericResponse__Output>): grpc.ClientUnaryCall;
  DeleteDriverTrip(argument: _com_widedelivery_driver_service_DriverTripId, metadata: grpc.Metadata, callback: grpc.requestCallback<_com_widedelivery_driver_service_GenericResponse__Output>): grpc.ClientUnaryCall;
  DeleteDriverTrip(argument: _com_widedelivery_driver_service_DriverTripId, options: grpc.CallOptions, callback: grpc.requestCallback<_com_widedelivery_driver_service_GenericResponse__Output>): grpc.ClientUnaryCall;
  DeleteDriverTrip(argument: _com_widedelivery_driver_service_DriverTripId, callback: grpc.requestCallback<_com_widedelivery_driver_service_GenericResponse__Output>): grpc.ClientUnaryCall;
  deleteDriverTrip(argument: _com_widedelivery_driver_service_DriverTripId, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_com_widedelivery_driver_service_GenericResponse__Output>): grpc.ClientUnaryCall;
  deleteDriverTrip(argument: _com_widedelivery_driver_service_DriverTripId, metadata: grpc.Metadata, callback: grpc.requestCallback<_com_widedelivery_driver_service_GenericResponse__Output>): grpc.ClientUnaryCall;
  deleteDriverTrip(argument: _com_widedelivery_driver_service_DriverTripId, options: grpc.CallOptions, callback: grpc.requestCallback<_com_widedelivery_driver_service_GenericResponse__Output>): grpc.ClientUnaryCall;
  deleteDriverTrip(argument: _com_widedelivery_driver_service_DriverTripId, callback: grpc.requestCallback<_com_widedelivery_driver_service_GenericResponse__Output>): grpc.ClientUnaryCall;
  
  GetDriverById(argument: _com_widedelivery_driver_service_DriverId, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_com_widedelivery_driver_proto_Driver__Output>): grpc.ClientUnaryCall;
  GetDriverById(argument: _com_widedelivery_driver_service_DriverId, metadata: grpc.Metadata, callback: grpc.requestCallback<_com_widedelivery_driver_proto_Driver__Output>): grpc.ClientUnaryCall;
  GetDriverById(argument: _com_widedelivery_driver_service_DriverId, options: grpc.CallOptions, callback: grpc.requestCallback<_com_widedelivery_driver_proto_Driver__Output>): grpc.ClientUnaryCall;
  GetDriverById(argument: _com_widedelivery_driver_service_DriverId, callback: grpc.requestCallback<_com_widedelivery_driver_proto_Driver__Output>): grpc.ClientUnaryCall;
  getDriverById(argument: _com_widedelivery_driver_service_DriverId, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_com_widedelivery_driver_proto_Driver__Output>): grpc.ClientUnaryCall;
  getDriverById(argument: _com_widedelivery_driver_service_DriverId, metadata: grpc.Metadata, callback: grpc.requestCallback<_com_widedelivery_driver_proto_Driver__Output>): grpc.ClientUnaryCall;
  getDriverById(argument: _com_widedelivery_driver_service_DriverId, options: grpc.CallOptions, callback: grpc.requestCallback<_com_widedelivery_driver_proto_Driver__Output>): grpc.ClientUnaryCall;
  getDriverById(argument: _com_widedelivery_driver_service_DriverId, callback: grpc.requestCallback<_com_widedelivery_driver_proto_Driver__Output>): grpc.ClientUnaryCall;
  
  GetDriverByUserId(argument: _com_widedelivery_driver_service_UserId, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_com_widedelivery_driver_proto_Driver__Output>): grpc.ClientUnaryCall;
  GetDriverByUserId(argument: _com_widedelivery_driver_service_UserId, metadata: grpc.Metadata, callback: grpc.requestCallback<_com_widedelivery_driver_proto_Driver__Output>): grpc.ClientUnaryCall;
  GetDriverByUserId(argument: _com_widedelivery_driver_service_UserId, options: grpc.CallOptions, callback: grpc.requestCallback<_com_widedelivery_driver_proto_Driver__Output>): grpc.ClientUnaryCall;
  GetDriverByUserId(argument: _com_widedelivery_driver_service_UserId, callback: grpc.requestCallback<_com_widedelivery_driver_proto_Driver__Output>): grpc.ClientUnaryCall;
  getDriverByUserId(argument: _com_widedelivery_driver_service_UserId, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_com_widedelivery_driver_proto_Driver__Output>): grpc.ClientUnaryCall;
  getDriverByUserId(argument: _com_widedelivery_driver_service_UserId, metadata: grpc.Metadata, callback: grpc.requestCallback<_com_widedelivery_driver_proto_Driver__Output>): grpc.ClientUnaryCall;
  getDriverByUserId(argument: _com_widedelivery_driver_service_UserId, options: grpc.CallOptions, callback: grpc.requestCallback<_com_widedelivery_driver_proto_Driver__Output>): grpc.ClientUnaryCall;
  getDriverByUserId(argument: _com_widedelivery_driver_service_UserId, callback: grpc.requestCallback<_com_widedelivery_driver_proto_Driver__Output>): grpc.ClientUnaryCall;
  
  GetDriverTripById(argument: _com_widedelivery_driver_service_DriverTripId, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_com_widedelivery_driver_proto_DriverTrip__Output>): grpc.ClientUnaryCall;
  GetDriverTripById(argument: _com_widedelivery_driver_service_DriverTripId, metadata: grpc.Metadata, callback: grpc.requestCallback<_com_widedelivery_driver_proto_DriverTrip__Output>): grpc.ClientUnaryCall;
  GetDriverTripById(argument: _com_widedelivery_driver_service_DriverTripId, options: grpc.CallOptions, callback: grpc.requestCallback<_com_widedelivery_driver_proto_DriverTrip__Output>): grpc.ClientUnaryCall;
  GetDriverTripById(argument: _com_widedelivery_driver_service_DriverTripId, callback: grpc.requestCallback<_com_widedelivery_driver_proto_DriverTrip__Output>): grpc.ClientUnaryCall;
  getDriverTripById(argument: _com_widedelivery_driver_service_DriverTripId, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_com_widedelivery_driver_proto_DriverTrip__Output>): grpc.ClientUnaryCall;
  getDriverTripById(argument: _com_widedelivery_driver_service_DriverTripId, metadata: grpc.Metadata, callback: grpc.requestCallback<_com_widedelivery_driver_proto_DriverTrip__Output>): grpc.ClientUnaryCall;
  getDriverTripById(argument: _com_widedelivery_driver_service_DriverTripId, options: grpc.CallOptions, callback: grpc.requestCallback<_com_widedelivery_driver_proto_DriverTrip__Output>): grpc.ClientUnaryCall;
  getDriverTripById(argument: _com_widedelivery_driver_service_DriverTripId, callback: grpc.requestCallback<_com_widedelivery_driver_proto_DriverTrip__Output>): grpc.ClientUnaryCall;
  
  GetDriverTrips(argument: _com_widedelivery_driver_service_DriverId, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_com_widedelivery_driver_proto_DriverTrips__Output>): grpc.ClientUnaryCall;
  GetDriverTrips(argument: _com_widedelivery_driver_service_DriverId, metadata: grpc.Metadata, callback: grpc.requestCallback<_com_widedelivery_driver_proto_DriverTrips__Output>): grpc.ClientUnaryCall;
  GetDriverTrips(argument: _com_widedelivery_driver_service_DriverId, options: grpc.CallOptions, callback: grpc.requestCallback<_com_widedelivery_driver_proto_DriverTrips__Output>): grpc.ClientUnaryCall;
  GetDriverTrips(argument: _com_widedelivery_driver_service_DriverId, callback: grpc.requestCallback<_com_widedelivery_driver_proto_DriverTrips__Output>): grpc.ClientUnaryCall;
  getDriverTrips(argument: _com_widedelivery_driver_service_DriverId, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_com_widedelivery_driver_proto_DriverTrips__Output>): grpc.ClientUnaryCall;
  getDriverTrips(argument: _com_widedelivery_driver_service_DriverId, metadata: grpc.Metadata, callback: grpc.requestCallback<_com_widedelivery_driver_proto_DriverTrips__Output>): grpc.ClientUnaryCall;
  getDriverTrips(argument: _com_widedelivery_driver_service_DriverId, options: grpc.CallOptions, callback: grpc.requestCallback<_com_widedelivery_driver_proto_DriverTrips__Output>): grpc.ClientUnaryCall;
  getDriverTrips(argument: _com_widedelivery_driver_service_DriverId, callback: grpc.requestCallback<_com_widedelivery_driver_proto_DriverTrips__Output>): grpc.ClientUnaryCall;
  
  MakeDriverFromUser(argument: _com_widedelivery_driver_proto_MakeDriverFromUserInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_com_widedelivery_driver_proto_Driver__Output>): grpc.ClientUnaryCall;
  MakeDriverFromUser(argument: _com_widedelivery_driver_proto_MakeDriverFromUserInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_com_widedelivery_driver_proto_Driver__Output>): grpc.ClientUnaryCall;
  MakeDriverFromUser(argument: _com_widedelivery_driver_proto_MakeDriverFromUserInput, options: grpc.CallOptions, callback: grpc.requestCallback<_com_widedelivery_driver_proto_Driver__Output>): grpc.ClientUnaryCall;
  MakeDriverFromUser(argument: _com_widedelivery_driver_proto_MakeDriverFromUserInput, callback: grpc.requestCallback<_com_widedelivery_driver_proto_Driver__Output>): grpc.ClientUnaryCall;
  makeDriverFromUser(argument: _com_widedelivery_driver_proto_MakeDriverFromUserInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_com_widedelivery_driver_proto_Driver__Output>): grpc.ClientUnaryCall;
  makeDriverFromUser(argument: _com_widedelivery_driver_proto_MakeDriverFromUserInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_com_widedelivery_driver_proto_Driver__Output>): grpc.ClientUnaryCall;
  makeDriverFromUser(argument: _com_widedelivery_driver_proto_MakeDriverFromUserInput, options: grpc.CallOptions, callback: grpc.requestCallback<_com_widedelivery_driver_proto_Driver__Output>): grpc.ClientUnaryCall;
  makeDriverFromUser(argument: _com_widedelivery_driver_proto_MakeDriverFromUserInput, callback: grpc.requestCallback<_com_widedelivery_driver_proto_Driver__Output>): grpc.ClientUnaryCall;
  
  UpdateDriverInfo(argument: _com_widedelivery_driver_proto_Driver, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_com_widedelivery_driver_proto_Driver__Output>): grpc.ClientUnaryCall;
  UpdateDriverInfo(argument: _com_widedelivery_driver_proto_Driver, metadata: grpc.Metadata, callback: grpc.requestCallback<_com_widedelivery_driver_proto_Driver__Output>): grpc.ClientUnaryCall;
  UpdateDriverInfo(argument: _com_widedelivery_driver_proto_Driver, options: grpc.CallOptions, callback: grpc.requestCallback<_com_widedelivery_driver_proto_Driver__Output>): grpc.ClientUnaryCall;
  UpdateDriverInfo(argument: _com_widedelivery_driver_proto_Driver, callback: grpc.requestCallback<_com_widedelivery_driver_proto_Driver__Output>): grpc.ClientUnaryCall;
  updateDriverInfo(argument: _com_widedelivery_driver_proto_Driver, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_com_widedelivery_driver_proto_Driver__Output>): grpc.ClientUnaryCall;
  updateDriverInfo(argument: _com_widedelivery_driver_proto_Driver, metadata: grpc.Metadata, callback: grpc.requestCallback<_com_widedelivery_driver_proto_Driver__Output>): grpc.ClientUnaryCall;
  updateDriverInfo(argument: _com_widedelivery_driver_proto_Driver, options: grpc.CallOptions, callback: grpc.requestCallback<_com_widedelivery_driver_proto_Driver__Output>): grpc.ClientUnaryCall;
  updateDriverInfo(argument: _com_widedelivery_driver_proto_Driver, callback: grpc.requestCallback<_com_widedelivery_driver_proto_Driver__Output>): grpc.ClientUnaryCall;
  
  UpdateDriverTrip(argument: _com_widedelivery_driver_proto_UpdateDriverTripInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_com_widedelivery_driver_proto_DriverTrip__Output>): grpc.ClientUnaryCall;
  UpdateDriverTrip(argument: _com_widedelivery_driver_proto_UpdateDriverTripInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_com_widedelivery_driver_proto_DriverTrip__Output>): grpc.ClientUnaryCall;
  UpdateDriverTrip(argument: _com_widedelivery_driver_proto_UpdateDriverTripInput, options: grpc.CallOptions, callback: grpc.requestCallback<_com_widedelivery_driver_proto_DriverTrip__Output>): grpc.ClientUnaryCall;
  UpdateDriverTrip(argument: _com_widedelivery_driver_proto_UpdateDriverTripInput, callback: grpc.requestCallback<_com_widedelivery_driver_proto_DriverTrip__Output>): grpc.ClientUnaryCall;
  updateDriverTrip(argument: _com_widedelivery_driver_proto_UpdateDriverTripInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_com_widedelivery_driver_proto_DriverTrip__Output>): grpc.ClientUnaryCall;
  updateDriverTrip(argument: _com_widedelivery_driver_proto_UpdateDriverTripInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_com_widedelivery_driver_proto_DriverTrip__Output>): grpc.ClientUnaryCall;
  updateDriverTrip(argument: _com_widedelivery_driver_proto_UpdateDriverTripInput, options: grpc.CallOptions, callback: grpc.requestCallback<_com_widedelivery_driver_proto_DriverTrip__Output>): grpc.ClientUnaryCall;
  updateDriverTrip(argument: _com_widedelivery_driver_proto_UpdateDriverTripInput, callback: grpc.requestCallback<_com_widedelivery_driver_proto_DriverTrip__Output>): grpc.ClientUnaryCall;
  
}

export interface DriverServiceHandlers extends grpc.UntypedServiceImplementation {
  CreateDriverTrip: grpc.handleUnaryCall<_com_widedelivery_driver_proto_CreateDriverTripInput__Output, _com_widedelivery_driver_proto_DriverTrip>;
  
  DeleteDriverTrip: grpc.handleUnaryCall<_com_widedelivery_driver_service_DriverTripId__Output, _com_widedelivery_driver_service_GenericResponse>;
  
  GetDriverById: grpc.handleUnaryCall<_com_widedelivery_driver_service_DriverId__Output, _com_widedelivery_driver_proto_Driver>;
  
  GetDriverByUserId: grpc.handleUnaryCall<_com_widedelivery_driver_service_UserId__Output, _com_widedelivery_driver_proto_Driver>;
  
  GetDriverTripById: grpc.handleUnaryCall<_com_widedelivery_driver_service_DriverTripId__Output, _com_widedelivery_driver_proto_DriverTrip>;
  
  GetDriverTrips: grpc.handleUnaryCall<_com_widedelivery_driver_service_DriverId__Output, _com_widedelivery_driver_proto_DriverTrips>;
  
  MakeDriverFromUser: grpc.handleUnaryCall<_com_widedelivery_driver_proto_MakeDriverFromUserInput__Output, _com_widedelivery_driver_proto_Driver>;
  
  UpdateDriverInfo: grpc.handleUnaryCall<_com_widedelivery_driver_proto_Driver__Output, _com_widedelivery_driver_proto_Driver>;
  
  UpdateDriverTrip: grpc.handleUnaryCall<_com_widedelivery_driver_proto_UpdateDriverTripInput__Output, _com_widedelivery_driver_proto_DriverTrip>;
  
}

export interface DriverServiceDefinition extends grpc.ServiceDefinition {
  CreateDriverTrip: MethodDefinition<_com_widedelivery_driver_proto_CreateDriverTripInput, _com_widedelivery_driver_proto_DriverTrip, _com_widedelivery_driver_proto_CreateDriverTripInput__Output, _com_widedelivery_driver_proto_DriverTrip__Output>
  DeleteDriverTrip: MethodDefinition<_com_widedelivery_driver_service_DriverTripId, _com_widedelivery_driver_service_GenericResponse, _com_widedelivery_driver_service_DriverTripId__Output, _com_widedelivery_driver_service_GenericResponse__Output>
  GetDriverById: MethodDefinition<_com_widedelivery_driver_service_DriverId, _com_widedelivery_driver_proto_Driver, _com_widedelivery_driver_service_DriverId__Output, _com_widedelivery_driver_proto_Driver__Output>
  GetDriverByUserId: MethodDefinition<_com_widedelivery_driver_service_UserId, _com_widedelivery_driver_proto_Driver, _com_widedelivery_driver_service_UserId__Output, _com_widedelivery_driver_proto_Driver__Output>
  GetDriverTripById: MethodDefinition<_com_widedelivery_driver_service_DriverTripId, _com_widedelivery_driver_proto_DriverTrip, _com_widedelivery_driver_service_DriverTripId__Output, _com_widedelivery_driver_proto_DriverTrip__Output>
  GetDriverTrips: MethodDefinition<_com_widedelivery_driver_service_DriverId, _com_widedelivery_driver_proto_DriverTrips, _com_widedelivery_driver_service_DriverId__Output, _com_widedelivery_driver_proto_DriverTrips__Output>
  MakeDriverFromUser: MethodDefinition<_com_widedelivery_driver_proto_MakeDriverFromUserInput, _com_widedelivery_driver_proto_Driver, _com_widedelivery_driver_proto_MakeDriverFromUserInput__Output, _com_widedelivery_driver_proto_Driver__Output>
  UpdateDriverInfo: MethodDefinition<_com_widedelivery_driver_proto_Driver, _com_widedelivery_driver_proto_Driver, _com_widedelivery_driver_proto_Driver__Output, _com_widedelivery_driver_proto_Driver__Output>
  UpdateDriverTrip: MethodDefinition<_com_widedelivery_driver_proto_UpdateDriverTripInput, _com_widedelivery_driver_proto_DriverTrip, _com_widedelivery_driver_proto_UpdateDriverTripInput__Output, _com_widedelivery_driver_proto_DriverTrip__Output>
}
