import "styled-components";
import { templates } from "./theme";

declare module "styled-comonents" {
  export interface DefaultTheme {
    templates: typeof templates;
  }
}
