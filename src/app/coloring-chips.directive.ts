import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appColoringChips]'
})
export class ColoringChipsDirective {
  constructor() {
    
  }
  @Input() chips: string;

}
