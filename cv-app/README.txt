This web app focuses on presenting a CV in a more intuitive and functional way.
Within the app, standard CV creation practices are followed however adapted in a way
that uses REACT.js as a framework for its creation


Main extensions Used:
Visual Studio Code Extensions:
    ES7 React/Redux/GraphQL/React-Native snippets
    
    HTML CSS Support
        - Automatic HTML tag completion
        - General attribute searching
        - Ability to search through available functions/

Imports:
    { Route, Switch } from 'react-router-dom'

Due to being away from home for graduation ceremonies and house viewings, development time was short.
Below are the consideration taken if I was to redo the app:

 - Additional pages: routing was used during the crash course however removed to implement a single page CV.
        Additional pages could be added such as a contact form for getting in touch and a projects page for displaying
        featured projects that have been developed

 - Touch-ups:
        In general, learning more CSS and HTML alongside with how they integrate into React.js would allow
        for general touch-ups and more advanced customisation and styling. One such area would be to make
        more effective use of the left over whitespace. Once such way would be to provide multiple cards
        on the screen and selecting one would bring up a modal window of the card, bringing it into focus.

 - Component changes:
         Separation of body components would be ideal if re-made. Separating CV categories into
        their own components allowing for easier management of the data within and specific styling/react usage
        instead of a general 'BodyItem' being made.

        Especially with how skills and work experience were implemented, re-done, this would be a lore more streamlined and
        utlise more of REACTs functionality to be able to better create these pages

 - Links:
        Links were used in the crash course however omitted from this due to finalising overall CV and time.
        Links would be implemented if re-done, adding a direct link to LinkedIn and potentially even a link
        to open google maps at town location.

 - Data/Naming-Data:
        To speed things up, data names were simply marked via a numbering system. Re-doing the project, this would
        change to be more consistent with the expected data to be included in the field and any additional ones added
        via alternative techniques rather as to prevent repetitive code snippets

 - Responsiveness:
        Additional components and functionality would allow for a better demonstration of Responsiveness. If re-done, the above
        analysis will be approached and with that, an additional feature set allowing for the better showcasing of REACT 
