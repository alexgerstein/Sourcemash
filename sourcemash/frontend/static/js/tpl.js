window.JST = window.JST || {};
var template = function(str){var fn = new Function('obj', 'var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push(\''+str.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/<%=([\s\S]+?)%>/g,function(match,code){return "',"+code.replace(/\\'/g, "'")+",'";}).replace(/<%([\s\S]+?)%>/g,function(match,code){return "');"+code.replace(/\\'/g, "'").replace(/[\r\n\t]/g,' ')+"__p.push('";}).replace(/\r/g,'\\r').replace(/\n/g,'\\n').replace(/\t/g,'\\t')+"');}return __p.join('');");return fn;};
window.JST['browse'] = template("<div class=\"row\">\n    <form class=\"new-feed\" id=\"add_feed_form\">\n      <div id=\"typeahead\" class=\"input-field col s12 m9\">\n      </div>\n      <div class=\"input-field col s12 m3\">\n        <button type=\"submit\" class=\"btn waves-effect waves-light\" name='submit'>Add Feed</button>\n      </div>\n    </form>\n</div>\n\n<ul class=\"browse-feeds row\">\n  <% models.forEach(function(model) { %>\n    <div id=\"feed-card-<%= model.get('id') %>\" class=\"feed-card\"></div>\n  <% }); %>\n</ul>");
window.JST['category'] = template("<h2><%= model.get('category') %></h2>\n\n<ul id=\"items\" class=\"list-group row\">\n  <% items.forEach(function(item) { %>\n      <div id=\"item-<%= item.get('id') %>\" class=\"item-card\"></div>\n  <% }); %>\n</ul>\n\n<div id=\"subscribe-modal\" class=\"modal\">\n  <div class=\"modal-content\">\n    <h4>Interested?</h4>\n    <p>You upvoted \"<span id=\"unsubscribed-item-title\"></span>\" even though you're not subscribed to <i><span id=\"unsubscribed-feed-title\"></span></i>. Would you like to add this feed to your subscriptions?<p>\n  </div>\n  <div class=\"modal-footer\">\n    <a href=\"#\" class=\"subscribe-close waves-effect waves-green btn-flat modal-action modal-close\">Subscribe!</a>\n    <a href=\"#\" class=\"waves-effect waves-green btn-flat modal-action modal-close\">I'll pass...</a>\n  </div>\n</div>");
window.JST['feed-card'] = template("<div class=\"col m6\">\n  <div class=\"card\">\n\n    <div class=\"card-image waves-effect waves-block waves-light\">\n      <a href=\"#/feeds/<%= model.get('id') %>\">\n        <img class=\"activator mark-read\" src=<%= model.get('image_url') %>>\n      </a>\n    </div>\n    \n    <div class=\"card-content\">\n      \n      <div class=\"card-title\">\n        <div class=\"col s9\">\n          <a href=\"#/feeds/<%= model.get('id') %>\" class=\"row\">\n            <%= model.get('title') %>\n          </a>\n        </div>\n        <div class=\"switch subscribe-switch col s3 valign-wrapper\"></div>\n      </div>\n\n      <div class=\"card-action valign-wrapper row\">\n        <p class=\"flow-text\">\n          <%= model.get('description') %>\n        </p>\n      </div>\n\n    </div>\n\n  </div>\n</div>");
window.JST['feed'] = template("<div class=\"row valign-wrapper\">\n    <h2 class=\"col s10 valign\"><%= model.get('title') %></h2>\n\n    <div class=\"switch subscribe-switch col s2 valign-wrapper\"></div>\n</div>\n\n<ul id=\"items\" class=\"list-group row\">\n  <% items.forEach(function(item) { %>\n      <div id=\"item-<%= item.get('id') %>\" class=\"item-card\"></div>\n  <% }); %>\n</ul>\n\n<div id=\"subscribe-modal\" class=\"modal\">\n  <div class=\"modal-content\">\n    <h4>Interested?</h4>\n    <p>You upvoted \"<span id=\"unsubscribed-item-title\"></span>\" even though you're not subscribed to <i><span id=\"unsubscribed-feed-title\"></span></i>. Would you like to add this feed to your subscriptions?<p>\n  </div>\n  <div class=\"modal-footer\">\n    <a href=\"#\" class=\"subscribe-close waves-effect waves-green btn-flat modal-action modal-close\">Subscribe!</a>\n    <a href=\"#\" class=\"waves-effect waves-green btn-flat modal-action modal-close\">I'll pass...</a>\n  </div>\n</div>");
window.JST['item-card'] = template("<div class=\"col m6\">\n  <div class=\"card <%= item.get('unread') ?  '' : 'read' %>\">\n    \n    <div class=\"card-image waves-effect waves-block waves-light\">\n      <img class=\"activator mark-read\" src=<%=item.get('image_url')%>>\n    </div>\n    \n    <div class=\"card-content\">\n      \n      <div class=\"card-title row mark-read grey-text text-darken-4\">\n        <div class=\"col s11 activator\">\n          <%= item.get('title') %>\n        </div>  \n      <div class=\"col s1\"><i class=\"mdi-navigation-more-vert activator right\"></i></div>\n      </div>\n\n      <div class=\"card-action valign-wrapper row\">\n        <div class=\"col s4\"><a href=\"#/categories/<%=item.get('category_1')%>\"><%=item.get('category_1')%></a></div>\n        <div class=\"col s4\"><a href=\"#/categories/<%=item.get('category_2')%>\"><%=item.get('category_2')%></a></div>\n        <div class=\"col s2\">\n          <div class=\"saved\">\n            <i class=\"mdi-action-bookmark<%= item.get('saved') ? '' : '-outline' %> small\"></i>\n          </div>\n        </div>\n        <div class=\"col s2 center-align\" id=\"voting-buttons\">\n          <div class=\"vote upvote <%= item.get('vote') == 1 ?  'active' : '' %>\"><i class=\"small mdi-navigation-expand-less\"></i></div>\n          <div><%= item.get('voteSum') %></div>\n          <div class=\"vote downvote <%= item.get('vote') == -1 ?  'active' : '' %> \"><i class=\"small mdi-navigation-expand-more\"></i></div>\n        </div>\n      </div>\n\n    </div>\n    \n    <div class=\"card-reveal\">\n      <span class=\"card-title grey-text text-darken-4\">\n        <i class=\"mdi-navigation-close right\"></i>\n      </span>\n      <p class=\"flow-text\"><a href=\"<%= item.get('link') %>\"><%= item.get('title') %></a></p>\n      <p class=\"flow-text\"><%= item.get('author') %></p>\n      <p class=\"flow-text summary\"><%= item.get('summary')%></p>\n    </div>\n  </div>\n</div>\n");
window.JST['item'] = template("<div class=\"card\">\n  \n  <div class=\"card-image waves-effect waves-block waves-light\">\n    <img class=\"activator\" src=<%=item.get('image_url')%>>\n  </div>\n  \n  <div class=\"card-content\">\n    \n    <div class=\"card-title row activator grey-text text-darken-4\">\n      <div class=\"col s11\"><%= item.get('title') %></div>\n      <div class=\"col s1\"><i class=\"mdi-navigation-more-vert right\"></i></div>\n    </div>\n\n    <div class=\"card-action valign-wrapper row activator\">\n      <div class=\"col s5\"><a href=\"#/categories/<%=item.get('category_1')%>\"><%=item.get('category_1')%></a></div>\n      <div class=\"col s5\"><a href=\"#/categories/<%=item.get('category_2')%>\"><%=item.get('category_2')%></a></div>\n      <div class=\"col s2 center-align\" id=\"voting-buttons\">\n        <div class=\"vote upvote <%= item.get('vote') == 1 ?  'active' : '' %>\"><i class=\"small mdi-navigation-expand-less\"></i></div>\n        <div><%= item.get('voteSum') %></div>\n        <div class=\"vote downvote <%= item.get('vote') == -1 ?  'active' : '' %> \"><i class=\"small mdi-navigation-expand-more\"></i></div>\n      </div>\n    </div>\n\n  </div>\n  \n  <div class=\"card-reveal\">\n    <span class=\"card-title grey-text text-darken-4\">\n      <i class=\"mdi-navigation-close right\"></i>\n    </span>\n    <p class=\"flow-text\"><a href=\"<%= '#/items/' + item.get('id') %>\"><%= item.get('title') %></a></p>\n    <p class=\"flow-text\"><%= item.get('author') %></p>\n    <p class=\"flow-text summary\"><%= item.get('summary')%></p>\n  </div>\n\n</div>");
window.JST['new-feed-form'] = template("<label>Feed Title or URL</label>\n<input class=\"typeahead\" type=\"text\" id=\"url\">\n<ul class=\"dropdown-menu\"></ul>\n<div class=\"url-errors\"></div>");
window.JST['profile'] = template("<h2>Profile</h2>\n\n<h4 class=\"welcome\">Hello there, <%= model.get('email') %>!</h4>\n\n<a href=\"/register\"><button type=\"submit\" class=\"btn waves-effect waves-light red\" id=\"delete-user\"><i class=\"mdi-action-delete right\"></i>Delete Your Account</button></a>");
window.JST['saved'] = template("<h2>Saved</h2>\n\n<ul id=\"items\" class=\"list-group row\">\n  <% items.forEach(function(item) { %>\n    <% if (item.get('saved')) { %>\n      <div id=\"item-<%= item.get('id') %>\" class=\"item-card\"></div>\n    <% }; %>\n  <% }); %>\n</ul>\n\n<div id=\"subscribe-modal\" class=\"modal\">\n  <div class=\"modal-content\">\n    <h4>Interested?</h4>\n    <p>You upvoted \"<span id=\"unsubscribed-item-title\"></span>\" even though you're not subscribed to <i><span id=\"unsubscribed-feed-title\"></span></i>. Would you like to add this feed to your subscriptions?<p>\n  </div>\n  <div class=\"modal-footer\">\n    <a href=\"#\" class=\"subscribe-close waves-effect waves-green btn-flat modal-action modal-close\">Subscribe!</a>\n    <a href=\"#\" class=\"waves-effect waves-green btn-flat modal-action modal-close\">I'll pass...</a>\n  </div>\n</div>");
window.JST['sidenav'] = template("<ul class=\"sidenav-element\">\n  <li class='logo'><a href=\"/\" class=\"brand-logo\">Sourcemash</a></li>\n\n  <div class=\"lists\">\n    <div class=\"row\">\n      <div class=\"col s12\">\n        <ul class=\"tabs\">\n          <li class=\"tab col s6\"><a class=\"<%= active == 'categories' ? 'active' : ''%>\" href=\"#categories-list\">Categories</a></li>\n          <li class=\"tab col s6\"><a class=\"<%= active == 'feeds' ? 'active' : ''%>\" href=\"#feeds-list\">Feeds</a></li>\n        </ul>\n      </div>\n      <ul id=\"categories-list\" class=\"collection col s12\">\n        <% categories.forEach(function(category) { %>\n          <li class=\"row\"><a href=\"#/categories/<%= category.get('category') %>\" class=\"collection-item\">\n              <span class=\"col s7 truncate\"><%= category.get('category') %></span>\n              <span class=\"badge col s2\"><%=category.get('count')%></span>\n              <% if (category.get('unread_count') > 0) { %>\n                <span class=\"new badge col s3\"><%=category.get('unread_count')%></span>\n              <% }; %>\n          </a></li>\n        <% }); %>\n      </ul>\n      <ul id=\"feeds-list\" class=\"collection col s12\">\n        <% feeds.forEach(function(feed) { %>\n          <% if (feed.get('subscribed')) { %>\n            <li class=\"row\"><a href=\"#/feeds/<%= feed.get('id') %>\" class=\"collection-item\">\n            <span class=\"col s7 truncate\"><%= feed.get('title') %></span>\n            <span class=\"badge col s2\"><%=feed.get('item_count')%></span>\n            <% if (feed.get('unread_count') > 0) { %>\n              <span class=\"new badge col s3\"><%=feed.get('unread_count')%></span>\n            <% }; %>\n            </a></li>\n          <% }; %>\n        <% }); %>\n      </ul>\n    </div>\n  </div>\n</ul>\n\n<div class=\"user-auth row\">\n  <ul class=\"sidenav-element col s12\">\n    <% if (current_user.get('is_authenticated')) { %>\n      <li><a href=\"#/saved\">Saved</a></li>\n      <li><a href=\"/logout\">Logout</a></li>\n    <% } else { %>\n      <li><a href=\"/login\">Login</a></li>\n      <li><a href=\"/register\">Register</a></li>\n    <% } %>\n  </ul>\n</div>\n");
window.JST['splash'] = template("");
window.JST['subscribe-switch'] = template("<label class=\"subscribe-toggle valign\">\n\t<input type=\"checkbox\" <%= model.get('subscribed') ? 'checked' : '' %>>\n\t<span class=\"lever\"></span>\n\t<p><%= model.get('subscribed') ? 'Subscribed' : 'Unsubscribed' %></p>\n </label>");
