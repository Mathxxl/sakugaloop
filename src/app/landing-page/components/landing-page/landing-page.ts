import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  imports: [FormsModule, ReactiveFormsModule],
  selector: 'app-landing-page',
  styleUrl: './landing-page.scss',
  templateUrl: './landing-page.html',
})
export class LandingPage implements OnInit {
  inputForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.inputForm = this.formBuilder.group({
      username: [null, Validators.required],
    });
  }

  onRequestUsername(): void {
    this.router.navigateByUrl(`loop/${this.inputForm.controls['username'].value}`);
  }

  onGoAbout(){
    this.router.navigateByUrl('about');
  }
}
