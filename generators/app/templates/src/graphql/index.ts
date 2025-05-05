import gql from 'graphql-tag';
import * as VueApolloComposable from '@vue/apollo-composable';
import * as VueCompositionApi from 'vue';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type ReactiveFunction<TParam> = () => TParam;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** 添加集群到服务网格 */
export type AddClusterIntoServiceMeshResponse = {
  __typename?: 'AddClusterIntoServiceMeshResponse';
  Message?: Maybe<Scalars['String']>;
  RequestId?: Maybe<Scalars['String']>;
};

export type AddressesItem = {
  __typename?: 'AddressesItem';
  Host?: Maybe<Scalars['String']>;
  Port?: Maybe<Scalars['String']>;
  Type?: Maybe<Scalars['String']>;
};

export type AddressesList = {
  __typename?: 'AddressesList';
  AddressesSet: Array<AddressesSet>;
  NextToken?: Maybe<Scalars['String']>;
  RequestId?: Maybe<Scalars['String']>;
};

export type AddressesSet = {
  __typename?: 'AddressesSet';
  AllocationId?: Maybe<Scalars['String']>;
  BandWidth?: Maybe<Scalars['Float']>;
  BandWidthShareId?: Maybe<Scalars['String']>;
  BandWidthShareName?: Maybe<Scalars['String']>;
  ChargeType?: Maybe<Scalars['String']>;
  Checked?: Maybe<Scalars['Float']>;
  CreateTime?: Maybe<Scalars['String']>;
  EndTime?: Maybe<Scalars['String']>;
  InstanceId?: Maybe<Scalars['String']>;
  InstanceName?: Maybe<Scalars['String']>;
  InstanceType?: Maybe<Scalars['String']>;
  IpVersion?: Maybe<Scalars['String']>;
  LineId?: Maybe<Scalars['String']>;
  LineName?: Maybe<Scalars['String']>;
  LineType?: Maybe<Scalars['String']>;
  Mode?: Maybe<Scalars['String']>;
  NetworkInterfaceId?: Maybe<Scalars['String']>;
  NetworkInterfaceType?: Maybe<Scalars['String']>;
  PrivateIp?: Maybe<Scalars['String']>;
  ProductType?: Maybe<Scalars['String']>;
  ProductWhat?: Maybe<Scalars['Float']>;
  ProjectId?: Maybe<Scalars['Float']>;
  ProjectName?: Maybe<Scalars['String']>;
  PublicIp?: Maybe<Scalars['String']>;
  State?: Maybe<Scalars['String']>;
  TagSet?: Maybe<Scalars['String']>;
  UserTag?: Maybe<Scalars['String']>;
};

export type AllRegionList = {
  __typename?: 'AllRegionList';
  code: Scalars['Float'];
  data: Array<RegionListData>;
};

export type AllocatedIpAddresses = {
  __typename?: 'AllocatedIpAddresses';
  AvailableIpAddress: Array<Scalars['String']>;
  RequestId: Scalars['String'];
};

export type ApplicationGraphObject = {
  __typename?: 'ApplicationGraphObject';
  graphId?: Maybe<Scalars['Float']>;
  graphType?: Maybe<Scalars['String']>;
  lines?: Maybe<Array<LinesObject>>;
  title?: Maybe<Scalars['String']>;
  units?: Maybe<Scalars['String']>;
};

export type ApplicationObject = {
  __typename?: 'ApplicationObject';
  appId?: Maybe<Scalars['Float']>;
  graphs?: Maybe<Array<ApplicationGraphObject>>;
  name?: Maybe<Scalars['String']>;
};

export type ArgsDiscount = {
  discount: Scalars['String'];
  name: Scalars['String'];
};

/** 负载均衡绑定弹性IP */
export type AssociateAddress = {
  __typename?: 'AssociateAddress';
  RequestId?: Maybe<Scalars['String']>;
  Return?: Maybe<Scalars['Boolean']>;
};

/** 云企业网绑定带宽包 */
export type AttachCenBandWidthPackage = {
  __typename?: 'AttachCenBandWidthPackage';
  RequestId?: Maybe<Scalars['String']>;
  Return?: Maybe<Scalars['Boolean']>;
};

/** 关联网络实例 */
export type AttachNetworkInstance = {
  __typename?: 'AttachNetworkInstance';
  RequestId?: Maybe<Scalars['String']>;
  Return?: Maybe<Scalars['Boolean']>;
};

export type AvailabilityZoneInfo = {
  __typename?: 'AvailabilityZoneInfo';
  AvailabilityZoneName: Scalars['String'];
};

export type AzInfo = {
  __typename?: 'AzInfo';
  az_key: Scalars['String'];
  az_name: Scalars['String'];
  openstack_name: Scalars['String'];
};

export type BandWidthShareInfo = {
  __typename?: 'BandWidthShareInfo';
  BandWidthShareSet: Array<BandWidthShareItem>;
};

export type BandWidthShareItem = {
  __typename?: 'BandWidthShareItem';
  BandWidth?: Maybe<Scalars['Float']>;
  BandWidthShareId?: Maybe<Scalars['String']>;
  BandWidthShareName?: Maybe<Scalars['String']>;
  BillType?: Maybe<Scalars['Float']>;
  ChargeType?: Maybe<Scalars['String']>;
  CreateTime?: Maybe<Scalars['String']>;
  LineId?: Maybe<Scalars['String']>;
  LineName?: Maybe<Scalars['String']>;
  ProjectId?: Maybe<Scalars['String']>;
  ServiceEndTime?: Maybe<Scalars['String']>;
};

export type BaseParamItem = {
  availabilityZone: Scalars['String'];
  billType: Scalars['Float'];
  count: Scalars['Float'];
  duration: Scalars['String'];
  durationUnit: Scalars['String'];
  ops: Scalars['String'];
  opstype: Scalars['Float'];
};

export type BatchAddTagsV2 = {
  __typename?: 'BatchAddTagsV2';
  RequestId?: Maybe<Scalars['String']>;
  Result?: Maybe<Scalars['Boolean']>;
};

/** 批量询价接口 */
export type BatchCalculateKvmPrice = {
  __typename?: 'BatchCalculateKVMPrice';
  CalculatePriceSet?: Maybe<Array<CalculatePriceSet>>;
  code: Scalars['Float'];
  msg: Scalars['String'];
};

/** 云企业网带宽包计算价格 */
export type BatchCalculateProductOfCenPkg = {
  __typename?: 'BatchCalculateProductOfCenPkg';
  data?: Maybe<Array<BatchCalculateProductOfCenPkgData>>;
};

export type BatchCalculateProductOfCenPkgData = {
  __typename?: 'BatchCalculateProductOfCenPkgData';
  Price?: Maybe<Scalars['Float']>;
  currency?: Maybe<Scalars['String']>;
  promotion?: Maybe<PkgPromotion>;
};

/** 云企业网带宽包创建商品 */
export type BatchCreateProductOfCenPkg = {
  __typename?: 'BatchCreateProductOfCenPkg';
  data?: Maybe<Array<BatchCreateProductOfCenPkgData>>;
};

export type BatchCreateProductOfCenPkgData = {
  __typename?: 'BatchCreateProductOfCenPkgData';
  IsSuccess: Scalars['Boolean'];
  Message?: Maybe<Scalars['String']>;
  ProductId?: Maybe<Scalars['String']>;
};

export type BatchDeleteCenData = {
  __typename?: 'BatchDeleteCenData';
  CenId?: Maybe<Scalars['String']>;
  Message?: Maybe<Scalars['String']>;
  Return?: Maybe<Scalars['Boolean']>;
};

/** 批量删除云企业网 */
export type BatchDeleteCens = {
  __typename?: 'BatchDeleteCens';
  data?: Maybe<Array<BatchDeleteCenData>>;
};

/** 批量删除负载均衡 */
export type BatchDeleteLoadBalancer = {
  __typename?: 'BatchDeleteLoadBalancer';
  data?: Maybe<Array<BatchDeleteLoadBalancerData>>;
};

export type BatchDeleteLoadBalancerData = {
  __typename?: 'BatchDeleteLoadBalancerData';
  Id?: Maybe<Scalars['String']>;
  Message?: Maybe<Scalars['String']>;
  Return?: Maybe<Scalars['Boolean']>;
};

/** 批量解绑网络实例 */
export type BatchDetachNetworkInstances = {
  __typename?: 'BatchDetachNetworkInstances';
  data?: Maybe<Array<DetachCenInstanceData>>;
};

/** 批量解绑弹性IP */
export type BatchDisassociateLbAddress = {
  __typename?: 'BatchDisassociateLbAddress';
  data?: Maybe<Array<BatchDisassociateLbAddressData>>;
};

export type BatchDisassociateLbAddressData = {
  __typename?: 'BatchDisassociateLbAddressData';
  Id?: Maybe<Scalars['String']>;
  Message?: Maybe<Scalars['String']>;
  Return?: Maybe<Scalars['Boolean']>;
};

/** 批量开启、关闭负载均衡 */
export type BatchModifyLoadBalancer = {
  __typename?: 'BatchModifyLoadBalancer';
  data?: Maybe<Array<BatchModifyLoadBalancerData>>;
};

export type BatchModifyLoadBalancerData = {
  __typename?: 'BatchModifyLoadBalancerData';
  Id?: Maybe<Scalars['String']>;
  Message?: Maybe<Scalars['String']>;
  Return?: Maybe<Scalars['Boolean']>;
};

/** Status: 0 成功， 1 失败 */
export type BatchReinstallCustomerEpcResponse = {
  __typename?: 'BatchReinstallCustomerEpcResponse';
  ErrorInfoSet?: Maybe<Array<InstallInfoItem>>;
  Status?: Maybe<Scalars['Float']>;
  SuccessInfoSet?: Maybe<Array<InstallInfoItem>>;
};

/** Status: 0 成功， 1 失败 */
export type BatchReinstallEpcResponse = {
  __typename?: 'BatchReinstallEpcResponse';
  ErrorInfoSet?: Maybe<Array<InstallInfoItem>>;
  Status?: Maybe<Scalars['Float']>;
  SuccessInfoSet?: Maybe<Array<InstallInfoItem>>;
};

export type BillType = {
  __typename?: 'BillType';
  billTypeEnName: Scalars['String'];
  billTypeId: Scalars['Int'];
  billTypeName: Scalars['String'];
};

export type BillTypeForBwsInfo = {
  __typename?: 'BillTypeForBwsInfo';
  billTypeForBws: Array<BwsBillType>;
  data: Array<PriceGroup>;
};

/** 绑定堡垒机Eip */
export type BindKbhEip = {
  __typename?: 'BindKbhEip';
  Error?: Maybe<KbhReturnError>;
  RequestId?: Maybe<Scalars['String']>;
  Res?: Maybe<Scalars['Boolean']>;
};

export type BmTypeConf = {
  __typename?: 'BmTypeConf';
  Cpu?: Maybe<Scalars['String']>;
  CpuCoreCount?: Maybe<Scalars['Float']>;
  CpuCount?: Maybe<Scalars['Float']>;
  CpuFreq?: Maybe<Scalars['Float']>;
  DataDisk?: Maybe<EpcDisk>;
  Gpu?: Maybe<Scalars['String']>;
  GpuCoreCount?: Maybe<Scalars['Float']>;
  GpuCount?: Maybe<Scalars['Float']>;
  GpuFreq?: Maybe<Scalars['Float']>;
  IsStandard?: Maybe<Scalars['Boolean']>;
  Memory?: Maybe<Scalars['String']>;
  Name?: Maybe<Scalars['String']>;
  NvmeDisk?: Maybe<EpcDisk>;
  ProductCategory?: Maybe<Scalars['String']>;
  ProductGroup?: Maybe<Scalars['String']>;
  ProductType?: Maybe<Scalars['String']>;
  SystemDisk?: Maybe<EpcDisk>;
  Type: Scalars['String'];
  TypeCode?: Maybe<Scalars['String']>;
  TypeName?: Maybe<Scalars['String']>;
  VolumeInfo?: Maybe<VolumeInfoItem>;
};

export type Book = {
  __typename?: 'Book';
  author?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};

export type BwsBillType = {
  __typename?: 'BwsBillType';
  billTypeId?: Maybe<Scalars['Float']>;
  name: Scalars['String'];
};

export type CuItem = {
  __typename?: 'CUItem';
  CU?: Maybe<Scalars['Float']>;
  Type?: Maybe<Scalars['String']>;
  TypeName?: Maybe<Scalars['String']>;
};

export type CabinetStatisticalItem = {
  __typename?: 'CabinetStatisticalItem';
  FormalCount: Scalars['Float'];
  Idc: Scalars['String'];
  Region: Scalars['String'];
  ReserveCount: Scalars['Float'];
  TotalCount: Scalars['Float'];
};

export type CalculateEipPrice = {
  __typename?: 'CalculateEIPPrice';
  code?: Maybe<Scalars['Float']>;
  eipPriceDetails?: Maybe<EipPriceDetails>;
  msg?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
};

export type CalculateKeadProduct = {
  __typename?: 'CalculateKeadProduct';
  code?: Maybe<Scalars['Float']>;
  msg?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  priceDetails?: Maybe<Array<PriceDetail>>;
};

export type CalculatePriceParams = {
  __typename?: 'CalculatePriceParams';
  Price: Scalars['Float'];
};

export type CalculatePriceSet = {
  __typename?: 'CalculatePriceSet';
  message: PriceMessage;
  no: Scalars['Float'];
};

export type CashWallet = {
  __typename?: 'CashWallet';
  alarm_threshold: Scalars['Float'];
  available_balance: Scalars['Float'];
  available_debit_card_balance: Scalars['Float'];
  balance: Scalars['Float'];
  cloudOverdraftLimit: Scalars['Float'];
  credit_limit: Scalars['Float'];
  debit_card_balance: Scalars['Float'];
  frozen_balance: Scalars['Float'];
  invoice_balance: Scalars['Float'];
  is_alarm: Scalars['Int'];
  overdraft_amount: Scalars['Float'];
  overdraft_limit: Scalars['Float'];
  reward_balance: Scalars['Float'];
  unpaid_amount_in_settlement: Scalars['Float'];
  userCanOverdraftPrepay: Scalars['Boolean'];
};

export type CenAzList = {
  __typename?: 'CenAzList';
  azCode: Scalars['String'];
  azName: Scalars['String'];
  enName: Scalars['String'];
};

export type CenBandWidthPackageSet = {
  __typename?: 'CenBandWidthPackageSet';
  BillType?: Maybe<Scalars['Float']>;
  CenBandWidthPackageId?: Maybe<Scalars['String']>;
  CenBandWidthPackageName?: Maybe<Scalars['String']>;
  CenBandwidthPackageUsage?: Maybe<Scalars['Float']>;
  CenId?: Maybe<Scalars['String']>;
  CenName?: Maybe<Scalars['String']>;
  ChargeType?: Maybe<Scalars['String']>;
  CreateTime?: Maybe<Scalars['String']>;
  LocalAreaId?: Maybe<Scalars['String']>;
  LocalAreaName?: Maybe<Scalars['String']>;
  PackageBandWidth?: Maybe<Scalars['Float']>;
  PackageType?: Maybe<Scalars['String']>;
  ProductWhat?: Maybe<Scalars['Float']>;
  ProjectId?: Maybe<Scalars['String']>;
  ProjectName?: Maybe<Scalars['String']>;
  RemoteAreaId?: Maybe<Scalars['String']>;
  RemoteAreaName?: Maybe<Scalars['String']>;
  ServiceEndTime?: Maybe<Scalars['String']>;
  TagSet?: Maybe<Array<CenTagSet>>;
};

export type CenBillTypeList = {
  __typename?: 'CenBillTypeList';
  billTypeEnName?: Maybe<Scalars['String']>;
  billTypeId: Scalars['Float'];
  billTypeName?: Maybe<Scalars['String']>;
  chargeType?: Maybe<Scalars['String']>;
  ruleMatched?: Maybe<Scalars['String']>;
};

/** 撤销VPC或专线网关路由到云企业网 */
export type CenCidrDelete = {
  __typename?: 'CenCidrDelete';
  RequestId?: Maybe<Scalars['String']>;
  data?: Maybe<CommonReturn>;
};

/** 发布VPC或专线网关路由到云企业网 */
export type CenCidrPublish = {
  __typename?: 'CenCidrPublish';
  RequestId?: Maybe<Scalars['String']>;
  data?: Maybe<CommonReturn>;
};

export type CenGrant = {
  __typename?: 'CenGrant';
  CenAccountId?: Maybe<Scalars['String']>;
  CenGrantId: Scalars['String'];
  CenId?: Maybe<Scalars['String']>;
  CreateTime?: Maybe<Scalars['String']>;
  InstanceType?: Maybe<Scalars['String']>;
  NetworkInstanceId?: Maybe<Scalars['String']>;
};

export type CenGrantSet = {
  __typename?: 'CenGrantSet';
  CenAccountId?: Maybe<Scalars['String']>;
  CenGrantId: Scalars['String'];
  CenId: Scalars['String'];
  CreateTime?: Maybe<Scalars['String']>;
  InstanceRegion?: Maybe<Scalars['String']>;
  InstanceType?: Maybe<Scalars['String']>;
  NetworkInstanceId?: Maybe<Scalars['String']>;
  NetworkInstanceName?: Maybe<Scalars['String']>;
};

export type CenPackageInfo = {
  __typename?: 'CenPackageInfo';
  measureUnitEnName?: Maybe<Scalars['String']>;
  measureUnitName?: Maybe<Scalars['String']>;
  propCode: Scalars['String'];
  propEnName?: Maybe<Scalars['String']>;
  propName?: Maybe<Scalars['String']>;
  propValue?: Maybe<Array<CenPropValueUnion>>;
  propValueType?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['String']>;
};

export type CenPackageList = {
  __typename?: 'CenPackageList';
  packageCode: Scalars['String'];
  packageEnName?: Maybe<Scalars['String']>;
  packageInfo?: Maybe<Array<CenPackageInfo>>;
  packageName?: Maybe<Scalars['String']>;
  packageType?: Maybe<Scalars['Float']>;
  refBillTypeList?: Maybe<Array<CenBillTypeList>>;
  refRegionList?: Maybe<Array<CenRegionList>>;
  status?: Maybe<Scalars['Float']>;
};

export type CenProductTypeList = {
  __typename?: 'CenProductTypeList';
  billTypeList?: Maybe<Array<CenBillTypeList>>;
  packageList?: Maybe<Array<CenPackageList>>;
  postStatus?: Maybe<Scalars['String']>;
  productTypeCode?: Maybe<Scalars['String']>;
  productTypeEnName?: Maybe<Scalars['String']>;
  productTypeId: Scalars['Float'];
  productTypeName?: Maybe<Scalars['String']>;
  propertyList?: Maybe<Array<CenPackageInfo>>;
  regionList?: Maybe<Array<CenRegionList>>;
  status?: Maybe<Scalars['String']>;
};

