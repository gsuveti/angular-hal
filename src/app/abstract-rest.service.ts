import {Injectable, Injector} from '@angular/core';
import {HalOptions, Resource, ResourceArray, RestService, SubTypeBuilder} from 'angular4-hal';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ResourceService} from 'angular4-hal/src/resource.service';

@Injectable({
  providedIn: 'root'
})
export class AbstractRestService<T extends Resource, M> extends RestService<T> {

  private _type: any;
  private _resource: string;
  private _resourceService: ResourceService;


  constructor(type: { new(): T },
              resource: string,
              injector: Injector) {
    super(type, resource, injector);
    this._type = type;
    this._resource = resource;
    this._resourceService = injector.get(ResourceService);
  }


  public pageSearch(query: string, options?: HalOptions, subType?: SubTypeBuilder): Observable<{ data: T[], meta: any }> {
    return this._resourceService.search(this._type, query, this._resource, '_embedded', options, subType).pipe(
      map((resourceArray: ResourceArray<T>) => {
          return {
            data: resourceArray.result,
            meta: {
              pageNumber: resourceArray.pageNumber,
              totalElements: resourceArray.totalElements,
              totalPages: resourceArray.totalPages,
              size: resourceArray.size
            }
          };

        }
      )
    );

  }

}
