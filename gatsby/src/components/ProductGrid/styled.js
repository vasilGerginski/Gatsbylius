import styled from "styled-components";
import { Link } from "gatsby";
import { spacing, color } from "../../helpers/themeHelpers";

export const GalleryItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.5rem;
  margin-bottom: 2rem;
  background-color: #fff;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
`;

export const GalleryItemLink = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  align-items: center;
`;

export const Infos = styled.div`
  margin-top: ${spacing(["xs"])};
  font-size: 0.9rem;
  color: ${color("black")};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
