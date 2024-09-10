import styled from 'styled-components';

export const ContactContainer = styled.div`
  padding: 60px 0px;
  text-align: center;

  .heading {
    padding-bottom: 60px;
  }

  .c-header{
    padding: 30px;
    background-color: #696a6a;
  }

  h2 {
    color: #fff;
    font-family: 'fantasy';
    font-size: 35px;
  }
  
  p {
    color: #fff;
    font-family: 'fantasy';
    font-size: 16px;
  }

  .text {
    color: #111;
    font-family: 'fantasy';
    font-size: 35px;
    text-align: center;
    padding-bottom: 30px;
  }

  .form-style {
    margin: 10px auto;
    padding: 30px; 
    width: 800px;
    justify-content: center;
    border-radius: 10px;
    transition: width 0.3s ease;
  }
  
  /* Media Queries for Responsive Design */
@media (max-width: 1024px) {
  .form-style {
    width: 600px; 
  }
}

@media (max-width: 768px) {
  .form-style {
    width: 90%; 
    padding: 20px; 
  }
}

@media (max-width: 480px) {
  .form-style {
    width: 95%; 
    padding: 15px; 
  }
}
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  input, textarea {
    width: 90%;
    padding: 10px;
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box; 
    transition: width 0.3s ease; 
  }
  
  textarea {
    height: 100px;
  }

  button {
    padding: 10px 20px;
    background-color: #ad7719;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-align: center;
  }

  button:hover {
    background-color: #f4bd5fe8
  }
  
  /* Media Queries for form inputs */
  @media (max-width: 768px) {
    input, textarea {
      width: 100%; 
    }
  }
  
  @media (max-width: 480px) {
    input, textarea {
      width: 100%;
      font-size: 12px; 
    }

    button {
      width: 100%;
      font-size: 12px;
    }
  }
`;
