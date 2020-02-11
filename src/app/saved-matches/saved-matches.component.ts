import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Data } from '../data.model';

@Component({
  selector: 'app-saved-matches',
  templateUrl: './saved-matches.component.html',
  styleUrls: ['./saved-matches.component.css']
})
export class SavedMatchesComponent implements OnInit {

  savedMatches: Data[];

  constructor(private service: DataService) { }

  ngOnInit() {
    this.getSavedMatches()
  }

  getSavedMatches(){
    this.service.getMatches().subscribe((data) => {
      this.savedMatches = data
    })
  }
  
  delete(id: number){
    this.service.deletematch(id).subscribe(
      () => this.getSavedMatches()
    )
  }
}
