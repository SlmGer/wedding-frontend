export interface AccommodationModel {
  id?: number;
  name: string;
  type: string;
  address: string;
  distance?: string;
  googleMapsUrl: string;
  bookingUrl?: string;
  imageUrl?: string;
  active: boolean;
}
