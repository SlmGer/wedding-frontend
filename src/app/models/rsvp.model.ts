export interface RsvpModel {
  id?: number;

  guestName: string;
  enfants: number;
  present: boolean;

  mairie: boolean;
  eglise: boolean;
  vinDHonneur: boolean;
  reception: boolean;

  vegetarien: boolean;
  halal: boolean;
  casher: boolean;
  sansAllergene: boolean;

  vehicule: boolean;
  covoiturage: boolean;

  remarque?: string;
  createdAt?: string;
}
