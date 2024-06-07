// Original file: protos/rpc_link_driver_with_order.proto

import type { DriverExtendedModel as _com_widedelivery_driver_proto_DriverExtendedModel, DriverExtendedModel__Output as _com_widedelivery_driver_proto_DriverExtendedModel__Output } from '../../../../com/widedelivery/driver/proto/DriverExtendedModel';

export interface LinkDriverWithOrderInput {
  'driver_extended'?: (_com_widedelivery_driver_proto_DriverExtendedModel | null);
  'order_id'?: (string);
  'send_notification_to_client'?: (boolean);
}

export interface LinkDriverWithOrderInput__Output {
  'driver_extended': (_com_widedelivery_driver_proto_DriverExtendedModel__Output | null);
  'order_id': (string);
  'send_notification_to_client': (boolean);
}
