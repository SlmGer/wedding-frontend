export interface RsvpModel {
  id?: number;

  guestName: string;
  enfants: number;
  present: 'YES' | 'NO';

  mairie: boolean;
  eglise: boolean;
  vindhonneur: boolean;
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
