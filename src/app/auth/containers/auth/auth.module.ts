import { NgModule } from "@angular/core";
import { AuthComponentsModule } from "../../components/auth.components.module";

@NgModule({
  imports: [
    AuthComponentsModule,
    AuthModule,
  ],
  exports: [
    AuthComponentsModule,
    AuthModule
  ]
})
export class AuthModule{}