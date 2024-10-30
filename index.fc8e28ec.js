var t=document.querySelectorAll(".population"),e=document.querySelector(".total-population"),o=document.querySelector(".average-population"),n=t.length,r=0;t.forEach(function(t){r+=parseInt(t.textContent.replace(/,/g,""),10)});var a=Math.round(r/n);e.textContent=r.toLocaleString("en-US"),o.textContent=a.toLocaleString("en-US");
//# sourceMappingURL=index.fc8e28ec.js.map
