<?php
defined('_VALID_AI') or die('Direct Access to this location is not allowed.');

aiPostboxOpen("id-help-jquery", "Small jQuery help", $closedArray); 
?>
      <p>
     <?php _e('You can use jQuery selector patterns directly to identify the elements you want to modify at some of the settings. This plugin does use this selectors than at the right place. This is already an advanced topic if you are not familiar with jQuery.', 'advanced-iframe') ?>
      </p>
<?php if (true) {  ?>
    <p>
    <a href="#" onclick="jQuery('#jquery-help').show(); return false;" > <?php _e('Show me a small jQuery selector help.', 'advanced-iframe') ?></a>
    </p>
      <?php
      _e('<div id="jquery-help">
      <p>
      This is a small jQuery selector help which is optimized for the advanced iframes scenarios.
      </p>

      <h3>What are jQuery selectors?</h3>
      <p>
      jQuery selectors are one of the most important aspects of the jQuery library. These selectors use familiar CSS syntax to allow page authors to quickly and easily identify any set of page elements to operate upon with the jQuery library methods. Understanding jQuery selectors is the key to using the jQuery library most effectively. The selector is a string expression that identifies the set of DOM elements that will be collected into a matched set to be operated upon by the jQuery methods.
      </p>
      <h3>Types of jQuery selectors?</h3>
      <p>The "Basic Selectors" are known as "find selectors" as they are used to find elements within the DOM. The "Positional" and "Custom Selectors" are "filter selectors" as they filter a set of elements (which defaults to the entire set of elements in the DOM). This extract will focus on the basic selectors as they are most important and will cover most of your needs.
      </p>

      <h4>Basic CSS Selectors</h4>
      <p>These selectors follow standard CSS3 syntax and semantics. For more selectors and examples go to <a href="https://api.jquery.com/category/selectors" target="_blank">https://api.jquery.com//category/selectors</a>.</p>
       <table cellspacing="0" cellpadding="0">
  			<thead>
  				<tr>
  					<th class="left_th_colored">Syntax</th>
  					<th class="right_th_colored">Description</th>
  				</tr>
  			</thead>
  			<tbody>
  				<tr>
  					<td class="left_td_colored">E</td>
  					<td class="right_td_colored">Matches all elements with tag name E.</td>
  				</tr>
                 <tr>
  					<td class="left_td_colored">.i</td>
  					<td class="right_td_colored">Matches all elements with the id i.</td>
  				</tr>
                <tr>
  					<td class="left_td_colored">.c</td>
  					<td class="right_td_colored">Matches all elements with the class c.</td>
  				</tr>
  				<tr>
  					<td class="left_td_colored">E F</td>
  					<td class="right_td_colored">Matches all elements with tag name F that are descendants of E.</td>
  				</tr>
                <tr>
  					<td class="left_td_colored">#i .c</td>
  					<td class="right_td_colored">Matches all elements with class c that are descendants of the element with the id i.</td>
  				</tr>
  				<tr>
  					<td class="left_td_colored">E&gt;F</td>
  					<td class="right_td_colored">Use E##F. ## is converted to &gt;. Matches all elements with tag name F that are direct children of E.</td>
  				</tr>
  				<tr>
  					<td class="left_td_colored">E+F</td>
  					<td class="right_td_colored">Matches all elements with tag name F that are immediately preceded by a sibling of tag name E.</td>
  				</tr>
  				<tr>
  					<td class="left_td_colored">E~F</td>
  					<td class="right_td_colored">Matches all elements with tag name F that are preceded by any sibling of tag name E.</td>
  				</tr>
  				<tr>
  					<td class="left_td_colored">E.c</td>
  					<td class="right_td_colored">Matches all elements E that possess a class name of c. Omitting E is identical to *.c.</td>
  				</tr>
  				<tr>
  					<td class="left_td_colored">E#i</td>
  					<td class="right_td_colored">Matches all elements E that possess an id value of i. Omitting E is identical to *#i.</td>
  				</tr>
					<tr>
  					<td class="left_td_colored">E[a]</td>
  					<td class="right_td_colored">Matches all elements E that posses an attribute a of any value.</td>
  				</tr>
  				<tr>
  					<td class="left_td_colored">E[a=v]</td>
  					<td class="right_td_colored">Matches all elements E that posses an attribute a whose value is exactly v.</td>
  				</tr>
  				<tr>
  					<td class="left_td_colored">E[a^=v]</td>
  					<td class="right_td_colored">Matches all elements E that posses an attribute a whose value starts with v.</td>
  				</tr>
					<tr>
  					<td class="left_td_colored">E[a$=v]</td>
  					<td class="right_td_colored">Matches all elements E that posses an attribute a whose value ends with v.</td>
  				</tr>
  				<tr>
  					<td class="left_td_colored">E[a*=v]</td>
  					<td class="right_td_colored">Matches all elements E that posses an attribute a whose value contains v.</td>
  				</tr>
  				
				</tbody>
				</table>
        
        <h4>Additional useful selectors</h4>
      <p>These selectors are basic filters provided by jQuery I found useful using in this plugin. For more selectors and examples go to <a href="https://api.jquery.com/category/selectors" target="_blank">https://api.jquery.com//category/selectors</a>.</p>
       <table cellspacing="0" cellpadding="0">
  			<thead>
          <tr>
  					<td class="left_td_colored">E:not(selector)</td>
  					<td class="right_td_colored">Remove elements from the set of matched elements.</td>
  		  </tr>
          <tr>
  					<td class="left_td_colored">E:eq(index)</td>
  					<td class="right_td_colored">Select the element at index n within the matched set.</td>
  			</tr>
           <tr>
  					<td class="left_td_colored">E:last()</td>
  					<td class="right_td_colored">Selects the last matched element.</td>
  				</tr>
           <tr>
  					<td class="left_td_colored">E:nth-child(index)</td>
  					<td class="right_td_colored">Selects all elements that are the nth-child of their parent.</td>
  				</tr>
        	</tbody>
				</table>
        
        <h4>Examples</h4>
        <ul>
		<li>$("div") selects all &lt;div&gt; elements</li>
		<li>$("div a") selects all &lt;a&gt; elements within &lt;div&gt; elements</li>
		<li>$("li##p") selects all &lt;p&gt; elements that are direct children of &lt;li&gt; elements</li>
		<li>$("p:has(b)") selects all &lt;p&gt; elements that contain a &lt;b&gt; element</li>
		<li>$("div.someClass") selects all &lt;div&gt; elements with a class name of someClass</li>
		<li>$(".someClass") selects all elements with class name someClass</li>
		<li>$("#testButton") selects the element with the id value of testButton</li>
		<li>$("img[alt]") selects all &lt;img&gt; elements that possess an alt attribute</li>
		<li>$("a[href$=.pdf]") selects all &lt;a&gt; elements that possess an href attribute that ends in .pdf</li>
        <li>$("a[href=\'example.html\']") selects all &lt;a&gt; elements that has the href example.html</li>
        <li>$("a[href*=\'example.html\']") selects all &lt;a&gt; elements where the href does contain example.html</li>
        <li>$("a[href^=\'https://www.tinywebgallery.com\']") selects all &lt;a&gt; elements that has a href that starts with https://www.tinywebgallery.com</li>
        <li>$("a:not([href^=\'https://www.tinywebgallery.com\'])") selects all &lt;a&gt; elements that has a href that does NOT start with https://www.tinywebgallery.com. This can be used to detect external links and add target="_blank" there.</li>
        <li>$("button[id*=test]") selects all buttons whose id attributes contain test</li>
        <li>$("tr:not(.keep)") selects all table row that don\'t have the class "keep"</li>
        <li>$("table:nth-child(1)") selects the 2nd row of a table</li>
				</ul>
        <p>You can create the union of multiple disparate selectors by listing them, separated by commas. For example, the following matches all &lt;div&gt; and &lt;p&gt; elements: div,p</p>
         
       <h3>Usage in Advanced iframe</h3>
       Above the default usage in jQuery is shown in the examples In Advanced iFrame the jQuery part is already rendered by the plugin. Therefore you only need to specify the selector. Also the following two rules apply: 
       
       <ol>
       <li><b>Only single quotes are allowed</b>. So please always use \' and never ".</li>
       <li>Because brackets [ ... ] are replaced in the short code by Wordpress you need to <b>replace [...] them with {{ ... }}</b></li>
       </ol>
       <b>Examples:</b>
       <ul>
         <li>$("div") -> div</li>
          <li>$("#id1") -> #id1</li>
         <li>$("p:has(b)") -> p:has(b)</li>
         <li>$("a[href$=.pdf]") -> a{{href$=.pdf}}</li> 
         <li>a[href="example.html"] -> a{{href=\'example.html\'}}</li>
       </ul>
      </div>    
      ', 'advanced-iframe');

} else {
      _e('<p>Please go to the jQuery API <a target="_blank" href="https://api.jquery.com/category/selectors/">https://api.jquery.com/category/selectors/</a> for the official documentation.
          </p>
          <p>
          The <strong>advanced iframe pro</strong> version has an included jQuery help with examples.
          </p>
          ', 'advanced-iframe');
     }
	
	aiPostboxClose();	
?>