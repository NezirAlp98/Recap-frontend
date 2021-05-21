import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './components/brand/brand.component';
import { CarComponent } from './components/car/car.component';
import { ColorComponent } from './components/color/color.component';

const routes: Routes = [
  {
    path: '',
    component: CarComponent,
  },
  {
    path: 'cars',
    component: CarComponent,
  },
  { path: 'colors', component: ColorComponent },
  {
    path: 'brands',
    component: BrandComponent,
  },
  {
    path:'cars/brand/:brandId',
    component:CarComponent,
  },
  {
    path:'cars/color/:colorId',
    component:CarComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
