// mow.js - protected + domain-locked (for moleadmacale.blogspot.com)
(function(){
  var _0 = [
    "moleadmacale.blogspot.com",
    "article-form",
    "topic",
    "long-option",
    "output",
    "wss://backend.buildpicoapps.com/ask_ai_streaming_v2",
    "draw-painting",
    "open",
    "send",
    "message",
    "close",
    "error",
    "preventDefault",
    "value",
    "checked",
    "innerText",
    "addEventListener",
    "log",
    "Connection closed",
    "Oops, we ran into an error. Refresh the page and try again."
  ];

  // domain lock
  try {
    if (location.hostname !== _0[0]) {
      // do not run outside allowed host
      try { document.documentElement.innerHTML = ""; } catch(e) {}
      return;
    }
  } catch(e){ return; }

  // small helper (obfuscated-like)
  function g(id){ return document.getElementById(id); }

  // wire up
  var form = g(_0[1]);
  if (!form) {
    console[_0[17]]("protected script: form not found");
    return;
  }
  var out = g(_0[4]);

  form[_0[16]]('submit', function(ev){
    try { ev[_0[12]](); } catch(e){}
    try {
      var topic = g(_0[2]) ? g(_0[2])[_0[13]] : '';
      var longOpt = g(_0[3]) ? g(_0[3])[_0[14]] : false;
      var lengthRange = longOpt ? '2000 and 3000' : '1000 and 1500';
      var prompt = "Generate a high-quality article in Modern Standard Arabic on the topic of " + topic + ". The article should be between " + lengthRange + " words in length and written in a natural, human-like style, including 2-3 minor spelling errors for authenticity. Organize the article with clear paragraphs and subheadings, varying sentence lengths for reader engagement. Include real-world examples and references, add relevant keywords, and include an explanatory diagram. Provide copy buttons for regular copying and HTML code. Finish with a conclusion summarizing the author's personal opinion.";
      if (out) out[_0[15]] = '';

      var ws;
      try {
        ws = new WebSocket(_0[5]);
      } catch(err) {
        console[_0[17]]("ws connect error", err);
        if (out) out[_0[15]] = _0[19];
        return;
      }

      ws[_0[16]](_0[7], function(){
        try {
          ws[_0[8]](JSON.stringify({ appId: _0[6], prompt: prompt }));
        } catch(e) { console[_0[17]]("send error", e); }
      });

      ws[_0[16]](_0[9], function(e){
        try {
          var d = (typeof e.data === 'string') ? e.data : JSON.stringify(e.data);
          if (out) out[_0[15]] = out[_0[15]] + d;
        } catch(err) { console[_0[17]]("msg error", err); }
      });

      ws[_0[16]](_0[10], function(ev){
        console[_0[17]](_0[18], ev.code, ev.reason);
        if (ev.code != 1000) {
          if (out) out[_0[15]] = _0[19];
        }
      });

      ws[_0[16]](_0[11], function(err){
        console[_0[17]]("ws error", err);
        if (out) out[_0[15]] = _0[19];
      });

    } catch(e) {
      console[_0[17]]("submission handler error", e);
      if (out) out[_0[15]] = _0[19];
    }
  });
})();

