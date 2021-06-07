export interface CardPayment{
    id:number;
    customerId:number;
    nameSurname:string;
    cardNumber:string;
    expirationMonth:number;
    expirationYear:number;
    cvv:number;
    cardType:string;
    cardLimit:number;
}