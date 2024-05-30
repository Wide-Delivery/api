// Original file: protos/driver_service.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CreateDriverTripInput as _driver_CreateDriverTripInput, CreateDriverTripInput__Output as _driver_CreateDriverTripInput__Output } from '../driver/CreateDriverTripInput';
import type { Driver as _driver_Driver, Driver__Output as _driver_Driver__Output } from '../driver/Driver';
import type { DriverId as _driver_DriverId, DriverId__Output as _driver_DriverId__Output } from '../driver/DriverId';
import type { DriverTrip as _driver_DriverTrip, DriverTrip__Output as _driver_DriverTrip__Output } from '../driver/DriverTrip';
import type { DriverTripId as _driver_DriverTripId, DriverTripId__Output as _driver_DriverTripId__Output } from '../driver/DriverTripId';
import type { DriverTrips as _driver_DriverTrips, DriverTrips__Output as _driver_DriverTrips__Output } from '../driver/DriverTrips';
import type { GenericResponse as _driver_GenericResponse, GenericResponse__Output as _driver_GenericResponse__Output } from '../driver/GenericResponse';
import type { MakeDriverFromUserInput as _driver_MakeDriverFromUserInput, MakeDriverFromUserInput__Output as _driver_MakeDriverFromUserInput__Output } from '../driver/MakeDriverFromUserInput';
import type { UpdateDriverTripInput as _driver_UpdateDriverTripInput, UpdateDriverTripInput__Output as _driver_UpdateDriverTripInput__Output } from '../driver/UpdateDriverTripInput';
import type { UserId as _driver_UserId, UserId__Output as _driver_UserId__Output } from '../driver/UserId';

export interface DriverServiceClient extends grpc.Client {
  CreateDriverTrip(argument: _driver_CreateDriverTripInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_driver_DriverTrip__Output>): grpc.ClientUnaryCall;
  CreateDriverTrip(argument: _driver_CreateDriverTripInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_driver_DriverTrip__Output>): grpc.ClientUnaryCall;
  CreateDriverTrip(argument: _driver_CreateDriverTripInput, options: grpc.CallOptions, callback: grpc.requestCallback<_driver_DriverTrip__Output>): grpc.ClientUnaryCall;
  CreateDriverTrip(argument: _driver_CreateDriverTripInput, callback: grpc.requestCallback<_driver_DriverTrip__Output>): grpc.ClientUnaryCall;
  createDriverTrip(argument: _driver_CreateDriverTripInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_driver_DriverTrip__Output>): grpc.ClientUnaryCall;
  createDriverTrip(argument: _driver_CreateDriverTripInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_driver_DriverTrip__Output>): grpc.ClientUnaryCall;
  createDriverTrip(argument: _driver_CreateDriverTripInput, options: grpc.CallOptions, callback: grpc.requestCallback<_driver_DriverTrip__Output>): grpc.ClientUnaryCall;
  createDriverTrip(argument: _driver_CreateDriverTripInput, callback: grpc.requestCallback<_driver_DriverTrip__Output>): grpc.ClientUnaryCall;
  
  DeleteDriverTrip(argument: _driver_DriverTripId, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_driver_GenericResponse__Output>): grpc.ClientUnaryCall;
  DeleteDriverTrip(argument: _driver_DriverTripId, metadata: grpc.Metadata, callback: grpc.requestCallback<_driver_GenericResponse__Output>): grpc.ClientUnaryCall;
  DeleteDriverTrip(argument: _driver_DriverTripId, options: grpc.CallOptions, callback: grpc.requestCallback<_driver_GenericResponse__Output>): grpc.ClientUnaryCall;
  DeleteDriverTrip(argument: _driver_DriverTripId, callback: grpc.requestCallback<_driver_GenericResponse__Output>): grpc.ClientUnaryCall;
  deleteDriverTrip(argument: _driver_DriverTripId, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_driver_GenericResponse__Output>): grpc.ClientUnaryCall;
  deleteDriverTrip(argument: _driver_DriverTripId, metadata: grpc.Metadata, callback: grpc.requestCallback<_driver_GenericResponse__Output>): grpc.ClientUnaryCall;
  deleteDriverTrip(argument: _driver_DriverTripId, options: grpc.CallOptions, callback: grpc.requestCallback<_driver_GenericResponse__Output>): grpc.ClientUnaryCall;
  deleteDriverTrip(argument: _driver_DriverTripId, callback: grpc.requestCallback<_driver_GenericResponse__Output>): grpc.ClientUnaryCall;
  
