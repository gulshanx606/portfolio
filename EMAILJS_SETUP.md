# EmailJS Setup Guide - GitHub Pages Compatible! 🚀

Your portfolio contact form now uses **EmailJS** - a JavaScript-based email service that works perfectly with **GitHub Pages** (no PHP server needed!).

## ✨ Why EmailJS?

- ✅ Works on **GitHub Pages** (static hosting)
- ✅ **Free**: 200 emails/month
- ✅ Sends **2 emails**: one to you, one acknowledgment to the visitor
- ✅ Uses your **Gmail** account
- ✅ No backend server required

---

## 🚀 Setup Instructions

### 📋 Quick Reference: Two Templates Needed

Need just the HTML? See [EMAILJS_TEMPLATES.md](EMAILJS_TEMPLATES.md) for copy-paste ready templates!

📧 **TEMPLATE 1** (Step 3): Simple design with emoji 👤  
   - **Purpose**: YOU receive this when someone contacts you  
   - **To Email**: `gulshanrajnk@gmail.com`  
   - **Contains**: Visitor's name, email, phone, service, message

📧 **TEMPLATE 2** (Step 4): Beautiful purple gradient  
   - **Purpose**: VISITOR receives this as acknowledgment  
   - **To Email**: `{{email}}` (automatically sends to the visitor)  
   - **Contains**: Thank you message with their quoted message

---

### Step 1: Create EmailJS Account

1. Go to **https://emailjs.com**
2. Click **"Sign Up Free"**
3. Sign up with your Google account (gulshanrajnk@gmail.com)

### Step 2: Add Email Service

1. In EmailJS Dashboard, go to **"Email Services"**
2. Click **"Add New Service"**
3. Choose **"Gmail"**
4. Click **"Connect Account"** and authorize your Gmail
5. **Copy the Service ID** (looks like: `service_abc1234`)

### Step 3: Create Email Template (For YOU - Owner Notification)

⚠️ **THIS IS TEMPLATE 1** - You receive this email when someone contacts you

1. Go to **"Email Templates"**
2. Click **"Create New Template"**
3. Set **Template Name**: `Contact Form Notification`
4. **To Email**: `gulshanrajnk@gmail.com` (your email)
5. **From Name**: `{{name}}`
6. **Subject**: `New Contact from {{name}}`
7. **Content** - Switch to HTML editor and paste **TEMPLATE 1 HTML**:
```html
<div style="font-family: system-ui, sans-serif, Arial; font-size: 12px; background: #1a1a1a; padding: 20px; border-radius: 10px;">
  <div style="color: #e0e0e0; font-size: 14px; margin-bottom: 15px; padding-bottom: 15px; border-bottom: 2px solid #00ff9d;">
    A message by <strong style="color: #00ff9d;">{{name}}</strong> has been received. Kindly respond at your earliest convenience.
  </div>
  <div
    style="
      margin-top: 20px;
      padding: 15px 0;
      border-width: 1px 0;
      border-style: dashed;
      border-color: #444;
    "
  >
    <table role="presentation" style="width: 100%;">
      <tr>
        <td style="vertical-align: top; width: 60px;">
          <div
            style="
              padding: 6px 10px;
              margin: 0 10px;
              background: linear-gradient(135deg, #00ff9d 0%, #00cc7a 100%);
              border-radius: 5px;
              font-size: 26px;
              text-align: center;
              box-shadow: 0 2px 10px rgba(0, 255, 157, 0.3);
            "
            role="img"
          >
            👤
          </div>
        </td>
        <td style="vertical-align: top; padding-left: 10px;">
          <div style="color: #00ff9d; font-size: 18px; font-weight: bold; margin-bottom: 8px;">
            {{name}}
          </div>
          <div style="color: #888; font-size: 13px; margin-bottom: 12px;">
            📧 <span style="color: #00ff9d;">{{email}}</span> | 
            📞 {{phone}} | 
            💼 <span style="color: #00ff9d;">{{service}}</span>
          </div>
          <div style="background: #2a2a2a; padding: 15px; border-radius: 5px; border-left: 3px solid #00ff9d;">
            <p style="font-size: 14px; color: #e0e0e0; line-height: 1.6; margin: 0;">{{message}}</p>
          </div>
        </td>
      </tr>
    </table>
  </div>
</div>
```

8. **Important Settings** (bottom of template):
   - Reply to: `{{email}}`
   
9. Click **"Save"**
10. **Copy the Template ID** (looks like: `template_abc1234`)

### Step 4: Create Auto-Reply Template (For Visitor - Acknowledgment)

⚠️ **THIS IS TEMPLATE 2** - The visitor receives this acknowledgment email

