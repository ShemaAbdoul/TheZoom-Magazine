# TheZoom Magazine — Flutterwave setup

## Current pricing and delivery

- Every digital edition: **RWF 10,000**.
- Payment provider: **Flutterwave**.
- Payment methods: **Card** (including Visa) and **Rwanda Mobile Money** (MTN is supported; Airtel may also appear depending on Flutterwave's Rwanda checkout configuration).
- Delivery: **manual email delivery after you verify the payment**.

## Important: the site is not accepting payments yet

The website is prepared for Flutterwave hosted Payment Links, but each `checkoutUrl` in `magazine.js` is intentionally blank. No payment link can be created without access to your verified Flutterwave merchant dashboard. Do not advertise checkout as live until the links have been added and tested.

## Create the seven payment links

In your Flutterwave dashboard:

1. Complete your business/merchant verification (KYC) so live payments can be enabled.
2. Open **Collect Payments → Payment Links** and choose **Create new payment link**.
3. Choose a **single charge** / one-time payment.
4. Create one fixed-price link for each edition below. Use **RWF** and **10,000** as the amount. Give each link a clear name, for example `TheZoom Magazine — Issue 07 — The Close-Up Issue`.
5. In payment method settings, enable **Card** and **Rwanda Mobile Money**. Disable other methods if the dashboard allows you to choose the permitted methods for the link/account. Confirm that the checkout offers Visa/card and the Rwanda mobile-money option.
6. Configure the checkout to collect the buyer's email address. Add customer name and phone number if available. Enable merchant payment notifications.
7. Copy each generated hosted payment URL.

Flutterwave's Payment Links guide documents fixed-amount links under **Collect Payments → Payment Links**: https://developer.flutterwave.com/v2.0/docs/payment-links

## Add the links to the website

Open `magazine.js` on GitHub and find the `EDITIONS` list. Each entry has a blank `checkoutUrl`. Paste the matching URL between the quotes. Example:

```js
{ n: 7, date: 'October 2026', title: 'The Close-Up Issue', pages: 84, online: false, price: '10,000 RWF', checkoutUrl: 'PASTE_ISSUE_07_FLUTTERWAVE_LINK_HERE', blurb: '...' }
```

Repeat for issues 06 through 01. Do not paste API keys or secret keys into this file. The repository is public.

## Manual fulfilment checklist

For every new order:

1. Open Flutterwave Dashboard → Transactions and find the payment.
2. Confirm that its status is **successful**, the currency is **RWF**, the amount is **10,000**, and the payment description/reference matches the edition ordered. Do not rely only on a screenshot or the customer's claim.
3. Record the buyer's name, email, edition number, amount, transaction reference and verification date in a private order log. Do not store this log in the public GitHub repository.
4. Email the correct PDF from private storage to the buyer.
5. Mark the order as delivered in your private log.

## Protect the paid PDFs

The website source repository is public. **Never upload paid magazine PDFs to it.** The previous project archive contained PDFs in the root `issues/` folder; delete that folder from the GitHub repository as well as any `assets/magazine/pdfs/` folder containing paid editions. Deleting a file from the latest ZIP does not remove a previously committed copy from GitHub; commit a deletion in the repository. Keep master PDFs in private storage (your computer or a private cloud drive) and attach/send them only after payment verification.

The magazine page no longer exposes public PDF reading/download buttons. This prevents the site from directly linking to the paid PDFs.

## Fees and testing

Flutterwave's Rwanda pricing page currently lists local card collections at 4.8% and local wallet/mobile-money collections at 3.5%, excluding VAT and other applicable taxes. Confirm the current fees in your dashboard before setting margins: https://flutterwave.com/rw/pricing/

Test the links in Flutterwave test mode first. Only switch to live links after your account is verified and you have completed a real low-value test transaction if appropriate. Never publish secret keys.

## Notes about MTN

Flutterwave's Rwanda Mobile Money documentation lists both **MTN and Airtel** as supported operators. The checkout may present a Rwanda Mobile Money choice and then ask the customer to select the network. If you require MTN only and no Airtel option, confirm with Flutterwave support whether your merchant account can restrict the operator.
