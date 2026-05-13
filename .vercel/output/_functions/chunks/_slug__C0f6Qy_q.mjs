import { c as createComponent } from './astro-component_DFHhP4zb.mjs';
import 'piccolore';
import { n as createRenderInstruction, m as maybeRenderHead, r as renderTemplate, h as addAttribute, o as renderHead, p as renderSlot, q as renderComponent, s as spreadAttributes, u as unescapeHTML } from './entrypoint_aPDZ7UUJ.mjs';
import 'clsx';

async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}</script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"></script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}

const $$Toast = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Toast container + global toast system -->${maybeRenderHead()}<div id="toast-root" class="fixed top-5 right-5 z-[9999] flex flex-col gap-2.5 pointer-events-none" data-astro-cid-5i5fqekp></div>  ${renderScript($$result, "/Users/linggapangestu/Documents/App/deltratech-landingpage/src/components/Toast.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/linggapangestu/Documents/App/deltratech-landingpage/src/components/Toast.astro", void 0);

const $$Chatbot = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Chatbot Widget -->${maybeRenderHead()}<div id="chatbot-widget"> <!-- Floating Button --> <button id="chatbot-toggle" aria-label="Open chat" aria-expanded="false"> <div class="chatbot-btn-inner"> <div class="chatbot-avatar"> <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"> <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.37 5.07L2 22l4.93-1.37A9.96 9.96 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"></path> <circle cx="8.5" cy="12" r="1.2" fill="currentColor" stroke="none"></circle> <circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none"></circle> <circle cx="15.5" cy="12" r="1.2" fill="currentColor" stroke="none"></circle> </svg> </div> <div class="chatbot-pulse"></div> </div> <!-- Tooltip --> <span class="chatbot-tooltip">Chat with us</span> </button> <!-- Chat Window --> <div id="chatbot-window" aria-hidden="true"> <!-- Header --> <div class="chatbot-header"> <div class="chatbot-header-info"> <div class="chatbot-header-avatar"> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.37 5.07L2 22l4.93-1.37A9.96 9.96 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"></path> <circle cx="8.5" cy="12" r="1.2" fill="currentColor" stroke="none"></circle> <circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none"></circle> <circle cx="15.5" cy="12" r="1.2" fill="currentColor" stroke="none"></circle> </svg> </div> <div> <div class="chatbot-header-name">Deltra AI</div> <div class="chatbot-header-status"> <span class="chatbot-status-dot"></span>
Online
</div> </div> </div> <button id="chatbot-close" aria-label="Close chat"> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"> <line x1="18" y1="6" x2="6" y2="18"></line> <line x1="6" y1="6" x2="18" y2="18"></line> </svg> </button> </div> <!-- Messages --> <div id="chatbot-messages" role="log" aria-live="polite"></div> <!-- Input --> <div class="chatbot-input-area"> <input id="chatbot-input" type="text" placeholder="Type a message…" autocomplete="off" maxlength="300"> <button id="chatbot-send" aria-label="Send message"> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"> <line x1="22" y1="2" x2="11" y2="13"></line> <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon> </svg> </button> </div> </div> </div>  ${renderScript($$result, "/Users/linggapangestu/Documents/App/deltratech-landingpage/src/components/Chatbot.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/linggapangestu/Documents/App/deltratech-landingpage/src/components/Chatbot.astro", void 0);

const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Layout;
  const { title = "Deltra — One platform. Every workflow. Intelligently automated." } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/x-icon" href="/favicon.ico"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="description" content="Deltra brings together administration, learning, communication, and AI-powered intelligence — so your school can focus on what matters most: students."><title>${title}</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,700&family=Raleway:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Toast", $$Toast, {})} ${renderComponent($$result, "Chatbot", $$Chatbot, {})} ${renderScript($$result, "/Users/linggapangestu/Documents/App/deltratech-landingpage/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "/Users/linggapangestu/Documents/App/deltratech-landingpage/src/layouts/Layout.astro", void 0);

const deltraLogo = new Proxy({"src":"/_astro/deltratech-logo.a7Gm5nDd.png","width":365,"height":382,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/linggapangestu/Documents/App/deltratech-landingpage/src/assets/images/deltratech-logo.png";
							}
							
							return target[name];
						}
					});

