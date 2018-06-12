import { Component, OnInit } from '@angular/core';
import { GitSearchService } from './git-service.service';
import { GitSearch } from './git-search';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
}) 
export class AppComponent implements OnInit {
  constructor(private GitSearchService: GitSearchService) {

  }
  ngOnInit() {

  }
  title = 'Github Browser';
}
