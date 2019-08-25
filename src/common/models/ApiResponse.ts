export class ApiResponse {
    gamename:string
    price:string
    url:string

    constructor(name:string, price:string,url:string){
        this.gamename = name;
        this.price = price;
        this.url = url;
    }
}