import { Directive,ElementRef, HostListener  } from '@angular/core';

@Directive({
  selector: '[appHigLight]'
})
export class HigLightDirective {

  constructor(private elem:ElementRef){}

  @HostListener("click") onClicks(){
    this.textDeco("underline")
  }

  @HostListener("dblclick") onDoubleClicks(){
    this.textDeco("None")
  }

  private textDeco(action:string){
    this.elem.nativeElement.style.textDecoration=action;

  }

}
