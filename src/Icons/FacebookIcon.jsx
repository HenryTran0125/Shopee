import styled from "styled-components";

const Facebook = styled.svg`
  height: 18px;
  width: 18px;
  border: 2px solid white;
  background-color: #fff;
  border-radius: 50%;
  cursor: pointer;
`;
const FacebookFillPath = styled.path`
  fill: #f53d2d;
`;

function FacebookIcon() {
  return (
    <Facebook
      xmlns="http://www.w3.org/2000/svg"
      width="128"
      height="128"
      viewBox="0 0 24 24"
    >
      <FacebookFillPath d="M15.997 4.485h2.191V.669C17.81.617 16.51.5 14.996.5c-3.159 0-5.323 1.987-5.323 5.639V9H6.187v4.266h3.486V24h4.274V13.267h3.345l.531-4.266h-3.877V6.562c.001-1.233.333-2.077 2.051-2.077z" />
      <FacebookFillPath d="M14.087 24h-4.006a.75.75 0 0 1-.75-.75v-9.312H6.812a.75.75 0 0 1-.75-.75v-4a.75.75 0 0 1 .75-.75H9.33V6.037c0-3.723 2.2-6.036 5.74-6.036 1.54 0 2.78.122 3.093.165a.75.75 0 0 1 .648.743v3.578a.75.75 0 0 1-.75.75h-2.054c-1.026 0-1.172.255-1.172 1.197v2.005h2.885a.75.75 0 0 1 .744.842l-.498 4a.75.75 0 0 1-.744.657h-2.387v9.312a.748.748 0 0 1-.748.75zm-3.256-1.5 2.506.001v-9.312a.75.75 0 0 1 .75-.75h2.474l.312-2.5h-2.786a.75.75 0 0 1-.75-.75V6.434c0-.667 0-2.697 2.672-2.697h1.304v-2.15a29.948 29.948 0 0 0-2.242-.087c-2.695 0-4.24 1.653-4.24 4.536v3.151a.75.75 0 0 1-.75.75H7.562v2.5h2.518a.75.75 0 0 1 .75.75V22.5z" />
    </Facebook>
  );
}

export default FacebookIcon;
