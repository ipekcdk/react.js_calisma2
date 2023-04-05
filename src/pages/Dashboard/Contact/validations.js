import { object, string } from "yup";

//validasyon: çalışan bir sitemin aksaklık yaşamaması adına kontrol edilmesidir.

const required_message = "Bu alan zorunludur";

const contactShema = object({
  firstName: string().required(required_message),
  lastName: string().required(required_message),
  email: string()
    .email("Geçerli bir e-mail adresi giriniz.")
    .required(required_message),
  message: string()
    .min(5, "Minimum 5 karakter giriniz.")
    .required(required_message),
});

export default contactShema;
