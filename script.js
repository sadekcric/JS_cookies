function setCookies(cname, cvalue, expireDays) {
  const d = new Date();
  d.setDate(d.getDay() + expireDays * 24 * 60 * 60 * 1000);

  let expires = "expires=" + d.toUTCString();

  document.cookie = cname + "=" + cvalue + ";" + expireDays + ";path=/";
}

function getCookie(cname) {
  // username=Sadek; name=Sadekur Rahman

  let name = cname + "=";
  let ca = document.cookie.split(";");

  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    let trim=c.trim();

    if (trim.indexOf(name) === 0) {
      return trim.substring(name.length);
    }
  }

  return "";
}