  GetDriverById(argument: _driver_DriverId, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_driver_Driver__Output>): grpc.ClientUnaryCall;
  GetDriverById(argument: _driver_DriverId, metadata: grpc.Metadata, callback: grpc.requestCallback<_driver_Driver__Output>): grpc.ClientUnaryCall;
  GetDriverById(argument: _driver_DriverId, options: grpc.CallOptions, callback: grpc.requestCallback<_driver_Driver__Output>): grpc.ClientUnaryCall;
  GetDriverById(argument: _driver_DriverId, callback: grpc.requestCallback<_driver_Driver__Output>): grpc.ClientUnaryCall;
  getDriverById(argument: _driver_DriverId, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_driver_Driver__Output>): grpc.ClientUnaryCall;
  getDriverById(argument: _driver_DriverId, metadata: grpc.Metadata, callback: grpc.requestCallback<_driver_Driver__Output>): grpc.ClientUnaryCall;
  getDriverById(argument: _driver_DriverId, options: grpc.CallOptions, callback: grpc.requestCallback<_driver_Driver__Output>): grpc.ClientUnaryCall;
  getDriverById(argument: _driver_DriverId, callback: grpc.requestCallback<_driver_Driver__Output>): grpc.ClientUnaryCall;
  
  GetDriverByUserId(argument: _driver_UserId, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_driver_Driver__Output>): grpc.ClientUnaryCall;
  GetDriverByUserId(argument: _driver_UserId, metadata: grpc.Metadata, callback: grpc.requestCallback<_driver_Driver__Output>): grpc.ClientUnaryCall;
  GetDriverByUserId(argument: _driver_UserId, options: grpc.CallOptions, callback: grpc.requestCallback<_driver_Driver__Output>): grpc.ClientUnaryCall;
  GetDriverByUserId(argument: _driver_UserId, callback: grpc.requestCallback<_driver_Driver__Output>): grpc.ClientUnaryCall;
  getDriverByUserId(argument: _driver_UserId, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_driver_Driver__Output>): grpc.ClientUnaryCall;
  getDriverByUserId(argument: _driver_UserId, metadata: grpc.Metadata, callback: grpc.requestCallback<_driver_Driver__Output>): grpc.ClientUnaryCall;
  getDriverByUserId(argument: _driver_UserId, options: grpc.CallOptions, callback: grpc.requestCallback<_driver_Driver__Output>): grpc.ClientUnaryCall;
  getDriverByUserId(argument: _driver_UserId, callback: grpc.requestCallback<_driver_Driver__Output>): grpc.ClientUnaryCall;
  
  GetDriverTripById(argument: _driver_DriverTripId, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_driver_DriverTrip__Output>): grpc.ClientUnaryCall;
  GetDriverTripById(argument: _driver_DriverTripId, metadata: grpc.Metadata, callback: grpc.requestCallback<_driver_DriverTrip__Output>): grpc.ClientUnaryCall;
  GetDriverTripById(argument: _driver_DriverTripId, options: grpc.CallOptions, callback: grpc.requestCallback<_driver_DriverTrip__Output>): grpc.ClientUnaryCall;
  GetDriverTripById(argument: _driver_DriverTripId, callback: grpc.requestCallback<_driver_DriverTrip__Output>): grpc.ClientUnaryCall;
  getDriverTripById(argument: _driver_DriverTripId, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_driver_DriverTrip__Output>): grpc.ClientUnaryCall;
  getDriverTripById(argument: _driver_DriverTripId, metadata: grpc.Metadata, callback: grpc.requestCallback<_driver_DriverTrip__Output>): grpc.ClientUnaryCall;
  getDriverTripById(argument: _driver_DriverTripId, options: grpc.CallOptions, callback: grpc.requestCallback<_driver_DriverTrip__Output>): grpc.ClientUnaryCall;
  getDriverTripById(argument: _driver_DriverTripId, callback: grpc.requestCallback<_driver_DriverTrip__Output>): grpc.ClientUnaryCall;
  
