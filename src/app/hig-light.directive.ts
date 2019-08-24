import { Directive,ElementRef, HostListener  } from '@angular/core';

@Directive({
  selector: '[appHigLight]'
})
export class HigLightDirective {

  constructor(private elem:ElementRef){}

  @HostListener("click") onClicks(){
    this.highlight("highlight")
  }

  @HostListener("dblclick") onDoubleClicks(){
    this.highlight("None")
  }

  private highlight(action:string){
    this.elem.nativeElement.style.backgroundColor='bisque';

  }

}
