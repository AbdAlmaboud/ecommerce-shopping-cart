import { Product } from "./product";

export class CartItem {
    public id !: string;
    public name !: string;
    public imageUrl !: string;
    public unitPrice !: number;
    public quantity !: number;

    constructor(protect : Product){
        this.id = protect.id;
        this.name = protect.name;
        this.imageUrl = protect.imageUrl;
        this.unitPrice = protect.unitPrice;
        this.quantity = 1;
    }

}
