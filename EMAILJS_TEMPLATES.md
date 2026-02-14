# EmailJS Templates Quick Reference 📧

## Template 1: Owner Notification (Simple Design)
**Purpose**: YOU receive this when someone contacts you  
**EmailJS To Field**: `gulshanrajnk@gmail.com`

### Settings:
- Template Name: `Contact Form Notification`
- To Email: `gulshanrajnk@gmail.com`
- From Name: `{{name}}`
- Subject: `New Contact from {{name}}`
- Reply To: `{{email}}`

### HTML Code (Copy this into EmailJS):
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

**Preview**: Dark theme with cyan gradient emoji box - professional and eye-catching!

---

## Template 2: Auto-Reply to Visitor (Purple Gradient Design)
**Purpose**: VISITOR receives this as acknowledgment  
**EmailJS To Field**: `{{email}}` ⚠️ This automatically sends to the visitor

### Settings:
- Template Name: `Contact Form Auto Reply`
- To Email: `{{email}}` ⚠️ Important!
- From Name: `Gulshan Kumar - Data Engineer`
- Subject: `Thanks for contacting me!`

### HTML Code (Copy this into EmailJS):
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

**Preview**: Dark theme with cyan accent - matches your website design!

---

## Summary

| Template | Recipient | Design | EmailJS "To Email" Field |
|----------|-----------|--------|--------------------------|
| **Template 1** | YOU (owner) | Simple with 👤 emoji | `gulshanrajnk@gmail.com` |
| **Template 2** | VISITOR | Purple gradient | `{{email}}` |

## Form Field Variables

Both templates use these variables from your contact form:
- `{{name}}` - Visitor's name
- `{{email}}` - Visitor's email
- `{{phone}}` - Visitor's phone number
- `{{service}}` - Selected service
- `{{message}}` - Their message

---

See [EMAILJS_SETUP.md](EMAILJS_SETUP.md) for complete setup instructions.
