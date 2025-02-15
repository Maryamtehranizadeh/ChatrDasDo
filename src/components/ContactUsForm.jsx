function ContactUsForm() {
  return (
    <div className=" m-6 p-6 w-auto md:w-1/2 lg:w-1/3">
      <form className="flex flex-col ">
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
    </div>
  );
}

export default ContactUsForm;
