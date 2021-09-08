export class Country{

  constructor(
    public capitalCity: string,
    public code: string,
    public confirmed:string,
    public country: string,
    public critical: number,
    public deaths: number,
    public lifeExpectancy: number,
    public lastChange: Date,
    public lastUpdate: Date,
    public location: string,
    public population: number,
    public recovered: number
  ){}

}