import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class AppHighlightDirective {
  @Input('appHighlight') highlightColor:string =''
  private originalColor:string ='';
  constructor(private el:ElementRef){}
  @HostListener('mouseenter') onMouseEnter() {
    this.originalColor = this.el.nativeElement.style.backgroundColor;
    this.el.nativeElement.style.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = this.originalColor;
  }
}
