import style from './contact.module.scss'

import styleHome from '../home/home.module.scss'
import { FormEvent, useRef } from 'react'
import emailjs from '@emailjs/browser'

import toast, { Toaster } from 'react-hot-toast'
import { FormattedMessage } from 'react-intl'
import Footer from '../footer/Footer'

interface type {
  user_name: { value: string }
  user_email: { value: string }
  user_phone: { value: string }
  message: { value: string }
}
export const Contact = () => {
  // const refForm = useRef<HTMLFormElement | null>(null)

  const handlerSubmit = (e: FormEvent) => {
    e.preventDefault()

    const form = e.target as unknown
    const input = form as type
    const user_name = input.user_name.value
    const user_email = input.user_email.value
    const user_phone = input.user_phone.value
    const message = input.message.value

    if (
      user_name.length === 0 ||
      user_email.length === 0 ||
      user_phone.length === 0 ||
      message.length === 0
    ) {
      return toast.error('Please fill in all fields', {
        // duration: 3,
        position: 'top-right',
        icon: '🙏',
      })
    }

    const templateParams = {
      user_name,
      user_email,
      user_phone,
      message,
    }

    emailjs
      .send(
        'service_7f9wh5p',
        'template_467n4gm',
        templateParams,
        'RPCWi3Lmclyma9gSw'
      )
      .then(
        function (response) {
          console.log('SUCCESS!', response.status, response.text)
        },
        function (error) {
          console.log('FAILED...', error)
        }
      )
  }

  return (
    <section className={style.contact} id="contact">
      <Toaster />
      <h3 className={`${styleHome.sectionH1} ${style.projectH3}`}>
        {' '}
        <FormattedMessage id="contact.title" />
      </h3>
      <div className={style.contactContainer}>
        <form className={style.contactForm} onSubmit={handlerSubmit}>
          <input
            placeholder="* Your Name"
            className={style.contactInput}
            type="text"
            required
            name="user_name"
          />
          <input
            placeholder="* Email"
            className={style.contactInput}
            type="email"
            required
            name="user_email"
          />
          <input
            placeholder="* Phone number"
            type="tel"
            className={style.contactInput}
            required
            name="user_phone"
          />
          <textarea
            placeholder="* How can I help you?"
            cols={30}
            rows={10}
            style={{ resize: 'none' }}
            className={style.contactInput}
            required
            name="message"
          />

          <button className={style.contactBotton}>
            <FormattedMessage id="contact.send" />
          </button>
        </form>
      </div>
    </section>
  )
}
