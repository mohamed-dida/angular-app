import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProtoflioComponent } from './protoflio/protoflio.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path: 'home', component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:"protoflio",component:ProtoflioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
