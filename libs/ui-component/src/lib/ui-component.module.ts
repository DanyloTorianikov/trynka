import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [CommonModule,  MatCardModule, MatButtonModule, MatIconModule ],
  declarations: [
    HeaderComponent
  ],
  exports: [HeaderComponent]
})
export class UiComponentModule {}