const $$Nav = createComponent(($$result, $$props, $$slots) => {
  const links = [
    { label: "Home", href: "/", active: true },
    { label: "Product", href: "#", active: false, showcase: true },
    { label: "Pricing", href: "#pricing", active: false },
    { label: "About Us", href: "#about", active: false },
    { label: "Contact", href: "#contact", active: false },
    { label: "FAQ ", href: "#faq", active: false }
  ];
  return renderTemplate`${maybeRenderHead()}<nav id="main-nav" class="fixed top-0 left-0 right-0 z-50 transition-all duration-300" data-astro-cid-dmqpwcec> <div class="max-w-6xl mx-auto px-4 md:px-8 py-3.5 flex items-center justify-between gap-4" data-astro-cid-dmqpwcec> <a href="/" aria-label="Deltra home" class="flex items-center shrink-0" data-astro-cid-dmqpwcec> <span class="mr-2" data-astro-cid-dmqpwcec> <img${addAttribute(deltraLogo.src, "src")} class="h-7 w-auto object-contain" alt="Deltra logo" data-astro-cid-dmqpwcec> </span> <span class="nav-logo-primary font-sans font-bold text-xl transition-colors duration-300" data-astro-cid-dmqpwcec>Deltra</span> <span class="nav-logo-accent  font-sans font-bold text-xl transition-colors duration-300" data-astro-cid-dmqpwcec>Tech</span> </a> <!-- Desktop nav links --> <ul class="hidden md:flex items-center gap-7 list-none" data-astro-cid-dmqpwcec> ${links.map((link) => renderTemplate`<li data-astro-cid-dmqpwcec> ${link.showcase ? renderTemplate`<button data-open-showcase class="nav-link font-sans text-lg font-bold transition-all duration-200 bg-transparent border-none cursor-pointer p-0 flex items-center gap-1.5" data-astro-cid-dmqpwcec> ${link.label} <span class="text-[10px] font-bold px-1.5 py-0.5 rounded-full" style="background:rgba(30,207,173,0.18);color:#1ecfad;" data-astro-cid-dmqpwcec>DEMO</span> </button>` : renderTemplate`<a${addAttribute(link.href, "href")} class="nav-link font-sans text-lg font-bold transition-all duration-200"${spreadAttributes(link.active ? { "data-active": "" } : {})} data-astro-cid-dmqpwcec> ${link.label} </a>`} </li>`)} </ul> <div class="flex items-center gap-3" data-astro-cid-dmqpwcec> <div class="hidden md:block text-white" data-astro-cid-dmqpwcec> <a href="#contact" data-toast class="font-sans font-bold text-sm bg-primary text-white px-5 py-2 rounded-full inline-flex items-center transition-all duration-200 hover:bg-accent hover:-translate-y-0.5 hover:shadow-md" data-astro-cid-dmqpwcec>
Request Demo
</a> </div> <!-- Hamburger (mobile only) --> <button id="nav-toggle" class="md:hidden flex flex-col gap-1.5 p-1 shrink-0" aria-label="Toggle menu" aria-expanded="false" data-astro-cid-dmqpwcec> <span class="hamburger-bar w-6 h-0.5 rounded transition-all duration-300" data-astro-cid-dmqpwcec></span> <span class="hamburger-bar w-6 h-0.5 rounded transition-all duration-300" data-astro-cid-dmqpwcec></span> <span class="hamburger-bar w-4 h-0.5 rounded transition-all duration-300" data-astro-cid-dmqpwcec></span> </button> </div> </div> <!-- Mobile menu --> <div id="nav-menu" class="hidden md:hidden border-t backdrop-blur-sm px-4 pb-4 transition-colors duration-300" data-astro-cid-dmqpwcec> <ul class="flex flex-col gap-1 list-none pt-3" data-astro-cid-dmqpwcec> ${links.map((link) => renderTemplate`<li data-astro-cid-dmqpwcec> ${link.showcase ? renderTemplate`<button data-open-showcase class="mobile-link flex items-center gap-2 font-sans text-sm py-2.5 px-3 rounded-lg transition-all duration-200 bg-transparent border-none w-full text-left cursor-pointer" data-astro-cid-dmqpwcec> ${link.label} <span class="text-[10px] font-bold px-1.5 py-0.5 rounded-full" style="background:rgba(30,207,173,0.18);color:#1ecfad;" data-astro-cid-dmqpwcec>DEMO</span> </button>` : renderTemplate`<a${addAttribute(link.href, "href")} class="mobile-link block font-sans text-sm py-2.5 px-3 rounded-lg transition-all duration-200"${spreadAttributes(link.active ? { "data-active": "" } : {})} data-astro-cid-dmqpwcec> ${link.label} </a>`} </li>`)} </ul> <div class="pt-3 border-t border-white/20 text-white mt-2" data-astro-cid-dmqpwcec> <a href="#contact" data-toast class="font-sans font-bold text-sm bg-primary text-white px-7 py-3 rounded-full inline-flex items-center transition-all duration-200 hover:bg-accent hover:-translate-y-0.5" data-astro-cid-dmqpwcec>
Request Demo
</a> </div> </div> </nav> ${renderScript($$result, "/Users/linggapangestu/Documents/App/deltratech-landingpage/src/components/Nav.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/linggapangestu/Documents/App/deltratech-landingpage/src/components/Nav.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const product = [
    { label: "Features", href: "#features" },
    { label: "AI Tools", href: "#ai" },
    { label: "Pricing", href: "#pricing" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Security", href: "#contact" }
  ];
  const company = [
    { label: "About Us", href: "#" },
    { label: "Our Mission", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
    { label: "Blog", href: "#" }
  ];
  const support = [
    { label: "Help Center", href: "#" },
    { label: "Contact Us", href: "#contact" },
    { label: "Request Demo", href: "#contact" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" }
  ];
  const socials = [
    {
      label: "Instagram",
      href: "#",
      icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`
    },
    {
      label: "LinkedIn",
      href: "#",
      icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`
    },
    {
      label: "Twitter / X",
      href: "#",
      icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`
    },
    {
      label: "Facebook",
      href: "#",
      icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>`
    }
  ];
  const cols = [
    { title: "Product", items: product },
    { title: "Company", items: company },
    { title: "Support", items: support }
  ];
  return renderTemplate`${maybeRenderHead()}<footer class="bg-primary pt-16 pb-8 px-4 md:px-8"> <div class="max-w-6xl mx-auto"> <div class="grid grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr] gap-10 pb-12 border-b border-white/8"> <!-- Brand column --> <div class="col-span-2 md:col-span-1 flex flex-col gap-5"> <a href="/" aria-label="Deltra home" class="inline-flex items-center gap-2"> <span class="font-sans font-bold text-xl text-white">Deltra</span> <span class="font-sans font-bold text-xl text-accent">Tech</span> <span class="w-2 h-2 rounded-full bg-accent mb-1 shrink-0"></span> </a> <p class="font-sans text-sm text-white/40 leading-relaxed max-w-56">
All-in-one AI-powered school operations platform for Indonesian K-12 schools.
</p> <!-- Trust badges --> <div class="flex flex-wrap gap-2"> ${["🔒 Data Privacy", "🇮🇩 Made for Indonesia", "☁️ Secure Cloud"].map((badge) => renderTemplate`<span class="font-sans text-xs text-white/40 border border-white/10 rounded-full px-3 py-1"> ${badge} </span>`)} </div> <!-- Social icons --> <div class="flex gap-2"> ${socials.map((s) => renderTemplate`<a${addAttribute(s.href, "href")}${addAttribute(s.label, "title")}${addAttribute(s.label, "aria-label")} class="w-9 h-9 rounded-xl bg-white/5 border border-white/10 text-white/40 flex items-center justify-center transition-all duration-200 hover:bg-accent hover:text-primary hover:border-accent"> <span>${unescapeHTML(s.icon)}</span> </a>`)} </div> </div> <!-- Nav columns --> ${cols.map((col) => renderTemplate`<div class="flex flex-col gap-4"> <h4 class="font-sans font-bold text-xs text-white/50 uppercase tracking-widest">${col.title}</h4> <ul class="flex flex-col gap-2.5 list-none"> ${col.items.map((item) => renderTemplate`<li> <a${addAttribute(item.href, "href")} class="font-sans text-sm text-white/30 transition-all duration-200 hover:text-accent hover:translate-x-0.5 inline-block"> ${item.label} </a> </li>`)} </ul> </div>`)} </div> <!-- Bottom strip --> <div class="pt-7 flex flex-col sm:flex-row justify-between items-center gap-3"> <p class="font-sans text-xs text-white/20">
© 2026 Deltra Tech Inc. All rights reserved.
</p> <p class="font-sans text-xs text-white/20">
Made with ♥ for educators across Indonesia
</p> </div> </div> </footer>`;
}, "/Users/linggapangestu/Documents/App/deltratech-landingpage/src/components/Footer.astro", void 0);

const prerender = false;
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$slug;
  const API_BASE = "http://localhost:3000/api";
  const { slug } = Astro2.params;
  const TAG_COLORS = [
    "bg-tint text-accent border-border",
    "bg-peach border border-[#e8b8a8] text-[#c05a3a]",
    "bg-lavender border border-[#bbadd8] text-[#7a5aa8]"
  ];
  function formatDate(iso) {
    return new Date(iso).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric"
    });
  }
  function estimateReadTime(content) {
    const words = content?.split(/\s+/).length ?? 0;
    return `${Math.max(1, Math.ceil(words / 200))} min read`;
  }
  let post = null;
  try {
    const res = await fetch(`${API_BASE}/posts/${slug}`);
    if (res.ok) {
      const json = await res.json();
      post = json.data ?? null;
    }
  } catch {
  }
  if (!post) return Astro2.redirect("/blog");
  const readTime = estimateReadTime(post.content);
  const date = formatDate(post.createdAt);
  const coverSrc = post.coverImage ?? "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1400&h=640&fit=crop&auto=format&q=80";
  function contentToHtml(text) {
    return text.split(/\n{2,}/).map((p) => p.trim()).filter(Boolean).map((p) => {
      const m = p.match(/^(#{1,3})\s(.+)/);
      if (m) {
        const level = m[1].length + 1;
        return `<h${level} class="article-heading">${m[2]}</h${level}>`;
      }
      return `<p>${p.replace(/\n/g, "<br/>")}</p>`;
    }).join("");
  }
  const contentHtml = contentToHtml(post.content);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${post.title} — Deltra`, "data-astro-cid-4sn4zg3r": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Nav", $$Nav, { "data-astro-cid-4sn4zg3r": true })} ${maybeRenderHead()}<main class="min-h-screen bg-surface" data-astro-cid-4sn4zg3r> <!-- ── Page header (dark, below fixed nav) ───────────── --> <header class="bg-primary pt-24 pb-10" data-astro-cid-4sn4zg3r> <div class="max-w-5xl mx-auto px-6 md:px-12" data-astro-cid-4sn4zg3r> <!-- Back link --> <div class="text-white" data-astro-cid-4sn4zg3r> <a href="/blog" class="inline-flex items-center gap-1.5 font-sans text-lg font-semibold text-white hover:text-accent transition-colors duration-200 mb-6" data-astro-cid-4sn4zg3r> <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" data-astro-cid-4sn4zg3r> <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" data-astro-cid-4sn4zg3r></path> </svg>
All articles
</a> </div> <!-- Tags --> ${post.tags.length > 0 && renderTemplate`<div class="flex flex-wrap gap-2 mb-4" data-astro-cid-4sn4zg3r> ${post.tags.map((tag, i) => renderTemplate`<span${addAttribute(`inline-flex items-center font-sans font-semibold text-xs border rounded-full px-3 py-1 ${TAG_COLORS[i % TAG_COLORS.length]}`, "class")} data-astro-cid-4sn4zg3r> ${tag.name} </span>`)} </div>`} <!-- Title --> <h1 class="font-display font-bold text-3xl md:text-5xl text-white leading-tight mb-5 max-w-3xl" data-astro-cid-4sn4zg3r> ${post.title} </h1> <!-- Meta --> <div class="flex items-center gap-3 font-sans text-sm text-white/50" data-astro-cid-4sn4zg3r> <span data-astro-cid-4sn4zg3r>${date}</span> <span class="w-1 h-1 rounded-full bg-white/20 inline-block" data-astro-cid-4sn4zg3r></span> <span class="font-semibold text-accent" data-astro-cid-4sn4zg3r>${readTime}</span> </div> </div> </header> <!-- ── Cover image ────────────────────────────────────── --> <div class="max-w-5xl mx-auto px-6 md:px-12 -mt-6" data-astro-cid-4sn4zg3r> <div class="rounded-2xl overflow-hidden shadow-xl" style="height:380px;" data-astro-cid-4sn4zg3r> <img${addAttribute(coverSrc, "src")}${addAttribute(post.title, "alt")} style="width:100%;height:100%;object-fit:cover;object-position:center;display:block;" data-astro-cid-4sn4zg3r> </div> </div> <!-- ── Article body ───────────────────────────────────── --> <div class="max-w-6xl mx-auto px-6 md:px-12 pt-12 pb-16 grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-12" data-astro-cid-4sn4zg3r> <article data-astro-cid-4sn4zg3r> ${post.excerpt && renderTemplate`<p class="font-display text-xl md:text-2xl italic leading-relaxed border-l-4 border-accent pl-6 mb-12 text-primary/80" data-astro-cid-4sn4zg3r> ${post.excerpt} </p>`} <div class="article-body" data-astro-cid-4sn4zg3r>${unescapeHTML(contentHtml)}</div> </article> <!-- Sidebar --> <aside class="hidden lg:flex flex-col gap-6" data-astro-cid-4sn4zg3r> <div class="bg-white border border-border rounded-2xl p-6 flex flex-col gap-4 sticky top-28" data-astro-cid-4sn4zg3r> <p class="font-sans text-xs font-bold uppercase tracking-widest text-muted" data-astro-cid-4sn4zg3r>About this article</p> <div class="flex flex-col gap-3 font-sans text-sm" data-astro-cid-4sn4zg3r> <div class="flex items-center justify-between" data-astro-cid-4sn4zg3r> <span class="text-muted" data-astro-cid-4sn4zg3r>Published</span> <span class="font-semibold text-primary text-right" data-astro-cid-4sn4zg3r>${date}</span> </div> <div class="flex items-center justify-between" data-astro-cid-4sn4zg3r> <span class="text-muted" data-astro-cid-4sn4zg3r>Read time</span> <span class="font-semibold text-accent" data-astro-cid-4sn4zg3r>${readTime}</span> </div> </div> ${post.tags.length > 0 && renderTemplate`<div class="border-t border-border pt-4 flex flex-col gap-2" data-astro-cid-4sn4zg3r> <p class="font-sans text-xs font-bold uppercase tracking-widest text-muted" data-astro-cid-4sn4zg3r>Topics</p> <div class="flex flex-wrap gap-2" data-astro-cid-4sn4zg3r> ${post.tags.map((tag, i) => renderTemplate`<span${addAttribute(`inline-flex items-center font-sans font-semibold text-xs border rounded-full px-3 py-1 ${TAG_COLORS[i % TAG_COLORS.length]}`, "class")} data-astro-cid-4sn4zg3r> ${tag.name} </span>`)} </div> </div>`} </div> </aside> </div> <!-- ── Divider ─────────────────────────────────────────── --> <div class="max-w-5xl mx-auto px-6 md:px-12" data-astro-cid-4sn4zg3r> <div class="border-t border-border" data-astro-cid-4sn4zg3r></div> </div> <!-- ── CTA ────────────────────────────────────────────── --> <section class="py-20" data-astro-cid-4sn4zg3r> <div class="max-w-5xl mx-auto px-6 md:px-12" data-astro-cid-4sn4zg3r> <div class="bg-primary rounded-3xl px-8 py-12 md:px-14 flex flex-col md:flex-row md:items-center gap-8" data-astro-cid-4sn4zg3r> <div class="flex-1" data-astro-cid-4sn4zg3r> <span class="inline-flex items-center font-sans font-semibold text-xs text-accent bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-4" data-astro-cid-4sn4zg3r>
Deltra for Schools
</span> <h2 class="font-display font-bold text-2xl md:text-3xl text-white leading-snug mb-2" data-astro-cid-4sn4zg3r>
Ready to modernise your school?
</h2> <p class="font-sans text-sm text-white/60 leading-relaxed" data-astro-cid-4sn4zg3r>
Join hundreds of Indonesian schools already running on Deltra.
</p> </div> <a href="/#contact" class="shrink-0 inline-flex items-center justify-center font-sans font-bold text-sm text-primary bg-accent px-8 py-3.5 rounded-full hover:bg-[#18b899] hover:-translate-y-0.5 transition-all duration-200 shadow-lg shadow-accent/20" data-astro-cid-4sn4zg3r>
Request a Demo →
</a> </div> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-4sn4zg3r": true })} ` })}`;
}, "/Users/linggapangestu/Documents/App/deltratech-landingpage/src/pages/blog/[slug].astro", void 0);
const $$file = "/Users/linggapangestu/Documents/App/deltratech-landingpage/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
