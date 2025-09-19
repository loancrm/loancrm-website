import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';
import { TermsandconditionsComponent } from './termsandconditions/termsandconditions.component';
import { HrmComponent } from './hrm/hrm.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';


// const routes: Routes = [
//   { path: '', redirectTo: '/home', pathMatch: 'full' },
//   { path: 'home', component: HomeComponent }, // default route
//   { path: 'about', component: AboutComponent },
//   { path: 'features', component: FeaturesComponent },
//   { path: 'contact', component: ContactComponent },
//   { path: 'terms-of-service', component: TermsandconditionsComponent },
//   {path:'hrm', component: HrmComponent},

//   // { path: 'pricing', component: PricingComponent },

// ];
const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  // { path: '', component: HomeComponent }, // default route
  { path: 'about', component: AboutComponent },
  { path: 'features', component: FeaturesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'terms-of-service', component: TermsandconditionsComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'hrm', component: HrmComponent },
  { path: '**', redirectTo: '' }

  // { path: 'pricing', component: PricingComponent },

];
const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled', // scrolls to top on route change
  onSameUrlNavigation: 'reload',
  anchorScrolling: 'enabled', // optional: enables anchor scrolling
};
@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
