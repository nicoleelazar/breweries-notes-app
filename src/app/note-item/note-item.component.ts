import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Note } from '../models/Note'

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.css']
})
export class NoteItemComponent implements OnInit {
  @Input() note: Note
  @Output() deleteNote: EventEmitter<Note> = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  // onDelete event emmitted & output to parent
  onDelete(note) {
    this.deleteNote.emit(note);
  }

}
