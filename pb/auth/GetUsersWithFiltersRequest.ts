// Original file: protos/auth_service.proto


export interface GetUsersWithFiltersRequest {
  'id'?: (string);
  'name'?: (string);
  'email'?: (string);
  'phone_number'?: (string);
  'provider'?: (string);
  'role'?: (string);
  'photo'?: (string);
  'created_at_before'?: (string);
  'created_at_after'?: (string);
  'sort'?: (string);
  'sortDirection'?: (string);
  'limit'?: (number);
  'offset'?: (number);
}

export interface GetUsersWithFiltersRequest__Output {
  'id': (string);
  'name': (string);
  'email': (string);
  'phone_number': (string);
  'provider': (string);
  'role': (string);
  'photo': (string);
  'created_at_before': (string);
  'created_at_after': (string);
  'sort': (string);
  'sortDirection': (string);
  'limit': (number);
  'offset': (number);
}