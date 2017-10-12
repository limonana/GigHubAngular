import { Component, OnInit } from '@angular/core';
import { Gig } from '../model/Gig';
const MockGigs: Gig[] = [
  { Artist: 'Developer', Location: 'LAB', Time: 'TODAY 6:00 PM', Genre: '', Description: '' },
  { Artist: 'Taylor Swift', Location: 'US', Time: 'TODAY 6:00 PM', Genre: '', Description: '' }
];

@Component({
  selector: 'app-upcoming-gigs',
  templateUrl: './upcoming-gigs.component.html',
  styleUrls: ['./upcoming-gigs.component.css']
})


export class UpcomingGigsComponent {
  gigs: Gig[];
  constructor() {
    this.gigs = MockGigs;
  }
}