export type CenPropValueNormal = {
  __typename?: 'CenPropValueNormal';
  defaultVal?: Maybe<Scalars['Boolean']>;
  enName?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type CenPropValueStep = {
  __typename?: 'CenPropValueStep';
  max: Scalars['Float'];
  min: Scalars['Float'];
  step: Scalars['Float'];
};

export type CenPropValueUnion = CenPropValueNormal | CenPropValueStep;

export type CenPublishVpcRouteSet = {
  __typename?: 'CenPublishVpcRouteSet';
  CenId: Scalars['String'];
  CenRouteId: Scalars['String'];
  CidrStatus?: Maybe<Scalars['String']>;
  CreateTime?: Maybe<Scalars['String']>;
  DestinationCidrBlock?: Maybe<Scalars['String']>;
  InstanceAccountId?: Maybe<Scalars['String']>;
  InstanceRegion?: Maybe<Scalars['String']>;
  InstanceType?: Maybe<Scalars['String']>;
  NetworkInstanceId?: Maybe<Scalars['String']>;
  NetworkInstanceName?: Maybe<Scalars['String']>;
  NetworkRouteGatewayName?: Maybe<Scalars['String']>;
  NetworkRouteId?: Maybe<Scalars['String']>;
};

export type CenQueryPriceSystemData = {
  __typename?: 'CenQueryPriceSystemData';
  productClubId?: Maybe<Scalars['Float']>;
  productGroupCode?: Maybe<Scalars['String']>;
  productGroupEnFullName?: Maybe<Scalars['String']>;
  productGroupEnName?: Maybe<Scalars['String']>;
  productGroupId: Scalars['Float'];
  productGroupName?: Maybe<Scalars['String']>;
  productTypeList?: Maybe<Array<CenProductTypeList>>;
};

export type CenRegionBandwidth = {
  __typename?: 'CenRegionBandwidth';
  CenBandWidthPackageId?: Maybe<Scalars['String']>;
  CenId?: Maybe<Scalars['String']>;
  CenRegionBandwidthId: Scalars['String'];
  InterBandWidth?: Maybe<Scalars['Float']>;
  LocalRegion?: Maybe<Scalars['String']>;
  RemoteRegion?: Maybe<Scalars['String']>;
};

export type CenRegionBandwidthSet = {
  __typename?: 'CenRegionBandwidthSet';
  CenBandWidthPackageId?: Maybe<Scalars['String']>;
  CenId?: Maybe<Scalars['String']>;
  CenRegionBandwidthId?: Maybe<Scalars['String']>;
  InterBandWidth?: Maybe<Scalars['String']>;
  LocalRegion?: Maybe<Scalars['String']>;
  LocalRegionCode?: Maybe<Scalars['String']>;
  LocalRegionName?: Maybe<Scalars['String']>;
  PackageBandWidth?: Maybe<Scalars['String']>;
  PackageUsage?: Maybe<Scalars['String']>;
  RemoteRegion?: Maybe<Scalars['String']>;
  RemoteRegionCode?: Maybe<Scalars['String']>;
  RemoteRegionName?: Maybe<Scalars['String']>;
};

export type CenRegionList = {
  __typename?: 'CenRegionList';
  active?: Maybe<Scalars['Boolean']>;
  areaCode?: Maybe<Scalars['String']>;
  areaEnName?: Maybe<Scalars['String']>;
  areaName?: Maybe<Scalars['String']>;
  azList?: Maybe<Array<CenAzList>>;
  finance?: Maybe<Scalars['Boolean']>;
  industryLabel?: Maybe<Scalars['String']>;
  innerCode?: Maybe<Scalars['String']>;
  overseas?: Maybe<Scalars['Boolean']>;
  regionCode?: Maybe<Scalars['String']>;
  regionEnName?: Maybe<Scalars['String']>;
  regionId: Scalars['Float'];
  regionName?: Maybe<Scalars['String']>;
  regionType?: Maybe<Scalars['Float']>;
};

export type CenRouteSet = {
  __typename?: 'CenRouteSet';
  CenId: Scalars['String'];
  CenRouteId: Scalars['String'];
  CreateTime?: Maybe<Scalars['String']>;
  DestinationCidrBlock?: Maybe<Scalars['String']>;
  InstanceAccountId?: Maybe<Scalars['String']>;
  InstanceRegion?: Maybe<Scalars['String']>;
  InstanceType?: Maybe<Scalars['String']>;
  NetworkInstanceId?: Maybe<Scalars['String']>;
  NetworkInstanceName?: Maybe<Scalars['String']>;
  NetworkRouteId?: Maybe<Scalars['String']>;
  RouteId?: Maybe<Scalars['String']>;
};

export type CenSet = {
  __typename?: 'CenSet';
  CenId: Scalars['String'];
  CenName?: Maybe<Scalars['String']>;
  CreateTime?: Maybe<Scalars['String']>;
  Description?: Maybe<Scalars['String']>;
  NetworkInstanceNum?: Maybe<Scalars['Float']>;
  RegionBandwidthNum?: Maybe<Scalars['Float']>;
  TagSet?: Maybe<Array<TagSet>>;
};

export type CenTagSet = {
  __typename?: 'CenTagSet';
  ResourceUuid: Scalars['String'];
  TagId: Scalars['String'];
  TagKey: Scalars['String'];
  TagValue: Scalars['String'];
};

/** 获取试用的信息 */
export type CenTrialLimitConfig = {
  __typename?: 'CenTrialLimitConfig';
  AllowMaxDuration?: Maybe<Scalars['Float']>;
  AllowOpenTime?: Maybe<Scalars['Float']>;
  IsContinueOpen: Scalars['Boolean'];
  MaxBandwidth?: Maybe<Scalars['Float']>;
  MinBandwidth?: Maybe<Scalars['Float']>;
};

/** 修改所属项目 */
export type CenUpdateInstancesProjectId = {
  __typename?: 'CenUpdateInstancesProjectId';
  RequestId?: Maybe<Scalars['String']>;
  Result?: Maybe<Scalars['Boolean']>;
};

/** 获取资源退订列表 */
export type CheckInstances = {
  __typename?: 'CheckInstances';
  NonRefundableCount?: Maybe<Scalars['Float']>;
  NonRefundableInstances?: Maybe<Array<Scalars['String']>>;
  Reasons?: Maybe<Array<Reasons>>;
  RefundableCount?: Maybe<Scalars['Float']>;
  RefundableInstances?: Maybe<Array<Scalars['String']>>;
};

/** 是否启用Raid模板 */
export type CheckInterface = {
  __typename?: 'CheckInterface';
  Return: Scalars['Boolean'];
};

export type CheckKciRoleData = {
  __typename?: 'CheckKciRoleData';
  Result: Scalars['String'];
};

export type CheckKciRoleResParams = {
  __typename?: 'CheckKciRoleResParams';
  Data?: Maybe<CheckKciRoleData>;
  RequestId: Scalars['String'];
};

export type CheckMilvueData = {
  __typename?: 'CheckMilvueData';
  InstanceId?: Maybe<Scalars['String']>;
  Msg?: Maybe<Scalars['String']>;
  OperStatus?: Maybe<Scalars['String']>;
};

export type CheckMilvueResponse = {
  __typename?: 'CheckMilvueResponse';
  Code?: Maybe<Scalars['String']>;
  Data?: Maybe<CheckMilvueData>;
  Message?: Maybe<Scalars['String']>;
  RequestId?: Maybe<Scalars['String']>;
};

export type CheckVncPermission = {
  __typename?: 'CheckVncPermission';
  isEnabled: Scalars['Boolean'];
};

export type Cluster = {
  __typename?: 'Cluster';
  ClusterId?: Maybe<Scalars['String']>;
  ClusterName?: Maybe<Scalars['String']>;
  ClusterState?: Maybe<Scalars['String']>;
  ClusterType?: Maybe<Scalars['String']>;
  CreateTime?: Maybe<Scalars['String']>;
  ForbiddenFlag?: Maybe<Scalars['String']>;
  K8sVersion?: Maybe<Scalars['String']>;
  RegionId?: Maybe<Scalars['String']>;
  VpcCidr?: Maybe<Scalars['String']>;
  VpcId?: Maybe<Scalars['String']>;
  VpcName?: Maybe<Scalars['String']>;
};

export type CommonReturn = {
  __typename?: 'CommonReturn';
  Error?: Maybe<ReturnError>;
  RequestId?: Maybe<Scalars['String']>;
  Return?: Maybe<Scalars['Boolean']>;
};

export type Compare = {
  __typename?: 'Compare';
  business?: Maybe<Scalars['String']>;
  compareResult?: Maybe<CompareResult>;
  createTime?: Maybe<Scalars['String']>;
  customerName?: Maybe<Scalars['String']>;
  customerService?: Maybe<Scalars['Float']>;
  discounts?: Maybe<Array<Discount>>;
  id?: Maybe<Scalars['Float']>;
  product?: Maybe<Scalars['String']>;
  projectName?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  strategy?: Maybe<Scalars['Float']>;
  updateTime?: Maybe<Scalars['String']>;
};

export type CompareModel = {
  business: Scalars['String'];
  cpu: Scalars['String'];
  dbType?: InputMaybe<Scalars['String']>;
  engine?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Float']>;
  memory: Scalars['String'];
  num: Scalars['String'];
  product: Scalars['String'];
  productType?: InputMaybe<Scalars['String']>;
  specification?: InputMaybe<Scalars['String']>;
};

export type CompareResult = {
  __typename?: 'CompareResult';
  cost?: Maybe<Scalars['String']>;
  performance?: Maybe<Scalars['String']>;
};

/** 对比结果列表 */
export type Compares = {
  __typename?: 'Compares';
  NextToken?: Maybe<Scalars['Float']>;
  Results?: Maybe<Array<Compare>>;
  TotalCount?: Maybe<Scalars['Float']>;
};

export type ConfigEipInfo = {
  __typename?: 'ConfigEipInfo';
  AllocationId?: Maybe<Scalars['String']>;
  BandWidth?: Maybe<Scalars['Float']>;
  BandWidthShare?: Maybe<Scalars['Float']>;
  BandWidthShareId?: Maybe<Scalars['String']>;
  ChargeType?: Maybe<Scalars['String']>;
  CreateTime?: Maybe<Scalars['String']>;
  HostType?: Maybe<Scalars['String']>;
  InstanceId?: Maybe<Scalars['String']>;
  InstanceType?: Maybe<Scalars['String']>;
  InternetGatewayId?: Maybe<Scalars['String']>;
  IpState?: Maybe<Scalars['String']>;
  IpVersion?: Maybe<Scalars['String']>;
  LineId?: Maybe<Scalars['String']>;
  Mode?: Maybe<Scalars['String']>;
  NetworkInterfaceId?: Maybe<Scalars['String']>;
  NetworkInterfaceType?: Maybe<Scalars['String']>;
  OrderInfo?: Maybe<ConfigOrderInfo>;
  PrivateIpAddress?: Maybe<Scalars['String']>;
  ProductType?: Maybe<Scalars['String']>;
  ProjectId?: Maybe<Scalars['String']>;
  PublicIp?: Maybe<Scalars['String']>;
  State?: Maybe<Scalars['String']>;
  UserTag?: Maybe<Scalars['String']>;
};

export type ConfigOrderInfo = {
  __typename?: 'ConfigOrderInfo';
  billType?: Maybe<Scalars['Float']>;
};

export type ContainerGroupsItem = {
  __typename?: 'ContainerGroupsItem';
  ContainerGroupId?: Maybe<Scalars['String']>;
  ContainerGroupName?: Maybe<Scalars['String']>;
};

export type ContainerItem = {
  Arg?: InputMaybe<Array<Scalars['String']>>;
  Command?: InputMaybe<Scalars['String']>;
  Cpu?: InputMaybe<Scalars['String']>;
  EnvironmentVar?: InputMaybe<Array<EnvironmentVarItem>>;
  Image: Scalars['String'];
  ImageVersion?: InputMaybe<Scalars['String']>;
  LogCollect?: InputMaybe<LogCollect>;
  Memory?: InputMaybe<Scalars['String']>;
  Name: Scalars['String'];
  VolumeMount?: InputMaybe<Array<VolumeMountItem>>;
  WorkingDir?: InputMaybe<Scalars['String']>;
};

export type CostDetails = {
  __typename?: 'CostDetails';
  business: Scalars['String'];
  dbDetails?: Maybe<Array<CostDetailsItem>>;
  details?: Maybe<Array<CostDetailsItem>>;
  product: Scalars['String'];
  productType: Scalars['String'];
};

export type CostDetailsItem = {
  __typename?: 'CostDetailsItem';
  bandwidth?: Maybe<Scalars['String']>;
  business?: Maybe<Scalars['String']>;
  cost?: Maybe<Scalars['Float']>;
  cpu?: Maybe<Scalars['Float']>;
  dataDiskType?: Maybe<Scalars['String']>;
  dbType?: Maybe<Scalars['String']>;
  engine?: Maybe<Scalars['String']>;
  frequency?: Maybe<Scalars['String']>;
  hostType?: Maybe<Scalars['String']>;
  memory?: Maybe<Scalars['Float']>;
  model?: Maybe<Scalars['String']>;
  networkPacket?: Maybe<Scalars['String']>;
  specification?: Maybe<Scalars['String']>;
};

/** 对比价格结果详情 */
export type CostDetailsResult = {
  __typename?: 'CostDetailsResult';
  CostDetailsResult: Array<CostDetails>;
};

export type CpuEpcItem = {
  __typename?: 'CpuEpcItem';
  CoreCount?: Maybe<Scalars['Float']>;
  Count?: Maybe<Scalars['Float']>;
  Frequence?: Maybe<Scalars['Float']>;
  Model?: Maybe<Scalars['String']>;
};

export type CpuGpuConfig = {
  __typename?: 'CpuGpuConfig';
  num: Scalars['Float'];
  type: Scalars['String'];
  uuid: Scalars['String'];
};

/** 创建云企业网 */
export type CreateCen = {
  __typename?: 'CreateCen';
  Cen?: Maybe<CreateCenData>;
  RequestId?: Maybe<Scalars['String']>;
};

export type CreateCenData = {
  __typename?: 'CreateCenData';
  CenBandwith?: Maybe<Scalars['Float']>;
  CenId: Scalars['String'];
  CenName?: Maybe<Scalars['String']>;
  CenNetwork?: Maybe<Scalars['Float']>;
  CreateTime?: Maybe<Scalars['String']>;
  Description?: Maybe<Scalars['String']>;
  TagSet?: Maybe<Array<CenTagSet>>;
};

/** 给云企业网创建授权可以加入 */
export type CreateCenGrant = {
  __typename?: 'CreateCenGrant';
  CenGrant?: Maybe<CenGrant>;
  RequestId?: Maybe<Scalars['String']>;
};

/** 创建跨地域带宽 */
export type CreateCenRegionBandwidth = {
  __typename?: 'CreateCenRegionBandwidth';
  CenRegionBandwidth?: Maybe<CenRegionBandwidth>;
  RequestId?: Maybe<Scalars['String']>;
};

export type CreateContainerGroupData = {
  __typename?: 'CreateContainerGroupData';
  ContainerGroupId?: Maybe<Scalars['String']>;
  ContainerGroups?: Maybe<Array<ContainerGroupsItem>>;
};

export type CreateContainerGroupResParams = {
  __typename?: 'CreateContainerGroupResParams';
  Data?: Maybe<CreateContainerGroupData>;
  RequestId?: Maybe<Scalars['String']>;
};

/** 获取命名空间列表 */
export type CreateGlobalNamespaceResponse = {
  __typename?: 'CreateGlobalNamespaceResponse';
  RequestId?: Maybe<Scalars['String']>;
};

export type CreateModelRes = {
  __typename?: 'CreateModelRes';
  ModelId?: Maybe<Scalars['String']>;
  ModelName?: Maybe<Scalars['String']>;
  RequestId?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['Float']>;
  msg?: Maybe<Scalars['String']>;
};

export type CreateProductRes = {
  __typename?: 'CreateProductRes';
  code?: Maybe<Scalars['Float']>;
  ebsList?: Maybe<Array<EbsProduct>>;
  eip?: Maybe<Product>;
  keadList?: Maybe<Array<Product>>;
  kvm?: Maybe<Product>;
  msg?: Maybe<Scalars['String']>;
};

/** Create Product */
export type CreateResponseParams = {
  __typename?: 'CreateResponseParams';
  EipProductId?: Maybe<Scalars['String']>;
  ProductId?: Maybe<Scalars['String']>;
  VolumeProductIds?: Maybe<Array<Scalars['String']>>;
};

/** 创建网格实例 */
export type CreateServiceMeshResponse = {
  __typename?: 'CreateServiceMeshResponse';
  RequestId?: Maybe<Scalars['String']>;
};

export type DBsTypeList = {
  __typename?: 'DBsTypeList';
  business?: Maybe<Scalars['String']>;
  cpu?: Maybe<Scalars['Float']>;
  dbType?: Maybe<Scalars['String']>;
  engine?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  memory?: Maybe<Scalars['Float']>;
  num?: Maybe<Scalars['Float']>;
};

export type DataDisk = {
  __typename?: 'DataDisk';
  DeleteWithInstance?: Maybe<Scalars['Boolean']>;
  Encrypted?: Maybe<Scalars['Boolean']>;
  Size?: Maybe<Scalars['Float']>;
  SnapshotId?: Maybe<Scalars['String']>;
  SnapshotName?: Maybe<Scalars['String']>;
  Type?: Maybe<Scalars['String']>;
};

export type DataDiskItem = {
  __typename?: 'DataDiskItem';
  DeleteWithInstance?: Maybe<Scalars['Boolean']>;
  DiskId?: Maybe<Scalars['String']>;
  DiskSize?: Maybe<Scalars['Float']>;
  DiskType?: Maybe<Scalars['String']>;
};

export type DataGuard = {
  __typename?: 'DataGuard';
  DataGuardCapacity?: Maybe<Scalars['Float']>;
  DataGuardId?: Maybe<Scalars['String']>;
  DataGuardLevel?: Maybe<Scalars['String']>;
  DataGuardName?: Maybe<Scalars['String']>;
  DataGuardType?: Maybe<Scalars['String']>;
  DataGuardUsedSize?: Maybe<Scalars['Float']>;
};

export type DataGuardInfo = {
  __typename?: 'DataGuardInfo';
  DataGuardCapacity?: Maybe<Scalars['Float']>;
  DataGuardId?: Maybe<Scalars['String']>;
  DataGuardLevel?: Maybe<Scalars['String']>;
  DataGuardName?: Maybe<Scalars['String']>;
  DataGuardType?: Maybe<Scalars['String']>;
  DataGuardUsedSize?: Maybe<Scalars['Float']>;
};

export type DataVolumeEpcItem = {
  __typename?: 'DataVolumeEpcItem';
  DeleteWithInstance?: Maybe<Scalars['Boolean']>;
  VolumeId?: Maybe<Scalars['String']>;
  VolumeSize?: Maybe<Scalars['String']>;
  VolumeType?: Maybe<Scalars['String']>;
};

export type DataVolumes = {
  deleteWithInstance: Scalars['Boolean'];
  size: Scalars['Float'];
  type: Scalars['String'];
};

export type DatapointObject = {
  __typename?: 'DatapointObject';
  timestamp?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type Datapoints = {
  __typename?: 'Datapoints';
  timestamp?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['String']>;
};

/** 删除云企业网带宽包 */
export type DeleteCenBandWidthPackage = {
  __typename?: 'DeleteCenBandWidthPackage';
  data?: Maybe<DeleteCenBandWidthPackageData>;
};

export type DeleteCenBandWidthPackageData = {
  __typename?: 'DeleteCenBandWidthPackageData';
  Message?: Maybe<Scalars['String']>;
  RequestId?: Maybe<Scalars['String']>;
  Return?: Maybe<Scalars['Boolean']>;
};

/** 删除云企业网授权 */
export type DeleteCenGrant = {
  __typename?: 'DeleteCenGrant';
  data?: Maybe<CommonReturn>;
};

/** 删除跨地域带宽 */
export type DeleteCenRegionBandwidth = {
  __typename?: 'DeleteCenRegionBandwidth';
  data?: Maybe<CommonReturn>;
};

export type DemoItem = {
  __typename?: 'DemoItem';
  Id?: Maybe<Scalars['String']>;
};

export type DemoSet = {
  __typename?: 'DemoSet';
  DemoItemSet?: Maybe<Array<DemoItem>>;
};

/** 查询机型列表 */
export type DesDBsCompares = {
  __typename?: 'DesDBsCompares';
  DBTypes?: Maybe<Array<DBsTypeList>>;
  NextToken?: Maybe<Scalars['String']>;
  RequestId?: Maybe<Scalars['String']>;
  TotalCount?: Maybe<Scalars['Float']>;
};

/** 查询机型列表 */
export type DesHostCompares = {
  __typename?: 'DesHostCompares';
  HostTypeList?: Maybe<Array<HostTypeList>>;
  NextToken?: Maybe<Scalars['String']>;
  RequestId?: Maybe<Scalars['String']>;
  TotalCount?: Maybe<Scalars['Float']>;
};

export type DescribeAllProjectsResData = {
  __typename?: 'DescribeAllProjectsResData';
  Projects: Array<KciProjectItem>;
};

export type DescribeAllProjectsResParams = {
  __typename?: 'DescribeAllProjectsResParams';
  Data?: Maybe<DescribeAllProjectsResData>;
  RequestId?: Maybe<Scalars['String']>;
};

export type DescribeAvailabilityZones = {
  __typename?: 'DescribeAvailabilityZones';
  AvailabilityZoneInfo: Array<AvailabilityZoneInfo>;
  RequestId: Scalars['String'];
};

export type DescribeCabinetStatisticalData = {
  __typename?: 'DescribeCabinetStatisticalData';
  Data?: Maybe<Array<CabinetStatisticalItem>>;
};

/** 获取同账号未绑定VPC和云企业网的专线网关列表 */
export type DescribeCanBindCenDcGateway = {
  __typename?: 'DescribeCanBindCenDcGateway';
  DirectConnectGatewaySet?: Maybe<Array<DirectConnectGatewaySet>>;
  RequestId?: Maybe<Scalars['String']>;
};

/** 获取同账号未绑定专线、云企业网、对等连接的VPC列表 */
export type DescribeCanBindCenVpcs = {
  __typename?: 'DescribeCanBindCenVpcs';
  RequestId?: Maybe<Scalars['String']>;
  VpcSet?: Maybe<Array<VpcSet>>;
};

/** 获取可绑定带宽包的云企业网列表 */
export type DescribeCanBindCens = {
  __typename?: 'DescribeCanBindCens';
  CenSet?: Maybe<Array<DescribeCanBindCensSet>>;
};

export type DescribeCanBindCensSet = {
  __typename?: 'DescribeCanBindCensSet';
  CenId?: Maybe<Scalars['String']>;
  CenName?: Maybe<Scalars['String']>;
  CreateTime?: Maybe<Scalars['String']>;
  Description?: Maybe<Scalars['String']>;
  NetworkInstanceNum?: Maybe<Scalars['String']>;
  RegionBandwidthNum?: Maybe<Scalars['String']>;
};

/** 获取云企业网带宽包列表 */
export type DescribeCenBandWidthPackages = {
  __typename?: 'DescribeCenBandWidthPackages';
  CenBandWidthPackageSet?: Maybe<Array<CenBandWidthPackageSet>>;
  NextToken?: Maybe<Scalars['String']>;
  RequestId?: Maybe<Scalars['String']>;
};

/** 查询云企业网授权信息 */
export type DescribeCenGrants = {
  __typename?: 'DescribeCenGrants';
  CenGrantSet?: Maybe<Array<CenGrantSet>>;
  RequestId?: Maybe<Scalars['String']>;
};

/** 获取跨地域带宽列表 */
export type DescribeCenRegionBandwidths = {
  __typename?: 'DescribeCenRegionBandwidths';
  CenRegionBandwidthSet?: Maybe<Array<CenRegionBandwidthSet>>;
  RequestId?: Maybe<Scalars['String']>;
};

/** 获取云企业网路由列表 */
export type DescribeCenRoutes = {
  __typename?: 'DescribeCenRoutes';
  CenRouteSet?: Maybe<Array<CenRouteSet>>;
  NextToken?: Maybe<Scalars['Float']>;
  RequestId?: Maybe<Scalars['String']>;
};

/** 获取云企业网列表 */
export type DescribeCens = {
  __typename?: 'DescribeCens';
  CenSet?: Maybe<Array<CenSet>>;
  RequestId?: Maybe<Scalars['String']>;
};

/** 获取已纳管集群 */
export type DescribeClustersResponse = {
  __typename?: 'DescribeClustersResponse';
  Clusters?: Maybe<Array<Cluster>>;
  Page?: Maybe<Page>;
};

export type DescribeDataGuardGroup = {
  __typename?: 'DescribeDataGuardGroup';
  DataGuardsSet: Array<DataGuard>;
  RequestId: Scalars['String'];
  isSupportDomain: Scalars['Boolean'];
};

/** 获取网络实例-专线网关的可添加到云企业网的路由列表&&获取专线网关的路由列表 */
export type DescribeDcGatewayRoutes = {
  __typename?: 'DescribeDcGatewayRoutes';
  DirectConnectRouteSet?: Maybe<Array<DirectConnectRouteSet>>;
  RequestId?: Maybe<Scalars['String']>;
};

export type DescribeEbsPerfQuotasData = {
  __typename?: 'DescribeEbsPerfQuotasData';
  rKey: Scalars['String'];
  rValue?: Maybe<Array<EssdPlItem>>;
};

export type DescribeEntrySnapshots = {
  __typename?: 'DescribeEntrySnapshots';
  Volume?: Maybe<Array<DescribeEntrySnapshotsData>>;
};

export type DescribeEntrySnapshotsData = {
  __typename?: 'DescribeEntrySnapshotsData';
  rKey?: Maybe<Scalars['String']>;
  rValue?: Maybe<Scalars['Boolean']>;
};

export type DescribeEpcsInfo = {
  __typename?: 'DescribeEpcsInfo';
  HostSet: Array<HostEpcItem>;
  NextToken?: Maybe<Scalars['Float']>;
  TotalCount?: Maybe<Scalars['Float']>;
};

/** 获取其他账号给云企业网授权的专线网关列表 */
export type DescribeGrantDirectConnectGateways = {
  __typename?: 'DescribeGrantDirectConnectGateways';
  DirectConnectGatewaySet?: Maybe<Array<DirectConnectGatewaySet>>;
  RequestId?: Maybe<Scalars['String']>;
};

/** 获取其他账号给云企业网授权的VPC列表 */
export type DescribeGrantVpcs = {
  __typename?: 'DescribeGrantVpcs';
  RequestId?: Maybe<Scalars['String']>;
  VpcSet?: Maybe<Array<VpcSet>>;
};

export type DescribeImageRepositoryResParams = {
  __typename?: 'DescribeImageRepositoryResParams';
  DescribeRepository: Array<RepositoryItem>;
  TotalCount: Scalars['Float'];
};

export type DescribeImages = {
  __typename?: 'DescribeImages';
  ImageCount?: Maybe<Scalars['Float']>;
  ImagesSet?: Maybe<Array<ImagesSet>>;
  RequestId?: Maybe<Scalars['String']>;
};

export type DescribeInstanceGroupCount = {
  __typename?: 'DescribeInstanceGroupCount';
  Count?: Maybe<Scalars['Float']>;
  Data?: Maybe<Array<InstanceGroupCountData>>;
};

/** 获取互通大区列表 */
export type DescribeInterAreas = {
  __typename?: 'DescribeInterAreas';
  InterAreaSet?: Maybe<Array<InterAreaSet>>;
};

export type DescribeInterRegions = {
  __typename?: 'DescribeInterRegions';
  InterRegionSet?: Maybe<Array<InterRegionSet>>;
  RequestId?: Maybe<Scalars['String']>;
};

/** 获取IstioGateway */
export type DescribeIstioGatewayResponse = {
  __typename?: 'DescribeIstioGatewayResponse';
  GloabalNamespaceName?: Maybe<Array<GlobalNamespaceName>>;
  IstioGatewayInfo?: Maybe<Array<IstioGatewayInfo>>;
  RequestId?: Maybe<Scalars['String']>;
};

export type DescribeJobStatusData = {
  __typename?: 'DescribeJobStatusData';
  Data?: Maybe<Array<JobSatatusItem>>;
};

/** 获取云堡垒机详情 */
export type DescribeKbh = {
  __typename?: 'DescribeKbh';
  KBHInfo?: Maybe<KbhDetailInfo>;
  RequestId?: Maybe<Scalars['String']>;
};

export type DescribeKciPackagesResParams = {
  __typename?: 'DescribeKciPackagesResParams';
  Packages: Array<KciPackageItem>;
};

export type DescribeKciSecurityGroupsResParams = {
  __typename?: 'DescribeKciSecurityGroupsResParams';
  SecurityGroupList: Array<SecurityGroupItem>;
};

export type DescribeKciServiceStatusResParams = {
  __typename?: 'DescribeKciServiceStatusResParams';
  Status: Scalars['Float'];
};

export type DescribeKeadMinRate = {
  __typename?: 'DescribeKeadMinRate';
  MinBwRate?: Maybe<Scalars['Float']>;
  Return?: Maybe<Scalars['Boolean']>;
};

export type DescribeKecIamRoles = {
  __typename?: 'DescribeKecIamRoles';
  ListRolesResult: ListRolesResult;
  RequestId: Scalars['String'];
};

/** 获取经典型负载均衡列表 */
export type DescribeLoadBalancers = {
  __typename?: 'DescribeLoadBalancers';
  LoadBalancerDescriptions?: Maybe<Array<LoadBalancerDescriptions>>;
  NextToken?: Maybe<Scalars['Boolean']>;
  RequestId?: Maybe<Scalars['String']>;
  TotalCount?: Maybe<Scalars['Float']>;
};

/** 获取本地盘快照 */
export type DescribeLocalVolumeSnapshots = {
  __typename?: 'DescribeLocalVolumeSnapshots';
  LocalVolumeSnapshotCount: Scalars['Float'];
  LocalVolumeSnapshotSet?: Maybe<Array<LocalVolumeSnapshotSetInfo>>;
};

export type DescribeMarketImageCategories = {
  __typename?: 'DescribeMarketImageCategories';
  code?: Maybe<Scalars['Float']>;
  data?: Maybe<Array<MarketImageCategoriesData>>;
  requestId?: Maybe<Scalars['String']>;
};

export type DescribeMarketImages = {
  __typename?: 'DescribeMarketImages';
  code?: Maybe<Scalars['Float']>;
  data: MarketImageData;
  msg?: Maybe<Scalars['String']>;
  requestId?: Maybe<Scalars['String']>;
};

/** 监控图表 - 获取监控指标数据 */
export type DescribeMetricsData = {
  __typename?: 'DescribeMetricsData';
  code?: Maybe<Scalars['String']>;
  data?: Maybe<Array<DescribeMetricsDataList>>;
  message?: Maybe<Scalars['String']>;
  requestId?: Maybe<Scalars['String']>;
};

export type DescribeMetricsDataList = {
  __typename?: 'DescribeMetricsDataList';
  datapoints?: Maybe<Array<Datapoints>>;
  metric?: Maybe<Scalars['String']>;
  metricDesc?: Maybe<Scalars['String']>;
  tags?: Maybe<MetricsTags>;
};

export type DescribeModels = {
  __typename?: 'DescribeModels';
  InstanceCount?: Maybe<Scalars['Float']>;
  ModelSet?: Maybe<Array<KecModel>>;
  RequestId?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['Float']>;
};

/** 根据云企业网ID获取网络实例列表 */
export type DescribeNetworkInstances = {
  __typename?: 'DescribeNetworkInstances';
  NetworkInstanceSet?: Maybe<Array<NetworkInstanceSet>>;
  RequestId?: Maybe<Scalars['String']>;
};

/** 获取云企业网带宽包价格体系信息 */
export type DescribePriceSystemOfCen = {
  __typename?: 'DescribePriceSystemOfCen';
  data?: Maybe<CenQueryPriceSystemData>;
  errorCode?: Maybe<Scalars['Float']>;
  errorMsg?: Maybe<Scalars['String']>;
  requestId?: Maybe<Scalars['String']>;
};

/** 获取子网内网IP信息,预留IP */
export type DescribePrivateIpAttributes = {
  __typename?: 'DescribePrivateIpAttributes';
  PrivateIpAddressAttributeSet?: Maybe<Array<PrivateIpAddressAttributeSetData>>;
  RequestId: Scalars['String'];
};

export type DescribeProductSellOutsData = {
  __typename?: 'DescribeProductSellOutsData';
  rKey: Scalars['String'];
  rValue: Scalars['Float'];
};

/** 获取VPC已发布的网段及名称 */
export type DescribePublishedRoutes = {
  __typename?: 'DescribePublishedRoutes';
  CenRouteSet?: Maybe<Array<CenPublishVpcRouteSet>>;
  NextToken?: Maybe<Scalars['Float']>;
  RequestId?: Maybe<Scalars['String']>;
};

/** 获取Quota配额 */
export type DescribeQuotaByName = {
  __typename?: 'DescribeQuotaByName';
  Allow?: Maybe<Scalars['Boolean']>;
  QuotaMax?: Maybe<Scalars['Float']>;
  QuotaRt?: Maybe<Scalars['Float']>;
};

export type DescribeResourceQuotaResParams = {
  __typename?: 'DescribeResourceQuotaResParams';
  ResourceQuotaList: Array<KciQuotaItem>;
};

/** 获取VPC路由列表（子网类型的） */
export type DescribeRoutes = {
  __typename?: 'DescribeRoutes';
  RequestId?: Maybe<Scalars['String']>;
  RouteSet?: Maybe<Array<RouteSet>>;
};

/** 监控图表 - 获取监控面板详情 */
export type DescribeScreen = {
  __typename?: 'DescribeScreen';
  code?: Maybe<Scalars['String']>;
  data?: Maybe<DescribeScreenData>;
  message?: Maybe<Scalars['String']>;
  requestId?: Maybe<Scalars['String']>;
};

export type DescribeScreenApplications = {
  __typename?: 'DescribeScreenApplications';
  appId?: Maybe<Scalars['Float']>;
  graphs?: Maybe<Array<DescribeScreenGraphs>>;
  name?: Maybe<Scalars['String']>;
};

export type DescribeScreenData = {
  __typename?: 'DescribeScreenData';
  applications?: Maybe<Array<DescribeScreenApplications>>;
  name?: Maybe<Scalars['String']>;
  productType?: Maybe<Scalars['Float']>;
  screenId?: Maybe<Scalars['Float']>;
};

export type DescribeScreenGraphs = {
  __typename?: 'DescribeScreenGraphs';
  graphId?: Maybe<Scalars['Float']>;
  graphType?: Maybe<Scalars['String']>;
  lines?: Maybe<Array<DescribeScreenLines>>;
  title?: Maybe<Scalars['String']>;
  units?: Maybe<Scalars['String']>;
};

export type DescribeScreenKisObj = {
  __typename?: 'DescribeScreenKisObj';
  applications?: Maybe<Array<ApplicationObject>>;
  name?: Maybe<Scalars['String']>;
  productType?: Maybe<Scalars['Float']>;
  screenId?: Maybe<Scalars['Float']>;
};

export type DescribeScreenLines = {
  __typename?: 'DescribeScreenLines';
  delay?: Maybe<Scalars['Float']>;
  flags?: Maybe<Scalars['Float']>;
  instance?: Maybe<Scalars['String']>;
  legend?: Maybe<Scalars['String']>;
  lineId?: Maybe<Scalars['Float']>;
  metricKey?: Maybe<Scalars['String']>;
  metricType?: Maybe<Scalars['Float']>;
  tags?: Maybe<DescribeScreenTags>;
};

export type DescribeScreenTags = {
  __typename?: 'DescribeScreenTags';
  host?: Maybe<Scalars['String']>;
};

export type DescribeSecurityGroupsQuota = {
  __typename?: 'DescribeSecurityGroupsQuota';
  MAX: Scalars['Float'];
  QuotaId: Scalars['Float'];
  QuotaName: Scalars['String'];
  Region: Scalars['String'];
  RequestId: Scalars['String'];
};

export type DescribeSnapshotServiceStatus = {
  __typename?: 'DescribeSnapshotServiceStatus';
  msg: Scalars['String'];
  status: Scalars['Float'];
};

/** 获取系统盘和数据盘快照 */
export type DescribeSnapshots = {
  __typename?: 'DescribeSnapshots';
  Page?: Maybe<SnapshotsPage>;
  Snapshots?: Maybe<Array<SnapshotsList>>;
};

export type DescribeSnapshotsResParams = {
  __typename?: 'DescribeSnapshotsResParams';
  Snapshots: Array<SnapshotItem>;
  TotalCount?: Maybe<Scalars['Float']>;
};

export type DescribeSubnetsResParams = {
  __typename?: 'DescribeSubnetsResParams';
  SubnetList: Array<KciSubnet>;
};

export type DescribeTagKeys = {
  __typename?: 'DescribeTagKeys';
  RequestId?: Maybe<Scalars['String']>;
  TagKeySet?: Maybe<Array<TagKey>>;
  TagKeySum?: Maybe<Scalars['Float']>;
};

export type DescribeTagKeysV2 = {
  __typename?: 'DescribeTagKeysV2';
  Page?: Maybe<Scalars['Float']>;
  PageSize?: Maybe<Scalars['Float']>;
  RequestId?: Maybe<Scalars['String']>;
  TagKeys?: Maybe<Array<Scalars['String']>>;
  Total?: Maybe<Scalars['Float']>;
};

export type DescribeTagResParams = {
  __typename?: 'DescribeTagResParams';
  TagList: Array<TagItem>;
  TotalCount?: Maybe<Scalars['Float']>;
};

export type DescribeTagValues = {
  __typename?: 'DescribeTagValues';
  RequestId?: Maybe<Scalars['String']>;
  TagValueSet?: Maybe<Array<TagValue>>;
  TagValueSum?: Maybe<Scalars['Float']>;
};

export type DescribeTagValuesV2 = {
  __typename?: 'DescribeTagValuesV2';
  Page?: Maybe<Scalars['Float']>;
  PageSize?: Maybe<Scalars['Float']>;
  RequestId?: Maybe<Scalars['String']>;
  TagValues?: Maybe<Array<TagValues>>;
  Total?: Maybe<Scalars['Float']>;
};

export type DescribeVolumesResParams = {
  __typename?: 'DescribeVolumesResParams';
  TotalCount?: Maybe<Scalars['Float']>;
  Volumes: Array<EbsItem>;
};

export type DescribeVpcInfos = {
  __typename?: 'DescribeVpcInfos';
  RequestId: Scalars['String'];
  VpcSet: Array<NetVpc>;
};

/** 获取网络实例VPC类型的可添加到云企业网的路由列表 */
export type DescribeVpcRoutes = {
  __typename?: 'DescribeVpcRoutes';
  RequestId?: Maybe<Scalars['String']>;
  RouteSet?: Maybe<Array<VpcRouteSet>>;
};

export type DescribeVpcsResParams = {
  __typename?: 'DescribeVpcsResParams';
  VpcList: Array<KciVpc>;
};

/** 云企业网解绑带宽包 */
export type DetachCenBandWidthPackage = {
  __typename?: 'DetachCenBandWidthPackage';
  RequestId?: Maybe<Scalars['String']>;
  Return?: Maybe<Scalars['Boolean']>;
};

export type DetachCenInstanceData = {
  __typename?: 'DetachCenInstanceData';
  CenId?: Maybe<Scalars['String']>;
  InstanceId?: Maybe<Scalars['String']>;
  Message?: Maybe<Scalars['String']>;
  Return?: Maybe<Scalars['Boolean']>;
};

export type DetachResourceTagsV2 = {
  __typename?: 'DetachResourceTagsV2';
  RequestId?: Maybe<Scalars['String']>;
  Result?: Maybe<Scalars['Boolean']>;
};

export type DirectConnectGatewaySet = {
  __typename?: 'DirectConnectGatewaySet';
  AssociatedInstanceType?: Maybe<Scalars['String']>;
  CenAccountId?: Maybe<Scalars['String']>;
  CenId?: Maybe<Scalars['String']>;
  CreateTime?: Maybe<Scalars['String']>;
  DirectConnectGatewayId: Scalars['String'];
  DirectConnectGatewayName?: Maybe<Scalars['String']>;
  DirectConnectInterfaceId?: Maybe<Scalars['String']>;
  DirectConnectInterfaceInfoSet?: Maybe<Array<DirectConnectInterfaceInfoSet>>;
  RemoteCidrSet?: Maybe<Array<Scalars['String']>>;
  Status?: Maybe<Scalars['String']>;
  Version?: Maybe<Scalars['String']>;
  VpcId?: Maybe<Scalars['String']>;
};

export type DirectConnectInterfaceInfoSet = {
  __typename?: 'DirectConnectInterfaceInfoSet';
  DirectConnectInterfaceId: Scalars['String'];
  DirectConnectInterfaceName?: Maybe<Scalars['String']>;
};

export type DirectConnectRouteSet = {
  __typename?: 'DirectConnectRouteSet';
  BgpStatus?: Maybe<Scalars['String']>;
  CenStatus?: Maybe<Scalars['String']>;
  CreateTime?: Maybe<Scalars['String']>;
  DestinationCidrBlock?: Maybe<Scalars['String']>;
  DirectConnectId?: Maybe<Scalars['String']>;
  DirectConnectName?: Maybe<Scalars['String']>;
  DirectConnectRouteId: Scalars['String'];
  NextHopSet?: Maybe<Array<NextHopSet>>;
  PublishedStatus?: Maybe<Scalars['Boolean']>;
  RouteType?: Maybe<Scalars['String']>;
};

export type Discount = {
  __typename?: 'Discount';
  discount?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type DiscountItem = {
  __typename?: 'DiscountItem';
  billType?: Maybe<Scalars['Float']>;
  business_scenario?: Maybe<Scalars['Float']>;
  code?: Maybe<Scalars['String']>;
  cost_bearing_party?: Maybe<Scalars['Float']>;
  cost_bearing_product_group?: Maybe<Scalars['Float']>;
  create_time?: Maybe<Scalars['Float']>;
  creater_id?: Maybe<Scalars['Float']>;
  creater_name?: Maybe<Scalars['String']>;
  event_rule: EventRule;
  event_status?: Maybe<Scalars['String']>;
  event_type?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  update_time?: Maybe<Scalars['Float']>;
  updater_id?: Maybe<Scalars['Float']>;
  updater_name?: Maybe<Scalars['String']>;
};

export type DiscountRes = {
  __typename?: 'DiscountRes';
  code: Scalars['Float'];
  data?: Maybe<Array<DiscountItem>>;
};

export type DiscountRuleDetail = {
  __typename?: 'DiscountRuleDetail';
  order_full_month: Scalars['Float'];
  order_reduce_discount: Scalars['Float'];
};

export type DiskConfig = {
  __typename?: 'DiskConfig';
  DiskAttribute: Scalars['String'];
  DiskCount: Scalars['Float'];
  DiskId: Scalars['String'];
  DiskSpace: Scalars['String'];
  DiskType: Scalars['String'];
  Raid: Scalars['String'];
  Space: Scalars['String'];
  SystemDiskSpace?: Maybe<Scalars['String']>;
  templateIndex: Scalars['Float'];
};

export type DiskEpcItem = {
  __typename?: 'DiskEpcItem';
  DiskAttribute?: Maybe<Scalars['String']>;
  DiskCount?: Maybe<Scalars['Float']>;
  DiskSpace?: Maybe<Scalars['String']>;
  DiskType?: Maybe<Scalars['String']>;
  Raid?: Maybe<Scalars['String']>;
  Space?: Maybe<Scalars['String']>;
};

export type DistributeKmsPermission = {
  __typename?: 'DistributeKmsPermission';
  isEntrypt?: Maybe<Scalars['Boolean']>;
  isKms?: Maybe<Scalars['Boolean']>;
  kmsDayMonth?: Maybe<Scalars['Boolean']>;
};

export type EbsVolume = {
  DeleteWithInstance?: InputMaybe<Scalars['Boolean']>;
  FsType?: InputMaybe<Scalars['String']>;
  Size?: InputMaybe<Scalars['String']>;
  SnapshotId?: InputMaybe<Scalars['String']>;
  Type?: InputMaybe<Scalars['String']>;
  VolumeId?: InputMaybe<Scalars['String']>;
};

export type EbsItem = {
  __typename?: 'EbsItem';
  AvailabilityZone: Scalars['String'];
  ChargeType?: Maybe<Scalars['String']>;
  CreateTime?: Maybe<Scalars['String']>;
  InstanceType?: Maybe<Scalars['Float']>;
  ProjectId?: Maybe<Scalars['String']>;
  Size: Scalars['Float'];
  VolumeCategory?: Maybe<Scalars['String']>;
  VolumeId: Scalars['String'];
  VolumeName: Scalars['String'];
  VolumeStatus: Scalars['String'];
  VolumeType: Scalars['String'];
};

export type EbsParam = {
  billType?: InputMaybe<Scalars['Float']>;
  count?: InputMaybe<Scalars['Float']>;
  deleteWithInstance?: InputMaybe<Scalars['Boolean']>;
  display?: InputMaybe<Scalars['String']>;
  duration?: InputMaybe<Scalars['String']>;
  durationUnit?: InputMaybe<Scalars['String']>;
  encrypted?: InputMaybe<Scalars['Boolean']>;
  isBindCloudServer?: InputMaybe<Scalars['Boolean']>;
  productType?: InputMaybe<Scalars['Float']>;
  productWhat?: InputMaybe<Scalars['Float']>;
  size?: InputMaybe<Scalars['Float']>;
  snapshotId?: InputMaybe<Scalars['String']>;
  snapshotName?: InputMaybe<Scalars['String']>;
  volumeId?: InputMaybe<Scalars['Float']>;
  volumeType?: InputMaybe<Scalars['String']>;
};

export type EbsProduct = {
  __typename?: 'EbsProduct';
  ebs?: Maybe<Product>;
};

export type EditTagsV2 = {
  __typename?: 'EditTagsV2';
  RequestId?: Maybe<Scalars['String']>;
  Result?: Maybe<Scalars['Boolean']>;
};

export type EipEpcItem = {
  __typename?: 'EipEpcItem';
  AllocationId?: Maybe<Scalars['String']>;
  BandWidth?: Maybe<Scalars['Float']>;
  BandWidthShareId?: Maybe<Scalars['String']>;
  BandWidthShareName?: Maybe<Scalars['String']>;
  CreateTime?: Maybe<Scalars['String']>;
  EndTime?: Maybe<Scalars['String']>;
  InstanceId?: Maybe<Scalars['String']>;
  InstanceType?: Maybe<Scalars['String']>;
  IsBandWidthShare?: Maybe<Scalars['Boolean']>;
  Isp?: Maybe<Scalars['String']>;
  LineId?: Maybe<Scalars['String']>;
  LineName?: Maybe<Scalars['String']>;
  LoadBalancer?: Maybe<Scalars['String']>;
  NetworkInterfaceId?: Maybe<Scalars['String']>;
  ProjectId?: Maybe<Scalars['String']>;
  ProjectName?: Maybe<Scalars['String']>;
  PublicIp?: Maybe<Scalars['String']>;
  State?: Maybe<Scalars['String']>;
};

export type EipInfo = {
  __typename?: 'EipInfo';
  PublicIp?: Maybe<Scalars['String']>;
};

export type EipPackage = {
  __typename?: 'EipPackage';
  packageCode: Scalars['String'];
  packageInfo: Array<EipPackageInfo>;
  packageName: Scalars['String'];
  packageType: Scalars['Float'];
  refBillTypeList: Array<EipRefBillType>;
  refRegionList: Array<EipRefRegion>;
};

export type EipPackageInfo = {
  __typename?: 'EipPackageInfo';
  propCode?: Maybe<Scalars['String']>;
  propName?: Maybe<Scalars['String']>;
  propValue: Array<EipPropValue>;
  propValueType?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
};

export type EipParam = {
  billType?: InputMaybe<Scalars['Float']>;
  bwsId?: InputMaybe<Scalars['String']>;
  count?: InputMaybe<Scalars['Float']>;
  duration?: InputMaybe<Scalars['Float']>;
  durationUnit?: InputMaybe<Scalars['String']>;
  lineId?: InputMaybe<Scalars['String']>;
  net?: InputMaybe<Scalars['Float']>;
  productWhat?: InputMaybe<Scalars['Float']>;
  projectId?: InputMaybe<Scalars['Float']>;
  provider?: InputMaybe<Scalars['String']>;
};

export type EipParamItem = {
  billType: Scalars['Float'];
  count: Scalars['Float'];
  duration: Scalars['Float'];
  durationUnit?: InputMaybe<Scalars['String']>;
  lineId: Scalars['String'];
  net: Scalars['Float'];
  provider: Scalars['String'];
};

export type EipPriceDetails = {
  __typename?: 'EipPriceDetails';
  discount?: Maybe<Scalars['Float']>;
  discountedPrice?: Maybe<Scalars['Float']>;
  originalPrice?: Maybe<Scalars['Float']>;
};

export type EipPriceResult = {
  __typename?: 'EipPriceResult';
  price: Scalars['Float'];
};

export type EipProductType = {
  __typename?: 'EipProductType';
  packageList: Array<EipPackage>;
  productTypeCode: Scalars['String'];
  productTypeEnName: Scalars['String'];
  productTypeId: Scalars['Float'];
  productTypeName: Scalars['String'];
};

export type EipPropValue = {
  __typename?: 'EipPropValue';
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  step?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['String']>;
};

export type EipRefBillType = {
  __typename?: 'EipRefBillType';
  billTypeEnName?: Maybe<Scalars['String']>;
  billTypeId: Scalars['Float'];
  billTypeName: Scalars['String'];
};

export type EipRefRegion = {
  __typename?: 'EipRefRegion';
  areaCode?: Maybe<Scalars['String']>;
  areaEnName?: Maybe<Scalars['String']>;
  areaName?: Maybe<Scalars['String']>;
  innerCode?: Maybe<Scalars['String']>;
  regionCode: Scalars['String'];
  regionEnName?: Maybe<Scalars['String']>;
  regionName: Scalars['String'];
  regionType?: Maybe<Scalars['Float']>;
};

export type EnvironmentVarItem = {
  Key: Scalars['String'];
  Value: Scalars['String'];
};

export type EpcAz = {
  __typename?: 'EpcAZ';
  azCode: Scalars['String'];
  azName: Scalars['String'];
  enName: Scalars['String'];
};

export type EpcBillType = {
  __typename?: 'EpcBillType';
  billTypeEnName: Scalars['String'];
  billTypeId: Scalars['Float'];
  billTypeName: Scalars['String'];
};

export type EpcDisk = {
  __typename?: 'EpcDisk';
  DiskInfos?: Maybe<Array<EpcDiskInfo>>;
  DiskRaids?: Maybe<Array<EpcDiskRaid>>;
};

export type EpcDiskInfo = {
  __typename?: 'EpcDiskInfo';
  DiskNum: Scalars['Float'];
  DiskSize: Scalars['String'];
  DiskType: Scalars['String'];
};

export type EpcDiskRaid = {
  __typename?: 'EpcDiskRaid';
  Raid: Scalars['String'];
  RaidName: Scalars['String'];
  RaidNameEn: Scalars['String'];
  Space: Scalars['String'];
};

export type EpcPackage = {
  __typename?: 'EpcPackage';
  packageCode: Scalars['String'];
  packageInfo: Array<EpcPackageInfo>;
  packageName: Scalars['String'];
  packageType: Scalars['Float'];
  refBillTypeList: Array<EpcBillType>;
  refRegionList: Array<EpcRegion>;
};

export type EpcPackageInfo = {
  __typename?: 'EpcPackageInfo';
  propCode: Scalars['String'];
  propName: Scalars['String'];
  propValue?: Maybe<Array<EpcPropValueUnion>>;
  propValueType: Scalars['Float'];
  type: Scalars['Float'];
};

/** 查询EPC价格体系 */
export type EpcPriceSystem = {
  __typename?: 'EpcPriceSystem';
  productGroupCode: Scalars['String'];
  productGroupEnName: Scalars['String'];
  productGroupId: Scalars['Float'];
  productGroupName: Scalars['String'];
  productTypeList: Array<EpcProductType>;
};

export type EpcProductType = {
  __typename?: 'EpcProductType';
  billTypeList: Array<EpcBillType>;
  packageList: Array<EpcPackage>;
  productTypeCode: Scalars['String'];
  productTypeEnName: Scalars['String'];
  productTypeId: Scalars['Float'];
  productTypeName: Scalars['String'];
  regionList: Array<EpcRegion>;
};

export type EpcPropValueNormal = {
  __typename?: 'EpcPropValueNormal';
  defaultVal: Scalars['Boolean'];
  enName: Scalars['String'];
  name: Scalars['String'];
  value: Scalars['String'];
};

export type EpcPropValueStep = {
  __typename?: 'EpcPropValueStep';
  max: Scalars['Float'];
  min: Scalars['Float'];
  step: Scalars['Float'];
};

export type EpcPropValueUnion = EpcPropValueNormal | EpcPropValueStep;

export type EpcRaidAttribute = {
  __typename?: 'EpcRaidAttribute';
  DiskSet?: Maybe<Array<DiskConfig>>;
  HostType: Scalars['String'];
  RaidId: Scalars['String'];
  TemplateName: Scalars['String'];
};

export type EpcRegion = {
  __typename?: 'EpcRegion';
  active: Scalars['Boolean'];
  areaCode: Scalars['String'];
  areaEnName: Scalars['String'];
  areaName: Scalars['String'];
  azList: Array<EpcAz>;
  innerCode: Scalars['String'];
  regionCode: Scalars['String'];
  regionEnName: Scalars['String'];
  regionName: Scalars['String'];
  regionType: Scalars['Float'];
};

/** 查询试用额度 */
export type EpcTypeConfInfo = {
  __typename?: 'EpcTypeConfInfo';
  BmTypeConfSet?: Maybe<Array<BmTypeConf>>;
};

export type EpcTypeItem = {
  __typename?: 'EpcTypeItem';
  cpu: CpuGpuConfig;
  gpu: CpuGpuConfig;
  hostType: Scalars['String'];
  hostTypeName: Scalars['String'];
  memory?: Maybe<Scalars['Float']>;
  postStorage?: Maybe<Array<StoreageConf>>;
  preStorage?: Maybe<Array<StoreageConf>>;
  productGroup?: Maybe<Scalars['String']>;
  productLine: Scalars['String'];
  type: Scalars['Float'];
};

/** DescribeEpcTypes */
export type EpcTypes = {
  __typename?: 'EpcTypes';
  epcTypeSet?: Maybe<Array<EpcTypeItem>>;
};

export type Error = {
  __typename?: 'Error';
  Code?: Maybe<Scalars['String']>;
  Message?: Maybe<Scalars['String']>;
};

export type ErrorData = {
  __typename?: 'ErrorData';
  Code?: Maybe<Scalars['String']>;
  Message?: Maybe<Scalars['String']>;
  Type?: Maybe<Scalars['String']>;
};

export type EssdPlItem = {
  __typename?: 'EssdPlItem';
  Max: Scalars['Float'];
  Min: Scalars['Float'];
  QuotaTypeName: Scalars['String'];
  Step: Scalars['Float'];
};

export type EventRule = {
  __typename?: 'EventRule';
  billType: Scalars['Float'];
  discount_switch: Scalars['String'];
  discount_type: Scalars['String'];
  discount_way: Scalars['String'];
  event_id: Scalars['Float'];
  id: Scalars['Float'];
  name: Scalars['String'];
  productGroupId: Scalars['Float'];
  productTypeId: Scalars['Float'];
  ruleDetail: Array<DiscountRuleDetail>;
  use_begin_time: Scalars['Float'];
  use_end_time: Scalars['Float'];
  use_voucher_limit: Scalars['String'];
};

export type FileSystem = {
  __typename?: 'FileSystem';
  AvailabilityZone: Scalars['String'];
  AvailabilityZoneName: Scalars['String'];
  CreationDate: Scalars['String'];
  FileSystemId: Scalars['String'];
  FileSystemName: Scalars['String'];
  FileSystemState: Scalars['String'];
  MountTargets: Array<Maybe<MountTarget>>;
  ProjectId?: Maybe<Scalars['Int']>;
  ProtocolType: Scalars['String'];
  ShortId?: Maybe<Scalars['String']>;
  Size?: Maybe<Scalars['Float']>;
  StorageType: Scalars['String'];
  UsedSize?: Maybe<Scalars['Float']>;
  VpcId: Scalars['String'];
  VpcName?: Maybe<Scalars['String']>;
  projectInfo?: Maybe<Project>;
};

export type Filter = {
  Name: Scalars['String'];
  Value: Array<Scalars['String']>;
};

export type FormedInstanceData = {
  __typename?: 'FormedInstanceData';
  FormedInstanceDataArray?: Maybe<Array<InstanceData>>;
  RequestId?: Maybe<Scalars['String']>;
};

/** 查询试用额度 */
export type FreeTrialAndAuth = {
  __typename?: 'FreeTrialAndAuth';
  UserData?: Maybe<UserDataType>;
};

export type FreeTrialWalletData = {
  __typename?: 'FreeTrialWalletData';
  available_credit: Scalars['Float'];
  expire_time?: Maybe<Scalars['String']>;
  id: Scalars['Float'];
  is_active: Scalars['Boolean'];
  status: Scalars['Boolean'];
  total_credit: Scalars['Float'];
  user_email?: Maybe<Scalars['String']>;
  user_id: Scalars['Float'];
};

export type GetAccountProjectList = {
  __typename?: 'GetAccountProjectList';
  ListProjectResult?: Maybe<ListProjectResult>;
  RequestId?: Maybe<Scalars['String']>;
};

export type GetAutoDeleteTime = {
  __typename?: 'GetAutoDeleteTime';
  code: Scalars['Float'];
  time: Scalars['String'];
};

/** 校验云企业网是否有权限需要显示 */
export type GetCenUserPermission = {
  __typename?: 'GetCenUserPermission';
  Allow?: Maybe<Scalars['Boolean']>;
  QuotaMax?: Maybe<Scalars['Boolean']>;
  QuotaRt?: Maybe<Scalars['Boolean']>;
};

/** 查询用户试用金接口 */
export type GetFreeTrialWallet = {
  __typename?: 'GetFreeTrialWallet';
  data?: Maybe<GetFreeTrialWalletData>;
  error?: Maybe<Scalars['String']>;
  request_id?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Float']>;
};

export type GetFreeTrialWalletData = {
  __typename?: 'GetFreeTrialWalletData';
  available_credit?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  is_active?: Maybe<Scalars['Boolean']>;
  total_credit?: Maybe<Scalars['Float']>;
  user_email?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** 获取用户是否有查看堡垒机产品权限 */
export type GetKbhUserPermission = {
  __typename?: 'GetKbhUserPermission';
  Allow?: Maybe<Scalars['Boolean']>;
  QuotaMax?: Maybe<Scalars['Boolean']>;
  QuotaRt?: Maybe<Scalars['Boolean']>;
};

/** 获取高速通道列表 */
export type GetPort = {
  __typename?: 'GetPort';
  Resource: Array<ResourceInfo>;
};

export type GetRegions = {
  __typename?: 'GetRegions';
  data?: Maybe<Array<RegionsSet>>;
};

export type Getlines = {
  __typename?: 'Getlines';
  LineSet?: Maybe<Array<Line>>;
  RequestId?: Maybe<Scalars['String']>;
};

export type GlobalNamespace = {
  __typename?: 'GlobalNamespace';
  AutoInjectSidecar?: Maybe<Scalars['Boolean']>;
  CreationTime?: Maybe<Scalars['String']>;
  GlobalNamespaceId?: Maybe<Scalars['String']>;
  GlobalNamespaceName?: Maybe<Scalars['String']>;
  Labels?: Maybe<Array<Label>>;
  State?: Maybe<Scalars['String']>;
};

/** 全局命名空间开启/关闭自动注入Sidecar */
export type GlobalNamespaceInjectSidecarResponse = {
  __typename?: 'GlobalNamespaceInjectSidecarResponse';
  RequestId?: Maybe<Scalars['String']>;
};

export type GlobalNamespaceName = {
  __typename?: 'GlobalNamespaceName';
  CreationTime?: Maybe<Scalars['String']>;
  GlobalNamespaceId?: Maybe<Scalars['String']>;
  LoadBalancerId?: Maybe<Scalars['String']>;
  LoadBalancerName?: Maybe<Scalars['String']>;
};

/** 获取命名空间列表 */
export type GlobalNamespaceResponse = {
  __typename?: 'GlobalNamespaceResponse';
  GlobalNamespace?: Maybe<Array<GlobalNamespace>>;
  Page?: Maybe<Page>;
};

/** 获取全局Sidecar配置 */
export type GlobalScopeSidecarConfigResponse = {
  __typename?: 'GlobalScopeSidecarConfigResponse';
  SidecarProxyInitResourceLimit?: Maybe<LimitSidecar>;
  SidecarProxyInitResourceRequest?: Maybe<RequestSidecar>;
  SidecarProxyResourceLimit?: Maybe<LimitSidecar>;
  SidecarProxyResourceRequest?: Maybe<RequestSidecar>;
};

export type GpuImageDriver = {
  __typename?: 'GpuImageDriver';
  GpuImageDriverId: Scalars['String'];
  GpuModel?: Maybe<Array<Scalars['String']>>;
  ImageNameSet?: Maybe<Array<Scalars['String']>>;
};

/** 查询GPU镜像驱动 */
export type GpuImageDriverSet = {
  __typename?: 'GpuImageDriverSet';
  GpuImagesDriverSet?: Maybe<Array<GpuImageDriver>>;
};

export type GrayAccountItem = {
  __typename?: 'GrayAccountItem';
  AccountId?: Maybe<Scalars['String']>;
};

export type HbkCreateProductParam4WebList = {
  AccountName?: InputMaybe<Scalars['String']>;
  AllocationId?: InputMaybe<Scalars['String']>;
  Architecture?: InputMaybe<Scalars['String']>;
  AssetNumber?: InputMaybe<Scalars['Float']>;
  AvailableZone?: InputMaybe<Scalars['String']>;
  BillType?: InputMaybe<Scalars['Float']>;
  Duration?: InputMaybe<Scalars['Float']>;
  DurationUnit?: InputMaybe<Scalars['String']>;
  InstanceType?: InputMaybe<Scalars['String']>;
  KbhId?: InputMaybe<Scalars['String']>;
  KbhName?: InputMaybe<Scalars['String']>;
  PrivateIpAddress?: InputMaybe<Scalars['String']>;
  ProductType?: InputMaybe<Scalars['Float']>;
  ProductUse?: InputMaybe<Scalars['Float']>;
  ProductWhat?: InputMaybe<Scalars['Float']>;
  ProjectId?: InputMaybe<Scalars['Float']>;
  StoreSize?: InputMaybe<Scalars['Float']>;
  VnetId?: InputMaybe<Scalars['String']>;
  VpcId?: InputMaybe<Scalars['String']>;
};

export type HbkProductParam4WebList = {
  Architecture?: InputMaybe<Scalars['String']>;
  AssetNumber?: InputMaybe<Scalars['Float']>;
  BillType?: InputMaybe<Scalars['Float']>;
  Duration?: InputMaybe<Scalars['Float']>;
  DurationUnit?: InputMaybe<Scalars['String']>;
  InstanceType?: InputMaybe<Scalars['String']>;
  KbhId?: InputMaybe<Scalars['String']>;
  ProductType?: InputMaybe<Scalars['Float']>;
  ProductUse?: InputMaybe<Scalars['Float']>;
  ProductWhat?: InputMaybe<Scalars['Float']>;
  ProjectId?: InputMaybe<Scalars['Float']>;
  StoreSize?: InputMaybe<Scalars['Float']>;
};

export type HostEpcItem = {
  __typename?: 'HostEpcItem';
  AllowModifyHyperThreading?: Maybe<Scalars['Boolean']>;
  AutoDeleteTime?: Maybe<Scalars['String']>;
  AvailabilityZone?: Maybe<Scalars['String']>;
  BondAttribute?: Maybe<Scalars['String']>;
  CabinetId?: Maybe<Scalars['String']>;
  CabinetName?: Maybe<Scalars['String']>;
  ChargeType?: Maybe<Scalars['String']>;
  CloudMonitorAgent?: Maybe<Scalars['String']>;
  ComputerName?: Maybe<Scalars['String']>;
  ContainerAgent?: Maybe<Scalars['String']>;
  ContractDueTime?: Maybe<Scalars['String']>;
  Cpu?: Maybe<CpuEpcItem>;
  CreateTime?: Maybe<Scalars['String']>;
  DataDiskCatalogue?: Maybe<Scalars['String']>;
  DataDiskCatalogueSuffix?: Maybe<Scalars['String']>;
  DataFileType?: Maybe<Scalars['String']>;
  DataVolumeSet?: Maybe<Array<DataVolumeEpcItem>>;
  DiskSet?: Maybe<Array<DiskEpcItem>>;
  EnableBond?: Maybe<Scalars['Boolean']>;
  EnableContainer?: Maybe<Scalars['Boolean']>;
  EnableVnc?: Maybe<Scalars['Boolean']>;
  Gpu?: Maybe<CpuEpcItem>;
  GpuImageDriverId?: Maybe<Scalars['String']>;
  HostId?: Maybe<Scalars['String']>;
  HostName?: Maybe<Scalars['String']>;
  HostStatus?: Maybe<Scalars['String']>;
  HostType?: Maybe<Scalars['String']>;
  HyperThreading?: Maybe<Scalars['String']>;
  ImageId?: Maybe<Scalars['String']>;
  InstanceType?: Maybe<Scalars['Float']>;
  KeyId?: Maybe<Scalars['String']>;
  Memory?: Maybe<Scalars['String']>;
  NetworkInterfaceAttributeSet?: Maybe<Array<NetworkInterfaceAttributeEpcItem>>;
  NetworkInterfaceMode?: Maybe<Scalars['String']>;
  NvmeDataDiskCatalogue?: Maybe<Scalars['String']>;
  NvmeDataDiskCatalogueSuffix?: Maybe<Scalars['String']>;
  NvmeDataFileType?: Maybe<Scalars['String']>;
  OsName?: Maybe<Scalars['String']>;
  ProductType?: Maybe<Scalars['String']>;
  ProjectId?: Maybe<Scalars['String']>;
  ProjectName?: Maybe<Scalars['String']>;
  RackName?: Maybe<Scalars['String']>;
  Raid?: Maybe<Scalars['String']>;
  RaidTemplateId?: Maybe<Scalars['String']>;
  ReleasableTime?: Maybe<Scalars['String']>;
  Roces?: Maybe<Array<RoceEpcItem>>;
  SecurityAgent?: Maybe<Scalars['String']>;
  ServiceEndTime?: Maybe<Scalars['String']>;
  Sn?: Maybe<Scalars['String']>;
  SupportEbs?: Maybe<Scalars['String']>;
  SystemFileType?: Maybe<Scalars['String']>;
  SystemVolumeSize?: Maybe<Scalars['String']>;
  SystemVolumeType?: Maybe<Scalars['String']>;
  Tags?: Maybe<Array<TagEpcItem>>;
  TorName?: Maybe<Scalars['String']>;
  VpcTrust?: Maybe<Scalars['String']>;
};

export type HostTypeList = {
  __typename?: 'HostTypeList';
  business?: Maybe<Scalars['String']>;
  cpu?: Maybe<Scalars['Float']>;
  hostType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  memory?: Maybe<Scalars['Float']>;
  specification?: Maybe<Scalars['String']>;
};

export type Image = {
  __typename?: 'Image';
  CreateTime?: Maybe<Scalars['String']>;
  DiskType?: Maybe<Scalars['String']>;
  EbsImageSize?: Maybe<Scalars['String']>;
  EnableContainer?: Maybe<Scalars['Boolean']>;
  ExportProgress?: Maybe<Scalars['String']>;
  ExportStatus?: Maybe<Scalars['String']>;
  Format?: Maybe<Scalars['String']>;
  ImageId?: Maybe<Scalars['String']>;
  ImageInitialization?: Maybe<Scalars['String']>;
  ImageName?: Maybe<Scalars['String']>;
  ImageType?: Maybe<Scalars['String']>;
  Name?: Maybe<Scalars['String']>;
  OsName?: Maybe<Scalars['String']>;
  OsType?: Maybe<Scalars['String']>;
  Source: Scalars['String'];
  Status?: Maybe<Scalars['String']>;
};

export type ImageConfig = {
  __typename?: 'ImageConfig';
  images: Array<RestImageList>;
  p_type_config: Array<PTypeConfig>;
};

export type ImageInfo = {
  __typename?: 'ImageInfo';
  ImageSet?: Maybe<Array<Image>>;
  TotalCount?: Maybe<Scalars['Float']>;
};

export type ImageInfoItem = {
  __typename?: 'ImageInfoItem';
  Architecture?: Maybe<Scalars['String']>;
  CloudInitSupport?: Maybe<Scalars['Boolean']>;
  ContainerFormat?: Maybe<Scalars['String']>;
  CreationDate?: Maybe<Scalars['String']>;
  FastBoot?: Maybe<Scalars['Boolean']>;
  HostnameSupport?: Maybe<Scalars['Boolean']>;
  ImageCategory?: Maybe<Scalars['String']>;
  ImageCnName?: Maybe<Scalars['String']>;
  ImageEnName?: Maybe<Scalars['String']>;
  ImageId?: Maybe<Scalars['String']>;
  ImageSource?: Maybe<Scalars['String']>;
  ImageState?: Maybe<Scalars['String']>;
  ImageVersion?: Maybe<Scalars['String']>;
  InstantAccess?: Maybe<Scalars['Boolean']>;
  Ipv6Support?: Maybe<Scalars['Boolean']>;
  IsCloudMarket?: Maybe<Scalars['Boolean']>;
  IsModifyType?: Maybe<Scalars['Boolean']>;
  IsNpe?: Maybe<Scalars['Boolean']>;
  IsPublic?: Maybe<Scalars['Boolean']>;
  LoginKeySupport?: Maybe<Scalars['Boolean']>;
  Name?: Maybe<Scalars['String']>;
  OnlineExpansion?: Maybe<Scalars['Boolean']>;
  PasswordSupport?: Maybe<Scalars['Boolean']>;
  Platform?: Maybe<Scalars['String']>;
  Progress?: Maybe<Scalars['String']>;
  RealImageId?: Maybe<Scalars['String']>;
  SysDisk?: Maybe<Scalars['Float']>;
  Type?: Maybe<Scalars['String']>;
  UserCategory?: Maybe<Scalars['String']>;
  UserDataSupport?: Maybe<Scalars['Boolean']>;
};

export type ImageRegistryCredentialItem = {
  Password: Scalars['String'];
  Server: Scalars['String'];
  Username: Scalars['String'];
};

export type ImagesItem = {
  __typename?: 'ImagesItem';
  CloudInitSupport: Scalars['Boolean'];
  HostnameSupport: Scalars['Boolean'];
  Ipv6Support: Scalars['Boolean'];
  IsModifyType: Scalars['Boolean'];
  LoginKeySupport: Scalars['Boolean'];
  PasswordSupport: Scalars['Boolean'];
  UserDataSupport: Scalars['Boolean'];
  imageEnName: Scalars['String'];
  imageId: Scalars['String'];
  imageName: Scalars['String'];
  imageVersion: Scalars['String'];
};

export type ImagesSet = {
  __typename?: 'ImagesSet';
  Architecture?: Maybe<Scalars['String']>;
  AvailabilityZone?: Maybe<Scalars['String']>;
  CloudInitSupport?: Maybe<Scalars['Boolean']>;
  ContainerFormat?: Maybe<Scalars['String']>;
  CreationDate?: Maybe<Scalars['String']>;
  Description?: Maybe<Scalars['String']>;
  FastBoot?: Maybe<Scalars['Boolean']>;
  HostnameSupport?: Maybe<Scalars['Boolean']>;
  ImageId?: Maybe<Scalars['String']>;
  ImageSource?: Maybe<Scalars['String']>;
  ImageState?: Maybe<Scalars['String']>;
  Ipv6Support?: Maybe<Scalars['Boolean']>;
  IsCloudMarket?: Maybe<Scalars['Boolean']>;
  IsModifyType?: Maybe<Scalars['Boolean']>;
  IsNpe?: Maybe<Scalars['Boolean']>;
  IsPublic?: Maybe<Scalars['Boolean']>;
  LoginKeySupport?: Maybe<Scalars['Boolean']>;
  Name?: Maybe<Scalars['String']>;
  OnlineExpansion?: Maybe<Scalars['Boolean']>;
  PasswordSupport?: Maybe<Scalars['Boolean']>;
  Platform?: Maybe<Scalars['String']>;
  Progress?: Maybe<Scalars['String']>;
  RealImageId?: Maybe<Scalars['String']>;
  SnapshotSet?: Maybe<Array<SnapshotSet>>;
  SysDisk?: Maybe<Scalars['Float']>;
  Type?: Maybe<Scalars['String']>;
  UserCategory?: Maybe<Scalars['String']>;
  UserDataSupport?: Maybe<Scalars['Boolean']>;
};

export type InputMetricsTags = {
  host?: InputMaybe<Scalars['String']>;
  p1?: InputMaybe<Scalars['String']>;
  p2?: InputMaybe<Scalars['String']>;
};

export type InstallInfoItem = {
  __typename?: 'InstallInfoItem';
  EpcHostId?: Maybe<Scalars['String']>;
  ErrorMessage?: Maybe<Scalars['String']>;
};

export type InstanceConfigure = {
  __typename?: 'InstanceConfigure';
  MemoryGb?: Maybe<Scalars['Float']>;
  VCPU?: Maybe<Scalars['Float']>;
};

export type InstanceData = {
  __typename?: 'InstanceData';
  AutoScalingType?: Maybe<Scalars['String']>;
  AvailabilityZone?: Maybe<Scalars['String']>;
  AvailabilityZoneName?: Maybe<Scalars['String']>;
  ChargeType?: Maybe<Scalars['String']>;
  CreationDate?: Maybe<Scalars['String']>;
  CrossMigrateAccess?: Maybe<Scalars['Boolean']>;
  DataDiskPerformanceMode?: Maybe<Scalars['String']>;
  DataDisks?: Maybe<Array<DataDiskItem>>;
  DedicatedUuid?: Maybe<Scalars['String']>;
  EbsCount?: Maybe<Scalars['Float']>;
  EbsTotalSize?: Maybe<Scalars['Float']>;
  FailureAutoDelete?: Maybe<Scalars['Boolean']>;
  HostName?: Maybe<Scalars['String']>;
  IamRoleName?: Maybe<Scalars['String']>;
  ImageId?: Maybe<Scalars['String']>;
  InstanceConfigure?: Maybe<KecInstanceConfigure>;
  InstanceId?: Maybe<Scalars['String']>;
  InstanceName?: Maybe<Scalars['String']>;
  InstanceType?: Maybe<Scalars['String']>;
  IsDistributeIpv6?: Maybe<Scalars['Boolean']>;
  IsRunOptimised?: Maybe<Scalars['Boolean']>;
  IsShowSriovNetSupport?: Maybe<Scalars['Boolean']>;
  LiveUpgradeSupport?: Maybe<Scalars['Boolean']>;
  Migration?: Maybe<Scalars['Float']>;
  OrderInfo?: Maybe<OrderInfo>;
  PrivateIpAddress?: Maybe<Scalars['String']>;
  ProductType?: Maybe<Scalars['Float']>;
  ProductWhat?: Maybe<Scalars['Float']>;
  ProjectId?: Maybe<Scalars['Float']>;
  PurchaseTime?: Maybe<Scalars['Float']>;
  ShutdownNoCharge?: Maybe<Scalars['Boolean']>;
  SpotStrategy?: Maybe<Scalars['String']>;
  SriovNetSupport?: Maybe<Scalars['String']>;
  SubnetId?: Maybe<Scalars['String']>;
  SupportDataGuard?: Maybe<Scalars['Boolean']>;
  SystemDisk?: Maybe<SystemDisk>;
  VncSupport?: Maybe<Scalars['Boolean']>;
  eipInfo?: Maybe<ConfigEipInfo>;
  imageInfo?: Maybe<ImageInfoItem>;
  isAutoDeletable?: Maybe<Scalars['Boolean']>;
  networkInfo?: Maybe<Array<InstanceNetworkInfo>>;
  projectInfo?: Maybe<KecProjectInfo>;
  tagInfo?: Maybe<Array<ModelTag>>;
};

export type InstanceGroup = {
  __typename?: 'InstanceGroup';
  Code?: Maybe<Scalars['String']>;
  Data?: Maybe<Array<InstanceGroupItem>>;
  Error?: Maybe<ErrorData>;
  Limit?: Maybe<Scalars['Float']>;
  Message?: Maybe<Scalars['String']>;
  Offset?: Maybe<Scalars['Float']>;
  RequestId?: Maybe<Scalars['String']>;
  Total?: Maybe<Scalars['Float']>;
};

export type InstanceGroupCountData = {
  __typename?: 'InstanceGroupCountData';
  Count: Scalars['Float'];
  Value: Scalars['String'];
};

export type InstanceGroupItem = {
  __typename?: 'InstanceGroupItem';
  Addresses?: Maybe<Array<AddressesItem>>;
  Az?: Maybe<Scalars['String']>;
  AzName?: Maybe<Scalars['String']>;
  BillType?: Maybe<Scalars['Float']>;
  ClientIp?: Maybe<Scalars['String']>;
  ClientPort?: Maybe<Scalars['Float']>;
  CreateDate?: Maybe<Scalars['String']>;
  EndTime?: Maybe<Scalars['String']>;
  Engine?: Maybe<Scalars['String']>;
  InstanceId?: Maybe<Scalars['String']>;
  InstanceName?: Maybe<Scalars['String']>;
  ProductType?: Maybe<Scalars['Float']>;
  ProductTypeName?: Maybe<Scalars['String']>;
  ProjectName?: Maybe<Scalars['String']>;
  Region?: Maybe<Scalars['String']>;
  Resources?: Maybe<ResourcesItem>;
  ServiceEndTime?: Maybe<Scalars['String']>;
  State?: Maybe<Scalars['String']>;
  StateName?: Maybe<Scalars['String']>;
  SubnetId?: Maybe<Scalars['String']>;
  VpcId?: Maybe<Scalars['String']>;
  Zones?: Maybe<Array<Scalars['String']>>;
};

export type InstanceNetworkInfo = {
  __typename?: 'InstanceNetworkInfo';
  AvailabilityZoneName?: Maybe<Scalars['String']>;
  CreateTime?: Maybe<Scalars['String']>;
  DNS1?: Maybe<Scalars['String']>;
  DNS2?: Maybe<Scalars['String']>;
  InstanceId?: Maybe<Scalars['String']>;
  InstanceType?: Maybe<Scalars['String']>;
  Ipv6Public?: Maybe<Scalars['Boolean']>;
  MacAddress?: Maybe<Scalars['String']>;
  NetworkInterfaceId?: Maybe<Scalars['String']>;
  NetworkInterfaceName?: Maybe<Scalars['String']>;
  NetworkInterfaceType?: Maybe<Scalars['String']>;
  PrivateIpAddress?: Maybe<Scalars['String']>;
  ProductTag?: Maybe<Scalars['String']>;
  SecurityGroupId?: Maybe<Scalars['String']>;
  SecurityGroupName?: Maybe<Scalars['String']>;
  SecurityGroupSet?: Maybe<Array<SecurityGroupKec>>;
  State?: Maybe<Scalars['String']>;
  SubnetId?: Maybe<Scalars['String']>;
  SubnetName?: Maybe<Scalars['String']>;
  UserTag?: Maybe<Scalars['String']>;
  VpcId?: Maybe<Scalars['String']>;
  VpcName?: Maybe<Scalars['String']>;
};

export type InstancesResult = {
  __typename?: 'InstancesResult';
  FormedInstanceDataArray?: Maybe<Array<InstancesSet>>;
  code?: Maybe<Scalars['Float']>;
};

export type InstancesSet = {
  __typename?: 'InstancesSet';
  AvailabilityZone?: Maybe<Scalars['String']>;
  AvailabilityZoneName?: Maybe<Scalars['String']>;
  ChargeType?: Maybe<Scalars['String']>;
  CreationDate?: Maybe<Scalars['String']>;
  InstanceConfigure?: Maybe<InstanceConfigure>;
  InstanceId?: Maybe<Scalars['String']>;
  InstanceName?: Maybe<Scalars['String']>;
  InstanceState?: Maybe<ModelInstanceStateTypes>;
  InstanceType?: Maybe<Scalars['String']>;
  ModelConfiguration?: Maybe<ModelConfigurationList>;
  ProductType?: Maybe<Scalars['Float']>;
  ProjectId?: Maybe<Scalars['Float']>;
  eipInfo?: Maybe<EipInfo>;
  imageInfo?: Maybe<LangChainimageInfo>;
  networkInfo?: Maybe<Array<NetworkInfo>>;
};

export type InterAreaSet = {
  __typename?: 'InterAreaSet';
  InterAreaId?: Maybe<Scalars['String']>;
  InterAreaName?: Maybe<Scalars['String']>;
};

export type InterRegionSet = {
  __typename?: 'InterRegionSet';
  InterAreaId?: Maybe<Scalars['String']>;
  InterRegionId?: Maybe<Scalars['String']>;
  InterRegionName?: Maybe<Scalars['String']>;
};

export type IpHostPair = {
  Hostname: Scalars['String'];
  Ip: Scalars['String'];
};

export type Ipv6CidrBlockAssociation = {
  __typename?: 'Ipv6CidrBlockAssociation';
  Ipv6CidrBlock: Scalars['String'];
};

export type Ipv6CidrBlockAssociationSet = {
  __typename?: 'Ipv6CidrBlockAssociationSet';
  Ipv6CidrBlock: Scalars['String'];
};

export type IsKa = {
  __typename?: 'IsKa';
  status?: Maybe<Scalars['String']>;
  user?: Maybe<Scalars['String']>;
};

export type IstioGatewayInfo = {
  __typename?: 'IstioGatewayInfo';
  ClusterId?: Maybe<Scalars['Boolean']>;
  ClusterName?: Maybe<Scalars['Boolean']>;
  IstioGatewayId?: Maybe<Scalars['String']>;
  IstioGatewayName?: Maybe<Scalars['String']>;
  IstioGatewayType?: Maybe<Scalars['String']>;
};

export type JobSatatusItem = {
  __typename?: 'JobSatatusItem';
  Count: Scalars['Float'];
  Date: Scalars['String'];
  Status: Scalars['Float'];
};

export type KbhAzList = {
  __typename?: 'KbhAzList';
  azCode: Scalars['String'];
  azName: Scalars['String'];
  enName: Scalars['String'];
};

export type KbhBatchCalculateProduct = {
  __typename?: 'KbhBatchCalculateProduct';
  Price?: Maybe<Scalars['Float']>;
  Promotions?: Maybe<Array<Promotions>>;
};

export type KbhBatchCreateProduct = {
  __typename?: 'KbhBatchCreateProduct';
  data?: Maybe<Array<KbhCreateBatchData>>;
};

export type KbhBillTypeList = {
  __typename?: 'KbhBillTypeList';
  billTypeEnName?: Maybe<Scalars['String']>;
  billTypeId: Scalars['Float'];
  billTypeName?: Maybe<Scalars['String']>;
  ruleMatched?: Maybe<Scalars['String']>;
};

export type KbhCreateBatchData = {
  __typename?: 'KbhCreateBatchData';
  ProductId?: Maybe<Scalars['String']>;
};

/** 云堡垒机可用区产品数量 */
export type KbhDescribeProductSellOuts = {
  __typename?: 'KbhDescribeProductSellOuts';
  data: Array<DescribeProductSellOutsData>;
};

/** 获取已分配IP地址 */
export type KbhDescribeSubnetAllocatedIp = {
  __typename?: 'KbhDescribeSubnetAllocatedIp';
  AvailableIpAddress: Array<Scalars['String']>;
  RequestId: Scalars['String'];
};

export type KbhDetailInfo = {
  __typename?: 'KbhDetailInfo';
  AccountName?: Maybe<Scalars['String']>;
  Architecture?: Maybe<Scalars['Float']>;
  ArchitectureName?: Maybe<Scalars['String']>;
  AssetNumber?: Maybe<Scalars['Float']>;
  AvailableZoneName?: Maybe<Scalars['String']>;
  BillType?: Maybe<Scalars['Float']>;
  BillTypeName?: Maybe<Scalars['String']>;
  ConsoleStatus?: Maybe<Scalars['Float']>;
  CreatedAt?: Maybe<Scalars['String']>;
  Duration?: Maybe<Scalars['String']>;
  EipId?: Maybe<Scalars['String']>;
  InstanceId?: Maybe<Scalars['String']>;
  Name?: Maybe<Scalars['String']>;
  PrivateIp?: Maybe<Scalars['String']>;
  ProjectId?: Maybe<Scalars['String']>;
  ProjectName?: Maybe<Scalars['String']>;
  PublicIp?: Maybe<Scalars['String']>;
  PublicLink?: Maybe<Scalars['String']>;
  ServiceEndTime?: Maybe<Scalars['String']>;
  StoreSize?: Maybe<Scalars['Float']>;
  VnetCidr?: Maybe<Scalars['String']>;
  VnetId?: Maybe<Scalars['String']>;
  VnetName?: Maybe<Scalars['String']>;
  VpcCidr?: Maybe<Scalars['String']>;
  VpcId?: Maybe<Scalars['String']>;
  VpcName?: Maybe<Scalars['String']>;
};

export type KbhInfo = {
  __typename?: 'KbhInfo';
  Architecture?: Maybe<Scalars['String']>;
  ArchitectureName?: Maybe<Scalars['String']>;
  AssetNumber?: Maybe<Scalars['Float']>;
  BillType?: Maybe<Scalars['Float']>;
  BillTypeName?: Maybe<Scalars['String']>;
  ConsoleStatus?: Maybe<Scalars['Float']>;
  Duration?: Maybe<Scalars['Float']>;
  EipId?: Maybe<Scalars['String']>;
  InstanceId: Scalars['String'];
  Name?: Maybe<Scalars['String']>;
  Price?: Maybe<Scalars['Float']>;
  PrivateIP?: Maybe<Scalars['String']>;
  ProjectId?: Maybe<Scalars['String']>;
  ProjectName?: Maybe<Scalars['String']>;
  PublicIP?: Maybe<Scalars['String']>;
  PublicLink?: Maybe<Scalars['String']>;
  ServiceEndTime?: Maybe<Scalars['String']>;
  ServiceId?: Maybe<Scalars['String']>;
  StoreSize?: Maybe<Scalars['Float']>;
};

export type KbhPackageInfo = {
  __typename?: 'KbhPackageInfo';
  measureUnitEnName?: Maybe<Scalars['String']>;
  measureUnitName?: Maybe<Scalars['String']>;
  propCode: Scalars['String'];
  propEnName?: Maybe<Scalars['String']>;
  propName?: Maybe<Scalars['String']>;
  propValue?: Maybe<Array<KbhPropValueUnion>>;
  propValueType?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['String']>;
};

export type KbhPackageList = {
  __typename?: 'KbhPackageList';
  packageCode: Scalars['String'];
  packageEnName?: Maybe<Scalars['String']>;
  packageInfo?: Maybe<Array<KbhPackageInfo>>;
  packageName?: Maybe<Scalars['String']>;
  packageType?: Maybe<Scalars['Float']>;
  refBillTypeList?: Maybe<Array<KbhBillTypeList>>;
  refRegionList?: Maybe<Array<KbhRegionList>>;
  status?: Maybe<Scalars['Float']>;
};

export type KbhProductTypeList = {
  __typename?: 'KbhProductTypeList';
  billTypeList?: Maybe<Array<KbhBillTypeList>>;
  packageList?: Maybe<Array<KbhPackageList>>;
  postStatus?: Maybe<Scalars['String']>;
  productTypeCode?: Maybe<Scalars['String']>;
  productTypeEnName?: Maybe<Scalars['String']>;
  productTypeId: Scalars['Float'];
  productTypeName?: Maybe<Scalars['String']>;
  propertyList?: Maybe<Array<KbhPackageInfo>>;
  regionList?: Maybe<Array<KbhRegionList>>;
  status?: Maybe<Scalars['String']>;
};

export type KbhPropValueNormal = {
  __typename?: 'KbhPropValueNormal';
  defaultVal?: Maybe<Scalars['Boolean']>;
  enName?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type KbhPropValueStep = {
  __typename?: 'KbhPropValueStep';
  max: Scalars['Float'];
  min: Scalars['Float'];
  step: Scalars['Float'];
};

export type KbhPropValueUnion = KbhPropValueNormal | KbhPropValueStep;

export type KbhQueryPriceSystemData = {
  __typename?: 'KbhQueryPriceSystemData';
  productClubId?: Maybe<Scalars['Float']>;
  productGroupCode?: Maybe<Scalars['String']>;
  productGroupEnFullName?: Maybe<Scalars['String']>;
  productGroupEnName?: Maybe<Scalars['String']>;
  productGroupId: Scalars['Float'];
  productGroupName?: Maybe<Scalars['String']>;
  productTypeList?: Maybe<Array<KbhProductTypeList>>;
};

/** 查询可用IP数量 */
export type KbhQuerySubnetAvailableIpCount = {
  __typename?: 'KbhQuerySubnetAvailableIpCount';
  count: Scalars['Float'];
};

export type KbhRegionList = {
  __typename?: 'KbhRegionList';
  active?: Maybe<Scalars['Boolean']>;
  areaCode?: Maybe<Scalars['String']>;
  areaEnName?: Maybe<Scalars['String']>;
  areaName?: Maybe<Scalars['String']>;
  azList?: Maybe<Array<KbhAzList>>;
  finance?: Maybe<Scalars['Boolean']>;
  industryLabel?: Maybe<Scalars['String']>;
  innerCode?: Maybe<Scalars['String']>;
  overseas?: Maybe<Scalars['Boolean']>;
  regionCode?: Maybe<Scalars['String']>;
  regionEnName?: Maybe<Scalars['String']>;
  regionId: Scalars['Float'];
  regionName?: Maybe<Scalars['String']>;
  regionType?: Maybe<Scalars['Float']>;
};

export type KbhReturnError = {
  __typename?: 'KbhReturnError';
  Code?: Maybe<Scalars['String']>;
  Message?: Maybe<Scalars['String']>;
  Type?: Maybe<Scalars['String']>;
};

export type KciAz = {
  __typename?: 'KciAZ';
  azCode: Scalars['String'];
  azName: Scalars['String'];
  enName: Scalars['String'];
};

export type KciBillType = {
  __typename?: 'KciBillType';
  billTypeEnName: Scalars['String'];
  billTypeId: Scalars['Float'];
  billTypeName: Scalars['String'];
};

export type KciCalculateProductResParams = {
  __typename?: 'KciCalculateProductResParams';
  Currency: Scalars['String'];
  Price: Scalars['String'];
  ProductGroup: Scalars['Float'];
};

export type KciPackage = {
  __typename?: 'KciPackage';
  packageCode: Scalars['String'];
  packageEnName: Scalars['String'];
  packageInfo: Array<KciPackageInfo>;
  packageName: Scalars['String'];
  packageType: Scalars['Float'];
  refBillTypeList: Array<KciBillType>;
  refRegionList: Array<KciRegion>;
};

export type KciPackageInfo = {
  __typename?: 'KciPackageInfo';
  propCode: Scalars['String'];
  propName: Scalars['String'];
  propValue?: Maybe<Array<KciPropValueUnion>>;
  propValueType: Scalars['Float'];
  type: Scalars['Float'];
};

export type KciPackageItem = {
  __typename?: 'KciPackageItem';
  Cpu: Scalars['Float'];
  Mem: Array<Scalars['Float']>;
};

export type KciProductType = {
  __typename?: 'KciProductType';
  billTypeList: Array<KciBillType>;
  packageList: Array<KciPackage>;
  productTypeCode: Scalars['String'];
  productTypeEnName: Scalars['String'];
  productTypeId: Scalars['Float'];
  productTypeName: Scalars['String'];
  regionList: Array<KciRegion>;
};

export type KciProjectItem = {
  __typename?: 'KciProjectItem';
  AccountId?: Maybe<Scalars['String']>;
  CreateTime?: Maybe<Scalars['String']>;
  Krn?: Maybe<Scalars['String']>;
  ProjectId: Scalars['Float'];
  ProjectName: Scalars['String'];
  Status?: Maybe<Scalars['Float']>;
};

export type KciPropValueNormal = {
  __typename?: 'KciPropValueNormal';
  defaultVal: Scalars['Boolean'];
  enName: Scalars['String'];
  name: Scalars['String'];
  value: Scalars['String'];
};

export type KciPropValueStep = {
  __typename?: 'KciPropValueStep';
  max: Scalars['Float'];
  min: Scalars['Float'];
  step: Scalars['Float'];
};

export type KciPropValueUnion = KciPropValueNormal | KciPropValueStep;

export type KciQuotaItem = {
  __typename?: 'KciQuotaItem';
  Current: Scalars['Float'];
  Desc: Scalars['String'];
  Max: Scalars['Float'];
  Name: Scalars['String'];
};

export type KciRegion = {
  __typename?: 'KciRegion';
  active: Scalars['Boolean'];
  areaCode: Scalars['String'];
  areaEnName: Scalars['String'];
  areaName: Scalars['String'];
  azList: Array<KciAz>;
  innerCode: Scalars['String'];
  regionCode: Scalars['String'];
  regionEnName: Scalars['String'];
  regionName: Scalars['String'];
  regionType: Scalars['Float'];
};

export type KciSubnet = {
  __typename?: 'KciSubnet';
  AvailabilityZoneName: Scalars['String'];
  CidrBlock?: Maybe<Scalars['String']>;
  CreateTime?: Maybe<Scalars['String']>;
  NatId?: Maybe<Scalars['Boolean']>;
  SubnetId: Scalars['String'];
  SubnetName: Scalars['String'];
  SubnetType: Scalars['String'];
  VpcId: Scalars['String'];
};

export type KciVpc = {
  __typename?: 'KciVpc';
  CidrBlock?: Maybe<Scalars['String']>;
  CreateTime?: Maybe<Scalars['String']>;
  VpcId?: Maybe<Scalars['String']>;
  VpcName?: Maybe<Scalars['String']>;
};

export type KeadParam = {
  billTypes?: InputMaybe<Array<Scalars['Float']>>;
  bwsId?: InputMaybe<Scalars['String']>;
  duration?: InputMaybe<Scalars['Float']>;
  instanceId?: InputMaybe<Scalars['String']>;
  instanceType?: InputMaybe<Scalars['String']>;
  isp?: InputMaybe<Scalars['String']>;
  keadBandWidth?: InputMaybe<Scalars['Float']>;
  keadDDos?: InputMaybe<Scalars['Float']>;
  keadIpNumber?: InputMaybe<Scalars['Float']>;
  keadIpVersion?: InputMaybe<Scalars['String']>;
  keadMaxBandWidth?: InputMaybe<Scalars['Float']>;
  keadName?: InputMaybe<Scalars['String']>;
  link?: InputMaybe<Scalars['String']>;
  originalKeadIpNumber?: InputMaybe<Scalars['Float']>;
  productType?: InputMaybe<Scalars['Float']>;
  productUse?: InputMaybe<Scalars['Float']>;
  productWhat?: InputMaybe<Scalars['Float']>;
  projectId?: InputMaybe<Scalars['Float']>;
  purchaseTime?: InputMaybe<Scalars['Float']>;
  serviceTime?: InputMaybe<Scalars['Float']>;
};

/** 批量询价接口 */
export type KecBatchCalculateKvmPrice = {
  __typename?: 'KecBatchCalculateKVMPrice';
  CalculatePriceSet?: Maybe<Array<KecCalculatePriceSet>>;
  code: Scalars['Float'];
  msg: Scalars['String'];
};

export type KecCalculatePriceSet = {
  __typename?: 'KecCalculatePriceSet';
  message: KecPriceMessage;
  no: Scalars['Float'];
};

export type KecInstanceConfigure = {
  __typename?: 'KecInstanceConfigure';
  DataDiskGb?: Maybe<Scalars['Float']>;
  DataDiskType?: Maybe<Scalars['String']>;
  GPU?: Maybe<Scalars['Float']>;
  MemoryGb?: Maybe<Scalars['Float']>;
  RootDiskGb?: Maybe<Scalars['Float']>;
  VCPU?: Maybe<Scalars['Float']>;
  VGPU?: Maybe<Scalars['String']>;
};

/** 创建主机，价格体系接口 */
export type KecKvmList = {
  __typename?: 'KecKvmList';
  RootSizeQuota: Array<RegionQuota>;
  azList?: Maybe<Array<KvmListAz>>;
  billTypeList?: Maybe<Array<KvmListBillType>>;
  code: Scalars['String'];
  data: KvmListData;
  ebsPackage?: Maybe<Array<KvmListProductType>>;
  regionList?: Maybe<Array<KvmListRegion>>;
  sellOutData?: Maybe<Array<KvmListSellOut>>;
};

export type KecModel = {
  __typename?: 'KecModel';
  AddressBandWidth?: Maybe<Scalars['Float']>;
  AddressChargeType?: Maybe<Scalars['String']>;
  AddressProjectId?: Maybe<Scalars['Float']>;
  AddressPurchaseTime?: Maybe<Scalars['Float']>;
  AvailabilityZone?: Maybe<Scalars['String']>;
  AvailabilityZoneName?: Maybe<Scalars['String']>;
  BandWidthShareId?: Maybe<Scalars['String']>;
  ChargeType?: Maybe<Scalars['String']>;
  CreateTime?: Maybe<Scalars['String']>;
  DataDiskGb?: Maybe<Scalars['Float']>;
  DataDiskPerformanceMode?: Maybe<Scalars['String']>;
  DataDiskSet?: Maybe<Array<DataDisk>>;
  DataGuardId?: Maybe<Scalars['String']>;
  FailureAutoDelete?: Maybe<Scalars['Boolean']>;
  HostName?: Maybe<Scalars['String']>;
  IamRoleName?: Maybe<Scalars['String']>;
  ImageId?: Maybe<Scalars['String']>;
  InstanceConfigure?: Maybe<KecInstanceConfigure>;
  InstanceName?: Maybe<Scalars['String']>;
  InstanceType?: Maybe<Scalars['String']>;
  IsDistributeIpv6?: Maybe<Scalars['Boolean']>;
  KeepImageLogin?: Maybe<Scalars['Boolean']>;
  KeyId?: Maybe<Scalars['String']>;
  LatestVersionNumber?: Maybe<Scalars['Float']>;
  LocalVolumeSnapshotId?: Maybe<Scalars['String']>;
  LocalVolumeSnapshotName?: Maybe<Scalars['String']>;
  ModelId?: Maybe<Scalars['String']>;
  ModelName?: Maybe<Scalars['String']>;
  ModifiedTime?: Maybe<Scalars['String']>;
  NetworkInterfaceSet?: Maybe<Scalars['String']>;
  OrderInfo?: Maybe<OrderInfo>;
  ProjectId?: Maybe<Scalars['Float']>;
  PurchaseTime?: Maybe<Scalars['Float']>;
  SecurityGroupId?: Maybe<Scalars['String']>;
  SriovNetSupport?: Maybe<Scalars['Boolean']>;
  SubnetId?: Maybe<Scalars['String']>;
  SystemDisk?: Maybe<SystemDisk>;
  TagSet?: Maybe<Array<ModelTag>>;
  UserData?: Maybe<Scalars['String']>;
  dataGuardInfo?: Maybe<DataGuardInfo>;
  imageInfo?: Maybe<ImageInfoItem>;
  lineInfo?: Maybe<LineInfo>;
  projectInfo?: Maybe<KecProjectInfo>;
  securityGroupInfo?: Maybe<SecurityGroupKec>;
  securityGroupInfos?: Maybe<Array<SecurityGroupKec>>;
  subnetInfo?: Maybe<SubnetKec>;
};

export type KecPriceDetails = {
  __typename?: 'KecPriceDetails';
  discount: Scalars['Float'];
  discountedPrice: Scalars['Float'];
  originalPrice: Scalars['Float'];
};

export type KecPriceMessage = {
  __typename?: 'KecPriceMessage';
  RunCount: Scalars['Float'];
  code: Scalars['Float'];
  ebsPriceDetails: KecPriceDetails;
  kvmPrice?: Maybe<Scalars['Float']>;
  kvmPriceDetails?: Maybe<KecPriceDetails>;
  kvmSpotCpuMemMarketPrice?: Maybe<Scalars['Float']>;
  kvmSpotCpuMemOriginPrice?: Maybe<Scalars['Float']>;
  kvmSpotPrice?: Maybe<Scalars['Float']>;
  marketPrice?: Maybe<Scalars['Float']>;
  marketPriceDetails?: Maybe<KecPriceDetails>;
  msg: Scalars['String'];
  price: Scalars['Float'];
  totalPriceDetails: KecPriceDetails;
};

export type KecProjectInfo = {
  __typename?: 'KecProjectInfo';
  AccountId?: Maybe<Scalars['String']>;
  Krn?: Maybe<Scalars['String']>;
  ProjectDesc?: Maybe<Scalars['String']>;
  ProjectId?: Maybe<Scalars['Float']>;
  ProjectName?: Maybe<Scalars['String']>;
  Status?: Maybe<Scalars['Float']>;
};

export type KeyEncryption = {
  __typename?: 'KeyEncryption';
  keyEncryptionInfo?: Maybe<Array<KeyEncryptionItem>>;
};

export type KeyEncryptionItem = {
  __typename?: 'KeyEncryptionItem';
  keyId: Scalars['String'];
  value: Scalars['Boolean'];
};

export type KeyItem = {
  __typename?: 'KeyItem';
  CreateTime?: Maybe<Scalars['String']>;
  IsChecked: Scalars['Boolean'];
  KeyId: Scalars['String'];
  KeyName: Scalars['String'];
  PublicKey: Scalars['String'];
};

export type KeySet = {
  __typename?: 'KeySet';
  KeySet?: Maybe<Array<KeyItem>>;
};

export type KfsAmountAndCapacity = {
  __typename?: 'KfsAmountAndCapacity';
  allUsedSize: Scalars['Int'];
  fileSystemIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  region: KfsSimpleRegion;
};

export type KfsSimpleRegion = {
  __typename?: 'KfsSimpleRegion';
  azList: Array<Maybe<Zone>>;
  innerCode: Scalars['String'];
  regionCode: Scalars['String'];
  regionName: Scalars['String'];
  regionType?: Maybe<Scalars['Float']>;
};

/** 获取监控指标数据 */
export type KisDescribeMetricsData = {
  __typename?: 'KisDescribeMetricsData';
  code?: Maybe<Scalars['String']>;
  data?: Maybe<Array<SampleObject>>;
  message?: Maybe<Scalars['String']>;
  requestId?: Maybe<Scalars['String']>;
};

/** 获取监控面板详情 */
export type KisDescribeScreen = {
  __typename?: 'KisDescribeScreen';
  code?: Maybe<Scalars['String']>;
  data?: Maybe<DescribeScreenKisObj>;
  message?: Maybe<Scalars['String']>;
  requestId?: Maybe<Scalars['String']>;
};

/** 查询巡检故障列表 */
export type KisDeviceFault = {
  __typename?: 'KisDeviceFault';
  Data: Array<KisDeviceFaultItem>;
  Limit: Scalars['Float'];
  Offset: Scalars['Float'];
  Total: Scalars['Float'];
};

export type KisDeviceFaultItem = {
  __typename?: 'KisDeviceFaultItem';
  Col?: Maybe<Scalars['String']>;
  CreateTime: Scalars['String'];
  Desc: Scalars['String'];
  DiscoverDate?: Maybe<Scalars['String']>;
  DiscoverPeople: Scalars['String'];
  Id: Scalars['String'];
  Idc: Scalars['String'];
  IdcName: Scalars['String'];
  Ilo?: Maybe<Scalars['String']>;
  InspecDate?: Maybe<Scalars['String']>;
  Manufacturer: Scalars['String'];
  Model: Scalars['String'];
  OriIdc: Scalars['String'];
  OriRack?: Maybe<Scalars['String']>;
  People: Scalars['String'];
  Rack?: Maybe<Scalars['String']>;
  Reason: Scalars['String'];
  Sn: Scalars['String'];
  Status: Scalars['String'];
  StatusId: Scalars['String'];
  Type: Scalars['String'];
  UpdateTime: Scalars['String'];
};

export type KisGetAccountAllProjectList = {
  __typename?: 'KisGetAccountAllProjectList';
  ListProjectResult?: Maybe<KisListProjectResult>;
};

/** 查询现场支持工单列表 */
export type KisGetJobs = {
  __typename?: 'KisGetJobs';
  Jobs: Array<KisJobItem>;
};

export type KisJobItem = {
  __typename?: 'KisJobItem';
  CreatedAt: Scalars['String'];
  Idc: Scalars['String'];
  JobId: Scalars['String'];
  JobType: Scalars['String'];
  Message: Scalars['String'];
  NocCaseId: Scalars['String'];
  Person?: Maybe<Scalars['String']>;
  Phone?: Maybe<Scalars['String']>;
  Region: Scalars['String'];
  Remark?: Maybe<Scalars['String']>;
  Status: Scalars['String'];
};

export type KisListProjectResult = {
  __typename?: 'KisListProjectResult';
  ProjectList?: Maybe<Array<KisProjectLists>>;
  Total?: Maybe<Scalars['Float']>;
};

export type KisProjectLists = {
  __typename?: 'KisProjectLists';
  ProjectDesc?: Maybe<Scalars['String']>;
  ProjectId?: Maybe<Scalars['Float']>;
  ProjectName?: Maybe<Scalars['String']>;
  Status?: Maybe<Scalars['Float']>;
};

export type KisRegionItem = {
  __typename?: 'KisRegionItem';
  key: Scalars['String'];
  title: Scalars['String'];
};

export type KisRegions = {
  __typename?: 'KisRegions';
  Regions?: Maybe<Array<KisRegionItem>>;
};

export type Ks3 = {
  __typename?: 'Ks3';
  compatible_host?: Maybe<Scalars['String']>;
  compatible_inner_host?: Maybe<Scalars['String']>;
  host?: Maybe<Scalars['String']>;
  inner_host?: Maybe<Scalars['String']>;
  ks3_region?: Maybe<Scalars['String']>;
};

/** 创建主机，价格体系接口 */
export type KvmList = {
  __typename?: 'KvmList';
  RootSizeQuota: Array<RegionQuota>;
  code: Scalars['String'];
  data: KvmListData;
  sellOutData?: Maybe<Array<KvmListSellOut>>;
};

export type KvmListAz = {
  __typename?: 'KvmListAZ';
  azCode: Scalars['String'];
  azName: Scalars['String'];
};

export type KvmListBillType = {
  __typename?: 'KvmListBillType';
  billTypeEnName: Scalars['String'];
  billTypeId: Scalars['Float'];
  billTypeName: Scalars['String'];
};

export type KvmListData = {
  __typename?: 'KvmListData';
  productGroupCode: Scalars['String'];
  productGroupId: Scalars['Float'];
  productGroupName: Scalars['String'];
  productTypeList: Array<KvmListProductType>;
};

export type KvmListPackage = {
  __typename?: 'KvmListPackage';
  packageCode: Scalars['String'];
  packageInfo: Array<KvmListPropertyOrPackage>;
  packageName: Scalars['String'];
  packageType: Scalars['Float'];
  refBillTypeList: Array<KvmListBillType>;
  refRegionList: Array<KvmListRegion>;
};

export type KvmListPackageSellOut = {
  __typename?: 'KvmListPackageSellOut';
  AvailableVmNum: Scalars['Float'];
  PackageCode: Scalars['String'];
  SellOutStatus: Scalars['Boolean'];
  Spec: Scalars['String'];
  Status: Scalars['String'];
};

export type KvmListProductType = {
  __typename?: 'KvmListProductType';
  billTypeList: Array<KvmListBillType>;
  packageList: Array<KvmListPackage>;
  productTypeCode: Scalars['String'];
  productTypeEnName: Scalars['String'];
  productTypeId: Scalars['Float'];
  productTypeName: Scalars['String'];
  propertyList: Array<KvmListPropertyOrPackage>;
  regionList: Array<KvmListRegion>;
  systemDisks: KvmListSystemDisks;
};

export type KvmListPropValueNormal = {
  __typename?: 'KvmListPropValueNormal';
  defaultVal: Scalars['Boolean'];
  enName: Scalars['String'];
  name: Scalars['String'];
  value: Scalars['String'];
};

export type KvmListPropValueStep = {
  __typename?: 'KvmListPropValueStep';
  max: Scalars['Float'];
  min: Scalars['Float'];
  step: Scalars['Float'];
};

export type KvmListPropertyOrPackage = {
  __typename?: 'KvmListPropertyOrPackage';
  propCode: Scalars['String'];
  propName?: Maybe<Scalars['String']>;
  propValue: Array<PropValueUnion>;
  propValueType?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
};

export type KvmListRegion = {
  __typename?: 'KvmListRegion';
  areaCode: Scalars['String'];
  areaEnName: Scalars['String'];
  areaName: Scalars['String'];
  azList: Array<KvmListAz>;
  innerCode: Scalars['String'];
  regionCode: Scalars['String'];
  regionEnName: Scalars['String'];
  regionName: Scalars['String'];
};

export type KvmListSellOut = {
  __typename?: 'KvmListSellOut';
  AllSellOutStatus?: Maybe<Scalars['Boolean']>;
  AvailabilityZone: Scalars['String'];
  Extra?: Maybe<Scalars['String']>;
  PackageSellOuts?: Maybe<Array<KvmListPackageSellOut>>;
  ProductCode: Scalars['String'];
  ProductName: Scalars['String'];
  ProductType: Scalars['Float'];
  SellOutStatus: Scalars['Boolean'];
  ShouldExpand: Scalars['Boolean'];
};

export type KvmListSystemDisks = {
  __typename?: 'KvmListSystemDisks';
  id?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
};

export type KvmParam = {
  allocateAddress?: InputMaybe<Scalars['Boolean']>;
  architecture?: InputMaybe<Scalars['String']>;
  availabilityZone?: InputMaybe<Scalars['String']>;
  bigModel?: InputMaybe<Scalars['String']>;
  billType?: InputMaybe<Scalars['Float']>;
  count?: InputMaybe<Scalars['Float']>;
  cpu?: InputMaybe<Scalars['Float']>;
  dataDiskPerformanceMode?: InputMaybe<Scalars['String']>;
  deploymentMode?: InputMaybe<Scalars['String']>;
  display?: InputMaybe<Scalars['String']>;
  duration?: InputMaybe<Scalars['String']>;
  durationUnit?: InputMaybe<Scalars['String']>;
  embedding?: InputMaybe<Scalars['String']>;
  extra?: InputMaybe<Scalars['String']>;
  gpu?: InputMaybe<Scalars['Float']>;
  hdd?: InputMaybe<Scalars['Float']>;
  hostName?: InputMaybe<Scalars['String']>;
  iamRoleName?: InputMaybe<Scalars['String']>;
  instanceName?: InputMaybe<Scalars['String']>;
  instancePassword?: InputMaybe<Scalars['String']>;
  instanceType?: InputMaybe<Scalars['String']>;
  isDistributeIpv6?: InputMaybe<Scalars['Boolean']>;
  keepImageLogin?: InputMaybe<Scalars['Boolean']>;
  keyIds?: InputMaybe<Array<Scalars['String']>>;
  localVolumeSnapshotId?: InputMaybe<Scalars['String']>;
  localVolumeSnapshotName?: InputMaybe<Scalars['String']>;
  mem?: InputMaybe<Scalars['Float']>;
  milvus?: InputMaybe<Scalars['String']>;
  modelName?: InputMaybe<Scalars['String']>;
  monitorFlag?: InputMaybe<Scalars['Float']>;
  netWorkList?: InputMaybe<Array<NetworkItem>>;
  ops?: InputMaybe<Scalars['String']>;
  opstype?: InputMaybe<Scalars['Float']>;
  priceMethod?: InputMaybe<Scalars['Float']>;
  privateIpAddress?: InputMaybe<Scalars['String']>;
  productType?: InputMaybe<Scalars['Float']>;
  productWhat?: InputMaybe<Scalars['Float']>;
  projectId?: InputMaybe<Scalars['Float']>;
  rootDisk?: InputMaybe<Scalars['Float']>;
  securityGroupIds?: InputMaybe<Array<Scalars['String']>>;
  spotPriceLimit?: InputMaybe<Scalars['Float']>;
  spotStrategy?: InputMaybe<Scalars['Float']>;
  sriovNetSupport?: InputMaybe<Scalars['Boolean']>;
  ssd?: InputMaybe<Scalars['Float']>;
  subnetId?: InputMaybe<Scalars['String']>;
  systemDiskType?: InputMaybe<Scalars['String']>;
  tagsList?: InputMaybe<Tag>;
  userData?: InputMaybe<Scalars['String']>;
  vpcId?: InputMaybe<Scalars['String']>;
};

export type KvmParamItem = {
  availabilityZone: Scalars['String'];
  cpu: Scalars['Float'];
  hdd?: InputMaybe<Scalars['Float']>;
  instanceType: Scalars['String'];
  mem: Scalars['Float'];
  no: Scalars['Float'];
  productType: Scalars['Float'];
  sriovNetSupport: Scalars['Boolean'];
};

export type KvmParamPriceItem = {
  availabilityZone: Scalars['String'];
  billType: Scalars['Float'];
  count: Scalars['Float'];
  cpu: Scalars['Float'];
  duration: Scalars['String'];
  durationUnit: Scalars['String'];
  instanceType: Scalars['String'];
  mem: Scalars['Float'];
  ops: Scalars['String'];
  opstype: Scalars['Float'];
  productType: Scalars['Float'];
  rootDisk: Scalars['Float'];
  sriovNetSupport: Scalars['Boolean'];
  ssd: Scalars['Float'];
  systemDiskType: Scalars['String'];
};

export type KvmTagItem = {
  tagKey: Scalars['String'];
  tagValue: Scalars['String'];
};

export type Label = {
  __typename?: 'Label';
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type LabelParam = {
  Key: Scalars['String'];
  Value: Scalars['String'];
};

export type LangChainCreateProductRes = {
  __typename?: 'LangChainCreateProductRes';
  code?: Maybe<Scalars['Float']>;
  eip?: Maybe<LangChainProduct>;
  kvm?: Maybe<LangChainProduct>;
  msg?: Maybe<Scalars['String']>;
};

export type LangChainEipParam = {
  billType?: InputMaybe<Scalars['Float']>;
  count?: InputMaybe<Scalars['Float']>;
  duration?: InputMaybe<Scalars['Float']>;
  durationUnit?: InputMaybe<Scalars['String']>;
  lineId?: InputMaybe<Scalars['String']>;
  net?: InputMaybe<Scalars['Float']>;
  projectId?: InputMaybe<Scalars['Float']>;
  provider?: InputMaybe<Scalars['String']>;
};

export type LangChainKvmParam = {
  allocateAddress?: InputMaybe<Scalars['Boolean']>;
  architecture?: InputMaybe<Scalars['String']>;
  availabilityZone?: InputMaybe<Scalars['String']>;
  bigModel?: InputMaybe<Scalars['String']>;
  billType?: InputMaybe<Scalars['Float']>;
  count?: InputMaybe<Scalars['Float']>;
  cpu?: InputMaybe<Scalars['Float']>;
  deploymentMode?: InputMaybe<Scalars['String']>;
  display?: InputMaybe<Scalars['String']>;
  duration?: InputMaybe<Scalars['String']>;
  durationUnit?: InputMaybe<Scalars['String']>;
  embedding?: InputMaybe<Scalars['String']>;
  extra?: InputMaybe<Scalars['String']>;
  gpu?: InputMaybe<Scalars['Float']>;
  hostName?: InputMaybe<Scalars['String']>;
  iamRoleName?: InputMaybe<Scalars['String']>;
  instanceName?: InputMaybe<Scalars['String']>;
  instancePassword?: InputMaybe<Scalars['String']>;
  instanceType?: InputMaybe<Scalars['String']>;
  isDistributeIpv6?: InputMaybe<Scalars['Boolean']>;
  keepImageLogin?: InputMaybe<Scalars['Boolean']>;
  keyIds?: InputMaybe<Array<Scalars['String']>>;
  mem?: InputMaybe<Scalars['Float']>;
  milvus?: InputMaybe<Scalars['String']>;
  monitorFlag?: InputMaybe<Scalars['Float']>;
  netWorkList?: InputMaybe<Array<Scalars['String']>>;
  ops?: InputMaybe<Scalars['String']>;
  opstype?: InputMaybe<Scalars['Float']>;
  priceMethod?: InputMaybe<Scalars['Float']>;
  privateIpAddress?: InputMaybe<Scalars['String']>;
  productType?: InputMaybe<Scalars['Float']>;
  projectId?: InputMaybe<Scalars['Float']>;
  rootDisk?: InputMaybe<Scalars['Float']>;
  securityGroupIds?: InputMaybe<Array<Scalars['String']>>;
  sriovNetSupport?: InputMaybe<Scalars['Boolean']>;
  ssd?: InputMaybe<Scalars['Float']>;
  subnetId?: InputMaybe<Scalars['String']>;
  systemDiskType?: InputMaybe<Scalars['String']>;
  tagsList?: InputMaybe<LangChainTag>;
  userData?: InputMaybe<Scalars['String']>;
  vpcId?: InputMaybe<Scalars['String']>;
};

export type LangChainProduct = {
  __typename?: 'LangChainProduct';
  data?: Maybe<LangChainProductData>;
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Float']>;
};

export type LangChainProductData = {
  __typename?: 'LangChainProductData';
  price?: Maybe<Scalars['Float']>;
  productGroup?: Maybe<Scalars['Float']>;
  productId?: Maybe<Scalars['String']>;
};

export type LangChainTag = {
  resourceList?: InputMaybe<Array<Resource>>;
  tagList?: InputMaybe<Array<Scalars['String']>>;
};

export type LangChainVpcInfo = {
  __typename?: 'LangChainVpcInfo';
  RequestId?: Maybe<Scalars['String']>;
  SecurityGroupSet?: Maybe<Array<SecurityGroupLangChainVpc>>;
  SubnetSet?: Maybe<Array<SubnetLangChainVpc>>;
  VpcSet?: Maybe<Array<VpcLangChain>>;
};

export type LangChainimageInfo = {
  __typename?: 'LangChainimageInfo';
  ImageId?: Maybe<Scalars['String']>;
};

export type LimitSidecar = {
  __typename?: 'LimitSidecar';
  ResourceCPULimit?: Maybe<Scalars['String']>;
  ResourceMemoryLimit?: Maybe<Scalars['String']>;
};

export type Line = {
  __typename?: 'Line';
  IpVersion?: Maybe<Scalars['String']>;
  Isp?: Maybe<Scalars['String']>;
  LineId?: Maybe<Scalars['String']>;
  LineName?: Maybe<Scalars['String']>;
  LineType?: Maybe<Scalars['String']>;
};

export type LineInfo = {
  __typename?: 'LineInfo';
  IpVersion?: Maybe<Scalars['String']>;
  Isp?: Maybe<Scalars['String']>;
  LineId?: Maybe<Scalars['String']>;
  LineName?: Maybe<Scalars['String']>;
  LineType?: Maybe<Scalars['String']>;
};

export type LineItem = {
  __typename?: 'LineItem';
  IpVersion?: Maybe<Scalars['String']>;
  Isp?: Maybe<Scalars['String']>;
  LineId?: Maybe<Scalars['String']>;
  LineName?: Maybe<Scalars['String']>;
  LineType?: Maybe<Scalars['String']>;
};

export type LineSetInfo = {
  __typename?: 'LineSetInfo';
  LineSet: Array<LineItem>;
};

export type ListKLogPoolsResParams = {
  __typename?: 'ListKLogPoolsResParams';
  Pools: Array<Scalars['String']>;
};

export type ListKLogProjectsResParams = {
  __typename?: 'ListKLogProjectsResParams';
  Projects: Array<Scalars['String']>;
};

/** 获取云堡垒机列表 */
export type ListKbh = {
  __typename?: 'ListKbh';
  KBHInfo?: Maybe<Array<KbhInfo>>;
  RequestId?: Maybe<Scalars['String']>;
};

export type ListPriceRegions = {
  __typename?: 'ListPriceRegions';
  data?: Maybe<Array<ListPriceRegionsItem>>;
};

export type ListPriceRegionsItem = {
  __typename?: 'ListPriceRegionsItem';
  areaCode?: Maybe<Scalars['String']>;
  regionCode: Scalars['String'];
  regionEnName?: Maybe<Scalars['String']>;
  regionId: Scalars['String'];
  regionName: Scalars['String'];
};

export type ListProjectResult = {
  __typename?: 'ListProjectResult';
  ProjectList: Array<ProjectListItem>;
  Total: Scalars['Float'];
};

export type ListRolesResult = {
  __typename?: 'ListRolesResult';
  Roles: Roles;
};

export type LoadBalancerDescriptions = {
  __typename?: 'LoadBalancerDescriptions';
  AllocationId?: Maybe<Scalars['String']>;
  ChargeType?: Maybe<Scalars['String']>;
  CreateTime?: Maybe<Scalars['String']>;
  DeleteProtection?: Maybe<Scalars['String']>;
  EipLineName?: Maybe<Scalars['String']>;
  EipProjectId?: Maybe<Scalars['String']>;
  EipProjectName?: Maybe<Scalars['String']>;
  IpVersion?: Maybe<Scalars['String']>;
  LbStatus?: Maybe<Scalars['String']>;
  LbType?: Maybe<Scalars['String']>;
  ListenerCount?: Maybe<Scalars['Float']>;
  ListenersCount?: Maybe<Scalars['Float']>;
  LoadBalancerId: Scalars['String'];
  LoadBalancerName?: Maybe<Scalars['String']>;
  LoadBalancerState?: Maybe<Scalars['String']>;
  ModifyProtection?: Maybe<Scalars['String']>;
  ProjectId?: Maybe<Scalars['String']>;
  ProjectName?: Maybe<Scalars['String']>;
  PublicIp?: Maybe<Scalars['String']>;
  State?: Maybe<Scalars['String']>;
  TagSet?: Maybe<Array<SlbTagSet>>;
  Type?: Maybe<Scalars['String']>;
  UserTag?: Maybe<Scalars['String']>;
  VnetId?: Maybe<Scalars['String']>;
  VpcId?: Maybe<Scalars['String']>;
  VpcName?: Maybe<Scalars['String']>;
};

export type LocalVolumeSnapshotSetInfo = {
  __typename?: 'LocalVolumeSnapshotSetInfo';
  CopyFromRemote: Scalars['Boolean'];
  CreateImage: Scalars['Boolean'];
  CreationDate: Scalars['String'];
  DiskSize: Scalars['Float'];
  InstanceId: Scalars['String'];
  LocalVolumeSnapshotDesc?: Maybe<Scalars['String']>;
  LocalVolumeSnapshotId: Scalars['String'];
  LocalVolumeSnapshotName: Scalars['String'];
  MinDisk: Scalars['Float'];
  SnapshotType: Scalars['String'];
  SourceLocalVolumeCategory: Scalars['String'];
  SourceLocalVolumeId: Scalars['String'];
  SourceLocalVolumeName: Scalars['String'];
  SourceLocalVolumeState: Scalars['String'];
  State: Scalars['String'];
};

export type Log = {
  __typename?: 'Log';
  LogInfo?: Maybe<Scalars['String']>;
  LogTime?: Maybe<Scalars['String']>;
};

export type LogCollect = {
  KLogPoolName: Scalars['String'];
  KLogProjectName: Scalars['String'];
};

export type MachineType = {
  __typename?: 'MachineType';
  defaultVal?: Maybe<Scalars['Boolean']>;
  enName?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type MarketImageCategoriesData = {
  __typename?: 'MarketImageCategoriesData';
  attrArr: Scalars['String'];
  code: Scalars['String'];
  enName: Scalars['String'];
  grade: Scalars['Float'];
  id: Scalars['Float'];
  name: Scalars['String'];
  parentCode: Scalars['String'];
  sortNum: Scalars['Float'];
  state: Scalars['Float'];
  url: Scalars['String'];
};

export type MarketImageData = {
  __typename?: 'MarketImageData';
  first: Scalars['Float'];
  hasNext: Scalars['Boolean'];
  hasPre: Scalars['Boolean'];
  items?: Maybe<Array<MarketImageItems>>;
  nextPage: Scalars['Float'];
  page: Scalars['Float'];
  per_page: Scalars['Float'];
  prePage: Scalars['Float'];
  total: Scalars['Float'];
  totalPages: Scalars['Float'];
};

export type MarketImageDetail = {
  __typename?: 'MarketImageDetail';
  created: Scalars['String'];
  id: Scalars['String'];
  metadata?: Maybe<MarketImageMetadata>;
  minDisk: Scalars['Float'];
  minRam: Scalars['Float'];
  name: Scalars['String'];
  progress: Scalars['Float'];
  status: Scalars['String'];
  updated: Scalars['String'];
};

export type MarketImageItems = {
  __typename?: 'MarketImageItems';
  Platform: Scalars['String'];
  SysDisk?: Maybe<Scalars['Float']>;
  categoryCode: Scalars['String'];
  companyId: Scalars['Float'];
  companyName: Scalars['String'];
  hourPrice: Scalars['Float'];
  imageDetail?: Maybe<MarketImageDetail>;
  imageId: Scalars['String'];
  monthPrice: Scalars['Float'];
  name: Scalars['String'];
  osVersion: Scalars['String'];
  productId: Scalars['Float'];
  publishState: Scalars['Float'];
  summary: Scalars['String'];
};

export type MarketImageMetadata = {
  __typename?: 'MarketImageMetadata';
  image_openstack_defined_cloudinit?: Maybe<Scalars['String']>;
  image_type: Scalars['String'];
  image_user_defined_category: Scalars['String'];
  invisible: Scalars['String'];
  is_npe?: Maybe<Scalars['String']>;
  os_version: Scalars['String'];
  owner_id: Scalars['String'];
  progress: Scalars['String'];
  user_id: Scalars['String'];
};

export type MetricObject = {
  InstanceID: Scalars['String'];
  MetricDesc: Scalars['String'];
  MetricName: Scalars['String'];
  ProductType: Scalars['Float'];
};

export type Metrics = {
  InstanceID?: InputMaybe<Scalars['String']>;
  MetricDesc?: InputMaybe<Scalars['String']>;
  MetricName?: InputMaybe<Scalars['String']>;
  ProductType?: InputMaybe<Scalars['Float']>;
  Tags?: InputMaybe<InputMetricsTags>;
};

export type MetricsTags = {
  __typename?: 'MetricsTags';
  host?: Maybe<Scalars['String']>;
  p1?: Maybe<Scalars['String']>;
  p2?: Maybe<Scalars['String']>;
};

export type ModelConfigurationList = {
  __typename?: 'ModelConfigurationList';
  architecture?: Maybe<Scalars['String']>;
  bigModel?: Maybe<Scalars['String']>;
  deploymentMode?: Maybe<Scalars['String']>;
  embedding?: Maybe<Scalars['String']>;
  milvus?: Maybe<Scalars['String']>;
};

export type ModelInstanceStateTypes = {
  __typename?: 'ModelInstanceStateTypes';
  CostTime?: Maybe<Scalars['String']>;
  Name?: Maybe<Scalars['String']>;
  OnMigrate?: Maybe<Scalars['Boolean']>;
  TimeStamp?: Maybe<Scalars['String']>;
};

export type ModelTag = {
  __typename?: 'ModelTag';
  Key?: Maybe<Scalars['String']>;
  Value?: Maybe<Scalars['String']>;
};

/** 编辑云企业网 */
export type ModifyCen = {
  __typename?: 'ModifyCen';
  Cen?: Maybe<ModifyCenData>;
  RequestId?: Maybe<Scalars['String']>;
};

/** 修改带宽包名字 */
export type ModifyCenBandWidthPackage = {
  __typename?: 'ModifyCenBandWidthPackage';
  CenBandWidthPackage?: Maybe<CenBandWidthPackageSet>;
  RequestId: Scalars['String'];
};

export type ModifyCenData = {
  __typename?: 'ModifyCenData';
  CenId?: Maybe<Scalars['String']>;
  CenName?: Maybe<Scalars['String']>;
  CreateTime?: Maybe<Scalars['String']>;
  Description?: Maybe<Scalars['String']>;
};

/** 调整跨地域带宽 */
export type ModifyCenRegionBandwidth = {
  __typename?: 'ModifyCenRegionBandwidth';
  CenRegionBandwidth?: Maybe<CenRegionBandwidth>;
  RequestId?: Maybe<Scalars['String']>;
};

/** 启动/关闭/重启堡垒机接口 */
export type ModifyKbh = {
  __typename?: 'ModifyKbh';
  Error?: Maybe<KbhReturnError>;
  RequestId?: Maybe<Scalars['String']>;
  Res?: Maybe<Scalars['Boolean']>;
};

/** 修改堡垒机名称 */
export type ModifyKbhName = {
  __typename?: 'ModifyKbhName';
  Error?: Maybe<KbhReturnError>;
  RequestId?: Maybe<Scalars['String']>;
  Res?: Maybe<Scalars['Boolean']>;
};

/** 启动/关闭/重启堡垒机接口 */
export type ModifyKbhStatus = {
  __typename?: 'ModifyKbhStatus';
  Error?: Maybe<KbhReturnError>;
  RequestId?: Maybe<Scalars['String']>;
  Res?: Maybe<Scalars['Boolean']>;
};

/** 编辑负载均衡名称 */
export type ModifyLoadBalancer = {
  __typename?: 'ModifyLoadBalancer';
  CreateTime?: Maybe<Scalars['String']>;
  IpVersion?: Maybe<Scalars['String']>;
  LbType?: Maybe<Scalars['String']>;
  LoadBalancerId?: Maybe<Scalars['String']>;
  LoadBalancerName?: Maybe<Scalars['String']>;
  LoadBalancerState?: Maybe<Scalars['String']>;
  PublicIp?: Maybe<Scalars['String']>;
  RequestId?: Maybe<Scalars['String']>;
  Type?: Maybe<Scalars['String']>;
  VpcId?: Maybe<Scalars['String']>;
};

export type Monitor = {
  __typename?: 'Monitor';
  Day: Scalars['String'];
  FileSystemId: Scalars['String'];
  Hour: Scalars['String'];
  Status: Scalars['String'];
  UsedSize: Scalars['Float'];
};

export type MountTarget = {
  __typename?: 'MountTarget';
  CreationDate: Scalars['String'];
  IpAddress?: Maybe<Scalars['String']>;
  MountTargetId: Scalars['String'];
  MountTargetState: Scalars['String'];
  SubnetId: Scalars['String'];
  SubnetName?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  AddClusterIntoServiceMesh: AddClusterIntoServiceMeshResponse;
  AssociateAddress: AssociateAddress;
  AttachCenBandWidthPackage: AttachCenBandWidthPackage;
  AttachNetworkInstance: AttachNetworkInstance;
  BatchCreateProductOfCenPkg: BatchCreateProductOfCenPkg;
  BatchDeleteCens: BatchDeleteCens;
  BatchDeleteLoadBalancer: BatchDeleteLoadBalancer;
  BatchDetachNetworkInstances: BatchDetachNetworkInstances;
  BatchDisassociateLbAddress: BatchDisassociateLbAddress;
  BatchModifyLoadBalancer: BatchModifyLoadBalancer;
  BindKbhEip: BindKbhEip;
  CenCidrDelete: CenCidrDelete;
  CenCidrPublish: CenCidrPublish;
  CenUpdateInstancesProjectId: CenUpdateInstancesProjectId;
  CreateCen: CreateCen;
  CreateCenGrant: CreateCenGrant;
  CreateCenRegionBandwidth: CreateCenRegionBandwidth;
  CreateCompare: Result;
  CreateContainerGroup: CreateContainerGroupResParams;
  CreateGlobalNamespace: CreateGlobalNamespaceResponse;
  CreateModel: CreateModelRes;
  CreateProduct: CreateProductRes;
  CreateServiceMesh: CreateServiceMeshResponse;
  DeleteCenBandWidthPackage: DeleteCenBandWidthPackage;
  DeleteCenGrant: DeleteCenGrant;
  DeleteCenRegionBandwidth: DeleteCenRegionBandwidth;
  DescribeMetricsData: DescribeMetricsData;
  DescribePublishedRoutes: DescribePublishedRoutes;
  DescribeScreen: DescribeScreen;
  DetachCenBandWidthPackage: DetachCenBandWidthPackage;
  GlobalNamespaceInjectSidecar: GlobalNamespaceInjectSidecarResponse;
  KbhBatchCreateProduct: KbhBatchCreateProduct;
  LangChainCreateProduct: LangChainCreateProductRes;
  LangChainModifyInstancename: ChangeInstanceNameResult;
  LangChainTerminateInstances: TerminateInstancesResult;
  ModifyCen: ModifyCen;
  ModifyCenBandWidthPackage: ModifyCenBandWidthPackage;
  ModifyCenRegionBandwidth: ModifyCenRegionBandwidth;
  ModifyKbh: ModifyKbh;
  ModifyKbhName: ModifyKbhName;
  ModifyKbhStatus: ModifyKbhStatus;
  ModifyLoadBalancer: ModifyLoadBalancer;
  RefundInstances: RefundInstances;
  RemoveClusterFromServiceMesh: RemoveClusterFromServiceMeshResponse;
  RemoveGlobalNamespace: RemoveGlobalNamespaceResponse;
  RemoveServiceMesh: RemoveServiceMeshResponse;
  SynceKASMNamespaceFromK8sCluster: SynceKasmNamespaceFromK8sClusterResponse;
  UnbindKbhEip: UnbindKbhEip;
  UpdateCompare: Result;
  UpdateGlobalScopeSidecarConfig: UpdateGlobalScopeSidecarConfigResponse;
  UpdateInstanceProjectId: UpdateInstanceProjectId;
  UpdateInstancesProjectId: UpdateInstancesProjectId;
  UpdateSubnetName: UpdateSubnetName;
  UpgardeGlobalNamespaceLabels: UpgardeGlobalNamespaceResponse;
  addBook?: Maybe<Book>;
  addFileSystem?: Maybe<Scalars['Boolean']>;
  addMount?: Maybe<FileSystem>;
  changeAuthor?: Maybe<Book>;
  changeFileSystemName?: Maybe<FileSystem>;
  changeProject: Scalars['Boolean'];
  deleteFileSystem?: Maybe<Scalars['Boolean']>;
  nasPermission: Scalars['Boolean'];
  removeMount?: Maybe<Scalars['Boolean']>;
  trialConvert: Scalars['Boolean'];
};


export type MutationAddClusterIntoServiceMeshArgs = {
  ClusterId?: InputMaybe<Array<Scalars['String']>>;
  Region?: InputMaybe<Scalars['String']>;
  ServiceMeshId?: InputMaybe<Scalars['String']>;
};


export type MutationAssociateAddressArgs = {
  AllocationId: Scalars['String'];
  InstanceId: Scalars['String'];
  InstanceType: Scalars['String'];
  Region: Scalars['String'];
  slbType: Scalars['String'];
};


export type MutationAttachCenBandWidthPackageArgs = {
  CenBandWidthPackageId: Scalars['String'];
  CenId: Scalars['String'];
  Region: Scalars['String'];
};


export type MutationAttachNetworkInstanceArgs = {
  CenId: Scalars['String'];
  InstanceAccountId?: InputMaybe<Scalars['String']>;
  InstanceRegion: Scalars['String'];
  InstanceType: Scalars['String'];
  NetworkInstanceId: Scalars['String'];
  Region: Scalars['String'];
};


export type MutationBatchCreateProductOfCenPkgArgs = {
  Region: Scalars['String'];
  params?: InputMaybe<Array<PkgCreateParams>>;
};


export type MutationBatchDeleteCensArgs = {
  CenIds: Array<Scalars['String']>;
  Region: Scalars['String'];
};


export type MutationBatchDeleteLoadBalancerArgs = {
  LoadBalancerIds: Scalars['String'];
  Region: Scalars['String'];
};


export type MutationBatchDetachNetworkInstancesArgs = {
  CenId: Scalars['String'];
  InstanceIds: Array<Scalars['String']>;
  Region: Scalars['String'];
};


export type MutationBatchDisassociateLbAddressArgs = {
  LoadBalancerIds: Scalars['String'];
  Region: Scalars['String'];
};


export type MutationBatchModifyLoadBalancerArgs = {
  LoadBalancerIds: Scalars['String'];
  LoadBalancerState: Scalars['String'];
  Region: Scalars['String'];
};


export type MutationBindKbhEipArgs = {
  EipId: Scalars['String'];
  InstanceId: Scalars['String'];
  Region: Scalars['String'];
};


export type MutationCenCidrDeleteArgs = {
  GrantAccountId?: InputMaybe<Scalars['String']>;
  InstanceType: Scalars['String'];
  NetworkInstanceId: Scalars['String'];
  Region: Scalars['String'];
  RouteIds: Array<Scalars['String']>;
};


export type MutationCenCidrPublishArgs = {
  GrantAccountId?: InputMaybe<Scalars['String']>;
  InstanceType: Scalars['String'];
  NetworkInstanceId: Scalars['String'];
  Region: Scalars['String'];
  RouteIds: Array<Scalars['String']>;
};


export type MutationCenUpdateInstancesProjectIdArgs = {
  InstanceIds: Array<Scalars['String']>;
  ProjectId: Scalars['Float'];
  Region: Scalars['String'];
};


export type MutationCreateCenArgs = {
  CenName: Scalars['String'];
  Description?: InputMaybe<Scalars['String']>;
  Region: Scalars['String'];
};


export type MutationCreateCenGrantArgs = {
  CenAccountId: Scalars['String'];
  CenId: Scalars['String'];
  InstanceType: Scalars['String'];
  NetworkInstanceId: Scalars['String'];
  Region: Scalars['String'];
};


export type MutationCreateCenRegionBandwidthArgs = {
  CenBandWidthPackageId: Scalars['String'];
  InterBandWidth: Scalars['Float'];
  LocalRegion: Scalars['String'];
  Region: Scalars['String'];
  RemoteRegion: Scalars['String'];
};


export type MutationCreateCompareArgs = {
  business: Scalars['String'];
  compareModel?: InputMaybe<Array<CompareModel>>;
  customerName: Scalars['String'];
  customerService: Scalars['Float'];
  dbTypes?: InputMaybe<Array<CompareModel>>;
  discounts?: InputMaybe<Array<ArgsDiscount>>;
  product: Scalars['String'];
  projectName: Scalars['String'];
  region: Scalars['String'];
  strategy: Scalars['Float'];
};


export type MutationCreateContainerGroupArgs = {
  BillTypeId: Scalars['Float'];
  Container: Array<ContainerItem>;
  ContainerGroupName: Scalars['String'];
  Count?: InputMaybe<Scalars['Float']>;
  Cpu: Scalars['String'];
  ImageRegistryCredential?: InputMaybe<Array<ImageRegistryCredentialItem>>;
  KciType?: InputMaybe<Scalars['String']>;
  MachineHostAliase?: InputMaybe<Array<IpHostPair>>;
  Memory: Scalars['Float'];
  ProjectId: Scalars['Float'];
  Region: Scalars['String'];
  RestartPolicy: Scalars['String'];
  SecurityGroupId: Scalars['String'];
  SubnetId: Scalars['String'];
  Volume?: InputMaybe<Array<VolumeItem>>;
};


export type MutationCreateGlobalNamespaceArgs = {
  AutoInjectSidecar?: InputMaybe<Scalars['Boolean']>;
  GlobalNamespaceName?: InputMaybe<Scalars['String']>;
  Labels?: InputMaybe<Array<LabelParam>>;
  Region?: InputMaybe<Scalars['String']>;
  ServiceMeshId?: InputMaybe<Scalars['String']>;
};


export type MutationCreateModelArgs = {
  Region?: InputMaybe<Scalars['String']>;
  ebsList?: InputMaybe<Array<EbsParam>>;
  eip?: InputMaybe<EipParam>;
  kead?: InputMaybe<KeadParam>;
  kvm: KvmParam;
};


export type MutationCreateProductArgs = {
  Region?: InputMaybe<Scalars['String']>;
  ebsList?: InputMaybe<Array<EbsParam>>;
  eip?: InputMaybe<EipParam>;
  kead?: InputMaybe<KeadParam>;
  kvm: KvmParam;
};


export type MutationCreateServiceMeshArgs = {
  ClusterList?: InputMaybe<Array<Scalars['String']>>;
  IstioVersion?: InputMaybe<Scalars['String']>;
  Log?: InputMaybe<Scalars['Boolean']>;
  Name?: InputMaybe<Scalars['String']>;
  Region?: InputMaybe<Scalars['String']>;
};


export type MutationDeleteCenBandWidthPackageArgs = {
  CenBandWidthPackageId: Scalars['String'];
  Region: Scalars['String'];
};


export type MutationDeleteCenGrantArgs = {
  CenGrantId: Scalars['String'];
  Region: Scalars['String'];
};


export type MutationDeleteCenRegionBandwidthArgs = {
  CenRegionBandwidthId: Scalars['String'];
  Region: Scalars['String'];
};


export type MutationDescribeMetricsDataArgs = {
  Aggregate: Scalars['String'];
  EndTime: Scalars['Float'];
  Metrics: Array<Metrics>;
  Namespace: Scalars['String'];
  Period: Scalars['Float'];
  Region: Scalars['String'];
  StartTime: Scalars['Float'];
};


export type MutationDescribePublishedRoutesArgs = {
  CenId: Scalars['String'];
  GrantAccountId?: InputMaybe<Scalars['String']>;
  InstanceRegion: Scalars['String'];
  InstanceType: Scalars['String'];
  NetworkInstanceId: Scalars['String'];
  Region: Scalars['String'];
};


export type MutationDescribeScreenArgs = {
  InstanceId: Scalars['String'];
  Name: Scalars['String'];
  ProductType: Scalars['Float'];
  Region: Scalars['String'];
  Tags?: InputMaybe<Scalars['String']>;
};


export type MutationDetachCenBandWidthPackageArgs = {
  CenBandWidthPackageId: Scalars['String'];
  CenId: Scalars['String'];
  Region: Scalars['String'];
};


export type MutationGlobalNamespaceInjectSidecarArgs = {
  AutoInjectSidecar?: InputMaybe<Scalars['Boolean']>;
  GlobalNamespaceName?: InputMaybe<Scalars['String']>;
  Region?: InputMaybe<Scalars['String']>;
  ServiceMeshId?: InputMaybe<Scalars['String']>;
};


export type MutationKbhBatchCreateProductArgs = {
  HbkProductParam4WebList: Array<HbkCreateProductParam4WebList>;
  Region: Scalars['String'];
};


export type MutationLangChainCreateProductArgs = {
  Region?: InputMaybe<Scalars['String']>;
  eip?: InputMaybe<LangChainEipParam>;
  kvm: LangChainKvmParam;
};


export type MutationLangChainModifyInstancenameArgs = {
  Region: Scalars['String'];
  instanceId: Scalars['String'];
  name: Scalars['String'];
};


export type MutationLangChainTerminateInstancesArgs = {
  InstancesIdList: Array<Scalars['String']>;
  Region: Scalars['String'];
};


export type MutationModifyCenArgs = {
  CenId: Scalars['String'];
  CenName: Scalars['String'];
  Description?: InputMaybe<Scalars['String']>;
  Region: Scalars['String'];
};


export type MutationModifyCenBandWidthPackageArgs = {
  CenBandWidthPackageId: Scalars['String'];
  CenBandWidthPackageName: Scalars['String'];
  Region: Scalars['String'];
};


export type MutationModifyCenRegionBandwidthArgs = {
  CenRegionBandwidthId: Scalars['String'];
  InterBandWidth: Scalars['Float'];
  Region: Scalars['String'];
};


export type MutationModifyKbhArgs = {
  AssetNumber?: InputMaybe<Scalars['Float']>;
  InstanceId?: InputMaybe<Scalars['String']>;
  ProductId?: InputMaybe<Scalars['Float']>;
  Region: Scalars['String'];
  ServiceId?: InputMaybe<Scalars['String']>;
  StoreSize?: InputMaybe<Scalars['Float']>;
  SubOrderId?: InputMaybe<Scalars['Float']>;
  Type?: InputMaybe<Scalars['Float']>;
};


export type MutationModifyKbhNameArgs = {
  InstanceId: Scalars['String'];
  Name: Scalars['String'];
  Region: Scalars['String'];
};


export type MutationModifyKbhStatusArgs = {
  Force?: InputMaybe<Scalars['Float']>;
  InstanceId?: InputMaybe<Scalars['String']>;
  Region: Scalars['String'];
  Type?: InputMaybe<Scalars['Float']>;
};


export type MutationModifyLoadBalancerArgs = {
  LoadBalancerId: Scalars['String'];
  LoadBalancerName: Scalars['String'];
  Region: Scalars['String'];
};


export type MutationRefundInstancesArgs = {
  Reason: Scalars['String'];
  Region: Scalars['String'];
  defTime: Scalars['String'];
  instanceIds: Scalars['String'];
  instanceType: Scalars['String'];
};


export type MutationRemoveClusterFromServiceMeshArgs = {
  ClusterId?: InputMaybe<Array<Scalars['String']>>;
  Region?: InputMaybe<Scalars['String']>;
  ServiceMeshId?: InputMaybe<Scalars['String']>;
};


export type MutationRemoveGlobalNamespaceArgs = {
  GlobalNamespaceName?: InputMaybe<Scalars['String']>;
  Region?: InputMaybe<Scalars['String']>;
  ServiceMeshId?: InputMaybe<Scalars['String']>;
};


export type MutationRemoveServiceMeshArgs = {
  Region?: InputMaybe<Scalars['String']>;
  ServiceMeshId?: InputMaybe<Scalars['String']>;
};


export type MutationSynceKasmNamespaceFromK8sClusterArgs = {
  K8sClusterId?: InputMaybe<Scalars['String']>;
  Region?: InputMaybe<Scalars['String']>;
  ServiceMeshId?: InputMaybe<Scalars['String']>;
};


export type MutationUnbindKbhEipArgs = {
  EipId: Scalars['String'];
  InstanceId: Scalars['String'];
  Region: Scalars['String'];
};


export type MutationUpdateCompareArgs = {
  business: Scalars['String'];
  compareModel?: InputMaybe<Array<CompareModel>>;
  customerName: Scalars['String'];
  customerService: Scalars['Float'];
  dbTypes?: InputMaybe<Array<CompareModel>>;
  discounts?: InputMaybe<Array<ArgsDiscount>>;
  id: Scalars['Float'];
  product: Scalars['String'];
  projectName: Scalars['String'];
  region: Scalars['String'];
  strategy: Scalars['Float'];
};


export type MutationUpdateGlobalScopeSidecarConfigArgs = {
  ProxyInitCPUResourceLimit?: InputMaybe<Scalars['String']>;
  ProxyInitCPUResourceRequest?: InputMaybe<Scalars['String']>;
  ProxyInitMemoryResourceLimit?: InputMaybe<Scalars['String']>;
  ProxyInitMemoryResourceRequest?: InputMaybe<Scalars['String']>;
  Region?: InputMaybe<Scalars['String']>;
  ServiceMeshId?: InputMaybe<Scalars['String']>;
  SidecarProxyCPUResourceLimit?: InputMaybe<Scalars['String']>;
  SidecarProxyCPUResourceRequest?: InputMaybe<Scalars['String']>;
  SidecarProxyMemoryResourceLimit?: InputMaybe<Scalars['String']>;
  SidecarProxyMemoryResourceRequest?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateInstanceProjectIdArgs = {
  InstanceId: Scalars['String'];
  ProjectId: Scalars['Float'];
  Region: Scalars['String'];
};


export type MutationUpdateInstancesProjectIdArgs = {
  InstanceIds: Array<Scalars['String']>;
  ProductLine: Scalars['String'];
  ProjectId: Scalars['String'];
  Region: Scalars['String'];
};


export type MutationUpdateSubnetNameArgs = {
  Region: Scalars['String'];
  Version: Scalars['String'];
  name: Scalars['String'];
  subnetId: Scalars['String'];
};


export type MutationUpgardeGlobalNamespaceLabelsArgs = {
  GlobalNamespaceName?: InputMaybe<Scalars['String']>;
  Labels?: InputMaybe<Array<LabelParam>>;
  Region?: InputMaybe<Scalars['String']>;
  ServiceMeshId?: InputMaybe<Scalars['String']>;
};


export type MutationAddBookArgs = {
  author: Scalars['String'];
  id: Scalars['String'];
};


export type MutationAddFileSystemArgs = {
  data: NewFileSystem;
};


export type MutationAddMountArgs = {
  FileSystemId: Scalars['String'];
  IpVersion: Scalars['String'];
  Region: Scalars['String'];
  SubnetId: Scalars['String'];
};


export type MutationChangeAuthorArgs = {
  author: Scalars['String'];
  id: Scalars['String'];
};


export type MutationChangeFileSystemNameArgs = {
  FileSystemId: Scalars['String'];
  FileSystemName: Scalars['String'];
  Region: Scalars['String'];
};


export type MutationChangeProjectArgs = {
  Region: Scalars['String'];
  fileSystemIds: Array<Scalars['String']>;
  projectId: Scalars['Int'];
};


export type MutationDeleteFileSystemArgs = {
  FileSystemId: Scalars['String'];
  Region: Scalars['String'];
};


export type MutationNasPermissionArgs = {
  ProductWhat: Scalars['Int'];
  Region: Scalars['String'];
};


export type MutationRemoveMountArgs = {
  MountTargetId: Scalars['String'];
  Region: Scalars['String'];
};


export type MutationTrialConvertArgs = {
  BillType: Scalars['Int'];
  InstanceId: Scalars['String'];
  Region: Scalars['String'];
};

export type NfsVolume = {
  Path: Scalars['String'];
  ReadyOnly?: InputMaybe<Scalars['Boolean']>;
  Server: Scalars['String'];
};

export type NetVpc = {
  __typename?: 'NetVpc';
  CenId?: Maybe<Scalars['String']>;
  CidrBlock: Scalars['String'];
  CreateTime: Scalars['String'];
  Ipv6CidrBlockAssociationSet?: Maybe<Array<Ipv6CidrBlockAssociation>>;
  IsDefault: Scalars['Boolean'];
  ProvidedIpv6CidrBlock: Scalars['Boolean'];
  SecondaryCidrSet?: Maybe<Array<SecondaryCidrSet>>;
  VpcId: Scalars['String'];
  VpcName: Scalars['String'];
};

export type NetworkInfo = {
  __typename?: 'NetworkInfo';
  SecurityGroupSet?: Maybe<Array<SecurityGroupSet>>;
  SubnetId?: Maybe<Scalars['String']>;
  SubnetName?: Maybe<Scalars['String']>;
  VpcId?: Maybe<Scalars['String']>;
  VpcName?: Maybe<Scalars['String']>;
};

export type NetworkInstanceSet = {
  __typename?: 'NetworkInstanceSet';
  CenId: Scalars['String'];
  CreateTime?: Maybe<Scalars['String']>;
  InstanceAccountId?: Maybe<Scalars['String']>;
  InstanceName?: Maybe<Scalars['String']>;
  InstanceRegion?: Maybe<Scalars['String']>;
  InstanceType?: Maybe<Scalars['String']>;
  NetworkInstanceId: Scalars['String'];
};

export type NetworkInterfaceAttributeEpcItem = {
  __typename?: 'NetworkInterfaceAttributeEpcItem';
  CidrBlock?: Maybe<Scalars['String']>;
  DNS1?: Maybe<Scalars['String']>;
  DNS2?: Maybe<Scalars['String']>;
  EipSet?: Maybe<Array<EipEpcItem>>;
  Mac?: Maybe<Scalars['String']>;
  NetworkInterfaceId?: Maybe<Scalars['String']>;
  NetworkInterfaceType?: Maybe<Scalars['String']>;
  PrivateIpAddress?: Maybe<Scalars['String']>;
  SecurityGroupSet?: Maybe<Array<SecurityGroupEpcItem>>;
  SubnetId?: Maybe<Scalars['String']>;
  SubnetName?: Maybe<Scalars['String']>;
  VpcId?: Maybe<Scalars['String']>;
  VpcName?: Maybe<Scalars['String']>;
};

export type NetworkInterfaceQuota = {
  __typename?: 'NetworkInterfaceQuota';
  Quota?: Maybe<Scalars['Float']>;
  RequestId?: Maybe<Scalars['String']>;
  Return?: Maybe<Scalars['Boolean']>;
};

export type NetworkItem = {
  privateIpAddress: Scalars['String'];
  securityGroupIds?: InputMaybe<Array<Scalars['String']>>;
  subnetId: Scalars['String'];
};

export type NewFileSystem = {
  AvailabilityZone: Scalars['String'];
  FileSystemName: Scalars['String'];
  IpVersion: Scalars['String'];
  ProjectId: Scalars['Int'];
  ProtocolType: Scalars['String'];
  Region: Scalars['String'];
  StorageType: Scalars['String'];
  SubnetId: Scalars['String'];
  VpcId: Scalars['String'];
};

export type NewTags = {
  TagKey: Scalars['String'];
  TagValue: Scalars['String'];
};

export type NextHopSet = {
  __typename?: 'NextHopSet';
  GatewayId: Scalars['String'];
  GatewayName?: Maybe<Scalars['String']>;
};

export type OrderInfo = {
  __typename?: 'OrderInfo';
  AddressBillType?: Maybe<Scalars['Float']>;
  BillType?: Maybe<Scalars['Float']>;
  ProductType?: Maybe<Scalars['Float']>;
};

export type OtherProperty = {
  __typename?: 'OtherProperty';
  propCode?: Maybe<Scalars['String']>;
  propName?: Maybe<Scalars['String']>;
  propValue?: Maybe<Array<MachineType>>;
  propValueType?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
};

/** 查询机型分类 */
export type OtherPropertyList = {
  __typename?: 'OtherPropertyList';
  data?: Maybe<Array<PropertyData>>;
};

export type PTypeConfig = {
  __typename?: 'PTypeConfig';
  imageList?: Maybe<Array<Scalars['String']>>;
  image_model: Scalars['String'];
  instruction_set?: Maybe<Scalars['Float']>;
  p_group: Scalars['Float'];
  p_name: Scalars['String'];
  p_type: Scalars['Float'];
};

export type Page = {
  __typename?: 'Page';
  currentTotal?: Maybe<Scalars['Float']>;
  page?: Maybe<Scalars['Float']>;
  pageSize?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

export type PaginationFileSystems = {
  __typename?: 'PaginationFileSystems';
  FileSystemCount: Scalars['Int'];
  FileSystems?: Maybe<Array<Maybe<FileSystem>>>;
  Marker: Scalars['Int'];
};

export type Performance = {
  __typename?: 'Performance';
  business: Scalars['String'];
  result: Scalars['String'];
  rule: Scalars['String'];
  score: Scalars['String'];
  testCase: Scalars['String'];
  type: Scalars['String'];
  vmDetails: Scalars['String'];
};

/** 对比性能结果详情 */
export type PerformanceDetailsResult = {
  __typename?: 'PerformanceDetailsResult';
  PerformanceDetailsResult?: Maybe<Array<Performance>>;
};

export type Permission = {
  __typename?: 'Permission';
  billType?: Maybe<Scalars['Int']>;
  hasNasPermission: Scalars['Boolean'];
  instanceId?: Maybe<Scalars['String']>;
  productWhat?: Maybe<Scalars['Int']>;
};

export type PkgCreateParams = {
  CenBandWidthPackageId?: InputMaybe<Scalars['String']>;
  CenId?: InputMaybe<Scalars['String']>;
  ChargeType?: InputMaybe<Scalars['String']>;
  IamProjectId?: InputMaybe<Scalars['Float']>;
  InterArea?: InputMaybe<Scalars['String']>;
  Name?: InputMaybe<Scalars['String']>;
  PackageBandWidth?: InputMaybe<Scalars['Float']>;
  ProductUse?: InputMaybe<Scalars['String']>;
  ProductWhat?: InputMaybe<Scalars['Float']>;
  PurchaseTime?: InputMaybe<Scalars['Float']>;
  TrialPurchaseTime?: InputMaybe<Scalars['Float']>;
};

export type PkgParams = {
  CenBandWidthPackageId?: InputMaybe<Scalars['String']>;
  ChargeType?: InputMaybe<Scalars['String']>;
  InterArea?: InputMaybe<Scalars['String']>;
  PackageBandWidth?: InputMaybe<Scalars['Float']>;
  ProductUse?: InputMaybe<Scalars['String']>;
  ProductWhat?: InputMaybe<Scalars['Float']>;
  PurchaseTime?: InputMaybe<Scalars['Float']>;
  TrialPurchaseTime?: InputMaybe<Scalars['Float']>;
};

export type PkgPromotion = {
  __typename?: 'PkgPromotion';
  discountMoney?: Maybe<Scalars['Float']>;
  instanceId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  productGroup?: Maybe<Scalars['Float']>;
  productId?: Maybe<Scalars['String']>;
  promotionDetails?: Maybe<Array<PkgPromotionDetails>>;
  promotionId?: Maybe<Scalars['String']>;
  targetPromotionDetail?: Maybe<PkgPromotionDetails>;
  type?: Maybe<Scalars['String']>;
};

export type PkgPromotionDetails = {
  __typename?: 'PkgPromotionDetails';
  orderFullMonth?: Maybe<Scalars['Float']>;
  orderReduceDiscount?: Maybe<Scalars['Float']>;
};

export type PriceDetail = {
  __typename?: 'PriceDetail';
  discount?: Maybe<Scalars['Float']>;
  discountedPrice?: Maybe<Scalars['Float']>;
  originalPrice?: Maybe<Scalars['Float']>;
};

export type PriceDetails = {
  __typename?: 'PriceDetails';
  discount: Scalars['Float'];
  discountedPrice: Scalars['Float'];
  originalPrice: Scalars['Float'];
};

export type PriceGroup = {
  __typename?: 'PriceGroup';
  productGroupCode: Scalars['String'];
  productGroupId: Scalars['Float'];
  productGroupName: Scalars['String'];
  productTypeList: Array<EipProductType>;
};

export type PriceItem = {
  __typename?: 'PriceItem';
  packageCode: Scalars['String'];
  price: Scalars['Float'];
};

export type PriceMessage = {
  __typename?: 'PriceMessage';
  RunCount: Scalars['Float'];
  code: Scalars['Float'];
  ebsPriceDetails: PriceDetails;
  kvmPrice?: Maybe<Scalars['Float']>;
  kvmPriceDetails?: Maybe<PriceDetails>;
  marketPrice: Scalars['Float'];
  marketPriceDetails: PriceDetails;
  msg: Scalars['String'];
  price: Scalars['Float'];
  totalPriceDetails: PriceDetails;
};

export type PriceParams = {
  __typename?: 'PriceParams';
  TotalPrice: Scalars['Float'];
};

export type PrivateIpAddressAttributeSetData = {
  __typename?: 'PrivateIpAddressAttributeSetData';
  PrivateIpAddress?: Maybe<Scalars['String']>;
  Status?: Maybe<Scalars['String']>;
  SubnetId?: Maybe<Scalars['String']>;
  privateIpAddressId?: Maybe<Scalars['String']>;
};

export type Product = {
  __typename?: 'Product';
  data?: Maybe<ProductData>;
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Float']>;
};

export type ProductData = {
  __typename?: 'ProductData';
  price?: Maybe<Scalars['Float']>;
  productGroup?: Maybe<Scalars['Float']>;
  productId?: Maybe<Scalars['String']>;
};

export type ProductGroup = {
  __typename?: 'ProductGroup';
  productGroupCode: Scalars['String'];
  productGroupId: Scalars['Int'];
  productGroupName: Scalars['String'];
  productTypeList: Array<Maybe<ProductType>>;
};

export type ProductSellItem = {
  __typename?: 'ProductSellItem';
  AutoSellOut?: Maybe<Scalars['Boolean']>;
  AvailabilityZone?: Maybe<Scalars['String']>;
  GrayAccountSet?: Maybe<Array<GrayAccountItem>>;
  GrayListStatus?: Maybe<Scalars['Boolean']>;
  ProductType?: Maybe<Scalars['Float']>;
  SellOutStatus?: Maybe<Scalars['Boolean']>;
};

export type ProductType = {
  __typename?: 'ProductType';
  billTypeList: Array<Maybe<BillType>>;
  productTypeCode: Scalars['String'];
  productTypeEnName: Scalars['String'];
  productTypeId: Scalars['Int'];
  productTypeName: Scalars['String'];
  propertyList: Array<Maybe<Property>>;
  regionList: Array<Maybe<Region>>;
};

export type Project = {
  __typename?: 'Project';
  AccountId: Scalars['String'];
  CreateTime: Scalars['String'];
  Krn: Scalars['String'];
  ProjectDesc?: Maybe<Scalars['String']>;
  ProjectId: Scalars['Int'];
  ProjectName: Scalars['String'];
  Status: Scalars['Int'];
};

export type ProjectInfo = {
  __typename?: 'ProjectInfo';
  ProjectId?: Maybe<Scalars['String']>;
  ProjectName?: Maybe<Scalars['String']>;
};

export type ProjectItem = {
  __typename?: 'ProjectItem';
  AccountId?: Maybe<Scalars['String']>;
  Krn?: Maybe<Scalars['String']>;
  ProjectDesc?: Maybe<Scalars['String']>;
  ProjectId?: Maybe<Scalars['Float']>;
  ProjectName?: Maybe<Scalars['String']>;
  Status?: Maybe<Scalars['Float']>;
};

export type ProjectList = {
  __typename?: 'ProjectList';
  ProjectList?: Maybe<Array<ProjectItem>>;
  Total: Scalars['Float'];
};

export type ProjectListItem = {
  __typename?: 'ProjectListItem';
  AccountId: Scalars['String'];
  CreateTime?: Maybe<Scalars['String']>;
  Krn: Scalars['String'];
  ProjectDesc: Scalars['String'];
  ProjectId: Scalars['Float'];
  ProjectName: Scalars['String'];
  Status: Scalars['Float'];
};

export type Promotions = {
  __typename?: 'Promotions';
  discountMoney?: Maybe<Scalars['Float']>;
  instanceId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  productGroup?: Maybe<Scalars['Float']>;
  productId?: Maybe<Scalars['String']>;
  promotionDetails?: Maybe<Array<PromotionDetails>>;
  promotionId?: Maybe<Scalars['String']>;
  targetPromotionDetail?: Maybe<PromotionDetails>;
  type?: Maybe<Scalars['String']>;
};

export type PropValue = {
  __typename?: 'PropValue';
  max: Scalars['Int'];
  min: Scalars['Int'];
  step: Scalars['Int'];
};

export type PropValueUnion = KvmListProductType | KvmListPropValueNormal | KvmListPropValueStep;

export type Property = {
  __typename?: 'Property';
  propCode: Scalars['String'];
  propName: Scalars['String'];
  propValue: Array<Maybe<PropValue>>;
  propValueType: Scalars['Int'];
  type: Scalars['Int'];
};

export type PropertyData = {
  __typename?: 'PropertyData';
  otherPropertyList?: Maybe<Array<OtherProperty>>;
  productTypeCode?: Maybe<Scalars['String']>;
  productTypeEnName?: Maybe<Scalars['String']>;
  productTypeId?: Maybe<Scalars['Float']>;
  productTypeName?: Maybe<Scalars['String']>;
};

export type PropertyItem = {
  ItemName?: InputMaybe<Scalars['String']>;
  ItemNo: Scalars['String'];
  Unit?: InputMaybe<Scalars['String']>;
  UnitCount?: InputMaybe<Scalars['Float']>;
  Value: Scalars['String'];
};

export type QosInfo = {
  __typename?: 'QosInfo';
  Qos?: Maybe<Array<QosItem>>;
};

export type QosItem = {
  __typename?: 'QosItem';
  ReadBytesSec?: Maybe<Scalars['Float']>;
  ReadIopsSec?: Maybe<Scalars['Float']>;
  TotalBytesSec?: Maybe<Scalars['Float']>;
  TotalIopsSec?: Maybe<Scalars['Float']>;
  WriteBytesSec?: Maybe<Scalars['Float']>;
  WriteIopsSec?: Maybe<Scalars['Float']>;
};

export type Query = {
  __typename?: 'Query';
  AddressesList: AddressesList;
  AllRegionList: AllRegionList;
  AllVpcInfo: VpcInfo;
  BatchAddTagsV2: BatchAddTagsV2;
  BatchCalculateKVMPrice: KecBatchCalculateKvmPrice;
  BatchCalculateProduct: PriceParams;
  BatchCalculateProductByModel: Array<PriceItem>;
  BatchCalculateProductOfCenPkg: BatchCalculateProductOfCenPkg;
  BatchReinstallCustomerEpc: BatchReinstallCustomerEpcResponse;
  BatchReinstallEpc: BatchReinstallEpcResponse;
  CalculateEIPPrice: CalculateEipPrice;
  CalculateEbsQuotas: QosInfo;
  CalculateKVMPrice: KecPriceMessage;
  CalculateKeadProduct: CalculateKeadProduct;
  CalculateProduct: CalculatePriceParams;
  CenTrialLimitConfig: CenTrialLimitConfig;
  CheckIfEnableRaidTemplate: RaidTemplate;
  CheckInstances: CheckInstances;
  CheckInterfaceWhiteList: CheckInterface;
  CheckKciRole: CheckKciRoleResParams;
  CheckKeyEncryptionBatch: KeyEncryption;
  CheckSgDeny: SgDeny;
  CheckVncPermission: CheckVncPermission;
  CompareCostDetails: CostDetailsResult;
  ComparePerformanceDetails: PerformanceDetailsResult;
  CreateProduct: CreateResponseParams;
  DescribeAllProjects: DescribeAllProjectsResParams;
  DescribeAvailabilityZones: DescribeAvailabilityZones;
  DescribeBandWidthShares: BandWidthShareInfo;
  DescribeCabinetStatisticalData: DescribeCabinetStatisticalData;
  DescribeCanBindCenDcGateway: DescribeCanBindCenDcGateway;
  DescribeCanBindCenVpcs: DescribeCanBindCenVpcs;
  DescribeCanBindCens: DescribeCanBindCens;
  DescribeCenBandWidthPackages: DescribeCenBandWidthPackages;
  DescribeCenGrants: DescribeCenGrants;
  DescribeCenRegionBandwidths: DescribeCenRegionBandwidths;
  DescribeCenRoutes: DescribeCenRoutes;
  DescribeCens: DescribeCens;
  DescribeClusters: DescribeClustersResponse;
  DescribeCompare: Compares;
  DescribeDBs: DesDBsCompares;
  DescribeDataGuardGroup: DescribeDataGuardGroup;
  DescribeDcGatewayRoutes: DescribeDcGatewayRoutes;
  DescribeDemo: DemoSet;
  DescribeEbsPerfQuotas: Array<DescribeEbsPerfQuotasData>;
  DescribeEntrySnapshots: DescribeEntrySnapshots;
  DescribeEpcTypes: EpcTypes;
  DescribeEpcs: DescribeEpcsInfo;
  DescribeGlobalNamespace: GlobalNamespaceResponse;
  DescribeGlobalScopeSidecarConfig: GlobalScopeSidecarConfigResponse;
  DescribeGpuImageDriver: GpuImageDriverSet;
  DescribeGrantDirectConnectGateways: DescribeGrantDirectConnectGateways;
  DescribeGrantVpcs: DescribeGrantVpcs;
  DescribeHostTypes: DesHostCompares;
  DescribeImageRepository: DescribeImageRepositoryResParams;
  DescribeImages: ImageInfo;
  DescribeImagesShare: DescribeImages;
  DescribeInstanceGroupCount: DescribeInstanceGroupCount;
  DescribeInterAreas: DescribeInterAreas;
  DescribeInterRegions: DescribeInterRegions;
  DescribeIstioGateway: DescribeIstioGatewayResponse;
  DescribeJobStatusData: DescribeJobStatusData;
  DescribeKbh: DescribeKbh;
  DescribeKciPackages: DescribeKciPackagesResParams;
  DescribeKciSecurityGroups: DescribeKciSecurityGroupsResParams;
  DescribeKciServiceStatus: DescribeKciServiceStatusResParams;
  DescribeKciSnapshots: DescribeSnapshotsResParams;
  DescribeKeadMinRate: DescribeKeadMinRate;
  DescribeKecIamRoles: DescribeKecIamRoles;
  DescribeKecImages: DescribeImages;
  DescribeKeys: KeySet;
  DescribeLoadBalancers: DescribeLoadBalancers;
  DescribeLocalVolumeSnapshots: DescribeLocalVolumeSnapshots;
  DescribeMarketImageCategories: DescribeMarketImageCategories;
  DescribeMarketImages: DescribeMarketImages;
  DescribeModels: DescribeModels;
  DescribeNetworkInstances: DescribeNetworkInstances;
  DescribePriceSystemOfCen: DescribePriceSystemOfCen;
  DescribePrivateIpAttributes: DescribePrivateIpAttributes;
  DescribeProductSellOuts: SellRequest;
  DescribeQuotaByName: DescribeQuotaByName;
  DescribeQuotaInfoByQuotaName: QuotaSetInfo;
  DescribeResourceQuota: DescribeResourceQuotaResParams;
  DescribeRoutes: DescribeRoutes;
  DescribeSecurityGroups: SecurityGroupSetInfo;
  DescribeSecurityGroupsQuota: DescribeSecurityGroupsQuota;
  DescribeServiceMeshAvailableClusters: ServiceMeshAvailableClustersResponse;
  DescribeServiceMeshLog: ServiceMeshLogResponse;
  DescribeServiceMeshes: ServiceMeshesResponse;
  DescribeShareImage: SharePermissionInfo;
  DescribeSnapshotServiceStatus: DescribeSnapshotServiceStatus;
  DescribeSnapshots: DescribeSnapshots;
  DescribeSnapshotsBatch: DescribeSnapshots;
  DescribeStockSizes: StockSetInfo;
  DescribeSubnetAllocatedIpAddresses: AllocatedIpAddresses;
  DescribeSubnets: SubnetSetInfo;
  DescribeTag: DescribeTagResParams;
  DescribeTagKeys: DescribeTagKeys;
  DescribeTagKeysV2: DescribeTagKeysV2;
  DescribeTagValues: DescribeTagValues;
  DescribeTagValuesV2: DescribeTagValuesV2;
  DescribeVolumes: DescribeVolumesResParams;
  DescribeVpcInfos: DescribeVpcInfos;
  DescribeVpcRoutes: DescribeVpcRoutes;
  DescribeVpcs: VpcSetInfo;
  DetachResourceTagsV2: DetachResourceTagsV2;
  DistributeKmsPermission: DistributeKmsPermission;
  EditTagsV2: EditTagsV2;
  EpcPriceSystem: EpcPriceSystem;
  EpcRaidAttributes: RaidAttribute;
  EpcTypeConfInfo: EpcTypeConfInfo;
  FreeTrialAndAuth: FreeTrialAndAuth;
  GetAccountAllProjectList: ProjectList;
  GetAccountProjectList: GetAccountProjectList;
  GetAutoDeleteTime: GetAutoDeleteTime;
  GetCenUserPermission: GetCenUserPermission;
  GetFreeTrialWallet: GetFreeTrialWallet;
  GetInstanceByIds: FormedInstanceData;
  GetJobs: KisGetJobs;
  GetKbhUserPermission: GetKbhUserPermission;
  GetLines: LineSetInfo;
  GetPort: GetPort;
  GetRegions: GetRegions;
  ImageConfig: ImageConfig;
  IsKa: IsKa;
  KbhBatchCalculateProduct: KbhBatchCalculateProduct;
  KbhDescribeProductSellOuts: KbhDescribeProductSellOuts;
  KbhDescribeSubnetAllocatedIp: KbhDescribeSubnetAllocatedIp;
  KbhQuerySubnetAvailableIpCount: KbhQuerySubnetAvailableIpCount;
  KciCalculateProduct: KciCalculateProductResParams;
  KciDescribeSubnets: DescribeSubnetsResParams;
  KciDescribeVpcs: DescribeVpcsResParams;
  KciPriceSystem: KciProductType;
  KisDescribeMetricsData: KisDescribeMetricsData;
  KisDescribeScreen: KisDescribeScreen;
  KisGetAccountAllProjectList: KisGetAccountAllProjectList;
  KvmList: KecKvmList;
  KvmListCondition: KecKvmList;
  KvmListFilter: KecKvmList;
  LangChainAllVpcInfo: LangChainVpcInfo;
  LangChainBatchCalculateKVMPrice: BatchCalculateKvmPrice;
  LangChainCalculateEIPPrice: EipPriceResult;
  LangChainCalculateKVMPrice: PriceMessage;
  LangChainGetlines: Getlines;
  LangChainKvmList: KvmList;
  LangChainRegionList: RegionListResult;
  LangChainSearchInstancesExtend: InstancesResult;
  LangChaincheckMilvus: CheckMilvueResponse;
  ListDeviceFault: KisDeviceFault;
  ListKLogPools: ListKLogPoolsResParams;
  ListKLogProjects: ListKLogProjectsResParams;
  ListKbh: ListKbh;
  ListPriceRegions: ListPriceRegions;
  ListRegions: KisRegions;
  QueryCommonDiscount: DiscountRes;
  QueryEipProductGroups: BillTypeForBwsInfo;
  QueryFreeTrialWallet: QueryFreeTrialWallet;
  QueryKfsAllRegionAndCapacity?: Maybe<Array<Maybe<KfsAmountAndCapacity>>>;
  QueryOtherPropertyList: OtherPropertyList;
  QueryPriceSystem: QueryPriceSystem;
  QueryProductNetworkInterfaceQuota: NetworkInterfaceQuota;
  QuerySubnetAvailableAddressesCount: SubnetAvailableAddressesCount;
  QueryUserSpecialDiscounts: UserDiscountRes;
  RegionInfos: RegionInfos;
  RegisteredCheck: RegisteredCheckResParams;
  ValidWhitelist: ValidWhitelist;
  ValidateAutoSnapshot: ValidateAutoSnapshot;
  ValidateIpv6Support: ValidateIpv6Support;
  books?: Maybe<Array<Maybe<Book>>>;
  cashWallet: CashWallet;
  fileSystems?: Maybe<PaginationFileSystems>;
  getMilvusInstanceList: InstanceGroup;
  monitor?: Maybe<Array<Maybe<Monitor>>>;
  permission: Permission;
  productGroups?: Maybe<Array<Maybe<ProductGroup>>>;
  projects?: Maybe<Array<Project>>;
  quota?: Maybe<Quota>;
  trialWallet: TrialWallet;
  vpcList?: Maybe<VpcList>;
};


export type QueryAddressesListArgs = {
  IamProjectId?: InputMaybe<Scalars['Float']>;
  MaxResults?: InputMaybe<Scalars['Float']>;
  NextToken?: InputMaybe<Scalars['Float']>;
  Region: Scalars['String'];
};


export type QueryAllRegionListArgs = {
  Region: Scalars['String'];
};


export type QueryAllVpcInfoArgs = {
  Region: Scalars['String'];
  azCode: Scalars['String'];
  subnetType: Scalars['String'];
};


export type QueryBatchAddTagsV2Args = {
  NewTags?: InputMaybe<Array<NewTags>>;
  Region: Scalars['String'];
  ResourceType?: InputMaybe<Scalars['String']>;
  ResourceUuidList?: InputMaybe<Array<Scalars['String']>>;
  Tag?: InputMaybe<Array<SelectTag>>;
};


export type QueryBatchCalculateKvmPriceArgs = {
  Region: Scalars['String'];
  baseParam: BaseParamItem;
  kvmParams: Array<KvmParamItem>;
};


export type QueryBatchCalculateProductArgs = {
  BillType: Scalars['Float'];
  Duration: Scalars['Float'];
  Model: Scalars['String'];
  ProductUse: Scalars['Float'];
  ProductWhat: Scalars['Float'];
  Region: Scalars['String'];
};


export type QueryBatchCalculateProductByModelArgs = {
  Region: Scalars['String'];
  billType: Scalars['Float'];
  duration: Scalars['Float'];
  models: Scalars['String'];
  productUse: Scalars['Float'];
  productWhat: Scalars['Float'];
  serviceEndTime: Scalars['String'];
};


export type QueryBatchCalculateProductOfCenPkgArgs = {
  Region: Scalars['String'];
  params: Array<PkgParams>;
};


export type QueryBatchReinstallCustomerEpcArgs = {
  EpcHostIds?: InputMaybe<Scalars['String']>;
  Path?: InputMaybe<Scalars['String']>;
  Region: Scalars['String'];
  ServerIp?: InputMaybe<Scalars['String']>;
};


export type QueryBatchReinstallEpcArgs = {
  BondAttribute?: InputMaybe<Scalars['String']>;
  CloudMonitorAgent?: InputMaybe<Scalars['String']>;
  ComputerName?: InputMaybe<Scalars['String']>;
  ComputerNameStartNo?: InputMaybe<Scalars['String']>;
  ContainerAgent?: InputMaybe<Scalars['String']>;
  DataDiskCatalogue?: InputMaybe<Scalars['String']>;
  DataDiskCatalogueSuffix?: InputMaybe<Scalars['String']>;
  DataFileType?: InputMaybe<Scalars['String']>;
  EpcHostIds?: InputMaybe<Scalars['String']>;
  GpuImageDriverId?: InputMaybe<Scalars['String']>;
  HyperThreading?: InputMaybe<Scalars['String']>;
  ImageId?: InputMaybe<Scalars['String']>;
  KeyId?: InputMaybe<Scalars['String']>;
  NetworkInterfaceMode?: InputMaybe<Scalars['String']>;
  NvmeDataDiskCatalogue?: InputMaybe<Scalars['String']>;
  NvmeDataDiskCatalogueSuffix?: InputMaybe<Scalars['String']>;
  NvmeDataFileType?: InputMaybe<Scalars['String']>;
  Password?: InputMaybe<Scalars['String']>;
  Raid?: InputMaybe<Scalars['String']>;
  RaidId?: InputMaybe<Scalars['String']>;
  Region: Scalars['String'];
  RetainDataDisk?: InputMaybe<Scalars['String']>;
  SecurityAgent?: InputMaybe<Scalars['String']>;
  SystemFileType?: InputMaybe<Scalars['String']>;
};


export type QueryCalculateEipPriceArgs = {
  Region: Scalars['String'];
  billType: Scalars['Float'];
  count: Scalars['Float'];
  duration: Scalars['Float'];
  durationUnit: Scalars['String'];
  lineId: Scalars['String'];
  net: Scalars['Float'];
  provider: Scalars['String'];
};


export type QueryCalculateEbsQuotasArgs = {
  Region: Scalars['String'];
  Volumes: Array<Volume>;
};


export type QueryCalculateKvmPriceArgs = {
  Region: Scalars['String'];
  ebsList?: InputMaybe<Array<EbsParam>>;
  hasQuota: Scalars['Boolean'];
  kvm: KvmParamPriceItem;
};


export type QueryCalculateKeadProductArgs = {
  Region: Scalars['String'];
  billTypes: Array<Scalars['Float']>;
  bwsId: Scalars['String'];
  duration: Scalars['Float'];
  instanceId: Scalars['String'];
  instanceType: Scalars['String'];
  isp: Scalars['String'];
  keadBandWidth: Scalars['Float'];
  keadDDos: Scalars['Float'];
  keadIpNumber: Scalars['Float'];
  keadIpVersion: Scalars['String'];
  keadMaxBandWidth: Scalars['Float'];
  keadName: Scalars['String'];
  link: Scalars['String'];
  originalKeadIpNumber: Scalars['Float'];
  productType: Scalars['Float'];
  productUse: Scalars['Float'];
  productWhat: Scalars['Float'];
  projectId: Scalars['Float'];
  purchaseTime: Scalars['Float'];
  serviceTime: Scalars['Float'];
};


export type QueryCalculateProductArgs = {
  ProductUse: Scalars['String'];
  Region: Scalars['String'];
  bandWidth: Scalars['Float'];
  chargeType: Scalars['String'];
  ipVersion: Scalars['String'];
  isBws: Scalars['Boolean'];
  lineId: Scalars['String'];
  lineType: Scalars['String'];
  productWhat: Scalars['Float'];
  purchaseTime: Scalars['Float'];
};


export type QueryCenTrialLimitConfigArgs = {
  Region: Scalars['String'];
};


export type QueryCheckIfEnableRaidTemplateArgs = {
  HostType: Scalars['String'];
  Region: Scalars['String'];
};


export type QueryCheckInstancesArgs = {
  Region: Scalars['String'];
  instanceIds: Scalars['String'];
  instanceType: Scalars['String'];
};


export type QueryCheckInterfaceWhiteListArgs = {
  CheckAction: Scalars['String'];
  Region: Scalars['String'];
};


export type QueryCheckKciRoleArgs = {
  Region: Scalars['String'];
};


export type QueryCheckKeyEncryptionBatchArgs = {
  KeyIds: Array<Scalars['String']>;
  Region: Scalars['String'];
};


export type QueryCheckSgDenyArgs = {
  Region: Scalars['String'];
};


export type QueryCheckVncPermissionArgs = {
  Region: Scalars['String'];
  isVpc: Scalars['String'];
};


export type QueryCompareCostDetailsArgs = {
  id: Scalars['Float'];
  product: Scalars['String'];
};


export type QueryComparePerformanceDetailsArgs = {
  business: Scalars['String'];
  businessType: Scalars['String'];
  kingType: Scalars['String'];
};


export type QueryCreateProductArgs = {
  AddressBandWidth?: InputMaybe<Scalars['Float']>;
  AddressChargeType?: InputMaybe<Scalars['String']>;
  AddressProjectId?: InputMaybe<Scalars['Float']>;
  AddressPurchaseTime?: InputMaybe<Scalars['Float']>;
  AdvanceNvmeSetting?: InputMaybe<Scalars['String']>;
  AvailabilityZone: Scalars['String'];
  BandWidthShareId?: InputMaybe<Scalars['String']>;
  BillType: Scalars['Float'];
  BondAttribute?: InputMaybe<Scalars['String']>;
  CloudMonitorAgent?: InputMaybe<Scalars['String']>;
  ComputerName?: InputMaybe<Scalars['String']>;
  ComputerNameStartNo?: InputMaybe<Scalars['Float']>;
  ContainerAgent?: InputMaybe<Scalars['String']>;
  Count: Scalars['Float'];
  DataDiskCatalogue?: InputMaybe<Scalars['String']>;
  DataDiskCatalogueSuffix?: InputMaybe<Scalars['String']>;
  DataFileType?: InputMaybe<Scalars['String']>;
  DeleteAutomatically: Scalars['String'];
  Duration: Scalars['Float'];
  ExtensionPrivateIpAddress?: InputMaybe<Scalars['String']>;
  ExtensionSecurityGroupIds?: InputMaybe<Scalars['String']>;
  ExtensionSubnetId?: InputMaybe<Scalars['String']>;
  GpuImageDriverId?: InputMaybe<Scalars['String']>;
  HostName: Scalars['String'];
  HostNameStartNo?: InputMaybe<Scalars['Float']>;
  HyperThreading?: InputMaybe<Scalars['String']>;
  ImageId?: InputMaybe<Scalars['String']>;
  KeyId?: InputMaybe<Scalars['String']>;
  LineId?: InputMaybe<Scalars['String']>;
  LineIsp?: InputMaybe<Scalars['String']>;
  LineType?: InputMaybe<Scalars['String']>;
  Model: Scalars['String'];
  NetworkInterfaceMode: Scalars['String'];
  NvmeDataDiskCatalogue?: InputMaybe<Scalars['String']>;
  NvmeDataDiskCatalogueSuffix?: InputMaybe<Scalars['String']>;
  NvmeDataFileType?: InputMaybe<Scalars['String']>;
  Password?: InputMaybe<Scalars['String']>;
  PrivateIpAddress?: InputMaybe<Scalars['String']>;
  ProductWhat: Scalars['Float'];
  ProjectId: Scalars['Float'];
  Raid?: InputMaybe<Scalars['String']>;
  RaidId?: InputMaybe<Scalars['String']>;
  Region: Scalars['String'];
  SecurityAgent?: InputMaybe<Scalars['String']>;
  SecurityGroupIds?: InputMaybe<Scalars['String']>;
  SecurityGroupType: Scalars['Float'];
  SubnetId?: InputMaybe<Scalars['String']>;
  SystemFileType?: InputMaybe<Scalars['String']>;
  VpcId: Scalars['String'];
  dataVolumes?: InputMaybe<Array<DataVolumes>>;
  roceNetwork?: InputMaybe<Scalars['String']>;
  systemVolume?: InputMaybe<SystemVolume>;
};


export type QueryDescribeAllProjectsArgs = {
  Region: Scalars['String'];
};


export type QueryDescribeAvailabilityZonesArgs = {
  Region: Scalars['String'];
};


export type QueryDescribeBandWidthSharesArgs = {
  Region: Scalars['String'];
};


export type QueryDescribeCabinetStatisticalDataArgs = {
  Region: Scalars['String'];
};


export type QueryDescribeCanBindCenDcGatewayArgs = {
  MaxResults?: InputMaybe<Scalars['Float']>;
  Region: Scalars['String'];
};


export type QueryDescribeCanBindCenVpcsArgs = {
  MaxResults?: InputMaybe<Scalars['Float']>;
  Region: Scalars['String'];
};


export type QueryDescribeCanBindCensArgs = {
  CenBandWidthPackageId?: InputMaybe<Scalars['String']>;
  LocalAreaId?: InputMaybe<Scalars['String']>;
  Region: Scalars['String'];
  RemoteAreaId?: InputMaybe<Scalars['String']>;
};


export type QueryDescribeCenBandWidthPackagesArgs = {
  CenBandWidthPackageIds?: InputMaybe<Array<Scalars['String']>>;
  CenIds?: InputMaybe<Array<Scalars['String']>>;
  IsContainTag?: InputMaybe<Scalars['Boolean']>;
  ProjectIds?: InputMaybe<Scalars['String']>;
  Region: Scalars['String'];
};


export type QueryDescribeCenGrantsArgs = {
  MaxResults?: InputMaybe<Scalars['Float']>;
  Region: Scalars['String'];
};


export type QueryDescribeCenRegionBandwidthsArgs = {
  CenId: Scalars['String'];
  Region: Scalars['String'];
};


export type QueryDescribeCenRoutesArgs = {
  CenIds: Array<Scalars['String']>;
  MaxResults: Scalars['Float'];
  Region: Scalars['String'];
};


export type QueryDescribeCensArgs = {
  MaxResults?: InputMaybe<Scalars['Float']>;
  Region: Scalars['String'];
};


export type QueryDescribeClustersArgs = {
  Region?: InputMaybe<Scalars['String']>;
  ServiceMeshId?: InputMaybe<Scalars['String']>;
};


export type QueryDescribeCompareArgs = {
  maxResults?: InputMaybe<Scalars['Float']>;
  nextToken?: InputMaybe<Scalars['Float']>;
};


export type QueryDescribeDBsArgs = {
  business: Scalars['String'];
  maxResults?: InputMaybe<Scalars['Float']>;
  nextToken?: InputMaybe<Scalars['Float']>;
};


export type QueryDescribeDataGuardGroupArgs = {
  Region: Scalars['String'];
};


export type QueryDescribeDcGatewayRoutesArgs = {
  CenId: Scalars['String'];
  GrantAccountId?: InputMaybe<Scalars['String']>;
  InstanceRegion: Scalars['String'];
  InstanceType: Scalars['String'];
  NetworkInstanceId: Scalars['String'];
  NotSearchCenRoute?: InputMaybe<Scalars['Boolean']>;
  Region: Scalars['String'];
};


export type QueryDescribeDemoArgs = {
  Region: Scalars['String'];
};


export type QueryDescribeEbsPerfQuotasArgs = {
  Region: Scalars['String'];
  VolumeTypes: Array<Scalars['String']>;
};


export type QueryDescribeEntrySnapshotsArgs = {
  Region: Scalars['String'];
};


export type QueryDescribeEpcTypesArgs = {
  Region: Scalars['String'];
};


export type QueryDescribeEpcsArgs = {
  MaxResults?: InputMaybe<Scalars['Float']>;
  NextToken?: InputMaybe<Scalars['Float']>;
  Projects?: InputMaybe<Array<Scalars['Float']>>;
  Region: Scalars['String'];
};


export type QueryDescribeGlobalNamespaceArgs = {
  Page?: InputMaybe<Scalars['Float']>;
  PageSize?: InputMaybe<Scalars['Float']>;
  Region?: InputMaybe<Scalars['String']>;
  ServiceMeshId?: InputMaybe<Scalars['String']>;
};


export type QueryDescribeGlobalScopeSidecarConfigArgs = {
  Region?: InputMaybe<Scalars['String']>;
  ServiceMeshId?: InputMaybe<Scalars['String']>;
};


export type QueryDescribeGpuImageDriverArgs = {
  HostType: Scalars['String'];
  ImageId: Scalars['String'];
  MaxResults: Scalars['Float'];
  Region: Scalars['String'];
};


export type QueryDescribeGrantDirectConnectGatewaysArgs = {
  CenId: Scalars['String'];
  MaxResults?: InputMaybe<Scalars['Float']>;
  Region: Scalars['String'];
  grantAccountId?: InputMaybe<Scalars['String']>;
};


export type QueryDescribeGrantVpcsArgs = {
  CenId: Scalars['String'];
  MaxResults?: InputMaybe<Scalars['Float']>;
  Region: Scalars['String'];
  grantAccountId?: InputMaybe<Scalars['String']>;
};


export type QueryDescribeHostTypesArgs = {
  business: Scalars['String'];
  maxResults?: InputMaybe<Scalars['Float']>;
  nextToken?: InputMaybe<Scalars['Float']>;
};


export type QueryDescribeImageRepositoryArgs = {
  ImageType: Scalars['String'];
  Keyword?: InputMaybe<Scalars['String']>;
  Page: Scalars['Float'];
  PageSize: Scalars['Float'];
  Region: Scalars['String'];
};


export type QueryDescribeImagesArgs = {
  Filter1Value1?: InputMaybe<Scalars['String']>;
  Filter2Value1?: InputMaybe<Scalars['String']>;
  MaxResults: Scalars['Float'];
  NextToken: Scalars['Float'];
  Region: Scalars['String'];
};


export type QueryDescribeImagesShareArgs = {
  ImageType?: InputMaybe<Scalars['String']>;
  Region: Scalars['String'];
};


export type QueryDescribeInstanceGroupCountArgs = {
  ProjectIds: Scalars['String'];
  Region: Scalars['String'];
};


export type QueryDescribeInterAreasArgs = {
  Region: Scalars['String'];
};


export type QueryDescribeInterRegionsArgs = {
  InterAreaId?: InputMaybe<Scalars['String']>;
  Region: Scalars['String'];
};


export type QueryDescribeIstioGatewayArgs = {
  IstioGatewayName?: InputMaybe<Scalars['String']>;
  Region?: InputMaybe<Scalars['String']>;
  ServiceMeshId?: InputMaybe<Scalars['String']>;
};


export type QueryDescribeJobStatusDataArgs = {
  Region: Scalars['String'];
};


export type QueryDescribeKbhArgs = {
  InstanceId: Scalars['String'];
  Region: Scalars['String'];
};


export type QueryDescribeKciPackagesArgs = {
  AvailabilityZone: Scalars['String'];
  BillType: Scalars['Float'];
  KciType: Scalars['String'];
  Region: Scalars['String'];
};


export type QueryDescribeKciSecurityGroupsArgs = {
  Region: Scalars['String'];
  VpcId: Scalars['String'];
};


export type QueryDescribeKciServiceStatusArgs = {
  Region: Scalars['String'];
};


export type QueryDescribeKciSnapshotsArgs = {
  Page: Scalars['Float'];
  PageSize: Scalars['Float'];
  Region: Scalars['String'];
  SnapshotId?: InputMaybe<Scalars['String']>;
  SnapshotName?: InputMaybe<Scalars['String']>;
  VolumeId?: InputMaybe<Scalars['String']>;
};


export type QueryDescribeKeadMinRateArgs = {
  Region: Scalars['String'];
};


export type QueryDescribeKecIamRolesArgs = {
  Region: Scalars['String'];
};


export type QueryDescribeKecImagesArgs = {
  ImageType?: InputMaybe<Scalars['String']>;
  Region: Scalars['String'];
};


export type QueryDescribeKeysArgs = {
  MaxResults?: InputMaybe<Scalars['Float']>;
  Region: Scalars['String'];
};


export type QueryDescribeLoadBalancersArgs = {
  IamProjectId?: InputMaybe<Scalars['String']>;
  MaxResults?: InputMaybe<Scalars['Float']>;
  Region: Scalars['String'];
};


export type QueryDescribeLocalVolumeSnapshotsArgs = {
  LocalVolumeCategory?: InputMaybe<Scalars['String']>;
  Marker: Scalars['Float'];
  MaxResults: Scalars['Float'];
  Region: Scalars['String'];
  Search?: InputMaybe<Scalars['String']>;
  localVolumeSnapshotId?: InputMaybe<Scalars['String']>;
};


export type QueryDescribeMarketImageCategoriesArgs = {
  Region: Scalars['String'];
};


export type QueryDescribeMarketImagesArgs = {
  Region: Scalars['String'];
  marketCategory: Scalars['Float'];
  pageNo: Scalars['Float'];
  pageSize: Scalars['Float'];
  regionCode: Scalars['String'];
};


export type QueryDescribeModelsArgs = {
  ModelIds: Array<Scalars['String']>;
  Region?: InputMaybe<Scalars['String']>;
};


export type QueryDescribeNetworkInstancesArgs = {
  CenId: Scalars['String'];
  MaxResults: Scalars['Float'];
  Region: Scalars['String'];
};


export type QueryDescribePriceSystemOfCenArgs = {
  Region: Scalars['String'];
  operate_type: Scalars['Float'];
};


export type QueryDescribePrivateIpAttributesArgs = {
  Region: Scalars['String'];
  SubnetId: Scalars['String'];
};


export type QueryDescribeProductSellOutsArgs = {
  AvailabilityZone: Scalars['String'];
  ProductType: Scalars['Float'];
  Region: Scalars['String'];
};


export type QueryDescribeQuotaByNameArgs = {
  QuotaName: Scalars['String'];
  Region: Scalars['String'];
};


export type QueryDescribeQuotaInfoByQuotaNameArgs = {
  QuotaName: Scalars['String'];
  Region: Scalars['String'];
};


export type QueryDescribeResourceQuotaArgs = {
  Region: Scalars['String'];
};


export type QueryDescribeRoutesArgs = {
  Filter1Value1?: InputMaybe<Scalars['String']>;
  MaxResults?: InputMaybe<Scalars['Float']>;
  Region: Scalars['String'];
  grantAccountId?: InputMaybe<Scalars['String']>;
};


export type QueryDescribeSecurityGroupsArgs = {
  Region: Scalars['String'];
  VpcId: Scalars['String'];
};


export type QueryDescribeSecurityGroupsQuotaArgs = {
  Region: Scalars['String'];
};


export type QueryDescribeServiceMeshAvailableClustersArgs = {
  Region?: InputMaybe<Scalars['String']>;
  ServiceMeshId?: InputMaybe<Scalars['String']>;
};


export type QueryDescribeServiceMeshLogArgs = {
  Region?: InputMaybe<Scalars['String']>;
  ServiceMeshId?: InputMaybe<Scalars['String']>;
};


export type QueryDescribeServiceMeshesArgs = {
  Page?: InputMaybe<Scalars['Float']>;
  PageSize?: InputMaybe<Scalars['Float']>;
  Region?: InputMaybe<Scalars['String']>;
  ServiceMeshId?: InputMaybe<Scalars['String']>;
  ServiceMeshName?: InputMaybe<Scalars['String']>;
};


export type QueryDescribeShareImageArgs = {
  MaxResults: Scalars['Float'];
  NextToken: Scalars['Float'];
  Region: Scalars['String'];
};


export type QueryDescribeSnapshotServiceStatusArgs = {
  Region: Scalars['String'];
};


export type QueryDescribeSnapshotsArgs = {
  PageNumber: Scalars['Float'];
  PageSize: Scalars['Float'];
  Region: Scalars['String'];
  SnapshotId?: InputMaybe<Scalars['String']>;
  SnapshotIds?: InputMaybe<Array<Scalars['String']>>;
  SnapshotName?: InputMaybe<Scalars['String']>;
  VolumeCategory?: InputMaybe<Scalars['String']>;
  VolumeMultiTypes?: InputMaybe<Array<Scalars['String']>>;
};


export type QueryDescribeSnapshotsBatchArgs = {
  PageNumber: Scalars['Float'];
  PageSize: Scalars['Float'];
  Region: Scalars['String'];
  SnapshotId?: InputMaybe<Scalars['String']>;
  SnapshotIds?: InputMaybe<Array<Scalars['String']>>;
  SnapshotName?: InputMaybe<Scalars['String']>;
  VolumeCategory?: InputMaybe<Scalars['String']>;
  VolumeMultiTypes?: InputMaybe<Array<Scalars['String']>>;
};


export type QueryDescribeStockSizesArgs = {
  AvailabilityZone: Scalars['String'];
  Region: Scalars['String'];
};


export type QueryDescribeSubnetAllocatedIpAddressesArgs = {
  Region: Scalars['String'];
  subnetId: Scalars['String'];
};


export type QueryDescribeSubnetsArgs = {
  Filters?: InputMaybe<Array<Filter>>;
  FromPhysical?: InputMaybe<Scalars['Boolean']>;
  Region: Scalars['String'];
};


export type QueryDescribeTagArgs = {
  Region: Scalars['String'];
  RepoName: Scalars['String'];
};


export type QueryDescribeTagKeysArgs = {
  Region: Scalars['String'];
  maxResults: Scalars['Float'];
  resourceType: Scalars['String'];
};


export type QueryDescribeTagKeysV2Args = {
  Region: Scalars['String'];
  ResourceType: Scalars['String'];
  maxResults: Scalars['Float'];
  nextToken?: InputMaybe<Scalars['Float']>;
};


export type QueryDescribeTagValuesArgs = {
  Region: Scalars['String'];
  maxResults: Scalars['Float'];
  resourceType: Scalars['String'];
  tagKey: Scalars['String'];
};


export type QueryDescribeTagValuesV2Args = {
  Region: Scalars['String'];
  maxResults: Scalars['Float'];
  nextToken?: InputMaybe<Scalars['Float']>;
  tagKey: Scalars['String'];
};


export type QueryDescribeVolumesArgs = {
  AvailabilityZone?: InputMaybe<Scalars['String']>;
  Page: Scalars['Float'];
  PageSize: Scalars['Float'];
  Region: Scalars['String'];
  VolumeId?: InputMaybe<Scalars['String']>;
};


export type QueryDescribeVpcInfosArgs = {
  Region: Scalars['String'];
};


export type QueryDescribeVpcRoutesArgs = {
  CenId: Scalars['String'];
  GrantAccountId?: InputMaybe<Scalars['String']>;
  InstanceRegion: Scalars['String'];
  InstanceType: Scalars['String'];
  NetworkInstanceId: Scalars['String'];
  NotSearchCenRoute?: InputMaybe<Scalars['Boolean']>;
  Region: Scalars['String'];
};


export type QueryDescribeVpcsArgs = {
  Region: Scalars['String'];
};


export type QueryDetachResourceTagsV2Args = {
  Region: Scalars['String'];
  resourceTagInfos?: InputMaybe<Array<ResourceTagInfos>>;
  resourceType?: InputMaybe<Scalars['String']>;
};


export type QueryDistributeKmsPermissionArgs = {
  Region: Scalars['String'];
};


export type QueryEditTagsV2Args = {
  NewTags?: InputMaybe<Array<NewTags>>;
  Region: Scalars['String'];
  ReplaceTags?: InputMaybe<Array<ReplaceTags>>;
  ResourceType?: InputMaybe<Scalars['String']>;
};


export type QueryEpcPriceSystemArgs = {
  Product: Scalars['String'];
  Region: Scalars['String'];
};


export type QueryEpcRaidAttributesArgs = {
  HostType: Scalars['String'];
  Region: Scalars['String'];
};


export type QueryEpcTypeConfInfoArgs = {
  ProductTypes?: InputMaybe<Array<Scalars['String']>>;
  Region: Scalars['String'];
};


export type QueryFreeTrialAndAuthArgs = {
  Region: Scalars['String'];
};


export type QueryGetAccountAllProjectListArgs = {
  Region: Scalars['String'];
};


export type QueryGetAccountProjectListArgs = {
  Region: Scalars['String'];
};


export type QueryGetAutoDeleteTimeArgs = {
  Hours: Scalars['Float'];
  Region: Scalars['String'];
};


export type QueryGetCenUserPermissionArgs = {
  Region: Scalars['String'];
};


export type QueryGetFreeTrialWalletArgs = {
  Region: Scalars['String'];
};


export type QueryGetInstanceByIdsArgs = {
  InstanceId: Scalars['String'];
  Region: Scalars['String'];
};


export type QueryGetJobsArgs = {
  EndTime?: InputMaybe<Scalars['Float']>;
  Region: Scalars['String'];
  StartTime?: InputMaybe<Scalars['String']>;
};


export type QueryGetKbhUserPermissionArgs = {
  Region: Scalars['String'];
};


export type QueryGetLinesArgs = {
  Inner: Scalars['Boolean'];
  Region: Scalars['String'];
};


export type QueryGetPortArgs = {
  Classify: Scalars['String'];
  Limit: Scalars['Float'];
  Offset: Scalars['Float'];
  Region: Scalars['String'];
};


export type QueryGetRegionsArgs = {
  Region: Scalars['String'];
  isVpc: Scalars['Boolean'];
  productGroupId: Scalars['Float'];
  type: Scalars['Float'];
};


export type QueryImageConfigArgs = {
  Region: Scalars['String'];
};


export type QueryIsKaArgs = {
  Region: Scalars['String'];
};


export type QueryKbhBatchCalculateProductArgs = {
  HbkProductParam4WebList: Array<HbkProductParam4WebList>;
  Region: Scalars['String'];
};


export type QueryKbhDescribeProductSellOutsArgs = {
  Region: Scalars['String'];
};


export type QueryKbhDescribeSubnetAllocatedIpArgs = {
  Region: Scalars['String'];
  SubnetId: Scalars['String'];
};


export type QueryKbhQuerySubnetAvailableIpCountArgs = {
  Region: Scalars['String'];
  SubnetId: Scalars['String'];
};


export type QueryKciCalculateProductArgs = {
  BillType: Scalars['Float'];
  Duration?: InputMaybe<Scalars['Float']>;
  Items: Array<PropertyItem>;
  ProductType: Scalars['Float'];
  Region: Scalars['String'];
};


export type QueryKciDescribeSubnetsArgs = {
  AvailabilityZone: Scalars['String'];
  Region: Scalars['String'];
  SubnetType: Scalars['String'];
  VpcId: Scalars['String'];
};


export type QueryKciDescribeVpcsArgs = {
  Region: Scalars['String'];
};


export type QueryKciPriceSystemArgs = {
  userId: Scalars['Float'];
};


export type QueryKisDescribeMetricsDataArgs = {
  EndTime: Scalars['Float'];
  Metrics: Array<MetricObject>;
  Period: Scalars['Float'];
  Region: Scalars['String'];
  StartTime: Scalars['Float'];
};


export type QueryKisDescribeScreenArgs = {
  InstanceId: Scalars['String'];
  Name: Scalars['String'];
  ProductType: Scalars['String'];
  Region: Scalars['String'];
};


export type QueryKisGetAccountAllProjectListArgs = {
  Region: Scalars['String'];
};


export type QueryKvmListArgs = {
  Region: Scalars['String'];
};


export type QueryKvmListConditionArgs = {
  Region: Scalars['String'];
};


export type QueryKvmListFilterArgs = {
  Region: Scalars['String'];
  azCode?: InputMaybe<Scalars['String']>;
  billTypeId?: InputMaybe<Scalars['Float']>;
};


export type QueryLangChainAllVpcInfoArgs = {
  Region: Scalars['String'];
  azCode: Scalars['String'];
  subnetType: Scalars['String'];
};


export type QueryLangChainBatchCalculateKvmPriceArgs = {
  Region: Scalars['String'];
  baseParam: BaseParamItem;
  kvmParams: Array<KvmParamItem>;
};


export type QueryLangChainCalculateEipPriceArgs = {
  Region: Scalars['String'];
  eip: EipParamItem;
};


export type QueryLangChainCalculateKvmPriceArgs = {
  Region: Scalars['String'];
  hasQuota: Scalars['Boolean'];
  kvm: KvmParamPriceItem;
};


export type QueryLangChainGetlinesArgs = {
  Region: Scalars['String'];
};


export type QueryLangChainKvmListArgs = {
  Region: Scalars['String'];
};


export type QueryLangChainRegionListArgs = {
  Region: Scalars['String'];
};


export type QueryLangChainSearchInstancesExtendArgs = {
  ImageIds: Array<Scalars['String']>;
  Region: Scalars['String'];
};


export type QueryLangChaincheckMilvusArgs = {
  InstanceId?: InputMaybe<Scalars['String']>;
  Password?: InputMaybe<Scalars['String']>;
  RegionKey?: InputMaybe<Scalars['String']>;
  UserName?: InputMaybe<Scalars['String']>;
};


export type QueryListDeviceFaultArgs = {
  Limit?: InputMaybe<Scalars['Float']>;
  Offset?: InputMaybe<Scalars['Float']>;
  QueryAll?: InputMaybe<Scalars['Float']>;
  Region: Scalars['String'];
  Status?: InputMaybe<Scalars['Float']>;
};


export type QueryListKLogPoolsArgs = {
  ProjectName: Scalars['String'];
  Region: Scalars['String'];
};


export type QueryListKLogProjectsArgs = {
  Region: Scalars['String'];
};


export type QueryListKbhArgs = {
  MaxResults?: InputMaybe<Scalars['Float']>;
  Region: Scalars['String'];
};


export type QueryListPriceRegionsArgs = {
  Region: Scalars['String'];
};


export type QueryListRegionsArgs = {
  Region: Scalars['String'];
};


export type QueryQueryCommonDiscountArgs = {
  AzCodeLimit: Scalars['String'];
  ProductTypeId: Scalars['Float'];
  Region: Scalars['String'];
  SceneLimit: Scalars['String'];
};


export type QueryQueryEipProductGroupsArgs = {
  Region: Scalars['String'];
  productGroupIdList: Scalars['String'];
};


export type QueryQueryFreeTrialWalletArgs = {
  Region: Scalars['String'];
};


export type QueryQueryKfsAllRegionAndCapacityArgs = {
  Region: Scalars['String'];
};


export type QueryQueryOtherPropertyListArgs = {
  Region: Scalars['String'];
  product: Scalars['String'];
};


export type QueryQueryPriceSystemArgs = {
  Region: Scalars['String'];
};


export type QueryQueryProductNetworkInterfaceQuotaArgs = {
  PackageCode: Scalars['String'];
  ProductTypeId: Scalars['Float'];
  Region: Scalars['String'];
};


export type QueryQuerySubnetAvailableAddressesCountArgs = {
  Region: Scalars['String'];
  subnetId: Scalars['String'];
};


export type QueryQueryUserSpecialDiscountsArgs = {
  ProductTypes: Scalars['String'];
  Region: Scalars['String'];
};


export type QueryRegionInfosArgs = {
  Region: Scalars['String'];
};


export type QueryRegisteredCheckArgs = {
  Region: Scalars['String'];
};


export type QueryValidWhitelistArgs = {
  Region: Scalars['String'];
  ValidateKey: Scalars['String'];
};


export type QueryValidateAutoSnapshotArgs = {
  Region: Scalars['String'];
  isVpc: Scalars['String'];
};


export type QueryValidateIpv6SupportArgs = {
  Region: Scalars['String'];
};


export type QueryFileSystemsArgs = {
  Filter?: InputMaybe<Array<Filter>>;
  Marker?: InputMaybe<Scalars['Int']>;
  MaxResults?: InputMaybe<Scalars['Int']>;
  ProjectIds?: InputMaybe<Scalars['String']>;
  Region: Scalars['String'];
};


export type QueryGetMilvusInstanceListArgs = {
  FuzzySearch?: InputMaybe<Scalars['String']>;
  Limit: Scalars['Float'];
  Offset: Scalars['Float'];
  ProductType?: InputMaybe<Scalars['Float']>;
  RegionKey: Scalars['String'];
  SecBindingStatus?: InputMaybe<Scalars['Boolean']>;
};


export type QueryMonitorArgs = {
  EndDateTime?: InputMaybe<Scalars['String']>;
  FileSystemId: Scalars['String'];
  Region: Scalars['String'];
  StartDateTime?: InputMaybe<Scalars['String']>;
};


export type QueryPermissionArgs = {
  Region: Scalars['String'];
};


export type QueryProjectsArgs = {
  Region: Scalars['String'];
};


export type QueryQuotaArgs = {
  QuotaName: Scalars['String'];
  Region: Scalars['String'];
};


export type QueryVpcListArgs = {
  AvailabilityZone: Scalars['String'];
  Region: Scalars['String'];
};

export type QueryFreeTrialWallet = {
  __typename?: 'QueryFreeTrialWallet';
  checkBalance: Scalars['Boolean'];
  data: FreeTrialWalletData;
  request_id: Scalars['String'];
  status: Scalars['Float'];
};

/** 获取云堡垒机价格体系 */
export type QueryPriceSystem = {
  __typename?: 'QueryPriceSystem';
  data?: Maybe<KbhQueryPriceSystemData>;
  errorCode?: Maybe<Scalars['String']>;
  errorMsg?: Maybe<Scalars['String']>;
  requestId?: Maybe<Scalars['String']>;
};

export type Quota = {
  __typename?: 'Quota';
  MAX: Scalars['Int'];
};

export type QuotaItem = {
  __typename?: 'QuotaItem';
  MAX: Scalars['Float'];
  Region?: Maybe<Scalars['String']>;
};

export type QuotaSetInfo = {
  __typename?: 'QuotaSetInfo';
  QuotaSet?: Maybe<Array<QuotaItem>>;
};

/** 查询Raid盘属性 */
export type RaidAttribute = {
  __typename?: 'RaidAttribute';
  EpcRaidAttributeSet?: Maybe<Array<EpcRaidAttribute>>;
};

/** 是否启用Raid模板 */
export type RaidTemplate = {
  __typename?: 'RaidTemplate';
  enableRaidTemplate: Scalars['Boolean'];
};

export type Reasons = {
  __typename?: 'Reasons';
  InstanceId?: Maybe<Scalars['String']>;
  Reason?: Maybe<Scalars['String']>;
};

export type RefundInstances = {
  __typename?: 'RefundInstances';
  Error?: Maybe<Error>;
};

export type Region = {
  __typename?: 'Region';
  areaCode: Scalars['String'];
  areaEnName: Scalars['String'];
  areaName: Scalars['String'];
  azList: Array<Maybe<Zone>>;
  innerCode: Scalars['String'];
  regionCode: Scalars['String'];
  regionEnName: Scalars['String'];
  regionName: Scalars['String'];
  regionType: Scalars['Int'];
};

export type RegionInfos = {
  __typename?: 'RegionInfos';
  data: Array<RestRegionInfos>;
};

export type RegionInfosItem = {
  __typename?: 'RegionInfosItem';
  az_info?: Maybe<Array<AzInfo>>;
  batch_create_vm_num?: Maybe<Scalars['Float']>;
  industryLabel?: Maybe<Scalars['String']>;
  inner_code?: Maybe<Scalars['String']>;
  is_foreign?: Maybe<Scalars['Boolean']>;
  is_vpc?: Maybe<Scalars['Boolean']>;
  ks3?: Maybe<Ks3>;
  region_en_name?: Maybe<Scalars['String']>;
  region_key?: Maybe<Scalars['String']>;
  region_name?: Maybe<Scalars['String']>;
  snapshot_vm_num?: Maybe<Scalars['Float']>;
  vnc?: Maybe<Vnc>;
};

export type RegionListAzList = {
  __typename?: 'RegionListAzList';
  azCode: Scalars['String'];
  azName: Scalars['String'];
};

export type RegionListData = {
  __typename?: 'RegionListData';
  areaCode: Scalars['String'];
  areaEnName: Scalars['String'];
  areaName: Scalars['String'];
  azList?: Maybe<Array<RegionListAzList>>;
  innerCode: Scalars['String'];
  regionCode: Scalars['String'];
  regionEnName: Scalars['String'];
  regionName: Scalars['String'];
  regionType: Scalars['Float'];
};

export type RegionListResult = {
  __typename?: 'RegionListResult';
  code?: Maybe<Scalars['String']>;
  data?: Maybe<Array<RegionSet>>;
};

export type RegionQuota = {
  __typename?: 'RegionQuota';
  rKey: Scalars['String'];
  rValue: Scalars['Float'];
};

export type RegionSet = {
  __typename?: 'RegionSet';
  areaCode?: Maybe<Scalars['String']>;
  areaEnName?: Maybe<Scalars['String']>;
  areaName?: Maybe<Scalars['String']>;
  azList?: Maybe<Array<RegionAzList>>;
  innerCode?: Maybe<Scalars['String']>;
  regionCode?: Maybe<Scalars['String']>;
  regionEnName?: Maybe<Scalars['String']>;
  regionName?: Maybe<Scalars['String']>;
  regionType?: Maybe<Scalars['Float']>;
};

export type RegionsSet = {
  __typename?: 'RegionsSet';
  isVpc?: Maybe<Scalars['Float']>;
  region_code?: Maybe<Scalars['String']>;
  region_name?: Maybe<Scalars['String']>;
};

export type RegisteredCheckResParams = {
  __typename?: 'RegisteredCheckResParams';
  Registered: Scalars['Boolean'];
};

/** 删除集群 */
export type RemoveClusterFromServiceMeshResponse = {
  __typename?: 'RemoveClusterFromServiceMeshResponse';
  Message?: Maybe<Scalars['String']>;
  RemoveResource?: Maybe<Array<RemoveResource>>;
  RequestId?: Maybe<Scalars['String']>;
};

/** 删除命名空间 */
export type RemoveGlobalNamespaceResponse = {
  __typename?: 'RemoveGlobalNamespaceResponse';
  RequestId?: Maybe<Scalars['String']>;
};

export type RemoveResource = {
  __typename?: 'RemoveResource';
  ClusterId?: Maybe<Scalars['String']>;
  ClusterName?: Maybe<Scalars['String']>;
  Resource?: Maybe<Scalars['String']>;
  ResourceName?: Maybe<Scalars['String']>;
};

/** 删除网格实例 */
export type RemoveServiceMeshResponse = {
  __typename?: 'RemoveServiceMeshResponse';
  RequestId?: Maybe<Scalars['String']>;
  ServiceMeshId?: Maybe<Scalars['String']>;
};

export type ReplaceTags = {
  ResourceUuids: Scalars['String'];
  TagIds: Scalars['String'];
};

export type RepositoryItem = {
  __typename?: 'RepositoryItem';
  CreateTime: Scalars['String'];
  Description: Scalars['String'];
  FavorCount: Scalars['String'];
  Public: Scalars['Boolean'];
  PullCount: Scalars['String'];
  RepoName: Scalars['String'];
  RepoType?: Maybe<Scalars['String']>;
};

export type RequestSidecar = {
  __typename?: 'RequestSidecar';
  ResourceCPURequest?: Maybe<Scalars['String']>;
  ResourceMemoryRequest?: Maybe<Scalars['String']>;
};

export type Resource = {
  instanceId?: InputMaybe<Scalars['String']>;
  productType?: InputMaybe<Scalars['String']>;
};

export type ResourceInfo = {
  __typename?: 'ResourceInfo';
  Address?: Maybe<Scalars['String']>;
  CreatedAt?: Maybe<Scalars['String']>;
  Flow?: Maybe<Scalars['String']>;
  Idc: Scalars['String'];
  InstanceId: Scalars['String'];
  IsVpcdb?: Maybe<Scalars['String']>;
  LineClassify?: Maybe<Scalars['String']>;
  LineType?: Maybe<Scalars['String']>;
  Name?: Maybe<Scalars['String']>;
  Project: ProjectInfo;
  Reason?: Maybe<Scalars['String']>;
  ServiceBeginTime?: Maybe<Scalars['String']>;
  ServiceEndTime?: Maybe<Scalars['String']>;
  ServiceStatus?: Maybe<Scalars['String']>;
  SubnetId: Scalars['String'];
  Switch?: Maybe<Array<SwitchInfo>>;
  VpcInstanceId?: Maybe<Scalars['String']>;
};

export type ResourcesItem = {
  __typename?: 'ResourcesItem';
  CU?: Maybe<CuItem>;
};

export type RestImageList = {
  __typename?: 'RestImageList';
  rKey: Scalars['String'];
  rValue: Array<ImagesItem>;
};

export type RestRegionInfos = {
  __typename?: 'RestRegionInfos';
  rKey: Scalars['String'];
  rValue?: Maybe<RegionInfosItem>;
};

/** 创建产品选型与价格对比 */
export type Result = {
  __typename?: 'Result';
  Error?: Maybe<Error>;
  Result?: Maybe<Scalars['Boolean']>;
};

export type ReturnError = {
  __typename?: 'ReturnError';
  Code?: Maybe<Scalars['String']>;
  Message?: Maybe<Scalars['String']>;
};

export type RoceEpcItem = {
  __typename?: 'RoceEpcItem';
  GateWay?: Maybe<Scalars['String']>;
  Ip?: Maybe<Scalars['String']>;
  Mask?: Maybe<Scalars['String']>;
  Type?: Maybe<Scalars['String']>;
};

export type Role = {
  __typename?: 'Role';
  CreateDate?: Maybe<Scalars['String']>;
  Description?: Maybe<Scalars['String']>;
  Krn?: Maybe<Scalars['String']>;
  Path?: Maybe<Scalars['String']>;
  RoleId?: Maybe<Scalars['String']>;
  RoleName?: Maybe<Scalars['String']>;
  ServiceRoleType?: Maybe<Scalars['Float']>;
  TrustAccounts?: Maybe<Scalars['String']>;
  TrustProvider?: Maybe<Scalars['String']>;
  TrustServices?: Maybe<Scalars['String']>;
  TrustType?: Maybe<Scalars['Float']>;
};

export type Roles = {
  __typename?: 'Roles';
  member: Array<Role>;
};

export type RouteSet = {
  __typename?: 'RouteSet';
  CreateTime?: Maybe<Scalars['String']>;
  DestinationCidrBlock?: Maybe<Scalars['String']>;
  NextHopSet?: Maybe<Array<NextHopSet>>;
  RouteId?: Maybe<Scalars['String']>;
  RoutePublishStatus?: Maybe<Scalars['String']>;
  RouteType?: Maybe<Scalars['String']>;
  Status?: Maybe<Scalars['String']>;
  VpcId: Scalars['String'];
};

export type SampleObject = {
  __typename?: 'SampleObject';
  datapoints?: Maybe<Array<DatapointObject>>;
  metric?: Maybe<Scalars['String']>;
  metricDesc?: Maybe<Scalars['String']>;
};

export type SecondaryCidr = {
  __typename?: 'SecondaryCidr';
  Cidr?: Maybe<Scalars['String']>;
  SecondaryCidrId?: Maybe<Scalars['String']>;
  Type?: Maybe<Scalars['String']>;
};

export type SecondaryCidrLangChain = {
  __typename?: 'SecondaryCidrLangChain';
  Cidr?: Maybe<Scalars['String']>;
  SecondaryCidrId?: Maybe<Scalars['String']>;
  Type?: Maybe<Scalars['String']>;
};

export type SecondaryCidrSet = {
  __typename?: 'SecondaryCidrSet';
  Cidr: Scalars['String'];
  SecondaryCidrId: Scalars['String'];
  Type: Scalars['String'];
};

export type SecurityEntry = {
  __typename?: 'SecurityEntry';
  CidrBlock?: Maybe<Scalars['String']>;
  Direction?: Maybe<Scalars['String']>;
  Policy?: Maybe<Scalars['String']>;
  PortRangeFrom?: Maybe<Scalars['Float']>;
  PortRangeTo?: Maybe<Scalars['Float']>;
  Priority?: Maybe<Scalars['Float']>;
  Protocol?: Maybe<Scalars['String']>;
  RuleTag?: Maybe<Scalars['String']>;
  SecurityGroupEntryId?: Maybe<Scalars['String']>;
};

export type SecurityGroup = {
  __typename?: 'SecurityGroup';
  CreateTime: Scalars['String'];
  SecurityGroupEntrySet: Array<Maybe<SecurityGroupEntry>>;
  SecurityGroupId: Scalars['String'];
  SecurityGroupName: Scalars['String'];
  SecurityGroupType: Scalars['String'];
  VpcId?: Maybe<Scalars['String']>;
};

export type SecurityGroupEntry = {
  __typename?: 'SecurityGroupEntry';
  CidrBlock: Scalars['String'];
  Direction: Scalars['String'];
  Protocol: Scalars['String'];
  SecurityGroupEntryId: Scalars['String'];
};

export type SecurityGroupEntryEpcItem = {
  __typename?: 'SecurityGroupEntryEpcItem';
  CidrBlock?: Maybe<Scalars['String']>;
  Description?: Maybe<Scalars['String']>;
  Direction?: Maybe<Scalars['String']>;
  IcmpCode?: Maybe<Scalars['String']>;
  IcmpType?: Maybe<Scalars['String']>;
  PortRangeFrom?: Maybe<Scalars['Float']>;
  PortRangeTo?: Maybe<Scalars['Float']>;
  Protocol?: Maybe<Scalars['String']>;
  SecurityGroupEntryId?: Maybe<Scalars['String']>;
};

export type SecurityGroupEntryKec = {
  __typename?: 'SecurityGroupEntryKec';
  CidrBlock?: Maybe<Scalars['String']>;
  Direction?: Maybe<Scalars['String']>;
  Policy?: Maybe<Scalars['String']>;
  Priority?: Maybe<Scalars['Float']>;
  Protocol?: Maybe<Scalars['String']>;
  RuleTag?: Maybe<Scalars['String']>;
  SecurityGroupEntryId?: Maybe<Scalars['String']>;
};

export type SecurityGroupEntryLangChainVpc = {
  __typename?: 'SecurityGroupEntryLangChainVpc';
  CidrBlock?: Maybe<Scalars['String']>;
  Direction?: Maybe<Scalars['String']>;
  Policy?: Maybe<Scalars['String']>;
  Priority?: Maybe<Scalars['Float']>;
  Protocol?: Maybe<Scalars['String']>;
  RuleTag?: Maybe<Scalars['String']>;
  SecurityGroupEntryId?: Maybe<Scalars['String']>;
};

export type SecurityGroupEpcItem = {
  __typename?: 'SecurityGroupEpcItem';
  CreateTime?: Maybe<Scalars['String']>;
  SecurityGroupEntrySet?: Maybe<Array<SecurityGroupEntryEpcItem>>;
  SecurityGroupId?: Maybe<Scalars['String']>;
  SecurityGroupName?: Maybe<Scalars['String']>;
  SecurityGroupType?: Maybe<Scalars['String']>;
  VpcId?: Maybe<Scalars['String']>;
};

export type SecurityGroupItem = {
  __typename?: 'SecurityGroupItem';
  CreateTime?: Maybe<Scalars['String']>;
  SecurityGroupId?: Maybe<Scalars['String']>;
  SecurityGroupName?: Maybe<Scalars['String']>;
  SecurityGroupType?: Maybe<Scalars['String']>;
  VpcId?: Maybe<Scalars['String']>;
};

export type SecurityGroupKec = {
  __typename?: 'SecurityGroupKec';
  CreateTime?: Maybe<Scalars['String']>;
  SecurityGroupEntrySet?: Maybe<Array<SecurityGroupEntryKec>>;
  SecurityGroupId: Scalars['String'];
  SecurityGroupName?: Maybe<Scalars['String']>;
  SecurityGroupType?: Maybe<Scalars['String']>;
  UserTag?: Maybe<Scalars['String']>;
  VpcId?: Maybe<Scalars['String']>;
};

export type SecurityGroupLangChainVpc = {
  __typename?: 'SecurityGroupLangChainVpc';
  CreateTime?: Maybe<Scalars['String']>;
  SecurityGroupEntrySet?: Maybe<Array<SecurityGroupEntryLangChainVpc>>;
  SecurityGroupId: Scalars['String'];
  SecurityGroupName?: Maybe<Scalars['String']>;
  SecurityGroupType?: Maybe<Scalars['String']>;
  VpcId?: Maybe<Scalars['String']>;
};

export type SecurityGroupSet = {
  __typename?: 'SecurityGroupSet';
  SecurityGroupId?: Maybe<Scalars['String']>;
  SecurityGroupName?: Maybe<Scalars['String']>;
};

export type SecurityGroupSetInfo = {
  __typename?: 'SecurityGroupSetInfo';
  SecurityGroupSet: Array<SecurityItem>;
};

export type SecurityItem = {
  __typename?: 'SecurityItem';
  CreateTime?: Maybe<Scalars['String']>;
  ProductTag?: Maybe<Scalars['String']>;
  SecurityGroupEntrySet: Array<SecurityEntry>;
  SecurityGroupId?: Maybe<Scalars['String']>;
  SecurityGroupName?: Maybe<Scalars['String']>;
  SecurityGroupType?: Maybe<Scalars['String']>;
  UserTag?: Maybe<Scalars['String']>;
  VpcId?: Maybe<Scalars['String']>;
};

export type SelectTag = {
  TagId?: InputMaybe<Scalars['String']>;
  TagKey?: InputMaybe<Scalars['String']>;
  TagValue?: InputMaybe<Scalars['String']>;
};

export type SellRequest = {
  __typename?: 'SellRequest';
  ProductSellOutSet?: Maybe<Array<ProductSellItem>>;
  ProductSellOutSize?: Maybe<Scalars['Float']>;
};

/** 获取集群 */
export type ServiceMeshAvailableClustersResponse = {
  __typename?: 'ServiceMeshAvailableClustersResponse';
  AvailableClusters?: Maybe<Array<Cluster>>;
  NumberOfClusters?: Maybe<Scalars['Float']>;
  Page?: Maybe<Page>;
};

export type ServiceMeshInfo = {
  __typename?: 'ServiceMeshInfo';
  Clusters?: Maybe<Array<Scalars['String']>>;
  CreateTime?: Maybe<Scalars['String']>;
  IstioVersion?: Maybe<Scalars['String']>;
  Log?: Maybe<Scalars['Boolean']>;
  Region?: Maybe<Scalars['String']>;
  ServiceMeshId?: Maybe<Scalars['String']>;
  ServiceMeshName?: Maybe<Scalars['String']>;
  State?: Maybe<Scalars['String']>;
  UpdateTime?: Maybe<Scalars['String']>;
};

/** 获取网格实例日志 */
export type ServiceMeshLogResponse = {
  __typename?: 'ServiceMeshLogResponse';
  Log: Array<Log>;
};

export type ServiceMeshe = {
  __typename?: 'ServiceMeshe';
  ServiceMeshInfo?: Maybe<ServiceMeshInfo>;
};

/** 获取网格实例列表 */
export type ServiceMeshesResponse = {
  __typename?: 'ServiceMeshesResponse';
  Page?: Maybe<Page>;
  ServiceMeshes?: Maybe<Array<ServiceMeshe>>;
};

export type SgDeny = {
  __typename?: 'SgDeny';
  Allow: Scalars['Boolean'];
};

export type SharePermission = {
  __typename?: 'SharePermission';
  ImageId?: Maybe<Scalars['String']>;
  ImageInitialization?: Maybe<Scalars['String']>;
  ImageName?: Maybe<Scalars['String']>;
  Status?: Maybe<Scalars['String']>;
  System?: Maybe<Scalars['String']>;
};

export type SharePermissionInfo = {
  __typename?: 'SharePermissionInfo';
  SharePermissionSet?: Maybe<Array<SharePermission>>;
};

export type SlbTagSet = {
  __typename?: 'SlbTagSet';
  ResourceUuid: Scalars['String'];
  TagId: Scalars['String'];
  TagKey: Scalars['String'];
  TagValue: Scalars['String'];
};

export type SnapshotItem = {
  __typename?: 'SnapshotItem';
  AvailabilityZone: Scalars['String'];
  CreateTime?: Maybe<Scalars['String']>;
  Size: Scalars['Float'];
  SnapshotId: Scalars['String'];
  SnapshotName: Scalars['String'];
  SnapshotStatus: Scalars['String'];
  SnapshotType: Scalars['String'];
  VolumeCategory?: Maybe<Scalars['String']>;
  VolumeId: Scalars['String'];
  VolumeName?: Maybe<Scalars['String']>;
  VolumeStatus?: Maybe<Scalars['String']>;
  VolumeType?: Maybe<Scalars['String']>;
};

export type SnapshotSet = {
  __typename?: 'SnapshotSet';
  DiskSize?: Maybe<Scalars['Float']>;
  DiskType?: Maybe<Scalars['String']>;
  SnapshotId?: Maybe<Scalars['String']>;
  Type?: Maybe<Scalars['String']>;
  VolumeType?: Maybe<Scalars['String']>;
};

export type SnapshotsList = {
  __typename?: 'SnapshotsList';
  AutoSnapshot: Scalars['Boolean'];
  AvailabilityZone: Scalars['String'];
  CopyFrom: Scalars['Boolean'];
  CreateTime: Scalars['String'];
  Encrypted?: Maybe<Scalars['Boolean']>;
  ImageRelated: Scalars['Boolean'];
  Progress: Scalars['String'];
  Size: Scalars['Float'];
  SnapshotId: Scalars['String'];
  SnapshotName: Scalars['String'];
  SnapshotStatus: Scalars['String'];
  SnapshotType: Scalars['String'];
  VolumeCategory: Scalars['String'];
  VolumeId: Scalars['String'];
  VolumeName?: Maybe<Scalars['String']>;
  VolumeStatus: Scalars['String'];
  VolumeType: Scalars['String'];
};

export type SnapshotsPage = {
  __typename?: 'SnapshotsPage';
  totalCount: Scalars['Float'];
  totalPageCount?: Maybe<Scalars['Float']>;
};

export type Stock = {
  __typename?: 'Stock';
  AvailabilityZone?: Maybe<Scalars['String']>;
  Bond?: Maybe<Scalars['Float']>;
  Count?: Maybe<Scalars['Float']>;
  HostType?: Maybe<Scalars['String']>;
  Roce?: Maybe<Scalars['Float']>;
};

export type StockSetInfo = {
  __typename?: 'StockSetInfo';
  StockSet: Array<Stock>;
};

export type StoreageConf = {
  __typename?: 'StoreageConf';
  num: Scalars['String'];
  showName: Scalars['String'];
  size: Scalars['Float'];
  type: Scalars['String'];
  uuid: Scalars['String'];
};

export type Subnet = {
  __typename?: 'Subnet';
  CidrBlock: Scalars['String'];
  CreateTime: Scalars['String'];
  DhcpIpFrom: Scalars['String'];
  DhcpIpTo: Scalars['String'];
  GatewayIp: Scalars['String'];
  ProvidedIpv6CidrBlock: Scalars['Boolean'];
  SubnetId: Scalars['String'];
  SubnetName: Scalars['String'];
  SubnetType: Scalars['String'];
  VpcId: Scalars['String'];
};

export type SubnetAvailableAddressesCount = {
  __typename?: 'SubnetAvailableAddressesCount';
  count: Scalars['Float'];
};

export type SubnetItem = {
  __typename?: 'SubnetItem';
  AvailabilityZoneName?: Maybe<Scalars['String']>;
  AvailableIpNumber?: Maybe<Scalars['String']>;
  AvailbleIPNumber?: Maybe<Scalars['String']>;
  CidrBlock?: Maybe<Scalars['String']>;
  CreateTime?: Maybe<Scalars['String']>;
  DhcpIpFrom?: Maybe<Scalars['String']>;
  DhcpIpTo?: Maybe<Scalars['String']>;
  Dns1?: Maybe<Scalars['String']>;
  Dns2?: Maybe<Scalars['String']>;
  DockerCount?: Maybe<Scalars['String']>;
  GatewayIp?: Maybe<Scalars['String']>;
  InterfaceCount?: Maybe<Scalars['String']>;
  Ipv6CidrBlockAssociationSet?: Maybe<Array<Ipv6CidrBlockAssociation>>;
  PhysicsInterfaceCount?: Maybe<Scalars['String']>;
  ProvidedIpv6CidrBlock?: Maybe<Scalars['Boolean']>;
  RouteTableId?: Maybe<Scalars['String']>;
  SecondaryCidrId?: Maybe<Scalars['String']>;
  SubnetId?: Maybe<Scalars['String']>;
  SubnetName?: Maybe<Scalars['String']>;
  SubnetType?: Maybe<Scalars['String']>;
  VpcId?: Maybe<Scalars['String']>;
};

export type SubnetKec = {
  __typename?: 'SubnetKec';
  AvailabilityZoneName?: Maybe<Scalars['String']>;
  AvailableIpNumber?: Maybe<Scalars['String']>;
  AvailbleIPNumber?: Maybe<Scalars['String']>;
  CidrBlock?: Maybe<Scalars['String']>;
  CreateTime?: Maybe<Scalars['String']>;
  DhcpIpFrom?: Maybe<Scalars['String']>;
  DhcpIpTo?: Maybe<Scalars['String']>;
  Dns1?: Maybe<Scalars['String']>;
  Dns2?: Maybe<Scalars['String']>;
  GatewayIp?: Maybe<Scalars['String']>;
  ProvidedIpv6CidrBlock?: Maybe<Scalars['Boolean']>;
  SubnetId?: Maybe<Scalars['String']>;
  SubnetName?: Maybe<Scalars['String']>;
  SubnetType?: Maybe<Scalars['String']>;
  VpcId?: Maybe<Scalars['String']>;
};

export type SubnetLangChainVpc = {
  __typename?: 'SubnetLangChainVpc';
  AvailabilityZoneName?: Maybe<Scalars['String']>;
  AvailableIpNumber?: Maybe<Scalars['String']>;
  AvailbleIPNumber?: Maybe<Scalars['String']>;
  CidrBlock?: Maybe<Scalars['String']>;
  CreateTime?: Maybe<Scalars['String']>;
  DhcpIpFrom?: Maybe<Scalars['String']>;
  DhcpIpTo?: Maybe<Scalars['String']>;
  Dns1?: Maybe<Scalars['String']>;
  Dns2?: Maybe<Scalars['String']>;
  GatewayIp?: Maybe<Scalars['String']>;
  ProvidedIpv6CidrBlock?: Maybe<Scalars['Boolean']>;
  SubnetId?: Maybe<Scalars['String']>;
  SubnetName?: Maybe<Scalars['String']>;
  SubnetType?: Maybe<Scalars['String']>;
  VpcId?: Maybe<Scalars['String']>;
};

export type SubnetSetInfo = {
  __typename?: 'SubnetSetInfo';
  SubnetSet: Array<SubnetItem>;
};

export type SwitchInfo = {
  __typename?: 'SwitchInfo';
  Port?: Maybe<Scalars['String']>;
};

/** K8s集群命名空间同步至网格 */
export type SynceKasmNamespaceFromK8sClusterResponse = {
  __typename?: 'SynceKASMNamespaceFromK8sClusterResponse';
  RequestId?: Maybe<Scalars['String']>;
};

export type SystemDisk = {
  __typename?: 'SystemDisk';
  DiskSize?: Maybe<Scalars['Float']>;
  DiskType?: Maybe<Scalars['String']>;
};

export type SystemVolume = {
  deleteWithInstance: Scalars['Boolean'];
  size: Scalars['Float'];
  type: Scalars['String'];
};

export type Tag = {
  resourceList?: InputMaybe<Array<Resource>>;
  tagList?: InputMaybe<Array<KvmTagItem>>;
};

export type TagEpcItem = {
  __typename?: 'TagEpcItem';
  Key?: Maybe<Scalars['String']>;
  ResourceId?: Maybe<Scalars['String']>;
  ResourceType?: Maybe<Scalars['String']>;
  Value?: Maybe<Scalars['String']>;
};

export type TagItem = {
  __typename?: 'TagItem';
  Architecture?: Maybe<Scalars['String']>;
  Author?: Maybe<Scalars['String']>;
  DockerVersion?: Maybe<Scalars['String']>;
  ImageId: Scalars['String'];
  Os?: Maybe<Scalars['String']>;
  SizeByte?: Maybe<Scalars['Float']>;
  TagName: Scalars['String'];
};

export type TagKey = {
  __typename?: 'TagKey';
  Key?: Maybe<Scalars['String']>;
};

export type TagSet = {
  __typename?: 'TagSet';
  ResourceUuid: Scalars['String'];
  TagId: Scalars['String'];
  TagKey?: Maybe<Scalars['String']>;
  TagValue?: Maybe<Scalars['String']>;
};

export type TagValue = {
  __typename?: 'TagValue';
  Key?: Maybe<Scalars['String']>;
  Value?: Maybe<Scalars['String']>;
};

export type TagValues = {
  __typename?: 'TagValues';
  CreateTime?: Maybe<Scalars['String']>;
  Id: Scalars['Float'];
  Key?: Maybe<Scalars['String']>;
  Value?: Maybe<Scalars['String']>;
};

export type TerminateInstancesResult = {
  __typename?: 'TerminateInstancesResult';
  code?: Maybe<Scalars['String']>;
};

export type TrialWallet = {
  __typename?: 'TrialWallet';
  available_credit: Scalars['Float'];
  is_active: Scalars['Boolean'];
  status: Scalars['Boolean'];
  total_credit: Scalars['Float'];
};

/** 解绑堡垒机Eip */
export type UnbindKbhEip = {
  __typename?: 'UnbindKbhEip';
  Error?: Maybe<KbhReturnError>;
  RequestId?: Maybe<Scalars['String']>;
  Res?: Maybe<Scalars['Boolean']>;
};

/** 修改全局Sidecar配置 */
export type UpdateGlobalScopeSidecarConfigResponse = {
  __typename?: 'UpdateGlobalScopeSidecarConfigResponse';
  RequestId?: Maybe<Scalars['String']>;
};

export type UpdateInstanceProjectId = {
  __typename?: 'UpdateInstanceProjectId';
  Result?: Maybe<Scalars['Boolean']>;
};

/** 分配至项目 */
export type UpdateInstancesProjectId = {
  __typename?: 'UpdateInstancesProjectId';
  message?: Maybe<Scalars['String']>;
  requestId?: Maybe<Scalars['String']>;
  result?: Maybe<Scalars['Boolean']>;
};

/** 修改名称 */
export type UpdateSubnetName = {
  __typename?: 'UpdateSubnetName';
  RequestId: Scalars['String'];
  SubnetId?: Maybe<Scalars['String']>;
};

/** 获取命名空间列表 */
export type UpgardeGlobalNamespaceResponse = {
  __typename?: 'UpgardeGlobalNamespaceResponse';
  RequestId?: Maybe<Scalars['String']>;
};

export type UserDataType = {
  __typename?: 'UserDataType';
  available_credit: Scalars['Float'];
};

export type UserDiscountDetail = {
  __typename?: 'UserDiscountDetail';
  orderDiscount: Scalars['Float'];
  orderFullMonth: Scalars['Float'];
};

export type UserDiscountItem = {
  __typename?: 'UserDiscountItem';
  discountDetail: Array<UserDiscountDetail>;
  product_group_code: Scalars['String'];
  product_group_id: Scalars['Float'];
  product_type_code: Scalars['String'];
  product_type_id: Scalars['String'];
};

export type UserDiscountRes = {
  __typename?: 'UserDiscountRes';
  code: Scalars['Float'];
  data?: Maybe<Array<UserDiscountItem>>;
};

export type ValidWhitelist = {
  __typename?: 'ValidWhitelist';
  code: Scalars['Float'];
  validate: Scalars['Boolean'];
};

export type ValidateAutoSnapshot = {
  __typename?: 'ValidateAutoSnapshot';
  AutoSnapshotPolicyInVolumeNum?: Maybe<Scalars['Float']>;
  EbsValidate?: Maybe<Scalars['Boolean']>;
  LocalValidate?: Maybe<Scalars['Boolean']>;
  code: Scalars['Float'];
};

export type ValidateIpv6Support = {
  __typename?: 'ValidateIpv6Support';
  code: Scalars['Float'];
  data: Array<ValidateIpv6SupportData>;
};

export type ValidateIpv6SupportData = {
  __typename?: 'ValidateIpv6SupportData';
  productTypeId: Scalars['String'];
  regions?: Maybe<Array<Scalars['String']>>;
};

export type Vnc = {
  __typename?: 'Vnc';
  vnc_host: Scalars['String'];
  vnc_port: Scalars['Float'];
};

export type Volume = {
  Size: Scalars['Float'];
  volumeType: Scalars['String'];
};

export type VolumeInfoItem = {
  __typename?: 'VolumeInfoItem';
  DataVolumeMaxCount?: Maybe<Scalars['Float']>;
  SameVolumeType?: Maybe<Scalars['Boolean']>;
  SmartCardVersion?: Maybe<Scalars['String']>;
  SupportAllEbs?: Maybe<Scalars['Boolean']>;
  SupportDataVolumeType?: Maybe<Array<VolumeTypeItem>>;
  SupportSystemVolumeType?: Maybe<Array<VolumeTypeItem>>;
};

export type VolumeItem = {
  EBSVolume?: InputMaybe<EbsVolume>;
  NFSVolume?: InputMaybe<NfsVolume>;
  Name: Scalars['String'];
  Type: Scalars['String'];
};

export type VolumeMountItem = {
  MountPath: Scalars['String'];
  Name: Scalars['String'];
  ReadOnly?: InputMaybe<Scalars['Boolean']>;
};

export type VolumeTypeItem = {
  __typename?: 'VolumeTypeItem';
  Code: Scalars['String'];
  EnName: Scalars['String'];
  MaxSize: Scalars['Float'];
  MinSize: Scalars['Float'];
  Name: Scalars['String'];
};

export type Vpc = {
  __typename?: 'Vpc';
  CidrBlock: Scalars['String'];
  CreateTime: Scalars['String'];
  Ipv6CidrBlockAssociationSet: Array<Maybe<Ipv6CidrBlockAssociation>>;
  IsDefault: Scalars['Boolean'];
  ProvidedIpv6CidrBlock: Scalars['Boolean'];
  VpcId: Scalars['String'];
  VpcName: Scalars['String'];
};

export type VpcInfo = {
  __typename?: 'VpcInfo';
  RequestId?: Maybe<Scalars['String']>;
  SecurityGroupSet?: Maybe<Array<SecurityGroupKec>>;
  SubnetSet?: Maybe<Array<SubnetKec>>;
  VpcSet?: Maybe<Array<VpcKec>>;
};

export type VpcItem = {
  __typename?: 'VpcItem';
  CidrBlock?: Maybe<Scalars['String']>;
  CreateTime?: Maybe<Scalars['String']>;
  IsDefault?: Maybe<Scalars['Boolean']>;
  ProvidedIpv6CidrBlock?: Maybe<Scalars['Boolean']>;
  SecondaryCidrSet?: Maybe<Array<SecondaryCidr>>;
  VpcId?: Maybe<Scalars['String']>;
  VpcName?: Maybe<Scalars['String']>;
};

export type VpcKec = {
  __typename?: 'VpcKec';
  CidrBlock?: Maybe<Scalars['String']>;
  CreateTime?: Maybe<Scalars['String']>;
  IsDefault?: Maybe<Scalars['Boolean']>;
  ProductTag: Scalars['String'];
  ProvidedIpv6CidrBlock?: Maybe<Scalars['Boolean']>;
  SecondaryCidrSet?: Maybe<Array<SecondaryCidr>>;
  VpcId: Scalars['String'];
  VpcName?: Maybe<Scalars['String']>;
};

export type VpcLangChain = {
  __typename?: 'VpcLangChain';
  CidrBlock?: Maybe<Scalars['String']>;
  CreateTime?: Maybe<Scalars['String']>;
  IsDefault?: Maybe<Scalars['Boolean']>;
  ProvidedIpv6CidrBlock?: Maybe<Scalars['Boolean']>;
  SecondaryCidrSet?: Maybe<Array<SecondaryCidrLangChain>>;
  VpcId: Scalars['String'];
  VpcName?: Maybe<Scalars['String']>;
};

export type VpcList = {
  __typename?: 'VpcList';
  SecurityGroupSet?: Maybe<Array<Maybe<SecurityGroup>>>;
  SubnetSet?: Maybe<Array<Maybe<Subnet>>>;
  VpcSet?: Maybe<Array<Maybe<Vpc>>>;
};

export type VpcRouteSet = {
  __typename?: 'VpcRouteSet';
  DestinationCidrBlock?: Maybe<Scalars['String']>;
  NextHopSet?: Maybe<Array<NextHopSet>>;
  PublishedStatus?: Maybe<Scalars['Boolean']>;
  RouteId: Scalars['String'];
  RoutePublishStatus?: Maybe<Scalars['String']>;
  RouteType?: Maybe<Scalars['String']>;
  System?: Maybe<Scalars['Boolean']>;
  VpcId: Scalars['String'];
};

export type VpcSet = {
  __typename?: 'VpcSet';
  CenId?: Maybe<Scalars['String']>;
  CidrBlock?: Maybe<Scalars['String']>;
  CreateTime?: Maybe<Scalars['String']>;
  Ipv6CidrBlockAssociationSet?: Maybe<Array<Ipv6CidrBlockAssociationSet>>;
  IsDefault?: Maybe<Scalars['Boolean']>;
  SecondaryCidrSet?: Maybe<Array<SecondaryCidrSet>>;
  VpcId: Scalars['String'];
  VpcName?: Maybe<Scalars['String']>;
};

export type VpcSetInfo = {
  __typename?: 'VpcSetInfo';
  VpcSet?: Maybe<Array<VpcItem>>;
};

export type Zone = {
  __typename?: 'Zone';
  azCode: Scalars['String'];
  azName: Scalars['String'];
};

export type ChangeInstanceNameResult = {
  __typename?: 'changeInstanceNameResult';
  Return?: Maybe<Scalars['Boolean']>;
};

export type LinesObject = {
  __typename?: 'linesObject';
  delay?: Maybe<Scalars['Float']>;
  flags?: Maybe<Scalars['Float']>;
  instance?: Maybe<Scalars['String']>;
  legend?: Maybe<Scalars['String']>;
  lineId?: Maybe<Scalars['Float']>;
  metricKey?: Maybe<Scalars['String']>;
  metricType?: Maybe<Scalars['Float']>;
};

export type PromotionDetails = {
  __typename?: 'promotionDetails';
  orderFullMonth?: Maybe<Scalars['Float']>;
  orderReduceDiscount?: Maybe<Scalars['Float']>;
};

export type RegionAzList = {
  __typename?: 'regionAzList';
  azCode?: Maybe<Scalars['String']>;
  azName?: Maybe<Scalars['String']>;
};

export type ResourceTagInfos = {
  resourceUuids: Scalars['String'];
  tagId: Scalars['String'];
};

export type DescribeDemoQueryVariables = Exact<{
  region: Scalars['String'];
}>;


export type DescribeDemoQuery = { __typename?: 'Query', DescribeDemo: { __typename?: 'DemoSet', DemoItemSet?: Array<{ __typename?: 'DemoItem', Id?: string | null }> | null } };

export type DemoFragment = { __typename?: 'DemoItem', Id?: string | null };

export const DemoFragmentDoc = gql`
    fragment Demo on DemoItem {
  Id
}
    `;
export const DescribeDemoDocument = gql`
    query DescribeDemo($region: String!) {
  DescribeDemo(Region: $region) {
    DemoItemSet {
      ...Demo
    }
  }
}
    ${DemoFragmentDoc}`;

/**
 * __useDescribeDemoQuery__
 *
 * To run a query within a Vue component, call `useDescribeDemoQuery` and pass it any options that fit your needs.
 * When your component renders, `useDescribeDemoQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useDescribeDemoQuery({
 *   region: // value for 'region'
 * });
 */
export function useDescribeDemoQuery(variables: DescribeDemoQueryVariables | VueCompositionApi.Ref<DescribeDemoQueryVariables> | ReactiveFunction<DescribeDemoQueryVariables>, options: VueApolloComposable.UseQueryOptions<DescribeDemoQuery, DescribeDemoQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<DescribeDemoQuery, DescribeDemoQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<DescribeDemoQuery, DescribeDemoQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<DescribeDemoQuery, DescribeDemoQueryVariables>(DescribeDemoDocument, variables, options);
}
export function useDescribeDemoLazyQuery(variables: DescribeDemoQueryVariables | VueCompositionApi.Ref<DescribeDemoQueryVariables> | ReactiveFunction<DescribeDemoQueryVariables>, options: VueApolloComposable.UseQueryOptions<DescribeDemoQuery, DescribeDemoQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<DescribeDemoQuery, DescribeDemoQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<DescribeDemoQuery, DescribeDemoQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<DescribeDemoQuery, DescribeDemoQueryVariables>(DescribeDemoDocument, variables, options);
}
export type DescribeDemoQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<DescribeDemoQuery, DescribeDemoQueryVariables>;