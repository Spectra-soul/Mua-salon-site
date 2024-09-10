import styled from 'styled-components';

export const FooterContainer = styled.div`
  background-color: #333;
  color: white;
  padding: 20px;
  position: relative;
  bottom: 0;
  width: 100%;
  justify-items: center;
  z-index: 1000;

  .fcontent {
    display: flex;
    flex-wrap: wrap;
    padding: 50px;
    justify-content: space-between;
    overflow: hidden;
  }
  
  .footer-div1 {
    width: 34%;
    padding-right: 20px;
  }

  .footer-title {
    font-family: 'fantasy';
    font-size: 22px;
  }

  .footer_info {
    font-style: italic;
  }

  .fcontent ul {
    list-style-type: none;
    padding-top: 10px;
  }

  .fcontent li {
    padding-bottom: 20px;
  }
  
  .footer-points {
    font-family: DejaVu Sans Mono, monospace;
    padding-left: 10px;
  }

  .footer-div2 {
    width: 22%;
    padding-left: 50px;
  }


  /* Footer bottom */
  .f-bottom {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  .footer-links {
    display: flex;
    flex-wrap: wrap;
    width: 30%;
    padding-left: 20px;
    padding-right: 20px;
  }
  
  .f-bottom ul {
    list-style-type: none;
    display: flex;
    padding-left: 20px;
  }

  .f-bottom li {
    padding-left: 20px;
  }

  .footer-links .socials {
    width: 100%;
    justify-content: center;
    align-items: center;
  }

  .footer-copyright {
    width: 40%;
    text-align: center;
  }

@media (max-width: 1080px) {
  .fcontent {
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* 2 columns */
    grid-gap: 10px; /* Space between the columns */
  }

  .footer-div1,
  .footer-div2{
    width: 90%;
    margin-right: 10px;
  }
  
  .f-bottom {
    display: column;
  }

}

@media (max-width: 768px) {
  .fcontent {
    grid-template-columns: 1fr;
  }

  .footer-div1 {
    width: 90%;
    padding-right: 10px;
  }
  
  .footer-div2 {
    width: 90%;
    padding: 0px;
  }

  .f-bottom {
    display: grid;
    justify-content: center;
  }

  .footer-links {
    width: 100%;
  }
  .footer-links .socials {
    justify-content: center;
    align-items: center;
  }

  .footer-copyright {
    width: 100%;
    text-align: center;
  }

}

`;
