import { NgModule } from "@angular/core";
import { SigninContainerModule } from "./signin/signin-container.module";
import { SignupContainerModule } from "./signup/signup-container.module";

@NgModule({
  imports: [
    SignupContainerModule,
    SigninContainerModule
  ],
  exports:[
    SignupContainerModule,
    SigninContainerModule
  ]
})
export class AuthContainerModule{ }