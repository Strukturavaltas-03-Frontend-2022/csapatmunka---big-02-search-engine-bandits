import { Component, inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from 'src/app/service/config.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  configService: ConfigService = inject(ConfigService);
  ar: ActivatedRoute = inject(ActivatedRoute);

  phrase: FormControl = new FormControl('');

  constructor() {}

  ngOnInit(): void {
    this.phrase.valueChanges.subscribe((value) =>
      this.configService.searchPhrase$.next(value)
    );
  }
}
