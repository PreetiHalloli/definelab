import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Data } from '../data.model';
// import { Data } from '../data.model';

@Component({
  selector: 'app-all-matches',
  templateUrl: './all-matches.component.html',
  styleUrls: ['./all-matches.component.css']
})
export class AllMatchesComponent implements OnInit {

  allmatches: any[];

  constructor(private service: DataService) { }

  ngOnInit() {
    this.getAll();
  }

  public getAll() {
    this.service.getAll().subscribe((data) => {
      console.log("data", data);
      this.allmatches = data
    })
  }

  public addMatch(id, name, phone, city) {
    var obj = {
      "id": id,
      "name": name,
      "phone": phone,
      "city": city
    }
    console.log("aaaaaaaaa", obj);

    this.service.saveMatch(obj).subscribe((data) => {
      console.log("bbbbbbbb", data);

    })
  }
}
