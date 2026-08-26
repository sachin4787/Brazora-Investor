const yearEl=document.getElementById('year'); if(yearEl) yearEl.textContent=new Date().getFullYear();
const toggle=document.querySelector('.menu-toggle'), nav=document.getElementById('nav');
if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',open)});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')))}
const products={
 treatment:{
  title:'Batana Plex Treatment', image:'assets/treatment-popup.png',
  description:'Infused with the richness of ojan oil and advanced plex technology, Plex nanoplastia treatment deeply nourishes and repairs the hair strands, contributing to the rebuilding of hair fibre. The violet pigment nanoparticles help cut down yellow and copper nuance. This formaldehyde-free treatment is formulated for coloured / chemically treated hair and is designed to deliver smooth, silky, shiny and frizz-free hair.',
  usp:['Batana-powered intensive nourishment','One step hair rebuilding','No cleansing shampoo required','Formaldehyde free','Intra-cellular repair','Up to 100% straight results','Results last up to 75 washes','Long lasting nourishment and protection','Shiny, frizz-free and healthy hair','Same day wash, same day colour','Works best on weak / sensitive / colour / chemical treated hair','Acid violet 43 pigments cut down yellow and copper nuance'],
  highlights:['Batana oil','Plex / bond-support technology','Deep nourishment','Fibre rebuilding','Smooth & shiny']
 },
 shampoo:{
  title:'Batana Plex Shampoo', image:'assets/shampoo-popup.png',
  description:'A Batana-powered home-care cleanser designed to condition and replenish dry-feeling hair. The supplied PPT presents Batana Plex Shampoo and Batana Plex Masque together as a Home Care range. The shampoo is enriched with active Amazon, a healing derivative from Brazilian palm trees, coconut oil, botanical extracts and Plex technology. It offers a luxurious cleansing and hydration experience with each wash, supporting continuous nourishment, strength and vitality.',
  usp:['Improves the longevity of treatment','Deep hydration','Intra-cellular nutrition','Improves elasticity and vitality','Provides smooth, soft and shiny hair','3 in 1: Conditioner, Mask, Leave-in'],
  highlights:['Active Amazon','Coconut oil','Botanical extracts','Plex technology'],
  note:''
 },
 masque:{
  title:'Batana Plex Masque', image:"assets/masque-popup.png",
  description:'A Batana-powered home-care cleanser designed to condition and replenish dry-feeling hair. The supplied PPT presents Batana Plex Shampoo and Batana Plex Masque together as a Home Care range. The masque is part of the same enriched formula story built around active Amazon, coconut oil, botanical extracts and Plex technology, supporting nourishment, hydration, strength, vitality and smoother, more manageable hair.',
  usp:['Improves the longevity of treatment','Deep hydration','Intra-cellular nutrition','Improves elasticity and vitality','Provides smooth, soft and shiny hair','3 in 1: Conditioner, Mask, Leave-in'],
  highlights:['Active Amazon','Coconut oil','Botanical extracts','Plex technology'],
  note:''
 },
 mist:{
  title:'Batana Hair Mist', image:"assets/mist-popup.png",
  description:'A lightweight finishing mist for smoother, shinier and more manageable hair. Serum Illuminator is presented as a rejuvenating hair mist for hair damaged by chemicals. It helps recover and restore elasticity and vitality. Its concentrated blend of vitamins, minerals and antioxidants provides soft, smooth, frizz-free and shiny hair. It can also be used as a heat protectant before a brush or flat iron and can be paired with any treatment for optimal results.',
  usp:['Anti-frizz','Anti-porosity','Heat protector','Hair fibre repair','Chemical reverser','Instant hydration','Improves 50% elasticity','Regulates hair breakage','Capillary fortifying technology'],
  highlights:['Vitamin & antioxidant rich','Restores elasticity','Repairs & strengthens','Shine & smoothness'],
  note:'Perfect for heat styling, daily care, all hair types, and salon & home use.'
 },
 oil:{
  title:'Batana Oil', image:"assets/oil-popup.png",
  description:'Batana Oil is a natural haircare oil traditionally made from the nuts or kernels of the American oil palm (Elaeis oleifera), traditionally used by the Miskito people of Honduras for repairing and nourishing hair. It is rich in fatty acids, antioxidants and vitamin-E compounds that help condition and protect hair and scalp. The PPT states that Batana oil promotes protein production, strengthens and moisturizes hair strands, combats split ends, encourages natural growth and helps revive dull, brittle strands.',
  usp:['Light weight','Heat protection','Anti-oxidant','Hair fibre regeneration','Deep conditioning','Provides smooth, soft, frizz-free and shiny hair','Fights split-ends','Anti-breakage','UV protection','Protects hair from pollution','Prevents dryness','Detangler','Repairs damaged hair'],
  highlights:['100% natural','Cold pressed','Rich in nutrients','Safe & effective']
 }
};
const modal=document.getElementById('productModal');
function openProduct(key){
 const p=products[key]; if(!p||!modal)return;
 document.getElementById('modalTitle').textContent=p.title;
 document.getElementById('modalImage').src=p.image;
 document.getElementById('modalImage').alt=p.title;
 document.getElementById('modalDescription').textContent=p.description;
 document.getElementById('modalHighlights').innerHTML=p.highlights.map(x=>`<span>${x}</span>`).join('');
 document.getElementById('modalUsp').innerHTML=p.usp.map(x=>`<li>${x}</li>`).join('');
 const note=document.getElementById('modalNote'); note.textContent=p.note||''; note.hidden=!p.note;
 modal.classList.add('open'); modal.setAttribute('aria-hidden','false'); document.body.style.overflow='hidden';
}
function closeModal(){if(!modal)return;modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.style.overflow=''}
document.querySelectorAll('.product-open').forEach(btn=>btn.addEventListener('click',()=>openProduct(btn.closest('.product-card').dataset.product)));
document.querySelectorAll('[data-close-modal]').forEach(el=>{el.addEventListener('click',closeModal);el.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();closeModal()}})});document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});
// Lightweight revenue/profit chart using the PPT monthly values.
const revenue=[0,0,0,18364000,21118600,24286390,27929348.5,32118750.775,36936563.39125,42477047.89994,48848605.08493,56175895.84767,64602280.22482,74292622.25854,85436515.59732,98251992.93692,112989791.87746,129938260.65908,149428999.75794,171843349.72163,197619852.17987,227262830.00685,261352254.50788,300555509.3];
const profit=[0,0,0,10426140,11990061,13788570.15,15856855.6725,18235384.02338,20970691.62688,24116295.37091,27733739.67655,31893800.62803,36677870.72224,42179551.33057,48506484.03016,55782456.63468,64149825.12989,73772298.89937,84838143.73428,97563865.29442,112198445.08858,129028211.85186,148382443.62964,170640046.70731];
const chart=document.getElementById('revenueChart');if(chart){const max=Math.max(...revenue);revenue.forEach((v,i)=>{const wrap=document.createElement('div');wrap.className='chart-month';const b1=document.createElement('div');b1.className='chart-bar';b1.style.height=(v/max*100)+'%';const b2=document.createElement('div');b2.className='chart-bar profit';b2.style.height=(profit[i]/max*100)+'%';const l=document.createElement('label');l.textContent=i+1;wrap.append(b1,b2,l);chart.appendChild(wrap)})}


