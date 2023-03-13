# startup
Caleb Barton
<br>
CS 260 
<br>
BYU Winter Semester 2023
<br>
repo for startup website
<br>
I have never done web development before, so don't make too much fun of me. 
* Creating a merge issue

## What did I learn?
I need to spend more time with GitHub. I am familiar with it, but I think that as I make commits more often
I will be quicker at using it. It took me a while to figure out how to resolve the merge issue (that's why we
have stack overflow). I am going to start using it for more than just the coding I do in this class, but also
for my other classes that I am in right now. 

## Startup
For my startup application I want to create an app that merges learningsuite with canvas. These are both great learning tools, but I have always been annoyed with having to use both. I wish we could use one or the other. So that is where I got my idea to create my own learning dashboard that merges the two using canvas' API, and for BYU's I guess copy and paste of the prioritzer list will have to due. Unless learning suite has an API I can use. It will have account creation, the basic CRUD functions(CREATE, READ, UPDATE, DELETE), API integration, database storage, and a mobile version. 

## Elevator Pitch
Have you ever been annoyed with having to use learningsuite alongside with canvas? You just want all of your
courses to be in one spot? Look no further, with ScheduleBuilder you can easily combine your coursework materials from learningsuite with those from canvas in one easy to use application!

![homepage](pic1.png)
![dashboard](pic2.png)

## EC2
It's crazy how many web servers are out there.
How do routes dynamically assign a path to its 
destination?

## Route 53
hostname is schedulebuilder.click AWS can be 
buggy, make sure you clear browsing data to ensure everything is up. 

## HTTPS, TLS, and certificates
Caddy then either serves up the requested static files (gateway) or routes the request to another 
web service(reverse proxy)

## HTML Introduction 
### Common elements

Modern HTML contains over 100 different elements. Here is a short list of HTML elements that you will commonly see.

| element   | meaning                                                                |
| --------- | ---------------------------------------------------------------------- |
| `html`    | The page container                                                     |
| `head`    | Header information                                                     |
| `title`   | Title of the page                                                      |
| `meta`    | Metadata for the page such as character set or viewport settings       |
| `script`  | JavaScript reference. Either a external reference, or inline           |
| `include` | External content reference                                             |
| `body`    | The entire content body of the page                                    |
| `header`  | Header of the main content                                             |
| `footer`  | Footer of the main content                                             |
| `nav`     | Navigational inputs                                                    |
| `main`    | Main content of the page                                               |
| `section` | A section of the main content                                          |
| `aside`   | Aside content from the main content                                    |
| `div`     | A block division of content                                            |
| `span`    | An inline span of content                                              |
| `h<1-9>`  | Text heading. From h1, the highest level, down to h9, the lowest level |
| `p`       | A paragraph of text                                                    |
| `b`       | Bring attention                                                        |
| `table`   | Table                                                                  |
| `tr`      | Table row                                                              |
| `th`      | Table header                                                           |
| `td`      | Table data                                                             |
| `ol,ul`   | Ordered or unordered list                                              |
| `li`      | List item                                                              |
| `a`       | Anchor the text to a hyperlink                                         |
| `img`     | Graphical image reference                                              |
| `dialog`  | Interactive component such as a confirmation                           |
| `form`    | A collection of user input                                             |
| `input`   | User input field                                                       |
| `audio`   | Audio content                                                          |
| `video`   | Video content                                                          |
| `svg`     | Scalable vector graphic content                                        |
| `iframe`  | Inline frame of another HTML page                                      |

## Comments

You can include comments in your HTML files by starting the comment with `<!--` and ending it with `-->`. Any text withing a comment block will be completely ignored when the browser renders it.

```html
<!-- commented text -->
```

### Special characters

HTML uses several reserved characters for defining its file format. If you want to use those characters in your content then you need to escape them using the `entity` syntax. For example, to display a less than symbol (`<`) you would instead use the less than entity (`&lt;`). You can also use the entity syntax to represent any unicode character.

| Character | Entity      |
| --------- | ----------- |
| &amp;     | `&amp;`     |
| <         | `&lt;`      |
| >         | `&gt;`      |
| "         | `&quot;`    |
| '         | `&apos;`    |
| &#128512; | `&#128512;` |

## HTML Structure Elements
This will help you to remember how each element is layed out physically. 
![HTML Structure](htmlElementsVisula.png)

