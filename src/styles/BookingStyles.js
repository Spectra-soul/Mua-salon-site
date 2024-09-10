import styled from 'styled-components';

export const BookingContainer = styled.div`
  padding: 60px 0px;
  text-align: center;

  .heading {
    padding-bottom: 60px;
  }

  .b-header{
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


  .form-style {
    margin: 10px auto;
    padding: 50px 0px;
    width: 380px;
    justify-content: center;
    background-color: #fff;
    border-radius: 50px;
  }
  
  /* Media Queries for Responsive Design */
@media (max-width: 500px and min-width: 400.01px) {
  .form-style {
    width: 75%;
    padding: 50px 0px;
  }
}



@media (max-width: 400px) {
  .form-style {
    width: 90%; 
    padding: 45px 15px; 
  }
}
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  input, textarea {
    width: 300px;
    padding: 10px;
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  textarea {
    height: 80px;
  }

  button {
    padding: 10px 20px;
    margin: 10px;
    background-color: #ad7719;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  button:hover {
    background-color: #f4bd5fe8;
  }

  @media (max-width: 385px) {
  input, textarea {
    width: 90%; 
    font-size: 12px; 
    padding: 5px;
  }

  button {
    font-size: 10px; 
  }
}
`;
