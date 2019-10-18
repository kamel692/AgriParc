import { Injectable } from '@angular/core';
import { Stat } from '../stat/stat';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatService {

  private apiUrl = "http://localhost:3000" ;
  private stats : Array<Stat> = new Array<Stat>() ;
  
  constructor(private http: HttpClient) {
    
  }

  public getStatById(id:number) : Stat{
    return this.stats[id] ;
  }

  public addStat(stat : Stat){
    return this.http.post(this.apiUrl+"/stats", stat).toPromise().then(
      (res:any) => {
        return new Stat(res.id, res.title, res.value, res.icon)
      }
    )
  }

  public getAllStats(){
    return this.http.get(this.apiUrl + "/stats").toPromise().then(
      res => {
        let stats : Array<Stat> = new Array<Stat>() ;
        console.warn("success : ")
        console.log(res) ;
        for(let i in res){
          stats.push(new Stat(res[i].id, res[i].title, res[i].value, res[i].icon)) ;
        }
        return stats ;
      },
      error => {
        console.warn("error : ")
        console.log(error)
        return error ;
      }
    )
  }
}
