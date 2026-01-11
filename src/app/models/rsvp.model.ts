export interface RsvpModel {
  id?: number;

  guestName: string;
  presence: 'YES' | 'NO';

  mairie: boolean;
  eglise: boolean;
  vindhonneur: boolean;
  reception: boolean;

  enfants: number;

  vegetarien: boolean;
  halal: boolean;
  casher: boolean;
  sansAllergenes: boolean;

  vehicule: boolean;
  covoiturage: boolean;

  remarque?: string;
  createdAt?: string;
}
