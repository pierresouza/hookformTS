import * as yup from "yup";
import { schema } from "./validations";
export type TFormSchema = yup.Asserts<typeof schema>;
