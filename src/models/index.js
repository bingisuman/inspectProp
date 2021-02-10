// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { InspectionOrder, Property, InspectionDetail } = initSchema(schema);

export {
  InspectionOrder,
  Property,
  InspectionDetail
};