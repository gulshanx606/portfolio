# Portfolio Contact Form - Quick Start 🚀

## ✅ What's Been Set Up

Your contact form now supports **EmailJS** - perfect for GitHub Pages!

### Files Modified:
- ✅ [contact.html](contact.html) - Added EmailJS SDK
- ✅ [js/contact.js](js/contact.js) - Updated to use EmailJS (sends 2 emails!)
- ✅ [js/emailjs-config.js](js/emailjs-config.js) - Your EmailJS credentials (needs setup)
- ✅ [.gitignore](.gitignore) - Protects your credentials

### Files Created:
- 📄 [EMAILJS_SETUP.md](EMAILJS_SETUP.md) - Complete setup guide
- 📄 [js/emailjs-config.js.example](js/emailjs-config.js.example) - Config template

---

## 🚀 Next Steps (5 minutes)

### 1. Create EmailJS Account
- Go to https://emailjs.com
- Sign up with your Gmail (gulshanrajnk@gmail.com)

### 2. Get Your Credentials
Follow the detailed guide in [EMAILJS_SETUP.md](EMAILJS_SETUP.md) to get:
- **Public Key**
- **Service ID** (Gmail)
- **Template ID** (for notification to you)
- **Auto-Reply Template ID** (optional - for visitor acknowledgment)

📋 **Need just the HTML templates?** → [EMAILJS_TEMPLATES.md](EMAILJS_TEMPLATES.md)

### 3. Update Configuration
Edit `js/emailjs-config.js`:
```javascript
emailjs.init('your_public_key_here');

window.EMAILJS_CONFIG = {
    serviceId: 'service_abc123',
    templateId: 'template_xyz789',
    autoReplyTemplateId: 'template_auto456'  // Optional
};
```

### 4. Test It!
Open your website and submit the contact form. You should receive:
- ✅ Email to you (gulshanrajnk@gmail.com)
- ✅ Auto-reply to the visitor (if configured)

---

## 🌐 Deploy to GitHub Pages

Your site is now **100% static** and ready for GitHub Pages!

```bash
git add .
git commit -m "Add EmailJS contact form"
git push origin main
```

Enable GitHub Pages in repo settings, and you're live! 🎉

---

## 📚 Full Documentation

- [EMAILJS_SETUP.md](EMAILJS_SETUP.md) - Complete EmailJS setup guide
- [EMAIL_SETUP.md](EMAIL_SETUP.md) - PHP/SMTP setup (if you prefer traditional hosting)

---

## 🔄 Switching Between PHP and EmailJS

**Current Setup**: Both systems are ready!
- **EmailJS**: Works on GitHub Pages (static hosting)
- **PHP**: Works on traditional PHP hosting (cPanel, etc.)

The form will automatically use EmailJS if `emailjs-config.js` is configured. Otherwise, it falls back to the PHP backend.

---

## 💡 Why EmailJS?

✅ **GitHub Pages Compatible** - No server needed  
✅ **Free** - 200 emails/month  
✅ **Easy Setup** - 5 minutes  
✅ **Reliable** - Used by thousands of developers  
✅ **Auto-Reply** - Sends acknowledgment to visitors  

---

## 🐛 Troubleshooting

Check the browser console (F12) for errors. Common issues:

- **"emailjs is not defined"** → Clear cache, reload page
- **Emails not sending** → Check credentials in `emailjs-config.js`
- **Template errors** → Verify template variable names match form field names

See [EMAILJS_SETUP.md](EMAILJS_SETUP.md) for detailed troubleshooting.

---

**Need help?** Check the full guide: [EMAILJS_SETUP.md](EMAILJS_SETUP.md)
