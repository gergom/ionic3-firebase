import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'placeHolder',
})
export class PlaceHolderPipe implements PipeTransform {

  transform(value: string, valorDefecto: string ="Escribe un texto") {

    return ( value ) ? value : valorDefecto;
  }
}
