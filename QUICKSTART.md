# 🚀 NITOR Website - Quick Start Guide

## Installation & Usage

### **Prerequisites**
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A text editor (VS Code, Sublime Text, etc.)
- Basic knowledge of HTML/CSS/JavaScript (for customization)

---

## 📂 File Structure

```
NITOR/
├── index.html              # Main website page (330+ lines)
├── styles.css              # Complete styling (900+ lines)
├── script.js               # Interactive features (450+ lines)
├── README.md               # Full documentation
├── IMPROVEMENTS.md         # Analysis & improvements report
└── QUICKSTART.md           # This file
```

---

## 💻 How to Run Locally

### **Option 1: Direct File Opening**
1. Download all files to a folder named `NITOR`
2. Right-click on `index.html`
3. Select "Open with" → Choose your browser
4. Website opens and works immediately

### **Option 2: Using a Local Server (Recommended)**

**With Python 3:**
```bash
cd path/to/NITOR
python -m http.server 8000
```
Then open: `http://localhost:8000`

**With Python 2:**
```bash
cd path/to/NITOR
python -m SimpleHTTPServer 8000
```

**With Node.js (using http-server):**
```bash
npm install -g http-server
cd path/to/NITOR
http-server
```

**With PHP:**
```bash
cd path/to/NITOR
php -S localhost:8000
```

---

## 🌐 How to Deploy Online

### **Option 1: GitHub Pages (Free)**
1. Create GitHub account (github.com)
2. Create new repository named `nitor-website`
3. Upload all files
4. Enable GitHub Pages in repository settings
5. Website will be live at: `https://username.github.io/nitor-website`

### **Option 2: Netlify (Free)**
1. Go to netlify.com
2. Click "Deploy site"
3. Drag and drop your NITOR folder
4. Website goes live instantly
5. Get automatic SSL certificate

### **Option 3: Vercel (Free)**
1. Go to vercel.com
2. Import your repository
3. One-click deployment
4. Automatic updates with each commit

### **Option 4: Traditional Web Hosting**
1. Upload files via FTP to your web server
2. Website immediately accessible
3. Works with any web host

---

## 🎨 Customization Guide

### **Changing Colors**

Open `styles.css` and find `:root` section:

```css
:root {
    --primary-color: #0066cc;        /* Main blue */
    --secondary-color: #00a86b;      /* Green */
    --accent-color: #ff6b6b;         /* Red */
    --dark-color: #1a1a1a;           /* Black */
    --light-color: #f5f5f5;          /* Off-white */
    --gray-color: #666666;           /* Gray */
}
```

Example: Change primary color to green:
```css
--primary-color: #00a86b;  /* Changed to green */
```

### **Changing Fonts**

In `styles.css`, find `body` section:
```css
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
```

Change to your preferred font (use Google Fonts):
```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

body {
    font-family: 'Poppins', sans-serif;
}
```

### **Adding Your Logo**

In `index.html`, find the navbar section and replace:
```html
<div class="logo">
    <h1>NITOR</h1>
    <p>National Institute of Traumatology & Orthopaedic Rehabilitation</p>
</div>
```

With:
```html
<div class="logo">
    <img src="path/to/your/logo.png" alt="NITOR Logo" style="height: 50px;">
</div>
```

### **Updating Contact Information**

Find the contact section and update:
```html
<p>+88-02-55058902</p>  <!-- Change phone -->
<p><a href="mailto:nitor@hospi.dghs.gov.bd">nitor@hospi.dghs.gov.bd</a></p>  <!-- Change email -->
```

### **Changing Hospital Statistics**

Find the stats section and update:
```html
<div class="stat-card">
    <h3>250+</h3>
    <p>Emergency Patients Daily</p>
</div>
```

### **Adding New Department**

In the departments section, duplicate a card and update:
```html
<div class="dept-card">
    <h3>New Department Name</h3>
    <p>Department description</p>
    <a href="#" class="read-more">Learn More →</a>
</div>
```

### **Adding Team Member**

In the doctors section:
```html
<div class="doctor-card">
    <div class="doctor-image">
        <i class="fas fa-user-md"></i>
    </div>
    <h3>Doctor Name</h3>
    <p class="designation">Doctor's Position</p>
    <p class="specialty">Specialty/Department</p>
</div>
```

---

## 🔧 Common Customizations

### **1. Change Hospital Name**
Search for "NITOR" in `index.html` and replace with your hospital name

### **2. Update Opening Hours**
Find contact section:
```html
<p>Emergency: 24/7<br>OPD: 8:00 AM - 8:00 PM</p>
```

### **3. Change Hero Section Message**
Find the hero section in `index.html`:
```html
<h2>Excellence in Trauma Care & Orthopedic Rehabilitation</h2>
<p>Providing world-class healthcare services with compassion and expertise</p>
```

### **4. Add New Service**
Add a new card in the services-grid:
```html
<div class="service-card">
    <i class="fas fa-heart"></i>
    <h3>Cardiology Services</h3>
    <p>Your service description here</p>
</div>
```

### **5. Update News**
Edit the news section to add new article:
```html
<div class="news-card">
    <div class="news-image">
        <i class="fas fa-newspaper"></i>
    </div>
    <div class="news-content">
        <span class="news-date">Feb 8, 2026</span>
        <h3>Your Article Title</h3>
        <p>Article summary here</p>
        <a href="#" class="read-more">Read More →</a>
    </div>
</div>
```

