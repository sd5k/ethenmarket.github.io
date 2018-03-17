import styled from 'styled-components';
import colorUtil from 'color';

export default styled.button`
  background-color: ${ props => props.color || '#16899b' };
  border: none;
  height: 36px;
  min-width: ${ props => `${props.width}px` };
  color: ${props => props.textColor || 'white'};
  text-transform: uppercase;
  font-size: 0.9rem;
  border-radius: 2px;
  cursor: pointer;

  &:active, &:focus {
    outline: none;
    box-shadow: 0 0 4px ${ ({color = "#16899b"}) => colorUtil(color).alpha(0.7).string() };
  }
`;