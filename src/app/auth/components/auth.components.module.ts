import { NgModule } from "@angular/core";
import { SigninModule } from "./signin/signin.module";
import { SignupModule } from "./signup/signup.module";

@NgModule({
  imports: [
    SigninModule,
    SignupModule
  ],
  exports: [
    SigninModule,
    SignupModule
  ]
})
export class AuthComponentsModule { }