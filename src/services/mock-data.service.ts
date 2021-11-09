import {Injectable} from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class MockDataService {
  data = [
    {
      name: 'news1',
      number: '1',


    }
  ]
}
