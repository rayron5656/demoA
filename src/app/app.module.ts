import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FatherComponent } from './father/father.component';
import { CakeComponent } from './cake/cake.component';
import { TagsComponent } from './tags/tags.component';
import { OutputComponent } from './output/output.component';
import { TwowayComponent } from './twoway/twoway.component';
import { FormsModule } from '@angular/forms';
import { PipesComponent } from './pipes/pipes.component';
import { CustomPipe } from './pipes/custom.pipe';
import { BtcusdPipe } from './pipes/btcusd.pipe';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { StartRXComponent } from './start-rx/start-rx.component';
import { UseHttpComponent } from './use-http/use-http.component';
import {HttpClientModule} from '@angular/common/http'
import {Routes,RouterModule, Route} from '@angular/router';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component'
import { Comp3Component } from './comp3/comp3.component';

const myWebsiteRoutes:Routes = [
  {path:'',component:Comp1Component},
  {path:'comp2',component:Comp2Component},
  {path:'comp3',component:Comp3Component}
];


@NgModule({
  declarations: [ 
    AppComponent,
    ChildComponent,
    FatherComponent,
    CakeComponent,
    TagsComponent,
    OutputComponent,
    TwowayComponent,
    PipesComponent,
    CustomPipe,
    BtcusdPipe,
    FormValidationComponent,
    StartRXComponent,
    UseHttpComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(myWebsiteRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
