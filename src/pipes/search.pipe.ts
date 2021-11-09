import {Pipe, PipeTransform} from "@angular/core";
import {Comment} from "../comment/comment.component";

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if(!value)return null;
    if(!args)return value;
    console.log(value);
    args = args.toLowerCase();

    return value.filter((data: Comment) => {
      console.log(data);
      return data.name.toLowerCase().includes(args);
    });
  }
}
