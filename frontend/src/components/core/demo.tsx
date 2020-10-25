import React from "react";
import styled, { keyframes } from "styled-components";

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props: any) => (props.primary ? "palevioletred" : "white")};
  color: ${(props: any) => (props.primary ? "white" : "palevioletred")};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

// This could be react-router-dom's Link for example
const Link = ({ className, children }: any) => (
  <a className={className}> {children}</a>
);

const StyledLink = styled(Link)`
  color: palevioletred;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${(props: any) => props.inputColor || "palevioletred"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

const Input2 = styled.input.attrs((props: any) => ({
  type: "text",
  size: props.size || "1em",
}))`
  border: 2px solid palevioletred;
  margin: ${(props: any) => props.size};
  padding: ${(props: any) => props.size};
`;

// Input's attrs will be applied first, and then this attrs obj
const PasswordInput = styled(Input2).attrs({
  type: "password",
})`
  // similarly, border will override Input's border
  border: 2px solid aqua;
`;

/// Efectos
// Create the keyframes
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

// Here we create a component that will rotate everything we pass in over two seconds
const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;

export const DemoStyledComponet = () => (
  <Wrapper>
    <Title>Hello World!</Title>
    <Button>Normal</Button>
    <Button>Primary</Button>
    <Link>Unstyled, boring Link</Link>
    <br />
    <StyledLink>Styled, exciting Link</StyledLink>
    <Input defaultValue="@probablyup" type="text" />
    {/* <Input defaultValue="@geelen" type="text" inputColor="rebeccapurple" /> */}
    {/* / */}
    <Input2 placeholder="A bigger text input" size="2em" />
    <br />
    {/* 
    <PasswordInput placeholder="A bigger password input" size="2em" /> */}
    <Rotate>&lt; 💅🏾 &gt;</Rotate>
  </Wrapper>
);
