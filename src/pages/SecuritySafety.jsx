function SecuritySafety() {
  return (
    <div className=" flex flex-col gap-10 m-[50px]">
      <h1 className="text-lg md:text-3xl">Security and Safety</h1>

      <h4 className="text-lg">
        Buyer and seller protection recommendations by PayPal
        <a
          href="https://www.paypal.com/webapps/mpp/paypal-safety-and-security"
          target="blank"
        >
          <button className="border-none">Read Here</button>
        </a>
      </h4>

      <h4 className="text-lg">
        Before using our website please read our{" "}
        <a
          href="/terms-and-conditions"
          target="blank"
          className="text-[var(--primary-color)]"
        >
          <button className="border-none"> Terms and Conditions.</button>
        </a>
      </h4>
      <p>
        Our website does not facilitate transactions, handle payments, or offer
        buyer/seller protection. To avoid scams, follow these guidelines: 1.
        Shop with reputable sellers - Ensure that you only shop with reputable
        sellers who provide detailed information about themselves, such as
        photos, social media profiles, and CIVL ID. This information will help
        you verify the seller's identity and establish trust before making a
        purchase. 2. Beware of amazing deals - Be cautious of deals that seem
        too good to be true, and compare prices before making a purchase. For
        example, if a seller is offering almost a new paraglider (Ozone Enzo 3,
        2025, 5h) for $2.000, would you belive it?.
      </p>
      <p>
        3. If you are in doubt! - Arrange a video call to inspect the item or
        just to get to know the seller. - Ask for more photos of the item and
        request specific angles or videos. A legitimate seller will be happy to
        provide this information. 4. Avoid sellers who are unable or unwilling
        to meet in person. 5. Payment services - Avoid using anonymous payment
        services such as Western Union, Moneygram, Ria Money Transfer, and
        Skrill, as these are frequently used by scammers. Instead, opt for a
        secure and traceable payment method such as PayPal "Goods and Services"
        option. It's important to note that you should refrain from using the
        "Friends and Family" option within PayPal to ensure additional
        transaction security. 6. If the seller refuses to use your payment
        method - If a seller refuses to use your preferred payment method, such
        as PayPal, it may be a warning sign. Using a secure payment method not
        only helps to protect your money and personal information, but it also
        provides a layer of security for both the buyer and the seller. It's
        best to avoid a seller who is unwilling to use a secure payment method
        and find another seller who is willing to use one. 7. If the seller has
        not provided links to their social media profiles, try searching for
        them by name on social media or xcontest. 8. Reach out to people who may
        know the seller to gather additional information before making a
        purchase.
      </p>
    </div>
  );
}

export default SecuritySafety;
