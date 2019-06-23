import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { TableRegisterComponent } from './table-regiter/table-register.component';
import { TimeService } from './time.service';
import { DialogNewComponent } from './dialog-new/dialog-new.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TableRegisterComponent,
    DialogNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    LeafletModule
  ],
  providers: [
    TimeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
