import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopnavComponent} from './topnav/topnav.component'
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from './menu/menu.component';
import { InitiatebankconfirmationComponent } from './initiatebankconfirmation/initiatebankconfirmation.component';
import { HomeComponent } from './home/home.component';
import { SectionaComponent } from './sectiona/sectiona.component';
import { SectionbComponent } from './sectionb/sectionb.component';
import { SectioncComponent } from './sectionc/sectionc.component';
import { SectiondComponent } from './sectiond/sectiond.component';
import { SectioneComponent } from './sectione/sectione.component';
import { SetionjComponent } from './setionj/setionj.component';   
import { SetionlComponent } from './setionl/setionl.component';
import { SetionmComponent } from './setionm/setionm.component';
import { SetionoComponent } from './setiono/setiono.component';
import { SetionpComponent } from './setionp/setionp.component';
import { SetionrComponent } from './setionr/setionr.component';
import { SetionfComponent } from './setionf/setionf.component';
import { SetiongComponent } from './setiong/setiong.component';
import { IndexComponent } from './index/index.component';
import { RecievebcComponent } from './recievebc/recievebc.component';
import { SectionhComponent } from './sectionh/sectionh.component';
import { SectionrComponent } from './sectionr/sectionr.component';
import { SectiongComponent } from './sectiong/sectiong.component';
import { SetionqComponent } from './setionq/setionq.component';
import { SectionxComponent } from './sectionx/sectionx.component';
import { SectionuComponent } from './sectionu/sectionu.component';

const routes: Routes = [
  {path:'home', component: HomeComponent, children:[
    { path:'', component: DashboardComponent },
    { path:'section1', component: SectionaComponent },
    { path:'section2', component: SectionbComponent },
    { path:'section11', component: SectioncComponent },
    { path:'section14', component: SectiondComponent },
    { path:'section5', component: SectioneComponent },
    { path:'section6', component: SetionfComponent },
    { path:'section7', component: SetiongComponent },
    { path:'menu', component: MenuComponent},
    { path:'rbc', component: RecievebcComponent},
    { path:'section18', component: SectionrComponent},
    //{ path:'section7', component: SectiongComponent}
  ]},
  { path:'ibc', component: InitiatebankconfirmationComponent},
  { path:'section10', component: SetionjComponent},
  { path:'section8', component: SectionhComponent},  
  { path:'section18', component: SetionrComponent},
  { path:'section12', component: SetionlComponent},
  { path:'section13', component: SetionmComponent},
  { path:'section15', component: SetionoComponent},
  { path:'section16', component: SetionpComponent},
  { path:'section17', component: SetionqComponent},
  { path:'section24', component: SectionxComponent},
  { path:'section21', component: SectionuComponent},
  { path:'', component: IndexComponent},
  {path:'**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
