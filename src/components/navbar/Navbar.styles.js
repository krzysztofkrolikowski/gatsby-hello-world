import styled from 'styled-components';

export const Nav = styled.nav({
  padding: '0 50px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  // backgroundColor: '#3f93d0',
  background: 'linear-gradient(to right, #1968CF 0%, #042a5b 100%)',

  '.active': {
    color: 'white',
  },

});

export const Logo = styled.h3({
  color: 'white',
});
