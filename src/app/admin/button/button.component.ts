import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  buttons = [
    { label: 'Button 1', isOpen: false },
    { label: 'Button 2', isOpen: false },
    { label: 'Button 3', isOpen: false },
    { label: 'Button 4', isOpen: false },
    { label: 'Button 5', isOpen: false },
    { label: 'Button 6', isOpen: false },
    { label: 'Button 7', isOpen: false },
  ];
  wallColor: string = '#e0e0e0'; // Initial wall color

  changeWallColor(color: string) {
    this.wallColor = color;
  }

  openButton(button: { isOpen: boolean; }) {
    // Close all buttons
    this.buttons.forEach(b => b.isOpen = false);

    // Open the clicked button
    button.isOpen = true;

}}
