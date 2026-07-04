import re
import os

about_html_path = r'c:\Users\rajku\OneDrive\Desktop\INFATOZZ\about_page_raw.html'
out_dir = r'c:\Users\rajku\OneDrive\Desktop\INFATOZZ\app\about'

with open(about_html_path, 'r', encoding='utf-8') as f:
    html = f.read()

# 1. Extract content between site-content start and footer-section start
start_match = re.search(r'<div\s+id="content"\s+class="site-content">', html)
end_match = re.search(r'<footer\s+class="footer-section\s+footer-bg">', html)

if not start_match or not end_match:
    print("Could not find start/end markers in HTML!")
    # Fallback to entire body
    start_pos = html.find('<body>')
    end_pos = html.find('</body>')
else:
    start_pos = start_match.start()
    end_pos = end_match.start()

content = html[start_pos:end_pos].strip()

# 2. Basic tag fixes
# Replace class= with className=
content = re.sub(r'\bclass\s*=\s*"(.*?)"', r'className="\1"', content)
content = re.sub(r'\bclass\s*=\s*\'(.*?)\'', r'className="\1"', content)

# 3. Self-closing tags: img, br, input, hr
def close_tag(match):
    tag = match.group(0)
    if tag.endswith('/>'):
        return tag
    return tag[:-1] + ' />'

content = re.sub(r'<img\b[^>]*?([^\/])>', close_tag, content)
content = re.sub(r'<br\b[^>]*?([^\/])>', close_tag, content)
content = re.sub(r'<input\b[^>]*?([^\/])>', close_tag, content)
content = re.sub(r'<hr\b[^>]*?([^\/])>', close_tag, content)

# Remove HTML comments
content = re.sub(r'<!--.*?-->', '', content, flags=re.DOTALL)

# 4. Style attribute conversion (e.g. style="background-image: url('...');")
def style_replacer(match):
    style_str = match.group(1)
    # Parse css rules
    rules = {}
    for rule in style_str.split(';'):
        if not rule.strip():
            continue
        parts = rule.split(':', 1)
        if len(parts) != 2:
            continue
        name = parts[0].strip()
        val = parts[1].strip()
        
        # Convert css property to camelCase
        camel_name = re.sub(r'-([a-z])', lambda m: m.group(1).upper(), name)
        rules[camel_name] = val
    
    # Generate react style object string
    style_props = []
    for k, v in rules.items():
        val_clean = v.replace('"', '\\"').replace("'", "\\'")
        style_props.append(f'{k}: "{val_clean}"')
    
    return 'style={{' + ', '.join(style_props) + '}}'

content = re.sub(r'\bstyle\s*=\s*"(.*?)"', style_replacer, content)
content = re.sub(r'\bstyle\s*=\s*\'(.*?)\'', style_replacer, content)

# 5. Fix common encoding issues - FIX: DO NOT replace empty string!
content = content.replace('What’s', "What's")
content = content.replace('Whats', "What's")
content = content.replace('&amp;', '&')

# 6. Replace internal URLs to match next router paths
content = content.replace('href="https://gramentheme.com/wp/infotek/"', 'href="/"')
content = content.replace('href="https://gramentheme.com/wp/infotek/about/"', 'href="/about"')
content = content.replace('href="/wp/infatoz/about/"', 'href="/about"')
content = content.replace('href="/wp/infatoz/"', 'href="/"')
content = content.replace('href="/wp/infatoz/services/"', 'href="/services"')
content = content.replace('href="/wp/infatoz/contact-2/"', 'href="/contact"')
content = content.replace('href="/wp/infatoz/team/"', 'href="/team"')

# 7. Write component
about_content_code = f"""'use client';
import {{ useEffect }} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AboutContent() {{
  useEffect(() => {{
    if (typeof window === 'undefined') return;

    const runInit = () => {{
      const $ = window.jQuery;
      if (!$) return;

      console.log("jQuery found on About page, initializing plugins...");

      // Re-trigger WOW animations
      if (window.WOW) {{
        try {{
          new window.WOW().init();
        }} catch (e) {{
          console.error("WOW init error:", e);
        }}
      }}
    }};

    // Poll for jQuery and main plugins to be ready
    if (window.jQuery) {{
      runInit();
    }} else {{
      const interval = setInterval(() => {{
        if (window.jQuery) {{
          clearInterval(interval);
          runInit();
        }}
      }}, 50);
      return () => clearInterval(interval);
    }}
  }}, []);

  return (
    <div style={{{{ minHeight: "100vh" }}}} suppressHydrationWarning>
      <Header />
      {content}
      <Footer />
    </div>
  );
}}
"""

with open(os.path.join(out_dir, 'AboutContent.js'), 'w', encoding='utf-8') as f:
    f.write(about_content_code)

print("Successfully re-generated app/about/AboutContent.js!")
