export class Quotes {
    showDescription:boolean;
    constructor(public id:number,public author:string, public name:string,public submitter:string, public completeDate:Date){
        this.showDescription=false;
    }
    
   
}