  GetDriverTrips(argument: _driver_DriverId, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_driver_DriverTrips__Output>): grpc.ClientUnaryCall;
  GetDriverTrips(argument: _driver_DriverId, metadata: grpc.Metadata, callback: grpc.requestCallback<_driver_DriverTrips__Output>): grpc.ClientUnaryCall;
  GetDriverTrips(argument: _driver_DriverId, options: grpc.CallOptions, callback: grpc.requestCallback<_driver_DriverTrips__Output>): grpc.ClientUnaryCall;
  GetDriverTrips(argument: _driver_DriverId, callback: grpc.requestCallback<_driver_DriverTrips__Output>): grpc.ClientUnaryCall;
  getDriverTrips(argument: _driver_DriverId, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_driver_DriverTrips__Output>): grpc.ClientUnaryCall;
  getDriverTrips(argument: _driver_DriverId, metadata: grpc.Metadata, callback: grpc.requestCallback<_driver_DriverTrips__Output>): grpc.ClientUnaryCall;
  getDriverTrips(argument: _driver_DriverId, options: grpc.CallOptions, callback: grpc.requestCallback<_driver_DriverTrips__Output>): grpc.ClientUnaryCall;
  getDriverTrips(argument: _driver_DriverId, callback: grpc.requestCallback<_driver_DriverTrips__Output>): grpc.ClientUnaryCall;
  
  MakeDriverFromUser(argument: _driver_MakeDriverFromUserInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_driver_Driver__Output>): grpc.ClientUnaryCall;
  MakeDriverFromUser(argument: _driver_MakeDriverFromUserInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_driver_Driver__Output>): grpc.ClientUnaryCall;
  MakeDriverFromUser(argument: _driver_MakeDriverFromUserInput, options: grpc.CallOptions, callback: grpc.requestCallback<_driver_Driver__Output>): grpc.ClientUnaryCall;
  MakeDriverFromUser(argument: _driver_MakeDriverFromUserInput, callback: grpc.requestCallback<_driver_Driver__Output>): grpc.ClientUnaryCall;
  makeDriverFromUser(argument: _driver_MakeDriverFromUserInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_driver_Driver__Output>): grpc.ClientUnaryCall;
  makeDriverFromUser(argument: _driver_MakeDriverFromUserInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_driver_Driver__Output>): grpc.ClientUnaryCall;
  makeDriverFromUser(argument: _driver_MakeDriverFromUserInput, options: grpc.CallOptions, callback: grpc.requestCallback<_driver_Driver__Output>): grpc.ClientUnaryCall;
  makeDriverFromUser(argument: _driver_MakeDriverFromUserInput, callback: grpc.requestCallback<_driver_Driver__Output>): grpc.ClientUnaryCall;
  
  UpdateDriverInfo(argument: _driver_Driver, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_driver_Driver__Output>): grpc.ClientUnaryCall;
  UpdateDriverInfo(argument: _driver_Driver, metadata: grpc.Metadata, callback: grpc.requestCallback<_driver_Driver__Output>): grpc.ClientUnaryCall;
  UpdateDriverInfo(argument: _driver_Driver, options: grpc.CallOptions, callback: grpc.requestCallback<_driver_Driver__Output>): grpc.ClientUnaryCall;
  UpdateDriverInfo(argument: _driver_Driver, callback: grpc.requestCallback<_driver_Driver__Output>): grpc.ClientUnaryCall;
  updateDriverInfo(argument: _driver_Driver, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_driver_Driver__Output>): grpc.ClientUnaryCall;
  updateDriverInfo(argument: _driver_Driver, metadata: grpc.Metadata, callback: grpc.requestCallback<_driver_Driver__Output>): grpc.ClientUnaryCall;
  updateDriverInfo(argument: _driver_Driver, options: grpc.CallOptions, callback: grpc.requestCallback<_driver_Driver__Output>): grpc.ClientUnaryCall;
  updateDriverInfo(argument: _driver_Driver, callback: grpc.requestCallback<_driver_Driver__Output>): grpc.ClientUnaryCall;
  
