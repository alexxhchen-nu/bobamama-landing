(function(){
  'use strict';
  /* reduced motion = OS preference OR page "Pause motion"; re-read on every interaction */
  function still(){return !!(window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches)||document.documentElement.classList.contains('motion-paused')||!!(document.getElementById('motion-btn')||{}).checked}
  var reduce=still();
  var $=function(s,r){return (r||document).querySelector(s)};
  var pearls=0, pearlEl=$('#pearls'), hud=$('.hud');
  function addPearls(n,fromEl){
    reduce=still();
    pearls+=n; pearlEl.textContent=pearls;
    hud.classList.remove('pop');
    if(!reduce){void hud.offsetWidth;hud.classList.add('pop');}
    if(fromEl){
      var r=fromEl.getBoundingClientRect(),fl=$('#floaters');
      if(fl.parentNode!==document.body)document.body.appendChild(fl);
      var f=document.createElement('span');f.className='float';
      if(reduce)f.style.animation='none';
      f.innerHTML='+'+n+' <i class="pearl"></i>';
      f.style.left=(r.left+r.width/2-20)+'px';f.style.top=(r.top+r.height*.25)+'px';
      fl.appendChild(f);setTimeout(function(){f.remove()},1000);
    }
  }
  var bubble=$('#bubble'),say=$('#say'),who=$('#who');
  function speak(name,text){
    who.textContent=name;say.textContent=text;
    bubble.classList.remove('swap');
    if(!still()){void bubble.offsetWidth;bubble.classList.add('swap');}
  }
  var lines={
    grandma:['You understand everything I say. Now let\'s help you answer back.','Rising or falling? I\'ll tell you which tone went wrong, and how to fix it.','Five minutes a day. A little soup, a little tone practice.','Eat first. Then say "má" for me. Yes, I mean me.'],
    mochi:['Soup\'s ready! Tone 2 is on the menu today.','I taste-test every bowl. For quality.'],
    dumpling:['I shake the pearls. Grandma shakes your tones.','Shake, shake, drop. That\'s tone 2.'],
    pudding:['...zzz... falling tone... zzz...','Five more minutes... of practice... zzz'],
    pot:['Bloop, bloop. Stirring since your very first "á".','Good soup takes time. So do good tones.'],
    cups:['Tip: tone 2 falls like a sigh. Tone 5 rises like a question.','Tip: say it at home out loud. Your ear is already trained.']
  };
  var names={grandma:'Bobamama',mochi:'Mochi',dumpling:'Dumpling',pudding:'Pudding',pot:'The pot',cups:'Boba tea'};
  var idx={};
  var talkT;
  function tap(el){
    var k=el.getAttribute('data-who'),i=idx[k]||0;idx[k]=(i+1)%lines[k].length;
    var text=lines[k][i];
    if(pearls>=7&&pearls<10&&k==='grandma')text='That\'s '+(pearls+1)+' pearls already! Come try the tone drill below.';
    speak(names[k],text);
    reduce=still();
    var hop=el.querySelector('.hop');
    if(hop){hop.classList.remove('boing');if(!reduce){void hop.getBoundingClientRect();hop.classList.add('boing');}}
    if(k==='grandma'&&!reduce){var b=el.querySelector('.grandma-body');clearTimeout(talkT);b.classList.remove('talking');void b.getBoundingClientRect();b.classList.add('talking');talkT=setTimeout(function(){b.classList.remove('talking')},1300);}
    var cat=el.querySelector('.cat');
    if(cat){cat.classList.add('happy');clearTimeout(cat._happyT);cat._happyT=setTimeout(function(){cat.classList.remove('happy')},1400);}
    addPearls(1,el);
  }
  document.querySelectorAll('.hot').forEach(function(el){
    el.addEventListener('pointerenter',function(e){if(e.pointerType!=='mouse'||still())return;var h=el.querySelector('.hop'),t=Date.now();if(h&&t-(el._hoverT||0)>1500){el._hoverT=t;h.classList.remove('boing');void h.getBoundingClientRect();h.classList.add('boing')}});
    el.addEventListener('click',function(){tap(el)});
    el.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();if(!e.repeat)tap(el)}});
  });

  /* one-shots: drop the class once played or interrupted so Pause→Play or an OS motion toggle can't replay them */
  /* a stale end/cancel from a superseded run arrives while a newer one-shot is already running on that element: ignore it */
  function busy(el){return !!(el.getAnimations&&el.getAnimations().some(function(a){return a.playState==='running'}))}
  function onEnd(t,fn){
    t.addEventListener('animationend',fn);
    t.addEventListener('animationcancel',function(e){if(!busy(e.target))fn(e)});
  }
  document.querySelectorAll('.hop').forEach(function(h){onEnd(h,function(e){if(e.target===h&&e.animationName==='hopclick')h.classList.remove('boing')})});
  document.querySelectorAll('.grandma-body .mouth').forEach(function(m){onEnd(m,function(e){if(e.target!==m||busy(m))return;var b=m.closest('.grandma-body');if(b)b.classList.remove('talking')})});
  onEnd(hud,function(e){if(e.target===hud)hud.classList.remove('pop')});
  onEnd(say,function(){bubble.classList.remove('swap')});
  function clearFloaters(){document.querySelectorAll('#floaters .float').forEach(function(f){f.remove()})}
  function clearOneShots(){
    hud.classList.remove('pop');bubble.classList.remove('swap');verdict.classList.remove('anim');
    document.querySelectorAll('.hop.boing').forEach(function(h){h.classList.remove('boing')});
    clearTimeout(talkT);document.querySelectorAll('.grandma-body.talking').forEach(function(b){b.classList.remove('talking')});
  }

  /* tone drill */
  var paths={
    flat:'M70,46 C130,44 220,48 300,50',
    rise:'M70,134 C140,132 220,92 300,62',
    fall:'M70,50 C150,56 220,128 300,154'
  };
  var res={
    flat:['Close, but your voice stayed up.','Tone 1 stays high and flat. "má" starts high and then slides down. Let it fall.','bad'],
    rise:['Tone 5 \u2192 try falling.','Your voice went up, like a question. "má" starts high and slides down, like a sigh.','bad'],
    fall:['Perfect fall. That\'s tone 2!','That\'s how you say grandma. +3 pearls for you.','good']
  };
  var tp=$('#try-path'),verdict=$('#verdict'),chips=document.querySelectorAll('.chip');
  chips.forEach(function(c){c.addEventListener('click',function(){
    var k=c.getAttribute('data-try');
    chips.forEach(function(x){x.setAttribute('aria-pressed',x===c?'true':'false')});
    tp.setAttribute('d',paths[k]);
    tp.style.opacity='1';
    tp.style.strokeDasharray='1';
    /* visible by default; draw-in only when motion is allowed (re-read each pick) */
    tp.style.strokeDashoffset='0';
    tp.style.animation='none';
    reduce=still();
    if(!reduce){void tp.getBoundingClientRect();tp.style.animation='draw .9s ease-out both';}
    $('#v-title').textContent=res[k][0];$('#v-body').textContent=res[k][1];
    verdict.setAttribute('data-state',res[k][2]);
    /* one-shot verdict animation only when motion is allowed; cleared on end so resume never replays it */
    verdict.classList.remove('anim');
    if(!reduce){void verdict.offsetWidth;verdict.classList.add('anim');}
    if(k==='fall')addPearls(3,c);
  })});
  var judge=verdict.querySelector('.judge-cat');
  onEnd(judge,function(e){if(e.target===judge)verdict.classList.remove('anim')});
  /* clear inline draw on end/cancel so a media-query flip can't replay it.
     A stale event from a superseded draw arrives while the newer draw is running: ignore it. */
  function clearDraw(e){
    if(e.target!==tp)return;
    if(busy(tp))return;
    tp.style.animation='none';tp.style.strokeDashoffset='0';
  }
  onEnd(tp,clearDraw);
  var rm=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)');
  function onRM(){tp.style.animation='none';tp.style.strokeDashoffset='0';clearFloaters();clearOneShots()}
  if(rm){if(rm.addEventListener)rm.addEventListener('change',onRM);else if(rm.addListener)rm.addListener(onRM)}

  /* waitlist (prototype: no network) */
  var form=$('#signup'),thanks=$('#thanks'),email=$('#email');
  function clearThanks(){thanks.hidden=true;$('#thanks-msg').textContent=''}
  email.addEventListener('input',clearThanks);
  form.addEventListener('submit',function(e){
    e.preventDefault();
    if(!email.value||!email.checkValidity()){clearThanks();email.focus();email.reportValidity&&email.reportValidity();return}
    thanks.hidden=false;
    $('#thanks-msg').textContent='Saved you a seat! (Prototype: nothing was sent.)';
    addPearls(5,null);
  });
  $('#signup-btn').disabled=false;
  var mb=$('#motion-btn');
  function syncMotion(){
    var off=mb.checked;
    document.documentElement.classList.toggle('motion-paused',off);
    if(off){
      /* stop any in-flight draw; leave selected line fully drawn */
      tp.style.animation='none';tp.style.strokeDashoffset='0';
      clearFloaters();
      clearOneShots();
    }
  }
  mb.addEventListener('change',syncMotion);
  syncMotion();
})();