1. Click **"Create New Template"** again
2. Set **Template Name**: `Contact Form Auto Reply`
3. **To Email**: `{{email}}` ⚠️ Important: This sends to the visitor
4. **From Name**: `Gulshan Kumar - Data Engineer`
5. **Subject**: `Thanks for contacting me!`
6. **Content** - Switch to HTML editor and paste **TEMPLATE 2 HTML**:
```html
<div style="font-family: system-ui, sans-serif, Arial; font-size: 14px; max-width: 600px; margin: 0 auto; color: #e0e0e0;">
  <div style="background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0; border-bottom: 3px solid #00ff9d;">
    <h2 style="color: #00ff9d; margin: 0; font-size: 24px; text-shadow: 0 2px 10px rgba(0, 255, 157, 0.3);">Thank You for Reaching Out! 🎉</h2>
  </div>
  
  <div style="background: #2a2a2a; padding: 30px; border-radius: 0 0 10px 10px;">
    <p style="font-size: 16px; line-height: 1.6; color: #e0e0e0;">
      Hi <strong style="color: #00ff9d;">{{name}}</strong>,
    </p>
    
    <p style="font-size: 16px; line-height: 1.6; color: #e0e0e0;">
      Thank you for your interest! I've received your message and will get back to you within <strong style="color: #00ff9d;">24-48 hours</strong>.
    </p>
    
    <div style="background: #1a1a1a; border-left: 4px solid #00ff9d; padding: 15px; margin: 20px 0; border-radius: 5px;">
      <p style="margin: 0; color: #b4b4b4; font-style: italic;">
        "{{message}}"
      </p>
    </div>
    
    <p style="font-size: 16px; line-height: 1.6; color: #e0e0e0;">
      Meanwhile, feel free to explore my portfolio or connect with me on LinkedIn.
    </p>
    
    <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #444;">
      <p style="margin: 5px 0; font-size: 16px; color: #ffffff;"><strong>Gulshan Kumar</strong></p>
      <p style="margin: 5px 0; color: #00ff9d; font-size: 14px;">Data Engineer</p>
      <p style="margin: 5px 0; color: #888; font-size: 12px;">Mumbai, Maharashtra (Open to Noida / Gurgaon / Delhi NCR)</p>
      <p style="margin: 10px 0; font-size: 14px; color: #e0e0e0;">
        📧 <a href="mailto:gulshanrajnk@gmail.com" style="color: #00ff9d; text-decoration: none;">gulshanrajnk@gmail.com</a> |
        📞 +91 9580215026
      </p>
    </div>
    
    <p style="margin-top: 30px; font-size: 12px; color: #666; text-align: center;">
      This is an automated acknowledgment. Please do not reply to this email.
    </p>
  </div>
</div>
```

7. Click **"Save"**
8. **Copy this Template ID too**

### Step 5: Get Your Public Key

1. Go to **"Account"** tab in EmailJS Dashboard
2. Find **"Public Key"** section
3. **Copy the Public Key** (looks like: `user_abc123xyz`)

### Step 6: Configure Your Website

1. Open `js/emailjs-config.js`
2. Replace the placeholder values:

```javascript
(function() {
    // Your Public Key from Step 5
    emailjs.init('YOUR_PUBLIC_KEY');
    
    window.EMAILJS_CONFIG = {
        serviceId: 'YOUR_SERVICE_ID',      // From Step 2
        templateId: 'YOUR_TEMPLATE_ID'     // From Step 3 (owner notification)
    };
})();
```

**Example:**
```javascript
(function() {
    emailjs.init('user_k7Y2mP9QaBc123XyZ');
    
    window.EMAILJS_CONFIG = {
        serviceId: 'service_gmail_123',
        templateId: 'template_contact_456'
    };
})();
```

### Step 7: Send Auto-Reply (Advanced - Optional)

To automatically send the visitor an acknowledgment email, update `js/emailjs-config.js` to include your auto-reply template ID:

```javascript
window.EMAILJS_CONFIG = {
    serviceId: 'service_gmail_123',
    templateId: 'template_contact_456',
    autoReplyTemplateId: 'template_autoreply_789'  // Add this line
};
```

The code in `contact.js` will automatically send the auto-reply when this is configured!

---

## 🧪 Testing

1. Open your website locally or on GitHub Pages
2. Go to the contact page
3. Fill out the form
4. Click **"Send Message"**
5. Check:
   - ✅ Your email (gulshanrajnk@gmail.com) - should receive the contact message
   - ✅ Test sender's email - should receive acknowledgment (if Step 7 done)

---

## 📤 Deploy to GitHub Pages

1. **Commit your changes**:
```bash
git add .
git commit -m "Add EmailJS contact form"
git push origin main
```

2. **Enable GitHub Pages**:
   - Go to your repo → Settings → Pages
   - Source: main branch
   - Save

3. Your site will be live at: `https://yourusername.github.io/portfolio-main/`

---

## 🔒 Security Notes

- ✅ `emailjs-config.js` is in `.gitignore` (won't be committed)
- ✅ Public Key is safe to expose (it's designed for frontend)
- ✅ EmailJS prevents spam with rate limiting
- ✅ Free tier: 200 emails/month (perfect for portfolio)

---

## 🐛 Troubleshooting

**"emailjs is not defined" error:**
- Check that EmailJS SDK loaded: view page source, look for `@emailjs/browser`
- Clear browser cache and reload

**Emails not sending:**
- Check browser console for errors
- Verify your Service ID, Template ID, and Public Key
- Check EmailJS Dashboard → "Logs" for errors
- Make sure Gmail service is still connected

**Auto-reply not working:**
- Make sure template ID in Step 7 is correct
- Verify "To Email" is set to `{{reply_to}}` in auto-reply template

---

## 💰 Free Tier Limits

- 200 emails/month
- Want more? Upgrade to paid plan ($7/month for 1,000 emails)

---

## 📞 Need Help?

Check the browser console (F12) for detailed error messages, or EmailJS Dashboard Logs.

**EmailJS Documentation**: https://www.emailjs.com/docs/
