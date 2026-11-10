import { Directive, ElementRef, HostBinding, HostListener, inject, input } from '@angular/core';

@Directive({
  selector: '[appTestDirective]',
  host: {
    // ? Attributes
    '[attr.data-index]': 'index',

    // ? Classes
    '[class]': 'isSuccess ? "text-success" : "text-danger d-none"',
    '[class.active]': 'isActive',
    '[class.hover]': 'isHovered',

    // ? Styles
    '[style.fontSize.px]': 'fontSize',
    '[style.backgroundColor]': '"#eee"',

    // ? Events
    '(click)': 'onClick($event)',
    '(mouseleave)': 'isHovered = false',
    '(dblclick)': 'onDoubleClick()',
  },
})
export class TestDirective {

  public index: number = 5;
  public isSuccess: boolean = false;
  public isActive: boolean = false;
  public isHovered: boolean = false;
  public fontSize: number = 20;

  // ! HostBinding in Attributes
  @HostBinding('attr.title')
  public title: string = "Angular Directive";

  // * Constructor injection
  constructor(private element: ElementRef) {
    this.element.nativeElement.style.color = "red";
  }

  // * inject() function
  pElement = inject(ElementRef);

  onClick(e: Event) {
    console.log('Clicked!');
  }

  // ! HostBinding in Attributes
  @HostListener('mouseenter' , ['$event'])
  onMouseEnter(e : Event) {
    console.log('Mouse Entered!' , e);
  }

  onMouseLeave() {
    console.log('Mouse Left!');
  }

  onDoubleClick() {
    console.log('Double Clicked!');
  }

}
