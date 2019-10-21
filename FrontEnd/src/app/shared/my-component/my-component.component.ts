import { Component, OnInit, Input, HostListener, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.scss']
})
export class MyComponentComponent implements OnInit {

  @Input() id ;
  @Input() description;
  @Input() type ;
  @Input() nom ;
  @Input() classFooter = "" ;
  @Input() textFooter ;
  @Input() dateFooter : Date ;

  @Output() isOver = new EventEmitter<Object>();
  @Output() hasEntered = new EventEmitter<Object>();
  @Output() delete = new EventEmitter<Object>();

  constructor() { 
  }

  ngOnInit() {
  }

  @HostListener('mouseover')
  onMouseover(){
    this.isOver.emit() ;
  }

  @HostListener('mouseenter')
  onMouseEnter(){
    this.hasEntered.emit() ;
  }

  onDelete(id: number){
    this.delete.emit({ id : id}) ;
  }

}
