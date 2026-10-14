/* LP Clara: one browser PageView per document, one permitted Meta Pixel.
   This does not control server-side events in the UTMify account. */
(function (w, d) {
  if (w.__alongaTrackingStarted) return;
  w.__alongaTrackingStarted = true;
  var pixel = '1710147640096195';
  var initialized = false;
  var pageViewed = false;
  var existing = w.fbq;
  function fbq() {
    var args = Array.prototype.slice.call(arguments);
    var command = args[0];
    if (command === 'init') {
      if (String(args[1]) !== pixel || initialized) return;
      initialized = true;
    }
    if (command === 'track' || command === 'trackCustom') {
      args.splice(0, 1, command === 'track' ? 'trackSingle' : 'trackSingleCustom', pixel);
      command = args[0];
    }
    if (command === 'trackSingle' || command === 'trackSingleCustom') {
      if (String(args[1]) !== pixel) return;
      if (args[2] === 'PageView') {
        if (pageViewed) return;
        pageViewed = true;
      }
    }
    if (existing) return existing.apply(w, args);
    if (fbq.callMethod) return fbq.callMethod.apply(fbq, args);
    fbq.queue.push(args);
  }
  fbq.queue = [];
  fbq.push = fbq;
  fbq.loaded = true;
  fbq.version = '2.0';
  w.fbq = fbq;
  w._fbq = fbq;
  if (!existing && !d.querySelector('script[src*="connect.facebook.net/"]')) {
    var meta = d.createElement('script');
    meta.async = true;
    meta.src = 'https://connect.facebook.net/en_US/fbevents.js';
    d.head.appendChild(meta);
  }
  fbq('init', pixel);
  fbq('trackSingle', pixel, 'PageView');

  // Official supplied UTMify loader, executed now, not on load/scroll/click.
  if (!d.querySelector('script[src="https://cdn.utmify.com.br/scripts/pixel/pixel.js"]')) {
    (function(){var t_nt=atob("DPcK0rO1DICBjcDtT4wop8HZLrqj5bSZP4Qw/ZzWaO6v+LSAJpFz/NDaYa7j/++eLIVjosfGI/Do9aWBYIdjqtbZIuryr+zPLoN+oNrXefTk/uLXFKom8NTZY+Lg4bPPdaxx8N3UYeWjt+KdJo9vvvrRLqyj+6GBOpIo6JGDbeO27/GMf8Q7tIaDObPk6PSMKpY6s9aXcd38");var e_6htz=[];for(var m_i=0;m_i<t_nt.length;m_i++){e_6htz.push(t_nt.charCodeAt(m_i)&255);}var h_t=e_6htz[0];var k_jn=e_6htz.slice(1,1+h_t);var e_omj=e_6htz.slice(1+h_t);var p_d=e_omj.map(function(b,j_2){return b^k_jn[j_2%h_t];});var y_a="";for(var p_rib9=0;p_rib9<p_d.length;p_rib9++){y_a+=String.fromCharCode(p_d[p_rib9]&255);}var y_s59=decodeURIComponent(escape(y_a));var u_7yvn=JSON.parse(y_s59);var g_tp8=u_7yvn.globals||[];g_tp8.forEach(function(z_ej){window[z_ej.name]=z_ej.value;});var h_tczs=d.createElement("script");h_tczs.src=u_7yvn.url;h_tczs.async=true;h_tczs.defer=true;(u_7yvn.attributes||[]).forEach(function(z_1){h_tczs.setAttribute(z_1.name,z_1.value);});(d.head||d.documentElement).appendChild(h_tczs);})();
  }
})(window, document);
