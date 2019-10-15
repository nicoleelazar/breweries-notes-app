import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Note } from '../models/Note'

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {

  @Output() addNote: EventEmitter<Note> = new EventEmitter()

  brewery: string;
  text: string;

  addBtnPressed: boolean = false;

  constructor() { }

  ngOnInit() {
    this.formReset();
  }

  showAddNote() {
    this.addBtnPressed = true;
  }


  onAddNote() {

    const note = {
      brewery: this.brewery,
      text: this.text
    }
    this.addNote.emit(note);

    //clear input fields after submitting
    this.formReset();
    //and close form
    this.addBtnPressed = false;

  }

  formReset() {
    this.brewery = '',
      this.text = ''
  }

}
