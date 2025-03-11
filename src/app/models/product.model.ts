export interface ProductData {
    price?: number;
    color?: string;
    capacity?: string;
    "capacity gb"?: number;
    year?: number;
    generation?: string;
    "cpu model"?: string;
    "hard disk size"?: string;
    "strap color"?: string;
    "case size"?: string;
    description?: string;
    "screen size"?: number;
}

export interface Product
{
    id: string;
    name: string;
    data: ProductData | null;
}
