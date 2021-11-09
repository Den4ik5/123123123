import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CommentsService} from "../services/comments.service";
import {Comment} from "../comment/comment.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  host: {
    class: 'app'
  }
})
export class AppComponent {
  title = 'Lab4';
  filtersForm: FormGroup;
  search: string = '';
  limit: number = 3;
  comments$ = this.commentService.getComment();

  constructor(
    private commentService: CommentsService,
  ) {
    this.filtersForm = new FormGroup({
      name: new FormControl('DENIS', [
        Validators.required,
        Validators.pattern('[A-Z ]*')
      ]),
      date: new FormControl('09/03/2000', [
        Validators.required,
        Validators.pattern('[0-3][0-9]/[0-1][0-9]/[1-2][0-9][0-9][0-9]')
      ]),
      price: new FormControl('123123', [
        Validators.required,
        Validators.pattern('[0-9.]*')
      ]),
      currency: new FormControl('usd', [
        Validators.required,
        Validators.maxLength(3),
        Validators.minLength(3),
        Validators.pattern('usd||eur||rub')
      ]),
    });
  }

  addToTheCommentsList() {
    console.log(this.filtersForm.getRawValue());
    this.commentService.addComment(
      new Comment(
        this.filtersForm.getRawValue().name,
        this.filtersForm.getRawValue().price,
        this.filtersForm.getRawValue().date,
        this.filtersForm.getRawValue().currency
      )
    )
  }
}
