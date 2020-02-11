import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllMatchesComponent } from './all-matches/all-matches.component';
import { SavedMatchesComponent } from './saved-matches/saved-matches.component';


const routes: Routes = [
  {
    path: "all",
    component: AllMatchesComponent
  },
  {
    path: "saved",
    component: SavedMatchesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
