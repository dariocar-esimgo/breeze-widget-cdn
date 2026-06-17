/* =============================================================================
 * Breeze eSIM Store — hosted embed loader (embed.js)
 * =============================================================================
 * Partners paste ONE tiny tag; this file is hosted by Breeze and does the work:
 *
 *   <div data-breeze-store data-token="pk_live_abc" data-brand="QEEQ"></div>
 *   <script async src="https://widgets.breezesim.com/v1/embed.js"></script>
 *
 * No API key in the page, no inline code for WordPress to corrupt, works on any
 * site. With no proxy configured it renders demo plans (great for testing).
 * Once the Breeze proxy is live, set CENTRAL_PROXY below (or data-proxy) and the
 * same embed shows the live catalogue — partners change nothing.
 * ========================================================================== */
(function () {
  // Set this once the Breeze proxy is deployed (e.g. "https://widgets.breezesim.com").
  // Left empty -> widget shows demo plans.
  var CENTRAL_PROXY = "";

function BreezeWidget(cfg){
  "use strict";
  var DEMO = [
    {planName:"Breeze UK 5GB",sku:"esimg_5GB_30D_GB",link:"https://breezesim.com",capacityInfo:"5GB",validityInfo:"30 days",countries:["GB"],prices:{USD:"14.0",EUR:"13.0",GBP:"11.0",AUD:"21.0",CAD:"19.0",JPY:"2100",AED:"51.0",THB:"500"}},
    {planName:"Breeze France 10GB",sku:"esimg_10GB_30D_FR",link:"https://breezesim.com",capacityInfo:"10GB",validityInfo:"30 days",countries:["FR"],prices:{USD:"19.0",EUR:"17.5",GBP:"15.0",AUD:"29.0",CAD:"26.0",JPY:"2800",AED:"70.0",THB:"680"}},
    {planName:"Breeze USA 3GB",sku:"esimg_3GB_15D_US",link:"https://breezesim.com",capacityInfo:"3GB",validityInfo:"15 days",countries:["US"],prices:{USD:"11.0",EUR:"10.2",GBP:"8.7",AUD:"16.5",CAD:"15.0",JPY:"1650",AED:"40.0",THB:"390"}},
    {planName:"Breeze Japan 8GB",sku:"esimg_8GB_30D_JP",link:"https://breezesim.com",capacityInfo:"8GB",validityInfo:"30 days",countries:["JP"],prices:{USD:"24.0",EUR:"22.0",GBP:"19.0",AUD:"36.0",CAD:"33.0",JPY:"3500",AED:"88.0",THB:"860"}},
    {planName:"Breeze Thailand 15GB",sku:"esimg_15GB_30D_TH",link:"https://breezesim.com",capacityInfo:"15GB",validityInfo:"30 days",countries:["TH"],prices:{USD:"22.0",EUR:"20.0",GBP:"17.5",AUD:"33.0",CAD:"30.0",JPY:"3200",AED:"81.0",THB:"790"}},
    {planName:"Breeze UAE 5GB",sku:"esimg_5GB_30D_AE",link:"https://breezesim.com",capacityInfo:"5GB",validityInfo:"30 days",countries:["AE"],prices:{USD:"29.0",EUR:"27.0",GBP:"23.0",AUD:"44.0",CAD:"40.0",JPY:"4250",AED:"106",THB:"1040"}},
    {planName:"Breeze Spain 20GB",sku:"esimg_20GB_30D_ES",link:"https://breezesim.com",capacityInfo:"20GB",validityInfo:"30 days",countries:["ES"],prices:{USD:"26.0",EUR:"24.0",GBP:"20.5",AUD:"39.0",CAD:"36.0",JPY:"3800",AED:"95.0",THB:"930"}},
    {planName:"Breeze Italy 10GB",sku:"esimg_10GB_30D_IT",link:"https://breezesim.com",capacityInfo:"10GB",validityInfo:"30 days",countries:["IT"],prices:{USD:"18.0",EUR:"16.5",GBP:"14.0",AUD:"27.0",CAD:"25.0",JPY:"2650",AED:"66.0",THB:"640"}},
    {planName:"Breeze Turkey 6GB",sku:"esimg_6GB_15D_TR",link:"https://breezesim.com",capacityInfo:"6GB",validityInfo:"15 days",countries:["TR"],prices:{USD:"13.0",EUR:"12.0",GBP:"10.2",AUD:"19.5",CAD:"18.0",JPY:"1900",AED:"48.0",THB:"470"}},
    {planName:"Breeze Europe 12GB",sku:"esimg_12GB_30D_EU",link:"https://breezesim.com",capacityInfo:"12GB",validityInfo:"30 days",countries:["FR","ES","IT","DE","PT","GR","NL"],prices:{USD:"27.0",EUR:"25.0",GBP:"21.0",AUD:"41.0",CAD:"37.0",JPY:"3900",AED:"99.0",THB:"970"}},
    {planName:"Breeze Global 5GB",sku:"esimg_5GB_30D_GL",link:"https://breezesim.com",capacityInfo:"5GB",validityInfo:"30 days",countries:["US","GB","FR","JP","TH","AE","ES","IT","AU"],prices:{USD:"34.0",EUR:"31.0",GBP:"27.0",AUD:"51.0",CAD:"47.0",JPY:"4900",AED:"125",THB:"1220"}},
    {planName:"Breeze Australia 8GB",sku:"esimg_8GB_30D_AU",link:"https://breezesim.com",capacityInfo:"8GB",validityInfo:"30 days",countries:["AU"],prices:{USD:"23.0",EUR:"21.0",GBP:"18.0",AUD:"35.0",CAD:"32.0",JPY:"3350",AED:"84.0",THB:"820"}}
  ];
  var CN = {GB:"United Kingdom",UK:"United Kingdom",US:"United States",FR:"France",JP:"Japan",TH:"Thailand",AE:"United Arab Emirates",ES:"Spain",IT:"Italy",TR:"Turkey",DE:"Germany",PT:"Portugal",GR:"Greece",NL:"Netherlands",AU:"Australia",CA:"Canada",CN:"China",IN:"India",ID:"Indonesia",SG:"Singapore",MY:"Malaysia",KR:"South Korea",MX:"Mexico",BR:"Brazil",PH:"Philippines",VN:"Vietnam",CH:"Switzerland",AT:"Austria",BE:"Belgium",IE:"Ireland",SE:"Sweden",NO:"Norway",DK:"Denmark",PL:"Poland",CZ:"Czechia",HU:"Hungary",HR:"Croatia",MA:"Morocco",EG:"Egypt",ZA:"South Africa",NZ:"New Zealand",SA:"Saudi Arabia",QA:"Qatar",IL:"Israel"};
  var CCY = {USD:"$",EUR:"\u20ac",GBP:"\u00a3",AUD:"A$",CAD:"C$",JPY:"\u00a5",AED:"AED ",THB:"\u0e3f",SGD:"S$",INR:"\u20b9",CHF:"CHF ",SEK:"kr ",NOK:"kr ",DKK:"kr ",HKD:"HK$",NZD:"NZ$",KRW:"\u20a9",CNY:"\u00a5",PLN:"z\u0142 ",MXN:"$",ZAR:"R ",BRL:"R$"};

  function flag(code){
    var c=(code||"").toUpperCase(); if(c==="UK")c="GB";
    if(c.length!==2||!/^[A-Z]{2}$/.test(c))return "\ud83c\udf10";
    return String.fromCodePoint(0x1F1E6+c.charCodeAt(0)-65,0x1F1E6+c.charCodeAt(1)-65);
  }
  function cname(code){var c=(code||"").toUpperCase();return CN[c]||code;}
  function fmt(cur,val){
    var n=parseFloat(val); if(isNaN(n))return val;
    var noDec=(cur==="JPY"||cur==="KRW"||(cur==="THB"&&n>=100));
    var s=noDec?Math.round(n).toLocaleString():n.toFixed(2);
    var sym=CCY[cur]||(cur+" ");
    return sym+s;
  }
  function withRef(url){
    if(!cfg.scaRef)return url;
    try{var u=new URL(url);u.searchParams.set("sca_ref",cfg.scaRef);return u.toString();}
    catch(e){return url+(url.indexOf("?")>-1?"&":"?")+"sca_ref="+encodeURIComponent(cfg.scaRef);}
  }
  function esc(s){return String(s==null?"":s).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c];});}

  function normalize(raw){
    return (raw||[]).map(function(p){
      var countries=[];
      if(Array.isArray(p.countries))countries=p.countries.slice();
      else if(Array.isArray(p.coverages))countries=p.coverages.map(function(c){return c.code;}).filter(Boolean);
      return {
        name:p.planName||p.name||"eSIM plan",
        sku:p.sku||"",
        link:p.link||"https://breezesim.com",
        data:p.capacityInfo||(p.dataUnit?(p.dataCap+(p.dataUnit||"")):"")||"Data plan",
        validity:p.validityInfo||"",
        countries:countries.length?countries:["GL"],
        prices:p.prices||{}
      };
    });
  }

  function load(){
    var cacheKey=(cfg.proxyUrl||"")+"|"+(cfg.apiKey||"__demo__");
    window.__breezeCache=window.__breezeCache||{};
    if(window.__breezeCache[cacheKey])return window.__breezeCache[cacheKey];
    var promise;
    if(!cfg.apiKey&&!cfg.proxyUrl){
      promise=Promise.resolve({products:normalize(DEMO),source:"demo",reason:"no-key"});
    }else{
      promise=fetchAll().then(function(list){
        if(!list||!list.length)return {products:normalize(DEMO),source:"demo",reason:"empty"};
        return {products:normalize(list),source:"live"};
      }).catch(function(err){
        return {products:normalize(DEMO),source:"demo",reason:err&&err.message||"fetch-failed"};
      });
    }
    window.__breezeCache[cacheKey]=promise; return promise;
  }
  function fetchAll(){
    var useProxy=!!cfg.proxyUrl;
    var base=useProxy
      ? cfg.proxyUrl.replace(/\/$/,"")+"/v1/products"
      : (cfg.apiBase||"https://api.breezesim.com")+"/v1/products";
    var headers=useProxy?(cfg.token?{"X-Breeze-Token":cfg.token}:{}):{Authorization:cfg.apiKey};
    var all=[],page=1;
    function next(){
      return fetch(base+"?limit=100&currentPage="+page,{headers:headers})
        .then(function(r){if(!r.ok)throw new Error("HTTP "+r.status);return r.json();})
        .then(function(j){
          var items=(j&&j.products)||[];
          all=all.concat(items);
          var pg=j&&j.pagination;
          if(pg&&pg.currentPage<pg.totalPages&&page<5){page++;return next();}
          return all;
        });
    }
    return next();
  }

  function css(root){
    var p=cfg.primary||"#037261",s=cfg.secondary||"#0B1F1C",a=cfg.accent||"#2DD4A7";
    return ["#"+root+"{--bz-p:"+p+";--bz-s:"+s+";--bz-a:"+a+";",
    "font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#15201d;line-height:1.4;}",
    "#"+root+" *{box-sizing:border-box;margin:0;padding:0}",
    "#"+root+" .bz-head{display:flex;align-items:center;gap:12px;margin-bottom:16px}",
    "#"+root+" .bz-logo{height:30px;max-width:150px;object-fit:contain;background:transparent}",
    "#"+root+" .bz-name{font-weight:700;font-size:18px;color:var(--bz-s)}",
    "#"+root+" .bz-controls{display:flex;flex-wrap:wrap;gap:9px;margin-bottom:16px}",
    "#"+root+" .bz-controls .bz-ctrl{flex:1;min-width:130px}",
    "#"+root+" .bz-ctrl label{display:block;font-size:10px;text-transform:uppercase;letter-spacing:.05em;color:#7c8a84;margin-bottom:4px;font-weight:600}",
    "#"+root+" select,#"+root+" input.bz-search{width:100%;padding:9px 11px;border:1px solid #dfe4e1;border-radius:9px;background:#fff;font-size:13.5px;color:#15201d}",
    "#"+root+" select:focus,#"+root+" input.bz-search:focus{outline:none;border-color:var(--bz-p);box-shadow:0 0 0 3px rgba(0,0,0,.04)}",
    "#"+root+" .bz-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:13px}",
    "#"+root+" .bz-card{border:1px solid #e8ece9;border-radius:14px;padding:16px;background:#fff;display:flex;flex-direction:column;transition:box-shadow .15s,border-color .15s,transform .15s}",
    "#"+root+" .bz-card:hover{box-shadow:0 14px 30px -18px rgba(20,40,35,.45);border-color:var(--bz-p);transform:translateY(-2px)}",
    "#"+root+" .bz-flags{font-size:17px;margin-bottom:9px;letter-spacing:1px}",
    "#"+root+" .bz-pname{font-weight:650;font-size:15px;color:var(--bz-s);margin-bottom:3px}",
    "#"+root+" .bz-where{font-size:12px;color:#7c8a84;margin-bottom:13px}",
    "#"+root+" .bz-specs{display:flex;gap:7px;margin-bottom:14px}",
    "#"+root+" .bz-spec{flex:1;background:#f4f7f5;border-radius:9px;padding:8px 9px;text-align:center}",
    "#"+root+" .bz-spec b{display:block;font-size:14px;color:var(--bz-s)}",
    "#"+root+" .bz-spec span{font-size:10px;text-transform:uppercase;letter-spacing:.04em;color:#8a968f;font-weight:600}",
    "#"+root+" .bz-foot{margin-top:auto;display:flex;align-items:center;justify-content:space-between;gap:10px}",
    "#"+root+" .bz-price{font-weight:700;font-size:19px;color:var(--bz-s)}",
    "#"+root+" .bz-price small{display:block;font-size:10px;font-weight:600;color:#8a968f;text-transform:uppercase;letter-spacing:.04em}",
    "#"+root+" .bz-buy{background:var(--bz-p);color:#fff;font-weight:600;font-size:13px;padding:9px 15px;border-radius:9px;text-decoration:none;white-space:nowrap;transition:filter .15s}",
    "#"+root+" .bz-buy:hover{filter:brightness(1.08)}",
    "#"+root+" .bz-empty{padding:30px;text-align:center;color:#8a968f;font-size:13.5px;border:1px dashed #dfe4e1;border-radius:12px}",
    "#"+root+".bz-side{border:1px solid #e8ece9;border-radius:16px;padding:16px;background:#fff;box-shadow:0 18px 40px -28px rgba(20,40,35,.5)}",
    "#"+root+".bz-side .bz-head{margin-bottom:12px}",
    "#"+root+".bz-side .bz-name{font-size:15px}",
    "#"+root+".bz-side .bz-logo{height:24px}",
    "#"+root+".bz-side .bz-controls{flex-direction:column;gap:8px;margin-bottom:12px}",
    "#"+root+".bz-side .bz-ctrl{min-width:0}",
    "#"+root+".bz-side .bz-list{display:flex;flex-direction:column;gap:8px}",
    "#"+root+".bz-side .bz-li{display:flex;align-items:center;gap:10px;padding:10px;border:1px solid #eef1ef;border-radius:11px;text-decoration:none;color:inherit;transition:border-color .15s,background .15s}",
    "#"+root+".bz-side .bz-li:hover{border-color:var(--bz-p);background:#f7faf9}",
    "#"+root+".bz-side .bz-li .fl{font-size:15px}",
    "#"+root+".bz-side .bz-li .mid{flex:1;min-width:0}",
    "#"+root+".bz-side .bz-li .mid b{display:block;font-size:13px;color:var(--bz-s);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}",
    "#"+root+".bz-side .bz-li .mid span{font-size:11px;color:#8a968f}",
    "#"+root+".bz-side .bz-li .pr{font-weight:700;font-size:14px;color:var(--bz-s)}",
    "#"+root+".bz-side .bz-all{display:block;margin-top:11px;text-align:center;background:var(--bz-p);color:#fff;font-weight:600;font-size:13px;padding:10px;border-radius:10px;text-decoration:none;transition:filter .15s}",
    "#"+root+".bz-side .bz-all:hover{filter:brightness(1.08)}",
    "#"+root+" .bz-pwr{font-size:11px;color:#aab2ad;margin-top:10px;text-align:center}",
    "#"+root+" .bz-pwr a{color:var(--bz-p);text-decoration:none;font-weight:600}"
    ].join("");
  }

  var host=document.getElementById(cfg.mountId);
  if(!host)return;
  var rootId="bzr_"+Math.random().toString(36).slice(2,8);
  host.innerHTML='<div id="'+rootId+'"><div class="bz-empty">Loading eSIM plans…</div></div>';
  var styleEl=document.createElement("style");
  styleEl.textContent=css(rootId);
  host.appendChild(styleEl);
  var root=document.getElementById(rootId);
  if(cfg.layout==="side")root.className="bz-side";

  var state={cur:cfg.defaultCurrency||"USD",country:"all",sort:"price-asc",q:""};

  function headHtml(){
    var h='<div class="bz-head">';
    if(cfg.logoUrl)h+='<img class="bz-logo" src="'+esc(cfg.logoUrl)+'" alt="'+esc(cfg.brandName||"")+'">';
    if(cfg.brandName)h+='<span class="bz-name">'+esc(cfg.brandName)+'</span>';
    if(!cfg.logoUrl&&!cfg.brandName)h+='<span class="bz-name">eSIM Store</span>';
    return h+'</div>';
  }
  function currencyOptions(prices){
    var keys=Object.keys(prices||{});
    if(state.cur&&keys.indexOf(state.cur)<0&&keys.length)state.cur=keys.indexOf("USD")>=0?"USD":keys[0];
    return keys.map(function(k){return '<option value="'+k+'"'+(k===state.cur?" selected":"")+'>'+k+'</option>';}).join("");
  }

  load().then(function(res){
    var products=res.products;
    if(cfg.onSource)cfg.onSource(res.source,products.length,res.reason);
    var allPrices=products.length?products[0].prices:{};
    var countrySet={};
    products.forEach(function(p){p.countries.forEach(function(c){countrySet[c]=true;});});
    var countries=Object.keys(countrySet).sort(function(a,b){return cname(a).localeCompare(cname(b));});

    function priceOf(p){var v=parseFloat(p.prices[state.cur]);return isNaN(v)?Infinity:v;}
    function filtered(){
      var out=products.filter(function(p){
        if(state.country!=="all"&&p.countries.indexOf(state.country)<0)return false;
        if(state.q){var hay=(p.name+" "+p.countries.map(cname).join(" ")).toLowerCase();if(hay.indexOf(state.q.toLowerCase())<0)return false;}
        return true;
      });
      out.sort(function(a,b){
        if(state.sort==="price-asc")return priceOf(a)-priceOf(b);
        if(state.sort==="price-desc")return priceOf(b)-priceOf(a);
        if(state.sort==="name")return a.name.localeCompare(b.name);
        return 0;
      });
      return out;
    }

    function renderFull(){
      var list=filtered();
      var html=headHtml();
      html+='<div class="bz-controls">';
      html+='<div class="bz-ctrl" style="flex:2 1 200px"><label>Search</label><input class="bz-search" type="text" placeholder="Search destinations or plans" value="'+esc(state.q)+'"></div>';
      html+='<div class="bz-ctrl"><label>Destination</label><select data-k="country"><option value="all">All destinations</option>'+countries.map(function(c){return '<option value="'+c+'"'+(c===state.country?" selected":"")+'>'+flag(c)+" "+esc(cname(c))+'</option>';}).join("")+'</select></div>';
      html+='<div class="bz-ctrl"><label>Sort by</label><select data-k="sort"><option value="price-asc"'+(state.sort==="price-asc"?" selected":"")+'>Price: low to high</option><option value="price-desc"'+(state.sort==="price-desc"?" selected":"")+'>Price: high to low</option><option value="name"'+(state.sort==="name"?" selected":"")+'>Name</option></select></div>';
      html+='<div class="bz-ctrl"><label>Currency</label><select data-k="cur">'+currencyOptions(allPrices)+'</select></div>';
      html+='</div>';
      if(!list.length){html+='<div class="bz-empty">No plans match this destination yet. Try clearing the filters.</div>';}
      else{
        html+='<div class="bz-grid">';
        list.forEach(function(p){
          var fl=p.countries.slice(0,6).map(flag).join(" ");
          var where=p.countries.length>1?(p.countries.length+" countries"):cname(p.countries[0]);
          html+='<div class="bz-card"><div class="bz-flags">'+fl+'</div>'
            +'<div class="bz-pname">'+esc(p.name)+'</div>'
            +'<div class="bz-where">'+esc(where)+'</div>'
            +'<div class="bz-specs"><div class="bz-spec"><b>'+esc(p.data)+'</b><span>Data</span></div><div class="bz-spec"><b>'+esc((p.validity||"").replace(/ days?/,"d")||"\u2014")+'</b><span>Validity</span></div></div>'
            +'<div class="bz-foot"><div class="bz-price">'+fmt(state.cur,p.prices[state.cur])+'<small>'+state.cur+'</small></div>'
            +'<a class="bz-buy" href="'+esc(withRef(p.link))+'" target="_blank" rel="noopener">'+esc(cfg.ctaLabel||"Get eSIM")+'</a></div></div>';
        });
        html+='</div>';
      }
      html+='<div class="bz-pwr">Powered by <a href="'+esc(withRef("https://breezesim.com"))+'" target="_blank" rel="noopener">Breeze</a></div>';
      root.innerHTML=html;
      bind(renderFull);
    }

    function renderSide(){
      var list=filtered().slice(0,6);
      var html=headHtml();
      html+='<div class="bz-controls">';
      html+='<div class="bz-ctrl"><label>Destination</label><select data-k="country"><option value="all">All destinations</option>'+countries.map(function(c){return '<option value="'+c+'"'+(c===state.country?" selected":"")+'>'+flag(c)+" "+esc(cname(c))+'</option>';}).join("")+'</select></div>';
      html+='<div class="bz-ctrl"><label>Currency</label><select data-k="cur">'+currencyOptions(allPrices)+'</select></div>';
      html+='</div>';
      if(!list.length){html+='<div class="bz-empty">No plans here yet.</div>';}
      else{
        html+='<div class="bz-list">';
        list.forEach(function(p){
          var where=p.countries.length>1?(p.countries.length+" countries"):cname(p.countries[0]);
          html+='<a class="bz-li" href="'+esc(withRef(p.link))+'" target="_blank" rel="noopener"><span class="fl">'+flag(p.countries[0])+'</span><span class="mid"><b>'+esc(p.data)+' \u00b7 '+esc(where)+'</b><span>'+esc(p.validity||"")+'</span></span><span class="pr">'+fmt(state.cur,p.prices[state.cur])+'</span></a>';
        });
        html+='</div>';
      }
      html+='<a class="bz-all" href="'+esc(withRef("https://breezesim.com"))+'" target="_blank" rel="noopener">Browse all plans</a>';
      html+='<div class="bz-pwr">Powered by <a href="'+esc(withRef("https://breezesim.com"))+'" target="_blank" rel="noopener">Breeze</a></div>';
      root.innerHTML=html;
      bind(renderSide);
    }

    function bind(rerender){
      root.querySelectorAll("select[data-k]").forEach(function(sel){
        sel.addEventListener("change",function(){state[sel.getAttribute("data-k")]=sel.value;rerender();});
      });
      var search=root.querySelector("input.bz-search");
      if(search){
        search.addEventListener("input",function(){
          state.q=search.value;rerender();
          var s2=root.querySelector("input.bz-search");
          if(s2){s2.focus();var v=s2.value;s2.setSelectionRange(v.length,v.length);}
        });
      }
    }

    if(cfg.layout==="side")renderSide();else renderFull();
  });
}

  /* ---- loader: find mounts, read data-attributes, boot the widget ---- */
  function boot() {
    var nodes = document.querySelectorAll("[data-breeze-store]");
    for (var i = 0; i < nodes.length; i++) {
      (function (el) {
        if (el.__bzInit) return;
        el.__bzInit = true;
        if (!el.id) el.id = "breeze-store-" + Math.random().toString(36).slice(2, 8);
        var d = el.dataset || {};
        var proxy = d.proxy || CENTRAL_PROXY || "";
        BreezeWidget({
          mountId: el.id,
          token: d.token || "",          // publishable pk_ token (sent to the proxy)
          proxyUrl: proxy,               // Breeze-hosted proxy; empty => demo plans
          apiKey: "",                    // never travels in the embed
          scaRef: d.scaRef || d.ref || "",
          brandName: d.brand || "",
          logoUrl: d.logo || "",
          primary: d.primary || "#037261",
          secondary: d.secondary || "#0B1F1C",
          accent: d.accent || "#2DD4A7",
          defaultCurrency: d.currency || "USD",
          ctaLabel: d.cta || "Get eSIM",
          layout: d.layout || "full"
        });
      })(nodes[i]);
    }
  }

  if (document.readyState !== "loading") boot();
  else document.addEventListener("DOMContentLoaded", boot);
})();
