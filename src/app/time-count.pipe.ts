import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeCount'
})
export class TimeCountPipe implements PipeTransform {

  transform(value: any): number {
    const today: any = new Date();
    const dateDifference = Math.abs(value - today);
    const secondsInAnHour = 3600;
    const dateDifferenceSeconds = dateDifference * 0.001;
    const dateCounter = Math.round(dateDifferenceSeconds / secondsInAnHour);

    if (dateCounter >= 1) {
      return dateCounter;
    } else {
      return 0;
    }
  }

}
