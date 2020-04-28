import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Project, Image } from 'src/app/models/project.model';
import { Api } from 'src/app/services/api.service';

@Injectable()
export class HomeService {
  private _onHoverProjectId: Subject<number> = new Subject<number>();
  projects: Project[] = [];
  images: Image[] = [];

  constructor(
    private api: Api
  ) { }

  public onHoverProjectIdChannel(): Observable<number> {
    return this._onHoverProjectId.asObservable();
  }

  setHoverProjectId(id: number) {
    this._onHoverProjectId.next(id);
  }

  async getProjects() {
    this.projects = await this.api.getProjects();
    this.projects.forEach((project: any) => {
      this.images = this.images.concat(project.images);
    });
    return this.projects;
  }
}