// Interactive investor fund allocation framework
document.querySelectorAll('.fund-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.fund-btn').forEach(b=>b.classList.remove('active'));
    document.querySelectorAll('.fund-panel').forEach(p=>p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('fund-'+btn.dataset.fund)?.classList.add('active');
  });
});

// Product economics click-and-reveal
document.querySelectorAll('.eco-tab').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.eco-tab').forEach(x=>x.classList.remove('active'));
    document.querySelectorAll('.eco-panel').forEach(x=>x.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('eco-'+btn.dataset.eco)?.classList.add('active');
  });
});

// Why Brazora staggered reveal
const whyCards = document.querySelectorAll('.why-brazora .why-card');
if (whyCards.length && 'IntersectionObserver' in window) {
  const whyObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        whyCards.forEach((card, i) => {
          setTimeout(() => card.classList.add('why-visible'), i * 120);
        });
        whyObserver.disconnect();
      }
    });
  }, {threshold: .18});
  whyObserver.observe(document.querySelector('.why-brazora'));
}

// Why Brazora connector emphasis
document.querySelectorAll('.why-brazora-premium .premium-card').forEach(card=>{
  const id = card.dataset.why;
  const line = document.querySelector('.why-brazora-premium .line-'+id);
  const on = ()=>{ if(line){ line.style.opacity='1'; line.style.strokeWidth='3.5'; } };
  const off = ()=>{ if(line){ line.style.opacity='.72'; line.style.strokeWidth='2'; } };
  card.addEventListener('mouseenter',on);
  card.addEventListener('focus',on);
  card.addEventListener('mouseleave',off);
  card.addEventListener('blur',off);
});


// Financial charts — exact values from the Brazora 2026 business plan.
const actualRevenue = [
  0,0,0,18364000,21118600,24286390,27929349,32118751,36936563,42477048,48848605,56175896,
  64602280,74292622,85436516,98251993,112989792,129938261,149429000,171843350,197619852,
  227262830,261352255,300555093
];
const actualGrossProfit = [
  0,0,0,10426140,11990061,13788570,15856856,18235384,20970691,24116295,27733740,31893801,36677871,42179551,48506484,55782457,64149825,73772299,84838144,97563865,112198445,129028212,148382444,170639810
];

const formatCr = value => '₹' + (value / 10000000).toFixed(2) + ' Cr';
const actualChart = document.getElementById('actualRevenueChart');
if(actualChart){
  const maxValue = 350000000; // ₹35 Cr scale
  actualRevenue.forEach((value,i)=>{
    const month = document.createElement('div');
    month.className='actual-month';

    const rev = document.createElement('div');
    rev.className='actual-bar revenue';
    rev.style.height=(value/maxValue*100)+'%';
    rev.innerHTML='<span class="bar-tip">Revenue<br>'+formatCr(value)+'</span>';

    const gp = document.createElement('div');
    gp.className='actual-bar profit';
    gp.style.height=(actualGrossProfit[i]/maxValue*100)+'%';
    gp.innerHTML='<span class="bar-tip">Gross Profit<br>'+formatCr(actualGrossProfit[i])+'</span>';

    const label=document.createElement('label');
    label.textContent=(i+1);
    month.append(rev,gp,label);
    actualChart.appendChild(month);
  });
}

// Exact projected monthly sales mix from PPT monthly business expectation.
const mixValues = [1099000,1099000,1539000,2639000,2639000,3024000,4950000,1375000];
const mixColors = ['#8b0f15','#b61c22','#d99d2f','#e2bb61','#98521e','#c96c2b','#591719','#cfcfcf'];
const mixTotal = mixValues.reduce((a,b)=>a+b,0);
let cursor = 0;
const parts = mixValues.map((v,i)=>{
  const start = cursor;
  cursor += (v/mixTotal)*360;
  return `${mixColors[i]} ${start.toFixed(3)}deg ${cursor.toFixed(3)}deg`;
});
const salesMix = document.getElementById('actualSalesMix');
if(salesMix){
  salesMix.style.background='conic-gradient('+parts.join(',')+')';
}
