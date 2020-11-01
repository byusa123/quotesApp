import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlightVotes]'
})
export class HighlightVotesDirective {

  constructor(private elem: ElementRef) {
    this.elem.nativeElement.style.color = 'highlight-highest';
  }
}
