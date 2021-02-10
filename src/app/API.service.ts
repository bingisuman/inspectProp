/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type CreateInspectionOrderInput = {
  id?: string | null;
  propid: string;
  inspdetid: string;
  status: string;
  inspectionofficer?: string | null;
  inspectionrequestor?: string | null;
  creationTime?: string | null;
  _version?: number | null;
};

export type ModelInspectionOrderConditionInput = {
  propid?: ModelIDInput | null;
  inspdetid?: ModelIDInput | null;
  status?: ModelStringInput | null;
  inspectionofficer?: ModelStringInput | null;
  inspectionrequestor?: ModelStringInput | null;
  creationTime?: ModelStringInput | null;
  and?: Array<ModelInspectionOrderConditionInput | null> | null;
  or?: Array<ModelInspectionOrderConditionInput | null> | null;
  not?: ModelInspectionOrderConditionInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type UpdateInspectionOrderInput = {
  id: string;
  propid?: string | null;
  inspdetid?: string | null;
  status?: string | null;
  inspectionofficer?: string | null;
  inspectionrequestor?: string | null;
  creationTime?: string | null;
  _version?: number | null;
};

export type DeleteInspectionOrderInput = {
  id?: string | null;
  _version?: number | null;
};

export type CreateInspectionDetailInput = {
  id?: string | null;
  curbcomments?: string | null;
  curbrating?: number | null;
  curbtrend?: string | null;
  generalcomments?: string | null;
  inspectiontime?: string | null;
  mechsystemcomments?: string | null;
  mechsystemraing?: number | null;
  mechsystemtrend?: string | null;
  proprating?: number | null;
  sitecomments?: string | null;
  siterating?: number | null;
  sitetrend?: string | null;
  _version?: number | null;
};

export type ModelInspectionDetailConditionInput = {
  curbcomments?: ModelStringInput | null;
  curbrating?: ModelIntInput | null;
  curbtrend?: ModelStringInput | null;
  generalcomments?: ModelStringInput | null;
  inspectiontime?: ModelStringInput | null;
  mechsystemcomments?: ModelStringInput | null;
  mechsystemraing?: ModelIntInput | null;
  mechsystemtrend?: ModelStringInput | null;
  proprating?: ModelIntInput | null;
  sitecomments?: ModelStringInput | null;
  siterating?: ModelIntInput | null;
  sitetrend?: ModelStringInput | null;
  and?: Array<ModelInspectionDetailConditionInput | null> | null;
  or?: Array<ModelInspectionDetailConditionInput | null> | null;
  not?: ModelInspectionDetailConditionInput | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type UpdateInspectionDetailInput = {
  id: string;
  curbcomments?: string | null;
  curbrating?: number | null;
  curbtrend?: string | null;
  generalcomments?: string | null;
  inspectiontime?: string | null;
  mechsystemcomments?: string | null;
  mechsystemraing?: number | null;
  mechsystemtrend?: string | null;
  proprating?: number | null;
  sitecomments?: string | null;
  siterating?: number | null;
  sitetrend?: string | null;
  _version?: number | null;
};

export type DeleteInspectionDetailInput = {
  id?: string | null;
  _version?: number | null;
};

export type CreatePropertyInput = {
  id?: string | null;
  propid: string;
  streetaddress: string;
  city: string;
  state: string;
  zip: number;
  country: string;
  propname: string;
  loannumber?: string | null;
  Orginalupb?: number | null;
  buildingcount?: number | null;
  builtyear?: number | null;
  floorcount?: number | null;
  lender?: string | null;
  _version?: number | null;
};

export type ModelPropertyConditionInput = {
  propid?: ModelIDInput | null;
  streetaddress?: ModelStringInput | null;
  city?: ModelStringInput | null;
  state?: ModelStringInput | null;
  zip?: ModelIntInput | null;
  country?: ModelStringInput | null;
  propname?: ModelStringInput | null;
  loannumber?: ModelStringInput | null;
  Orginalupb?: ModelFloatInput | null;
  buildingcount?: ModelIntInput | null;
  builtyear?: ModelIntInput | null;
  floorcount?: ModelIntInput | null;
  lender?: ModelStringInput | null;
  and?: Array<ModelPropertyConditionInput | null> | null;
  or?: Array<ModelPropertyConditionInput | null> | null;
  not?: ModelPropertyConditionInput | null;
};

export type ModelFloatInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type UpdatePropertyInput = {
  id: string;
  propid?: string | null;
  streetaddress?: string | null;
  city?: string | null;
  state?: string | null;
  zip?: number | null;
  country?: string | null;
  propname?: string | null;
  loannumber?: string | null;
  Orginalupb?: number | null;
  buildingcount?: number | null;
  builtyear?: number | null;
  floorcount?: number | null;
  lender?: string | null;
  _version?: number | null;
};

export type DeletePropertyInput = {
  id?: string | null;
  _version?: number | null;
};

export type ModelInspectionOrderFilterInput = {
  id?: ModelIDInput | null;
  propid?: ModelIDInput | null;
  inspdetid?: ModelIDInput | null;
  status?: ModelStringInput | null;
  inspectionofficer?: ModelStringInput | null;
  inspectionrequestor?: ModelStringInput | null;
  creationTime?: ModelStringInput | null;
  and?: Array<ModelInspectionOrderFilterInput | null> | null;
  or?: Array<ModelInspectionOrderFilterInput | null> | null;
  not?: ModelInspectionOrderFilterInput | null;
};

export type ModelInspectionDetailFilterInput = {
  id?: ModelIDInput | null;
  curbcomments?: ModelStringInput | null;
  curbrating?: ModelIntInput | null;
  curbtrend?: ModelStringInput | null;
  generalcomments?: ModelStringInput | null;
  inspectiontime?: ModelStringInput | null;
  mechsystemcomments?: ModelStringInput | null;
  mechsystemraing?: ModelIntInput | null;
  mechsystemtrend?: ModelStringInput | null;
  proprating?: ModelIntInput | null;
  sitecomments?: ModelStringInput | null;
  siterating?: ModelIntInput | null;
  sitetrend?: ModelStringInput | null;
  and?: Array<ModelInspectionDetailFilterInput | null> | null;
  or?: Array<ModelInspectionDetailFilterInput | null> | null;
  not?: ModelInspectionDetailFilterInput | null;
};

export type ModelPropertyFilterInput = {
  id?: ModelIDInput | null;
  propid?: ModelIDInput | null;
  streetaddress?: ModelStringInput | null;
  city?: ModelStringInput | null;
  state?: ModelStringInput | null;
  zip?: ModelIntInput | null;
  country?: ModelStringInput | null;
  propname?: ModelStringInput | null;
  loannumber?: ModelStringInput | null;
  Orginalupb?: ModelFloatInput | null;
  buildingcount?: ModelIntInput | null;
  builtyear?: ModelIntInput | null;
  floorcount?: ModelIntInput | null;
  lender?: ModelStringInput | null;
  and?: Array<ModelPropertyFilterInput | null> | null;
  or?: Array<ModelPropertyFilterInput | null> | null;
  not?: ModelPropertyFilterInput | null;
};

export type CreateInspectionOrderMutation = {
  __typename: "InspectionOrder";
  id: string;
  propid: string;
  inspdetid: string;
  status: string;
  inspectionofficer: string | null;
  inspectionrequestor: string | null;
  creationTime: string | null;
  property: {
    __typename: "Property";
    id: string;
    propid: string;
    streetaddress: string;
    city: string;
    state: string;
    zip: number;
    country: string;
    propname: string;
    loannumber: string | null;
    Orginalupb: number | null;
    buildingcount: number | null;
    builtyear: number | null;
    floorcount: number | null;
    lender: string | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null;
  inspectiondetail: {
    __typename: "InspectionDetail";
    id: string;
    curbcomments: string | null;
    curbrating: number | null;
    curbtrend: string | null;
    generalcomments: string | null;
    inspectiontime: string | null;
    mechsystemcomments: string | null;
    mechsystemraing: number | null;
    mechsystemtrend: string | null;
    proprating: number | null;
    sitecomments: string | null;
    siterating: number | null;
    sitetrend: string | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type UpdateInspectionOrderMutation = {
  __typename: "InspectionOrder";
  id: string;
  propid: string;
  inspdetid: string;
  status: string;
  inspectionofficer: string | null;
  inspectionrequestor: string | null;
  creationTime: string | null;
  property: {
    __typename: "Property";
    id: string;
    propid: string;
    streetaddress: string;
    city: string;
    state: string;
    zip: number;
    country: string;
    propname: string;
    loannumber: string | null;
    Orginalupb: number | null;
    buildingcount: number | null;
    builtyear: number | null;
    floorcount: number | null;
    lender: string | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null;
  inspectiondetail: {
    __typename: "InspectionDetail";
    id: string;
    curbcomments: string | null;
    curbrating: number | null;
    curbtrend: string | null;
    generalcomments: string | null;
    inspectiontime: string | null;
    mechsystemcomments: string | null;
    mechsystemraing: number | null;
    mechsystemtrend: string | null;
    proprating: number | null;
    sitecomments: string | null;
    siterating: number | null;
    sitetrend: string | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type DeleteInspectionOrderMutation = {
  __typename: "InspectionOrder";
  id: string;
  propid: string;
  inspdetid: string;
  status: string;
  inspectionofficer: string | null;
  inspectionrequestor: string | null;
  creationTime: string | null;
  property: {
    __typename: "Property";
    id: string;
    propid: string;
    streetaddress: string;
    city: string;
    state: string;
    zip: number;
    country: string;
    propname: string;
    loannumber: string | null;
    Orginalupb: number | null;
    buildingcount: number | null;
    builtyear: number | null;
    floorcount: number | null;
    lender: string | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null;
  inspectiondetail: {
    __typename: "InspectionDetail";
    id: string;
    curbcomments: string | null;
    curbrating: number | null;
    curbtrend: string | null;
    generalcomments: string | null;
    inspectiontime: string | null;
    mechsystemcomments: string | null;
    mechsystemraing: number | null;
    mechsystemtrend: string | null;
    proprating: number | null;
    sitecomments: string | null;
    siterating: number | null;
    sitetrend: string | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type CreateInspectionDetailMutation = {
  __typename: "InspectionDetail";
  id: string;
  curbcomments: string | null;
  curbrating: number | null;
  curbtrend: string | null;
  generalcomments: string | null;
  inspectiontime: string | null;
  mechsystemcomments: string | null;
  mechsystemraing: number | null;
  mechsystemtrend: string | null;
  proprating: number | null;
  sitecomments: string | null;
  siterating: number | null;
  sitetrend: string | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type UpdateInspectionDetailMutation = {
  __typename: "InspectionDetail";
  id: string;
  curbcomments: string | null;
  curbrating: number | null;
  curbtrend: string | null;
  generalcomments: string | null;
  inspectiontime: string | null;
  mechsystemcomments: string | null;
  mechsystemraing: number | null;
  mechsystemtrend: string | null;
  proprating: number | null;
  sitecomments: string | null;
  siterating: number | null;
  sitetrend: string | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type DeleteInspectionDetailMutation = {
  __typename: "InspectionDetail";
  id: string;
  curbcomments: string | null;
  curbrating: number | null;
  curbtrend: string | null;
  generalcomments: string | null;
  inspectiontime: string | null;
  mechsystemcomments: string | null;
  mechsystemraing: number | null;
  mechsystemtrend: string | null;
  proprating: number | null;
  sitecomments: string | null;
  siterating: number | null;
  sitetrend: string | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type CreatePropertyMutation = {
  __typename: "Property";
  id: string;
  propid: string;
  streetaddress: string;
  city: string;
  state: string;
  zip: number;
  country: string;
  propname: string;
  loannumber: string | null;
  Orginalupb: number | null;
  buildingcount: number | null;
  builtyear: number | null;
  floorcount: number | null;
  lender: string | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type UpdatePropertyMutation = {
  __typename: "Property";
  id: string;
  propid: string;
  streetaddress: string;
  city: string;
  state: string;
  zip: number;
  country: string;
  propname: string;
  loannumber: string | null;
  Orginalupb: number | null;
  buildingcount: number | null;
  builtyear: number | null;
  floorcount: number | null;
  lender: string | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type DeletePropertyMutation = {
  __typename: "Property";
  id: string;
  propid: string;
  streetaddress: string;
  city: string;
  state: string;
  zip: number;
  country: string;
  propname: string;
  loannumber: string | null;
  Orginalupb: number | null;
  buildingcount: number | null;
  builtyear: number | null;
  floorcount: number | null;
  lender: string | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type SyncInspectionOrdersQuery = {
  __typename: "ModelInspectionOrderConnection";
  items: Array<{
    __typename: "InspectionOrder";
    id: string;
    propid: string;
    inspdetid: string;
    status: string;
    inspectionofficer: string | null;
    inspectionrequestor: string | null;
    creationTime: string | null;
    property: {
      __typename: "Property";
      id: string;
      propid: string;
      streetaddress: string;
      city: string;
      state: string;
      zip: number;
      country: string;
      propname: string;
      loannumber: string | null;
      Orginalupb: number | null;
      buildingcount: number | null;
      builtyear: number | null;
      floorcount: number | null;
      lender: string | null;
      _version: number;
      _deleted: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null;
    inspectiondetail: {
      __typename: "InspectionDetail";
      id: string;
      curbcomments: string | null;
      curbrating: number | null;
      curbtrend: string | null;
      generalcomments: string | null;
      inspectiontime: string | null;
      mechsystemcomments: string | null;
      mechsystemraing: number | null;
      mechsystemtrend: string | null;
      proprating: number | null;
      sitecomments: string | null;
      siterating: number | null;
      sitetrend: string | null;
      _version: number;
      _deleted: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null> | null;
  nextToken: string | null;
  startedAt: number | null;
};

export type GetInspectionOrderQuery = {
  __typename: "InspectionOrder";
  id: string;
  propid: string;
  inspdetid: string;
  status: string;
  inspectionofficer: string | null;
  inspectionrequestor: string | null;
  creationTime: string | null;
  property: {
    __typename: "Property";
    id: string;
    propid: string;
    streetaddress: string;
    city: string;
    state: string;
    zip: number;
    country: string;
    propname: string;
    loannumber: string | null;
    Orginalupb: number | null;
    buildingcount: number | null;
    builtyear: number | null;
    floorcount: number | null;
    lender: string | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null;
  inspectiondetail: {
    __typename: "InspectionDetail";
    id: string;
    curbcomments: string | null;
    curbrating: number | null;
    curbtrend: string | null;
    generalcomments: string | null;
    inspectiontime: string | null;
    mechsystemcomments: string | null;
    mechsystemraing: number | null;
    mechsystemtrend: string | null;
    proprating: number | null;
    sitecomments: string | null;
    siterating: number | null;
    sitetrend: string | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type ListInspectionOrdersQuery = {
  __typename: "ModelInspectionOrderConnection";
  items: Array<{
    __typename: "InspectionOrder";
    id: string;
    propid: string;
    inspdetid: string;
    status: string;
    inspectionofficer: string | null;
    inspectionrequestor: string | null;
    creationTime: string | null;
    property: {
      __typename: "Property";
      id: string;
      propid: string;
      streetaddress: string;
      city: string;
      state: string;
      zip: number;
      country: string;
      propname: string;
      loannumber: string | null;
      Orginalupb: number | null;
      buildingcount: number | null;
      builtyear: number | null;
      floorcount: number | null;
      lender: string | null;
      _version: number;
      _deleted: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null;
    inspectiondetail: {
      __typename: "InspectionDetail";
      id: string;
      curbcomments: string | null;
      curbrating: number | null;
      curbtrend: string | null;
      generalcomments: string | null;
      inspectiontime: string | null;
      mechsystemcomments: string | null;
      mechsystemraing: number | null;
      mechsystemtrend: string | null;
      proprating: number | null;
      sitecomments: string | null;
      siterating: number | null;
      sitetrend: string | null;
      _version: number;
      _deleted: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null> | null;
  nextToken: string | null;
  startedAt: number | null;
};

export type SyncInspectionDetailsQuery = {
  __typename: "ModelInspectionDetailConnection";
  items: Array<{
    __typename: "InspectionDetail";
    id: string;
    curbcomments: string | null;
    curbrating: number | null;
    curbtrend: string | null;
    generalcomments: string | null;
    inspectiontime: string | null;
    mechsystemcomments: string | null;
    mechsystemraing: number | null;
    mechsystemtrend: string | null;
    proprating: number | null;
    sitecomments: string | null;
    siterating: number | null;
    sitetrend: string | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null> | null;
  nextToken: string | null;
  startedAt: number | null;
};

export type GetInspectionDetailQuery = {
  __typename: "InspectionDetail";
  id: string;
  curbcomments: string | null;
  curbrating: number | null;
  curbtrend: string | null;
  generalcomments: string | null;
  inspectiontime: string | null;
  mechsystemcomments: string | null;
  mechsystemraing: number | null;
  mechsystemtrend: string | null;
  proprating: number | null;
  sitecomments: string | null;
  siterating: number | null;
  sitetrend: string | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type ListInspectionDetailsQuery = {
  __typename: "ModelInspectionDetailConnection";
  items: Array<{
    __typename: "InspectionDetail";
    id: string;
    curbcomments: string | null;
    curbrating: number | null;
    curbtrend: string | null;
    generalcomments: string | null;
    inspectiontime: string | null;
    mechsystemcomments: string | null;
    mechsystemraing: number | null;
    mechsystemtrend: string | null;
    proprating: number | null;
    sitecomments: string | null;
    siterating: number | null;
    sitetrend: string | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null> | null;
  nextToken: string | null;
  startedAt: number | null;
};

export type SyncPropertiesQuery = {
  __typename: "ModelPropertyConnection";
  items: Array<{
    __typename: "Property";
    id: string;
    propid: string;
    streetaddress: string;
    city: string;
    state: string;
    zip: number;
    country: string;
    propname: string;
    loannumber: string | null;
    Orginalupb: number | null;
    buildingcount: number | null;
    builtyear: number | null;
    floorcount: number | null;
    lender: string | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
  startedAt: number | null;
};

export type GetPropertyQuery = {
  __typename: "Property";
  id: string;
  propid: string;
  streetaddress: string;
  city: string;
  state: string;
  zip: number;
  country: string;
  propname: string;
  loannumber: string | null;
  Orginalupb: number | null;
  buildingcount: number | null;
  builtyear: number | null;
  floorcount: number | null;
  lender: string | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type ListPropertysQuery = {
  __typename: "ModelPropertyConnection";
  items: Array<{
    __typename: "Property";
    id: string;
    propid: string;
    streetaddress: string;
    city: string;
    state: string;
    zip: number;
    country: string;
    propname: string;
    loannumber: string | null;
    Orginalupb: number | null;
    buildingcount: number | null;
    builtyear: number | null;
    floorcount: number | null;
    lender: string | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
  startedAt: number | null;
};

export type OnCreateInspectionOrderSubscription = {
  __typename: "InspectionOrder";
  id: string;
  propid: string;
  inspdetid: string;
  status: string;
  inspectionofficer: string | null;
  inspectionrequestor: string | null;
  creationTime: string | null;
  property: {
    __typename: "Property";
    id: string;
    propid: string;
    streetaddress: string;
    city: string;
    state: string;
    zip: number;
    country: string;
    propname: string;
    loannumber: string | null;
    Orginalupb: number | null;
    buildingcount: number | null;
    builtyear: number | null;
    floorcount: number | null;
    lender: string | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null;
  inspectiondetail: {
    __typename: "InspectionDetail";
    id: string;
    curbcomments: string | null;
    curbrating: number | null;
    curbtrend: string | null;
    generalcomments: string | null;
    inspectiontime: string | null;
    mechsystemcomments: string | null;
    mechsystemraing: number | null;
    mechsystemtrend: string | null;
    proprating: number | null;
    sitecomments: string | null;
    siterating: number | null;
    sitetrend: string | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type OnUpdateInspectionOrderSubscription = {
  __typename: "InspectionOrder";
  id: string;
  propid: string;
  inspdetid: string;
  status: string;
  inspectionofficer: string | null;
  inspectionrequestor: string | null;
  creationTime: string | null;
  property: {
    __typename: "Property";
    id: string;
    propid: string;
    streetaddress: string;
    city: string;
    state: string;
    zip: number;
    country: string;
    propname: string;
    loannumber: string | null;
    Orginalupb: number | null;
    buildingcount: number | null;
    builtyear: number | null;
    floorcount: number | null;
    lender: string | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null;
  inspectiondetail: {
    __typename: "InspectionDetail";
    id: string;
    curbcomments: string | null;
    curbrating: number | null;
    curbtrend: string | null;
    generalcomments: string | null;
    inspectiontime: string | null;
    mechsystemcomments: string | null;
    mechsystemraing: number | null;
    mechsystemtrend: string | null;
    proprating: number | null;
    sitecomments: string | null;
    siterating: number | null;
    sitetrend: string | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type OnDeleteInspectionOrderSubscription = {
  __typename: "InspectionOrder";
  id: string;
  propid: string;
  inspdetid: string;
  status: string;
  inspectionofficer: string | null;
  inspectionrequestor: string | null;
  creationTime: string | null;
  property: {
    __typename: "Property";
    id: string;
    propid: string;
    streetaddress: string;
    city: string;
    state: string;
    zip: number;
    country: string;
    propname: string;
    loannumber: string | null;
    Orginalupb: number | null;
    buildingcount: number | null;
    builtyear: number | null;
    floorcount: number | null;
    lender: string | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null;
  inspectiondetail: {
    __typename: "InspectionDetail";
    id: string;
    curbcomments: string | null;
    curbrating: number | null;
    curbtrend: string | null;
    generalcomments: string | null;
    inspectiontime: string | null;
    mechsystemcomments: string | null;
    mechsystemraing: number | null;
    mechsystemtrend: string | null;
    proprating: number | null;
    sitecomments: string | null;
    siterating: number | null;
    sitetrend: string | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type OnCreateInspectionDetailSubscription = {
  __typename: "InspectionDetail";
  id: string;
  curbcomments: string | null;
  curbrating: number | null;
  curbtrend: string | null;
  generalcomments: string | null;
  inspectiontime: string | null;
  mechsystemcomments: string | null;
  mechsystemraing: number | null;
  mechsystemtrend: string | null;
  proprating: number | null;
  sitecomments: string | null;
  siterating: number | null;
  sitetrend: string | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type OnUpdateInspectionDetailSubscription = {
  __typename: "InspectionDetail";
  id: string;
  curbcomments: string | null;
  curbrating: number | null;
  curbtrend: string | null;
  generalcomments: string | null;
  inspectiontime: string | null;
  mechsystemcomments: string | null;
  mechsystemraing: number | null;
  mechsystemtrend: string | null;
  proprating: number | null;
  sitecomments: string | null;
  siterating: number | null;
  sitetrend: string | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type OnDeleteInspectionDetailSubscription = {
  __typename: "InspectionDetail";
  id: string;
  curbcomments: string | null;
  curbrating: number | null;
  curbtrend: string | null;
  generalcomments: string | null;
  inspectiontime: string | null;
  mechsystemcomments: string | null;
  mechsystemraing: number | null;
  mechsystemtrend: string | null;
  proprating: number | null;
  sitecomments: string | null;
  siterating: number | null;
  sitetrend: string | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type OnCreatePropertySubscription = {
  __typename: "Property";
  id: string;
  propid: string;
  streetaddress: string;
  city: string;
  state: string;
  zip: number;
  country: string;
  propname: string;
  loannumber: string | null;
  Orginalupb: number | null;
  buildingcount: number | null;
  builtyear: number | null;
  floorcount: number | null;
  lender: string | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdatePropertySubscription = {
  __typename: "Property";
  id: string;
  propid: string;
  streetaddress: string;
  city: string;
  state: string;
  zip: number;
  country: string;
  propname: string;
  loannumber: string | null;
  Orginalupb: number | null;
  buildingcount: number | null;
  builtyear: number | null;
  floorcount: number | null;
  lender: string | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnDeletePropertySubscription = {
  __typename: "Property";
  id: string;
  propid: string;
  streetaddress: string;
  city: string;
  state: string;
  zip: number;
  country: string;
  propname: string;
  loannumber: string | null;
  Orginalupb: number | null;
  buildingcount: number | null;
  builtyear: number | null;
  floorcount: number | null;
  lender: string | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateInspectionOrder(
    input: CreateInspectionOrderInput,
    condition?: ModelInspectionOrderConditionInput
  ): Promise<CreateInspectionOrderMutation> {
    const statement = `mutation CreateInspectionOrder($input: CreateInspectionOrderInput!, $condition: ModelInspectionOrderConditionInput) {
        createInspectionOrder(input: $input, condition: $condition) {
          __typename
          id
          propid
          inspdetid
          status
          inspectionofficer
          inspectionrequestor
          creationTime
          property {
            __typename
            id
            propid
            streetaddress
            city
            state
            zip
            country
            propname
            loannumber
            Orginalupb
            buildingcount
            builtyear
            floorcount
            lender
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          inspectiondetail {
            __typename
            id
            curbcomments
            curbrating
            curbtrend
            generalcomments
            inspectiontime
            mechsystemcomments
            mechsystemraing
            mechsystemtrend
            proprating
            sitecomments
            siterating
            sitetrend
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            owner
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateInspectionOrderMutation>response.data.createInspectionOrder;
  }
  async UpdateInspectionOrder(
    input: UpdateInspectionOrderInput,
    condition?: ModelInspectionOrderConditionInput
  ): Promise<UpdateInspectionOrderMutation> {
    const statement = `mutation UpdateInspectionOrder($input: UpdateInspectionOrderInput!, $condition: ModelInspectionOrderConditionInput) {
        updateInspectionOrder(input: $input, condition: $condition) {
          __typename
          id
          propid
          inspdetid
          status
          inspectionofficer
          inspectionrequestor
          creationTime
          property {
            __typename
            id
            propid
            streetaddress
            city
            state
            zip
            country
            propname
            loannumber
            Orginalupb
            buildingcount
            builtyear
            floorcount
            lender
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          inspectiondetail {
            __typename
            id
            curbcomments
            curbrating
            curbtrend
            generalcomments
            inspectiontime
            mechsystemcomments
            mechsystemraing
            mechsystemtrend
            proprating
            sitecomments
            siterating
            sitetrend
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            owner
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateInspectionOrderMutation>response.data.updateInspectionOrder;
  }
  async DeleteInspectionOrder(
    input: DeleteInspectionOrderInput,
    condition?: ModelInspectionOrderConditionInput
  ): Promise<DeleteInspectionOrderMutation> {
    const statement = `mutation DeleteInspectionOrder($input: DeleteInspectionOrderInput!, $condition: ModelInspectionOrderConditionInput) {
        deleteInspectionOrder(input: $input, condition: $condition) {
          __typename
          id
          propid
          inspdetid
          status
          inspectionofficer
          inspectionrequestor
          creationTime
          property {
            __typename
            id
            propid
            streetaddress
            city
            state
            zip
            country
            propname
            loannumber
            Orginalupb
            buildingcount
            builtyear
            floorcount
            lender
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          inspectiondetail {
            __typename
            id
            curbcomments
            curbrating
            curbtrend
            generalcomments
            inspectiontime
            mechsystemcomments
            mechsystemraing
            mechsystemtrend
            proprating
            sitecomments
            siterating
            sitetrend
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            owner
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteInspectionOrderMutation>response.data.deleteInspectionOrder;
  }
  async CreateInspectionDetail(
    input: CreateInspectionDetailInput,
    condition?: ModelInspectionDetailConditionInput
  ): Promise<CreateInspectionDetailMutation> {
    const statement = `mutation CreateInspectionDetail($input: CreateInspectionDetailInput!, $condition: ModelInspectionDetailConditionInput) {
        createInspectionDetail(input: $input, condition: $condition) {
          __typename
          id
          curbcomments
          curbrating
          curbtrend
          generalcomments
          inspectiontime
          mechsystemcomments
          mechsystemraing
          mechsystemtrend
          proprating
          sitecomments
          siterating
          sitetrend
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateInspectionDetailMutation>response.data.createInspectionDetail;
  }
  async UpdateInspectionDetail(
    input: UpdateInspectionDetailInput,
    condition?: ModelInspectionDetailConditionInput
  ): Promise<UpdateInspectionDetailMutation> {
    const statement = `mutation UpdateInspectionDetail($input: UpdateInspectionDetailInput!, $condition: ModelInspectionDetailConditionInput) {
        updateInspectionDetail(input: $input, condition: $condition) {
          __typename
          id
          curbcomments
          curbrating
          curbtrend
          generalcomments
          inspectiontime
          mechsystemcomments
          mechsystemraing
          mechsystemtrend
          proprating
          sitecomments
          siterating
          sitetrend
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateInspectionDetailMutation>response.data.updateInspectionDetail;
  }
  async DeleteInspectionDetail(
    input: DeleteInspectionDetailInput,
    condition?: ModelInspectionDetailConditionInput
  ): Promise<DeleteInspectionDetailMutation> {
    const statement = `mutation DeleteInspectionDetail($input: DeleteInspectionDetailInput!, $condition: ModelInspectionDetailConditionInput) {
        deleteInspectionDetail(input: $input, condition: $condition) {
          __typename
          id
          curbcomments
          curbrating
          curbtrend
          generalcomments
          inspectiontime
          mechsystemcomments
          mechsystemraing
          mechsystemtrend
          proprating
          sitecomments
          siterating
          sitetrend
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteInspectionDetailMutation>response.data.deleteInspectionDetail;
  }
  async CreateProperty(
    input: CreatePropertyInput,
    condition?: ModelPropertyConditionInput
  ): Promise<CreatePropertyMutation> {
    const statement = `mutation CreateProperty($input: CreatePropertyInput!, $condition: ModelPropertyConditionInput) {
        createProperty(input: $input, condition: $condition) {
          __typename
          id
          propid
          streetaddress
          city
          state
          zip
          country
          propname
          loannumber
          Orginalupb
          buildingcount
          builtyear
          floorcount
          lender
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreatePropertyMutation>response.data.createProperty;
  }
  async UpdateProperty(
    input: UpdatePropertyInput,
    condition?: ModelPropertyConditionInput
  ): Promise<UpdatePropertyMutation> {
    const statement = `mutation UpdateProperty($input: UpdatePropertyInput!, $condition: ModelPropertyConditionInput) {
        updateProperty(input: $input, condition: $condition) {
          __typename
          id
          propid
          streetaddress
          city
          state
          zip
          country
          propname
          loannumber
          Orginalupb
          buildingcount
          builtyear
          floorcount
          lender
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdatePropertyMutation>response.data.updateProperty;
  }
  async DeleteProperty(
    input: DeletePropertyInput,
    condition?: ModelPropertyConditionInput
  ): Promise<DeletePropertyMutation> {
    const statement = `mutation DeleteProperty($input: DeletePropertyInput!, $condition: ModelPropertyConditionInput) {
        deleteProperty(input: $input, condition: $condition) {
          __typename
          id
          propid
          streetaddress
          city
          state
          zip
          country
          propname
          loannumber
          Orginalupb
          buildingcount
          builtyear
          floorcount
          lender
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeletePropertyMutation>response.data.deleteProperty;
  }
  async SyncInspectionOrders(
    filter?: ModelInspectionOrderFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncInspectionOrdersQuery> {
    const statement = `query SyncInspectionOrders($filter: ModelInspectionOrderFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncInspectionOrders(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            propid
            inspdetid
            status
            inspectionofficer
            inspectionrequestor
            creationTime
            property {
              __typename
              id
              propid
              streetaddress
              city
              state
              zip
              country
              propname
              loannumber
              Orginalupb
              buildingcount
              builtyear
              floorcount
              lender
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            inspectiondetail {
              __typename
              id
              curbcomments
              curbrating
              curbtrend
              generalcomments
              inspectiontime
              mechsystemcomments
              mechsystemraing
              mechsystemtrend
              proprating
              sitecomments
              siterating
              sitetrend
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
              owner
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            owner
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncInspectionOrdersQuery>response.data.syncInspectionOrders;
  }
  async GetInspectionOrder(id: string): Promise<GetInspectionOrderQuery> {
    const statement = `query GetInspectionOrder($id: ID!) {
        getInspectionOrder(id: $id) {
          __typename
          id
          propid
          inspdetid
          status
          inspectionofficer
          inspectionrequestor
          creationTime
          property {
            __typename
            id
            propid
            streetaddress
            city
            state
            zip
            country
            propname
            loannumber
            Orginalupb
            buildingcount
            builtyear
            floorcount
            lender
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          inspectiondetail {
            __typename
            id
            curbcomments
            curbrating
            curbtrend
            generalcomments
            inspectiontime
            mechsystemcomments
            mechsystemraing
            mechsystemtrend
            proprating
            sitecomments
            siterating
            sitetrend
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            owner
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetInspectionOrderQuery>response.data.getInspectionOrder;
  }
  async ListInspectionOrders(
    filter?: ModelInspectionOrderFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListInspectionOrdersQuery> {
    const statement = `query ListInspectionOrders($filter: ModelInspectionOrderFilterInput, $limit: Int, $nextToken: String) {
        listInspectionOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            propid
            inspdetid
            status
            inspectionofficer
            inspectionrequestor
            creationTime
            property {
              __typename
              id
              propid
              streetaddress
              city
              state
              zip
              country
              propname
              loannumber
              Orginalupb
              buildingcount
              builtyear
              floorcount
              lender
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            inspectiondetail {
              __typename
              id
              curbcomments
              curbrating
              curbtrend
              generalcomments
              inspectiontime
              mechsystemcomments
              mechsystemraing
              mechsystemtrend
              proprating
              sitecomments
              siterating
              sitetrend
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
              owner
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            owner
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListInspectionOrdersQuery>response.data.listInspectionOrders;
  }
  async SyncInspectionDetails(
    filter?: ModelInspectionDetailFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncInspectionDetailsQuery> {
    const statement = `query SyncInspectionDetails($filter: ModelInspectionDetailFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncInspectionDetails(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            curbcomments
            curbrating
            curbtrend
            generalcomments
            inspectiontime
            mechsystemcomments
            mechsystemraing
            mechsystemtrend
            proprating
            sitecomments
            siterating
            sitetrend
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            owner
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncInspectionDetailsQuery>response.data.syncInspectionDetails;
  }
  async GetInspectionDetail(id: string): Promise<GetInspectionDetailQuery> {
    const statement = `query GetInspectionDetail($id: ID!) {
        getInspectionDetail(id: $id) {
          __typename
          id
          curbcomments
          curbrating
          curbtrend
          generalcomments
          inspectiontime
          mechsystemcomments
          mechsystemraing
          mechsystemtrend
          proprating
          sitecomments
          siterating
          sitetrend
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetInspectionDetailQuery>response.data.getInspectionDetail;
  }
  async ListInspectionDetails(
    filter?: ModelInspectionDetailFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListInspectionDetailsQuery> {
    const statement = `query ListInspectionDetails($filter: ModelInspectionDetailFilterInput, $limit: Int, $nextToken: String) {
        listInspectionDetails(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            curbcomments
            curbrating
            curbtrend
            generalcomments
            inspectiontime
            mechsystemcomments
            mechsystemraing
            mechsystemtrend
            proprating
            sitecomments
            siterating
            sitetrend
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            owner
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListInspectionDetailsQuery>response.data.listInspectionDetails;
  }
  async SyncProperties(
    filter?: ModelPropertyFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncPropertiesQuery> {
    const statement = `query SyncProperties($filter: ModelPropertyFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncProperties(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            propid
            streetaddress
            city
            state
            zip
            country
            propname
            loannumber
            Orginalupb
            buildingcount
            builtyear
            floorcount
            lender
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncPropertiesQuery>response.data.syncProperties;
  }
  async GetProperty(id: string): Promise<GetPropertyQuery> {
    const statement = `query GetProperty($id: ID!) {
        getProperty(id: $id) {
          __typename
          id
          propid
          streetaddress
          city
          state
          zip
          country
          propname
          loannumber
          Orginalupb
          buildingcount
          builtyear
          floorcount
          lender
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetPropertyQuery>response.data.getProperty;
  }
  async ListPropertys(
    filter?: ModelPropertyFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListPropertysQuery> {
    const statement = `query ListPropertys($filter: ModelPropertyFilterInput, $limit: Int, $nextToken: String) {
        listPropertys(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            propid
            streetaddress
            city
            state
            zip
            country
            propname
            loannumber
            Orginalupb
            buildingcount
            builtyear
            floorcount
            lender
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListPropertysQuery>response.data.listPropertys;
  }
  OnCreateInspectionOrderListener: Observable<
    SubscriptionResponse<OnCreateInspectionOrderSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateInspectionOrder($owner: String!) {
        onCreateInspectionOrder(owner: $owner) {
          __typename
          id
          propid
          inspdetid
          status
          inspectionofficer
          inspectionrequestor
          creationTime
          property {
            __typename
            id
            propid
            streetaddress
            city
            state
            zip
            country
            propname
            loannumber
            Orginalupb
            buildingcount
            builtyear
            floorcount
            lender
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          inspectiondetail {
            __typename
            id
            curbcomments
            curbrating
            curbtrend
            generalcomments
            inspectiontime
            mechsystemcomments
            mechsystemraing
            mechsystemtrend
            proprating
            sitecomments
            siterating
            sitetrend
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            owner
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateInspectionOrderSubscription>>;

  OnUpdateInspectionOrderListener: Observable<
    SubscriptionResponse<OnUpdateInspectionOrderSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateInspectionOrder($owner: String!) {
        onUpdateInspectionOrder(owner: $owner) {
          __typename
          id
          propid
          inspdetid
          status
          inspectionofficer
          inspectionrequestor
          creationTime
          property {
            __typename
            id
            propid
            streetaddress
            city
            state
            zip
            country
            propname
            loannumber
            Orginalupb
            buildingcount
            builtyear
            floorcount
            lender
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          inspectiondetail {
            __typename
            id
            curbcomments
            curbrating
            curbtrend
            generalcomments
            inspectiontime
            mechsystemcomments
            mechsystemraing
            mechsystemtrend
            proprating
            sitecomments
            siterating
            sitetrend
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            owner
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateInspectionOrderSubscription>>;

  OnDeleteInspectionOrderListener: Observable<
    SubscriptionResponse<OnDeleteInspectionOrderSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteInspectionOrder($owner: String!) {
        onDeleteInspectionOrder(owner: $owner) {
          __typename
          id
          propid
          inspdetid
          status
          inspectionofficer
          inspectionrequestor
          creationTime
          property {
            __typename
            id
            propid
            streetaddress
            city
            state
            zip
            country
            propname
            loannumber
            Orginalupb
            buildingcount
            builtyear
            floorcount
            lender
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          inspectiondetail {
            __typename
            id
            curbcomments
            curbrating
            curbtrend
            generalcomments
            inspectiontime
            mechsystemcomments
            mechsystemraing
            mechsystemtrend
            proprating
            sitecomments
            siterating
            sitetrend
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            owner
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteInspectionOrderSubscription>>;

  OnCreateInspectionDetailListener: Observable<
    SubscriptionResponse<OnCreateInspectionDetailSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateInspectionDetail($owner: String!) {
        onCreateInspectionDetail(owner: $owner) {
          __typename
          id
          curbcomments
          curbrating
          curbtrend
          generalcomments
          inspectiontime
          mechsystemcomments
          mechsystemraing
          mechsystemtrend
          proprating
          sitecomments
          siterating
          sitetrend
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateInspectionDetailSubscription>>;

  OnUpdateInspectionDetailListener: Observable<
    SubscriptionResponse<OnUpdateInspectionDetailSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateInspectionDetail($owner: String!) {
        onUpdateInspectionDetail(owner: $owner) {
          __typename
          id
          curbcomments
          curbrating
          curbtrend
          generalcomments
          inspectiontime
          mechsystemcomments
          mechsystemraing
          mechsystemtrend
          proprating
          sitecomments
          siterating
          sitetrend
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateInspectionDetailSubscription>>;

  OnDeleteInspectionDetailListener: Observable<
    SubscriptionResponse<OnDeleteInspectionDetailSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteInspectionDetail($owner: String!) {
        onDeleteInspectionDetail(owner: $owner) {
          __typename
          id
          curbcomments
          curbrating
          curbtrend
          generalcomments
          inspectiontime
          mechsystemcomments
          mechsystemraing
          mechsystemtrend
          proprating
          sitecomments
          siterating
          sitetrend
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteInspectionDetailSubscription>>;

  OnCreatePropertyListener: Observable<
    SubscriptionResponse<OnCreatePropertySubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateProperty {
        onCreateProperty {
          __typename
          id
          propid
          streetaddress
          city
          state
          zip
          country
          propname
          loannumber
          Orginalupb
          buildingcount
          builtyear
          floorcount
          lender
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreatePropertySubscription>>;

  OnUpdatePropertyListener: Observable<
    SubscriptionResponse<OnUpdatePropertySubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateProperty {
        onUpdateProperty {
          __typename
          id
          propid
          streetaddress
          city
          state
          zip
          country
          propname
          loannumber
          Orginalupb
          buildingcount
          builtyear
          floorcount
          lender
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdatePropertySubscription>>;

  OnDeletePropertyListener: Observable<
    SubscriptionResponse<OnDeletePropertySubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteProperty {
        onDeleteProperty {
          __typename
          id
          propid
          streetaddress
          city
          state
          zip
          country
          propname
          loannumber
          Orginalupb
          buildingcount
          builtyear
          floorcount
          lender
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeletePropertySubscription>>;
}
