import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-placeholder-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './placeholder-page.component.html',
})
export class PlaceholderPageComponent implements OnInit {
  title = '';
  badge?: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      if (data['title']) this.title = data['title'];
      if (data['badge']) this.badge = data['badge'];
    });
  }
}
