import { Component } from '@angular/core';

@Component({
  selector: 'app-track-button',
  templateUrl: './track-button.component.html',
  styleUrls: ['./track-button.component.css']
})
export class TrackButtonComponent {

  trackEvent() {
    if (window.fbq) {
      window.fbq('track', 'ButtonClick');
      alert('Event tracked!');
    } else {
      alert('Facebook Pixel not found.');
    }
  }
}

