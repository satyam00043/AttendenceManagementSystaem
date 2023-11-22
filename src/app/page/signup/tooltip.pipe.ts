// tooltip.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'tooltip' })
export class TooltipPipe implements PipeTransform {
  transform(value: string): string {
    return `Tooltip: ${value}`;
  }
}
