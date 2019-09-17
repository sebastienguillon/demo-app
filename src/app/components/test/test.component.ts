import { Component } from '@angular/core';
import { JsonApiService } from 'src/app/services/json-api.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent {
  message = 'Bienvenue sur mon app de démo';
  ip: string;

  constructor(private jsonApiService: JsonApiService) {
  }

  getMyIp() {
    this.jsonApiService.getMyIp()
    .subscribe((res: any) => {
      console.log(res);
      this.ip = res.ip;
    }, err => {
      console.error(err);
    });
  }

  filterQuery() {
    console.log('Il faut exécuter la fonction de filtre');
  }


/*
  getMd5(text: string) {
    // ?text=example_text
    const params = new HttpParams()
    .set('text', text);

    this.httpClient.get('http://md5.jsontest.com/',
    {params})
    .subscribe((res: any) => {
      console.log(res);
    }, err => {
      console.error(err);
    });
  }
*/
}
