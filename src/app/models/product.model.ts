export interface Product
{
    "id": string;
    "name": string;
    "data": {
        "price": number;
        "color": string;
    } | null;
}
