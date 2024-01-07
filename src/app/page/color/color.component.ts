import { Component } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent {
  lights = [
    { active: false },
    { active: false },
    { active: false },
    { active: false }
  ];

  toggleLight(index: number): void {
    this.lights.forEach((light, i) => {
      light.active = i === index;
    });
  }

  changeColor(index: number): void {
    // Implement color change logic here if needed
    this.lights.forEach((light, i) => {
      light.active = i === index;
    }); }

}
