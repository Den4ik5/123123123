import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'dateTransform'
})
export class DateTransformPipe implements PipeTransform {
  transform(value: string | undefined, args?: any): string {
    return `${value?.split('/')[1]}.${value?.split('/')[0]}.${value?.split('/')[2]}` || '';
  }
}
