import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExtractionDonneesService {

   urlPart:string ="http://localhost:8081/tomcat/"
  constructor(private httpExtractionDonnee:HttpClient) { }

    getDataExtractionForOccurenceAndDates(id:string)  {
    return this.httpExtractionDonnee.get(this.urlPart+"server/serverDate/" +id)
  }


}
