import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProgressRoutingModule } from './progress-routing.module';
import { ProgressComponent } from './progress.component';
import { IncrementadorComponent } from '../../components/incrementador/incrementador.component';

@NgModule({
  declarations: [ProgressComponent, IncrementadorComponent],
  imports: [CommonModule, ProgressRoutingModule, FormsModule],
})
export class ProgressModule {}
