export class Envelope {

    private _topic?: string;
    public get topic(): string|undefined {return this._topic;}
    public set topic(value: string|undefined) {this._topic = value;}

    private _amount?: number;
    public get amount(): number|undefined {return this._amount;}
    public set amount(value: number|undefined) {this._amount = value;}

    private _percentage?: number;
    public get percentage(): number|undefined {return this._percentage;}
    public set percentage(value: number|undefined) {this._percentage = value;}

public constructor(topic: string|undefined = undefined, amount: number|undefined = undefined, percentage: number|undefined = undefined){
    this.topic=topic;
    this.amount=amount;
    this.percentage=percentage
}


}