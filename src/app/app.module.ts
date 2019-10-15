import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';

// for 2 way binding
import { FormsModule } from '@angular/forms';

// for services
import { HttpClientModule } from '@angular/common/http';

import { NotesComponent } from './notes/notes.component';
import { NoteItemComponent } from './note-item/note-item.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CountdownComponent } from './countdown/countdown.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    NotesComponent,
    NoteItemComponent,
    AddNoteComponent,
    WelcomeComponent,
    CountdownComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
