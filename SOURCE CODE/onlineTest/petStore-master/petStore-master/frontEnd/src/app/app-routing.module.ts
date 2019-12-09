import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/pages/login/login.component';
import { DasboardComponent } from 'src/pages/dasboard/dasboard.component';
import { PetsComponent } from 'src/pages/pets/pets.component';
import { MyaccountComponent } from 'src/pages/myaccount/myaccount.component';
import { CustomersComponent } from 'src/pages/customers/customers.component';
import { PermissionsComponent } from 'src/pages/permissions/permissions.component';
import { QuestionsComponent } from 'src/pages/questions/questions.component';
import { TrainingComponent } from 'src/pages/Training/training.component';
import { Part1Component } from 'src/pages/Training/Part1/Part1.component';
import { Part2Component } from 'src/pages/Training/Part2/Part2.component';
import { Part3Component } from 'src/pages/Training/Part3/Part3.component';
import { Part4Component } from 'src/pages/Training/Part4/Part4.component';
import { Part5Component } from 'src/pages/Training/Part5/Part5.component';
import { Part6Component } from 'src/pages/Training/Part6/Part6.component';
import { Part7Component } from 'src/pages/Training/Part7/Part7.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', pathMatch: 'full', component: LoginComponent },
  { path: 'dashboard', pathMatch: 'full', component: DasboardComponent },
  { path: 'pets', pathMatch: 'full', component: PetsComponent },
  { path: 'myaccount', pathMatch: 'full', component: MyaccountComponent },
  { path: 'customers', pathMatch: 'full', component: CustomersComponent },
  { path: 'permissions', pathMatch: 'full', component: PermissionsComponent },
  { path: 'questions', pathMatch: 'full', component: QuestionsComponent },
  { path: 'training', pathMatch: 'full', component: TrainingComponent },
  { path: 'Part1', pathMatch: 'full', component: Part1Component },
  { path: 'Part2', pathMatch: 'full', component: Part2Component },
  { path: 'Part3', pathMatch: 'full', component: Part3Component },
  { path: 'Part4', pathMatch: 'full', component: Part4Component },
  { path: 'Part5', pathMatch: 'full', component: Part5Component },
  { path: 'Part6', pathMatch: 'full', component: Part6Component },
  { path: 'Part7', pathMatch: 'full', component: Part7Component },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
