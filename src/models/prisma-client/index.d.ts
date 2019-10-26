// Code generated by Prisma (prisma@1.34.8). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from 'graphql';
import { makePrismaClientClass, BaseClientOptions, Model } from 'prisma-client-lib';
import { typeDefs } from './prisma-schema';

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> & U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  account: (where?: AccountWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(query: string, variables?: { [key: string]: any }) => Promise<T>;

  /**
   * Queries
   */

  account: (where: AccountWhereUniqueInput) => AccountNullablePromise;
  accounts: (args?: {
    where?: AccountWhereInput;
    orderBy?: AccountOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Account>;
  accountsConnection: (args?: {
    where?: AccountWhereInput;
    orderBy?: AccountOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => AccountConnectionPromise;
  user: (where: UserWhereUniqueInput) => UserNullablePromise;
  users: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<User>;
  usersConnection: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => UserConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createAccount: (data: AccountCreateInput) => AccountPromise;
  updateAccount: (args: {
    data: AccountUpdateInput;
    where: AccountWhereUniqueInput;
  }) => AccountPromise;
  updateManyAccounts: (args: {
    data: AccountUpdateManyMutationInput;
    where?: AccountWhereInput;
  }) => BatchPayloadPromise;
  upsertAccount: (args: {
    where: AccountWhereUniqueInput;
    create: AccountCreateInput;
    update: AccountUpdateInput;
  }) => AccountPromise;
  deleteAccount: (where: AccountWhereUniqueInput) => AccountPromise;
  deleteManyAccounts: (where?: AccountWhereInput) => BatchPayloadPromise;
  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (args: { data: UserUpdateInput; where: UserWhereUniqueInput }) => UserPromise;
  updateManyUsers: (args: {
    data: UserUpdateManyMutationInput;
    where?: UserWhereInput;
  }) => BatchPayloadPromise;
  upsertUser: (args: {
    where: UserWhereUniqueInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  }) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  account: (where?: AccountSubscriptionWhereInput) => AccountSubscriptionPayloadSubscription;
  user: (where?: UserSubscriptionWhereInput) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type Sex = 'MALE' | 'FEMALE';

export type UserOrderByInput =
  | 'id_ASC'
  | 'id_DESC'
  | 'email_ASC'
  | 'email_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'phoneNumber_ASC'
  | 'phoneNumber_DESC'
  | 'address_ASC'
  | 'address_DESC'
  | 'dob_ASC'
  | 'dob_DESC'
  | 'sex_ASC'
  | 'sex_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC';

export type Role = 'ADMIN' | 'MANAGER' | 'STAFF';

export type AccountOrderByInput =
  | 'id_ASC'
  | 'id_DESC'
  | 'username_ASC'
  | 'username_DESC'
  | 'password_ASC'
  | 'password_DESC'
  | 'role_ASC'
  | 'role_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC';

export type MutationType = 'CREATED' | 'UPDATED' | 'DELETED';

export interface UserCreateWithoutAccountInput {
  id?: Maybe<UUID>;
  email?: Maybe<String>;
  name: String;
  phoneNumber?: Maybe<String>;
  address?: Maybe<String>;
  dob?: Maybe<DateTimeInput>;
  sex?: Maybe<Sex>;
}

export type AccountWhereUniqueInput = AtLeastOne<{
  id: Maybe<UUID>;
  username?: Maybe<String>;
}>;

export interface UserCreateInput {
  id?: Maybe<UUID>;
  email?: Maybe<String>;
  name: String;
  phoneNumber?: Maybe<String>;
  address?: Maybe<String>;
  dob?: Maybe<DateTimeInput>;
  sex?: Maybe<Sex>;
  account: AccountCreateOneWithoutUsersInput;
}

export interface UserScalarWhereInput {
  id?: Maybe<UUID>;
  id_not?: Maybe<UUID>;
  id_in?: Maybe<UUID[] | UUID>;
  id_not_in?: Maybe<UUID[] | UUID>;
  id_lt?: Maybe<UUID>;
  id_lte?: Maybe<UUID>;
  id_gt?: Maybe<UUID>;
  id_gte?: Maybe<UUID>;
  id_contains?: Maybe<UUID>;
  id_not_contains?: Maybe<UUID>;
  id_starts_with?: Maybe<UUID>;
  id_not_starts_with?: Maybe<UUID>;
  id_ends_with?: Maybe<UUID>;
  id_not_ends_with?: Maybe<UUID>;
  email?: Maybe<String>;
  email_not?: Maybe<String>;
  email_in?: Maybe<String[] | String>;
  email_not_in?: Maybe<String[] | String>;
  email_lt?: Maybe<String>;
  email_lte?: Maybe<String>;
  email_gt?: Maybe<String>;
  email_gte?: Maybe<String>;
  email_contains?: Maybe<String>;
  email_not_contains?: Maybe<String>;
  email_starts_with?: Maybe<String>;
  email_not_starts_with?: Maybe<String>;
  email_ends_with?: Maybe<String>;
  email_not_ends_with?: Maybe<String>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  phoneNumber?: Maybe<String>;
  phoneNumber_not?: Maybe<String>;
  phoneNumber_in?: Maybe<String[] | String>;
  phoneNumber_not_in?: Maybe<String[] | String>;
  phoneNumber_lt?: Maybe<String>;
  phoneNumber_lte?: Maybe<String>;
  phoneNumber_gt?: Maybe<String>;
  phoneNumber_gte?: Maybe<String>;
  phoneNumber_contains?: Maybe<String>;
  phoneNumber_not_contains?: Maybe<String>;
  phoneNumber_starts_with?: Maybe<String>;
  phoneNumber_not_starts_with?: Maybe<String>;
  phoneNumber_ends_with?: Maybe<String>;
  phoneNumber_not_ends_with?: Maybe<String>;
  address?: Maybe<String>;
  address_not?: Maybe<String>;
  address_in?: Maybe<String[] | String>;
  address_not_in?: Maybe<String[] | String>;
  address_lt?: Maybe<String>;
  address_lte?: Maybe<String>;
  address_gt?: Maybe<String>;
  address_gte?: Maybe<String>;
  address_contains?: Maybe<String>;
  address_not_contains?: Maybe<String>;
  address_starts_with?: Maybe<String>;
  address_not_starts_with?: Maybe<String>;
  address_ends_with?: Maybe<String>;
  address_not_ends_with?: Maybe<String>;
  dob?: Maybe<DateTimeInput>;
  dob_not?: Maybe<DateTimeInput>;
  dob_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  dob_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  dob_lt?: Maybe<DateTimeInput>;
  dob_lte?: Maybe<DateTimeInput>;
  dob_gt?: Maybe<DateTimeInput>;
  dob_gte?: Maybe<DateTimeInput>;
  sex?: Maybe<Sex>;
  sex_not?: Maybe<Sex>;
  sex_in?: Maybe<Sex[] | Sex>;
  sex_not_in?: Maybe<Sex[] | Sex>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  updatedAt?: Maybe<DateTimeInput>;
  updatedAt_not?: Maybe<DateTimeInput>;
  updatedAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_lt?: Maybe<DateTimeInput>;
  updatedAt_lte?: Maybe<DateTimeInput>;
  updatedAt_gt?: Maybe<DateTimeInput>;
  updatedAt_gte?: Maybe<DateTimeInput>;
  AND?: Maybe<UserScalarWhereInput[] | UserScalarWhereInput>;
  OR?: Maybe<UserScalarWhereInput[] | UserScalarWhereInput>;
  NOT?: Maybe<UserScalarWhereInput[] | UserScalarWhereInput>;
}

export interface AccountUpdateManyMutationInput {
  username?: Maybe<String>;
  password?: Maybe<String>;
  role?: Maybe<Role>;
}

export interface UserUpdateWithoutAccountDataInput {
  email?: Maybe<String>;
  name?: Maybe<String>;
  phoneNumber?: Maybe<String>;
  address?: Maybe<String>;
  dob?: Maybe<DateTimeInput>;
  sex?: Maybe<Sex>;
}

export interface UserUpdateManyDataInput {
  email?: Maybe<String>;
  name?: Maybe<String>;
  phoneNumber?: Maybe<String>;
  address?: Maybe<String>;
  dob?: Maybe<DateTimeInput>;
  sex?: Maybe<Sex>;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<UserWhereInput>;
  AND?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  OR?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  NOT?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
}

export interface UserUpdateManyMutationInput {
  email?: Maybe<String>;
  name?: Maybe<String>;
  phoneNumber?: Maybe<String>;
  address?: Maybe<String>;
  dob?: Maybe<DateTimeInput>;
  sex?: Maybe<Sex>;
}

export interface AccountUpdateWithoutUsersDataInput {
  username?: Maybe<String>;
  password?: Maybe<String>;
  role?: Maybe<Role>;
}

export interface AccountCreateInput {
  id?: Maybe<UUID>;
  username: String;
  password: String;
  role?: Maybe<Role>;
  users?: Maybe<UserCreateManyWithoutAccountInput>;
}

export interface UserUpdateInput {
  email?: Maybe<String>;
  name?: Maybe<String>;
  phoneNumber?: Maybe<String>;
  address?: Maybe<String>;
  dob?: Maybe<DateTimeInput>;
  sex?: Maybe<Sex>;
  account?: Maybe<AccountUpdateOneRequiredWithoutUsersInput>;
}

export interface UserCreateManyWithoutAccountInput {
  create?: Maybe<UserCreateWithoutAccountInput[] | UserCreateWithoutAccountInput>;
  connect?: Maybe<UserWhereUniqueInput[] | UserWhereUniqueInput>;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: Maybe<UUID>;
  email?: Maybe<String>;
}>;

export interface UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput;
  data: UserUpdateManyDataInput;
}

export interface UserWhereInput {
  id?: Maybe<UUID>;
  id_not?: Maybe<UUID>;
  id_in?: Maybe<UUID[] | UUID>;
  id_not_in?: Maybe<UUID[] | UUID>;
  id_lt?: Maybe<UUID>;
  id_lte?: Maybe<UUID>;
  id_gt?: Maybe<UUID>;
  id_gte?: Maybe<UUID>;
  id_contains?: Maybe<UUID>;
  id_not_contains?: Maybe<UUID>;
  id_starts_with?: Maybe<UUID>;
  id_not_starts_with?: Maybe<UUID>;
  id_ends_with?: Maybe<UUID>;
  id_not_ends_with?: Maybe<UUID>;
  email?: Maybe<String>;
  email_not?: Maybe<String>;
  email_in?: Maybe<String[] | String>;
  email_not_in?: Maybe<String[] | String>;
  email_lt?: Maybe<String>;
  email_lte?: Maybe<String>;
  email_gt?: Maybe<String>;
  email_gte?: Maybe<String>;
  email_contains?: Maybe<String>;
  email_not_contains?: Maybe<String>;
  email_starts_with?: Maybe<String>;
  email_not_starts_with?: Maybe<String>;
  email_ends_with?: Maybe<String>;
  email_not_ends_with?: Maybe<String>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  phoneNumber?: Maybe<String>;
  phoneNumber_not?: Maybe<String>;
  phoneNumber_in?: Maybe<String[] | String>;
  phoneNumber_not_in?: Maybe<String[] | String>;
  phoneNumber_lt?: Maybe<String>;
  phoneNumber_lte?: Maybe<String>;
  phoneNumber_gt?: Maybe<String>;
  phoneNumber_gte?: Maybe<String>;
  phoneNumber_contains?: Maybe<String>;
  phoneNumber_not_contains?: Maybe<String>;
  phoneNumber_starts_with?: Maybe<String>;
  phoneNumber_not_starts_with?: Maybe<String>;
  phoneNumber_ends_with?: Maybe<String>;
  phoneNumber_not_ends_with?: Maybe<String>;
  address?: Maybe<String>;
  address_not?: Maybe<String>;
  address_in?: Maybe<String[] | String>;
  address_not_in?: Maybe<String[] | String>;
  address_lt?: Maybe<String>;
  address_lte?: Maybe<String>;
  address_gt?: Maybe<String>;
  address_gte?: Maybe<String>;
  address_contains?: Maybe<String>;
  address_not_contains?: Maybe<String>;
  address_starts_with?: Maybe<String>;
  address_not_starts_with?: Maybe<String>;
  address_ends_with?: Maybe<String>;
  address_not_ends_with?: Maybe<String>;
  dob?: Maybe<DateTimeInput>;
  dob_not?: Maybe<DateTimeInput>;
  dob_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  dob_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  dob_lt?: Maybe<DateTimeInput>;
  dob_lte?: Maybe<DateTimeInput>;
  dob_gt?: Maybe<DateTimeInput>;
  dob_gte?: Maybe<DateTimeInput>;
  sex?: Maybe<Sex>;
  sex_not?: Maybe<Sex>;
  sex_in?: Maybe<Sex[] | Sex>;
  sex_not_in?: Maybe<Sex[] | Sex>;
  account?: Maybe<AccountWhereInput>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  updatedAt?: Maybe<DateTimeInput>;
  updatedAt_not?: Maybe<DateTimeInput>;
  updatedAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_lt?: Maybe<DateTimeInput>;
  updatedAt_lte?: Maybe<DateTimeInput>;
  updatedAt_gt?: Maybe<DateTimeInput>;
  updatedAt_gte?: Maybe<DateTimeInput>;
  AND?: Maybe<UserWhereInput[] | UserWhereInput>;
  OR?: Maybe<UserWhereInput[] | UserWhereInput>;
  NOT?: Maybe<UserWhereInput[] | UserWhereInput>;
}

export interface AccountUpdateInput {
  username?: Maybe<String>;
  password?: Maybe<String>;
  role?: Maybe<Role>;
  users?: Maybe<UserUpdateManyWithoutAccountInput>;
}

export interface AccountUpsertWithoutUsersInput {
  update: AccountUpdateWithoutUsersDataInput;
  create: AccountCreateWithoutUsersInput;
}

export interface UserUpsertWithWhereUniqueWithoutAccountInput {
  where: UserWhereUniqueInput;
  update: UserUpdateWithoutAccountDataInput;
  create: UserCreateWithoutAccountInput;
}

export interface AccountWhereInput {
  id?: Maybe<UUID>;
  id_not?: Maybe<UUID>;
  id_in?: Maybe<UUID[] | UUID>;
  id_not_in?: Maybe<UUID[] | UUID>;
  id_lt?: Maybe<UUID>;
  id_lte?: Maybe<UUID>;
  id_gt?: Maybe<UUID>;
  id_gte?: Maybe<UUID>;
  id_contains?: Maybe<UUID>;
  id_not_contains?: Maybe<UUID>;
  id_starts_with?: Maybe<UUID>;
  id_not_starts_with?: Maybe<UUID>;
  id_ends_with?: Maybe<UUID>;
  id_not_ends_with?: Maybe<UUID>;
  username?: Maybe<String>;
  username_not?: Maybe<String>;
  username_in?: Maybe<String[] | String>;
  username_not_in?: Maybe<String[] | String>;
  username_lt?: Maybe<String>;
  username_lte?: Maybe<String>;
  username_gt?: Maybe<String>;
  username_gte?: Maybe<String>;
  username_contains?: Maybe<String>;
  username_not_contains?: Maybe<String>;
  username_starts_with?: Maybe<String>;
  username_not_starts_with?: Maybe<String>;
  username_ends_with?: Maybe<String>;
  username_not_ends_with?: Maybe<String>;
  password?: Maybe<String>;
  password_not?: Maybe<String>;
  password_in?: Maybe<String[] | String>;
  password_not_in?: Maybe<String[] | String>;
  password_lt?: Maybe<String>;
  password_lte?: Maybe<String>;
  password_gt?: Maybe<String>;
  password_gte?: Maybe<String>;
  password_contains?: Maybe<String>;
  password_not_contains?: Maybe<String>;
  password_starts_with?: Maybe<String>;
  password_not_starts_with?: Maybe<String>;
  password_ends_with?: Maybe<String>;
  password_not_ends_with?: Maybe<String>;
  role?: Maybe<Role>;
  role_not?: Maybe<Role>;
  role_in?: Maybe<Role[] | Role>;
  role_not_in?: Maybe<Role[] | Role>;
  users_every?: Maybe<UserWhereInput>;
  users_some?: Maybe<UserWhereInput>;
  users_none?: Maybe<UserWhereInput>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  updatedAt?: Maybe<DateTimeInput>;
  updatedAt_not?: Maybe<DateTimeInput>;
  updatedAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_lt?: Maybe<DateTimeInput>;
  updatedAt_lte?: Maybe<DateTimeInput>;
  updatedAt_gt?: Maybe<DateTimeInput>;
  updatedAt_gte?: Maybe<DateTimeInput>;
  AND?: Maybe<AccountWhereInput[] | AccountWhereInput>;
  OR?: Maybe<AccountWhereInput[] | AccountWhereInput>;
  NOT?: Maybe<AccountWhereInput[] | AccountWhereInput>;
}

export interface UserUpdateWithWhereUniqueWithoutAccountInput {
  where: UserWhereUniqueInput;
  data: UserUpdateWithoutAccountDataInput;
}

export interface UserUpdateManyWithoutAccountInput {
  create?: Maybe<UserCreateWithoutAccountInput[] | UserCreateWithoutAccountInput>;
  delete?: Maybe<UserWhereUniqueInput[] | UserWhereUniqueInput>;
  connect?: Maybe<UserWhereUniqueInput[] | UserWhereUniqueInput>;
  set?: Maybe<UserWhereUniqueInput[] | UserWhereUniqueInput>;
  disconnect?: Maybe<UserWhereUniqueInput[] | UserWhereUniqueInput>;
  update?: Maybe<
    UserUpdateWithWhereUniqueWithoutAccountInput[] | UserUpdateWithWhereUniqueWithoutAccountInput
  >;
  upsert?: Maybe<
    UserUpsertWithWhereUniqueWithoutAccountInput[] | UserUpsertWithWhereUniqueWithoutAccountInput
  >;
  deleteMany?: Maybe<UserScalarWhereInput[] | UserScalarWhereInput>;
  updateMany?: Maybe<UserUpdateManyWithWhereNestedInput[] | UserUpdateManyWithWhereNestedInput>;
}

export interface AccountUpdateOneRequiredWithoutUsersInput {
  create?: Maybe<AccountCreateWithoutUsersInput>;
  update?: Maybe<AccountUpdateWithoutUsersDataInput>;
  upsert?: Maybe<AccountUpsertWithoutUsersInput>;
  connect?: Maybe<AccountWhereUniqueInput>;
}

export interface AccountSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<AccountWhereInput>;
  AND?: Maybe<AccountSubscriptionWhereInput[] | AccountSubscriptionWhereInput>;
  OR?: Maybe<AccountSubscriptionWhereInput[] | AccountSubscriptionWhereInput>;
  NOT?: Maybe<AccountSubscriptionWhereInput[] | AccountSubscriptionWhereInput>;
}

export interface AccountCreateOneWithoutUsersInput {
  create?: Maybe<AccountCreateWithoutUsersInput>;
  connect?: Maybe<AccountWhereUniqueInput>;
}

export interface AccountCreateWithoutUsersInput {
  id?: Maybe<UUID>;
  username: String;
  password: String;
  role?: Maybe<Role>;
}

export interface NodeNode {
  id: ID_Output;
}

export interface UserPreviousValues {
  id: UUID;
  email?: String;
  name: String;
  phoneNumber?: String;
  address?: String;
  dob?: DateTimeOutput;
  sex?: Sex;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
}

export interface UserPreviousValuesPromise extends Promise<UserPreviousValues>, Fragmentable {
  id: () => Promise<UUID>;
  email: () => Promise<String>;
  name: () => Promise<String>;
  phoneNumber: () => Promise<String>;
  address: () => Promise<String>;
  dob: () => Promise<DateTimeOutput>;
  sex: () => Promise<Sex>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<UUID>>;
  email: () => Promise<AsyncIterator<String>>;
  name: () => Promise<AsyncIterator<String>>;
  phoneNumber: () => Promise<AsyncIterator<String>>;
  address: () => Promise<AsyncIterator<String>>;
  dob: () => Promise<AsyncIterator<DateTimeOutput>>;
  sex: () => Promise<AsyncIterator<Sex>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface AggregateAccount {
  count: Int;
}

export interface AggregateAccountPromise extends Promise<AggregateAccount>, Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateAccountSubscription
  extends Promise<AsyncIterator<AggregateAccount>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface User {
  id: UUID;
  email?: String;
  name: String;
  phoneNumber?: String;
  address?: String;
  dob?: DateTimeOutput;
  sex?: Sex;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<UUID>;
  email: () => Promise<String>;
  name: () => Promise<String>;
  phoneNumber: () => Promise<String>;
  address: () => Promise<String>;
  dob: () => Promise<DateTimeOutput>;
  sex: () => Promise<Sex>;
  account: <T = AccountPromise>() => T;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
}

export interface UserSubscription extends Promise<AsyncIterator<User>>, Fragmentable {
  id: () => Promise<AsyncIterator<UUID>>;
  email: () => Promise<AsyncIterator<String>>;
  name: () => Promise<AsyncIterator<String>>;
  phoneNumber: () => Promise<AsyncIterator<String>>;
  address: () => Promise<AsyncIterator<String>>;
  dob: () => Promise<AsyncIterator<DateTimeOutput>>;
  sex: () => Promise<AsyncIterator<Sex>>;
  account: <T = AccountSubscription>() => T;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface UserNullablePromise extends Promise<User | null>, Fragmentable {
  id: () => Promise<UUID>;
  email: () => Promise<String>;
  name: () => Promise<String>;
  phoneNumber: () => Promise<String>;
  address: () => Promise<String>;
  dob: () => Promise<DateTimeOutput>;
  sex: () => Promise<Sex>;
  account: <T = AccountPromise>() => T;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
}

export interface AccountEdge {
  node: Account;
  cursor: String;
}

export interface AccountEdgePromise extends Promise<AccountEdge>, Fragmentable {
  node: <T = AccountPromise>() => T;
  cursor: () => Promise<String>;
}

export interface AccountEdgeSubscription extends Promise<AsyncIterator<AccountEdge>>, Fragmentable {
  node: <T = AccountSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription extends Promise<AsyncIterator<PageInfo>>, Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise extends Promise<BatchPayload>, Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface Account {
  id: UUID;
  username: String;
  password: String;
  role: Role;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
}

export interface AccountPromise extends Promise<Account>, Fragmentable {
  id: () => Promise<UUID>;
  username: () => Promise<String>;
  password: () => Promise<String>;
  role: () => Promise<Role>;
  users: <T = FragmentableArray<User>>(args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
}

export interface AccountSubscription extends Promise<AsyncIterator<Account>>, Fragmentable {
  id: () => Promise<AsyncIterator<UUID>>;
  username: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  role: () => Promise<AsyncIterator<Role>>;
  users: <T = Promise<AsyncIterator<UserSubscription>>>(args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface AccountNullablePromise extends Promise<Account | null>, Fragmentable {
  id: () => Promise<UUID>;
  username: () => Promise<String>;
  password: () => Promise<String>;
  role: () => Promise<Role>;
  users: <T = FragmentableArray<User>>(args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
}

export interface AccountConnection {
  pageInfo: PageInfo;
  edges: AccountEdge[];
}

export interface AccountConnectionPromise extends Promise<AccountConnection>, Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<AccountEdge>>() => T;
  aggregate: <T = AggregateAccountPromise>() => T;
}

export interface AccountConnectionSubscription
  extends Promise<AsyncIterator<AccountConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<AccountEdgeSubscription>>>() => T;
  aggregate: <T = AggregateAccountSubscription>() => T;
}

export interface AccountSubscriptionPayload {
  mutation: MutationType;
  node: Account;
  updatedFields: String[];
  previousValues: AccountPreviousValues;
}

export interface AccountSubscriptionPayloadPromise
  extends Promise<AccountSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = AccountPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = AccountPreviousValuesPromise>() => T;
}

export interface AccountSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<AccountSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = AccountSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = AccountPreviousValuesSubscription>() => T;
}

export interface AccountPreviousValues {
  id: UUID;
  username: String;
  password: String;
  role: Role;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
}

export interface AccountPreviousValuesPromise extends Promise<AccountPreviousValues>, Fragmentable {
  id: () => Promise<UUID>;
  username: () => Promise<String>;
  password: () => Promise<String>;
  role: () => Promise<Role>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
}

export interface AccountPreviousValuesSubscription
  extends Promise<AsyncIterator<AccountPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<UUID>>;
  username: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  role: () => Promise<AsyncIterator<Role>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise extends Promise<AggregateUser>, Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

export interface UserConnectionPromise extends Promise<UserConnection>, Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription extends Promise<AsyncIterator<UserEdge>>, Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

export type UUID = string;

export type Long = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: 'Role',
    embedded: false,
  },
  {
    name: 'Account',
    embedded: false,
  },
  {
    name: 'Sex',
    embedded: false,
  },
  {
    name: 'User',
    embedded: false,
  },
];

/**
 * Type Defs
 */

export const prisma: Prisma;
