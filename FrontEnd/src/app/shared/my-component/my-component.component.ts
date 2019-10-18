import { Component, OnInit, Input, HostListener, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.scss']
})
export class MyComponentComponent implements OnInit {

  @Input() id ;
  @Input() title ;
  @Input() figure;
  @Input() unity ;
  @Input() iconHeader ;
  @Input() classFooter = "" ;
  @Input() textFooter ;
  @Input() dateFooter : Date ;
  @Input() step:number = 10;

  @Output() isOver = new EventEmitter<Object>();
  @Output() hasEntered = new EventEmitter<Object>();

  constructor() { 
  }

  ngOnInit() {
  }

  @HostListener('click')
  onClick(){
    this.figure= parseFloat(this.figure) + this.step ;
  }

  @HostListener('mouseover')
  onMouseover(){
    this.isOver.emit() ;
  }

  @HostListener('mouseenter')
  onMouseEnter(){
    this.hasEntered.emit() ;
  }

}
