import { NgModule } from '@angular/core';

import { FeatherModule } from 'angular-feather';
import { User, Edit, Trash, Clock, Calendar, Loader } from 'angular-feather/icons';

// Select some icons (use an object, not an array)
const icons = {
  Edit,
  Trash,
  Clock,
  Calendar,
  User,
  Loader,
};

@NgModule({
  imports: [
    FeatherModule.pick(icons)
  ],
  exports: [
    FeatherModule
  ]
})
export class IconsModule { }
