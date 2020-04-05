export class User {
    id:number;
    legalName: string; //Nome Cognome o Ragione Sociale
    type: string;
    email: string;
    password: string;
    phoneNumber: number;
    legalNumber: string; //Numero di Iscrizione all'Albo degli Autovettori/Autotrasportatori - Non Obbligatorio
    legalLocation: string; //Sede Legale
    operationsLocation: string; //Sede Operativa
    tin: string; //CF-PIVA
    description: string; //Descrizione Attività - Presentazione (max XX caratteri)

    contContractSend: number;  //1 euro a generazione
    contContractReceive: number;
    availability:boolean;
    product: string[];
    productRequest: string[];

    pay: string; //Corrispettivo Chilometrico EUR/KM
    durationContract: number; //Numero Mesi (min 1) di durata del contratto
    
}

export const TYPE = ['Azienda', 'Privato'];
export const PRODUCT= ['General Cargo','Catena del Freddo','Alimentari','Merci Pericolose','Trasporti Straordinari']