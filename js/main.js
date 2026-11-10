(function () {
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var IMG = './images/projects/';
  var DEV = 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/';

  /* ---------- DATA ---------- */
  // Image lists accept several candidate file names; the first one that loads is used.
  function range(n, fns) {
    var out = [];
    for (var i = 1; i <= n; i++) out.push(fns.map(function (f) { return IMG + f(i); }));
    return out;
  }
  // Logos: put the files in images/logos/ (png, svg, webp or jpg all work)
  var LOGO = './images/logos/';
  var LG = {
    socialpoint: ['Socialpoint', ['socialpoint.png', 'socialpoint.svg', 'socialpoint.webp', 'socialpoint.jpg']],
    indiedevday: ['IndieDevDay', ['IndieDevDay.jpg', 'IndieDevDay.png', 'IndieDevDay.webp', 'IndieDevDay.svg']],
    gamejam: ['9th Gran CITM Game Jam', ['gran-citm-gamejam.png', 'gran-citm-gamejam.svg', 'gran-citm-gamejam.webp', 'gran-citm-gamejam.jpg']]
  };
  function logoEls(keys, cls) {
    var wrap = el('span', cls || 'logos');
    (keys || []).forEach(function (k) {
      var l = LG[k]; if (!l) return;
      var chip = el('span', 'logo');
      chip.appendChild(tryImg(l[1].map(function (f) { return LOGO + f; }), l[0], function () { chip.remove(); }));
      wrap.appendChild(chip);
    });
    return wrap;
  }
  var yt = function (id) { return 'https://www.youtube.com/embed/' + id; };

  var SKILLS = [
    { n: 'C++', d: 'cplusplus/cplusplus-original.svg', m: 'C+' },
    { n: 'C#', d: 'csharp/csharp-original.svg', m: 'C#' },
    { n: 'HTML', d: 'html5/html5-original.svg', m: 'HT' },
    { n: 'Unity', d: 'unity/unity-original.svg', m: 'Un' },
    { n: 'Unreal Engine', d: 'unrealengine/unrealengine-original.svg', m: 'UE' },
    { n: 'Visual Studio', d: 'visualstudio/visualstudio-plain.svg', m: 'VS' },
    { n: 'Visual Studio Code', d: 'vscode/vscode-original.svg', m: 'VSC' },
    { n: 'Git', d: 'git/git-original.svg', m: 'Gi' },
    { n: 'GitHub', d: 'github/github-original.svg', m: 'GH' },
    { n: 'OpenGL', d: 'opengl/opengl-original.svg', m: 'GL' },
    { n: 'SDL', d: 'sdl/sdl-original.svg', l: 'sdl.svg', m: 'SDL' },
    { n: 'Tiled', l: 'tiled.svg', u: "data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 64 64%22 xmlns:c2pa=%22http://c2pa.org/manifest%22%3E%3Crect x=%226%22 y=%226%22 width=%2224%22 height=%2224%22 rx=%223%22 fill=%22%232f8fd8%22/%3E%3Crect x=%2234%22 y=%226%22 width=%2224%22 height=%2224%22 rx=%223%22 fill=%22%23f0a030%22/%3E%3Crect x=%226%22 y=%2234%22 width=%2224%22 height=%2224%22 rx=%223%22 fill=%22%23e8553d%22/%3E%3Crect x=%2234%22 y=%2234%22 width=%2224%22 height=%2224%22 rx=%223%22 fill=%22%233fb579%22/%3E%3Cmetadata%3E%3Cc2pa:manifest%3EAAAWgmp1bWIAAAAeanVtZGMycGEAEQAQgAAAqgA4m3EDYzJwYQAAABZcanVtYgAAAEdqdW1kYzJtYQARABCAAACqADibcQN1cm46YzJwYTphYjM5NzhlYy03YmM5LTQ3OTgtYmY3NS1lZGE0MDU2ODc1ZTIAAAADl2p1bWIAAAApanVtZGMyYXMAEQAQgAAAqgA4m3EDYzJwYS5hc3NlcnRpb25zAAAAALxqdW1iAAAARGp1bWRjYm9yABEAEIAAAKoAOJtxE2MycGEuaW5ncmVkaWVudC52MwAAAAAYYzJzaPX%2BKw/s9Aw976p3qDy6OIcAAABwY2JvcqNpZGM6Zm9ybWF0bWltYWdlL3N2Zyt4bWxqaW5zdGFuY2VJRHgseG1wOmlpZDpkOTFmNWVjYS1lNjU2LTRiYTMtOThjZS0xYjRiNjgzNmI4YjBscmVsYXRpb25zaGlwaHBhcmVudE9mAAAB4mp1bWIAAABBanVtZGNib3IAEQAQgAAAqgA4m3ETYzJwYS5hY3Rpb25zLnYyAAAAABhjMnNoGBDQ0LV1j6TIQ6tgCAOutgAAAZljYm9yomdhY3Rpb25zgqJmYWN0aW9ua2MycGEub3BlbmVkanBhcmFtZXRlcnOha2luZ3JlZGllbnRzgaJjdXJseC1zZWxmI2p1bWJmPWMycGEuYXNzZXJ0aW9ucy9jMnBhLmluZ3JlZGllbnQudjNkaGFzaFggzVemxCQe24Sn4Ci2R4p3fw22L98DFY/Zlf93dfetPzSkZmFjdGlvbngdY29tLmFudGhyb3BpYy5jbGF1ZGUucHJvdmlkZWRqcGFyYW1ldGVyc6F4H2NvbS5hbnRocm9waWMub3JpZ2luLWNvbmZpZGVuY2VndW5rbm93bmtkZXNjcmlwdGlvbnhmQ2xhdWRlIHByb3ZpZGVkIHRoaXMgZmlsZSBhdCB0aGUgcmVxdWVzdCBvZiBhIHVzZXIgYW5kIG1heSBoYXZlIGNyZWF0ZWQgb3IgbW9kaWZpZWQgdGhlIGZpbGUgY29udGVudHMubXNvZnR3YXJlQWdlbnShZG5hbWVmQ2xhdWRlcmFsbEFjdGlvbnNJbmNsdWRlZPUAAADIanVtYgAAAEBqdW1kY2JvcgARABCAAACqADibcRNjMnBhLmhhc2guZGF0YQAAAAAYYzJzaONWWVQJm0JAUO4OWo7nMEcAAACAY2JvcqVjYWxnZnNoYTI1NmNwYWRMAAAAAAAAAAAAAAAAZGhhc2hYIBICoYmazH0wkVxcGxk46PZIoNUFr3SVR03GIwVmPMGMZG5hbWVuanVtYmYgbWFuaWZlc3RqZXhjbHVzaW9uc4GiZXN0YXJ0GQF/Zmxlbmd0aBkeBAAAAj5qdW1iAAAAJ2p1bWRjMmNsABEAEIAAAKoAOJtxA2MycGEuY2xhaW0udjIAAAACD2Nib3KlY2FsZ2ZzaGEyNTZpc2lnbmF0dXJleE1zZWxmI2p1bWJmPS9jMnBhL3VybjpjMnBhOmFiMzk3OGVjLTdiYzktNDc5OC1iZjc1LWVkYTQwNTY4NzVlMi9jMnBhLnNpZ25hdHVyZWppbnN0YW5jZUlEeCx4bXA6aWlkOjUzOGY2NDI1LWYxMTAtNDU3Yy04NWIyLThlYTBjMjMwNmRiM3JjcmVhdGVkX2Fzc2VydGlvbnODomN1cmx4LXNlbGYjanVtYmY9YzJwYS5hc3NlcnRpb25zL2MycGEuaW5ncmVkaWVudC52M2RoYXNoWCDNV6bEJB7bhKfgKLZHind/DbYv3wMVj9mV/3d1960/NKJjdXJseCpzZWxmI2p1bWJmPWMycGEuYXNzZXJ0aW9ucy9jMnBhLmFjdGlvbnMudjJkaGFzaFggyb3UlIEwLv%2BB6sXsfwMRnfUXSYOCUqbZQ%2Bf67YHYNLGiY3VybHgpc2VsZiNqdW1iZj1jMnBhLmFzc2VydGlvbnMvYzJwYS5oYXNoLmRhdGFkaGFzaFgg/%2BmRAn4BtDSjkMTSqj6HnvKWiGlKeg8UT4HK2KwTlTd0Y2xhaW1fZ2VuZXJhdG9yX2luZm%2BjZG5hbWVvQW50aHJvcGljIEZpbGVzZ3ZlcnNpb25lMS4wLjBrc3BlY1ZlcnNpb25lMi40LjAAABA4anVtYgAAAChqdW1kYzJjcwARABCAAACqADibcQNjMnBhLnNpZ25hdHVyZQAAABAIY2JvctKEWQISogEmGCFZAgowggIGMIIBjaADAgECAhRA5aAK7sI50L64g/oGQgU9Z1UTADAKBggqhkjOPQQDAzBJMRcwFQYDVQQKEw5BbnRocm9waWMsIFBCQzEuMCwGA1UEAxMlQW50aHJvcGljIENvbnRlbnQgQ3JlZGVudGlhbHMgUm9vdCBDQTAeFw0yNjA4MDcxODQzNTZaFw0yODA4MDYxOTQzNTZaMEQxFzAVBgNVBAoTDkFudGhyb3BpYywgUEJDMSkwJwYDVQQDEyBBbnRocm9waWMgQ2xhdWRlIENvbnRlbnQgU2lnbmluZzBZMBMGByqGSM49AgEGCCqGSM49AwEHA0IABJh6CmvLUBgFFNU0vUKlOVtE6djd17L5SuwX0LemFisBM3dkd/3cyjxFA3Qo5S46fX0/ihY0VZ7mfb9KF703t5OjWDBWMA4GA1UdDwEB/wQEAwIHgDAVBgNVHSUEDjAMBgorBgEEAYPoXgIBMAwGA1UdEwEB/wQCMAAwHwYDVR0jBBgwFoAUzlHiBIFOZFsj%2BOPEz5o%2BnMHXXMIwCgYIKoZIzj0EAwMDZwAwZAIwMXMdFJ4BetLLVY7ORuE9noqbbAZOZn/aArXyTwFAZfKrPzxF2vPoJNf1%2BUCdg1XGAjBwX1zd9WGqYkqmL5SFqw1QySjr1zJfpJM9%2B1rdDwSPLMOPOjKuiXjoU/pUUeG9RwmhY3BhZFkNngAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPZYQIlVD7Q8PXNVWnG1GlQGicGyv2OVbc/O3g7j9QuUWVMH1e2VkA4ZmmPm/kg6FV53eUQvM05Fmy/kj3b3GRHWFF4=%3C/c2pa:manifest%3E%3C/metadata%3E%3C/svg%3E", m: 'Til' },
    { n: 'Maya', d: 'maya/maya-original.svg', m: 'Ma' },
    { n: 'Substance Painter', l: 'substance-painter.svg', u: "data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 64 64%22 xmlns:c2pa=%22http://c2pa.org/manifest%22%3E%3Crect x=%222%22 y=%222%22 width=%2260%22 height=%2260%22 rx=%2212%22 fill=%22%231c1c24%22/%3E%3Crect x=%222%22 y=%222%22 width=%2260%22 height=%2260%22 rx=%2212%22 fill=%22none%22 stroke=%22%23ff6a3d%22 stroke-width=%223%22/%3E%3Ctext x=%2232%22 y=%2243%22 text-anchor=%22middle%22 font-family=%22Arial,Helvetica,sans-serif%22 font-weight=%22700%22 font-size=%2228%22 fill=%22%23ff6a3d%22%3EPa%3C/text%3E%3Cmetadata%3E%3Cc2pa:manifest%3EAAAWgmp1bWIAAAAeanVtZGMycGEAEQAQgAAAqgA4m3EDYzJwYQAAABZcanVtYgAAAEdqdW1kYzJtYQARABCAAACqADibcQN1cm46YzJwYTpmNjNkNGYzZS1lMTkzLTQ4ZGEtYTFiNy01MGMwMzBhNmIxMzQAAAADl2p1bWIAAAApanVtZGMyYXMAEQAQgAAAqgA4m3EDYzJwYS5hc3NlcnRpb25zAAAAALxqdW1iAAAARGp1bWRjYm9yABEAEIAAAKoAOJtxE2MycGEuaW5ncmVkaWVudC52MwAAAAAYYzJzaHkDV1VBOZLjecOCxnbC/zcAAABwY2JvcqNpZGM6Zm9ybWF0bWltYWdlL3N2Zyt4bWxqaW5zdGFuY2VJRHgseG1wOmlpZDo4Y2Q2ODYxYy1mZWJjLTQ3YTktYjUwMy1hNzczMWJjZGM3MDhscmVsYXRpb25zaGlwaHBhcmVudE9mAAAB4mp1bWIAAABBanVtZGNib3IAEQAQgAAAqgA4m3ETYzJwYS5hY3Rpb25zLnYyAAAAABhjMnNoz3dFgmGxhH45zmCk1ard3QAAAZljYm9yomdhY3Rpb25zgqJmYWN0aW9ua2MycGEub3BlbmVkanBhcmFtZXRlcnOha2luZ3JlZGllbnRzgaJjdXJseC1zZWxmI2p1bWJmPWMycGEuYXNzZXJ0aW9ucy9jMnBhLmluZ3JlZGllbnQudjNkaGFzaFggk9/P%2BCh2VpkOm3vi/brDR0Ml3nz4hnX5tRZts6cbgq%2BkZmFjdGlvbngdY29tLmFudGhyb3BpYy5jbGF1ZGUucHJvdmlkZWRqcGFyYW1ldGVyc6F4H2NvbS5hbnRocm9waWMub3JpZ2luLWNvbmZpZGVuY2VndW5rbm93bmtkZXNjcmlwdGlvbnhmQ2xhdWRlIHByb3ZpZGVkIHRoaXMgZmlsZSBhdCB0aGUgcmVxdWVzdCBvZiBhIHVzZXIgYW5kIG1heSBoYXZlIGNyZWF0ZWQgb3IgbW9kaWZpZWQgdGhlIGZpbGUgY29udGVudHMubXNvZnR3YXJlQWdlbnShZG5hbWVmQ2xhdWRlcmFsbEFjdGlvbnNJbmNsdWRlZPUAAADIanVtYgAAAEBqdW1kY2JvcgARABCAAACqADibcRNjMnBhLmhhc2guZGF0YQAAAAAYYzJzaIYuhn47krOW/dp5inFwkA4AAACAY2JvcqVjYWxnZnNoYTI1NmNwYWRMAAAAAAAAAAAAAAAAZGhhc2hYIPPWJ8i3hzz9gJJGOkri0gPxKxn51bytXJkhYgz0iyQiZG5hbWVuanVtYmYgbWFuaWZlc3RqZXhjbHVzaW9uc4GiZXN0YXJ0GQGnZmxlbmd0aBkeBAAAAj5qdW1iAAAAJ2p1bWRjMmNsABEAEIAAAKoAOJtxA2MycGEuY2xhaW0udjIAAAACD2Nib3KlY2FsZ2ZzaGEyNTZpc2lnbmF0dXJleE1zZWxmI2p1bWJmPS9jMnBhL3VybjpjMnBhOmY2M2Q0ZjNlLWUxOTMtNDhkYS1hMWI3LTUwYzAzMGE2YjEzNC9jMnBhLnNpZ25hdHVyZWppbnN0YW5jZUlEeCx4bXA6aWlkOjc2NDc1ZWZlLWNlYjQtNDE2Mi05YjBhLTdhZDMyY2YzMmU1NXJjcmVhdGVkX2Fzc2VydGlvbnODomN1cmx4LXNlbGYjanVtYmY9YzJwYS5hc3NlcnRpb25zL2MycGEuaW5ncmVkaWVudC52M2RoYXNoWCCT38/4KHZWmQ6be%2BL9usNHQyXefPiGdfm1Fm2zpxuCr6JjdXJseCpzZWxmI2p1bWJmPWMycGEuYXNzZXJ0aW9ucy9jMnBhLmFjdGlvbnMudjJkaGFzaFgg8G94kHseL3cUEffnbb0TNNBwWaqngJ6LQCXMlaa15CSiY3VybHgpc2VsZiNqdW1iZj1jMnBhLmFzc2VydGlvbnMvYzJwYS5oYXNoLmRhdGFkaGFzaFggH7KdCrM2yRxAfKoJtWc8LLXovgmUU1OBhSDagOfbLbN0Y2xhaW1fZ2VuZXJhdG9yX2luZm%2BjZG5hbWVvQW50aHJvcGljIEZpbGVzZ3ZlcnNpb25lMS4wLjBrc3BlY1ZlcnNpb25lMi40LjAAABA4anVtYgAAAChqdW1kYzJjcwARABCAAACqADibcQNjMnBhLnNpZ25hdHVyZQAAABAIY2JvctKEWQISogEmGCFZAgowggIGMIIBjaADAgECAhRA5aAK7sI50L64g/oGQgU9Z1UTADAKBggqhkjOPQQDAzBJMRcwFQYDVQQKEw5BbnRocm9waWMsIFBCQzEuMCwGA1UEAxMlQW50aHJvcGljIENvbnRlbnQgQ3JlZGVudGlhbHMgUm9vdCBDQTAeFw0yNjA4MDcxODQzNTZaFw0yODA4MDYxOTQzNTZaMEQxFzAVBgNVBAoTDkFudGhyb3BpYywgUEJDMSkwJwYDVQQDEyBBbnRocm9waWMgQ2xhdWRlIENvbnRlbnQgU2lnbmluZzBZMBMGByqGSM49AgEGCCqGSM49AwEHA0IABJh6CmvLUBgFFNU0vUKlOVtE6djd17L5SuwX0LemFisBM3dkd/3cyjxFA3Qo5S46fX0/ihY0VZ7mfb9KF703t5OjWDBWMA4GA1UdDwEB/wQEAwIHgDAVBgNVHSUEDjAMBgorBgEEAYPoXgIBMAwGA1UdEwEB/wQCMAAwHwYDVR0jBBgwFoAUzlHiBIFOZFsj%2BOPEz5o%2BnMHXXMIwCgYIKoZIzj0EAwMDZwAwZAIwMXMdFJ4BetLLVY7ORuE9noqbbAZOZn/aArXyTwFAZfKrPzxF2vPoJNf1%2BUCdg1XGAjBwX1zd9WGqYkqmL5SFqw1QySjr1zJfpJM9%2B1rdDwSPLMOPOjKuiXjoU/pUUeG9RwmhY3BhZFkNngAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPZYQCgScxD0gOd4oZEkvHTMb9W2raxJ1VEMGxF2q2XWR6qScdKu5iHKYmturkus5DOSziFwShEXWdZTnW560CFXivs=%3C/c2pa:manifest%3E%3C/metadata%3E%3C/svg%3E", m: 'Pa' },
    { n: 'Photoshop', d: 'photoshop/photoshop-plain.svg', m: 'Ps' }
  ];

  var ME = 'Toni Llovera Roca';
  var PROJECTS = [
    {
      slug: 'estik', title: 'Estik',
      cover: [[IMG + 'estik.png']],
      card: 'Action and skill video game inspired by field hockey: guide the ball to the goal while overcoming obstacles.',
      tags: ['Action', 'Skill', 'Premis Ludi 2026'],
      video: yt('aGGM1yTLy6A'),
      facts: [['fa-calendar', '2026'], ['fa-users', '4 people'], ['fa-flag', 'Premis Ludi 2026']],
      about: "Estik is an action and skill video game inspired by field hockey in which the player must complete a series of dynamic levels. The goal of each stage is to guide the ball to the goal, overcoming a wide variety of environmental obstacles and challenges that test the player's precision, trajectory calculation and mental agility. It was created for the Premis Ludi 2026 by 3Cat.",
      features: ['Dynamic levels with environmental obstacles', 'Guide the ball to the goal', 'Tests precision and trajectory calculation'],
      workTitle: 'My work',
      work: 'Four-person team project. My role was programmer, UI programmer and technical artist.',
      team: [
        ['Marc Blanquez Padilla', 'Programmer, 3D artist and level designer', 'https://github.com/MarcBlanquezPadilla'],
        ['Martí Mira Vázquez', 'Level designer, UI artist and 3D artist', 'https://github.com/algars15'],
        ['Oscar Alonso Camenforte', 'Programmer, sound programmer and level designer', 'https://github.com/oscaralonsoo'],
        [ME, 'Programmer, UI programmer and technical artist', 'https://github.com/ToniLlovera', true]
      ],
      gallery: range(6, [function (i) { return 'estik-' + i + '.png'; }, function (i) { return 'Estik' + i + '.png'; }]),
      link: 'https://oalonsoo.itch.io/estik'
    },
    {
      slug: 'odossea', title: 'Odossea',
      cover: [[IMG + 'odossea.png']],
      award: ['Socialpoint Best Technology Award', '9th Gran CITM Game Jam', ['gamejam', 'socialpoint']],
      card: 'Co-op game for 2 players: throw and share mass to solve puzzles and clear platforms together.',
      tags: ['Platformer', 'Puzzle', 'Co-op', 'Game Jam'],
      facts: [['fa-calendar', 'Feb 2026'], ['fa-bolt', 'Game jam'], ['fa-gamepad', '2 players']],
      about: 'Odossea is a cooperative platformer and puzzle game for two players. You throw and share mass to solve puzzles and clear platforms together: the characters can split up to work together on their odyssey. It is played with keyboard and mouse plus one gamepad, or with two gamepads.',
      features: ['Local co-op multiplayer for 2 players', 'Throw-and-share-mass mechanic', 'Interactive tutorial', 'Gamepad support'],
      workTitle: 'Development',
      work: "Developed as a team by TorratsGames for the 9th Gran CITM GameJam (January–February 2026), organized by Delegació CITM UPC. It ranked #1 in Gameplay in the jam's voting.",
      gallery: range(6, [function (i) { return 'odossea-' + i + '.png'; }, function (i) { return 'O2ea' + (i - 1) + '.png'; }]),
      link: 'https://torratsgames.itch.io/odossea'
    },
    {
      slug: 'son-of-ithaca', title: 'Son Of Ithaca',
      cover: [[IMG + 'son-of-ithaca.png']],
      award: ['Nominee: Best Academic Game', 'IndieDevDay · SAGA Game Fest 2026', ['indiedevday']],
      card: '3D action-adventure based on The Odyssey: you play as Telemachus searching for his father, Odysseus.',
      tags: ['Action-Adventure', '3D', 'Teamwork'],
      video: yt('PYzuc0fsHpM'),
      facts: [['fa-calendar', 'Jul 2026'], ['fa-users', '20+ people'], ['fa-desktop', 'Windows']],
      about: 'Son of Ithaca is an action-adventure game based on The Odyssey, where you play as Telemachus searching for his father, Odysseus. With the help of Athena, goddess of wisdom, travel to a mysterious island and explore it to gain new powers from the gods in the form of equippable masks; then open the portal to the Underworld and face the final challenges.',
      features: ['3D action-adventure based on The Odyssey', 'Equippable masks with the powers of the gods', 'Exploration of a mysterious island and a portal to the Underworld'],
      workTitle: 'Development',
      work: 'Project developed as a team by Nobody Games Studio, with over 20 people. Free for Windows; roughly one hour long.',
      gallery: range(8, [function (i) { return 'son-of-ithaca-' + i + '.png'; }, function (i) { return 'SOI' + i + '.png'; }]),
      link: 'https://nobody-games-studio.itch.io/son-of-ithaca'
    },
    {
      slug: 'granotago', title: 'GranotaGo',
      cover: [[IMG + 'granotago.png']],
      card: "Game made for 3Cat's Premis Ludi. Guide an adventurous frog in a 2D experience.",
      tags: ['Unity', 'C#', 'GameJam'],
      facts: [['fa-calendar', 'Oct 2025'], ['fa-wrench', 'Unity'], ['fa-child', 'Ages 6–8']],
      about: "GranotaGo is a casual, colorful game aimed at children aged 6 to 8 and developed in Unity, in which the player controls a frog that must move through dynamic scenes, avoiding obstacles and collecting points. It was created for 3Cat's Premis Ludi together with other CITM students.",
      features: ['Drag & drop mechanics', 'Colorful scenes', 'Scoring system'],
      workTitle: 'My work',
      work: "During development, I worked on programming the panel and block system. I was also in charge of testing, fixing and polishing the levels. The project was presented at 3Cat's Premis Ludi and stood out for its look and smooth gameplay.",
      gallery: range(5, [function (i) { return 'granotago-' + i + '.png'; }]),
      link: 'https://oalonsoo.itch.io/granotago'
    },
    {
      slug: 'the-apprentice', title: 'The Apprentice',
      cover: [[IMG + 'the-apprentice-title.png']],
      card: '2D platformer made with SDL2 alongside digital art students.',
      tags: ['SDL2', 'C++', 'Tiled'],
      facts: [['fa-calendar', 'Jun 2025'], ['fa-wrench', 'C++ · SDL2 · Tiled']],
      about: 'The Apprentice is a 2D platformer and adventure game in which the player plays a young apprentice who seeks to master ancient magic. It was developed with SDL2 and Tiled, combining a handcrafted art direction with precise level design.',
      features: ['Physics and collision system in C++', 'Tiled map integration', 'Basic AI for enemies and bosses'],
      workTitle: 'My work',
      work: "My main role was programming the logic for menus, transitions, levels, saving and loading, and UI. I also helped integrate art assets, programmed enemy AI and optimized the base engine's performance.",
      gallery: range(4, [function (i) { return 'the-apprentice-' + i + '.jpg'; }]),
      link: 'https://oalonsoo.itch.io/the-apprentice'
    }
  ];

  /* ---------- HELPERS ---------- */
  function el(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function initials(n) { return n.split(' ').filter(Boolean).slice(0, 2).map(function (w) { return w[0]; }).join('').toUpperCase(); }

  // image that walks through its candidate file names; calls onFail if none loads
  function tryImg(cands, alt, onFail) {
    var img = new Image(), i = 0;
    img.alt = alt; img.loading = 'lazy'; img.decoding = 'async';
    img.onerror = function () {
      i++;
      if (i < cands.length) img.src = cands[i]; else { img.onerror = null; if (onFail) onFail(img); }
    };
    img.src = cands[0];
    return img;
  }

  /* ---------- SKILLS ---------- */
  function skillTile(s) {
    var d = el('div', 'skill'), box = el('span', 'ico'), ico;
    if (s.d || s.l || s.u) {
      // a file in images/skills/ wins; otherwise devicon; otherwise initials
      var srcs = [];
      if (s.l) srcs.push('./images/skills/' + s.l);
      if (s.d) srcs.push(DEV + s.d);
      if (s.u) srcs.push(s.u);
      var k = 0;
      ico = new Image(); ico.alt = ''; ico.loading = 'lazy';
      ico.onerror = function () { k++; if (k < srcs.length) ico.src = srcs[k]; else ico.replaceWith(el('i', 'mono', s.m)); };
      ico.src = srcs[0];
    } else if (s.fa) { ico = el('i', 'fas ' + s.fa); }
    else { ico = el('i', 'mono', s.m); }
    box.appendChild(ico); d.appendChild(box); d.appendChild(el('span', '', esc(s.n)));
    return d;
  }
  var track = $('#skillTrack');
  SKILLS.concat(SKILLS).forEach(function (s) { track.appendChild(skillTile(s)); });

  /* ---------- SHOWCASE (project images) ---------- */
  function showcase(p) {
    var box = el('div', 'showcase');
    box.appendChild(el('h3', '', 'Showcase'));
    var stage = el('button', 'stage'); stage.type = 'button';
    stage.setAttribute('aria-label', 'Open image full screen');
    var big = new Image(); big.alt = ''; big.decoding = 'async'; stage.appendChild(big);
    var thumbs = el('div', 'thumbs');
    var foot = el('div', 'sc-foot');
    var cap = el('span', 'sc-cap'), cnt = el('span', 'sc-count');
    var prev = el('button', 'sc-btn', '<i class="fas fa-chevron-left"></i>'), next = el('button', 'sc-btn', '<i class="fas fa-chevron-right"></i>');
    prev.type = next.type = 'button'; prev.setAttribute('aria-label', 'Previous image'); next.setAttribute('aria-label', 'Next image');
    foot.appendChild(cap); foot.appendChild(cnt); foot.appendChild(prev); foot.appendChild(next);
    box.appendChild(stage); box.appendChild(thumbs); box.appendChild(foot);

    var items = [], cur = 0;
    function paint() {
      if (!items.length) { box.hidden = true; return; }
      box.hidden = false;
      cur = Math.min(cur, items.length - 1);
      var it = items[cur], src = it.img.currentSrc || it.img.src;
      if (big.getAttribute('src') !== src) big.src = src;
      big.alt = it.img.alt;
      cap.textContent = it.cap;
      cnt.textContent = (cur + 1) + ' / ' + items.length;
      box.classList.toggle('single', items.length < 2);
      items.forEach(function (x, i) { x.btn.classList.toggle('on', i === cur); x.btn.setAttribute('aria-current', i === cur ? 'true' : 'false'); });
    }
    function go(i, smooth) {
      if (!items.length) return;
      cur = (i + items.length) % items.length;
      big.classList.remove('swap'); void big.offsetWidth; big.classList.add('swap');
      paint();
      var b = items[cur].btn;
      thumbs.scrollTo({ left: b.offsetLeft - (thumbs.clientWidth - b.offsetWidth) / 2, behavior: reduce ? 'auto' : 'smooth' });
    }
    p.gallery.forEach(function (cands, k) {
      var b = el('button', 'thumb'); b.type = 'button'; b.setAttribute('aria-label', 'Show image ' + (k + 1));
      var it = { btn: b, cap: (p.captions && p.captions[k]) || 'Screenshot ' + (k + 1) };
      it.img = tryImg(cands, p.title + ' screenshot ' + (k + 1), function () {
        var i = items.indexOf(it); if (i > -1) { items.splice(i, 1); if (i < cur) cur--; }
        b.remove(); paint();
      });
      it.img.addEventListener('load', paint);
      b.appendChild(it.img); thumbs.appendChild(b); items.push(it);
      b.addEventListener('click', function () { go(items.indexOf(it)); });
    });
    prev.addEventListener('click', function () { go(cur - 1); });
    next.addEventListener('click', function () { go(cur + 1); });
    stage.addEventListener('click', function () { openLB(items.map(function (x) { return x.img; }), cur); });
    box.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') { go(cur - 1); e.preventDefault(); }
      else if (e.key === 'ArrowRight') { go(cur + 1); e.preventDefault(); }
    });
    paint();
    return box;
  }

  /* ---------- PROJECT CARDS + WINDOWS ---------- */
  var grid = $('#projGrid');
  var SHOW_FIRST = 3; // projects visible before pressing "Show more"
  PROJECTS.forEach(function (p, idx) {
    // card
    var c = el('article', 'proj reveal'); c.id = p.slug; c.setAttribute('data-open', p.slug); c.style.setProperty('--d', idx % SHOW_FIRST);
    if (idx >= SHOW_FIRST) c.classList.add('extra', 'is-collapsed');
    var cover = el('div', 'cover');
    cover.appendChild(tryImg(p.cover[0], p.title, function (im) { im.remove(); }));
    cover.appendChild(el('span', 'badge', p.type || 'GAME'));
    var body = el('div', 'pbody');
    body.appendChild(el('h3', '', esc(p.title)));
    if (p.award) {
      var aw = el('div', 'award');
      if (p.award[2]) aw.appendChild(logoEls(p.award[2], 'logos'));
      else aw.appendChild(el('i', 'fas fa-trophy', ''));
      aw.appendChild(el('div', '', '<strong>' + esc(p.award[0]) + '</strong><span>' + esc(p.award[1]) + '</span>'));
      body.appendChild(aw);
    }
    body.appendChild(el('p', 'pcard', esc(p.card)));
    body.appendChild(el('div', 'tags', p.tags.map(function (t) { return '<span class="tag">' + esc(t) + '</span>'; }).join('')));
    var btn = el('button', 'open', 'View project <i class="fas fa-arrow-right"></i>');
    btn.type = 'button'; btn.setAttribute('data-open', p.slug);
    body.appendChild(btn);
    c.appendChild(cover); c.appendChild(body); grid.appendChild(c);

    // hover preview: the project's video plays muted inside the cover, only while the pointer is over the card
    if (p.video && !reduce && matchMedia('(hover: hover) and (pointer: fine)').matches) (function () {
      var vid = p.video.split('/').pop(), pv = null, timer = null;
      function stop() { clearTimeout(timer); if (pv) { pv.remove(); pv = null; } }
      c.addEventListener('mouseenter', function () {
        timer = setTimeout(function () {
          pv = document.createElement('iframe');
          pv.className = 'preview'; pv.title = ''; pv.tabIndex = -1; pv.setAttribute('aria-hidden', 'true');
          pv.setAttribute('allow', 'autoplay; encrypted-media');
          pv.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
          var q = '?autoplay=1&mute=1&controls=0&loop=1&playlist=' + vid + '&playsinline=1&modestbranding=1&rel=0&disablekb=1&iv_load_policy=3&fs=0&enablejsapi=1';
          if (location.protocol.indexOf('http') === 0) q += '&origin=' + encodeURIComponent(location.origin);
          pv.src = p.video + q;
          pv.addEventListener('load', function () {
            if (!pv) return;
            var f = pv;
            // nudge the player in case the browser held back autoplay
            try { f.contentWindow.postMessage(JSON.stringify({ event: 'command', func: 'mute', args: [] }), '*'); f.contentWindow.postMessage(JSON.stringify({ event: 'command', func: 'playVideo', args: [] }), '*'); } catch (e) {}
            setTimeout(function () { if (pv === f) f.classList.add('on'); }, 600);
          });
          cover.insertBefore(pv, cover.querySelector('.badge'));
        }, 200);
      });
      c.addEventListener('mouseleave', stop);
    })();

    // window
    var d = el('dialog', 'modal'); d.id = 'm-' + p.slug; d.setAttribute('aria-label', p.title);
    var x = el('button', 'x', '&times;'); x.type = 'button'; x.setAttribute('aria-label', 'Close'); x.setAttribute('data-close', '');
    var sc = el('div', 'mscroll');
    var n = 0;
    function blk(node) { node.classList.add('blk'); node.style.setProperty('--i', n++); sc.appendChild(node); return node; }

    var head = el('div', '', '<h2>' + esc(p.title) + '</h2>');
    if (p.award) {
      var ban = el('div', 'banner');
      if (p.award[2]) ban.appendChild(logoEls(p.award[2], 'logos big'));
      else ban.appendChild(el('i', 'fas fa-trophy', ''));
      ban.appendChild(el('div', 'btxt', '<strong>' + esc(p.award[0]) + '</strong><span>' + esc(p.award[1]) + '</span>'));
      head.appendChild(ban);
    }
    blk(head);

    var media = el('div', 'media');
    if (p.video) {
      var f = document.createElement('iframe');
      f.setAttribute('data-src', p.video); f.title = p.title; f.allowFullscreen = true;
      f.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
      f.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
      media.appendChild(f);
      blk(media);
    } else {
      var mi = tryImg(p.cover[0], p.title, function () { media.remove(); });
      media.appendChild(mi); blk(media);
    }

    blk(el('div', 'facts', p.facts.map(function (f) { return '<span><i class="fas ' + f[0] + '"></i>' + esc(f[1]) + '</span>'; }).join('')));

    // two columns: text | team
    var cols = el('div', 'cols');
    var left = el('div');
    left.appendChild(el('h3', '', 'About the project'));
    left.appendChild(el('p', '', esc(p.about)));
    left.appendChild(el('h3', '', 'Main features'));
    left.appendChild(el('ul', '', p.features.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('')));
    left.appendChild(el('h3', '', esc(p.workTitle)));
    left.appendChild(el('p', '', esc(p.work)));
    cols.appendChild(left);
    if (p.team) {
      var right = el('div');
      right.appendChild(el('h3', '', 'Team'));
      var tm = el('div', 'team');
      p.team.forEach(function (m) {
        var row = el('div', 'member' + (m[3] ? ' me' : ''));
        row.innerHTML = '<span class="avatar">' + esc(initials(m[0])) + '</span><div><strong>' + esc(m[0]) + '</strong><small>' + esc(m[1]) + '</small></div>' +
          '<a href="' + esc(m[2]) + '" target="_blank" rel="noopener" aria-label="' + esc(m[0]) + ' on GitHub"><i class="fab fa-github"></i></a>';
        var av = row.querySelector('.avatar'), gh = m[2].replace(/\/+$/, '').split('/').pop();
        var pics = ['https://github.com/' + encodeURIComponent(gh) + '.png?size=96'];
        if (m[3]) pics.unshift('./images/toni.jpg');
        av.appendChild(tryImg(pics, m[0], function (im) { im.remove(); })); // if none loads, the initials stay
        tm.appendChild(row);
      });
      right.appendChild(tm); cols.appendChild(right);
    } else { cols.style.gridTemplateColumns = '1fr'; }
    blk(cols);

    // showcase (screenshots)
    var tail = el('div');
    if (p.gallery && p.gallery.length) tail.appendChild(showcase(p));
    var btns = el('div', 'btns');
    if (p.link) btns.appendChild(el('a', 'visit', '<i class="fas fa-arrow-up-right-from-square"></i> View on itch.io')).href = p.link;
    if (p.link) { var a = btns.lastChild; a.target = '_blank'; a.rel = 'noopener'; }
    if (btns.children.length) tail.appendChild(btns);
    blk(tail);

    d.appendChild(x); d.appendChild(sc); document.body.appendChild(d);
  });

  /* ---------- SHOW MORE / FEWER PROJECTS ---------- */
  var moreWrap = $('#moreWrap'), moreBtn = $('#moreBtn');
  if (moreBtn && PROJECTS.length > SHOW_FIRST) {
    moreWrap.hidden = false;
    var hiddenCount = PROJECTS.length - SHOW_FIRST;
    var paintMore = function (open) {
      $('span', moreBtn).textContent = open ? 'Show fewer projects' : 'Show more projects (' + hiddenCount + ')';
      moreBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    };
    paintMore(false);
    moreBtn.addEventListener('click', function () {
      var open = moreBtn.getAttribute('aria-expanded') !== 'true';
      $$('.proj.extra').forEach(function (c) { c.classList.toggle('is-collapsed', !open); });
      paintMore(open);
      if (!open) $('#projects').scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
    });
  }

  /* ---------- PROGRESS BAR ---------- */
  var bar = $('.progress');
  function prog() { var h = document.documentElement; var m = h.scrollHeight - h.clientHeight; bar.style.transform = 'scaleX(' + (m > 0 ? h.scrollTop / m : 0) + ')'; }
  addEventListener('scroll', prog, { passive: true }); prog();

  /* ---------- REVEAL ON SCROLL ---------- */
  var io = 'IntersectionObserver' in window ? new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in-view'); io.unobserve(e.target); } });
  }, { threshold: 0.12 }) : null;
  $$('.reveal, .sec-title').forEach(function (e) { io ? io.observe(e) : e.classList.add('in-view'); });

  /* ---------- TYPEWRITER ---------- */
  var roles = $('#roles');
  if (roles) {
    var words = JSON.parse(roles.dataset.words), w = 0, c2 = 0, del = false;
    if (reduce) { roles.textContent = words[0]; } else (function tick() {
      var cur = words[w];
      roles.textContent = cur.slice(0, c2);
      if (!del && c2 === cur.length) { del = true; return setTimeout(tick, 1600); }
      if (del && c2 === 0) { del = false; w = (w + 1) % words.length; return setTimeout(tick, 350); }
      c2 += del ? -1 : 1; setTimeout(tick, del ? 35 : 75);
    })();
  }

  /* ---------- PROJECT WINDOWS ---------- */
  function openM(slug) {
    var d = document.getElementById('m-' + slug); if (!d || d.open) return;
    d.showModal(); raiseCursor(); document.body.classList.add('lock');
    $$('iframe[data-src]', d).forEach(function (f) { f.src = f.dataset.src; });
    history.replaceState(null, '', '#' + slug);
  }
  function closeM(d) {
    $$('iframe', d).forEach(function (f) { f.src = ''; });
    document.body.classList.remove('lock');
    if (location.hash) history.replaceState(null, '', location.pathname + location.search);
  }
  $$('[data-open]').forEach(function (b) { b.addEventListener('click', function () { openM(b.dataset.open); }); });
  $$('dialog.modal').forEach(function (d) {
    d.addEventListener('click', function (e) { if (e.target === d || e.target.hasAttribute('data-close')) d.close(); });
    d.addEventListener('close', function () { closeM(d); });
  });

  /* ---------- LIGHTBOX ---------- */
  var lb = $('#lb'), lbImg = $('#lbImg'), lbCount = $('#lbCount'), cur = 0, list = [];
  function showLB() {
    var im = list[cur]; lbImg.src = im.currentSrc || im.src; lbImg.alt = im.alt;
    lbCount.textContent = (cur + 1) + ' / ' + list.length;
  }
  function openLB(imgs, i) { list = imgs; cur = Math.max(0, i); showLB(); lb.showModal(); raiseCursor(); }
  function step(n) { cur = (cur + n + list.length) % list.length; showLB(); }
  $('.prev', lb).addEventListener('click', function () { step(-1); });
  $('.next', lb).addEventListener('click', function () { step(1); });
  lb.addEventListener('click', function (e) { if (e.target === lb || e.target.hasAttribute('data-lbclose')) lb.close(); });
  lb.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') step(-1);
    else if (e.key === 'ArrowRight') step(1);
  });

  /* ---------- CUSTOM CURSOR ---------- */
  var curDot, curRing;
  // keeps the cursor above open dialogs (they live in the browser's top layer)
  function raiseCursor() {
    [curRing, curDot].forEach(function (n) {
      if (n && n.showPopover) { try { n.hidePopover(); n.showPopover(); } catch (e) {} }
    });
  }
  if (!reduce && matchMedia('(hover: hover) and (pointer: fine)').matches) (function () {
    curDot = el('div', 'cur-dot'); curRing = el('div', 'cur-ring');
    var curLabel = el('span'); curRing.appendChild(curLabel);
    [curDot, curRing].forEach(function (n) {
      n.setAttribute('aria-hidden', 'true'); n.setAttribute('popover', 'manual'); document.body.appendChild(n);
    });
    raiseCursor();

    var x = -100, y = -100, rx = -100, ry = -100, seen = false;
    function vis(v) { curDot.classList.toggle('on', v); curRing.classList.toggle('on', v); }
    function put(n, px, py) { n.style.transform = 'translate3d(' + px + 'px,' + py + 'px,0) translate(-50%,-50%)'; }

    document.addEventListener('pointermove', function (e) {
      x = e.clientX; y = e.clientY;
      if (!seen) { seen = true; rx = x; ry = y; vis(true); }
      put(curDot, x, y);
    }, { passive: true });

    document.addEventListener('pointerover', function (e) {
      var t = e.target; if (!t || !t.closest) return;
      var onFrame = t.tagName === 'IFRAME';
      var lab = t.closest('[data-cursor]');
      var lnk = t.closest('a,button,summary,[role="button"],[data-open]');
      curRing.classList.toggle('label', !!lab && !onFrame);
      curRing.classList.toggle('link', !lab && !!lnk);
      curDot.classList.toggle('hide', !!lab || onFrame);
      curDot.classList.toggle('hide-link', curRing.classList.contains('link'));
      curRing.classList.toggle('off', onFrame);
      if (lab) curLabel.textContent = lab.getAttribute('data-cursor');
    });
    document.addEventListener('pointerdown', function () { curRing.classList.add('down'); });
    document.addEventListener('pointerup', function () { curRing.classList.remove('down'); });
    document.documentElement.addEventListener('mouseleave', function () { vis(false); });
    document.documentElement.addEventListener('mouseenter', function () { if (seen) vis(true); });

    (function loop() {
      rx += (x - rx) * 0.18; ry += (y - ry) * 0.18;
      put(curRing, rx, ry);
      requestAnimationFrame(loop);
    })();

    document.documentElement.classList.add('has-cursor');
  })();

  /* ---------- ACTIVE NAV LINK ---------- */
  var links = $$('.top nav a'), secs = links.map(function (a) { return $(a.getAttribute('href')); });
  function spy() {
    var y = scrollY + innerHeight * 0.35, active = -1;
    secs.forEach(function (s, i) { if (s && s.offsetTop <= y) active = i; });
    links.forEach(function (a, i) { a.classList.toggle('active', i === active); });
  }
  addEventListener('scroll', spy, { passive: true }); spy();

  var sp = $('#statProjects'); if (sp) sp.textContent = PROJECTS.length;

  var h = location.hash.slice(1); if (h) openM(h);
})();