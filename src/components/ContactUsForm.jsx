function ContactUsForm() {
  return (
    <form className="flex flex-col w-full m-auto mt-[30px] md:w-[400px]">
      <input type="text" placeholder="Full Name" name="fullName" />
      <input type="email" placeholder="Email" name="email" />
      <input type="textarea" placeholder="Message" className="pb-[200px]" />
      <button
        type="submit"
        className="bg-[var(--primary-color)] text-[var(--secondary-color)]"
      >
        Send
      </button>
    </form>
  );
}

export default ContactUsForm;
