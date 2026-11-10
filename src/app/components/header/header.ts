import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class Header {
  public name = input(""); // ? -> we Can give it a Default Value if the Parent don't send any name
  public age = input.required(); // ? -> we Can not give it a Default Value
  public address = input("No Address" , {transform : (value : string | undefined) => value ?? 'No Address'}); // ? -> we Can give it a Default Value
}
