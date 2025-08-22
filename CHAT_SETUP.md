# Real-Time Chat Setup Guide for SARAH | HA Website

## Option 1: Tawk.to (Recommended - 100% Free)

### Features:
- ✅ **100% FREE forever** (no credit card required)
- ✅ Real-time visitor monitoring
- ✅ Mobile apps (iOS/Android) for agents
- ✅ Unlimited agents
- ✅ Chat history
- ✅ File sharing
- ✅ Automated triggers
- ✅ Knowledge base integration
- ✅ Multi-language support

### Setup Instructions:

1. **Create Account:**
   - Go to [https://www.tawk.to](https://www.tawk.to)
   - Click "Sign Up" (FREE)
   - Verify email

2. **Add Your Website:**
   - Dashboard → "Add Property"
   - Enter: "SARAH | HA Jewelry"
   - Site URL: "www.sarahha.com"

3. **Get Your Property ID:**
   - Go to Administration → Chat Widget
   - Copy the Property ID (looks like: `5f3e5d8c2b9a1234567890ab`)

4. **Update Website Code:**
   - Open `index.html`
   - Find: `YOUR_PROPERTY_ID`
   - Replace with your actual Property ID
   - Save file

5. **Customize Widget:**
   - In Tawk.to dashboard → Widget Appearance
   - Set primary color to: `#b19a60` (SARAH | HA gold)
   - Upload logo.png as avatar
   - Set welcome message:
     ```
     👋 Welcome to SARAH | HA!
     How can we help you preserve your precious memories today?
     ```

6. **Configure Auto Messages:**
   - Trigger 1: After 30 seconds
     ```
     Looking for something special? Our Nano Bible pendants start at just $199!
     ```
   - Trigger 2: On checkout page
     ```
     Need help with your order? We're here to assist!
     ```

7. **Set Business Hours:**
   - Monday-Friday: 9 AM - 6 PM EST
   - Saturday: 10 AM - 4 PM EST
   - Sunday: Closed (auto-reply enabled)

8. **Mobile App Setup:**
   - Download "Tawk.to" app
   - Login with your account
   - Enable push notifications
   - Now you can chat with customers from anywhere!

---

## Option 2: Crisp Chat (Free Plan Available)

### Features:
- ✅ Free plan includes 2 seats
- ✅ Better UI/UX than Tawk.to
- ✅ CRM features
- ✅ Email integration
- ✅ Chatbot capabilities
- ❌ Limited to 30-day history on free plan

### Setup Instructions:

1. **Create Account:**
   - Go to [https://crisp.chat](https://crisp.chat)
   - Sign up for free account

2. **Get Website ID:**
   - Settings → Website Settings → Setup Instructions
   - Copy your Website ID

3. **Update Code:**
   - In `index.html`, uncomment the Crisp code
   - Replace `YOUR-WEBSITE-ID` with actual ID
   - Comment out or remove Tawk.to code

4. **Customize:**
   - Settings → Website Settings → Chatbox & Email Settings
   - Set color theme to match brand
   - Upload logo
   - Configure welcome messages

---

## Option 3: Intercom (Premium - $74/month)

### Features:
- ✅ Best-in-class UI/UX
- ✅ Advanced automation
- ✅ Customer data platform
- ✅ Help center integration
- ✅ Product tours
- ❌ Expensive for small business

### Setup Instructions:

1. **Sign Up:**
   - Go to [https://www.intercom.com](https://www.intercom.com)
   - Start 14-day free trial

2. **Install Code:**
   ```html
   <script>
     window.intercomSettings = {
       api_base: "https://api-iam.intercom.io",
       app_id: "YOUR_APP_ID",
       name: "SARAH | HA Support",
       custom_launcher_selector: '#custom-chat-button'
     };
   </script>
   <script>
     (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/YOUR_APP_ID';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();
   </script>
   ```

---

## Testing Your Chat

### Desktop Testing:
1. Open website in browser
2. Chat widget should appear bottom-right
3. Send test message
4. Check agent dashboard for message

### Mobile Testing:
1. Open on mobile device
2. Widget should be mobile-optimized
3. Test typing and sending messages
4. Verify notifications work

### Common Issues:

**Widget Not Showing:**
- Check Property ID is correct
- Clear browser cache
- Check for JavaScript errors (F12 → Console)

**Messages Not Sending:**
- Check internet connection
- Verify account is active
- Check browser console for errors

**Mobile App Not Working:**
- Update to latest version
- Check notification permissions
- Verify login credentials

---

## Pre-Written Responses for Agents

Save these in your chat platform's canned responses:

### Greeting:
```
Hello! Welcome to SARAH | HA Jewelry. I'm here to help you find the perfect archival piece. What brings you to us today?
```

### Product Info:
```
Our NanoFiche™ technology preserves your precious texts and memories at the molecular level, tested to last over 10,000 years by Los Alamos National Lab. Which collection interests you most?
```

### Pricing:
```
Our pieces range from:
• Bhagavad Gita pendants: Starting at $149
• Bible cross pendants: $199-$349
• Personalized family pieces: Starting at $550
All pieces include free shipping on orders over $199!
```

### Technology:
```
Great question! Our nano-inscribed text is readable with a 400x microscope (included with select packages) or through our mobile app. The inscription is permanent and won't fade, scratch, or deteriorate for millennia.
```

### Shipping:
```
We ship worldwide! 
• Standard items: 3-5 business days
• Custom pieces: 7-10 business days
• Express shipping available at checkout
• Free shipping on orders over $199
```

### Returns:
```
We offer a 30-day satisfaction guarantee on all non-personalized items. If you're not completely satisfied, return it for a full refund. Custom/personalized pieces are final sale due to their unique nature.
```

---

## Analytics & Optimization

### Track These Metrics:
- Average response time (target: < 1 minute)
- Customer satisfaction score (target: > 4.5/5)
- Conversion rate from chat (target: > 5%)
- Most asked questions (update FAQ accordingly)

### Weekly Tasks:
1. Review chat transcripts
2. Update canned responses
3. Identify common issues
4. Train on new products
5. Update knowledge base

---

## Support Contact

If you need help setting up chat:
- Tawk.to Support: support@tawk.to
- Crisp Support: support@crisp.chat
- Intercom Support: Through their dashboard

---

**Remember:** The chat widget is your direct connection to customers. Quick, helpful responses lead to more sales and happier customers!