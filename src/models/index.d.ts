import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class InspectionOrder {
  readonly id: string;
  readonly propid: string;
  readonly inspdetid: string;
  readonly status: string;
  readonly inspectionofficer?: string;
  readonly inspectionrequestor?: string;
  readonly creationTime?: string;
  readonly property?: Property;
  readonly inspectiondetail?: InspectionDetail;
  constructor(init: ModelInit<InspectionOrder>);
  static copyOf(source: InspectionOrder, mutator: (draft: MutableModel<InspectionOrder>) => MutableModel<InspectionOrder> | void): InspectionOrder;
}

export declare class Property {
  readonly id: string;
  readonly propid: string;
  readonly streetaddress: string;
  readonly city: string;
  readonly state: string;
  readonly zip: number;
  readonly country: string;
  readonly propname: string;
  readonly loannumber?: string;
  readonly Orginalupb?: number;
  readonly buildingcount?: number;
  readonly builtyear?: number;
  readonly floorcount?: number;
  readonly lender?: string;
  constructor(init: ModelInit<Property>);
  static copyOf(source: Property, mutator: (draft: MutableModel<Property>) => MutableModel<Property> | void): Property;
}

export declare class InspectionDetail {
  readonly id: string;
  readonly curbcomments?: string;
  readonly curbrating?: number;
  readonly curbtrend?: string;
  readonly generalcomments?: string;
  readonly inspectiontime?: string;
  readonly mechsystemcomments?: string;
  readonly mechsystemraing?: number;
  readonly mechsystemtrend?: string;
  readonly proprating?: number;
  readonly sitecomments?: string;
  readonly siterating?: number;
  readonly sitetrend?: string;
  constructor(init: ModelInit<InspectionDetail>);
  static copyOf(source: InspectionDetail, mutator: (draft: MutableModel<InspectionDetail>) => MutableModel<InspectionDetail> | void): InspectionDetail;
}