import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-animal',
  templateUrl: './add-animal.component.html',
  styleUrls: ['./add-animal.component.scss']
})
export class AddAnimalComponent implements OnInit {
  animalForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    type: ['', [Validators.required, Validators.minLength(3)]],
    description: ['', [Validators.required, Validators.minLength(3)]],
    nickNames: this.fb.array([this.fb.control('')], [Validators.required]),
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  get nicknames(): FormArray {
    return this.animalForm.get('nickNames') as FormArray;
  }

  addNickname() {
    this.nicknames.push(this.fb.control(''));
  }

  handleSubmit() {
    console.log(this.animalForm.value);
  }
}
