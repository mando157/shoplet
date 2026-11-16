import { Component, input, model, signal } from '@angular/core';
import { TestDirective } from './directives/test-directive';
import 'bootstrap';
import '@fortawesome/fontawesome-free';
import { Header } from './components/header/header';

@Component({
  imports: [TestDirective, Header],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  // // * input() signal -> Parent Send Data To Child (Read Only Signal)
  // public parentName: string = 'Hi From Parent';
  // public ageFromParent: number = 21;

  // public countingNum = signal(0);


  // public counter() {
  //   this.countingNum.update(() => {
  //     return this.countingNum() + 1;
  //   });
  // }
}
