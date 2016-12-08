# awesome-bemcss
Simple CSS Framework with BEM CSS convention implementation

<h3>Preview</h3>
<a href="http://i1176.photobucket.com/albums/x322/mazipanneh/awesome-bemcss_zpsrlpgn4yj.png">http://i1176.photobucket.com/albums/x322/mazipanneh/awesome-bemcss_zpsrlpgn4yj.png</a>

<h3>Download</h3>
- <a href="https://github.com/mazipan/awesome-bemcss/releases">Download via github release</a>
- With npm : <code>npm install awesome-bemcss</code>

<h3>Demo And Cheatsheet</h3>
<a href="https://mazipan.github.io/awesome-bemcss/demo/">https://mazipan.github.io/awesome-bemcss/demo/</a>

<h3>Usage</h3>

Using CSS Native : 
<pre>
<code class="language-markup">
&lt;!-- awesome-bemcss css depedency --&gt;
&lt;link  rel="stylesheet" href="{URL_PATH}/css/awesome-bemcss.min.css" rel="stylesheet"/&gt;

&lt;!-- jquery library --&gt;
&lt;script type="text/javascript" src="{URL_PATH}/js/jquery.min.js"&gt;&lt;/script&gt;

&lt;!-- awesome-bemcss js depedency --&gt;
&lt;script type="text/javascript" src="{URL_PATH}/js/awesome-bemcss.min.js"&gt;&lt;/script&gt;</code>
</pre>

Using SASS Import : 
<pre>
<code class="language-markup">
&lt;!-- jquery library --&gt;
&lt;script type="text/javascript" src="{URL_PATH}/js/jquery.min.js"&gt;&lt;/script&gt;

&lt;!-- awesome-bemcss js depedency --&gt;
&lt;script type="text/javascript" src="{URL_PATH}/js/awesome-bemcss.min.js"&gt;&lt;/script&gt;

&lt;!-- in your sass file --&gt;
@import "src/scss/_awesome-bemcss";
</code>
</pre>

<h3>Supported Component (in alphabetical order)</h3>
- alert 
- button (basic, outline, radius, dropdown)
- card
- checkbox (black and blue theme)
- form 
- grid system (traditional grid and flex)
- modal (white and blue theme)
- pagination (basic and radius)
- popover (dark theme)
- radio (black and blue theme)
- select
- table (support sort arrow view)
- tabs (horizontal and vertical)
- textfield (basic for input text and textarea)

<h3>Using Technology</h3>
- SCSS from SASS 
- HTML
- NodeJS, Grunt, etc.

<h3>License</h3>
<a href="https://github.com/mazipan/awesome-bemcss/blob/master/LICENSE">MIT License</a>

<h3>Folder Structure</h3>
- All code in <code>src</code> folder is SCSS code
- All code in <code>dist</code> folder is production phase, if you prefer use final CSS
- In <code>src</code> folder there is <code>_awesome-bemcss.scss</code> and <code>awesome-bemcss.scss</code>
- <code>_awesome-bemcss.scss</code> using <strong>silent extends</strong> using char % without produce class
- <code>awesome-bemcss.scss</code> will produce class
- If you fluent with pre-processor SASS, I suggest using <code>_awesome-bemcss.scss</code>
- In <code>demo</code> folder is demo file for sample using this framework, include cheatsheet

</br>
Hope will usefull for you all.</br>

Question ? please email : mazipanneh@gmail.com