## HTML Simon
* ./deployFiles.sh -k <keyfile> -h <yourdomain> -s simon
* I need to review the path tag better and how it works for SVGs
  I understand that M moves the cursor to a certain point, and Q 
  draws curves, but I don't understand how the coordinate system
  works. It doesn't seem as simple as an x,y coordinate system
* Remember organizational tags like main, header, div, span, etc. 
* Writing comments out is super helpful for code organization, 
  and overall thought process. 

## The box model

CSS defines everything as boxes. When you apply styles, you are applying them to a region of the display that is a rectangular box. Within an element's box there are several internal boxes. The innermost box holds the element's content. This is where things like the text or image of an element is displayed. Next comes the padding. The padding will inherit things like the background color. After padding is the border, which has properties like color, thickness and line style. The final box is the margin. The margin is considered external to the actual styling of the box and therefore only represents whitespace. It is important to understand each of these boxes so that you can achieve the desired visual result by applying the proper CSS declaration.

![CSS box model](cssBoxModel.jpg)

By default, the width and height of an element is defined by the width and height of the content box. You can change the `box-sizing` CSS property from the default value of `content-box` to `border-box` in order to redefine the width and height to also include the padding and the border. This often makes it easier to style elements when their visual size matches their actual size.
  
| Value  | Meaning                                                                                                                      |
| ------ | ---------------------------------------------------------------------------------------------------------------------------- |
| none   | Don't display this element. The element still exists, but the browser will not render it.                                    |
| block  | Display this element with a width that fills its parent element. A `p` or `div` element have block display by default.       |
| inline | Display this element with a width that is only as big as its content. A `b` or `span` element have block display by default. |
| flex   | Display this element's children in a flexible orientation.                                                                   |
| grid   | Display this element's children in a grid orientation.                                                                       |

## Simon CSS lessons learned
* Always use a CSS framework, it makes deciding colors so much easier
* Learn as many frameworks as you can, they are so cool

## Start HTML & CSS lessons learned
  * Bootstrap is awesome, it makes the CSS go by a lot quicker. You can waste a lot of time messing with CSS
  * Some functionalities of bootstrap require a script. Make sure you import it at the body of your html pages 
  right before the closing body tag
  * I need to spend more time messing with the display CSS rules, and position rules.
  * Organization and planning is key. Without them your development process will be one big headache. 

## JavaScript DOM Lessons Learned
* Make sure you really plan out your code and think it in your head before you start implementing it. 
* Visualize the end result
* MDN docs are your best friend
* Don't overcomplicate the code

## Async Await Lessons Learned
* Even though using promises are easier for me to understand Async and Await are used more frequently
* This page is extremely helpful: https://rapidapi.com/guides/fetch-api-async-await?utm_source=google&utm_medium=cpc&utm_campaign=DSA&utm_term=_&gclid=Cj0KCQiA6fafBhC1ARIsAIJjL8mNvyac3L6ZUmFbOhbPQaEQQECfyjDNZbeZTDiilrYTRvTKYIxXfN0aAiMhEALw_wcB

## Simon Javascript Lesson Learned
* Scripts need to be placed at the bottom of the html page to load the html before the JavaScript
is run. 
* Wherever a script tag is placed is when it will 
be ran. That way you can run methods in the order
you specify. 
* ```Array.from()``` method according to MDN web docs creates a new, shallow-copied ```Array``` instance from 
an iterable or array-like object. 
```
console.log(Array.from([1,2,3], x => x + x));
// Expected output: Array [2,4,6]
```

## Startup Javascript Lesson Learned
* Plan out how you will organize your code and what operations you will need. Objects need to be thought
out in detail, explaining how they will be manipulated, stored, etc. This will save you the headache.

