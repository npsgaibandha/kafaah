const body = document.body;
const footer = document.createElement("footer");
footer.classList.add("footer");
body.appendChild(footer);
footer.innerHTML = `<div class="logos">
				<img src="pics/kafag.png" alt="" />
				
			</div>
			<div class="icons">'
				
			<a href="https://www.facebook.com/kafaahbd" target="_blank">
				
			<i class="fa-brands fa-facebook onei" >
				
			</i>
				
			</a>
				
			<a href="https://wa.me/8801837103985" target="_blank">
				
			<i class="fa-brands fa-whatsapp twoi">
				
			</i>
				
			</a>
				
			
				
			<a href=""><i class="fa-brands fa-youtube threei ">
			
			</i></a>
			</div>
			<div class ="twoflex">
			<div class="menus">
				<ul>
					<li><a href="about/index.html">About </a></li>
					<li><a href="">Team Members</a></li>
					<li><a href="">Join us</a></li>
					<li><a href="projects/index.html">Project Info</a></li>
					<li><a href="">Contact</a></li>
				</ul>
			</div>
			<div class="lan">
				<ul>
					<li><a href="./tc/index.html">Terms and Conditions</a></li>
					<li><a href="memshi/index.html">Joining Conditions</a></li>
					<li><a href="prp/index.html">Privay and Policy</a></li>
				</ul>
			</div>
			</div>
			<a href="coprs/index.html" class="footp">©kafaah</a>`;

let link = document.createElement("link");
link.rel = "stylesheet";
link.href =
	"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css";
let head = document.head;
head.appendChild(link);

let nav = document.createElement("nav");
body.prepend(nav);
nav.classList.add("mainNav");
nav.innerHTML = `

<ul class="navUl">
		
        <li id="anim">
		<a   href="home/index.html">Home</a>
        <div class="bodre"></div></li>
        <li>
		<a   href="projects/index.html">Projects</a>
		</li>
        <li>
		<a href="about/index.html">About</a>
		</li>
    </ul>`;
const lk = document.createElement('link')
//<link rel= href="../resp.css" />

lk.rel = "stylesheet"
lk.href= "resp.css"

head.appendChild(lk)

const fav = document.createElement("link");
fav.rel = "shortcut icon";
fav.href = "pics/icon.png";
fav.type = "image/x-icon";
head.append(fav);
const navs = document.createElement('nav')
navs.classList.add('mbnav')
body.prepend(navs)

navs.innerHTML = `<ul>
				<li><a href="home/index.html">Home</a></li>
				<li><a href="projects/index.html">Projects</a></li>
				<li><a href="about/index.html">About</a></li>
			</ul>`

const navmbcont = document.createElement('div')
navmbcont.classList.add('mand')
body.prepend(navmbcont)
navmbcont.innerHTML = `<div class="mainim"><a href="home/index.html"><img src="pics/kafaah.png" alt="" /></a></div>
			
				<button id="menu-btn"  class="logmen">☰ Menu</button>`

const btnsa = document.querySelector("#menu-btn");
const mbnav = document.querySelector(".mbnav");

btnsa.addEventListener("click", () => {
	mbnav.classList.toggle("show");
});

navs.innerHTML = `<ul>
				<li><a href="../home/index.html">Home</a></li>
				<li><a href="../projects/index.html">Projects</a></li>
				<li><a href="../about/index.html">About</a></li>
				<li><button id="drk">
	🌗 Dark
</button></li>
			</ul>`

const navmbcont = document.createElement('div')
navmbcont.classList.add('mand')
body.prepend(navmbcont)
navmbcont.innerHTML = `<div class="mainim"><a href="../home/index.html"><img src="../pics/kafaah.png" alt="" /></a></div>
			
				<button id="menu-btn"  class="logmen">☰ Menu</button>`

const btnsa = document.querySelector("#menu-btn");
const mbnav = document.querySelector(".mbnav");

btnsa.addEventListener("click", () => {
	mbnav.classList.toggle("show");
});

const drk = document.createElement('button')
// dark.classList.add('kalla')
// body.prepend(dark)
drk.textContent = '🌗 Dark'
drk.classList.add('drk')
body.append(drk)
const dark = document.getElementById('drk')

const savedThe = localStorage.getItem('theme')
if(savedThe == 'darkInline'){
	body.classList.add('kalla')
}

drk.addEventListener('click',()=>{
	body.classList.toggle('kalla')
	if(body.classList.contains('kalla')){
		localStorage.setItem('theme','darkInline')
	}else{
		localStorage.setItem('theme','light')
	}
})
dark.addEventListener('click',()=>{
	body.classList.toggle('kalla')
	if(body.classList.contains('kalla')){
		localStorage.setItem('theme','darkInline')
	}else{
		localStorage.setItem('theme','light')
	}

})