---

## 📧 Setting Up Contact Forms

### **Option 1: Email Service (Recommended)**

Install a service like **Formspree**:
1. Go to formspree.io
2. Create free account
3. Create new form
4. Replace form action in `index.html`:

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" id="contactForm">
    <!-- form fields -->
</form>
```

### **Option 2: Backend Integration**

If you have a backend, update the form action:
```html
<form action="https://yourserver.com/send-email" method="POST">
```

### **Option 3: Google Forms**

Embed Google Form instead of custom form.

---

## 🔐 Security Best Practices

Before deploying:

1. **Remove Debug Code**
   - Remove any console.log() statements
   - Remove unnecessary comments

2. **Validate Forms**
   - All forms in the new design have validation
   - Add server-side validation if submitting to backend

3. **Use HTTPS**
   - Always use HTTPS for production
   - Most hosts provide free SSL

4. **Protect Email**
   - Don't expose email directly
   - Use form service or backend
   - Consider email obfuscation for display

5. **Regular Updates**
   - Keep dependencies updated
   - Monitor for security issues

---

## 📊 Adding Analytics

### **Google Analytics**

Add this before `</head>` in `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

Replace `GA_MEASUREMENT_ID` with your tracking ID.

---

## 🛠️ Troubleshooting

### **Problem: Styles not loading**
- Check file paths in `index.html`
- Ensure `styles.css` is in same folder as `index.html`
- Clear browser cache (Ctrl+Shift+Delete)

### **Problem: Forms not working**
- Check browser console for errors (F12 → Console)
- Ensure form email service is configured
- Verify form submission handler in `script.js`

### **Problem: Mobile menu not working**
- Check JavaScript is enabled in browser
- Verify `script.js` is loading
- Test on actual mobile device

### **Problem: Images not showing**
- Use correct file paths
- Ensure images are in accessible location
- Use absolute URLs if hosted online

### **Problem: Scrolling animations not smooth**
- Check browser support for `scroll-behavior: smooth`
- Some older browsers may need fallback
- Test in different browsers

---

## 🚀 Performance Tips

1. **Optimize Images**
   - Compress images before uploading
   - Use modern formats (WebP)
   - Set proper dimensions

2. **Minify Code** (for production)
   - Use online CSS minifiers
   - Minify JavaScript
   - Compress HTML

3. **Lazy Load Images**
   - Images load only when visible
   - Improves initial page load

4. **Enable Gzip Compression**
   - Ask your host to enable Gzip
   - Reduces file sizes by 70%

5. **Cache Busting**
   - Add version to CSS/JS files:
   ```html
   <link rel="stylesheet" href="styles.css?v=1.0">
   ```

---

## 🌍 Multi-Language Support

The website structure is ready for multilingual implementation.

### **To Add Bengali Language:**

1. Create translations object (already in `script.js`)
2. Add Bengali content for each section
3. Implement language switcher functionality
4. Consider using i18n library for better management

---

## 📱 Mobile Testing

Test on these devices/screen sizes:
- **iPhone 12**: 390px width
- **iPad**: 768px width
- **Android Phone**: 412px width
- **Large Desktop**: 1920px width

Use Chrome DevTools (F12) to test responsive design.

---

## 📚 Resources for Further Development

- **MDN Web Docs**: https://developer.mozilla.org
- **CSS Tricks**: https://css-tricks.com
- **JavaScript Info**: https://javascript.info
- **Font Awesome Icons**: https://fontawesome.com/icons
- **Can I Use**: https://caniuse.com (browser compatibility)

---

## 🎓 Learning Resources

### **HTML/CSS/JavaScript**
- Free Code Camp: https://www.freecodecamp.org
- W3Schools: https://www.w3schools.com
- Codecademy: https://www.codecademy.com

### **Web Design**
- UI/UX Best Practices
- Responsive Design Patterns
- Accessibility Guidelines

---

## 📞 Getting Help

If you encounter issues:

1. **Check Console Errors** (F12 → Console)
2. **Review Code Comments**
3. **Check Documentation Files**
4. **Test in Different Browser**
5. **Search Online** for similar issues
6. **Validate HTML/CSS** at validator.w3.org

---

## 📋 Deployment Checklist

Before going live:

- [ ] Test all links
- [ ] Test forms (contact & appointment)
- [ ] Test on mobile devices
- [ ] Check all images load
- [ ] Verify email notifications work
- [ ] Test keyboard navigation
- [ ] Check page load speed
- [ ] Set up analytics
- [ ] Configure email service
- [ ] Enable HTTPS
- [ ] Set up 404 page (optional)
- [ ] Test cross-browser compatibility

---

## 🎯 Next Steps

1. **Immediate**: Deploy website to production
2. **Week 1**: Monitor for errors and user feedback
3. **Week 2**: Implement backend form handling
4. **Month 1**: Add appointment database
5. **Month 2**: Implement payment system
6. **Month 3**: Add patient portal

---

## 📞 Support

For additional help:
- Review README.md for full documentation
- Check IMPROVEMENTS.md for detailed changes
- Review inline code comments
- Contact web host support for deployment issues

---

**Happy Deploying! 🚀**

*Last Updated: February 8, 2026*
*Website Version: 1.0*
