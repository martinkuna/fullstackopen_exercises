# [Exercises 0.1-0.6](https://fullstackopen.com/en/part0/fundamentals_of_web_apps#exercises-0-1-0-6)

## 0.1: HTML
:heavy_check_mark:

## 0.2: CSS
:heavy_check_mark:

## 0.3: HTML forms
:heavy_check_mark:

## 0.4: New note diagram
```mermaid
sequenceDiagram
    participant browser
    participant server
    
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    Note right of browser: When the form button is clicked, the browser sends the form data in the payload of the HTTP POST
    server-->>browser: Responds with HTTP status code 302
    deactivate server
    Note left of server: Server asks the browser to do a new HTTP GET request to the address defined in the header's Location /exampleapp/notes

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML document
    deactivate server
    Note right of browser: The browser reloads /exampleapp/notes as requested, which causes the next 3 HTTP GET requests
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: CSS stylesheet
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server
    
    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{content: "el chapo", date: "2023-02-09T04:02:15.130Z"}, ... ]
    deactivate server    
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    Note right of browser: The browser executes the callback function that renders the notes
```

## 0.5: Single page app diagram
```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: HTML document
    deactivate server
    Note right of browser: The user visits the single page app, which generates the next 3 HTML GET requests

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: CSS stylesheet
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server
    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{content: "el chapo", date: "2023-02-09T04:02:15.130Z"}, ... ]
    deactivate server
```

## 0.6: New note in Single page app diagram
```mermaid
sequenceDiagram
    participant browser
    participant server
    
    Note right of browser: The user enters text into the HTML form and submits it
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa with payload: {content: "el chapo 2", date: "2023-02-09T05:02:34.572Z"}
    Note right of browser: The browser executes the callback function that renders the notes locally and then sends the note to the server
    server-->>browser: {"message":"note created"}
```
