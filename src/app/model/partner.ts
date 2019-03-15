import { Specialite } from './specialite';
import { Domaine } from './domain';

export class Partner{
    name: string; 
    forname: string ;
    description: string ; 
    numero: number;
    mail : string;
    etoile: number[];
    domain : Domaine;
    specialite: Specialite;
}