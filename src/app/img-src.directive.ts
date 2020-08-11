import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appImgSrc]'
})
export class ImgSrcDirective {

  constructor(private el: ElementRef) { 
    return this.el.nativeElement.src;
  }

}
