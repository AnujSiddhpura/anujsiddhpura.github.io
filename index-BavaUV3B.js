(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`1234`;function t(e){let t=new Date(e).getDay();return t===0||t===6}function n(e){return t(e)?1e3:600}function r(e){let[t]=e.split(`:`),n=parseInt(t),r=(n+1)%24,i=e=>e>=12?`pm`:`am`,a=e=>{let t=e%12;return t===0?12:t};return`${a(n)}${i(n)} to ${a(r)}${i(r)}`}function i(e){let r=[],i=t(e)?24:18,a=t(e)?0:6,o=n(e);for(let e=0;e<i;e++){let t=((a+e)%24).toString().padStart(2,`0`)+`:00`;r.push({time:t,price:o})}return r}function a(){let e=new Date().toISOString().split(`T`)[0],t=new Date;t.setDate(t.getDate()+1);let r=t.toISOString().split(`T`)[0],i=[{id:`SBR-1001`,guestName:`Rahul Patel`,phone:`9876543210`,email:`rahul@gmail.com`,court:1,date:e,timeSlot:`09:00`,amount:n(e),status:`confirmed`,createdAt:new Date().toISOString()},{id:`SBR-1002`,guestName:`Amit Shah`,phone:`9988776655`,email:`amit@yahoo.com`,court:3,date:e,timeSlot:`18:00`,amount:n(e),status:`confirmed`,createdAt:new Date().toISOString()},{id:`SBR-1003`,guestName:`Jayesh Jadeja`,phone:`9012345678`,email:``,court:5,date:e,timeSlot:`18:00`,amount:n(e),status:`confirmed`,createdAt:new Date().toISOString()},{id:`SBR-1004`,guestName:`Sanjay Kumar`,phone:`9123456789`,email:`sanjay@sport.com`,court:2,date:r,timeSlot:`20:00`,amount:n(r),status:`confirmed`,createdAt:new Date().toISOString()}];localStorage.getItem(`sportbox-bookings`)||localStorage.setItem(`sportbox-bookings`,JSON.stringify(i))}var o={init(){a()},getBookings(){return JSON.parse(localStorage.getItem(`sportbox-bookings`)||`[]`)},getBookingById(e){return this.getBookings().find(t=>t.id===e)},addBooking(e){let t=this.getBookings(),n={id:`SBR-`+Math.floor(1e3+Math.random()*9e3),...e,status:`confirmed`,createdAt:new Date().toISOString()};return t.push(n),localStorage.setItem(`sportbox-bookings`,JSON.stringify(t)),n},updateBookingStatus(e,t){let n=this.getBookings(),r=n.findIndex(t=>t.id===e);return r===-1?null:(n[r].status=t,localStorage.setItem(`sportbox-bookings`,JSON.stringify(n)),n[r])},deleteBooking(e){let t=this.getBookings().filter(t=>t.id!==e);localStorage.setItem(`sportbox-bookings`,JSON.stringify(t))},getBookedCourts(e,t){return this.getBookings().filter(n=>n.date===e&&n.timeSlot===t&&n.status!==`cancelled`).map(e=>e.court)},validatePin(t){return t===e},isAdminLoggedIn(){return localStorage.getItem(`sportbox-admin-auth`)===`true`},loginAdmin(){localStorage.setItem(`sportbox-admin-auth`,`true`)},logoutAdmin(){localStorage.removeItem(`sportbox-admin-auth`)}},s={en:{brand:`Sport<span>Box</span>`,brandFull:`SportBox Rajkot`,bookNow:`Book Now`,admin:`Admin`,heroBadge:`🏏 Rajkot's Premium Box Cricket`,heroTitle:`Book Your Box,<br><span class="highlight">Play Your Game</span>`,heroSubtitle:`6 premium box cricket courts with easy online booking. Pick your slot, pay online, and just show up to play!`,heroCta:`Book Your Court`,courts:`Courts`,weekday:`Weekday`,weekend:`Weekend`,perHour:`/hr`,courtCount:`6`,weekdayPrice:`₹600`,weekendPrice:`₹1,000`,howItWorks:`How It Works`,step1Title:`Pick Your Slot`,step1Desc:`Choose your preferred date, time, and court`,step2Title:`Fill Details`,step2Desc:`Enter your name and phone number`,step3Title:`Pay & Play`,step3Desc:`Pay online and show up at your booked time`,footerAddress:`📍 SportBox Rajkot, Gujarat`,footerPhone:`📞 +91 98765 43210`,footerCopy:`© 2026 SportBox Rajkot. All rights reserved.`,selectDate:`Select Date`,selectTime:`Select Time Slot`,selectCourt:`Select Court`,guestDetails:`Your Details`,stepOf:`Step {current} of {total}`,continue:`Continue`,back:`Back`,available:`Available`,booked:`Booked`,selected:`Selected`,court:`Court`,sun:`SUN`,mon:`MON`,tue:`TUE`,wed:`WED`,thu:`THU`,fri:`FRI`,sat:`SAT`,jan:`Jan`,feb:`Feb`,mar:`Mar`,apr:`Apr`,may:`May`,jun:`Jun`,jul:`Jul`,aug:`Aug`,sep:`Sep`,oct:`Oct`,nov:`Nov`,dec:`Dec`,yourName:`Your Name`,namePlaceholder:`Enter your full name`,phone:`Phone Number`,phonePlaceholder:`Enter 10-digit mobile number`,email:`Email (Optional)`,emailPlaceholder:`Enter your email`,proceedToPay:`Proceed to Pay`,bookingSummary:`Booking Summary`,date:`Date`,time:`Time`,amount:`Amount`,totalAmount:`Total Amount`,paymentTitle:`Complete Payment`,payingTo:`Paying to`,payAmount:`Pay ₹{amount}`,upi:`UPI`,card:`Card`,netbanking:`Netbanking`,processing:`Processing payment...`,paymentSuccess:`Payment Successful!`,bookingConfirmed:`Booking Confirmed!`,confirmSubtitle:`Your court has been booked successfully. Show this confirmation at the venue.`,bookingId:`Booking ID`,bookAnother:`Book Another Slot`,downloadReceipt:`Download Receipt`,goHome:`Go to Home`,adminPanel:`Admin Panel`,adminLoginTitle:`Admin Access`,adminLoginSubtitle:`Enter PIN to access the admin dashboard`,enterPin:`Enter PIN`,login:`Login`,wrongPin:`Incorrect PIN. Try again.`,logout:`Logout`,dashboard:`Dashboard`,todayBookings:`Today's Bookings`,allBookings:`All Bookings`,totalBookings:`Total Bookings`,totalRevenue:`Revenue`,courtsOccupied:`Courts Busy`,viewTimeline:`Timeline`,viewList:`List View`,addBooking:`+ Add Booking`,noBookings:`No bookings for this date`,confirmed:`Confirmed`,completed:`Completed`,cancelled:`Cancelled`,markComplete:`Complete`,cancelBooking:`Cancel`,manualBooking:`Add Walk-in Booking`,saveBooking:`Save Booking`,nameRequired:`Name is required`,phoneRequired:`Phone number is required`,phoneInvalid:`Enter a valid 10-digit phone number`,selectDateFirst:`Please select a date`,selectTimeFirst:`Please select a time slot`,selectCourtFirst:`Please select a court`,today:`Today`,tomorrow:`Tomorrow`},gu:{brand:`Sport<span>Box</span>`,brandFull:`SportBox રાજકોટ`,bookNow:`બુક કરો`,admin:`એડમિન`,heroBadge:`🏏 રાજકોટનું પ્રીમિયમ બોક્સ ક્રિકેટ`,heroTitle:`તમારું બોક્સ બુક કરો,<br><span class="highlight">રમવાનું શરૂ કરો</span>`,heroSubtitle:`6 પ્રીમિયમ બોક્સ ક્રિકેટ કોર્ટ. તમારો સ્લોટ પસંદ કરો, ઓનલાઇન ચૂકવણી કરો, અને રમવા આવો!`,heroCta:`કોર્ટ બુક કરો`,courts:`કોર્ટ`,weekday:`અઠવાડિયું`,weekend:`વીકેન્ડ`,perHour:`/કલાક`,courtCount:`6`,weekdayPrice:`₹600`,weekendPrice:`₹1,000`,howItWorks:`કેવી રીતે કામ કરે છે`,step1Title:`સ્લોટ પસંદ કરો`,step1Desc:`તમારી મનપસંદ તારીખ, સમય અને કોર્ટ પસંદ કરો`,step2Title:`માહિતી ભરો`,step2Desc:`તમારું નામ અને ફોન નંબર દાખલ કરો`,step3Title:`ચૂકવણી કરો અને રમો`,step3Desc:`ઓનલાઇન ચૂકવણી કરો અને બુક કરેલા સમયે આવો`,footerAddress:`📍 SportBox રાજકોટ, ગુજરાત`,footerPhone:`📞 +91 98765 43210`,footerCopy:`© 2026 SportBox રાજકોટ. બધા હકો અમારી પાસે.`,selectDate:`તારીખ પસંદ કરો`,selectTime:`સમય પસંદ કરો`,selectCourt:`કોર્ટ પસંદ કરો`,guestDetails:`તમારી માહિતી`,stepOf:`સ્ટેપ {current} / {total}`,continue:`આગળ`,back:`પાછા`,available:`ઉપલબ્ધ`,booked:`બુક થયેલ`,selected:`પસંદ`,court:`કોર્ટ`,sun:`રવિ`,mon:`સોમ`,tue:`મંગળ`,wed:`બુધ`,thu:`ગુરુ`,fri:`શુક્ર`,sat:`શનિ`,jan:`જાન્યુ`,feb:`ફેબ્રુ`,mar:`માર્ચ`,apr:`એપ્રિલ`,may:`મે`,jun:`જૂન`,jul:`જુલાઈ`,aug:`ઓગસ્ટ`,sep:`સપ્ટે`,oct:`ઓક્ટો`,nov:`નવે`,dec:`ડિસે`,yourName:`તમારું નામ`,namePlaceholder:`તમારું પૂરું નામ દાખલ કરો`,phone:`ફોન નંબર`,phonePlaceholder:`10 અંકનો મોબાઇલ નંબર`,email:`ઈમેલ (વૈકલ્પિક)`,emailPlaceholder:`તમારો ઈમેલ દાખલ કરો`,proceedToPay:`ચૂકવણી કરો`,bookingSummary:`બુકિંગ સારાંશ`,date:`તારીખ`,time:`સમય`,amount:`રકમ`,totalAmount:`કુલ રકમ`,paymentTitle:`ચૂકવણી પૂર્ણ કરો`,payingTo:`ચૂકવણી`,payAmount:`₹{amount} ચૂકવો`,upi:`UPI`,card:`કાર્ડ`,netbanking:`નેટબેન્કિંગ`,processing:`ચૂકવણી પ્રક્રિયા ચાલુ છે...`,paymentSuccess:`ચૂકવણી સફળ!`,bookingConfirmed:`બુકિંગ કન્ફર્મ!`,confirmSubtitle:`તમારો કોર્ટ સફળતાપૂર્વક બુક થઈ ગયો છે. આ કન્ફર્મેશન વેન્યુ પર બતાવો.`,bookingId:`બુકિંગ ID`,bookAnother:`બીજો સ્લોટ બુક કરો`,downloadReceipt:`રસીદ ડાઉનલોડ કરો`,goHome:`હોમ પર જાઓ`,adminPanel:`એડમિન પેનલ`,adminLoginTitle:`એડમિન ઍક્સેસ`,adminLoginSubtitle:`એડમિન ડેશબોર્ડ માટે PIN દાખલ કરો`,enterPin:`PIN દાખલ કરો`,login:`લૉગિન`,wrongPin:`ખોટો PIN. ફરી પ્રયાસ કરો.`,logout:`લૉગઆઉટ`,dashboard:`ડેશબોર્ડ`,todayBookings:`આજના બુકિંગ`,allBookings:`બધા બુકિંગ`,totalBookings:`કુલ બુકિંગ`,totalRevenue:`આવક`,courtsOccupied:`કોર્ટ ભરેલા`,viewTimeline:`ટાઇમલાઇન`,viewList:`યાદી`,addBooking:`+ બુકિંગ ઉમેરો`,noBookings:`આ તારીખે કોઈ બુકિંગ નથી`,confirmed:`કન્ફર્મ`,completed:`પૂર્ણ`,cancelled:`રદ`,markComplete:`પૂર્ણ`,cancelBooking:`રદ`,manualBooking:`વૉક-ઇન બુકિંગ ઉમેરો`,saveBooking:`બુકિંગ સેવ કરો`,nameRequired:`નામ જરૂરી છે`,phoneRequired:`ફોન નંબર જરૂરી છે`,phoneInvalid:`માન્ય 10 અંકનો ફોન નંબર દાખલ કરો`,selectDateFirst:`કૃપા કરીને તારીખ પસંદ કરો`,selectTimeFirst:`કૃપા કરીને સમય પસંદ કરો`,selectCourtFirst:`કૃપા કરીને કોર્ટ પસંદ કરો`,today:`આજે`,tomorrow:`કાલે`}},c=localStorage.getItem(`sportbox-lang`)||`en`;function l(e,t={}){let n=s[c]?.[e]||s.en[e]||e;for(let[e,r]of Object.entries(t))n=n.replace(`{${e}}`,r);return n}function u(){return c}function d(e){c=e,localStorage.setItem(`sportbox-lang`,e),window.dispatchEvent(new CustomEvent(`langchange`,{detail:{lang:e}}))}function f(e){return l([`sun`,`mon`,`tue`,`wed`,`thu`,`fri`,`sat`][e])}function p(e){return l([`jan`,`feb`,`mar`,`apr`,`may`,`jun`,`jul`,`aug`,`sep`,`oct`,`nov`,`dec`][e])}function m(e){let t=document.createElement(`header`);t.className=`header`;let n=window.location.hash||`#/`,r=n===`#/`||n===`#`,i=n.startsWith(`#/admin`),a=n===`#/admin/dashboard`,s=document.createElement(`div`);s.className=`header-inner`;let c=document.createElement(`div`);if(c.style.display=`flex`,c.style.alignItems=`center`,c.style.gap=`var(--space-2)`,!r){let t=document.createElement(`button`);t.className=`header-back`,t.innerHTML=`
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="19" y1="12" x2="5" y2="12"></line>
        <polyline points="12 19 5 12 12 5"></polyline>
      </svg>
    `,t.ariaLabel=l(`back`),t.addEventListener(`click`,()=>{a?(o.logoutAdmin(),e.navigate(`/`)):n.startsWith(`#/confirmation`)?e.navigate(`/`):window.history.back()}),c.appendChild(t)}let f=document.createElement(`a`);f.href=`#/`,f.className=`header-logo`,f.innerHTML=`
    <svg class="header-logo-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <defs>
        <linearGradient id="logo-g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#00E676"/>
          <stop offset="100%" stop-color="#00C853"/>
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="28" fill="none" stroke="url(#logo-g)" stroke-width="4"/>
      <line x1="32" y1="12" x2="32" y2="52" stroke="url(#logo-g)" stroke-width="3" stroke-linecap="round"/>
      <path d="M22 42 L32 32 L42 42" fill="none" stroke="#FFD600" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <span>${l(`brand`)}</span>
  `,c.appendChild(f),s.appendChild(c);let p=document.createElement(`div`);p.className=`header-actions`;let m=document.createElement(`div`);m.className=`lang-switch`;let h=document.createElement(`button`);h.className=u()===`en`?`active`:``,h.innerText=`EN`,h.addEventListener(`click`,()=>d(`en`));let g=document.createElement(`button`);if(g.className=u()===`gu`?`active`:``,g.innerText=`ગુજરાતી`,g.addEventListener(`click`,()=>d(`gu`)),m.appendChild(h),m.appendChild(g),p.appendChild(m),o.isAdminLoggedIn()&&i){let t=document.createElement(`button`);t.className=`btn btn-sm btn-outline`,t.innerText=l(`logout`),t.addEventListener(`click`,()=>{o.logoutAdmin(),e.navigate(`/`)}),p.appendChild(t)}else if(r){let e=document.createElement(`a`);e.href=`#/admin`,e.className=`btn btn-sm btn-ghost`,e.innerText=l(`admin`),p.appendChild(e)}return s.appendChild(p),t.appendChild(s),t}function h(e){let t=document.createElement(`div`);t.className=`page`,t.appendChild(m(e));let n=document.createElement(`section`);n.className=`home-hero`,n.innerHTML=`
    <div class="hero-badge">
      ${l(`heroBadge`)}
    </div>
    <h1 class="hero-title">${l(`heroTitle`)}</h1>
    <p class="hero-subtitle">${l(`heroSubtitle`)}</p>
    <div class="hero-cta">
      <button id="cta-book" class="btn btn-primary btn-lg">${l(`heroCta`)}</button>
    </div>
    
    <div class="hero-stats">
      <div class="hero-stat">
        <div class="hero-stat-value">${l(`courtCount`)}</div>
        <div class="hero-stat-label">${l(`courts`)}</div>
      </div>
      <div style="width: 1px; background: var(--color-border);"></div>
      <div class="hero-stat">
        <div class="hero-stat-value">${l(`weekdayPrice`)}</div>
        <div class="hero-stat-label">${l(`weekday`)}</div>
      </div>
      <div style="width: 1px; background: var(--color-border);"></div>
      <div class="hero-stat">
        <div class="hero-stat-value">${l(`weekendPrice`)}</div>
        <div class="hero-stat-label">${l(`weekend`)}</div>
      </div>
    </div>
  `;let r=document.createElement(`section`);r.className=`info-cards`,r.innerHTML=`
    <div class="card card-glass info-card">
      <div class="info-card-icon">🏟️</div>
      <div class="info-card-value">${l(`courtCount`)}</div>
      <div class="info-card-label">${l(`courts`)}</div>
    </div>
    <div class="card card-glass info-card">
      <div class="info-card-icon">🗓️</div>
      <div class="info-card-value">${l(`weekdayPrice`)}<span style="font-size: var(--text-xs); color: var(--color-text-muted); font-weight: normal;">${l(`perHour`)}</span></div>
      <div class="info-card-label">${l(`weekday`)}</div>
    </div>
    <div class="card card-glass info-card">
      <div class="info-card-icon">⚡</div>
      <div class="info-card-value">${l(`weekendPrice`)}<span style="font-size: var(--text-xs); color: var(--color-text-muted); font-weight: normal;">${l(`perHour`)}</span></div>
      <div class="info-card-label">${l(`weekend`)}</div>
    </div>
  `;let i=document.createElement(`section`);i.className=`how-it-works`,i.innerHTML=`
    <h2 class="section-title" style="text-align: center;">${l(`howItWorks`)}</h2>
    <div class="steps-grid">
      <div class="card card-glass step-card">
        <div class="step-number">1</div>
        <div class="step-info">
          <h3>${l(`step1Title`)}</h3>
          <p>${l(`step1Desc`)}</p>
        </div>
      </div>
      <div class="card card-glass step-card">
        <div class="step-number">2</div>
        <div class="step-info">
          <h3>${l(`step2Title`)}</h3>
          <p>${l(`step2Desc`)}</p>
        </div>
      </div>
      <div class="card card-glass step-card">
        <div class="step-number">3</div>
        <div class="step-info">
          <h3>${l(`step3Title`)}</h3>
          <p>${l(`step3Desc`)}</p>
        </div>
      </div>
    </div>
  `;let a=document.createElement(`footer`);return a.className=`footer`,a.innerHTML=`
    <div class="footer-brand">${l(`brand`)}</div>
    <div class="footer-info">
      ${l(`footerAddress`)}<br>
      ${l(`footerPhone`)}
    </div>
    <div class="footer-links">
      <a href="#/book">${l(`bookNow`)}</a>
      <a href="#/admin">${l(`admin`)}</a>
    </div>
    <div class="footer-copy">${l(`footerCopy`)}</div>
  `,t.appendChild(n),t.appendChild(r),t.appendChild(i),t.appendChild(a),n.querySelector(`#cta-book`).addEventListener(`click`,()=>{e.navigate(`/book`)}),t}function g(e,t,n,r){let i=document.getElementById(`modal-container`);if(!i)return;let a=document.createElement(`div`);a.className=`modal-overlay`;let o=document.createElement(`div`);o.className=`modal-content`,o.style.maxWidth=`420px`,o.style.padding=`0`,o.style.borderRadius=`var(--radius-lg)`,o.style.overflow=`hidden`,o.style.border=`none`;let s=document.createElement(`div`);s.style.background=`#F8FAFC`,s.style.padding=`var(--space-5)`,s.style.color=`var(--dark-900)`,s.style.position=`relative`,s.style.display=`flex`,s.style.alignItems=`center`,s.style.justifyContent=`space-between`,s.style.borderBottom=`1px solid var(--color-border)`;let c=document.createElement(`div`);c.innerHTML=`
    <div style="font-family: var(--font-heading); font-weight: 800; font-size: var(--text-lg); display: flex; align-items: center; gap: 8px;">
      <span style="color: #3b82f6;">Razorpay</span> Secure
    </div>
    <div style="font-size: var(--text-xs); color: var(--gray-500); margin-top: 2px; font-weight: 600;">SportBox Rajkot</div>
  `;let u=document.createElement(`div`);u.style.textAlign=`right`,u.innerHTML=`
    <div style="font-size: var(--text-xs); color: var(--gray-500); font-weight: 600;">${l(`amount`)}</div>
    <div style="font-size: var(--text-xl); font-weight: 800; color: var(--green-600);">₹${e}</div>
  `,s.appendChild(c),s.appendChild(u);let d=document.createElement(`button`);d.style.position=`absolute`,d.style.top=`12px`,d.style.right=`12px`,d.style.color=`var(--gray-400)`,d.style.background=`none`,d.style.border=`none`,d.style.fontSize=`1.5rem`,d.style.cursor=`pointer`,d.innerHTML=`&times;`,d.ariaLabel=`Cancel`,d.addEventListener(`click`,()=>{C(),r&&r()}),s.appendChild(d);let f=document.createElement(`div`);f.style.background=`#FFFFFF`,f.style.padding=`var(--space-5)`;let p=document.createElement(`div`);p.style.display=`flex`,p.style.background=`var(--gray-100)`,p.style.borderRadius=`var(--radius-md)`,p.style.padding=`3px`,p.style.marginBottom=`var(--space-5)`;let m=(e,t,n=!1)=>{let r=document.createElement(`button`);return r.className=`btn btn-sm`,r.style.flex=`1`,r.style.borderRadius=`calc(var(--radius-md) - 2px)`,r.style.background=n?`#3b82f6`:`transparent`,r.style.color=n?`#fff`:`var(--gray-500)`,r.style.fontWeight=`700`,r.style.minBlockSize=`34px`,r.innerText=t,r.addEventListener(`click`,()=>b(e)),r},h=m(`upi`,l(`upi`),!0),g=m(`card`,l(`card`)),_=m(`nb`,l(`netbanking`));p.appendChild(h),p.appendChild(g),p.appendChild(_),f.appendChild(p);let v=document.createElement(`div`);v.style.minHeight=`140px`,f.appendChild(v);let y=`upi`,b=e=>{y=e,h.style.background=e===`upi`?`#3b82f6`:`transparent`,h.style.color=e===`upi`?`#fff`:`var(--gray-500)`,g.style.background=e===`card`?`#3b82f6`:`transparent`,g.style.color=e===`card`?`#fff`:`var(--gray-500)`,_.style.background=e===`nb`?`#3b82f6`:`transparent`,_.style.color=e===`nb`?`#fff`:`var(--gray-500)`,x()},x=()=>{v.innerHTML=``,y===`upi`?v.innerHTML=`
        <div class="form-group" style="animation: fade-in var(--duration-fast) ease;">
          <label class="form-label" for="upi-id" style="color: var(--dark-800);">UPI ID / VPA</label>
          <input type="text" id="upi-id" placeholder="mobile@upi / username@okhdfcbank" value="${t.phone}@upi" required autocomplete="off">
          <div class="form-hint" style="color: var(--gray-500);">Enter your UPI ID to receive a payment request on your UPI app.</div>
        </div>
      `:y===`card`?v.innerHTML=`
        <div style="display: flex; flex-direction: column; gap: var(--space-4); animation: fade-in var(--duration-fast) ease;">
          <div class="form-group">
            <label class="form-label" for="card-num" style="color: var(--dark-800);">Card Number</label>
            <input type="text" id="card-num" inputmode="numeric" placeholder="4111 2222 3333 4444" maxlength="19" required autocomplete="cc-number">
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-3);">
            <div class="form-group">
              <label class="form-label" for="card-exp" style="color: var(--dark-800);">Expiry (MM/YY)</label>
              <input type="text" id="card-exp" placeholder="12/28" maxlength="5" required autocomplete="cc-exp">
            </div>
            <div class="form-group">
              <label class="form-label" for="card-cvv" style="color: var(--dark-800);">CVV</label>
              <input type="password" id="card-cvv" inputmode="numeric" placeholder="***" maxlength="4" required autocomplete="cc-csc">
            </div>
          </div>
        </div>
      `:v.innerHTML=`
        <div class="form-group" style="animation: fade-in var(--duration-fast) ease;">
          <label class="form-label" for="select-bank" style="color: var(--dark-800);">Select Bank</label>
          <select id="select-bank" required style="background: var(--white); color: var(--dark-900);">
            <option value="">Choose your bank</option>
            <option value="sbi">State Bank of India</option>
            <option value="hdfc">HDFC Bank</option>
            <option value="icici">ICICI Bank</option>
            <option value="axis">Axis Bank</option>
            <option value="kotak">Kotak Mahindra Bank</option>
          </select>
        </div>
      `};x();let S=document.createElement(`button`);S.className=`btn btn-primary btn-full btn-lg`,S.style.background=`#3b82f6`,S.style.color=`#fff`,S.style.marginTop=`var(--space-6)`,S.style.minBlockSize=`52px`,S.style.border=`none`,S.style.boxShadow=`0 4px 6px -1px rgba(59, 130, 246, 0.2)`,S.innerHTML=`<span>${l(`payAmount`,{amount:e})}</span>`,S.addEventListener(`click`,()=>{if(y===`card`){let e=document.getElementById(`card-num`).value.trim(),t=document.getElementById(`card-exp`).value.trim(),n=document.getElementById(`card-cvv`).value.trim();if(!e||!t||!n)return}else if(y===`upi`){if(!document.getElementById(`upi-id`).value.trim())return}else if(!document.getElementById(`select-bank`).value)return;w()}),f.appendChild(S),o.appendChild(s),o.appendChild(f),a.appendChild(o),i.appendChild(a),setTimeout(()=>{a.classList.add(`active`)},10);let C=()=>{a.classList.remove(`active`),a.addEventListener(`transitionend`,()=>{a.remove()})},w=()=>{S.disabled=!0,d.style.pointerEvents=`none`,f.querySelectorAll(`input, select, button`).forEach(e=>{e!==S&&(e.disabled=!0)}),S.innerHTML=`<span class="spinner" style="margin-right: 8px;"></span> <span>${l(`processing`)}</span>`,setTimeout(()=>{S.style.background=`var(--green-600)`,S.innerHTML=`
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 8px;">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <span>${l(`paymentSuccess`)}</span>
      `,setTimeout(()=>{C(),n()},1e3)},2e3)}}function _(e,t=`info`){let n=document.getElementById(`toast-container`);if(!n)return;let r=document.createElement(`div`);r.className=`toast toast-${t}`,r.innerText=e,n.appendChild(r),setTimeout(()=>{r.classList.add(`show`)},10),setTimeout(()=>{r.classList.remove(`show`),r.addEventListener(`transitionend`,()=>{r.remove()})},3e3)}function v(e){let a=document.createElement(`div`);a.className=`page`;let s=1,c=new Date().toISOString().split(`T`)[0],u=``,d=null,h=``,v=``,y=``;a.appendChild(m(e));let b=document.createElement(`main`);b.className=`page-padded`,a.appendChild(b);let x=document.createElement(`div`);x.className=`sticky-bottom`;let S=document.createElement(`button`);S.className=`btn btn-primary btn-lg btn-full`,x.appendChild(S),a.appendChild(x);let C=()=>{window.innerWidth>=768?x.style.display=`none`:x.style.display=`block`};window.addEventListener(`resize`,C),setTimeout(C,10);let w=()=>{b.innerHTML=``;let e=document.createElement(`div`);e.className=`booking-header`;let t=``,n=``;s===1?(t=l(`selectDate`),n=`Choose your playing date`):s===2?(t=l(`selectTime`),n=`For ${new Date(c).toLocaleDateString(void 0,{month:`short`,day:`numeric`,weekday:`short`})}`):s===3?(t=l(`selectCourt`),n=`Selected: ${r(u)}`):(t=l(`guestDetails`),n=`Enter your contact details to finish booking`),e.innerHTML=`
      <h1 class="booking-title">${t}</h1>
      <p class="booking-step-label">${n}</p>
    `,b.appendChild(e);let i=document.createElement(`div`);i.className=`progress-steps`,i.style.marginBottom=`var(--space-6)`;for(let e=1;e<=4;e++){let t=document.createElement(`div`);t.className=`progress-step ${e===s?`active`:``} ${e<s?`completed`:``}`,e<s&&(t.style.cursor=`pointer`,t.addEventListener(`click`,()=>{s=e,w()})),i.appendChild(t)}b.appendChild(i);let a=document.createElement(`div`);a.className=`booking-layout`;let o=document.createElement(`div`);o.className=`booking-main-flow`;let d=document.createElement(`div`);d.className=`booking-section-card`,d.style.minHeight=`300px`,s===1?T(d):s===2?E(d):s===3?D(d):O(d),o.appendChild(d),a.appendChild(o);let f=document.createElement(`div`);f.className=`booking-sidebar`,k(f),a.appendChild(f),b.appendChild(a),M()},T=e=>{let r=document.createElement(`div`);r.className=`date-grid`,r.style.gridTemplateColumns=`repeat(3, 1fr)`;let i=[],a=new Date;for(let e=0;e<15;e++){let t=new Date;t.setDate(a.getDate()+e),i.push(t)}let o=a.toISOString().split(`T`)[0];i.forEach(e=>{let i=e.toISOString().split(`T`)[0],a=i===c,m=t(i),h=document.createElement(`div`);h.className=`date-card ${a?`card-selected`:``} ${m?`weekend`:``}`,h.style.padding=`var(--space-3) var(--space-1)`;let g=f(e.getDay()),_=e.getTime()-new Date(o).getTime(),v=Math.ceil(_/(1e3*60*60*24));v===0?g=l(`today`):v===1&&(g=l(`tomorrow`)),h.innerHTML=`
        <div class="date-card-day" style="font-size: 10px;">${g}</div>
        <div class="date-card-num" style="font-size: var(--text-xl);">${e.getDate()}</div>
        <div class="date-card-month" style="font-size: 10px; margin-top: 0;">${p(e.getMonth())}</div>
        <div class="date-card-price" style="font-size: 9px; padding: 1px 4px; margin-top: var(--space-1);">₹${n(i)}</div>
      `,h.addEventListener(`click`,()=>{c=i,u=``,d=null,s=2,w()}),r.appendChild(h)}),e.appendChild(r)},E=e=>{let t=document.createElement(`div`);t.className=`time-slots-header`,t.innerHTML=`
      <div class="time-slots-legend">
        <div class="legend-item"><span class="legend-dot available"></span> ${l(`available`)}</div>
        <div class="legend-item"><span class="legend-dot booked"></span> ${l(`booked`)}</div>
      </div>
    `,e.appendChild(t);let n=document.createElement(`div`);n.className=`time-slots-grid`,n.style.gridTemplateColumns=`repeat(2, 1fr)`,i(c).forEach(e=>{let t=o.getBookedCourts(c,e.time).length>=6,i=u===e.time,a=document.createElement(`div`);a.className=`time-slot ${t?`booked`:`available`} ${i?`selected`:``}`,a.style.padding=`var(--space-3) var(--space-2)`,a.innerHTML=`
        <div class="time-slot-time" style="font-size: var(--text-sm);">${r(e.time)}</div>
        <div class="time-slot-price">₹${e.price}</div>
      `,t||a.addEventListener(`click`,()=>{u=e.time,d=null,s=3,w()}),n.appendChild(a)}),e.appendChild(n)},D=e=>{let t=document.createElement(`div`);t.className=`courts-grid`;let n=o.getBookedCourts(c,u);for(let e=1;e<=6;e++){let r=n.includes(e),i=d===e,a=document.createElement(`div`);a.className=`card card-interactive court-card ${r?`card-disabled`:``} ${i?`card-selected`:``}`,a.innerHTML=`
        <div class="court-icon">🏏</div>
        <div class="court-name">${l(`court`)} ${e}</div>
        <div class="court-status" style="color: ${r?`var(--red-600)`:`var(--green-600)`}">
          ${l(r?`booked`:`available`)}
        </div>
      `,r||a.addEventListener(`click`,()=>{d=e,s=4,w()}),t.appendChild(a)}e.appendChild(t)},O=e=>{let t=document.createElement(`form`);t.className=`guest-form`,t.addEventListener(`submit`,e=>e.preventDefault()),t.innerHTML=`
      <div class="form-group">
        <label class="form-label" for="guest-name">${l(`yourName`)} *</label>
        <input type="text" id="guest-name" placeholder="${l(`namePlaceholder`)}" required value="${h}" autocomplete="name">
        <div class="form-error" id="name-error"></div>
      </div>
      <div class="form-group">
        <label class="form-label" for="guest-phone">${l(`phone`)} *</label>
        <input type="tel" id="guest-phone" placeholder="${l(`phonePlaceholder`)}" required value="${v}" inputmode="numeric" autocomplete="tel">
        <div class="form-error" id="phone-error"></div>
      </div>
      <div class="form-group">
        <label class="form-label" for="guest-email">${l(`email`)}</label>
        <input type="email" id="guest-email" placeholder="${l(`emailPlaceholder`)}" value="${y}" autocomplete="email">
      </div>
    `,t.querySelector(`#guest-name`).addEventListener(`input`,e=>{h=e.target.value,M()}),t.querySelector(`#guest-phone`).addEventListener(`input`,e=>{v=e.target.value,M()}),t.querySelector(`#guest-email`).addEventListener(`input`,e=>{y=e.target.value,M()}),e.appendChild(t)},k=e=>{let t=document.createElement(`div`);t.className=`card booking-summary`;let i=n(c),a=new Date(c).toLocaleDateString(void 0,{weekday:`long`,year:`numeric`,month:`long`,day:`numeric`});t.innerHTML=`
      <div class="summary-title">${l(`bookingSummary`)}</div>
      <div class="summary-rows">
        <div class="summary-row" style="cursor: pointer;" id="summary-row-date">
          <span class="summary-row-label">${l(`date`)}</span>
          <span class="summary-row-value" style="color: var(--color-primary); text-decoration: underline;">${a}</span>
        </div>
        <div class="summary-row" style="${u?`cursor: pointer;`:``}" id="summary-row-time">
          <span class="summary-row-label">${l(`time`)}</span>
          <span class="summary-row-value" style="${u?`color: var(--color-primary); text-decoration: underline;`:``}">${u?r(u):`—`}</span>
        </div>
        <div class="summary-row" style="${d?`cursor: pointer;`:``}" id="summary-row-court">
          <span class="summary-row-label">${l(`court`)}</span>
          <span class="summary-row-value" style="${d?`color: var(--color-primary); text-decoration: underline;`:``}">${d?`${l(`court`)} ${d}`:`—`}</span>
        </div>
        <div class="summary-total summary-row">
          <span class="summary-row-label">${l(`totalAmount`)}</span>
          <span class="summary-row-value">₹${i}</span>
        </div>
      </div>
      <div style="margin-top: var(--space-5); display: flex; gap: var(--space-2);">
        <button class="btn btn-outline" id="btn-back-desktop" style="flex: 1; display: none;">${l(`back`)}</button>
        <button class="btn btn-primary" id="btn-continue-desktop" style="flex: 2; display: none;"></button>
      </div>
    `,t.querySelector(`#summary-row-date`).addEventListener(`click`,()=>{s=1,w()}),u&&t.querySelector(`#summary-row-time`).addEventListener(`click`,()=>{s=2,w()}),d&&t.querySelector(`#summary-row-court`).addEventListener(`click`,()=>{s=3,w()});let o=t.querySelector(`#btn-back-desktop`),f=t.querySelector(`#btn-continue-desktop`);window.innerWidth>=768&&(o.style.display=`block`,f.style.display=`block`),e.appendChild(t)},A=()=>{if(s===1)s=2,w();else if(s===2){if(!u){_(l(`selectTimeFirst`),`error`);return}s=3,w()}else if(s===3){if(!d){_(l(`selectCourtFirst`),`error`);return}s=4,w()}else{let t=document.getElementById(`name-error`),r=document.getElementById(`phone-error`),i=!0;t&&(t.innerText=``),r&&(r.innerText=``),h.trim()||(t&&(t.innerText=l(`nameRequired`)),i=!1);let a=v.trim();if(a?/^\d{10}$/.test(a)||(r&&(r.innerText=l(`phoneInvalid`)),i=!1):(r&&(r.innerText=l(`phoneRequired`)),i=!1),!i)return;let s=n(c);g(s,{name:h,phone:v,email:y},()=>{let t=o.addBooking({guestName:h,phone:v,email:y,court:d,date:c,timeSlot:u,amount:s});e.navigate(`/confirmation/${t.id}`)})}},j=()=>{s>1?(--s,w()):e.navigate(`/`)},M=()=>{let e=document.getElementById(`btn-back-desktop`),t=document.getElementById(`btn-continue-desktop`);S.onclick=A,e&&(e.onclick=j),t&&(t.onclick=A);let n=!1,r=l(`continue`);s===1?n=!!c:s===2?n=!!u:s===3?n=!!d:(n=h.trim()!==``&&/^\d{10}$/.test(v.trim()),r=l(`proceedToPay`)),S.innerText=r,S.disabled=!n,t&&(t.innerText=r,t.disabled=!n),e&&(e.disabled=s===1)};return w(),a}function y(e,t){let n=document.createElement(`div`);n.className=`page`,n.appendChild(m(e));let r=document.createElement(`main`);r.className=`page-padded`,n.appendChild(r);let i=o.getBookingById(t);if(!i)return r.innerHTML=`
      <div class="empty-state">
        <div class="empty-state-icon">⚠️</div>
        <div class="empty-state-text">Booking not found.</div>
        <button class="btn btn-primary" id="btn-home">${l(`goHome`)}</button>
      </div>
    `,r.querySelector(`#btn-home`).addEventListener(`click`,()=>e.navigate(`/`)),n;let a=new Date(i.date).toLocaleDateString(void 0,{weekday:`long`,year:`numeric`,month:`long`,day:`numeric`}),s=document.createElement(`section`);return s.className=`confirmation`,s.innerHTML=`
    <div class="confirmation-check">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    </div>
    <h1 class="confirmation-title">${l(`bookingConfirmed`)}</h1>
    <p class="confirmation-subtitle">${l(`confirmSubtitle`)}</p>
    
    <div class="confirmation-id">${l(`bookingId`)}: ${i.id}</div>

    <div class="card booking-summary confirmation-details" style="text-align: left;">
      <div class="summary-title" style="margin-bottom: var(--space-4); color: var(--color-primary);">${l(`bookingSummary`)}</div>
      <div class="summary-rows">
        <div class="summary-row">
          <span class="summary-row-label">${l(`yourName`)}</span>
          <span class="summary-row-value">${i.guestName}</span>
        </div>
        <div class="summary-row">
          <span class="summary-row-label">${l(`phone`)}</span>
          <span class="summary-row-value">${i.phone}</span>
        </div>
        <div class="summary-row">
          <span class="summary-row-label">${l(`date`)}</span>
          <span class="summary-row-value">${a}</span>
        </div>
        <div class="summary-row">
          <span class="summary-row-label">${l(`time`)}</span>
          <span class="summary-row-value">${i.timeSlot}</span>
        </div>
        <div class="summary-row">
          <span class="summary-row-label">${l(`court`)}</span>
          <span class="summary-row-value">${l(`court`)} ${i.court}</span>
        </div>
        <div class="summary-total summary-row">
          <span class="summary-row-label">${l(`amount`)}</span>
          <span class="summary-row-value" style="color: var(--color-accent);">₹${i.amount}</span>
        </div>
      </div>
    </div>

    <div class="confirmation-actions">
      <button class="btn btn-primary btn-lg btn-full" id="btn-another">${l(`bookAnother`)}</button>
      <button class="btn btn-outline btn-full" id="btn-receipt">${l(`downloadReceipt`)}</button>
      <button class="btn btn-ghost btn-full" id="btn-gohome">${l(`goHome`)}</button>
    </div>
  `,r.appendChild(s),s.querySelector(`#btn-another`).addEventListener(`click`,()=>{e.navigate(`/book`)}),s.querySelector(`#btn-gohome`).addEventListener(`click`,()=>{e.navigate(`/`)}),s.querySelector(`#btn-receipt`).addEventListener(`click`,()=>{let e=`
========================================
         SPORTBOX RAJKOT RECEIPT        
========================================
Booking ID   : ${i.id}
Guest Name   : ${i.guestName}
Phone Number : ${i.phone}
Date         : ${a}
Time Slot    : ${i.timeSlot}
Court Number : Court ${i.court}
Amount Paid  : INR ${i.amount}
Status       : CONFIRMED
========================================
  Thank you for booking with SportBox!  
========================================
`,t=new Blob([e],{type:`text/plain`}),n=URL.createObjectURL(t),r=document.createElement(`a`);r.href=n,r.download=`SportBox_Receipt_${i.id}.txt`,document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(n)}),n}function b(e){let t=document.createElement(`div`);t.className=`page`,t.appendChild(m(e));let n=document.createElement(`main`);n.className=`page-padded`,t.appendChild(n);let r=document.createElement(`section`);r.className=`admin-login`,r.innerHTML=`
    <div class="admin-login-icon">🔒</div>
    <h1>${l(`adminLoginTitle`)}</h1>
    <p>${l(`adminLoginSubtitle`)}</p>
    
    <div class="pin-input">
      <input type="text" class="pin-digit" maxlength="1" inputmode="numeric" pattern="[0-9]*" aria-label="PIN digit 1" autofocus>
      <input type="text" class="pin-digit" maxlength="1" inputmode="numeric" pattern="[0-9]*" aria-label="PIN digit 2">
      <input type="text" class="pin-digit" maxlength="1" inputmode="numeric" pattern="[0-9]*" aria-label="PIN digit 3">
      <input type="text" class="pin-digit" maxlength="1" inputmode="numeric" pattern="[0-9]*" aria-label="PIN digit 4">
    </div>

    <button class="btn btn-primary btn-lg" style="width: 200px; margin-top: var(--space-4);" id="btn-login">${l(`login`)}</button>
  `,n.appendChild(r);let i=r.querySelectorAll(`.pin-digit`),a=r.querySelector(`#btn-login`);i.forEach((e,t)=>{e.addEventListener(`input`,e=>{e.target.value.length===1&&t<i.length-1&&i[t+1].focus(),c()}),e.addEventListener(`keydown`,n=>{n.key===`Backspace`&&!e.value&&t>0&&i[t-1].focus()})});let s=()=>{let e=``;return i.forEach(t=>{e+=t.value}),e},c=()=>{let e=s();e.length===4&&u(e)},u=t=>{o.validatePin(t)?(o.loginAdmin(),_(`Welcome, Administrator!`,`success`),e.navigate(`/admin/dashboard`)):(_(l(`wrongPin`),`error`),i.forEach(e=>{e.value=``}),i[0].focus())};return a.addEventListener(`click`,()=>{let e=s();if(e.length<4){_(`Please enter a 4-digit PIN`,`error`);return}u(e)}),t}function x(e){let t=document.createElement(`div`);t.className=`page`,t.appendChild(m(e));let a=document.createElement(`main`);a.className=`admin-dashboard`,t.appendChild(a);let s=new Date().toISOString().split(`T`)[0],c=`timeline`,u=()=>{a.innerHTML=``;let e=document.createElement(`div`);e.className=`admin-top-bar`,e.innerHTML=`
      <h2 class="admin-title">${l(`adminPanel`)}</h2>
      <div class="admin-date-filter">
        <input type="date" id="admin-date-select" value="${s}">
        <button class="btn btn-primary btn-sm" id="btn-add-walkin">${l(`addBooking`)}</button>
      </div>
    `,a.appendChild(e),e.querySelector(`#admin-date-select`).addEventListener(`change`,e=>{s=e.target.value,u()}),e.querySelector(`#btn-add-walkin`).addEventListener(`click`,()=>{h()}),d();let t=document.createElement(`div`);t.className=`admin-tabs`,t.innerHTML=`
      <button class="btn admin-tab ${c===`timeline`?`active`:``}" id="tab-timeline">${l(`viewTimeline`)}</button>
      <button class="btn admin-tab ${c===`list`?`active`:``}" id="tab-list">${l(`viewList`)}</button>
    `,a.appendChild(t),t.querySelector(`#tab-timeline`).addEventListener(`click`,()=>{c=`timeline`,u()}),t.querySelector(`#tab-list`).addEventListener(`click`,()=>{c=`list`,u()}),c===`timeline`?f():p()},d=()=>{let e=o.getBookings().filter(e=>e.date===s&&e.status!==`cancelled`),t=e.length,n=e.reduce((e,t)=>e+t.amount,0),r=new Set(e.map(e=>e.court)).size,i=document.createElement(`div`);i.className=`stats-bar`,i.innerHTML=`
      <div class="card card-glass stat-card">
        <div class="stat-value green">${t}</div>
        <div class="stat-label">${l(`totalBookings`)}</div>
      </div>
      <div class="card card-glass stat-card">
        <div class="stat-value gold">₹${n}</div>
        <div class="stat-label">${l(`totalRevenue`)}</div>
      </div>
      <div class="card card-glass stat-card">
        <div class="stat-value">${r}/6</div>
        <div class="stat-label">${l(`courtsOccupied`)}</div>
      </div>
    `,a.appendChild(i)},f=()=>{let e=document.createElement(`div`);e.className=`timeline`;let t=document.createElement(`div`);t.className=`timeline-grid`,t.innerHTML=`
      <div class="timeline-header">${l(`time`)}</div>
      <div class="timeline-header">Court 1</div>
      <div class="timeline-header">Court 2</div>
      <div class="timeline-header">Court 3</div>
      <div class="timeline-header">Court 4</div>
      <div class="timeline-header">Court 5</div>
      <div class="timeline-header">Court 6</div>
    `;let n=i(s),r=o.getBookings();n.forEach(e=>{let n=document.createElement(`div`);n.className=`timeline-time`,n.innerText=e.time,t.appendChild(n);for(let n=1;n<=6;n++){let i=r.find(t=>t.date===s&&t.timeSlot===e.time&&t.court===n&&t.status!==`cancelled`),a=document.createElement(`div`);i?(a.className=`timeline-cell booked`,a.innerText=i.guestName.split(` `)[0],a.title=`${i.guestName} (${i.phone})`,a.addEventListener(`click`,()=>{g(i)})):a.className=`timeline-cell empty`,t.appendChild(a)}}),e.appendChild(t),a.appendChild(e)},p=()=>{let e=document.createElement(`div`);e.className=`bookings-section`;let t=o.getBookings().filter(e=>e.date===s);if(t.length===0){e.innerHTML=`
        <div class="empty-state">
          <div class="empty-state-icon">📅</div>
          <div class="empty-state-text">${l(`noBookings`)}</div>
        </div>
      `,a.appendChild(e);return}t.sort((e,t)=>e.timeSlot.localeCompare(t.timeSlot)),t.forEach(t=>{let n=document.createElement(`div`);n.className=`card booking-item`;let i=t.status===`confirmed`?`badge-green`:t.status===`completed`?`badge-gold`:`badge-red`,a=l(t.status);n.innerHTML=`
        <div class="booking-item-header">
          <div>
            <div class="booking-item-guest">${t.guestName}</div>
            <div class="booking-item-phone">${t.phone}</div>
          </div>
          <span class="badge ${i}">${a}</span>
        </div>
        <div class="booking-item-details">
          <div class="booking-detail">
            <div class="booking-detail-label">${l(`court`)}</div>
            <div class="booking-detail-value">Court ${t.court}</div>
          </div>
          <div class="booking-detail">
            <div class="booking-detail-label">${l(`time`)}</div>
            <div class="booking-detail-value">${r(t.timeSlot)}</div>
          </div>
        </div>
        ${t.status===`confirmed`?`
          <div class="booking-item-actions">
            <button class="btn btn-sm btn-primary" data-action="complete" data-id="${t.id}">${l(`markComplete`)}</button>
            <button class="btn btn-sm btn-outline" data-action="cancel" data-id="${t.id}">${l(`cancelBooking`)}</button>
          </div>
        `:``}
      `;let s=n.querySelector(`[data-action="complete"]`);s&&s.addEventListener(`click`,()=>{o.updateBookingStatus(t.id,`completed`),_(`Booking marked completed`,`success`),u()});let c=n.querySelector(`[data-action="cancel"]`);c&&c.addEventListener(`click`,()=>{o.updateBookingStatus(t.id,`cancelled`),_(`Booking cancelled`,`info`),u()}),e.appendChild(n)}),a.appendChild(e)},h=()=>{let e=document.getElementById(`modal-container`);if(!e)return;let t=document.createElement(`div`);t.className=`modal-overlay`;let a=document.createElement(`div`);a.className=`modal-content`,a.innerHTML=`
      <div class="modal-handle"></div>
      <h3 style="margin-bottom: var(--space-5); text-align: center;">${l(`manualBooking`)}</h3>
      <form class="manual-booking-form" id="walkin-form">
        <div class="form-group">
          <label class="form-label" for="walkin-name">${l(`yourName`)}</label>
          <input type="text" id="walkin-name" placeholder="Walk-in Guest Name" required>
        </div>
        <div class="form-group">
          <label class="form-label" for="walkin-phone">${l(`phone`)}</label>
          <input type="tel" id="walkin-phone" placeholder="10-digit mobile number" required inputmode="numeric">
        </div>
        <div class="form-row">
          <div class="form-group">
            <label class="form-label" for="walkin-court">Court</label>
            <select id="walkin-court" required>
              <option value="1">Court 1</option>
              <option value="2">Court 2</option>
              <option value="3">Court 3</option>
              <option value="4">Court 4</option>
              <option value="5">Court 5</option>
              <option value="6">Court 6</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label" for="walkin-time">Time Slot</label>
            <select id="walkin-time" required>
              <!-- Populated dynamically -->
            </select>
          </div>
        </div>
        <button type="submit" class="btn btn-primary btn-full btn-lg" style="margin-top: var(--space-4);">${l(`saveBooking`)}</button>
      </form>
    `;let c=a.querySelector(`#walkin-time`);i(s).forEach(e=>{let t=document.createElement(`option`);t.value=e.time,t.innerText=r(e.time),c.appendChild(t)}),t.appendChild(a),e.appendChild(t),setTimeout(()=>{t.classList.add(`active`)},10);let d=()=>{t.classList.remove(`active`),t.addEventListener(`transitionend`,()=>{t.remove()})};t.addEventListener(`click`,e=>{e.target===t&&d()}),a.querySelector(`#walkin-form`).addEventListener(`submit`,e=>{e.preventDefault();let t=a.querySelector(`#walkin-name`).value.trim(),i=a.querySelector(`#walkin-phone`).value.trim(),c=parseInt(a.querySelector(`#walkin-court`).value),l=a.querySelector(`#walkin-time`).value;if(!(!t||!i)){if(!/^\d{10}$/.test(i)){_(`Please enter a valid 10-digit phone number`,`error`);return}if(o.getBookedCourts(s,l).includes(c)){_(`Court ${c} is already booked at ${r(l)}!`,`error`);return}o.addBooking({guestName:t,phone:i,email:``,court:c,date:s,timeSlot:l,amount:n(s)}),_(`Booking added successfully!`,`success`),d(),u()}})},g=e=>{let t=document.getElementById(`modal-container`);if(!t)return;let n=document.createElement(`div`);n.className=`modal-overlay`;let i=document.createElement(`div`);i.className=`modal-content`;let a=e.status===`confirmed`?`badge-green`:e.status===`completed`?`badge-gold`:`badge-red`;i.innerHTML=`
      <div class="modal-handle"></div>
      <h3 style="margin-bottom: var(--space-4); text-align: center;">Booking details</h3>
      
      <div class="card booking-summary" style="text-align: left; margin: 0 0 var(--space-5) 0; background: var(--color-bg-elevated);">
        <div class="summary-rows">
          <div class="summary-row">
            <span class="summary-row-label">Guest Name</span>
            <span class="summary-row-value">${e.guestName}</span>
          </div>
          <div class="summary-row">
            <span class="summary-row-label">Phone</span>
            <span class="summary-row-value">${e.phone}</span>
          </div>
          <div class="summary-row">
            <span class="summary-row-label">Court</span>
            <span class="summary-row-value">Court ${e.court}</span>
          </div>
          <div class="summary-row">
            <span class="summary-row-label">Time</span>
            <span class="summary-row-value">${r(e.timeSlot)}</span>
          </div>
          <div class="summary-row">
            <span class="summary-row-label">Amount</span>
            <span class="summary-row-value">₹${e.amount}</span>
          </div>
          <div class="summary-row">
            <span class="summary-row-label">Status</span>
            <span class="badge ${a}">${l(e.status)}</span>
          </div>
        </div>
      </div>

      ${e.status===`confirmed`?`
        <div style="display: flex; gap: var(--space-3);">
          <button class="btn btn-primary" id="detail-complete" style="flex: 1;">${l(`markComplete`)}</button>
          <button class="btn btn-outline" id="detail-cancel" style="flex: 1;">${l(`cancelBooking`)}</button>
        </div>
      `:``}
    `,n.appendChild(i),t.appendChild(n),setTimeout(()=>{n.classList.add(`active`)},10);let s=()=>{n.classList.remove(`active`),n.addEventListener(`transitionend`,()=>{n.remove()})};n.addEventListener(`click`,e=>{e.target===n&&s()});let c=i.querySelector(`#detail-complete`);c&&c.addEventListener(`click`,()=>{o.updateBookingStatus(e.id,`completed`),_(`Booking completed`,`success`),s(),u()});let d=i.querySelector(`#detail-cancel`);d&&d.addEventListener(`click`,()=>{o.updateBookingStatus(e.id,`cancelled`),_(`Booking cancelled`,`info`),s(),u()})};return u(),t}var S=[{path:/^\/$/,component:h},{path:/^\/book$/,component:v},{path:/^\/confirmation\/([^/]+)$/,component:y},{path:/^\/admin$/,component:b},{path:/^\/admin\/dashboard$/,component:x,authRequired:!0}],C=class{constructor(e){this.container=e,window.addEventListener(`hashchange`,()=>this.route()),window.addEventListener(`langchange`,()=>this.route())}init(){this.route()}navigate(e){window.location.hash=e}route(){let e=(window.location.hash||`#/`).slice(1),t=[],n=null;for(let r of S){let i=e.match(r.path);if(i){t=i.slice(1),n=r;break}}if(!n){this.navigate(`/`);return}if(n.authRequired&&!o.isAdminLoggedIn()){this.navigate(`/admin`);return}let r=()=>{this.container.innerHTML=``;let e=n.component(this,...t);this.container.appendChild(e);let r=e.querySelector(`h1`)||e;r&&(r.setAttribute(`tabindex`,`-1`),r.focus())};document.startViewTransition?document.startViewTransition(r):r()}};o.init(),new C(document.getElementById(`app`)).init();