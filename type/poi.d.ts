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
