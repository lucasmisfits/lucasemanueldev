import React from 'react';
import styled from 'styled-components';

const StyledProfilePicture = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid #ff2e63;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ProfilePicture = ({ src }) => {
  return (
    <StyledProfilePicture>
      <ProfileImage src={src} alt="Foto de perfil" />
    </StyledProfilePicture>
  );
};

export default ProfilePicture;
