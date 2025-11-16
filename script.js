
const body = document.body
const footer = document.createElement('footer')
footer.classList.add('footer')
body.appendChild(footer)
footer.innerHTML = `<div class="logos">
				<img src="../pics/kafag.png" alt="" />
				
			</div>
			<div class="icons">'
				<a href="https://www.facebook.com/kafaahbd" target="_blank"><i class="fa-brands fa-facebook"></i></a>
				<a target="_blank" href="https://wa.me/8801837103985"><i class="fa-brands fa-whatsapp"></i></a>
				<i class="fa-brands fa-youtube"></i>
			</div>
			<div class="menus">
				<ul>
					<li><a href="">About </a></li>
					<li><a href="">Team Members</a></li>
					<li><a href="">Join us</a></li>
					<li><a href="">Project Info</a></li>
					<li><a href="">Contact</a></li>
				</ul>
			</div>
			<div class="lan">
				<ul>
					<li><a href="">English</a></li>
					<li><a href="">Bangla</a></li>
					<li><a href="../prp/index.html">Privay and Polici</a></li>
				</ul>
			</div>
			<p class="footp">©kafaah</p>`
        


let link = document.createElement('link')
link.rel= "stylesheet"
link.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css"
let head = document.head
head.appendChild(link)

let nav = document.createElement('nav')
body.prepend(nav)
nav.classList.add('mainNav')
nav.innerHTML = `

<ul class="navUl">
		
        <li id="anim">
		<a   href="../home/index.html">Home</a>
        <div class="bodre"></div></li>
        <li>
		<a   href="../projects/index.html">Projects</a>
		</li>
        <li>
		<a href="../about/index.html">About</a>
		</li>
    </ul>`




const fav =	document.createElement('link')
fav.rel = 'shortcut icon'
fav.href = "../pics/icon.png"
fav.type = "image/x-icon"
head.append(fav)

