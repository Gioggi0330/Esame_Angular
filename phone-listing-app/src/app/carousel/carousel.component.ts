import { ChangeDetectorRef, Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent {
  @Input() slides: any[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['slides'] && changes['slides'].currentValue) {
      console.log('Slides updated:', this.slides);
    }
  }

  get shouldShowCarousel(): boolean {
    return this.slides?.length === 3;
  }
}