import { Component, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements AfterViewInit {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    const boxes: NodeListOf<HTMLElement> = this.el.nativeElement.querySelectorAll('.equal-box-hover');

    boxes.forEach(box => {
      // Add touchstart
      this.renderer.listen(box, 'touchstart', () => {
        this.renderer.addClass(box, 'hover-active');
      });

      // Optional: remove on touchend
      this.renderer.listen(box, 'touchend', () => {
        this.renderer.removeClass(box, 'hover-active');
      });
    });
  }
}
