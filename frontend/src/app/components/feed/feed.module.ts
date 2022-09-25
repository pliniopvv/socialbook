import { NgModule } from '@angular/core';

import { FeedRoutingModule } from './feed-routing.module';
import { FeedComponent } from './feed.component';
import { FeeddumbComponent } from './feeddumb/feeddumb.component';
import { ComumModule } from 'src/app/modules/comum/comum.module';


@NgModule({
  declarations: [
    FeedComponent,
    FeeddumbComponent
  ],
  imports: [
    ComumModule,
    FeedRoutingModule
  ]
})
export class FeedModule { }
