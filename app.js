/* quarknetdisk io file-hash tool — 100% client-side. MD5 = Joseph Myers (public domain). */
(function(){
var QL=window.QL||{};
/* ---------- MD5 (operates on a binary string) ---------- */
function md5cycle(x,k){var a=x[0],b=x[1],c=x[2],d=x[3];
a=ff(a,b,c,d,k[0],7,-680876936);d=ff(d,a,b,c,k[1],12,-389564586);c=ff(c,d,a,b,k[2],17,606105819);b=ff(b,c,d,a,k[3],22,-1044525330);
a=ff(a,b,c,d,k[4],7,-176418897);d=ff(d,a,b,c,k[5],12,1200080426);c=ff(c,d,a,b,k[6],17,-1473231341);b=ff(b,c,d,a,k[7],22,-45705983);
a=ff(a,b,c,d,k[8],7,1770035416);d=ff(d,a,b,c,k[9],12,-1958414417);c=ff(c,d,a,b,k[10],17,-42063);b=ff(b,c,d,a,k[11],22,-1990404162);
a=ff(a,b,c,d,k[12],7,1804603682);d=ff(d,a,b,c,k[13],12,-40341101);c=ff(c,d,a,b,k[14],17,-1502002290);b=ff(b,c,d,a,k[15],22,1236535329);
a=gg(a,b,c,d,k[1],5,-165796510);d=gg(d,a,b,c,k[6],9,-1069501632);c=gg(c,d,a,b,k[11],14,643717713);b=gg(b,c,d,a,k[0],20,-373897302);
a=gg(a,b,c,d,k[5],5,-701558691);d=gg(d,a,b,c,k[10],9,38016083);c=gg(c,d,a,b,k[15],14,-660478335);b=gg(b,c,d,a,k[4],20,-405537848);
a=gg(a,b,c,d,k[9],5,568446438);d=gg(d,a,b,c,k[14],9,-1019803690);c=gg(c,d,a,b,k[3],14,-187363961);b=gg(b,c,d,a,k[8],20,1163531501);
a=gg(a,b,c,d,k[13],5,-1444681467);d=gg(d,a,b,c,k[2],9,-51403784);c=gg(c,d,a,b,k[7],14,1735328473);b=gg(b,c,d,a,k[12],20,-1926607734);
a=hh(a,b,c,d,k[5],4,-378558);d=hh(d,a,b,c,k[8],11,-2022574463);c=hh(c,d,a,b,k[11],16,1839030562);b=hh(b,c,d,a,k[14],23,-35309556);
a=hh(a,b,c,d,k[1],4,-1530992060);d=hh(d,a,b,c,k[4],11,1272893353);c=hh(c,d,a,b,k[7],16,-155497632);b=hh(b,c,d,a,k[10],23,-1094730640);
a=hh(a,b,c,d,k[13],4,681279174);d=hh(d,a,b,c,k[0],11,-358537222);c=hh(c,d,a,b,k[3],16,-722521979);b=hh(b,c,d,a,k[6],23,76029189);
a=hh(a,b,c,d,k[9],4,-640364487);d=hh(d,a,b,c,k[12],11,-421815835);c=hh(c,d,a,b,k[15],16,530742520);b=hh(b,c,d,a,k[2],23,-995338651);
a=ii(a,b,c,d,k[0],6,-198630844);d=ii(d,a,b,c,k[7],10,1126891415);c=ii(c,d,a,b,k[14],15,-1416354905);b=ii(b,c,d,a,k[5],21,-57434055);
a=ii(a,b,c,d,k[12],6,1700485571);d=ii(d,a,b,c,k[3],10,-1894986606);c=ii(c,d,a,b,k[10],15,-1051523);b=ii(b,c,d,a,k[1],21,-2054922799);
a=ii(a,b,c,d,k[8],6,1873313359);d=ii(d,a,b,c,k[15],10,-30611744);c=ii(c,d,a,b,k[6],15,-1560198380);b=ii(b,c,d,a,k[13],21,1309151649);
a=ii(a,b,c,d,k[4],6,-145523070);d=ii(d,a,b,c,k[11],10,-1120210379);c=ii(c,d,a,b,k[2],15,718787259);b=ii(b,c,d,a,k[9],21,-343485551);
x[0]=add32(a,x[0]);x[1]=add32(b,x[1]);x[2]=add32(c,x[2]);x[3]=add32(d,x[3]);}
function cmn(q,a,b,x,s,t){a=add32(add32(a,q),add32(x,t));return add32((a<<s)|(a>>>(32-s)),b);}
function ff(a,b,c,d,x,s,t){return cmn((b&c)|((~b)&d),a,b,x,s,t);}
function gg(a,b,c,d,x,s,t){return cmn((b&d)|(c&(~d)),a,b,x,s,t);}
function hh(a,b,c,d,x,s,t){return cmn(b^c^d,a,b,x,s,t);}
function ii(a,b,c,d,x,s,t){return cmn(c^(b|(~d)),a,b,x,s,t);}
function md5blk(s){var m=[],i;for(i=0;i<64;i+=4){m[i>>2]=s.charCodeAt(i)+(s.charCodeAt(i+1)<<8)+(s.charCodeAt(i+2)<<16)+(s.charCodeAt(i+3)<<24);}return m;}
function md51(s){var n=s.length,state=[1732584193,-271733879,-1732584194,271733878],i,tail;
for(i=64;i<=n;i+=64){md5cycle(state,md5blk(s.substring(i-64,i)));}
s=s.substring(i-64);tail=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
for(i=0;i<s.length;i++){tail[i>>2]|=s.charCodeAt(i)<<((i%4)<<3);}
tail[i>>2]|=0x80<<((i%4)<<3);
if(i>55){md5cycle(state,tail);for(i=0;i<16;i++){tail[i]=0;}}
tail[14]=n*8;md5cycle(state,tail);return state;}
var HEX='0123456789abcdef'.split('');
function rhex(n){var s='',j;for(j=0;j<4;j++){s+=HEX[(n>>(j*8+4))&15]+HEX[(n>>(j*8))&15];}return s;}
function hex(x){for(var i=0;i<x.length;i++){x[i]=rhex(x[i]);}return x.join('');}
function add32(a,b){return (a+b)&0xFFFFFFFF;}
function md5bin(bin){return hex(md51(bin));}
function bytesToBin(bytes){var s='',CH=0x8000,i;for(i=0;i<bytes.length;i+=CH){s+=String.fromCharCode.apply(null,bytes.subarray(i,Math.min(i+CH,bytes.length)));}return s;}
/* ---------- SHA via Web Crypto ---------- */
function buf2hex(buf){var v=new DataView(buf),s='',i;for(i=0;i<v.byteLength;i++){var b=v.getUint8(i).toString(16);s+=(b.length<2?'0':'')+b;}return s;}
async function sha(algo,buf){var h=await crypto.subtle.digest(algo,buf);return buf2hex(h);}
/* ---------- DOM ---------- */
function $(id){return document.getElementById(id);}
var last={};
function setComputing(){['md5','sha1','sha256','sha512'].forEach(function(k){$('h_'+k).textContent=QL.computing||'...';});}
async function hashBuffer(buf){
setComputing();
var bytes=new Uint8Array(buf);
last.md5=md5bin(bytesToBin(bytes));$('h_md5').textContent=last.md5;
last.sha1=await sha('SHA-1',buf);$('h_sha1').textContent=last.sha1;
last.sha256=await sha('SHA-256',buf);$('h_sha256').textContent=last.sha256;
last.sha512=await sha('SHA-512',buf);$('h_sha512').textContent=last.sha512;
compare();}
function fmtSize(n){var u=['B','KB','MB','GB','TB'],i=0;while(n>=1024&&i<4){n/=1024;i++;}return (i?n.toFixed(2):n)+' '+u[i];}
async function onFile(f){if(!f)return;$('meta').hidden=false;$('fn').textContent=f.name;$('fs').textContent=fmtSize(f.size);
var buf=await f.arrayBuffer();await hashBuffer(buf);}
function compare(){var exp=($('exp').value||'').trim().toLowerCase().replace(/\s+/g,'');var box=$('cmpr');
if(!exp){box.textContent='';box.className='cmpr';return;}
var hit=['md5','sha1','sha256','sha512'].some(function(k){return last[k]&&last[k]===exp;});
box.textContent=hit?(QL.match||'Match'):(QL.nomatch||'No match');box.className='cmpr '+(hit?'ok':'bad');}
/* file pick + drop */
var pick=$('pick'),file=$('file'),drop=$('drop');
if(pick){pick.addEventListener('click',function(){file.click();});}
if(file){file.addEventListener('change',function(){onFile(file.files[0]);});}
if(drop){['dragover','dragenter'].forEach(function(e){drop.addEventListener(e,function(ev){ev.preventDefault();drop.classList.add('over');});});
['dragleave','drop'].forEach(function(e){drop.addEventListener(e,function(ev){ev.preventDefault();drop.classList.remove('over');});});
drop.addEventListener('drop',function(ev){var f=ev.dataTransfer.files[0];if(f)onFile(f);});}
var exp=$('exp');if(exp)exp.addEventListener('input',compare);
var htxt=$('htxt');if(htxt)htxt.addEventListener('click',function(){var t=$('txt').value||'';var b=new TextEncoder().encode(t);hashBuffer(b.buffer);});
/* copy */
document.querySelectorAll('.cp').forEach(function(btn){btn.addEventListener('click',function(){
var v=$(btn.getAttribute('data-for')).textContent;if(!v||v==='—')return;
navigator.clipboard&&navigator.clipboard.writeText(v);var o=btn.textContent;btn.textContent=QL.copied||'Copied';setTimeout(function(){btn.textContent=o;},1200);});});
/* converter */
function bytes(){return (parseFloat($('sz').value)||0)*parseFloat($('szu').value);}
function bps(){var v=parseFloat($('sp').value)||0,u=$('spu').value;if(u==='mbps')return v*1e6;if(u==='gbps')return v*1e9;if(u==='mbs')return v*8*1e6;return v*1e6;}
function fmtT(sec){if(!isFinite(sec)||sec<=0)return '—';var d=Math.floor(sec/86400);sec-=d*86400;var h=Math.floor(sec/3600);sec-=h*3600;var m=Math.floor(sec/60);var s=Math.round(sec-m*60);
var out=[];if(d)out.push(d+(QL.d||'d'));if(h)out.push(h+(QL.h||'h'));if(m)out.push(m+(QL.m||'m'));out.push(s+(QL.s||'s'));return out.join(' ');}
function conv(){var B=bytes();var rate=bps();$('ttime').textContent=fmtT(B*8/rate);
var u=$('units');if(!u)return;u.innerHTML='';
var rows=[['MB',B/1e6],['GB',B/1e9],['MiB',B/1048576],['GiB',B/1073741824]];
rows.forEach(function(r){var s=document.createElement('span');s.textContent=r[1].toFixed(r[1]<10?3:2)+' '+r[0];u.appendChild(s);});}
['sz','szu','sp','spu'].forEach(function(id){var e=$(id);if(e)e.addEventListener('input',conv);});
conv();
})();
