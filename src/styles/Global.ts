import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
  }

  html {
  font-size: 16px;
  } 

  button{
    cursor: pointer;
  }

  :root{
  --color-primary-1:#90B2E6;

  --color-white: #ffffff;
  --grey-0:#F5F5F5;
  --grey-1:#E8E8E8;
  --grey-2:#858585;
  --grey-3:#696969;
  --grey-4:#5E5E5E;
  --grey-5:#464646;
  --grey-6:#252525;

  --font-size-10: 0.625rem;
  --font-size-12: 0.75rem;
  --font-size-14: 0.875rem;
  --font-size-16: 1rem;
  --font-size-18: 1.125rem;
  --font-size-20: 1.25rem;
  --font-size-22: 1.375rem;
  --font-size-24: 1.5rem;
  --font-size-26: 1.625rem;
  --font-size-30: 1.875rem;
  --font-size-32: 2rem;
  --font-size-36: 2.25rem;
  --font-size-38: 2.375rem;
  --font-size-40: 2.5rem;
  --font-size-42: 2.625rem;
  --font-size-64: 4rem;
  --font-size-80: 5rem;
  
  --font-weight-400: 400;
  --font-weight-500: 500;
  --font-weight-600: 600;
  --font-weight-700: 700;
  --font-weight-800: 800;
  
  --border-radius-4: 4px;
  --border-radius-5: 5px;
  --border-radius-8: 8px;
  --border-radius-15: 15px;
  --border-radius-20: 20px;
  --border-radius-50: 50px;
}

  body, option, input{
    font-family: 'Inter', sans-serif;
    
  }
  
  input::placeholder {
    font-family: 'Inter', sans-serif;

  }

`
