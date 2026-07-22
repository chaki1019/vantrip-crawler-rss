export type Mesh = {
  code: string;
  bbox: [number, number, number, number];
};

export type Parking = {
  pmSrvcType: string;
  headerCaution: string | null;
  parkName: string;
  media: string;
  offsetX: number;
  pmSrvcFlg: boolean;
  offsetY: number;
  matBukId: number;
  cntLatTd: string;   // 数値として扱うなら number に変更可
  cntLngTd: string;   // 同上
  price: string;
  priceCount: string;
  time: string;
  detailUrl: string;
  headerAdditionalExplanation: string | null;
  parkableCarKbn: string;
  resStatus: string;
};

export type ParkingResponse = {
  status: string;
  value: Parking[];
};

export type Poi = {
  id?: string;
  category: string;
  lat: number;
  lng: number;
  name: string;
  description?: string | null;
  tel?: string | null;
  url?: string | null;
  open_time?: string | null;
  holiday?: string | null;
  price?: string | null;
  toilet?: string | null;
  address?: string | null;
  photos: Array<{
    image: string;
    order_no: number;
  }>
  created_by: string;
  created_at: string;
  modified_by: string;
  modified_at: string;
}

export type BTimesMapPark = {
  id: number
  name: string
  lat: number
  lng: number
  url: string
}

export type PoiImage = {
  id: string
  size: number
  url: string
  blurhash: string
}
