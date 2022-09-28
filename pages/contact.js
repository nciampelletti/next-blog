import React from "react"
import ContactForm from "../components/contact/ContactForm"
import Head from "next/head"
const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Natalia's contant form </title>
        <meta
          name='description'
          content='I post about recipes, programming and devlopement'
        />
      </Head>
      <ContactForm />
    </>
  )
}

export default ContactPage
