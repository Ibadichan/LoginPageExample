import React from 'react';

function CurrentUserDetails(props) {
  const {
    user,
  } = props;

  return (
    <dl>
      <dt>User ID</dt>
      <dd>{user.id}</dd>

      <dt>User email</dt>
      <dd>{user.profile.email.address}</dd>

      <dt>User balance</dt>
      <dd>{user.balance.amount}</dd>
    </dl>
  );
}

export default CurrentUserDetails;
