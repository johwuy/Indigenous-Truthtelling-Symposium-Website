import styles from './form.module.css'

function ContactUs() {
  return (
    <div className="flex flex-col mx-30 pt-24">
      <h3 className="mt-12 italic text-yellow-300 text-6xl/relaxed text-center">Get In Contact with the Indigenous Art for Education Project</h3>
      <div className='relative mb-24'>
        <div className='absolute inset-0 h-full w-full bg-[#E9C060] -translate-x-4 translate-y-4 rounded-4xl'></div>

        <form className="flex relative flex-col gap-6 bg-[#383A52] p-12 rounded-4xl z-2">
          <div className="flex flex-col gap-3">
            <label htmlFor="subject" className={styles.label}>Subject:</label>
            <input className={styles.text} type="text" id="subject" name="subject" required />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="email_address" className={styles.label}>Email Address:</label>
            <input className={styles.text} type="email" id="email_address" name="email_address" required />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="name" className={styles.label}>Name:</label>
            <input className={styles.text} type="text" id="name" name="name" required />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="your_message" className={styles.label}>Your Message:</label>
            <textarea className={styles.text} id="your_message" name="your_message" required maxLength={500}/>
          </div>
          <button type="submit">Submit</button>
        </form>

      </div>

    </div>

  );
}

export default ContactUs;