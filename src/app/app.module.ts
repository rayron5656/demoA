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
    FormValidationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
