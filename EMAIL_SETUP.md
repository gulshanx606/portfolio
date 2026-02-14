# Portfolio Website - Email Setup Guide

This portfolio website includes a contact form that sends emails via Gmail SMTP using PHPMailer.

## 📧 Email Features

When someone submits the contact form:
1. **You receive** a notification email with their message
2. **They receive** an automated acknowledgment email

## 🚀 Setup Instructions

### Step 1: Configure Gmail App Password

1. Go to your Google Account: https://myaccount.google.com/
2. Enable 2-Factor Authentication (if not already enabled)
3. Go to **App Passwords**: https://myaccount.google.com/apppasswords
4. Generate a new App Password for "Mail"
5. **Copy the 16-character password** (you'll need it in the next step)

### Step 2: Update SMTP Configuration

Edit the file `smtp_config.php` and replace with your details:

```php
return [
    'SMTP_USER' => 'your-email@gmail.com',     // Your Gmail address
    'SMTP_PASS' => 'xxxx xxxx xxxx xxxx',      // Your 16-char App Password (no spaces)
    'FROM_EMAIL' => 'your-email@gmail.com',
    'OWNER_EMAIL' => 'your-email@gmail.com',   // Where you want to receive contact form submissions
];
```

### Step 3: Test the Contact Form

1. Open your website in a browser
2. Navigate to the contact page
3. Fill out the form and click "Send Message"
4. Check both:
   - Your inbox (owner email) for the contact notification
   - The sender's inbox for the acknowledgment email

## 📁 Files Modified

- `contact_process.php` - Handles form submission with PHPMailer
- `js/contact.js` - Updated to handle JSON responses
- `smtp_config.php` - Your SMTP credentials (keep this secure!)
- `.gitignore` - Protects sensitive files from being committed to Git

## 🔒 Security Notes

- **Never commit `smtp_config.php` to public repositories**
- The `.gitignore` file already excludes it
- Use App Passwords instead of your main Gmail password
- Consider using environment variables in production

## 🛠️ Troubleshooting

**"Network error" message:**
- Check that `smtp_config.php` exists and has correct credentials
- Verify your Gmail App Password is correct (no spaces)

**Emails not arriving:**
- Check your Gmail account's "Sent" folder
- Look in spam/junk folders
- Verify the email addresses in `smtp_config.php`

**"PHPMailer not found" error:**
- Make sure the `phpmailer/` directory exists in your project root
- Re-run the download command if needed

## 📞 Support

For issues, check the PHP error logs or browser console for detailed error messages.
