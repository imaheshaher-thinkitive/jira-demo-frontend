import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoadmapComponent } from './roadmap/roadmap.component';
import { BoardComponent } from './board/board.component';
import { AddItemComponent } from './add-item/add-item.component';
import { ProjectSettingComponent } from './project-setting/project-setting.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    RoadmapComponent,
    BoardComponent,
    AddItemComponent,
    ProjectSettingComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