## URL Lesson Things to Remember 
| Part        | Example                              | Meaning                                                                                                                                                                                                                                                                             |
| ----------- | ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Scheme      | https                                | The protocol required to ask for the resource. For web applications, this is usually HTTPS. But it could be any internet protocol such as FTP or MAILTO.                                                                                                                            |
| Domain name | byu.edu                              | The domain name that owns the resource represented by the URL.                                                                                                                                                                                                                      |
| Port        | 3000                                 | The port specifies the numbered network port used to connect to the domain server. Lower number ports are reserved for common internet protocols, higher number ports can be used for any purpose. The default port is 80 if the scheme is HTTP, or 443 if the scheme is HTTPS.     |
| Path        | /school/byu/user/8014                | The path to the resource on the domain. The resource does not have to physically be located on the file system with this path. It can be a logical path representing endpoint parameters, a database table, or an object schema.                                                    |
| Parameters  | filter=names&highlight=intro,summary | The parameters represent a list of key value pairs. Usually it provides additional qualifiers on the resource represented by the path. This might be a filter on the returned resource or how to highlight the resource. The parameters are also sometimes called the query string. |
| Anchor      | summary                              | The anchor usually represents an sub-location in the resource. For HTML pages this represents a request for the browser to automatically scroll to the element with an ID that matches the anchor. The anchor is also sometimes called the hash, or fragment ID. 

## Ports Lesson Things to Remember
| Port | Protocol                                                                                           |
| ---- | -------------------------------------------------------------------------------------------------- |
| 20   | File Transfer Protocol (FTP) for data transfer                                                     |
| 22   | Secure Shell (SSH) for connecting to remote devices                                                |
| 25   | Simple Mail Transfer Protocol (SMTP) for sending email                                             |
| 53   | Domain Name System (DNS) for looking up IP addresses                                               |
| 80   | Hypertext Transfer Protocol (HTTP) for web requests                                                |
| 110  | Post Office Protocol (POP3) for retrieving email                                                   |
| 123  | Network Time Protocol (NTP) for managing time                                                      |
| 161  | Simple Network Management Protocol (SNMP) for managing network devices such as routers or printers |
| 194  | Internet Relay Chat (IRC) for chatting                                                             |
| 443  | HTTP Secure (HTTPS) for secure web requests                                                        |

## HTTP Lessons Learned
| Code | Text                                                                                 | Meaning                                                                                                                           |
| ---- | ------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------- |
| 100  | Continue                                                                             | The service is working on the request                                                                                             |
| 200  | Success                                                                              | The requested resource was found and returned as appropriate.                                                                     |
| 201  | Created                                                                              | The request was successful and a new resource was created.                                                                        |
| 204  | No Content                                                                           | The request was successful but no resource is returned.                                                                           |
| 304  | Not Modified                                                                         | The cached version of the resource is still valid.                                                                                |
| 307  | Permanent redirect                                                                   | The resource is no longer at the requested location. The new location is specified in the response location header.               |
| 308  | Temporary redirect                                                                   | The resource is temporarily located at a different location. The temporary location is specified in the response location header. |
| 400  | Bad request                                                                          | The request was malformed or invalid.                                                                                             |
| 401  | Unauthorized                                                                         | The request did not provide a valid authentication token.                                                                         |
| 403  | Forbidden                                                                            | The provided authentication token is not authorized for the resource.                                                             |
| 404  | Not found                                                                            | An unknown resource was requested.                                                                                                |
| 408  | Request timeout                                                                      | The request takes too long.                                                                                                       |
| 409  | Conflict                                                                             | The provided resource represents an out of date version of the resource.                                                          |
| 418  | [I'm a teapot](https://en.wikipedia.org/wiki/Hyper_Text_Coffee_Pot_Control_Protocol) | The service refuses to brew coffee in a teapot.                                                                                   |
| 429  | Too many requests                                                                    | The client is making too many requests in too short of a time period.                                                             |
| 500  | Internal server error                                                                | The server failed to properly process the request.                                                                                |
| 503  | Service unavailable                                                                  | The server is temporarily down. The client should try again with an exponential back off.                                         |

| Verb    | Meaning                                                                                                                                                                                                                                                  |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GET     | Get the requested resource. This can represent a request to get a single resource or a resource representing a list of resources.                                                                                                                        |
| POST    | Create a new resource. The body of the request contains the resource. The response should include a unique ID of the newly created resource.                                                                                                             |
| PUT     | Update a resource. Either the URL path, HTTP header, or body must contain the unique ID of the resource being updated. The body of the request should contain the updated resource. The body of the response may contain the resulting updated resource. |
| DELETE  | Delete a resource. Either the URL path or HTTP header must contain the unique ID of the resource to delete.                                                                                                                                              |
| OPTIONS | Get metadata about a resource. Usually only HTTP headers are returned. The resource itself is not returned.                                                                                                                                              |

