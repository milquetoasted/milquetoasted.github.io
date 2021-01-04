let about =
`
    <span>
    <p>hi i'm lila and this site is very much under construction</p>
    <p>i like coding, music, art, and being an armchair sports fan</p>
    <p>here's my <a href="https://github.com/milquetoasted">github</a> / <a href="https://www.linkedin.com/in/lilahuang/">linkedin</a> / <a href="https://milquetoasted.tumblr.com/">tumblr</a> / <a href="https://jin-boyang.tumblr.com/">boyang jin fanblog</a> / <a href="resume.pdf">resume</a></p>
    <br>
    <p class="contact">contact me:</p>
    <form onsubmit="event.preventDefault()">
    <p>
    <span>name</span>
    <input type="text"></input>
    </p>
    <p>
    <span>email</span>
    <input type="text"></input>
    </p>
    <p>
    <span>message</span>
    <textarea name="msg" rows="5"></textarea></p>
    <button onclick="email(event)">submit</button>
    </form>
    </span>
    `;

function email(e) {
    e.preventDefault();
    alert('boop');
}
