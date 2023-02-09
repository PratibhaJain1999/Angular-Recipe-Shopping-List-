export class recipe {
    name:string;
    description:string;
    imagePath:string;


    constructor(nam:string, desc:string,path:string){
        this.name=nam;
        this.description=desc;
        this.imagePath=path;
    }
}