import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommentComponent} from "../comment/comment.component";
import {InputComponent} from "../input/input.component";
import {DateTransformPipe} from "../pipes/date-transform.pipe";
import {SearchPipe} from "../pipes/search.pipe";

@NgModule({
  declarations: [
    AppComponent,
    CommentComponent,
    InputComponent,
    DateTransformPipe,
    SearchPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
