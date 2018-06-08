import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import 'rxjs';
import {Observable} from "rxjs";



@Injectable()
export class CountryService
{

   constructor(private http:Http)
   {

   }


   getCountryNames():Observable<any>
   {
       return this.http.get("https://restcountries.eu/rest/v2/all")
       .flatMap((data)=>data.json())
       .catch((error: any) => Observable
       .throw(error.json().error || 'Server error'));
   }


   

}