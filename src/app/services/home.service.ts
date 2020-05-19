import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Project, Image } from 'src/app/models/project.model';
import { Api } from 'src/app/services/api.service';

@Injectable()
export class HomeService {
  private _onHoverProjectId: Subject<number> = new Subject<number>();
  private _onHoverLogo: Subject<boolean> = new Subject<boolean>();
  projects: Project[] = [];
  images: Image[] = [];

  constructor(
    private api: Api
  ) { }

  public onHoverProjectIdChannel(): Observable<number> {
    return this._onHoverProjectId.asObservable();
  }

  public onHoverLogoChannel(): Observable<boolean> {
    return this._onHoverLogo.asObservable();
  }

  setHoverProjectId(id: number) {
    this._onHoverProjectId.next(id);
  }

  setHoverLogo(state: boolean) {
    this._onHoverLogo.next(state);
  }

  async getProjects() {
    this.projects = await this.api.getProjects();
    this.projects.forEach((project: any) => {
      this.images = this.images.concat(project.images);
    });
    return this.projects;
  }
}
