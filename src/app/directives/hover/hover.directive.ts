import { DOCUMENT } from '@angular/common';
import {
  Directive,
  ElementRef,
  HostListener,
  Inject,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHover]',
})
export class HoverDirective implements OnInit {
  color: string = 'red';

  constructor(private element: ElementRef, private reneder2: Renderer2) {}

  ngOnInit(): void {
    // this.element.nativeElement.style.backgroundColor = this.color;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.reneder2.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      'steelblue'
    );
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.reneder2.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      'white'
    );
  }
}
