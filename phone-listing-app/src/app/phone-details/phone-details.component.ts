
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhoneService } from '../phone.service';

@Component({
  selector: 'app-phone-details',
  templateUrl: './phone-details.component.html',
  styleUrls: ['./phone-details.component.css']
})
export class PhoneDetailsComponent implements OnInit {
  @Input() phone: any;
  currentImageIndex: number = 0;

  constructor(
    private phoneService: PhoneService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.phoneService.getPhoneById(id).subscribe({
      next: (data) => this.phone = data,
      error: (err) => console.error('Error loading phone:', err)
    });

    console.log(this.phone);
  }

  nextImage(): void {
    if (this.phone && this.phone.imageurl) {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.phone.imageurl.length;
    }
  }

  prevImage(): void {
    if (this.phone && this.phone.imageurl) {
      this.currentImageIndex = (this.currentImageIndex - 1 + this.phone.imageurl.length) % this.phone.imageurl.length;
    }
  }
}
