function domainName(url) {
	let m = url.match(/^(https?:\/\/)?(www\.)?([\da-z-]+)/);
	return m[3];
}

console.log(domainName("http://google.com"), "google");
console.log(domainName("http://google.co.jp"), "google");
console.log(domainName("www.xakep.ru"), "xakep");
console.log(domainName("https://youtube.com"), "youtube");
console.log(domainName("https://hyphen-site.org"), "hyphen-site");