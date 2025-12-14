import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TechnologyItemsService } from '../../services/technology-items.service';
import { TechnologyItem } from '../../core/models/technology-item.model';


@Component({
  selector: 'app-technology-item-form',
  imports: [ CommonModule, ReactiveFormsModule ],
  templateUrl: './technology-item-form.html',
  styleUrl: './technology-item-form.scss'
})
export class TechnologyItemForm {
  itemForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
    side: new FormControl('', Validators.required),
    author: new FormControl('', Validators.required),
    lastUpdated: new FormControl('', Validators.required),
    latestVersion: new FormControl('', Validators.required),
    officialSite: new FormControl('', [
      Validators.required,
      Validators.pattern(
        /^(https?:\/\/)?([\w\-])+\.{1}([a-zA-Z]{2,63})([\/\w\-.~:?#[\]@!$&'()*+,;=]*)?$/
      )
    ]),
    openSource: new FormControl(true),
    logo: new FormControl('', [
      Validators.required,
      Validators.pattern(
        /^(https?:\/\/)?([\w\-])+\.{1}([a-zA-Z]{2,63})([\/\w\-.~:?#[\]@!$&'()*+,;=]*)?$/
      )
    ]),
  });
  constructor(private technologyItemsService: TechnologyItemsService, private router: Router) {}
  isInvalid(controlName: string): boolean {
    const control = this.itemForm.get(controlName);
    return !!control && control.touched && control.invalid;
  }
  onSubmit() {
    if (this.itemForm.invalid) {
      this.itemForm.markAllAsTouched();
      return;
    }
    const newItem: TechnologyItem = this.itemForm.value as TechnologyItem;
    this.technologyItemsService.createItem(newItem);
    this.itemForm.reset({ openSource: true });
    this.router.navigate(['/TechnologyItems']);
  }
}