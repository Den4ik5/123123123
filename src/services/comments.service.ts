import {Injectable} from "@angular/core";
import {Comment} from "../comment/comment.component";
import {BehaviorSubject, Observable, ReplaySubject} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CommentsService {
  comments$ = new BehaviorSubject<Comment[]>([]);

  addComment(comment: Comment): void {
    this.comments$.next([...this.comments$.getValue(), comment]);
  }

  getComment(): BehaviorSubject<Comment[]>{
    return this.comments$;
  }
}
