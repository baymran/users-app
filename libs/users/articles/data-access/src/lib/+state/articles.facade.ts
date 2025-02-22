import { Injectable, inject } from "@angular/core";
import { Store } from "@ngrx/store";
import { selectArticles, selectArticlesEntities } from "./articles.selectors";
import { Observable } from "rxjs";
import { Article } from '../models/article.model';


@Injectable({providedIn: 'root'})
export class ArticlesFacade {
  private readonly store = inject(Store);
  public readonly articles$: Observable<Article[]> = this.store.select(selectArticles);
  public readonly articlesEntities$ = this.store.select(selectArticlesEntities);
}
