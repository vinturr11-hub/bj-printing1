## Plan: Send quote requests automatically via email

Replace the current `mailto:` flow so quote requests submit directly from the site and land in **bj.printing1@gmail.com** without opening the visitor's email app. Sender domain: **bjprinting1.com**.

### Steps

1. **Enable Lovable Cloud** — required backend infrastructure for sending emails.

2. **Set up email sender domain** (`bjprinting1.com`) — you'll add a few DNS records at your domain registrar so emails are sent from a verified address like `quotes@notify.bjprinting1.com`. I'll guide you through the setup dialog.

3. **Create the email infrastructure** — queue, retry logic, suppression handling (all automatic).

4. **Create a "New quote request" email template** — branded with BJ Printing styling, includes all submitted fields: name, email, phone, service type, project details, etc.

5. **Create a public API route** (`/api/public/quote-request`) that:
   - Validates form input with Zod (name, email, phone, service, message — with length limits)
   - Sends the email to `bj.printing1@gmail.com` via Lovable's built-in email system
   - Returns success/failure

6. **Update the quote form** in `src/routes/index.tsx`:
   - Remove the `mailto:` link generation
   - POST the form data to the new route on submit
   - Show a success toast on success, error toast on failure
   - Reset the form after sending
   - Disable the submit button while sending

### Note on DNS
After the domain setup dialog, emails won't actually send until DNS records propagate (usually minutes, up to 72 hours). The form and code will be fully wired up and ready — emails will start flowing automatically once verification completes. You can monitor status in **Cloud → Emails**.
