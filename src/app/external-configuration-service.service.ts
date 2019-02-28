import {Injectable} from '@angular/core';
import {ExternalConfiguration, ExternalConfigurationHandlerInterface} from 'angular4-hal';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExternalConfigurationServiceService implements ExternalConfigurationHandlerInterface {

  constructor(private http: HttpClient) {
  }

  getProxyUri(): string {
    return 'http://localhost:8080/api/';
  }

  getRootUri(): string {
    return 'http://localhost:8080/api/';
  }

  getHttp(): HttpClient {
    return this.http;
  }

  getExternalConfiguration(): ExternalConfiguration {
    return null;
  }

  setExternalConfiguration(externalConfiguration: ExternalConfiguration) {
  }

  deserialize(): any {
  }

  serialize(): any {
  }
}
