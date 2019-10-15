import { Component, OnInit } from '@angular/core';
import { Note } from '../models/Note';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  notes: Note[];

  constructor() { }

  ngOnInit() {

    // ID is added in loop with index
    this.notes = [
      {
        brewery: 'A Brewery Name',
        text: 'Some thoughts and notes about this brewery and its products.'
      },
      {
        brewery: '2nd Brewery Name',
        text: 'More text goes here.'
      },
      {
        brewery: '3rd Brewery Name',
        text: 'Your text goes here.'
      }

    ]
  }


  deleteNote(note: Note, i) {
    this.notes.splice(i, 1);
    console.log(i);
  }


  addNote(note: Note) {
    this.notes.push(note);
  }



}
