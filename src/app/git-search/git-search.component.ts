import { Component, OnInit } from '@angular/core';
import { GitSearchService } from '../git-service.service';
import { GitSearch } from '../git-search';

@Component({
  selector: 'app-git-search',
  templateUrl: './git-search.component.html',
  styleUrls: ['./git-search.component.css']
})
export class GitSearchComponent implements OnInit {

  searchResults : GitSearch;
  searchQuery : string;
  constructor(private GitSearchService: GitSearchService) { }

  ngOnInit() {
    this.GitSearchService.gitSearch('topic:angular').then( (response) => {
      this.searchResults = (response as GitSearch)
    }, (error) => {
      alert("Error: " + error.statusText)
    })
  };

  gitSearch = () => {
    this.GitSearchService.gitSearch(this.searchQuery).then( (response) => {
      this.searchResults = (response as GitSearch)
    }, (error) => {
      alert("Error: " + error.statusText)
    })
 
  }
}
