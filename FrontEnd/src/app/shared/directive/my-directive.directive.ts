import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirectiveDirective {

  @Input() color ;

  constructor(private el: ElementRef) { 
  }

  @HostListener('mouseenter')
  onMouseEnter(){
    this.el.nativeElement.firstChild.style.border = "solid 2px " + (this.color || "green") ;
  }

  @HostListener('mouseleave')
  onMouseLeave(){
    this.el.nativeElement.firstChild.style.border = null ;
  }

}
