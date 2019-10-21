import { Component, OnInit, HostListener, NgModule, SystemJsNgModuleLoader } from '@angular/core';
import Chart from 'chart.js';
import { MyComponentComponent } from 'app/shared/my-component/my-component.component';
import { MaterielService } from 'app/shared/service/materiel.service';
import { FormBuilder } from '@angular/forms';
import { Materiel } from 'app/shared/materiel/materiel';


@Component({
  selector: 'dashboard-cmp',
  moduleId: module.id,
  templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit {

  public canvas: any;
  public ctx;
  public chartColor;
  public chartEmail;
  public chartHours;
  public revenueValue : number ;
  public componentCreationForm ;

  public afficherStatistique : boolean;

  public componentArray : Array<MyComponentComponent> ;

  constructor(private materielService:MaterielService, private formBuilder : FormBuilder){

  }
  
  ngOnInit() {
    this.componentCreationForm = this.formBuilder.group({
      type:'',
      description:'',
      nom:''
    })

    this.chartColor = "#FFFFFF";
    this.revenueValue = 1500.25 ;
    this.afficherStatistique = true ;

    this.componentArray = new Array<MyComponentComponent>() ;

    this.getAllMateriels() ;
  
  }

  private getComponentFromMateriel(mat: Materiel) {
    let component: MyComponentComponent;
    component = new MyComponentComponent();
    component.id = mat.id;
    component.type = mat.type;
    component.nom = mat.nom;
    component.description = mat.description;
    return component;
  }

  getAllMateriels(){
    this.materielService.getAllMateriels()
    .then(datas => {
      this.componentArray.splice(0,this.componentArray.length) ;
      
      for(let materiel of datas){
        
        let component: MyComponentComponent = this.getComponentFromMateriel(materiel);

        this.componentArray.push(component)
      }
      console.log(this.componentArray)
    },
    error =>{
      console.log(error) ;
    })

  }

  onSubmit(componentRawData){
    
    if(componentRawData.invalid){
      console.warn("Invalid")
    }else{
  
      this.materielService.addMateriel(new Materiel(null, componentRawData.value.type, componentRawData.value.description, componentRawData.value.nom)).then(
        res => {
          let component = this.getComponentFromMateriel(res) ;
          this.componentArray.push(component)
        },
        err =>{
          console.warn(err)
        }
      );
  
     // this.componentCreationForm.reset() ;
    }
  }

  onRevenueComponentOver(){
    this.revenueValue = this.revenueValue + 1 ;
  }

  delete(event){
    console.log(event.id) ;
    this.materielService.deleteMateriel(event.id).then(
      res => {
        let index = this.componentArray.findIndex((component) =>component.id == res)
        this.componentArray.splice(index, 1) ;
      }
    )
  }
}
