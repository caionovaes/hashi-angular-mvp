import { GtmProperties } from './gtm-properties.model';
export class GtmEvent {

  constructor(public action: string, public properties: GtmProperties) {
  }

}
