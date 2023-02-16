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