  UpdateDriverTrip(argument: _driver_UpdateDriverTripInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_driver_DriverTrip__Output>): grpc.ClientUnaryCall;
  UpdateDriverTrip(argument: _driver_UpdateDriverTripInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_driver_DriverTrip__Output>): grpc.ClientUnaryCall;
  UpdateDriverTrip(argument: _driver_UpdateDriverTripInput, options: grpc.CallOptions, callback: grpc.requestCallback<_driver_DriverTrip__Output>): grpc.ClientUnaryCall;
  UpdateDriverTrip(argument: _driver_UpdateDriverTripInput, callback: grpc.requestCallback<_driver_DriverTrip__Output>): grpc.ClientUnaryCall;
  updateDriverTrip(argument: _driver_UpdateDriverTripInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_driver_DriverTrip__Output>): grpc.ClientUnaryCall;
  updateDriverTrip(argument: _driver_UpdateDriverTripInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_driver_DriverTrip__Output>): grpc.ClientUnaryCall;
  updateDriverTrip(argument: _driver_UpdateDriverTripInput, options: grpc.CallOptions, callback: grpc.requestCallback<_driver_DriverTrip__Output>): grpc.ClientUnaryCall;
  updateDriverTrip(argument: _driver_UpdateDriverTripInput, callback: grpc.requestCallback<_driver_DriverTrip__Output>): grpc.ClientUnaryCall;
  
}

export interface DriverServiceHandlers extends grpc.UntypedServiceImplementation {
  CreateDriverTrip: grpc.handleUnaryCall<_driver_CreateDriverTripInput__Output, _driver_DriverTrip>;
  
  DeleteDriverTrip: grpc.handleUnaryCall<_driver_DriverTripId__Output, _driver_GenericResponse>;
  
  GetDriverById: grpc.handleUnaryCall<_driver_DriverId__Output, _driver_Driver>;
  
  GetDriverByUserId: grpc.handleUnaryCall<_driver_UserId__Output, _driver_Driver>;
  
  GetDriverTripById: grpc.handleUnaryCall<_driver_DriverTripId__Output, _driver_DriverTrip>;
  
  GetDriverTrips: grpc.handleUnaryCall<_driver_DriverId__Output, _driver_DriverTrips>;
  
  MakeDriverFromUser: grpc.handleUnaryCall<_driver_MakeDriverFromUserInput__Output, _driver_Driver>;
  
  UpdateDriverInfo: grpc.handleUnaryCall<_driver_Driver__Output, _driver_Driver>;
  
  UpdateDriverTrip: grpc.handleUnaryCall<_driver_UpdateDriverTripInput__Output, _driver_DriverTrip>;
  
}

export interface DriverServiceDefinition extends grpc.ServiceDefinition {
  CreateDriverTrip: MethodDefinition<_driver_CreateDriverTripInput, _driver_DriverTrip, _driver_CreateDriverTripInput__Output, _driver_DriverTrip__Output>
  DeleteDriverTrip: MethodDefinition<_driver_DriverTripId, _driver_GenericResponse, _driver_DriverTripId__Output, _driver_GenericResponse__Output>
  GetDriverById: MethodDefinition<_driver_DriverId, _driver_Driver, _driver_DriverId__Output, _driver_Driver__Output>
  GetDriverByUserId: MethodDefinition<_driver_UserId, _driver_Driver, _driver_UserId__Output, _driver_Driver__Output>
  GetDriverTripById: MethodDefinition<_driver_DriverTripId, _driver_DriverTrip, _driver_DriverTripId__Output, _driver_DriverTrip__Output>
  GetDriverTrips: MethodDefinition<_driver_DriverId, _driver_DriverTrips, _driver_DriverId__Output, _driver_DriverTrips__Output>
  MakeDriverFromUser: MethodDefinition<_driver_MakeDriverFromUserInput, _driver_Driver, _driver_MakeDriverFromUserInput__Output, _driver_Driver__Output>
  UpdateDriverInfo: MethodDefinition<_driver_Driver, _driver_Driver, _driver_Driver__Output, _driver_Driver__Output>
  UpdateDriverTrip: MethodDefinition<_driver_UpdateDriverTripInput, _driver_DriverTrip, _driver_UpdateDriverTripInput__Output, _driver_DriverTrip__Output>
}
