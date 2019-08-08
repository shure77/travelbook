import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  @Output() navbarTitle: EventEmitter<string> = new EventEmitter<string>();
  form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.navbarTitle.emit('Create Place');

    this.form = new FormGroup({
      'placeName': new FormControl("")
    });
  }

  onSubmit() {
    console.log(this.form.value);
   }
}
