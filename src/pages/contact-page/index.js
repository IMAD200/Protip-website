import React from "react";
import { ContactDivContainer, ContactIframe } from "./style";

const ContactPage = () => {

    React.useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 1600px)')

        if (mediaQuery.matches) {
            document.body.style.backgroundImage = "url('https://i.imgur.com/OE6pchQ.jpg')";
          }

        const mediaQuery2 = window.matchMedia('(width: 1920px)')

          if (mediaQuery2.matches) {
              document.body.style.backgroundImage = "url('https://i.imgur.com/IhVODPr.jpg')";
            }
        
      }, []);

    return (
        <ContactDivContainer>
            <ContactIframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSem5lNNgs6YY3tBWLDaQg9UMquSo4HeV4oxq6spq2RA-kwKqg/viewform?embedded=true" 
                width="600" 
                height="600" 
                frameborder="0" 
                marginheight="0" 
                marginwidth="0">
                Loading…
            </ContactIframe>
        </ContactDivContainer>
        )
};

export default ContactPage;