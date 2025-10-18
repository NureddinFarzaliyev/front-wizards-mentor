export interface Result {
  xid: string;
  name: string;
  country: string;
  lat: number;
  lon: number;
}

export interface Place {
  properties: {
    name: string;
    rate: number;
    kinds: string;
  };
}

export interface SuggestedPlace {
  properties: {
    name: string;
    rate: number;
    kinds: string;
  };
}
