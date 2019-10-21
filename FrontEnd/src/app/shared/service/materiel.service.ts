import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Materiel } from '../materiel/materiel';

@Injectable({
  providedIn: 'root'
})
export class MaterielService {

  private apiUrl = "http://localhost:3000" ;
  private materiels : Array<Materiel> = new Array<Materiel>() ;
  
  constructor(private http: HttpClient) {
    
  }

  public getMaterielById(id:number) : Materiel{
    return this.materiels[id] ;
  }

  public addMateriel(materiel : Materiel){
    return this.http.post(this.apiUrl+"/materiels", materiel).toPromise().then(
      (res:any) => {
        return new Materiel(res.id, res.type, res.description, res.nom)
      }
    )
  }

  public getAllMateriels(){
    return this.http.get(this.apiUrl + "/materiels").toPromise().then(
      res => {
        let materiels : Array<Materiel> = new Array<Materiel>() ;
        for(let i in res){
          materiels.push(new Materiel(res[i].id, res[i].type, res[i].description, res[i].nom)) ;
        }
        return materiels ;
      },
      error => {
        console.warn("error : ")
        console.log(error)
        return error ;
      }
    )
  }

  public deleteMateriel(id:number){
    return this.http.delete(this.apiUrl + "/materiels/"+ id).toPromise().then(
      res => {
        return id ;
      },
      error => {
        console.warn("error : ")
        console.log(error)
        return error ;
      }
    )
  }
}
