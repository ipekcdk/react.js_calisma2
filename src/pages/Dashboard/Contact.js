import React from "react";
import { useFormik } from "formik";

//useFormik kullanarak
function Contact() {
  const { handleSubmit, handleChange, isSubmitting } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: async (values, bag) => {
      await new Promise((r) => setTimeout(r, 1000)); //submit edince butonu 1 sn inaktif yapar, o sırada veri girişini engeller
      console.log(values);
      bag.resetForm(); //formu submit ettikten sonra inputları temizler, formu resetler
    },
  });

  return (
    <div>
      <h2>İletişim</h2>

      <form onSubmit={handleSubmit} className="form">
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            name="firstName"
            placeholder="İpek"
            disabled={isSubmitting}
            onChange={handleChange("firstName")}
          />
        </div>

        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            name="lastName"
            placeholder="Çıdık"
            disabled={isSubmitting}
            onChange={handleChange("lastName")}
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            placeholder="ipek@gmail.com"
            type="email"
            disabled={isSubmitting}
            onChange={handleChange("email")}
          />
        </div>

        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your message..."
            disabled={isSubmitting}
            onChange={handleChange("message")}
          />
        </div>

        {/* isSubmitting ile buton await süresince tıklanamaz ve o sırada veri girişi de yapılamaz  */}
        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </form>
    </div>
  );

  //direkt formik kullanarak, her ikisi de aynı sonucu veriyor.

  // import { Formik, Field, Form } from "formik";
  // <Formik
  //   initialValues={{
  //     firstName: "",
  //     lastName: "",
  //     email: "",
  //   }}
  //   onSubmit={async (values) => {
  //     await new Promise((r) => setTimeout(r, 500));
  //     alert(JSON.stringify(values, null, 2));
  //   }}
  // >
  //   <Form>
  //     <label htmlFor="firstName">First Name</label>
  //     <Field id="firstName" name="firstName" placeholder="Jane" />

  //     <label htmlFor="lastName">Last Name</label>
  //     <Field id="lastName" name="lastName" placeholder="Doe" />

  //     <label htmlFor="email">Email</label>
  //     <Field id="email" name="email" placeholder="jane@acme.com" type="email" />
  //     <button type="submit">Submit</button>
  //   </Form>
  // </Formik>;
}

export default Contact;
